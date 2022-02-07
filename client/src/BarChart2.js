import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    },
    title: {
      display: true,
      text: 'Number of Daily Sentiments',
    },
  },
};

const labels = ['Dec 28', 'Dec 29', 'Dec 30', 'Dec 31', 'Jan 1', 'Jan 2', 'Jan 3'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Negative',
      data: labels.map(() => Math.round(Math.random() * (650 - 400) + 400)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132) '
    },
    {
      label: 'Positive',
      data: labels.map(() => Math.round(Math.random() * (2600 - 1800) + 1800)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function BarChart2() {
  return <Bar options={options} data={data} />;
}
