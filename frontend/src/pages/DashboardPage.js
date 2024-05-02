import React, { useEffect, useState } from "react";
import PaymentMethodPieChart from "../components/PaymentMethodPieChart";
import OrdersTrendChart from "../components/OrdersTrendChart";
import ProductPopularityChart from "../components/ProductPopularityChart";
import PopularityPieChart from "../components/PopularityPieChart";
import axios from "axios";

const DashboardPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/orders`);
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <div className="grid mx-auto my-4 sm:m-8 sm:gap-10 sm:grid-cols-2">
      <div className="basis-1/2">
        <PaymentMethodPieChart
          orders={data}
          userId="661e2324dc9ab3de6f31f18c"
        />
      </div>
      <div className="basis-1/2">
        <OrdersTrendChart orders={data} userId="661e2324dc9ab3de6f31f18c" />
      </div>
      <div className="basis-1/2">
        <ProductPopularityChart orders={data} />
      </div>

      <div className="basis-1/2">
        <PopularityPieChart orders={data} />
      </div>
    </div>
  );
};

export default DashboardPage;
