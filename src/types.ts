export interface Flower {
  _id: string;
  name: string;
  price: number;
  inStock: boolean;
  description: string;
  image: string;
  shopId: string;
}

export interface Shop {
  _id: string;
  name: string;
  address: string;
  image: string;
  shopId: string;
}
