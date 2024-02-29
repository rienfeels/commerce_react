import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const { id } = params;
  const url = `https://fakestoreapi.com/products/${id}`;
  const data = await fetch(url).then((response) => response.json());

  return { data };
}

const SingleProduct = () => {
  const { data } = useLoaderData();
  return (
    <p>
      {" "}
      {data.title}
      <img className="card" id="image" src={data.image} />
      {data.description} {data.price}
    </p>
  );
};

export default SingleProduct;
