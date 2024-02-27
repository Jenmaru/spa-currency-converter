import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainButtons from './components/Buttons.jsx';
import Converter from './components/Converter.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

function Main({ curr }) {
  const naming = { USD: 'доллар', EUR: 'евро', CNY: 'юань', };
  const keys = Object.keys(curr.rates);

  return (
    <>
    <h4>{`Дата: ${curr.date}`}</h4>
    {keys.filter((el) => el === 'USD' || el === 'EUR' || el === 'CNY')
    .sort()
    .map((el) => <div className="container p-3 mb-2 bg-info text-white">
    <h2>{`1 ${naming[el]} = ${1/curr.rates[el]} рублей`}</h2>
  </div>)}
    </>
  )
}

function App() {
  const [page, setPage] = useState('1');
  const [curr, setCurr] = useState({ rates: '' });

  const pages = [
    { value: '1', name: 'Главная' },
    { value: '2', name: 'Конвертер' },
  ]

  useEffect(() => {
    axios.get('https://www.cbr-xml-daily.ru/latest.js')
    .then((data) => setTimeout(() => setCurr(data.data)), 60000)
  }, [curr]);

  return (
    <div className="container justify-content-center">
      <MainButtons page={page} pages={pages} setPage={setPage} name="page" />
      <div className="container" style={{ marginTop: '2rem', }}>
      {page === '1' ? <Main curr={curr} /> : <Converter curr={curr} />}
      </div>
      </div>
  );
}

export default App;
