import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ProductPopularityChart = ({ orders }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize productCounts object
    const productCounts = {};

    // Count occurrences of each product
    orders.forEach((order) => {
      order.products.forEach((product) => {
        const { id, name } = product;
        if (!productCounts[id]) {
          productCounts[id] = { name, count: 0 };
        }
        productCounts[id].count += 1;
      });
    });

    // Sort products by popularity
    const sortedProducts = Object.values(productCounts)
      .sort((a, b) => b.count - a.count)
      .slice(0, 5); // Get top 5 products

    // Extract product names and counts for chart data
    const productNames = sortedProducts.map((product) => product.name);
    const productQuantities = sortedProducts.map((product) => product.count);

    // Prepare data for the pie chart
    const pieChartData = {
      labels: productNames,
      datasets: [
        {
          label: "Product Popularity",
          data: productQuantities,
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      plugins: {
        title: {
          display: true,
          text: "Most Popular Products",
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
  }, [orders]);

  return <canvas ref={chartRef} />;
};

export default ProductPopularityChart;
