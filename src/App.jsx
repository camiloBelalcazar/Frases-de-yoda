

import { useState } from 'react';
import './App.css'
import dbQuotes from './db/quote.json';
import { getRandom } from "./utils/random";
import QuoteBox from './components/QuoteBox';



const bgImages = ["yoda1", "yoda2", "yoda3", "yoda4"]


function App() {

 const [Quote, setQuote] = useState(getRandom(dbQuotes));

 const [bgImage, setBgImage] = useState(getRandom(bgImages));

 const handleChangeQuote = () => {
  setQuote(getRandom(dbQuotes));
  setBgImage(getRandom(bgImages));
 }

  

  return (
    <main className={`app ${bgImage}`}>

      <section className='app__container'>

        <h1>Frases de yoda</h1>

      <QuoteBox 
        handleChangeQuote={handleChangeQuote} phrase={Quote.phrase}/>

        <footer>
          <h3>Author: {Quote.author}</h3>
        </footer>

      </section>

    </main>
  )
}

export default App
