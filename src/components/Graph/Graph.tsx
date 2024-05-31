import React from "react";
import "./Graph.scss";


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
// import type { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';

// interface LineProps {
//   options: ChartOptions<'line'>;
//   data: ChartData<'line'>;
// }


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
      display:false,
    //   position: 'right' as const,
    },
    title: {
      display: false,
      // text: 'Blood Pressure',
    },
  },
};
// diagnosis_history": [
//   {
//     "month": "March",
//     "year": 2024,

// type ChartData = {
//   labels: string[];
//   datasets: {
//       label: string;
//       data: number[];
//       borderColor: string; // ensure this is a valid CSS color (string)
//       backgroundColor: string; // ensure this is a valid CSS color (string)
//       borderWidth: number; // correct type from string to number
//       borderStyle?: string; // optional, ensure valid CSS border style if used
//   }[];
// };
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
       label: 'Systolic',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: '#E66FD2',
      backgroundColor: '#E66FD2',
      borderWidth: 1, // Changed from string to number
      borderStyle: 'solid',
    },
    {
      label: 'Diastolic',
      data: [62, 9, 80, 81, 56, 55, 40],
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: ' #8C6FE6',
      backgroundColor: ' #8C6FE6',
      borderWidth: 1, // Changed from string to number
      borderStyle: 'solid',
    },
  ],
};

export function Graph() {
  return <Line className="graph" options={options} data={data} />;
}

