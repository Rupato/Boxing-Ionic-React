import React from 'react'

  const defaultFormFields = {
    first_name: "",
    last_name: "",
  };

const SignIn = () => {

  const [formFields, setFormFields] = React.useState(defaultFormFields);

  const { first_name, last_name } = formFields;

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }
  const onSubmit = () => {
    console.log(formFields);
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: 100,
        }}
      >
        <div>First Name</div>
        <input
          type="text"
          required
          onChange={(e) => handleChange(e)}
          name="first_name"
          value={first_name}
        />
        <div>Last Name</div>
        <input
          type="text"
          required
          onChange={(e) => handleChange(e)}
          name="last_name"
          value={last_name}
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </>
  );
}

export default SignIn;