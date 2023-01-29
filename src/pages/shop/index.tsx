import Navigation from "@/components/navigation/Navigation";
import { api } from "@/utils/api";
import { NextPage } from "next";

const Shop: NextPage = () => {
  // get all products from stripe
  const {data, error} = api.stripe.allProducts.useQuery();
  if (!data) {
    return <div>Loading...</div>    
  }
  // if (error) {
  //   return <div>{error.message}</div>
  // }
  return (
    <>
      <Navigation />
      
      {data.data.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
      <form action="/api/stripe/checkout_session" method="post">
        <button type="submit">Buy</button>
      </form>
    </>
  );
}


// export default Iterable;

export default Shop;