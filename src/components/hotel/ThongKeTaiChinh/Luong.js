import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
// import { id } from 'date-fns/locale';

const Luong = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: ["Lương", "Mua Hàng ", "Phí dịch vụ mạng"],
        datasets: [
          {
            data: [50, 20, 20],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 165, 0)",
              "RGB(0, 128, 0)",
            ],
          },
        ],
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <div>
      <canvas ref={chartRef} style={{ width: "200px", height: "100px" }} />
    </div>
  );
};

export default Luong;
