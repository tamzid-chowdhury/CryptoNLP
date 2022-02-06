import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Daily Number of Sentiments'
    },
  },
};

const labels = ['Dec 28', 'Dec 29', 'Dec 30', 'Dec 31', 'Jan 1', 'Jan 2', 'Jan 3'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Positive',
      data: labels.map(() => Math.round(Math.random() * (80 - 40) + 40)),
      borderColor: '	rgb(173, 216, 230)',
      backgroundColor: 'rgb(173, 216, 230, 0.5)',
    },
    {
      label: 'Negative',
      data: labels.map(() => Math.round(Math.random() * (650 - 400) + 400)),
      borderColor: '#C70039 ',
      backgroundColor: 'rgb(199, 0, 57,0.5) ',
    },
    {
      label: 'Neutral',
      data: labels.map(() => Math.round(Math.random() * (2600 - 1800) + 1800)),
      borderColor: '#FFC300',
      backgroundColor: 'rgb(255, 195, 0, 0.5)',
    }
    
  ],
};

export default function App() {
  return <Line margin="20px" options={options} data={data} />;
}