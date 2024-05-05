import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";
import NavBar from "./pages/NavBar";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

const EmailErrorMessage = () => {
  return <p className="FieldError">Please enter the valid email</p>;
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    if (
      validateEmail(email) &&
      firstName !== "" &&
      lastName !== "" &&
      password.value.length > 8 &&
      (role === "individual" || role === "business")
    ) {
      return true;
    } else {
      return false;
    }
  };

  const clearForm = () => {
    // Implement this function
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Sign Up</h2>
            <div className="Field">
              <label>
                First name <sup>*</sup>
              </label>
              <input
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="Field">
              <label>Last name</label>
              <input
                placeholder="Last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="Field">
              <label>
                Email address <sup>*</sup>
              </label>
              <input
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {validateEmail(email) ? <EmailErrorMessage /> : null}
            </div>
            <div className="Field">
              <label htmlFor="password">
                Password <sup>*</sup>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password.value}
                onChange={(e) => {
                  setPassword({ value: e.target.value, isTouched: true });
                }}
              />
              {password.isTouched && password.value.length < 8 ? (
                <PasswordErrorMessage />
              ) : null}
            </div>
            <div className="Field">
              <label>
                Role <sup>*</sup>
              </label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="role">Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button type="submit" disabled={!getIsFormValid()}>
              Create account
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default App;
