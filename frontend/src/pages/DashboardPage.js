import React, { useEffect, useState } from "react";
import PaymentMethodPieChart from "../components/PaymentMethodPieChart";
import OrdersTrendChart from "../components/OrdersTrendChart";
import ProductPopularityChart from "../components/ProductPopularityChart";
import PopularityPieChart from "../components/PopularityPieChart";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const DashboardPage = () => {
  const [userOrderData, setUserOrderData] = useState([]);
  const [allOrderData, setAllOrderData] = useState([]);
  const { user } = useAuth0();

  useEffect(() => {
    const getAllOrderData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/orders`);
      setAllOrderData(res.data);
    };
    const getUserOrderData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/orders/${user?.email}`
      );
      setUserOrderData(res.data);
    };
    getAllOrderData();
    getUserOrderData();
  }, [user?.email]);
  return (
    <div className="grid mx-auto my-4 sm:m-8 sm:gap-10 sm:grid-cols-2">
      <div className="basis-1/2 sm:content-center">
        <PaymentMethodPieChart userOrders={userOrderData} />
      </div>
      <div className="basis-1/2 sm:content-center">
        <OrdersTrendChart userOrders={userOrderData} />
      </div>
      <div className="basis-1/2 sm:content-center">
        <ProductPopularityChart orders={allOrderData} />
      </div>

      <div className="basis-1/2 sm:content-center">
        <PopularityPieChart orders={allOrderData} />
      </div>
    </div>
  );
};

export default DashboardPage;
