import { useParams } from "react-router";

interface queryParams {
  productId: string,
}
const ProductDetails = () => {
  const params: queryParams = useParams();
  console.log("ProductDetails");
  
    return (
      <section>
        <h1>Details for product: #Name</h1>
        <p>{params.productId}</p>
        <ul>
          <li>Product Detail 1</li>
          <li>Product Detail 2</li>
          <li>Product Detail 3</li>
        </ul>
      </section>
    );
  };
  
  export default ProductDetails;
  