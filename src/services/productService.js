export async function getProductList(searchTerm){
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    if(!response.ok){
        // eslint-disable-next-line
        throw { message: response.statusText, status: response.status };
    }
    const data = await response.json()
    return data;
}

export async function getProduct(id){
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    // eslint-disable-next-line
    if(!response.ok){
        throw { message: response.statusText, status: response.status };
    }
    const data = await response.json()
    return data;
}

export async function getFeaturedList(){
    // eslint-disable-next-line
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    if(!response.ok){
        throw { message: response.statusText, status: response.status };
    }
    const data = await response.json()
    return data;
}