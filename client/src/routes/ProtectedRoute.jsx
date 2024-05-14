import PropTypes from "prop-types";
import NotFound from "../pages/NotFound";
import { useGetProfile } from "../services/user/userServices";

const ProtectedRoute = ({ roles, children }) => {
  const user = useGetProfile();
  const allowedRoles = new Set(roles);

  let isUserAllowed = false;

  if (user.data && user.data.roles) {
    user.data.roles.forEach((role) => {
      if (allowedRoles.has(role)) isUserAllowed = true;
    });
  }

  if (user.isSuccess && isUserAllowed) {
    return children;
  }

  if (user.isError || (user.isSuccess && !isUserAllowed)) {
    return <NotFound />;
  }
};

ProtectedRoute.propTypes = {
  roles: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
