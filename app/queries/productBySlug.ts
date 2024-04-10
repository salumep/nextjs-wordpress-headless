export const productSlugQuery = `
query GetProduct($slug:ID!)  {
  product(id: $slug, idType: SLUG) {
    id
    title
    date
    slug
    categories {
      nodes {
        id
        name
        slug
      }
    }
    imageGallery {
      id
      url
    }
    productFeatures {
      material
      size
      colors
      model
    }
    productShortDesc
    
  }
}

    `;
