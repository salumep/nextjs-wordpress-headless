import { IProduct } from '../../../types/products';
import ProductCarouselCard from '../../../components/productCarousel/ProductCard';
import BreadCrumb from '../../../components/share/BreadCrumb';

export default async function Page() {
  const data = await getData();

  return (
    <div className="container my-6">
      <div className="breadCrumbWrap mb-6">
        <BreadCrumb currentpageTitle={'سینک گرانیتی '} />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 ">
          <img src="/images/granite-sink.jpg" className="rounded-md" />
        </div>
        <div className="col-span-8">
          <img src="/images/granite-sink-2.jpg" className="rounded-md" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 my-6">
        {data.length > 0 &&
          data.map((product: IProduct) => (
            <div className=" overflow-hidden   ">
              <ProductCarouselCard product={product} noWidth={true} />
            </div>
          ))}
      </div>
    </div>
  );
}
async function getData() {
  const res = await fetch(
    'http://localhost/chromatplus/wp-json/wp/v2/chromatplus_products'
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
