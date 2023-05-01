import { Product } from "../../model/product";
import { PropsWithChildren } from "react";

// Type of Product Card
interface CardProductProps {
  product: Partial<Product>; // Partial = undefined
  onAddToCart: (product: Partial<Product>) => void;
}

// Received Props
export function CardProduct(props: PropsWithChildren<CardProductProps>) {
  // Destructuring
  const { product } = props;
  return (
    <div className="card w-3/12 shadow-2xl">
      {/* V-IF  */}
      {product.img && (
        <img
          src={product.img}
          alt={product.name}
          className="h-60 w-full object-cover"
        />
      )}
      <div className="content">
        <div>
          <span className="card-title">{product.name} - </span>
          <span className="btn primary">€ {product.cost}</span>
        </div>
        <p>{product.description}</p>
      </div>
      <button
        className="cart-button"
        onClick={() => props.onAddToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
}
