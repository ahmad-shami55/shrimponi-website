import './CategoryFilterBar.css'

export default function CategoryFilterBar({ categories, activeId, onSelect }) {
  return (
    <div className="filter-bar">
      <div className="filter-bar-inner container">
        <div className="filter-chips" role="tablist" aria-label="Menu categories">
          <button
            type="button"
            className={'filter-chip' + (activeId === 'all' ? ' active' : '')}
            onClick={() => onSelect('all')}
            role="tab"
            aria-selected={activeId === 'all'}
          >
            All Items
          </button>

          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              className={'filter-chip' + (category.id === activeId ? ' active' : '')}
              onClick={() => onSelect(category.id)}
              role="tab"
              aria-selected={category.id === activeId}
            >
              {category.nameEn}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
