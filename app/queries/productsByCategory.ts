export const allProductsQuery = `
query GetProductsEdges($slug: String!) {
    products(where: {categorySlug: [$slug]}) {
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
