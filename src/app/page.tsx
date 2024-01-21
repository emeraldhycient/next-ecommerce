import Header from '@/components/common/Header'
import BestSellerSection from '@/components/home/bestseller/bestSellerSection'
import HeroSection from '@/components/home/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <BestSellerSection/>
    </main>
  )
}
