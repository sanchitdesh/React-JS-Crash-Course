import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (user) {
    return <div>Welcome, {user.userName}</div>;
  } else {
    return <div>All fields are mandatory...</div>;
  }
};

export default Profile;
