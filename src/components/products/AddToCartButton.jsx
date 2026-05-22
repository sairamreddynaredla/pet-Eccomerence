import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

const AddToCartButton = ({
  productId,
  productName,
  isOutOfStock = false,
  onAddToCart,
  quantity = 1,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isOutOfStock) return;

    setIsAdding(true);

    if (onAddToCart) {
      await onAddToCart(productId, quantity);
    }

    setIsAdding(false);
    setIsAdded(true);

    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isOutOfStock || isAdding}
      className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
        isAdded
          ? "bg-green-500 text-white"
          : isOutOfStock
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl"
      }`}
      aria-label={`Add ${productName} to cart`}
    >
      {isAdding ? (
        <>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Adding...
        </>
      ) : isAdded ? (
        <>
          <Check size={20} />
          Added!
        </>
      ) : isOutOfStock ? (
        "Out of Stock"
      ) : (
        <>
          <ShoppingCart size={20} />
          Add to Cart
        </>
      )}
    </button>
  );
};

export default AddToCartButton;
