import React from 'react';
import './signIn.css';
import SubmitButton from "../components/SubmitButton";

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const defaultFormFields: SignUpData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const SignUp: React.FC = () => {
  const [signUpData, setSignUpData] = React.useState(defaultFormFields);
  
  const { firstName, lastName, email, password, passwordConfirm } = signUpData;

  const [showPassword, setShowPassword] = React.useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform password validation before making API call
    if (password !== passwordConfirm) {
      return;
    }

    // Add your API call here to register the user.
    // Example:
    // const response = await fetch('https://my-api.com/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(signUpData),
    // });
    // if (response.ok) {
    //   setMessage('User registered successfully!');
    // } else {
    //   setMessage('There was a problem registering the user. Please try again.');
    // }
  };

  return (
    <div className="container signIn-container">
      <h1 className="title signIn-title">Have an account?</h1>
      <h3 className="subtitle signIn-subTitle">
        New to Name? <span><a href="#">Sign Up</a></span>
      </h3>
      <form className="form signUp-form" onSubmit={handleSubmit}>
        <div className="form__fullName">
          <input
            type="text"
            className="form__input"
            name="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            type="text"
            className="form__input"
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            className="form__input form__email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
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
        <div className="form__group">
          <input
            className="form__password"
            type={showPassword ? "text" : "password"}
            required
            onChange={handleChange}
            name="passwordConfirm"
            value={passwordConfirm}
            placeholder="Confirm Password"
          />
        </div>
        <SubmitButton text="SIGN UP" />
      </form>
    </div>
  );
};

export default SignUp;
