import Api from "../api/ProductApi";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../features/products/filterSlice";
import { useParams } from "react-router-dom";

const useProducts = () =>{
    const [ products, setProducts ] = useState([]);
    const [ categories, setCategories] = useState([]);
    const [ filtered, setFiltered] = useState([]);
    const [ loading, setLoading] = useState (true);

    const { category: categoryFromUrl } = useParams();
    const dispatch = useDispatch();
    const { category, minPrice, maxPrice } = useSelector(state => state.filter);

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const [productsRes, categoriesRes ] = await Promise.all([
                    Api.get('/products?limit=194'),
                    Api.get('/products/categories')
                ]);
                setProducts(productsRes.data.products);
                setCategories(categoriesRes.data);
                setFiltered(productsRes.data.products);
            } catch(error) {
                console.error('Error Loading Data: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [])

    useEffect(() => {
        let result =products;

        if (category !== ''){
            result = result.filter(p => p.category === category);
        }

        result = result.filter(p =>
            ((p.price * (100 - p.discountPercentage)) / 100) >= minPrice &&
            ((p.price * (100 - p.discountPercentage)) / 100) <= maxPrice
        );

        setFiltered(result);
    }, [category, minPrice, maxPrice, products])

    useEffect(() => {
        if (categoryFromUrl) {
            dispatch(setCategory(categoryFromUrl));
        } else {
            dispatch(setCategory(''));
        }
    }, [categoryFromUrl, dispatch]);

    return { products, categories, filtered, loading}
}

export default useProducts;