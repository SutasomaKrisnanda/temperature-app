import { useState } from 'react'
import './App.css'


function tempList(text = 'value') {
  return (
    <>
      <option value="none" disabled hidden className='text-slate-700'>{text}</option>
      <option value="Celcius" className='text-blue-300'>Celcius</option>
      <option value="Fahrenheit" className='text-blue-300'>Fahrenheit</option>
      <option value="Kelvin" className='text-blue-300'>Kelvin</option>
      <option value="Reamur" className='text-blue-300'>Reamur</option>
    </>
  )
}

function App() {
  const [value, setValue] = useState(0)
  const [frUnit, setFrUnit] = useState()
  const [toUnit, setToUnit] = useState()
  const [resultString, setResultString] = useState()
  return (
    <>
      <div className='border-2 p-5 rounded-lg justify-items-start grid grid-rows-4 h-54'>
        <h1 className='text-4xl font-bold'>Temperature Convertor</h1>
        <p className=' text-lg'>Enter the temperature, select units and submit</p>
        <form className="converter flex" onSubmit={e => e.preventDefault()}>
          <input type="number" className='w-20 bg-inherit border rounded p-2' placeholder='Value' onChange={e => setValue(e.target.value)} />
          <select name="from-unit" id="fromUnit" placeholder='From Unit' className='border rounded p-2 ml-2 bg-inherit' defaultValue={'none'} onChange={e => setFrUnit(e.target.value)}>
            {tempList('From Unit')}
          </select>
          <select name="to-unit" id="toUnit" placeholder='To Unit' className='border rounded p-2 ml-2 bg-inherit' defaultValue={'none'} onChange={e => setToUnit(e.target.value)}>
            {tempList('To Unit')}
          </select>
          <button className='ml-2 rounded-lg p-3 border-0 bg-inherit' type="submit" disabled={!value || !frUnit || !toUnit} onClick={() => {
            setResultString(`${value} ${frUnit} is ${convert(value, frUnit, toUnit)} ${toUnit}`);
            console.log({
              value,
              frUnit,
              toUnit,
              result,
              resultString
            })
          }}>Convert</button>
        </form>
        <div className="mt-5 text-green-500 text-xl" hidden={!resultString}>{resultString}</div>
      </div>
      <p className="read-the-docs mt-5">
        This is a simple temperature convertor app
      </p>
    </>
  )
}

function convert(value, fromUnit, toUnit) {
  if (!value || !fromUnit || !toUnit) return null;
  value = parseFloat(value);
  switch (fromUnit) {
    case 'Celcius':
      break;
    case 'Fahrenheit':
      value = (value - 32) * 5 / 9;
      break;
    case 'Kelvin':
      value = value - 273.15;
      break;
    case 'Reamur':
      value = value * 5 / 4;
      break;
  }
  switch (toUnit) {
    case 'Celcius':
      break;
    case 'Fahrenheit':
      value = value * 9 / 5 + 32;
      break;
    case 'Kelvin':
      value = value + 273.15;
      break;
    case 'Reamur':
      value = value * 4 / 5;
      break;
  }
  return value;
}

export default App
