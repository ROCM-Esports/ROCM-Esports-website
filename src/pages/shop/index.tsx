import { trpc } from "@utils/trpc"
import { useState } from "react"

const Shop = () => {
  const { data, isLoading } = trpc.useQuery(["products.getAllProducts"])
  const products = trpc.useMutation("products.createProducts")

  if (isLoading || !data) {
    return <div>Loading...</div>
  }

  function createProducts() {

    products.mutateAsync({
      count: 100,
    })

    console.log(products)
  }
  

  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <a href={`/shop/products/${product.id}`}>{product.name}</a>
          </li>
        ))}
      </ul>
      {/* a button that when clicked adds 100 products to stripe */}
      <button onClick={createProducts}>
        Create 100 products
      </button>
    </div>
  )
}

export default Shop