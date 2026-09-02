// src/pages/DeliveryMenu.jsx — replace the whole file
import PageHero from '../components/PageHero'
import MenuBrowser from '../components/MenuBrowser'

export default function DeliveryMenu() {
  return (
    <div>
      <PageHero eyebrow="Delivery" title="Order Online" compact />
      <MenuBrowser mode="delivery" />
    </div>
  )
}