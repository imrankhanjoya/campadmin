import { useRouter } from "next/router"

function productDetails(){
    const router = useRouter()
    const productid = router.query.productid

    return(
        <>
        <h2>product details of {productid}</h2>
        <h2>product details vikas</h2>
        </>
        )
}
export default productDetails
