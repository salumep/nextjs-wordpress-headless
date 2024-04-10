import { Icategory } from './category';

export interface IProduct {
  id?: number;
  date?: string;
  slug?: string;
  status?: string;
  type?: string;
  link?: string;
  title?: string;
  productFeatures: { [key: string]: string[] | null };
  categories?: { nodes: Icategory[] };
  productShortDesc?: string | HTMLElement;
  content?: {
    rendered: string;
    protected?: boolean;
  };
  excerpt?: {
    rendered: string;
    protected?: boolean;
  };
  cf_fields?: {
    product_catalog: IAttachment;
    product_banner: IAttachment;
  };
  imageGallery: IAttachment[];
}

export type IAttachment = {
  id: number;
  url: string;
};
