import Image from 'next/image';
import MainPagebanners from '../components/index/MainPagebanners';
import AboutUs from '../components/index/AboutUs';
import ProductCarousel from '../components/productCarousel';
import AboutGraniteSink from '../components/index/AboutGraniteSink';

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
