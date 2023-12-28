import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { clearCheckout } from '../store/userStore';

const Checkout = () => {
    const { userData, checkoutProducts } = useSelector((state) => state.user);
    const totalPrice = checkoutProducts.reduce((acc, curr) => Number(acc) + Number(curr.price), 0);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initPayment = (data) => {
		const options = {
			key: "rzp_test_4cJgPWGo6FkNOF",
			amount: data.amount,
			currency: data.currency,
			description: `${userData?.name + ' Transaction'}`,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:8080/api/product/verifyCheckout";
					const { data } = await axios.post(verifyUrl, response);
                    dispatch(clearCheckout());
                    navigate('/finalFun');
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:8080/api/product/checkoutProducts";
			const { data } = await axios.post(orderUrl, { amount: totalPrice });
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

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
            <p className="text-gray-600">Total: ${totalPrice}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full" onClick={() => handlePayment()}>Place Order</button>
        </div>
        </div>
    );
};

export default Checkout;
