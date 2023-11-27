export type Driver = {
  DriverID: string;
  UserID: string;
  Government: string;
  Name: string;
  Surname: string;
  MiddleName: string;
  Address: string;
  Phone: string;
  Email: string;
  DrivingLicenseCode: string;
};
export type UserRega = {
  email: string;
  password: string;
};

export type DriverRega = {
  government: string;
  name: string;
  surname: string;
  middleName: string;
  address: string;
  phone: string;
  email: string;
  drivingLicenseCode: string;
};

export type DriverProfileRega = {
  user: UserRega;
  driver: DriverRega;
};
type FuelingRega = {
  certification: string;
  name: string;
  surname: string;
  middleName: string;
};

export type FuelingProfileRega = {
  user: UserRega;
  fueling_person: FuelingRega;
};

export type MaintenanceRega = {
  name: string;
  surname: string;
  middleName: string;
  qualifications: string;
  experience: string;
};

export type MaintenanceProfileRega = {
  user: UserRega;
  maintenance_person: MaintenanceRega;
};

export type TaskRega = {
  title: string;
  description: string;
  where_from: string;
  where_to: string;
  distance: number;
};

export type VehicleRega = {
  Model: string;
  Year: number;
  LicensePlate: string;
  SeatingCapacity: number;
  LastMaintenanceCheck: string;
  TotalDistanceCovered: number;
  FuelCapacity: number;
  FuelConsumed: number;
  Photo: string;
  Status: string; // "Active" || "In Maintenance" || "Inactive"
};