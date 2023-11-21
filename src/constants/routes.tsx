import { Deals, Employees, Login, Organization, Registration } from "@/pages";
import { Jobs } from "@/pages/Administration";
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
    name: "Deals",
    path: "/administration/deals",
    component: <Deals />,
    roles: [Role.CLIENT, Role.ADMIN],
    isPublic: true,
  },
  {
    name: "Organizations",
    path: "/member/jobs",
    component: <Jobs />,
    roles: [Role.CLIENT, Role.ADMIN],
    isPublic: false,
  },
  {
    name: "Organizations",
    path: "/administration/organizations/:id",
    component: <Organization />,
    roles: [Role.CLIENT, Role.ADMIN],
    isPublic: false,
  },
  {
    name: "Employees",
    path: "/administration/employees",
    component: <Employees />,
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
