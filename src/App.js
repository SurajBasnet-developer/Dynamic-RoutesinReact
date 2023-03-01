import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const App = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: 1,
    name: "product 1",
    price: 100,
    description: "product 1 description",
    image: "https://via.placeholder.com/150x150",
  });

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <>
      <div>
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
        <h2>{product.image}</h2>
      </div>
    </>
  );
};
export default App;
