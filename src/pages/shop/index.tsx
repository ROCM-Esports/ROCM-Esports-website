import stripe from "@utils/stripe"
import { trpc } from "@utils/trpc"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { useState } from "react"

function Shop() {
  const createdProducts = trpc.useMutation("products.createProducts")
  const [page, setPage] = useState(1)

  //use only if there are no products in the database
  function createProducts() {
    createdProducts.mutateAsync({
      count: 100,
    })
  }
  const currentProducts = trpc.useQuery([
    "products.getProductsWithPagination",
    { limit: 20 },
  ])
  // get the id of the last product in the current batch
  if (!currentProducts.data) {
    return <div>Loading...</div>
  }
  return (
    <div>
      {/* get all of the products and have pagination for each batch of 20 products */}
      <div>
        <button onClick={createProducts}>Create Products</button>
        <button> Show Less</button>
        <button>Show More</button>

        <div>
          {currentProducts.data.map((product) => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                {/* <img src={product.images[Math.floor(Math.random()) * 10]} alt={product.name} /> */}
              </div>
          ))}
          <p>{currentProducts.data.length}</p>
        </div>
      </div>
    </div>
  )
}
export default Shop
