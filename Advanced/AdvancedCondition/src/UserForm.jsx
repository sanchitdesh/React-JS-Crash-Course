import { useCallback } from "react";
import { useState } from "react";

const UserForm = () => {
  const [userType, setUserType] = useState("guest");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    company: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState({});

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
    console.log("Form Submitted", userDetails, userType);
  };

  const validate = useCallback(() => {
    const newError = {};

    if (!userDetails.name) {
      newError.name = "Name is required";
    }

    if (!userDetails.email) {
      newError.email = "Email is required";
    }

    if (userType == "admin" && !userDetails.company) {
      newError.company = "Company is required";
    }

    setError(newError);

    return Object.keys(newError).length === 0;
  }, [userType, userDetails]);

  return (
    <div>
      {isSubmitted && (
        <div
          style={{
            backgroundColor: "darkgreen",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          Form Submitted Successfully
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={inputHandler}
            />
            {error.name && <p style={{ color: "red" }}>{error.name}</p>}
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={userDetails.email}
              onChange={inputHandler}
            />
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
          </label>
        </div>

        <div>
          <label>
            User Type:
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="guest">Guest</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </label>
        </div>

        {userType === "admin" && (
          <div>
            <label>
              Company:
              <input
                type="text"
                name="company"
                value={userDetails.company}
                onChange={inputHandler}
              />
              {error.company && <p style={{ color: "red" }}>{error.company}</p>}
            </label>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
