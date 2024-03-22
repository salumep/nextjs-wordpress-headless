import { IProduct } from '../../../_lib/types/products';
import BreadCrumb from '../../../_components/share/BreadCrumb';
import Image from 'next/image';
import { GET_PRODUCTS_ENDPOINT } from '../../../_lib/constants/endPoints';
import ProductListContent from '../../../_components/ProductListContent';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function Page() {
  const res = await fetch(GET_PRODUCTS_ENDPOINT);
  const data: IProduct[] = await res.json();

  return (
    <div className="container ">
      <div className="breadCrumbWrap mb-6">
        <BreadCrumb currentpageTitle={'سینک گرانیتی '} />
      </div>
      <div className="grid lg:grid-cols-12 gap-4">
        <div className="col-span-4 hidden lg:block ">
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

      {data.length > 0 && <ProductListContent data={data} />}
    </div>
  );
}
