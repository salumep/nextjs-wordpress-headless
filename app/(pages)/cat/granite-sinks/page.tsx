import { IProduct } from '../../../_lib/types/products';
import BreadCrumb from '../../../_components/share/BreadCrumb';
import Image from 'next/image';
import ProductList from '../../../_components/ProductList';
import { allProductsQuery } from '../../../queries/allProducts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
/**
 * ------------------------------------------------------------------------------------------------
 * get all products
 * ------------------------------------------------------------------------------------------------
 */
async function getAllProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 60,
    },
    body: JSON.stringify({
      query: allProductsQuery,
    }),
  });
  const { data } = await res.json();
  if (data && data.products.nodes) {
    return data.products.nodes;
  } else {
    return notFound(); // Handle 404 if product not found
  }
}
/**
 * ------------------------------------------------------------------------------------------------
 *add seo metadata
 * ------------------------------------------------------------------------------------------------
 */
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'سینک گرانیتی کرومات پلاس',
    alternates: {
      canonical: '/',
    },
  };
}
export default async function Page() {
  const data: IProduct[] = await getAllProducts();

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

      {data.length > 0 && <ProductList data={data} />}
    </div>
  );
}
