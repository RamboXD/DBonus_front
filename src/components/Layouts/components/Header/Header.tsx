import { Button } from "@/components";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="px-10 py-4 h-[8vh] shadow-sm flex justify-end bg-white z-50">
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
