import React, { useState } from 'react';
import {
    Button,
    Modal
  } from 'antd';
import { registerUser } from '../service/userService';
  

const SignupModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({});

  const showModal = () => {
    setIsModalOpen(true)
  };

  const handleOk = () => {
    setIsModalOpen(false)
  };

  const handleCancel = () => {
    setIsModalOpen(false)
  };

  const handleValueChange = (event) => {
    const {id, value} = event.target
    setUserData({...userData, [id] : value })
  }

  const handleSubmit = () => {
    console.log(userData)
    registerUser(userData)
  }

  return (
    <>
        <Button type="primary" onClick={showModal} className="bg-blue-500 hover:bg-red-200">
            Signup
        </Button>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]}>
          <div className="w-full max-w-md mx-auto">            
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
              <p className="text-black-700 text-xl text-center font-bold mb-2">EMCkart Sign Up</p>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  onChange={(event) => handleValueChange(event)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(event) => handleValueChange(event)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone_number"
                  type="tel"
                  placeholder="Enter your phone number"
                  onChange={(event) => handleValueChange(event)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(event) => handleValueChange(event)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Delivery Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="address"
                  type="text"
                  placeholder="Delivery Address"
                  onChange={(event) => handleValueChange(event)}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                  type="button"
                  onClick={() => handleSubmit()}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </Modal>
    </>
  );
};

export default SignupModal;
