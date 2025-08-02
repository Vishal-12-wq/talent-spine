import { jwtDecode } from "jwt-decode";

export const getUserFromToken = () => {
  const token = localStorage.getItem("accessToken");

  if (!token) return null;

  try {
    const user = jwtDecode(token);
    return user || null
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

export const redirectToRoleBasedRoute = (token, navigate) => {
  try {
    const decodedToken = jwtDecode(token);
    if (!decodedToken.userType) {
      localStorage.removeItem('accessToken')
      window.location.reload()
    }
    const userRole = decodedToken.userType;

    if (userRole === "admin" || userRole === 'vendor' || userRole === 'staff') {
      navigate("/crm/dashboard");
    } else if (userRole === "client") {
      navigate("/crm/dashboard");
      // navigate("/crm/clients");
    } else {
      navigate("/unauthorized");
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    navigate("/unauthorized");
    localStorage.removeItem('accessToken')
  }
};

export const logOutUser = () => {
  localStorage.removeItem('accessToken')
  window.location.href = '/'
}
