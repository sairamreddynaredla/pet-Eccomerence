import Navbar from '../../components/Navbar'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from "../../data/products";


import ProductGallery from '../../components/productdetails/ProductGallery'
import ProductInfo from '../../components/productdetails/ProductInfo'
import DeliveryBox from '../../components/productdetails/DeliveryBox'
import SimilarProducts from '../../components/productdetails/SimilarProducts'
import useCart from '../../hooks/usecart'
import { useWishlist } from '../../context/usewishlist'
import BuyNowButton from '../../components/BuyNowButton'

const ProductDetails = () => {

  const navigate = useNavigate();

  const { id } = useParams()

  const [openSection, setOpenSection] = useState('details')

  const toggleSection = (section) => {
    setOpenSection(
      openSection === section
        ? null
        : section
    )
  }

  // FIND PRODUCT
  const product = products.find(
    (item) => item.id === Number(id)
  )

  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist } = useWishlist()

  const handleAddToCart = async (productId, quantity = 1) => {
    const productToAdd = products.find((item) => item.id === Number(productId))
    if (productToAdd) {
      addToCart({ ...productToAdd, quantity })
    }
  }

  // BUY NOW HANDLER
  const handleBuyNow = async () => {
    await handleAddToCart(product.id, 1);
    navigate('/checkout');
  }

  const handleWishlistToggle = (productId, isAdding) => {
    const productToUpdate = products.find((item) => item.id === Number(productId))
    if (!productToUpdate) return

    if (isAdding) {
      addToWishlist(productToUpdate)
    } else {
      removeFromWishlist(productId)
    }
  }

  // PRODUCT NOT FOUND
  if (!product) {

    return (

      <div className="min-h-screen bg-[#f8f8f8]">

        <Navbar />

        <div className="flex items-center justify-center h-[70vh]">

          <h1 className="text-4xl font-bold text-gray-700">
            Product Not Found
          </h1>

        </div>

      </div>

    )
  }

  // SIMILAR PRODUCTS
  const similarProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 6)

  return (

    <div className="bg-[#f8f8f8] min-h-screen pt-28">

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE */}
      <div className="max-w-[1450px] mx-auto px-4 md:px-8 py-10">

        {/* BREADCRUMB */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-8">

          <span>Home</span>

          <span>&gt;</span>

          <span>Products</span>

          <span>&gt;</span>

          <span className="capitalize">
            {product.category}
          </span>

          <span>&gt;</span>

          <span className="text-black font-medium">
            {product.name}
          </span>

        </div>

        {/* PRODUCT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.95fr] gap-14 bg-white rounded-[40px] p-6 md:p-10 shadow-sm border border-gray-100">

          {/* LEFT */}
          <div>

            {/* PRODUCT GALLERY */}
            <ProductGallery key={product.id} product={product} />

            {/* DELIVERY BOX */}
            <div className="mt-8">

              <DeliveryBox />

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col lg:sticky lg:top-28 self-start">
            <ProductInfo product={product} handleBuyNow={handleBuyNow} />
          </div>

        </div>

        {/* ACCORDION */}
        <div className="mt-10 bg-white rounded-[35px] overflow-hidden border border-gray-200 shadow-sm">

          {/* DETAILS */}
          <div className="border-b border-gray-200">

            <button
              onClick={() => toggleSection('details')}
              className="w-full flex items-center justify-between px-8 py-6"
            >

              <span className="text-lg md:text-xl font-bold">
                Product Details
              </span>

              <span className="text-3xl font-light">
                {openSection === 'details'
                  ? '−'
                  : '+'}
              </span>

            </button>

            {openSection === 'details' && (

              <div className="px-8 pb-8 text-gray-600 leading-8 text-[15px]">

                <p>

                  {product.description ||

                    'Premium quality pet nutrition product specially designed for healthy growth, strong immunity, and daily wellness support for your pets.'}

                </p>

              </div>

            )}

          </div>

          {/* INGREDIENTS */}
          <div className="border-b border-gray-200">

            <button
              onClick={() => toggleSection('ingredients')}
              className="w-full flex items-center justify-between px-8 py-6"
            >

              <span className="text-lg md:text-xl font-bold">
                Ingredients
              </span>

              <span className="text-3xl font-light">
                {openSection === 'ingredients'
                  ? '−'
                  : '+'}
              </span>

            </button>

            {openSection === 'ingredients' && (

              <div className="px-8 pb-8">

                <ul className="space-y-4">

                  {product.ingredients?.map((item, index) => (

                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >

                      <span className="text-green-600 text-lg">
                        ✔
                      </span>

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

            )}

          </div>

          {/* FEATURES */}
          <div className="border-b border-gray-200">

            <button
              onClick={() => toggleSection('features')}
              className="w-full flex items-center justify-between px-8 py-6"
            >

              <span className="text-lg md:text-xl font-bold">
                Key Features
              </span>

              <span className="text-3xl font-light">
                {openSection === 'features'
                  ? '−'
                  : '+'}
              </span>

            </button>

            {openSection === 'features' && (

              <div className="px-8 pb-8 text-gray-700">

                <ul className="space-y-4 list-disc pl-5">

                  <li>High Protein Formula</li>
                  <li>Supports Healthy Digestion</li>
                  <li>Rich in Vitamins & Minerals</li>
                  <li>Premium Quality Ingredients</li>
                  <li>Suitable For Daily Feeding</li>

                </ul>

              </div>

            )}

          </div>

          {/* MORE INFO */}
          <div>

            <button
              onClick={() => toggleSection('more')}
              className="w-full flex items-center justify-between px-8 py-6"
            >

              <span className="text-lg md:text-xl font-bold">
                More Information
              </span>

              <span className="text-3xl font-light">
                {openSection === 'more'
                  ? '−'
                  : '+'}
              </span>

            </button>

            {openSection === 'more' && (

              <div className="px-8 pb-8 text-gray-700 leading-8">

                <p>
                  <span className="font-semibold">Brand:</span>{' '}
                  {product.brand}
                </p>

                <p>
                  <span className="font-semibold">Flavor:</span>{' '}
                  {product.flavor || 'Chicken'}
                </p>

                <p>
                  <span className="font-semibold">Pet Type:</span>{' '}
                  {product.pet || 'Dog'}
                </p>

                <p>
                  <span className="font-semibold">Life Stage:</span>{' '}
                  {product.lifeStage || 'Adult'}
                </p>

                <p>
                  <span className="font-semibold">Category:</span>{' '}
                  {product.category}
                </p>

              </div>

            )}

          </div>

        </div>

        {/* RELATED PRODUCTS */}
        {similarProducts.length > 0 && (

          <div className="mt-16">

            <div className="mb-8">

              <p className="text-orange-500 uppercase tracking-[3px] text-sm font-semibold">
                Recommended Products
              </p>

              <h2 className="text-4xl font-black mt-2">
                You May Also Like
              </h2>

            </div>

            <SimilarProducts
              products={similarProducts}
              onAddToCart={handleAddToCart}
              onWishlistToggle={handleWishlistToggle}
            />

          </div>

        )}

      </div>

    </div>

  )
}

export default ProductDetails