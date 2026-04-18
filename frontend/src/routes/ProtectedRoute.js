const {Navigate} = require("react-router-dom");
const { getToken } = require("../utils/auth");

const ProtectedRoute = ({ children }) => {
  const token = getToken();

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;