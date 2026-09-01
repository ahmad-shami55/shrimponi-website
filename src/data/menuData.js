// All prices in Lebanese Lira (L.L)
// `image` points to /public/images/categories/<file> — drop your photo there
// with the exact filename below and it will appear automatically.
export const categories = [
  { id: 'shrimp', nameEn: 'Shrimp', nameAr: 'قريدس', image: '/images/categories/shrimp.jpg' },
  { id: 'fillet', nameEn: 'Fillet', nameAr: 'فيليه', image: '/images/categories/fillet.jpg' },
  { id: 'crab', nameEn: 'Crab', nameAr: 'كراب', image: '/images/categories/crab.jpg' },
  { id: 'calamari', nameEn: 'Calamari', nameAr: 'كالاماري', image: '/images/categories/calamari.jpg' },
  { id: 'burger', nameEn: 'Burger', nameAr: 'برغر', image: '/images/categories/burger.jpg' },
  {
    id: 'platters-single',
    nameEn: 'Fried Platters · Single',
    nameAr: 'أطباق مقلية فردية',
    image: '/images/categories/platters-single.jpg',
  },
  {
    id: 'platters-family',
    nameEn: 'Fried Platters · Family',
    nameAr: 'أطباق مقلية عائلية',
    image: '/images/categories/platters-family.jpg',
  },
  {
    id: 'grilled-jumbo',
    nameEn: 'Grilled Shrimp Jumbo',
    nameAr: 'قريدس مشوي',
    image: '/images/categories/grilled-jumbo.jpg',
  },
]

