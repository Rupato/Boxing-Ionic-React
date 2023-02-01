import React from "react";
import SubmitButton from "../components/SubmitButton";
import './signIn.css'

const PasswordReset: React.FC = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hello');
  };

  return (
    <div className="container password-reset__container">
      <form className="form password-reset-form" onSubmit={handleSubmit}>
        <h1 className="title">Password Reset</h1>
        <h3 className="subtitle">Enter the email address you registered with and we'll send you a link to reset password</h3>
        <input
          className="form__input"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          required
        />
        <SubmitButton text="Reset Password" />
      </form>
    </div>
  );
};

export default PasswordReset;