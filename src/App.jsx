import { Suspense } from 'react'
import './App.css'
import Countries from './assets/components/countries/Countries'

const countriesPromise = fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())

function App() {

  return (
    <>
      <Suspense fallback={<h3>World On the Go...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
