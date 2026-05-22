import { products } from '../../data/products'

const ProductFilters = ({ selectedCategory, setSelectedCategory }) => {
  // Get unique subcategories from products
  const categories = ['all', ...new Set(products.map(p => p.subCategory))]

  const formatLabel = (category) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <div className='bg-white rounded-[20px] p-6 shadow-sm'>
      <h3 className='text-xl font-bold text-[#0D2B5C] mb-6'>Filter by Category</h3>

      <div className='space-y-3'>
        {categories.map((category) => (
          <label
            key={category}
            className='flex items-center cursor-pointer group'
          >
            <input
              type='radio'
              name='category'
              value={category}
              checked={selectedCategory === category}
              onChange={() => setSelectedCategory(category)}
              className='w-5 h-5 text-orange-500 cursor-pointer'
            />
            <span className='ml-3 text-gray-700 group-hover:text-orange-500 transition-colors'>
              {formatLabel(category)}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default ProductFilters
