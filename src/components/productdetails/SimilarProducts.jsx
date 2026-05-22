import ProductCard from "../products/ProductCard";

const SimilarProducts = ({ products, onAddToCart, onWishlistToggle }) => {

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onWishlistToggle={onWishlistToggle}
        />
      ))}
    </div>
  );
}

export default SimilarProducts