import { useGlobalContext } from "../contextFolder/context";
import { Product } from "./Product";

export const ProductList = () => {
  const context = useGlobalContext();
  const { state } = context;
  const { storeData } = state;
  return (
    <div className="container">
      <h1 className="text-title header">
        our <p>products</p>
      </h1>
      <div className="center-phones">
        {storeData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
