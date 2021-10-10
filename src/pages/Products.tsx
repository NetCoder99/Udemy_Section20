import { Link } from "react-router-dom";

const Products = (props:any) => {
  return (
    <section>
      <h1>Welcome the products page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Cartpet</Link>
        </li>
        <li>
          <Link to="/products/p3">Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
