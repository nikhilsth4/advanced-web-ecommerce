import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PaymentMethodPieChart = ({ userOrders }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // const userOrders = orders.filter((order) => order.user === userId);

    let creditCardCount = 0;
    let blockchainCount = 0;

    userOrders?.forEach((order) => {
      if (order.paymentMethod === "credit_card") {
        creditCardCount++;
      } else if (order.paymentMethod === "blockchain") {
        blockchainCount++;
      }
    });

    const pieChartData = {
      labels: ["Credit Card", "Blockchain"],
      datasets: [
        {
          data: [creditCardCount, blockchainCount],
          backgroundColor: ["#36a2eb", "#ff6384"],
        },
      ],
    };

    const options = {
      plugins: {
        title: {
          display: true,
          text: "Payment Method Distribution",
        },
      },
    };

    if (chartRef && chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: "pie",
        data: pieChartData,
        options: options,
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [userOrders]);

  return <canvas ref={chartRef} />;
};

export default PaymentMethodPieChart;
