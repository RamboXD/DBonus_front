import { useEffect, useState } from "react";
import { Layout } from "@/components";
import {
  AppointmentData,
  getAppointments,
} from "../Organizations/api/getOrganizations/getOrganizations";

const Appointments: React.FC = () => {
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const result = await getAppointments();
        if (result.status === 200) {
          setAppointments(result.data.appointments);
        } else {
          console.error("Failed to fetch appointments");
        }
      } catch (error) {
        console.error("Error fetching appointments", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <Layout>
      <p className="text-xl font-semibold">Appointments</p>
      <div className="mt-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.AppointmentID}
            className="border rounded p-4 mb-4"
          >
            {/* <p>Appointment ID: {appointment.AppointmentID}</p> */}
            <p>
              Caregiver Name: {appointment.Caregiver.User.GivenName}{" "}
              {appointment.Caregiver.User.Surname}
            </p>
            <p>
              Appointment Date:{" "}
              {new Date(appointment.AppointmentDate).toLocaleDateString()}
            </p>
            <p>
              Appointment Time:{" "}
              {new Date(appointment.AppointmentTime).toLocaleTimeString()}
            </p>
            <p>Work Hours: {appointment.WorkHours}</p>
            <p>Status: {appointment.Status}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Appointments;
