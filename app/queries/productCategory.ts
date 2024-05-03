export const productSlugQuery = `
query GetProductCategory($slug:ID!)  {
    productCategory(id:$slug, idType: SLUG ) {
    id
    title
    date
    slug
   
  }
}

    `;
