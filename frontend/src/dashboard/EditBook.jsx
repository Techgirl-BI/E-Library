import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import {
  Button,
  Checkbox,
  Select,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";

const EditBook = () => {
  const { id } = useParams();
  const {
    authorName,
    imageURL,
    bookTitle,
    category,
    bookDescription,
    bookPdfUrl,
  } = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.BookPDFURL.value;
    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    // console.log(bookObj);
    //update book data
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book updated successfully"), form.reset();
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update A Book data</h2>
      <form
        onSubmit={handleUpdate}
        className="lg:w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {/* book title */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput
            id="bookTitle"
            type="text"
            name="bookTitle"
            placeholder="Book name"
            required
            defaultValue={bookTitle}
          />
        </div>
        {/* author name */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput
            id="authorName"
            name="authorName"
            type="text"
            placeholder="Author name"
            required
            defaultValue={authorName}
          />
        </div>
        {/* image URL */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Image URL" />
          </div>
          <TextInput
            id="imageURL"
            type="text"
            name="imageURL"
            placeholder="book Image URL"
            required
            defaultValue={imageURL}
          />
        </div>
        {/* category */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
          </div>
          <select
            id="inputState"
            name="category"
            className="w-full rounded"
            value={selectedBookCategory}
            onChange={handleChangeSelectedValue}
          >
            {bookCategories.map((options) => (
              <option key={options}>{options}</option>
            ))}
          </select>
        </div>
        {/* desc*/}
        <div className="lg:col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book description..."
            required
            rows={6}
            className="w-full"
            defaultValue={bookDescription}
          />
        </div>
        {/* pdf url */}
        <div className="lg:col-span-2">
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="Book PDF URL"
            name="BookPDFURL"
            type="text"
            placeholder="Book pdf url"
            required
            defaultValue={bookPdfUrl}
          />
        </div>
        <Button className="lg:col-span-2 mt-5" type="submit">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default EditBook;
