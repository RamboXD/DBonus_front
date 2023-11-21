import $api from "@/http";
import { GetCaregiverData } from "@/ts/types";

interface organizationResponse {
  JobID: string;
  MemberUserID: string;
  RequiredCaregivingType: string;
  OtherRequirements: string;
  DatePosted: string;
}
interface FormData {
  required_caregiving_type: string;
  other_requirements: string;
}

export interface AppointmentData {
  AppointmentID: string;
  CaregiverUserID: string;
  MemberUserID: string;
  AppointmentDate: string;
  AppointmentTime: string;
  WorkHours: number;
  Status: string;
  Caregiver: {
    CaregiverUserID: string;
    Photo: string; // Base64 encoded image string
    Gender: string;
    CaregivingType: string;
    HourlyRate: number;
    User: {
      UserID: string;
      Email: string;
      GivenName: string;
      Surname: string;
      City: string;
      PhoneNumber: string;
      ProfileDescription: string;
      Password: string;
    };
  };
  Member: {
    MemberUserID: string;
    HouseRules: string;
    User: {
      UserID: string;
      Email: string;
      GivenName: string;
      Surname: string;
      City: string;
      PhoneNumber: string;
      ProfileDescription: string;
      Password: string;
    };
  };
}

export const getOrganizations = () => {
  return $api.get<{ jobs: organizationResponse[] }>(`/member/jobs`);
};

export const createJob = (data: FormData) => {
  return $api.post<{ job: organizationResponse }>(`/member/createJob`, data);
};

export const getAppointments = () => {
  return $api.get<{ appointments: AppointmentData[] }>(
    `/member/getAppointments`
  );
};

export const getCaregivers = () => {
  return $api.get<{ caregivers: GetCaregiverData[] }>(`/member/getCaregivers`);
};
