import Image from 'next/image';
import MainPagebanners from './_components/index/MainPagebanners';
import AboutUs from './_components/index/AboutUs';
import ProductCarousel from './_components/ProductCarousel';
import AboutGraniteSink from './_components/index/AboutGraniteSink';

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainPagebanners />
      <AboutUs />
      <div className="container">
        <ProductCarousel title="سینک گرانیتی" />
      </div>
      <AboutGraniteSink />
    </main>
  );
}
