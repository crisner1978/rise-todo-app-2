import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const QuoteItem = () => {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    const getQuote = () => {
      fetch('https://type.fit/api/quotes').then((res) => res.json()).then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuote(data[randomNum])
      })
    }
    getQuote()
  }, []);

  return (
    <div className='max-w-lg mx-auto pt-8 px-5 relative'>
      {/* <TodoCount /> */}
      <p className='text-white text-sm sm:text-base italic font-mono font-medium'>{quote.text}</p>
      <span className='text-xs text-gray-300 blockquote'>{quote.author || "unknown"}</span>
    </div>
  )
}

export default QuoteItem