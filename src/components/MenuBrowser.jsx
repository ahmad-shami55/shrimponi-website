import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { categories, products } from '../data/menuData'
import CategoryFilterBar from './CategoryFilterBar'
import ProductCard from './ProductCard'
import { useCart } from '../context/CartContext'
import './MenuBrowser.css'

export default function MenuBrowser({ mode }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const { addItem } = useCart()

  const visibleCategories = useMemo(() => {
    if (activeCategory === 'all') return categories
    return categories.filter((category) => category.id === activeCategory)
  }, [activeCategory])

  return (
    <div className="menu-browser">
      <CategoryFilterBar
        categories={categories}
        activeId={activeCategory}
        onSelect={setActiveCategory}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="container menu-sections"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24 }}
        >
          {visibleCategories.map((category) => {
            const categoryProducts = products.filter((product) => product.category === category.id)

            return (
              <section className="menu-category-section" key={category.id} id={`menu-${category.id}`}>
                <div className="product-list-head">
                  <div>
                    <h2>{category.nameEn}</h2>
                    <span dir="rtl" className="product-list-head-ar">
                      {category.nameAr}
                    </span>
                  </div>
                  <span className="product-list-count">
                    {categoryProducts.length} {categoryProducts.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                <div className="menu-sheet">
                  {categoryProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                      showAddToCart={mode === 'delivery'}
                      onAdd={addItem}
                    />
                  ))}
                </div>
              </section>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
