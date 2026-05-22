import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CategoryProducts from '../pages/CategoryProducts'
import ProductDetails from '../pages/ProductDetails'
import BreedDetails from '../layouts/pages/BreedDetails'
import BreedCategory from '../layouts/pages/BreedCategory'
import Shop from '../layouts/pages/Shop'
import BestSellers from '../layouts/pages/BestSellers'
import Blogs from '../layouts/pages/Blogs'
import BlogDetails from '../pages/BlogDetails'
import Cart from '../layouts/pages/Cart'
import WishList from '../layouts/pages/WishList'
import CheckOut from '../layouts/pages/CheckOut'
import OrderSuccess from '../layouts/pages/OrderSuccess'

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME PAGE */}
        <Route
          path='/'
          element={<Home />}
        />

        {/* LOGIN PAGE */}
        <Route
          path='/login'
          element={<Login />}
        />

        {/* REGISTER PAGE */}
        <Route
          path='/register'
          element={<Register />}
        />

        {/* CATEGORY PRODUCTS PAGE */}
        <Route
          path='/category/:slug'
          element={<CategoryProducts />}
        />

        {/* PRODUCT DETAILS PAGE */}
        <Route
          path='/product/:id'
          element={<ProductDetails />}
        />

        {/* BREED DETAILS PAGE */}
        <Route
          path='/breed/:slug'
          element={<BreedDetails />}
        />

        {/* BREED CATEGORY PAGE */}
        <Route
          path='/breed-category/:slug'
          element={<BreedCategory />}
        />

        {/* SHOP/PETS PAGE */}
        <Route
          path='/pets'
          element={<Shop />}
        />

        {/* BEST SELLERS PAGE */}
        <Route
          path='/best-sellers'
          element={<BestSellers />}
        />

        {/* BRANDS PAGE */}
        <Route
          path='/brands'
          element={<Shop />}
        />

        {/* BLOGS PAGE */}
        <Route
          path='/blogs'
          element={<Blogs />}
        />

        {/* BLOG DETAILS PAGE */}
        <Route
          path='/blog/:id'
          element={<BlogDetails />}
        />

        {/* CART PAGE */}
        <Route
          path='/cart'
          element={<Cart />}
        />

        {/* WISHLIST PAGE */}
        <Route
          path='/wishlist'
          element={<WishList />}
        />

        {/* CHECKOUT PAGE */}
        <Route
          path='/checkout'
          element={<CheckOut />}
        />

        {/* ORDER SUCCESS PAGE */}
        <Route
          path='/order-success'
          element={<OrderSuccess />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes