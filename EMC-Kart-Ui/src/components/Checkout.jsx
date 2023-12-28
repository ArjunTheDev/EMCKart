import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const { checkoutProducts } = useSelector((state) => state.user);
    return (
        <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {checkoutProducts.map((product) => (
            <div className="border p-4 mb-4">
                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600">${product.price}</p>
            </div>
            ))}
        </div>
        <div className="mt-8 p-4 border-t">
            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
            <p className="text-gray-600">Total: ${checkoutProducts.reduce((acc, curr) => Number(acc) + Number(curr.price), 0)}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">Place Order</button>
        </div>
        </div>
    );
};

export default Checkout;
