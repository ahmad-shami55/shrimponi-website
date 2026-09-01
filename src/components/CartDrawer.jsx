// src/components/CartDrawer.jsx — replace the whole file
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { useBranch } from '../context/BranchContext'
import { formatPrice } from '../data/menuData'
import { CloseIcon, TrashIcon, SendIcon, EmptyPlateIcon } from './icons/Icons'
import './CartDrawer.css'

export default function CartDrawer() {
  const { items, removeItem, setQty, clearCart, total, isOpen, setIsOpen } = useCart()
  const { branchId, setBranchId, branches } = useBranch()
  const [form, setForm] = useState({ name: '', phone: '', address: '', note: '' })

  const branch = branches.find((b) => b.id === branchId) || branches[0]

  const updateForm = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const buildOrderText = () => {
    const lines = [
      `*New Order — Shrimponi (${branch.name})*`,
      '',
      ...items.map((i) => `• ${i.nameEn} (${i.nameAr}) x${i.qty} — ${formatPrice(i.price * i.qty)}`),
      '',
      `*Total: ${formatPrice(total)}*`,
      '',
      `Name: ${form.name || '-'}`,
      `Phone: ${form.phone || '-'}`,
      `Address: ${form.address || '-'}`,
      form.note ? `Note: ${form.note}` : null,
    ].filter(Boolean)
    return encodeURIComponent(lines.join('\n'))
  }

  const canOrder = items.length > 0 && form.name.trim() && form.phone.trim()

  const placeOrder = () => {
    if (!canOrder) return
    const url = `https://wa.me/${branch.whatsapp}?text=${buildOrderText()}`
    window.open(url, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <motion.aside
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="cart-drawer-head">
              <h3>My Cart</h3>
              <button className="cart-close" onClick={() => setIsOpen(false)} aria-label="Close cart">
                <CloseIcon />
              </button>
            </div>

            <div className="cart-drawer-body">
              {items.length === 0 ? (
                <div className="cart-empty">
                  <EmptyPlateIcon />
                  <p>Your cart's empty. Go make Don Shrimponi proud.</p>
                </div>
              ) : (
                <>
                  <ul className="cart-items">
                    {items.map((i) => (
                      <li key={i.id} className="cart-item">
                        <div className="cart-item-info">
                          <strong>{i.nameEn}</strong>
                          <span dir="rtl">{i.nameAr}</span>
                          <em>{formatPrice(i.price)}</em>
                        </div>
                        <div className="cart-item-controls">
                          <button onClick={() => setQty(i.id, i.qty - 1)}>−</button>
                          <span>{i.qty}</span>
                          <button onClick={() => setQty(i.id, i.qty + 1)}>+</button>
                        </div>
                        <button className="cart-item-remove" onClick={() => removeItem(i.id)} aria-label="Remove item">
                          <TrashIcon />
                        </button>
                      </li>
                    ))}
                  </ul>

                  <button className="cart-clear" onClick={clearCart}>
                    Clear Cart
                  </button>

                  <div className="cart-divider" />

                  <h4 className="cart-section-title">Checkout</h4>

                  <div className="cart-field">
                    <label>Branch</label>
                    <select value={branchId} onChange={(e) => setBranchId(e.target.value)}>
                      {branches.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="cart-field">
                    <label>Full Name *</label>
                    <input value={form.name} onChange={updateForm('name')} placeholder="Your name" />
                  </div>

                  <div className="cart-field">
                    <label>Phone Number *</label>
                    <input value={form.phone} onChange={updateForm('phone')} placeholder="03 000 000" />
                  </div>

                  <div className="cart-field">
                    <label>Delivery Address</label>
                    <textarea
                      value={form.address}
                      onChange={updateForm('address')}
                      placeholder="Street, building, floor..."
                      rows={2}
                    />
                  </div>

                  <div className="cart-field">
                    <label>Delivery Note (optional)</label>
                    <textarea
                      value={form.note}
                      onChange={updateForm('note')}
                      placeholder="Any extra instructions?"
                      rows={2}
                    />
                  </div>

                  <div className="cart-summary">
                    <h4>Order Summary</h4>
                    {items.map((i) => (
                      <div key={i.id} className="cart-summary-row">
                        <span>
                          {i.nameEn} x{i.qty}
                        </span>
                        <span>{formatPrice(i.price * i.qty)}</span>
                      </div>
                    ))}
                    <div className="cart-summary-total">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>

                  <button className="cart-place-order" disabled={!canOrder} onClick={placeOrder}>
                    <SendIcon /> Place Order via WhatsApp
                  </button>
                  {!canOrder && <p className="cart-hint">Add your name & phone number to order.</p>}
                </>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}