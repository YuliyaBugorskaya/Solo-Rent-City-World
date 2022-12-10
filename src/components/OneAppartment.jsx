import React, { useState } from 'react';

export default function OneAppartment({ apartment, currentUserId, setAllApart }) {
  const [oneApart, setOneApart] = useState(apartment);

  const [isEdit, setIsEdit] = useState(false);

  const [text, setText] = useState(apartment.description);

  const deleteHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`api/v1/delApart/${apartment.id}`, {

      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id: apartment.id }),

    });

    if (response.ok) {
      setAllApart((prev) => prev.filter((el) => el.id !== apartment.id));
    }
  };

  const changeEditHandler = () => {
    setIsEdit(true);
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };
// не меняет в карточке, доделать !

  const saveEditHandler = async () => {
    const response = await fetch(`api/v1/editApart/${apartment.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ text }),

    });
    if (response.ok) {
      const data = await response.json();

      setAllApart((prev) => prev.map((el) => {
        if (el.id === apartment.id) {
          return ({
            ...el, el_description: data.el_description,
          });
        }
        return el;
      }));
      setIsEdit(false);
      setText('');
    }
  };

  return (

    <div className="card" style={{ width: '18rem' }}>
      <img src={oneApart.link} className="card-img-top" alt="photo" />
      <div className="card-body">
        <h5 className="card-title">{oneApart.ap_name}</h5>
        <p className="card-text">{oneApart.description}</p>
        { (oneApart?.user_id === currentUserId)
          ? (
            <div>

              <div>
                {isEdit
                  ? (
                    <>
                      <div className="input-group input-group-sm mt-3">
                        <input onChange={changeHandler} type="text" value={text} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                      </div>

                      <button onClick={saveEditHandler} type="button" className="btn btn-success">
                        Save
                      </button>
                    </>
                  )
                  : (
                    <button onClick={changeEditHandler} type="button" className="btn btn-secondary">
                      Edit
                    </button>
                  )}
              </div>

              <button onClick={(e) => deleteHandler(e)} type="button" className="btn btn-danger">
                Delete
              </button>

            </div>
          ) : (<div />)}

      </div>
    </div>
  );
}
