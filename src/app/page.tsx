import Header from '@/components/common/Header'
import AboutSection from '@/components/home/about'
import BestSellerSection from '@/components/home/bestseller/bestSellerSection'
import HeroSection from '@/components/home/hero'
import FeaturedPostSection from '@/components/home/blog/featuredPostSection'
import { samplePosts } from '@/constants'

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <BestSellerSection />
      <AboutSection />
      <FeaturedPostSection posts={samplePosts} />
    </main>
  )
}
