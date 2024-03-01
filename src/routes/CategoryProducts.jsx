import { useLoaderData, Link } from "react-router-dom";

export async function loader({ params }) {
  const { category } = params;
  const url = `https:fakestoreapi.com/products/category/${category}`;
  const data = await fetch(url).then((response) => response.json());

  return { data, category };
}

const CategoryProducts = () => {
  const { data, catgeory } = useLoaderData();

  return (
    <>
      <h2>{catgeory} Category</h2>
      <div>
        <Link to="/category/electronics">Electronics</Link>
        <Link to="/category/jewelery">Jewelery</Link>
        <Link to="/category/men's clothing">Men's Clothing</Link>
        <Link to="/category/women's clothing">Women's Clothing</Link>
      </div>
      <ul>
        {data.map((product, index) => (
          <li key={index}>
            <Link to={`/product/${product.id}`}>
              <div className="card">
                <img src={product.image} alt={product.title} />
              </div>
              <div>{product.title}</div>
              <div> Price: {product.price}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryProducts;
