// import React from "react";
// import "./Graph.scss";


// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// // import type { ChartData, ChartOptions } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// // interface LineProps {
// //   options: ChartOptions<'line'>;
// //   data: ChartData<'line'>;
// // }

// // Define the type of the patient prop
// type Patient = {
//   diagnosis_history: {
//     month: string;
//     year: number;
//     blood_pressure: {
//       systolic: {
//         value: number;
//       };
//       diastolic: {
//         value: number;
//       };
//     };
//   }[];
// };

// // Define the type of the props
// type Props = {
//   patient: Patient;
// };
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );


// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display:false,
//     //   position: 'right' as const,
//     },
//     title: {
//       display: false,
//       // text: 'Blood Pressure',
//     },
//   },
// };
// // diagnosis_history": [
// //   {
// //     "month": "March",
// //     "year": 2024,

// // type ChartData = {
// //   labels: string[];
// //   datasets: {
// //       label: string;
// //       data: number[];
// //       borderColor: string; // ensure this is a valid CSS color (string)
// //       backgroundColor: string; // ensure this is a valid CSS color (string)
// //       borderWidth: number; // correct type from string to number
// //       borderStyle?: string; // optional, ensure valid CSS border style if used
// //   }[];
// // };
// const diagnosisHistory = patient.diagnosis_history;

// const data = {
//   labels: diagnosisHistory.map((item: { month: string; year: number }) => `${item.month} ${item.year}`),
//   datasets: [{
//     label: 'Systolic',
//     data: diagnosisHistory.map((item: { blood_pressure: { systolic: { value: number } } }) => item.blood_pressure.systolic.value),
//     fill: false,
//     backgroundColor: 'rgb(255, 99, 132)',
//     borderColor: 'rgba(255, 99, 132, 0.2)',
//   },
//   {
//     label: 'Diastolic',
//     data: diagnosisHistory.map((item: { blood_pressure: { diastolic: { value: number } } }) => item.blood_pressure.diastolic.value),
//     fill: false,
//     backgroundColor: 'rgb(54, 162, 235)',
//     borderColor: 'rgba(54, 162, 235, 0.2)',
//   },
//   //   {
//   //     label: 'Systolic',
//   //     data: [65, 59, 80, 81, 56, 55, 40],
//   //     borderColor: '#E66FD2',
//   //     backgroundColor: '#E66FD2',
//   //     borderWidth: 1, // Changed from string to number
//   //     borderStyle: 'solid',
//   //   },
//   //   {
//   //     label: 'Diastolic',
//   //     data: [62, 9, 80, 81, 56, 55, 40],
//   //     // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//   //     borderColor: ' #8C6FE6',
//   //     backgroundColor: ' #8C6FE6',
//   //     borderWidth: 1, // Changed from string to number
//   //     borderStyle: 'solid',
//   //   },
// ],
// };



// const Graph: React.FC<Props> = ({ patient }) => {
//   return <Line className="graph" options={options} data={data} />;
// }

// export default Graph;


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
import { Line } from 'react-chartjs-2';

// Define the type of the patient prop
type Patient = {
  diagnosis_history: {
    month: string;
    year: number;
    blood_pressure: {
      systolic: {
        value: number;
      };
      diastolic: {
        value: number;
      };
    };
  }[];
};

// Define the type of the props
interface Props {
  patient: Patient;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        autoSkip: false,
        maxRotation: 0,
        minRotation: 0
      }
    }
  }
};

const Graph: React.FC<Props> = ({ patient }) => {
  const { diagnosis_history } = patient;
  const lastSixMonths = diagnosis_history.reverse().slice(0,6);

  const data = {
    labels: lastSixMonths.map((item) => `${item.month.slice(0, 3)} ${item.year}`).reverse(),
    datasets: [
      {
        label: 'Systolic',
        data: lastSixMonths.map((item) => item.blood_pressure.systolic.value).reverse(),
        borderColor: '#E66FD2',
        backgroundColor: '#E66FD2',
        borderWidth: 1,
      },
      {
        label: 'Diastolic',
        data: lastSixMonths.map((item) => item.blood_pressure.diastolic.value).reverse(),
        borderColor: '#8c6fe6',
        backgroundColor: '#8c6fe6',
        borderWidth: 1,
      }
    ],
  };

  return <Line className="graph" options={options} data={data} />;
}

export default Graph;
