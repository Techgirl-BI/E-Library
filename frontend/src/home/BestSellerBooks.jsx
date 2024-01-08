import React, { useState } from 'react'
import { useEffect } from 'react'
import BookCards from '../components/bookcards/BookCards'
const BestSellerBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,4)))
    }, [])
  return (
    <div>
        <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks