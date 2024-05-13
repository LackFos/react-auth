import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useGetProfile } from "../services/user/userServices";

const RedirectIfLoggedIn = ({ to, children }) => {
  const user = useGetProfile();

  if (user.isSuccess && user.data) {
    return <Navigate to={to} />;
  }

  if (user.isError) {
    return children;
  }
};

RedirectIfLoggedIn.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default RedirectIfLoggedIn;
