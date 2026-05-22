// Brand data extracted from products
export const brands = [
  {
    id: 1,
    name: 'Royal Canin',
    logo: 'royal-canin',
    featured: true,
  },
  {
    id: 2,
    name: 'Pedigree',
    logo: null,
    featured: true,
  },
  {
    id: 3,
    name: 'Drools',
    logo: 'drools',
    featured: true,
  },
  {
    id: 4,
    name: 'Farmina',
    logo: 'farmina',
    featured: true,
  },
  {
    id: 5,
    name: 'JerHigh',
    logo: null,
    featured: false,
  },
  {
    id: 6,
    name: 'Himalaya',
    logo: null,
    featured: false,
  },
  {
    id: 7,
    name: 'Taste Of The Wild',
    logo: 'taste-of-the-wild',
    featured: true,
  },
  {
    id: 8,
    name: 'Goodies',
    logo: null,
    featured: false,
  },
  {
    id: 9,
    name: 'SmartHeart',
    logo: null,
    featured: false,
  },
  {
    id: 10,
    name: 'Acana',
    logo: null,
    featured: false,
  },
  {
    id: 11,
    name: 'Whiskas',
    logo: 'whiskas',
    featured: true,
  },
  {
    id: 12,
    name: 'Me-O',
    logo: 'meo',
    featured: true,
  },
  {
    id: 13,
    name: 'Sheba',
    logo: 'sheba',
    featured: true,
  },
  {
    id: 14,
    name: 'Purina',
    logo: 'purina',
    featured: true,
  },
  {
    id: 15,
    name: 'Orijen',
    logo: 'orijen',
    featured: true,
  },
  {
    id: 16,
    name: 'Kennel Kitchen',
    logo: 'kennel-kitchen',
    featured: true,
  },
]

// Get featured brands for carousel
export const getFeaturedBrands = () => {
  return brands.filter(brand => brand.featured)
}

// Get brand logo filename
export const getBrandLogo = (brandName) => {
  const brand = brands.find(b => b.name.toLowerCase() === brandName.toLowerCase())
  return brand?.logo
}
