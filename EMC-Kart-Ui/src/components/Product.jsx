import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { makeAuthenticatedRequest } from "../service/axiosService";
import { API_METHODS } from "../utility/constant";
import { getImageUrl } from "../service/firebaseService";

const Product = () => {
    const [productList, SetProductList] = useState([]);

    useEffect(() => {
        makeAuthenticatedRequest('http://localhost:8080/api/product/', API_METHODS.GET).then((response) => {
            updateProductListWithImages(response.data)
        })
    }, []);

    const updateProductListWithImages = async (productList) => {
        const updatedProductList = [];
        
        for (const product of productList) {
            try {
                await getImageUrl(product.image_path).then((imageUrl) => {
                    const updatedProduct = { ...product, imageUrl };
                    updatedProductList.push(updatedProduct);
                })
            } catch (error) {
                console.error('Error updating product with image URL:', error);
            }
        }
        SetProductList(updatedProductList)
    };

    return ( <div className="flex justify-center flex-wrap gap-y-6 gap-x-6">
        { productList.map((product) => (
            <div key={product.id}>
                <ProductCard product={product}/>
            </div>
        ))}
    </div> );
}

export default Product;