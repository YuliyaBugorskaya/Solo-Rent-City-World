import React, { useState, useEffect } from 'react';
import OneAppartment from './OneAppartment';

export default function AllApartments({ masApartments, currentUserId }) {
  const [allApart, setAllApart] = useState(masApartments || []);

  // отображение карточек
  useEffect(() => {
    fetch('api/v1/apartments')
      .then((data) => data.json())
      .then((res) => setAllApart(res));
  }, []);
  console.log(allApart);

  return (
    <div style={{ margin: '10px' }}>
      <div className="row mt=5 mx-5" style={{ display: 'flex' }}>
        { allApart?.map((el) => (
          <OneAppartment
            apartment={el}
            key={el.id}
            setAllApart={setAllApart}
            currentUserId={currentUserId}
          />
        ))}

      </div>
    </div>
  );
}
