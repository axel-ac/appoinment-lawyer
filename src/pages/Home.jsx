import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Lawyers from "../components/Lawyers";
import {lawyerData} from "../helper/data"
import { appointmentData } from "../helper/data";

const Home = () => {
    const [lawyers, setLawyers] = useState(lawyerData)
    const [appointments, setAppointments] = useState(appointmentData);
    console.log(lawyers)
    console.log(setLawyers)
    
  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">World Law Office</h1>
      <Lawyers lawyers={lawyers} />
      <AppointmentList />
    </main>
  );
};

export default Home;
