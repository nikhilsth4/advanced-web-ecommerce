import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";

const OrdersTrendChart = ({ orders, userId }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Filter orders for the specific user
    const userOrders = orders.filter((order) => order.user === userId);

    // Group orders by date and count the number of orders for each day
    const ordersByDay = userOrders.reduce((acc, order) => {
      const date = new Date(order.orderDate);
      const formattedDate = date.toISOString().split("T")[0]; // Format date to ISO 8601
      acc[formattedDate] = (acc[formattedDate] || 0) + 1;
      return acc;
    }, {});

    console.log({ ordersByDay });

    // Extract dates and order counts
    const dates = Object.keys(ordersByDay);
    const orderCounts = Object.values(ordersByDay);

    // Prepare data for the line chart
    const lineChartData = {
      labels: dates,
      datasets: [
        {
          label: "Number of Orders",
          data: orderCounts,
          borderColor: "#36a2eb",
          fill: false,
        },
      ],
    };

    const options = {
      scales: {
        x: {
          type: "time",
          time: {
            unit: "day",
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
          },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Number of Orders",
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Order Trends Over Time",
        },
      },
    };

    if (chartRef && chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: "line",
        data: lineChartData,
        options: options,
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [orders, userId]);

  return <canvas ref={chartRef} />;
};

export default OrdersTrendChart;
