import PropTypes from "prop-types";
import NotFound from "../pages/NotFound";
import { useGetProfile } from "../services/user/userServices";

const ProtectedRoute = ({ children }) => {
  const user = useGetProfile();

  if (user.isSuccess) {
    return children;
  }

  if (user.isError) {
    return <NotFound />;
  }
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
