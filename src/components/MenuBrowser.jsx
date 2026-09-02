// src/components/MenuBrowser.jsx — replace the whole file
import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { categories, products } from '../data/menuData'
import CategoryButton from './CategoryButton'
import CategoryFilterBar from './CategoryFilterBar'
import ProductCard from './ProductCard'
import { useCart } from '../context/CartContext'
import './MenuBrowser.css'

export default function MenuBrowser({ mode, eyebrow, title }) {
  const [activeCategory, setActiveCategory] = useState(null)
  const { addItem } = useCart()
  const listTopRef = useRef(null)

  const categoryProducts = useMemo(
    () => products.filter((p) => p.category === activeCategory),
    [activeCategory]
  )

  const activeCategoryData = categories.find((c) => c.id === activeCategory)

  // Switching category can change the list's height a lot (a 3-item category
  // vs an 8-item one), which otherwise leaves the page scrolled to a
  // seemingly random spot. Instead, every switch settles smoothly at the
  // same predictable place: the top of the new category's results.
  useEffect(() => {
    if (activeCategory && listTopRef.current) {
      listTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [activeCategory])

  return (
    <div className="menu-browser">
      <div className="menu-head">
        <div className="container">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            {title}
          </motion.h1>
        </div>
      </div>

      {!activeCategory ? (
        <motion.div
          className="container category-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {categories.map((c, i) => (
            <CategoryButton key={c.id} category={c} index={i} onClick={() => setActiveCategory(c.id)} />
          ))}
        </motion.div>
      ) : (
        <>
          <CategoryFilterBar
            categories={categories}
            activeId={activeCategory}
            onSelect={setActiveCategory}
            onAll={() => setActiveCategory(null)}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="container product-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {activeCategoryData && (
                <div className="product-list-head" ref={listTopRef}>
                  <h2>{activeCategoryData.nameEn}</h2>
                  <span dir="rtl" className="product-list-head-ar">
                    {activeCategoryData.nameAr}
                  </span>
                </div>
              )}
              <div className="menu-sheet">
                {categoryProducts.map((p, i) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    index={i}
                    showAddToCart={mode === 'delivery'}
                    onAdd={addItem}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </div>
  )
}