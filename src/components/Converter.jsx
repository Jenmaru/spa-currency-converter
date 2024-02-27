import React, { useState } from 'react';
import Buttons from './Buttons.jsx';
import Form from 'react-bootstrap/Form';

const Converter = ({ curr }) => {
  const [valueCurrency, setCurrency] = useState('1');
  const [valueConvert, setConvert] = useState('1');
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState(firstInput);

  const currency = [
    { value: '1', name: 'RUB', },
    { value: '2', name: 'USD', },
    { value: '3', name: 'EUR', },
    { value: '4', name: 'CNY', },
  ];

  const convert = [
    { value: '1', name: 'RUB', },
    { value: '2', name: 'USD', },
    { value: '3', name: 'EUR', },
    { value: '4', name: 'CNY', },
  ];

  return (
    <>
      <div class="row">
        <div className="d-flex flex-column col-sm-12 text-secondary">Что имеем
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <Buttons pages={currency} page={valueCurrency} setPage={setCurrency} name="currency" />
              </Form.Label>
                <Form.Control as="textarea" value={firstInput} onChange={(e) => setFirstInput(e.target.value)} style={{ fontSize: '50px', }} rows={1} />
            </Form.Group>
          </Form>
        </div>
        <div className="d-flex flex-column col-sm-12 text-secondary">Сколько будет
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <Buttons pages={convert} page={valueConvert} setPage={setConvert} name="convert" />
              </Form.Label>
                <Form.Control as="textarea" value={secondInput} style={{ fontSize: '50px', }} rows={1} />
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  )
};

export default Converter;