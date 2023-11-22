import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const role = localStorage.getItem("role");
  return (
    <aside className="sticky top-0 h-full min-w-fit w-80 bg-gray-100 text-gray-800 p-4 shadow-sm">
      <nav className="space-y-2">
        {role === "member" && (
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="w-full flex items-center">
              <div className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                <svg
                  className=" w-4 h-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M13 5v2" />
                  <path d="M13 17v2" />
                  <path d="M13 11v2" />
                </svg>
                <span className="text-md font-medium">
                  Family member platform
                </span>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col pl-6">
                <Link
                  to="/member/jobs"
                  className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500"
                >
                  <span className="text-md font-medium">My jobs</span>
                </Link>
                <Link
                  to="/member/appointments"
                  className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500"
                >
                  <span className="text-md font-medium">My appointments</span>
                </Link>
                <Link
                  to="/member/caregivers"
                  className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500"
                >
                  <span className="text-md font-medium">Caregivers</span>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}

        {role === "caregiver" && (
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="w-full flex items-center">
              <div className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                <svg
                  className=" w-4 h-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M13 5v2" />
                  <path d="M13 17v2" />
                  <path d="M13 11v2" />
                </svg>
                <span className="text-md font-medium">Caregiver platform</span>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col pl-6">
                <Link
                  to="/caregiver/jobs"
                  className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500"
                >
                  <span className="text-md font-medium">Jobs</span>
                </Link>
                <Link
                  to="/caregiver/applications"
                  className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500"
                >
                  <span className="text-md font-medium">My applications</span>
                </Link>
                <Link
                  to="/caregiver/appointments"
                  className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500"
                >
                  <span className="text-md font-medium">My appointments</span>
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
