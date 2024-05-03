import MainPagebanners from './_components/index/MainPagebanners';
import ProductCarousel from './_components/ProductCarousel';
import ContactBar from './_components/index/ContactBar';
import AboutGraniteSink from './_components/index/AboutGraniteSink';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainPagebanners />
      <ContactBar />

      <div className="container">
        <ProductCarousel slug="granite-sink" title="سینک گرانیتی" />
      </div>
      <AboutGraniteSink />
    </main>
  );
}
