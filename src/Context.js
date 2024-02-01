import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const RevenueContext = createContext();

export const RevenueProvider = ({ children }) => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch order data
        const ordersResponse = await axios.get(
          "http://localhost:4000/order/all"
        );

        // Update total orders
        setTotalOrders(ordersResponse.data.length);

        // Calculate total revenue
        const revenue = ordersResponse.data.reduce(
          (acc, data) => acc + data.price * data.quantity,
          0
        );

        // Update total revenue
        setTotalRevenue(revenue);

        // Fetch user data
        const usersResponse = await axios.get(
          "http://localhost:4000/user"
        );
  if(usersResponse.data.users.length>0){
    setTotalUsers(usersResponse.data.users.length)
  }else{
    setTotalUsers(0)
  }
    console.log("user", )
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const updateTotalRevenue = (newTotalRevenue) => {
    setTotalRevenue(newTotalRevenue);
  };

  const updateTotalOrders = (newTotalOrders) => {
    setTotalOrders(newTotalOrders);
  };

  const updateTotalUsers = (newTotalUsers) => {
    setTotalUsers(newTotalUsers);
  };
  return (
    <RevenueContext.Provider
      value={{
        totalRevenue,
        updateTotalRevenue,
        totalOrders,
        updateTotalOrders,
        totalUsers,
        updateTotalUsers,
      }}
    >
      {children}
    </RevenueContext.Provider>
  );
};

export const useRevenue = () => {
  return useContext(RevenueContext);
};
