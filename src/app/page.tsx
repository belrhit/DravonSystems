import { HomeLayout } from '@/components/Layout/HomeLayout';
import { HeroSection } from '@/components/Hero/HeroSection';
import { WhoAreWeSection } from '@/components/WhoAreWe/WhoAreWeSection';
import { ProductsSection } from '@/components/Products/ProductsSection';
import { VideoSection } from '@/components/VideoSection/VideoSection';

export default function HomePage() {
  return (
    <HomeLayout>
      <HeroSection />
      <WhoAreWeSection />
      <ProductsSection />
      <VideoSection />
    </HomeLayout>
  );
}

