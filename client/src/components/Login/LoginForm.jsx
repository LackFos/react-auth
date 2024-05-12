import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../services/user/userServices";

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

    loginMutation.mutate(credentials, {
      onSuccess: () => {
        navigate("/profile");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 flex flex-col gap-8 rounded-2xl w-[364px] shadow-sm"
    >
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          className="rounded-xl px-4 py-2 border-2 border-gray-200 outline-none text-sm font-medium focus:border-blue-300"
          value={credentials.email}
          onChange={(e) => handleInput("email", e.target.value)}
        />

        <input
          type="text"
          placeholder="Password"
          className="rounded-xl px-4 py-2 border-2 border-gray-200 outline-none text-sm font-medium focus:border-blue-300"
          value={credentials.password}
          onChange={(e) => handleInput("password", e.target.value)}
        />
      </div>
      <button className="bg-blue-500 text-white rounded-xl py-3 font-bold text-sm">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
