import { Product } from "../../../model/product";
import { pb } from "../../../pages/shop/ShopPage";

export const get = () => pb.collection("products").getList<Product>();

export const create = (product: Partial<Product>) =>
  pb.collection("products").create<Product>(product);

export const remove = (id: string) => pb.collection("products").delete(id);

export const edit = (product: Partial<Product>) =>
  pb.collection("products").update(product.id!, product);
