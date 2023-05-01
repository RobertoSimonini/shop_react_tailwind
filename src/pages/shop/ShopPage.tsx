import PocketBase from "pocketbase";
import { Product } from "../../model/product";
import { useEffect, useState } from "react";
import { CardProduct } from "./CardProduct";
import { Loader } from "../../components/Loader";

export const pb = new PocketBase("http://127.0.0.1:8090");

export function ShopPage() {
  // costante products e uso il useState per rendere reactive e poterlo aggiornare con setUsers
  const [products, setProducts] = useState<Product[]>([]);

  // LOADER
  const [isLoading, setLoading] = useState<Boolean>(false);

  // al mounted chiama il loadData
  useEffect(() => {
    loadData();
  }, []);

  // Funzione che utilizza le SDK di Pocketbase per comunicare con il db e prendere tutti i prodotti
  const loadData = () => {
    setLoading(true);
    pb.collection("products")
      .getList<Product>()
      .then((res) => {
        setProducts(res.items);
        setLoading(false);
      });
  };

  const addToCart = (product: Partial<Product>) => {
    console.log(product);
  };

  return (
    <section>
      <h1 className="title">SHOP</h1>
      {isLoading && (
        <h1 className="title">
          <Loader />
        </h1>
      )}
      <div className="flex gap-8">
        {products.map((product) => {
          return (
            <CardProduct
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          );
        })}
      </div>
    </section>
  );
}
