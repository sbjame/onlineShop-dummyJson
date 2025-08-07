import TermsConditions from "../components/Policy/TermsConditions"
import ShippingReturn from "../components/Policy/ShippingReturn"

const Policy = () =>{
    return(
        <div className="bg-gray-100 gap-20 py-10 pb-20 flex flex-col items-center justify-center">
            <h1 className="text-6xl text-black font-medium text-center my-10 py-10 bg-gray-200 w-[100%]">Policy</h1>
            <ShippingReturn/>
            <TermsConditions/>
        </div>
    )
}

export default Policy