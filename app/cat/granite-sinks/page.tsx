import { IProduct } from '../../../types/products';
import ProductCarouselCard from '../../../components/product/ProductCard';
import BreadCrumb from '../../../components/share/BreadCrumb';
import Image from 'next/image';
import { GET_PRODUCTS_ENDPOINT } from '../../../utils/constant/endPoints';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function Page() {
  const data = await getData();

  return (
    <div className="container my-6">
      <div className="breadCrumbWrap mb-6">
        <BreadCrumb currentpageTitle={'سینک گرانیتی '} />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 ">
          <Image
            src="/images/granite-sink.jpg"
            alt={'سینک گرانیتی'}
            width={1920}
            height={700}
            className="rounded-md"
          />
        </div>
        <div className="col-span-8">
          <Image
            src={'/images/granite-sink-2.jpg'}
            alt={'سینک گرانیتی'}
            width={1920}
            height={700}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 my-6">
        {data.length > 0 &&
          data.map((product: IProduct) => (
            <div className=" overflow-hidden" key={product.id}>
              <ProductCarouselCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
}
async function getData() {
  const res = await fetch(GET_PRODUCTS_ENDPOINT);

  return res.json();
}
