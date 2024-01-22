'use client'
import AboutSection from '@/components/home/about'
import BestSellerSection from '@/components/home/bestseller/bestSellerSection'
import HeroSection from '@/components/home/hero'
import FeaturedPostSection from '@/components/home/blog/featuredPostSection'
import { samplePosts } from '@/constants'
import TestimonialSection from '@/components/home/testimony'

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <BestSellerSection />
      <AboutSection />
      <FeaturedPostSection posts={samplePosts} />
      <TestimonialSection />
    </main>
  )
}
