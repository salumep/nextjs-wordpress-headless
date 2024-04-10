export const searchProductsQuery = `
query GetProductsEdges($keyword: String!) {
    products(where:{search:$keyword}) {
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
