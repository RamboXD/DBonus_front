import { Login, Registration } from "@/pages";
import { Jobs } from "@/pages/Administration";
import Caregivers from "@/pages/Administration/Deals/Caregivers";
import Appointments from "@/pages/Administration/Employees/Appointments";
import JobApplicants from "@/pages/Administration/Organizations/JobApplicants";
import ApplicationList from "@/pages/Caregiver/Applications/ApplicationList";
import AppointmentList from "@/pages/Caregiver/Appointments/AppointmentList";
import JobList from "@/pages/Caregiver/Jobs/JobList";
import { IRoute, Role } from "@/ts/types";

export const routes: IRoute[] = [
  {
    name: "Worker Login",
    path: "/login",
    component: <Login />,
    roles: [Role.CLIENT, Role.ADMIN],
    isPublic: true,
  },
  {
    name: "Caregivers",
    path: "/member/caregivers",
    component: <Caregivers />,
    roles: [Role.CLIENT, Role.ADMIN],
    isPublic: false,
  },
  {
    name: "Organizations",
    path: "/member/jobs",
    component: <Jobs />,
    roles: [Role.CLIENT, Role.ADMIN],
    isPublic: false,
  },
  {
    name: "Employees",
    path: "/member/appointments",
    component: <Appointments />,
    roles: [Role.CLIENT, Role.ADMIN],
    isPublic: false,
  },
  {
    name: "Jobs",
    path: "/caregiver/jobs",
    component: <JobList />,
    roles: [Role.CLIENT, Role.ADMIN],
    isPublic: false,
  },
  {
    name: "Applications",
    path: "/caregiver/applications",
    component: <ApplicationList />,
    roles: [Role.CLIENT, Role.ADMIN],
    isPublic: false,
  },
  {
    name: "Appointments",
    path: "/caregiver/appointments",
    component: <AppointmentList />,
    roles: [Role.CLIENT, Role.ADMIN],
    isPublic: false,
  },
  {
    name: "JobApplicants",
    path: "/job-applicants/:id",
    component: <JobApplicants />,
    roles: [Role.CLIENT, Role.ADMIN],
    isPublic: false,
  },
  {
    name: "Registration",
    path: "/registration",
    component: <Registration />,
    roles: [Role.CLIENT, Role.ADMIN],
    isPublic: true,
  },
];
