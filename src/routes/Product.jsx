// Product.jsx

import { useLoaderData, Link } from "react-router-dom";
import "./Product.css";

export async function loader() {
  const url = "https://fakestoreapi.com/products";
  const data = await fetch(url).then((response) => response.json());

  return { data };
}

const Products = () => {
  const { data } = useLoaderData();
  return (
    <>
      <div className="product-container">
        <div className="product-categories">
          <h2>Categories</h2>
          <Link to="/category/electronics">Electronics</Link>
          <Link to="/category/jewelery">Jewelery</Link>
          <Link to="/category/men's clothing">Men's Clothing</Link>
          <Link to="/category/women's clothing">Women's Clothing</Link>
        </div>

        <h2>Products</h2>
        <ul id="imgContain">
          {data.map((product, index) => {
            return (
              <li key={index} id="cba">
                <Link to={`/product/${product.id}`} id="abc">
                  <div className="card">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div>{product.title}</div>
                  <div> Price: {product.price}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Products;
