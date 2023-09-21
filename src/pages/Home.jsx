import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Lawyers from "../components/Lawyers";
import { lawyerData } from "../helper/data";
import { appointmentData } from "../helper/data";

const Home = () => {
  const [lawyers, setLawyers] = useState(lawyerData);
  const [appointments, setAppointments] = useState(appointmentData);
  console.log(lawyers);
  console.log(setLawyers);
  console.log(appointments);
  console.log(setAppointments);

  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">World Law Office</h1>
      <Lawyers
        lawyers={lawyers}
        appointments={appointments}
        setAppointments={setAppointments}
      />
      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </main>
  );
};

export default Home;
