import React from 'react';
import { Icategory } from '../../_lib/types/category';
import Link from 'next/link';

export default function BreadCrumb({
  categories,
  currentpageTitle,
}: {
  categories?: Icategory[];
  currentpageTitle?: string;
}) {
  return (
    <div className="breadCrumb border-t border-b border-gray-600 py-3  justify-center text-color-text-200 flex text-sm">
      <Link href="/">کرومات پلاس/</Link>
      {categories &&
        categories.map((cat: Icategory) => (
          <span key={cat.id} className="px-1">
            {cat.name}/
          </span>
        ))}
      <div className="text-primary">{currentpageTitle}</div>
    </div>
  );
}
