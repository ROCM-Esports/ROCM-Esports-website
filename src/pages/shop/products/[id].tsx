import { useRouter } from "next/router"



const SingleProduct = () => {
  const router = useRouter()
  const id = router.query.id

  return (
    <div>
      <h1>Product {id}</h1>
      {/* a button to checkout the current product */}
      <form action="/api/checkout/checkout_session" method="post">
        <input type="hidden" name="product_id" value={id} />
        <input type="number" name="quantity"/>
        <button type="submit" name="submit" >checkout</button>
      </form>
    </div>
  )
}

export default SingleProduct