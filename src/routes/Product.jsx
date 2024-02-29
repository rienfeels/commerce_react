import { useLoaderData, Link } from "react-router-dom";

export async function loader() {
  const url = "https://fakestoreapi.com/products";
  const data = await fetch(url).then((response) => response.json());

  return { data };
}

const Products = () => {
  const { data } = useLoaderData();
  return (
    <>
      <h2>Products</h2>
      <ul>
        {data.map((product, index) => {
          return (
            <li key={index}>
              <Link to={Products.id}>
                <div>{product.title}</div>
                <div>
                  <img src={product.image} />
                </div>
                <div> Price: {product.price}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