export const products = [
  // Shrimp
  { id: 'sh-1', category: 'shrimp', nameEn: 'Classic Shrimp', nameAr: 'قريدس كلاسيك', desc: 'قريدس مقلي + تارتار صوص + كبيس + خس', price: 500000 },
  { id: 'sh-2', category: 'shrimp', nameEn: 'Shrimponi Shrimp', nameAr: 'قريدس شرمبوني', desc: 'قريدس مقلي + صوص شرمبوني + كبيس + خس + بندورة', price: 500000 },
  { id: 'sh-3', category: 'shrimp', nameEn: 'Delight Shrimp', nameAr: 'قريدس ديلايت', desc: 'قريدس مشوي + صوص ليموني + كبيس + خس', price: 600000 },
  { id: 'sh-4', category: 'shrimp', nameEn: 'Dynamite Shrimp', nameAr: 'قريدس دايناميت', desc: 'قريدس مقلي + صوص دايناميت + ملفوف + جزر', price: 500000 },
  { id: 'sh-5', category: 'shrimp', nameEn: 'Fajita Shrimp', nameAr: 'قريدس فاهيتا', desc: 'قريدس + صوص فاهيتا + صوص أفوكادو + كبيس + خس أيس + ذرة + موزاريلا', price: 600000 },
  { id: 'sh-6', category: 'shrimp', nameEn: 'Ocean Shrimp', nameAr: 'قريدس أوشن', desc: 'قريدس مقلي + صوص كوكتيل + كبيس + خس', price: 500000 },
  { id: 'sh-7', category: 'shrimp', nameEn: 'Luciano Shrimp', nameAr: 'قريدس لوسيانو', desc: 'قريدس + صوص بروفينسال + صوص ليموني + خس + كبيس + بندورة + صوص كوكتيل', price: 500000, isNew: true },
  { id: 'sh-8', category: 'shrimp', nameEn: 'Shrimp Sup', nameAr: 'قريدس ساب', desc: 'قريدس + موزاريلا + صوص أفوكادو + صويا + ذرة + كبيس + خس', price: 600000, isNew: true },

  // Fillet
  { id: 'fi-1', category: 'fillet', nameEn: 'Classic Fillet', nameAr: 'فيليه كلاسيك', desc: 'فيليه مقلي + تارتار صوص + كبيس + خس', price: 450000 },
  { id: 'fi-2', category: 'fillet', nameEn: 'Shrimponi Fillet', nameAr: 'فيليه شرمبوني', desc: 'فيليه مقلي + صوص شرمبوني + كبيس + خس + بندورة', price: 450000 },
  { id: 'fi-3', category: 'fillet', nameEn: 'Ocean Fillet', nameAr: 'فيليه أوشن', desc: 'فيليه مقلي + صوص كوكتيل + كبيس + خس', price: 450000 },
  { id: 'fi-4', category: 'fillet', nameEn: 'Luciano Fillet', nameAr: 'فيليه لوسيانو', desc: 'فيليه + صوص بروفينسال + صوص ليموني + خس + كبيس + بندورة + صوص كوكتيل', price: 450000, isNew: true },
  { id: 'fi-5', category: 'fillet', nameEn: 'Fajita Fillet', nameAr: 'فيليه فاهيتا', desc: 'فيليه + صوص فاهيتا + صوص أفوكادو + كبيس + خس أيس + ذرة + موزاريلا', price: 600000, isNew: true },

  // Crab
  { id: 'cr-1', category: 'crab', nameEn: 'Thai Crab', nameAr: 'كراب تايلندي', desc: 'كراب + صوص تايلندية + خيار + جزر + خس', price: 450000 },
  { id: 'cr-2', category: 'crab', nameEn: 'Paradise Crab', nameAr: 'كراب برادايس', desc: 'كراب + صوص كوكتيل + كبيس + خس', price: 450000 },

  // Calamari
  { id: 'ca-1', category: 'calamari', nameEn: 'Classic Calamari', nameAr: 'كالاماري كلاسيك', desc: 'كالاماري مقلي + صوص تارتار + كبيس + خس', price: 500000 },
  { id: 'ca-2', category: 'calamari', nameEn: 'Shrimponi Calamari', nameAr: 'كالاماري شرمبوني', desc: 'كالاماري مقلي + صوص شرمبوني + كبيس + خس + بندورة', price: 500000 },
  { id: 'ca-3', category: 'calamari', nameEn: 'Ocean Calamari', nameAr: 'كالاماري أوشن', desc: 'كالاماري مقلي + صوص كوكتيل + كبيس + خس + بندورة', price: 500000 },

  // Burger
  { id: 'bu-1', category: 'burger', nameEn: 'Shrimp Burger', nameAr: 'برغر قريدس', desc: 'قريدس مقلي + موزاريلا + صوص شرمبوني + كبيس + خس', price: 550000 },
  { id: 'bu-2', category: 'burger', nameEn: 'Mix Seafood Burger', nameAr: 'برغر ميكس سي فود', desc: 'ميكس سي فود + صوص شرمبوني + كبيس + خس', price: 550000 },
  { id: 'bu-3', category: 'burger', nameEn: 'Classic Fillet Burger', nameAr: 'برغر فيليه كلاسيكي', desc: 'فيليه مقلي + صوص تارتار + كبيس + خس', price: 450000 },
  { id: 'bu-4', category: 'burger', nameEn: 'Mozzarella Fillet Burger', nameAr: 'برغر فيليه موزاريلا', desc: 'فيليه مقلي + موزاريلا + صوص تارتار + كبيس + خس', price: 550000 },
  { id: 'bu-5', category: 'burger', nameEn: 'Gambino Burger', nameAr: 'برغر غمبينو', desc: 'قريدس + كراب + صوص تارتار + صوص شرمبوني + كبيس + خس', price: 550000, isNew: true },

  // Fried Platters Single
  { id: 'ps-1', category: 'platters-single', nameEn: 'Shrimp Platter', nameAr: 'قريدس', desc: '16 pcs', price: 900000 },
  { id: 'ps-2', category: 'platters-single', nameEn: 'Fillet Platter', nameAr: 'فيليه', desc: '7 pcs', price: 900000 },
  { id: 'ps-3', category: 'platters-single', nameEn: 'Calamari Platter', nameAr: 'كالاماري', desc: '7 pcs', price: 900000 },
  { id: 'ps-4', category: 'platters-single', nameEn: 'Mix Seafood Platter', nameAr: 'ميكس سي فود', desc: '10 pcs قريدس + 3 pcs فيليه + 1 pc كالاماري', price: 900000 },
  { id: 'ps-5', category: 'platters-single', nameEn: 'Don Shrimponi', nameAr: 'دون شرمبوني', desc: '3 pcs قريدس مشوي + 3 pcs قريدس مقلي + 1 pc فيليه + 1 pc كالاماري', price: 1000000, isNew: true },

  // Fried Platters Family
  { id: 'pf-1', category: 'platters-family', nameEn: 'Shrimp Platter', nameAr: 'قريدس', desc: '48 pcs', price: 2300000 },
  { id: 'pf-2', category: 'platters-family', nameEn: 'Fillet Platter', nameAr: 'فيليه', desc: '23 pcs', price: 2300000 },
  { id: 'pf-3', category: 'platters-family', nameEn: 'Calamari Platter', nameAr: 'كالاماري', desc: '23 pcs', price: 2300000 },
  { id: 'pf-4', category: 'platters-family', nameEn: 'Mix Seafood Platter', nameAr: 'ميكس سي فود', desc: '30 pcs قريدس + 10 pcs فيليه + 3 pcs كالاماري', price: 2300000 },
  { id: 'pf-5', category: 'platters-family', nameEn: 'Don Shrimponi', nameAr: 'دون شرمبوني', desc: '8 pcs قريدس مشوي + 8 pcs قريدس مقلي + 5 pcs فيليه + 2 pcs كالاماري', price: 2450000, isNew: true },

  // Grilled Shrimp Jumbo
  { id: 'gr-1', category: 'grilled-jumbo', nameEn: 'Grilled Shrimp Single', nameAr: 'قريدس مشوي فردي', desc: '8 pcs', price: 900000 },
  { id: 'gr-2', category: 'grilled-jumbo', nameEn: 'Grilled Shrimp Double', nameAr: 'قريدس مشوي نصف كيلو', desc: '1/2 kg · 11 pcs', price: 1200000 },
  { id: 'gr-3', category: 'grilled-jumbo', nameEn: 'Grilled Shrimp Family', nameAr: 'قريدس مشوي كيلو', desc: '1 kg · 22 pcs', price: 2200000 },
]

export const formatPrice = (n) => `${n.toLocaleString('en-US')} L.L`
