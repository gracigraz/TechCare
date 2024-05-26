import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Patients from "../../components/Patients/Patients";
import PatientProfile from "../../components/PatientProfile/PatientProfile";

import lady from "../../assets/images/lady.png";

const Home: React.FC = () => {
    // const [patient, setPatient] = useState<Patient | null>(null);

    // useEffect(() => {
    //   fetchPatientData();
    // }, []);
    return (
		<>
            <Header/>
            <main className="home">
            <Patients patients={[
                    {name: "John Doe", profile_picture: lady, gender: "Female", age:18} , {name: "Jane Doe", profile_picture: lady, gender: "Female", age:18},  { name: "John Smith", profile_picture: lady, gender: "Female", age:21 }    ]}/>
                
            <section className="home__diagnosis-info">
               </section>
               <section className="home__patient-info">
               <PatientProfile patient={{name: "Jessica Taylor",
                                gender: "Female",
                                age: 28,
                                profile_picture: "https://fedskillstest.ct.digital/4.png",
                                date_of_birth: "1996-08-23",
                                phone_number: "(415) 555-1234",
                                emergency_contact: "(415) 555-5678",
                                insurance_type: "Sunrise Health Assurance"}}/>
               </section>
            
            </main>
            </>
	);
};

export default Home;