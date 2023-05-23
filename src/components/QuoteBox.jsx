
import "./styles/QuoteBox.css"
const QuoteBox = ({phrase, handleChangeQuote}) => {
  return (
    
    <section className="quoteBox">

        <button className="quoteBox__btn" onClick={handleChangeQuote}>Frase de la fuerza</button>
                <br />
            <article className="quoteBox__phrase">
                <p>{phrase}</p>
            </article>

    </section>
    
  )
}

export default QuoteBox
