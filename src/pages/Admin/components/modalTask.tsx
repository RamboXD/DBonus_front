// Import necessary components
import React, { useState } from "react";
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
import { TaskRega } from "../types/types";

interface ModalTaskProps {
  content: string;
  taskData: TaskRega;
  setTaskData: React.Dispatch<React.SetStateAction<TaskRega>>;
}
export function ModalTask({ content, taskData, setTaskData }: ModalTaskProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
          <DialogDescription>Enter task details below.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Task fields */}
            <Field
              name="title"
              label="Title"
              value={taskData.title}
              onChange={handleInputChange}
            />
            <Field
              name="description"
              label="Description"
              value={taskData.description}
              onChange={handleInputChange}
            />
            <Field
              name="where_from"
              label="Where From"
              value={taskData.where_from}
              onChange={handleInputChange}
            />
            <Field
              name="where_to"
              label="Where To"
              value={taskData.where_to}
              onChange={handleInputChange}
            />
            <Field
              name="distance"
              label="Distance"
              type="number"
              value={taskData.distance}
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
  value: string | number;
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
