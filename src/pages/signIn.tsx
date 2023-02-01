import React from "react";
import "./signIn.css";
import SubmitButton from "../components/SubmitButton";

interface FormFields {
  userName: string;
  password: string;
}

const defaultFormFields: FormFields = {
  userName: "",
  password: "",
};

const SignIn: React.FC = () => {
  const [formFields, setFormFields] = React.useState(defaultFormFields);
  const [showPassword, setShowPassword] = React.useState(false);

  const { userName, password } = formFields;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formFields);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container signIn-container">
      <h1 className="title signIn-title">Have an account?</h1>
      <h3 className="subtitle signIn-subTitle">
        New to Name? <span><a href="#">Sign Up</a></span>
      </h3>
      <form className="form signIn-form" onSubmit={onSubmit}>
        <input
          className="form__input"
          type="text"
          required
          onChange={handleChange}
          name="userName"
          value={userName}
          placeholder="Username"
        />
        <div className="form__group">
          <input
            className="form__password"
            type={showPassword ? "text" : "password"}
            required
            onChange={handleChange}
            name="password"
            value={password}
            placeholder="Password"
          />
          <span className="form__icon">
            <button type="button" onClick={togglePassword}>
              &#9757;
            </button>
          </span>
        </div>
        <SubmitButton text="SIGN IN" />
        <div className="form__forgot-password">
          <a>Forgot your password?</a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
