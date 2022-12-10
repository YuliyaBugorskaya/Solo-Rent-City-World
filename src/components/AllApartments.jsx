import React, { useState, useEffect } from 'react';
import OneAppartment from './OneAppartment';

export default function AllApartments({ masApartments, currentUserId }) {
  const [input, setInput] = useState({
    ap_name: '', description: '', rooms: '', link: '',
  });

  const [allApart, setAllApart] = useState(masApartments || []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/addapartment', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),

    });
    setInput({
      ap_name: '', description: '', rooms: '', link: '',
    });
  };

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // отображение карточек
  //   useEffect(() => {
  //     fetch('api/v1/addapartment')
  //       .then((data) => data.json())
  //       .then((res) => setAllApart(res));
  //   }, []);
  //   console.log(allApart);

  return (
    <div>
      <div className="form-reg">

        <form onSubmit={submitHandler} className="mt-5 pt-2">
          <h3>Add Apartment</h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <h4>Name</h4>
              <input onChange={(e) => changeHandler(e)} name="ap_name" value={input.ap_name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <h4>Description</h4>
              <input onChange={(e) => changeHandler(e)} name="description" value={input.description} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <h4>Rooms</h4>
              <input onChange={(e) => changeHandler(e)} name="rooms" value={input.rooms} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              <h4>Photo</h4>
              <input onChange={(e) => changeHandler(e)} name="link" value={input.link} type="text" className="form-control" id="exampleInputPassword1" />
            </label>
          </div>
          <button type="submit" className="btn btn-secondary">Submit</button>
        </form>

      </div>

      {/* <div className="row mt=5 mx-5" style={{ display: 'flex' }}>
        { allApart?.map((el) => (
          <OneAppartment
            apartment={el}
            key={el.id}
            setAllApart={setAllApart}
            // currentUserId={currentUserId}
          />
        ))}

      </div> */}

    </div>
  );
}
