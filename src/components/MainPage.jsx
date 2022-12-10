import React, { useEffect, useState } from 'react';

export default function MainPage() {
  const [allCities, setAllCities] = useState([]); // все города и страны
  const [countries, setCountries] = useState([]);// только страны
  const [oneCountry, setOneCountry] = useState('Country'); // выбранная страна
  const [currCities, setCurrCities] = useState([]); // все города выбранной страны
  const [oneCity, setOnecity] = useState('City'); // Выбранный город
  const [state, setState] = useState('hidden');

  // Стейты для категорий (аренда)

  const [allCitiesRent, setAllCitiesRent] = useState(null);
  // console.log('----oneCountry---', oneCountry);
  console.log('===========> allCitiesRent', allCitiesRent);

  // Стейты для городов и стран правая часть *************************************************
  const [allCitiesSecond, setAllCitiesSecond] = useState([]); // все города и страны
  const [countriesSecond, setCountriesSecond] = useState([]);// только страны
  const [oneCountrySecond, setOneCountrySecond] = useState('Country'); // выбранная страна
  const [currCitiesSecond, setCurrCitiesSecond] = useState([]); // все города выбранной страны
  const [oneCitySecond, setOnecitySecond] = useState('City'); // Выбранный город

  const [allCitiesRentSecond, setAllCitiesRentSecond] = useState(null);

  // *****************************************************************************************
  function unique(arr) {
    const result = [];
    for (const str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
  }

  useEffect(() => {
    fetch(
      'https://cost-of-living-and-prices.p.rapidapi.com/cities',
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '5e415c3f2amsh78b9368fefde6a9p11ac5djsn0502a573ce0a',
          'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com',
        },

      },
    )
      .then((response) => response.json())
      .then((res) => {
        setAllCities(res.cities);
        return res.cities.map((el) => el.country_name);
      })

      .then((res) => unique(res))
      .then((data) => {
        setCountries(data); // Уникальные страны
      })
      .catch((err) => console.error(`error:${err}`));
  }, []);

  const chengeCountryHandler1 = (el) => { // Одна страна
    console.log('el------------', el);
    setOneCountry(el);

    setCurrCities(allCities.filter((chosenCountry) => chosenCountry.country_name === el));
  };

  const chengeCityHandler = (el1) => {
    console.log('el1+++++++++++', el1);
    setOnecity(el1);
  };
  const resultHandler = () => {
    fetch(

      `https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${oneCity}&country_name=${oneCountry}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '5e415c3f2amsh78b9368fefde6a9p11ac5djsn0502a573ce0a',
          'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com',
        },

      },
    )
      .then((response) => response.json())
      .then((data) => {
        setAllCitiesRent(data?.prices?.find((el) => el.item_name === 'One bedroom apartment in city centre').usd.avg); // Стоимость аренды
      })
      .then(() => setState('visible'))
      .catch((err) => console.error(`error:${err}`));
  };

  //* ********************************************************************************************** */
  // Правая часть

  useEffect(() => {
    fetch(
      'https://cost-of-living-and-prices.p.rapidapi.com/cities',
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '5e415c3f2amsh78b9368fefde6a9p11ac5djsn0502a573ce0a',
          'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com',
        },

      },
    )
      .then((response) => response.json())
      .then((res) => {
        setAllCitiesSecond(res.cities);
        return res.cities.map((el) => el.country_name);
      })

      .then((res) => unique(res))
      .then((data) => {
        setCountriesSecond(data); // Уникальные страны
      })
      .catch((err) => console.error(`error:${err}`));
  }, [setOneCountrySecond]);

  const chengeCountryHandlerSecond = (el) => { // Одна страна
    console.log('el------------', el);
    setOneCountrySecond(el);

    setCurrCitiesSecond(allCitiesSecond.filter((chosenCountrySecond) => chosenCountrySecond.country_name === el));
  };

  const chengeCityHandlerSecond = (el1) => {
    console.log('el1+++++++++++', el1);
    setOnecitySecond(el1);
  };
  const resultHandlerSecond = () => {
    fetch(

      `https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${oneCitySecond}&country_name=${oneCountrySecond}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '5e415c3f2amsh78b9368fefde6a9p11ac5djsn0502a573ce0a',
          'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com',
        },

      },
    )
      .then((response) => response.json())
      .then((data) => {
        setAllCitiesRentSecond(data?.prices?.find((el) => el.item_name === 'One bedroom apartment in city centre').usd.avg); // Стоимость аренды
      })
      .then(() => setStateSecond('visible'))
      .catch((err) => console.error(`error:${err}`));
  };

  return (

    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">

              <div className="dropdown">
                <button className="btn mb-3 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {oneCountry}
                </button>
                <ul className="dropdown-menu overflow-auto" style={{ height: '140px' }} aria-labelledby="dropdownMenuButton1">
                  {countries.map((el) => <li onClick={() => chengeCountryHandler1(el)} key={el.id}><div className="dropdown-item">{el}</div></li>)}
                </ul>
              </div>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {oneCity}
                </button>
                <ul className="dropdown-menu overflow-auto" style={{ height: '140px' }} aria-labelledby="dropdownMenuButton1">
                  {currCities.map((el1) => (
                    <li onClick={() => chengeCityHandler(el1.city_name)} key={el1?.id}>
                      <div className="dropdown-item" />
                      {el1.city_name}
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div>
                <button onClick={resultHandler} className="btn mb-3 btn-secondary" type="button"> Result</button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="dropdown">
                <button className="btn mb-3 btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {oneCountrySecond}
                </button>
                <ul className="dropdown-menu overflow-auto" style={{ height: '140px' }} aria-labelledby="dropdownMenuButton1">
                  {countriesSecond.map((el) => <li onClick={() => chengeCountryHandlerSecond(el)} key={el.id}><div className="dropdown-item ">{el}</div></li>)}
                </ul>
              </div>

              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {oneCitySecond}
                </button>
                <ul className="dropdown-menu overflow-auto" style={{ height: '140px' }} aria-labelledby="dropdownMenuButton1">
                  {currCitiesSecond.map((el1) => (
                    <li onClick={() => chengeCityHandlerSecond(el1.city_name)} key={el1?.id}>
                      <div className="dropdown-item" />
                      {el1.city_name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div>
          <h3>One bedroom apartment in city centre, $$usd</h3>
        </div>
        {/* <button onClick={resultHandler} className="btn mb-3 btn-secondary" type="button"> Result</button> */}

        <div className="row">

          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <button onClick={resultHandler} className="btn mb-3 btn-secondary" type="button"> Result</button>
                <div className="card-body">
                  <p className="card-text" style={{ visible: `${state}` }}>
                    { allCitiesRent || 'Price not found'}
                  </p>

                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <button onClick={resultHandlerSecond} className="btn mb-3 btn-secondary" type="button"> Result</button>
                <div className="card-body">
                  <p className="card-text" style={{ visible: `${state}` }}>
                    { allCitiesRentSecond || 'Price not found'}
                  </p>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}
