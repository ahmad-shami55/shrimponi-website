// src/pages/DineInMenu.jsx — replace the whole file
import PageHero from '../components/PageHero'
import MenuBrowser from '../components/MenuBrowser'

export default function DineInMenu() {
  return (
    <div>
      <PageHero eyebrow="Dine In" title="The Menu" compact />
      <MenuBrowser mode="dine-in" />
    </div>
  )
}