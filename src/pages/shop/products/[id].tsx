import { useRouter } from "next/router"


const SingleProduct = () => {
  const router = useRouter()
  const id = router.query.id

  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  )
}

export default SingleProduct