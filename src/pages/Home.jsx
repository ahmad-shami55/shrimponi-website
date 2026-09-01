// src/pages/Home.jsx
import Hero from '../components/Hero'
import ScrollReveal from '../components/ScrollReveal'
import ProductShowcase from '../components/ProductShowcase'
import ScrollDivider from '../components/ScrollDivider'
import AboutTeaser from '../components/AboutTeaser'

export default function Home() {
  return (
    <div>
      <Hero />
      <ScrollReveal />

      <ProductShowcase
        nameEn="Classic Shrimp"
        nameAr="قريدس كلاسيك"
        tagline="Where It All Started"
        image="/images/products/classic-shrimp.png"
        theme="dark"
      />
      <ScrollDivider theme="dark" />

      <ProductShowcase
        nameEn="Shrimp Burger"
        nameAr="برغر قريدس"
        tagline="A Bold Move"
        image="/images/products/shrimp-burger.png"
        theme="light"
        reverse
      />
      <ScrollDivider theme="light" />

      <ProductShowcase
        nameEn="Shrimponi Fillet"
        nameAr="فيليه شرمبوني"
        tagline="The House Special"
        image="/images/products/shrimponi-fillet.png"
        theme="dark"
      />

      <AboutTeaser />
    </div>
  )
}