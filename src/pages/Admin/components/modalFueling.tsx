import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FuelingProfileRega } from "../types/types";
import { useState } from "react";

interface ModalProps {
  content: string;
  profileData: FuelingProfileRega;
  setProfileData: React.Dispatch<React.SetStateAction<FuelingProfileRega>>;
}
export function ModalFueling({
  content,
  profileData,
  setProfileData,
}: ModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name.startsWith("user.")) {
      setProfileData((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          [name.substring(5)]: value,
        },
      }));
    } else if (name.startsWith("fueling_person.")) {
      setProfileData((prev) => ({
        ...prev,
        fueling_person: {
          ...prev.fueling_person,
          [name.substring(14)]: value,
        },
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // await axios.post("https://your-api-endpoint.com/drivers", profileData);

      setTimeout(() => {
        setIsLoading(false);
        window.location.reload();
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting data:", error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{content}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{content}</DialogTitle>
          <DialogDescription>
            Create user and fueling person details below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <Field
              name="user.email"
              label="Email"
              value={profileData.user.email}
              onChange={handleInputChange}
            />
            <Field
              name="user.password"
              label="Password"
              type="password"
              value={profileData.user.password}
              onChange={handleInputChange}
            />

            <Field
              name="fueling_person.certification"
              label="Certification"
              value={profileData.fueling_person.certification}
              onChange={handleInputChange}
            />
            <Field
              name="fueling_person.name"
              label="Name"
              value={profileData.fueling_person.name}
              onChange={handleInputChange}
            />
            <Field
              name="fueling_person.surname"
              label="Surname"
              value={profileData.fueling_person.surname}
              onChange={handleInputChange}
            />
            <Field
              name="fueling_person.middleName"
              label="Middle Name"
              value={profileData.fueling_person.middleName}
              onChange={handleInputChange}
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const Field: React.FC<{
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
}> = ({ name, label, value, onChange, type = "text" }) => (
  <div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor={name} className="text-right">
      {label}
    </Label>
    <Input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="col-span-3"
    />
  </div>
);
