import React, { useState } from 'react';

export default function SignUp() {
  const [input, setInput] = useState({ name: '', email: '', pass: '' });
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/registration/reg', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location = '/';
    } else {
      alert('Пользователь с таким адресом электронной почты уже существует');
    }
  };

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={submitHandler} className="mt-5 pt-2">
      Sign Up
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
          <input onChange={(e) => changeHandler(e)} name="name" value={input.name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </label>
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
          <input onChange={(e) => changeHandler(e)} name="email" value={input.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
          <input onChange={(e) => changeHandler(e)} name="pass" value={input.pass} type="password" className="form-control" id="exampleInputPassword1" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
