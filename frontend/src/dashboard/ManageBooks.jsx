import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([])
  useEffect(()=> {
fetch("https://e-library-5fvz.onrender.com/all-books").then(res=>res.json()).then(data=>setAllBooks(data))
  }, [])
  //delete a book 
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://e-library-5fvz.onrender.com/book/${id}`,{
      method: "DELETE",
    }).then(res=> res.json()).then(data => {
      alert("Book is deleted successfully")})
  }
  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
      {/* table */}
            <Table className='lg:w-[1180px]'>
        <Table.Head>
        <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) =>  <Table.Body key={index} className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
           {index + 1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.bookTitle}
            </Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>{book.price}</Table.Cell>
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </Link>
              <button onClick = {() => handleDelete(book._id)}className='bg-red-500 px-3 mx-2 py-1 font-semibold hover:blue text-white'>Delete</button>
            </Table.Cell>
          </Table.Row>
        </Table.Body> )
        }
       
      </Table>
    </div>
    )
}

export default ManageBooks