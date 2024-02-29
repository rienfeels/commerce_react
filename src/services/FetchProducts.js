// FetchProducts.js
export const FetchProducts = async (url) => {
  try {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default FetchProducts;
