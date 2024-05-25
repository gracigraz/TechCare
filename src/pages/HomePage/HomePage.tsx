import React from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Patients from "../../components/Patients/Patients";
import lady from "../../assets/images/lady.png";

const Home: React.FC = () => {
    return (
		<>
			<main className="home">
                <Header/>
                <Patients patients={[
                    {name: "John Doe", profile_picture: lady, gender: "Female", age:18} , {name: "Jane Doe", profile_picture: lady, gender: "Female", age:18},  { name: "John Smith", profile_picture: lady, gender: "Female", age:21 }    ]}/>
            </main>
            </>
	);
};

export default Home;