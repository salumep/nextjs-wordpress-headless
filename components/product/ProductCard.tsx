import React from 'react';
import { IProduct } from '../../types/products';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return <p>{product.title?.rendered}</p>;
};
export default ProductCard;
