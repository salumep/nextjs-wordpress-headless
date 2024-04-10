export const allProductsQuery = `
query GetProductsEdges {
    products {
      nodes {
      id
      title
      date
      slug
      imageGallery {
        id
        url
      }
      productFeatures {
        size
        model
      }
      
    }
      }
}

    `;
