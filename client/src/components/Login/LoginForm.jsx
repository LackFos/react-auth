import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../services/user/userServices";
import IconEmail from "../icons/IconEmail";
import IconLocked from "../icons/IconLocked";

const LoginForm = () => {
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInput = (field, value) => {
    setCredentials((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginMutation.isPending) return;

    loginMutation.mutate(credentials, {
      onSuccess: () => navigate("/profile"),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 flex flex-col gap-8 rounded-3xl w-[364px] shadow-card"
    >
      <div className="flex flex-col gap-4">
        <div className="relative flex">
          <input
            type="text"
            placeholder="Email"
            className="peer w-full rounded-xl pl-14 pr-4 py-2 border-2 border-gray-200 placeholder-gray-500 outline-none text-sm font-medium focus:border-blue-300 focus:shadow-input"
            value={credentials.email}
            onChange={(e) => handleInput("email", e.target.value)}
            required
          />

          <div className="peer-focus:text-blue-500 absolute top-1/2 -translate-y-1/2 pl-4 text-gray-500">
            <IconEmail />
          </div>
        </div>

        <div className="relative flex">
          <input
            type="password"
            placeholder="Password"
            className="peer rounded-xl w-full pl-14 pr-4 py-2 border-2 border-gray-200 placeholder-gray-500 outline-none text-sm font-medium focus:border-blue-300 focus:shadow-input"
            value={credentials.password}
            onChange={(e) => handleInput("password", e.target.value)}
            required
          />

          <div className="peer-focus:text-blue-500 absolute top-1/2 -translate-y-1/2 pl-4 text-gray-500">
            <IconLocked />
          </div>
        </div>
      </div>
      <button className="bg-blue-500 text-white rounded-full py-3 font-bold text-sm shadow-button">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
