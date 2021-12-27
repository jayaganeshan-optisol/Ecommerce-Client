export type SignUpInputs = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export type LoginInputs = {
  email: string;
  password: string;
};

export interface Iemail {
  email: string;
}

export interface IPasswordChange {
  oldPassword: string;
  newPassword: string;
}
export interface IUpdateAddress {
  shipping_address: string;
}
export interface IProductDetails {
  product_name: string;
  description: string;
  unit_price: number;
  number_in_stock: number;
}
export interface IProductResult {
  createdAt: string;
  description: string;
  number_in_stock: number;
  product_id: number;
  product_name: string;
  seller_name: string;
  unit_price: number;
  updatedAt: string;
}
export interface ProductProps {
  info: IProductResult;
}

export interface ICart {
  product_id: number;
  product_name: string;
  description: string;
  unit_price: number;
  quantity: number;
}
export interface CartProductProps {
  product: ICart;
}
export interface CartRequest {
  product_id: number;
  quantity: number;
}
