import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserFromToken, logOutUser } from "../utils/auth";
import apiService from "../apiService";

const PrivateRoute = ({ element }) => {
  const [isTokenValid, setIsTokenValid] = useState(null);
  const token = localStorage.getItem("accessToken");
  const user = getUserFromToken();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await apiService.auth.verifyToken()
        if (response.success) {
          setIsTokenValid(response.data.isValid);
        } else {
         logOutUser()
        }
      } catch (error) {
        setIsTokenValid(false);
        logOutUser()
      }
    };

    if (token) {
      verifyToken();
    } else {
      setIsTokenValid(false);
    }
  }, [token]);

  if (isTokenValid === null) {
    return <></>;
  }

  if (!isTokenValid) {
    return <Navigate to="/" replace />;
  }

  if (user) {
    return element;
  } else {
    return <Navigate to="/unauthorized" replace />;
  }
};

export default PrivateRoute;
