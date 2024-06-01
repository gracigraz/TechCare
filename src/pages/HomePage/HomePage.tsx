import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

import "./HomePage.scss";

import Header from "../../components/Header/Header";
import Patients from "../../components/Patients/Patients";
import PatientProfile from "../../components/PatientProfile/PatientProfile";
import DiagnosisHistory from "../../components/DiagnosisHistory/DiagnosisHistory";
import DiagnosisList from "../../components/DiagnosisList/DiagnosisList";
import LabResults from "../../components/LabResults/LabResults";

import {Patient} from "../../types";

const Home: React.FC = () => {
	const [patientsData, setPatientsData] = useState<Patient[]>([]);
	const [jessicaTaylor, setJessicaTaylor] = useState<Patient | undefined>();
	const username = process.env.REACT_APP_USERNAME;
	const password = process.env.REACT_APP_PASSWORD;
	const encodedCredentials = btoa(`${username}:${password}`);

	useEffect(() => {
		console.log("Fetching data...");
		const fetchData = async () => {
			try {
				const result = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
					headers: {
						Authorization: `Basic ${encodedCredentials}`,
					},
				});

				setPatientsData(result.data);
				const jessica = result.data.find((patient: Patient) => patient.name === "Jessica Taylor");
				setJessicaTaylor(jessica);
			} catch (error) {
				if (axios.isAxiosError(error)) {
					console.error("Axios error fetching data:", error.message);
					if (error.response) {
						// The request was made and the server responded with a status code
						// that falls out of the range of 2xx
						console.log("Response data:", error.response.data);
						console.log("Status code:", error.response.status);
						console.log("Headers:", error.response.headers);
					} else if (error.request) {
						// The request was made but no response was received
						console.log("Request:", error.request);
					} else {
						// Something happened in setting up the request that triggered an Error
						console.log("Error message:", error.message);
					}
				} else {
					// Handle non-Axios errors
					console.error("An unexpected error occurred:", error);
				}
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Header />
			<main className="home">
				<Patients patients={patientsData} />
				<section className="home__diagnosis-info">
					<DiagnosisHistory />
					<DiagnosisList patient={jessicaTaylor} />
				</section>
				<section className="home__patient-info">
					<PatientProfile patient={jessicaTaylor} />
					<LabResults patient={jessicaTaylor} />
				</section>
			</main>
		</>
	);
};

export default Home;
