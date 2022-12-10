import React from 'react';

export default function SignIn() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/registration/avt', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location = '/';
    } else {
      window.location = '/reg';
    }
  };

  return (
    <div className="form-reg">
      <form onSubmit={submitHandler} className="mt-5 pt-2">
        <h3>Sign In</h3>
        <div className="mb-3">

          <label htmlFor="exampleInputEmail1" className="form-label">
            <h4>Email address</h4>
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            <h4>Password</h4>
            <input name="pass" type="password" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    </div>
  );
}
