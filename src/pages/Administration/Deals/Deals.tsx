import { useEffect, useState } from "react";
import { Layout } from "@/components";
import { getCaregivers } from "../Organizations/api/getOrganizations/getOrganizations";
import { GetCaregiverData } from "@/ts/types";

const Deals: React.FC = () => {
  const [caregivers, setCaregivers] = useState<GetCaregiverData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCaregivers = async () => {
      try {
        const result = await getCaregivers();
        if (result.status === 200) {
          setCaregivers(result.data.caregivers);
        } else {
          console.error("Failed to fetch caregivers");
        }
      } catch (error) {
        console.error("Error fetching caregivers", error);
      }
    };

    fetchCaregivers();
  }, []);

  const handleSearchChange = (e: string) => {
    setSearchTerm(e);
  };

  const handleMakeAppointment = (caregiverID: string) => {
    // Implement functionality to make an appointment
    console.log(`Make appointment with Caregiver ID: ${caregiverID}`);
  };

  const filteredCaregivers = caregivers.filter(
    (caregiver) =>
      caregiver.CaregivingType.toLowerCase().includes(
        searchTerm.toLowerCase()
      ) || caregiver.HourlyRate.toString().includes(searchTerm)
  );

  return (
    <Layout>
      <p className="text-xl font-semibold">Caregivers</p>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search caregivers..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="px-4 py-2 border rounded"
        />
      </div>
      <div className="mt-4">
        {filteredCaregivers.map((caregiver) => (
          <div
            key={caregiver.CaregiverUserID}
            className="border rounded p-4 mb-4 flex justify-between"
          >
            <div>
              <img
                src="https://www.isavta.co.il/content/migrated-a779904c62a810bcaef859555e16fdc2-592.jpg"
                alt="Caregiver"
                className="w-16 h-16 rounded-full mb-2"
              />
              <p>Caregiving Type: {caregiver.CaregivingType}</p>
              <p>Hourly Rate: ${caregiver.HourlyRate}</p>
              {/* Add more details as needed */}
            </div>
            <button
              onClick={() => handleMakeAppointment(caregiver.CaregiverUserID)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Make Appointment
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Deals;
