import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { makeAuthenticatedRequest } from "../../service/axiosService";
import { API_METHODS } from "../../utility/constant";
import { getImageUrl } from "../../service/firebaseService";
import { Spin } from "antd";

const Product = () => {
    const [productList, SetProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        makeAuthenticatedRequest('api/product/', API_METHODS.GET).then((response) => {
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
        setLoading(false)
    };

    return ( <>
        {loading ? 
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <Spin size="large" />
        </div> :
        <div className="flex justify-center flex-wrap gap-y-6 gap-x-6 mt-2">
            { productList.map((product) => (
                <div key={product.id}>
                    <ProductCard product={product}/>
                </div>
            ))}
        </div>}
    </> );
}

export default Product;