import { Icategory } from './category';

export interface IProduct {
  id?: number;
  date?: string;
  slug?: string;
  status?: string;
  type?: string;
  link?: string;
  title?: {
    rendered: string;
  };
  chromatplus_categories?: Icategory[];
  product_features?: string | HTMLElement;
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
  image_gallery: IAttachment[];
}

export type IAttachment = {
  id: number;
  url: string;
};
