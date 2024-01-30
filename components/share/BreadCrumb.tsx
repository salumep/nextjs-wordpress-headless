import React from 'react';
import { Icategory } from '../../types/category';
import Link from 'next/link';

export default function BreadCrumb({
  categories,
  currentpageTitle,
}: {
  categories?: Icategory[];
  currentpageTitle: string;
}) {
  return (
    <div className="breadCrumb text-color-text-200 flex text-sm">
      <Link href="/">خانه/</Link>
      {categories &&
        categories.map((cat: Icategory) => (
          <span key={cat.id}>{cat.name}/</span>
        ))}
      <div>{currentpageTitle}</div>
    </div>
  );
}
