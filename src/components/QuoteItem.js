import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const QuoteItem = () => {
  const todos = useSelector((state) => state.todos)
  const [quote, setQuote] = useState('')

  useEffect(() => {
    if (todos) {
      const getQuote = () => {
        fetch('https://type.fit/api/quotes').then((res) => res.json()).then((data) => {
          let randomNum = Math.floor(Math.random() * data.length);
          setQuote(data[randomNum])
        })
      }
      getQuote()
    }
  }, [todos]);

  return (
    <div className={`${todos.length > 0 ? "pt-20 max-w-lg mx-auto px-5 relative": "pt-20 pb-10"}`}>
      {todos.length === 0 ? (
        <p className='text-red-400 text-2xl text-center font-mono font-medium absolute right-0 left-0'>Todo for Quotes</p>
      ) : (
        <>
          <p className='text-white text-sm sm:text-base italic font-mono font-medium'>{quote.text}</p>
          <span className='text-xs text-gray-300 blockquote'>{quote.author || "unknown"}</span>
        </>
      )}
    </div>
  )
}

export default QuoteItem