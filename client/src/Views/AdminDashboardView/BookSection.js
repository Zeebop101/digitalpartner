import React, { useEffect, useState } from 'react';
import toast, { Toaster, useToaster } from 'react-hot-toast';
import axios from 'axios';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import Marquee from 'react-fast-marquee';

const BookSection = ({ userToAddBooks, setUserToAddBooks, setAllUsers }) => {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [publisher, setPublisher] = useState('');
  const [genre, setGenre] = useState('');
  const [pages, setPages] = useState('');
  const [format, setFormat] = useState('');
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (userToAddBooks !== '') {
      if (userToAddBooks.library.length !== 0) {
        const arrayToPush = userToAddBooks.library.map((item) => {
          return {
            book: {
              _id: item.book._id,
              format: item.book.format,
              genre: item.book.genre,
              images: item.book.images,
              pages: item.book.pages,
              publisher: item.book.publisher,
              title: item.book.title,
            },
            condition: item.condition,
          };
        });
        setSelectedBooks(arrayToPush);
      } else {
        setSelectedBooks([]);
        setFlag(true);
      }
    }
  }, [userToAddBooks]);

  useEffect(() => {
    axios.get('https://ihrdigitalpartner.herokuapp.com/api/books/get-all').then((response) => {
      if (response.status === 200) setAllBooks(response.data);
    });
  }, []);

  //adds a new book
  const handleAdd = () => {
    const formData = new FormData();
    //adding all images to formdata
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }
    formData.append('title', title);
    formData.append('publisher', publisher);
    formData.append('genre', genre);
    formData.append('pages', pages);
    formData.append('format', format);
    const toastLoadingID = toast.loading('Adding book...');
    axios
      .post('https://ihrdigitalpartner.herokuapp.com/api/books/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        if (response.status === 200) {
          axios
            .get('https://ihrdigitalpartner.herokuapp.com/api/books/get-all')
            .then((response) => {
              if (response.status === 200) {
                setAllBooks(response.data);
                toast.dismiss(toastLoadingID);
                toast.success('Book added!');
                setImages([]);
                setTitle('');
                setPublisher('');
                setGenre('');
                setPages('');
                setFormat('');
              }
            });
        }
      });
  };

  //add or update books to a user's library
  const handleUpdate = () => {
    console.log(selectedBooks);
    axios
      .post('https://ihrdigitalpartner.herokuapp.com/api/users/add-books', {
        userID: userToAddBooks._id,
        books: selectedBooks,
      })
      .then((response) => {
        if (response.status === 200) {
          axios
            .get('https://ihrdigitalpartner.herokuapp.com/api/users/get-all')
            .then((response) => {
              setAllUsers(response.data);
              toast.success(userToAddBooks.firstName + "'s library Updated!");
              setSelectedBooks([]);
              setUserToAddBooks('');
            });
        }
      });
  };

  const handleDelete = (book) => {
    axios
      .post('https://ihrdigitalpartner.herokuapp.com/api/books/delete', {
        bookID: book._id,
      })
      .then((response) => {
        if (response.status === 200) {
          axios
            .get('https://ihrdigitalpartner.herokuapp.com/api/books/get-all')
            .then((response) => {
              toast.success('Book Deleted!');
              if (response.status === 200) setAllBooks(response.data);
            });
        }
      });
  };

  //when the checkbox is checked, it adds that book to selectedBooks
  //and deleted it when checkbox is unchecked
  const bookAction = (event, book) => {
    if (event.target.checked) {
      setSelectedBooks((oldArray) => [
        ...oldArray,
        { book: book, condition: '' },
      ]);
    } else {
      let arr = selectedBooks.filter((bookToDelete) => {
        return bookToDelete.book._id !== book._id;
      });
      setSelectedBooks(arr);
    }
  };

  //this sets the condition of the book only when the book is selected
  const bookCondition = (paramBook, paramCondition) => {
    let flag = false;
    const arr = selectedBooks.map((book) => {
      if (book.book._id === paramBook._id) {
        flag = true;
        return {
          ...book,
          condition: paramCondition,
        };
      }
      return book;
    });
    if (!flag) toast.error('Select the book first please!');
    else setSelectedBooks(arr);
  };

  //renders all the books
  const renderBooks = () => {
    return allBooks.map((book) => {
      return (
        <div className='col-4 d-flex justify-content-center'>
          <div className='book-card-wrapper'>
            <div
              className='delete-book-icon-wrapper'
              onClick={() => handleDelete(book)}
            >
              <img
                className='delete-book-icon hvr-grow'
                src='./images/cancel.png'
              />
            </div>
            {userToAddBooks !== '' &&
            (userToAddBooks.library.length !== 0 || flag) ? (
              <div className='book-card-checkbox'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  onClick={(e) => bookAction(e, book)}
                  defaultChecked={userToAddBooks.library.some(
                    (selectedBook) => selectedBook.book._id === book._id
                  )}
                />
              </div>
            ) : null}
            <ImageSlider bookImages={book.images} />
            {book.title.length > 12 ? (
              <div style={{ width: '150px' }}>
                <Marquee speed={70}>
                  <div className='book-card-title-marquee'>{book.title}</div>
                </Marquee>
              </div>
            ) : (
              <div className='book-card-title'>{book.title}</div>
            )}
            {userToAddBooks !== '' ? (
              <div className='row g-0 row-cols-5 book-condition-box-wrapper'>
                <div
                  className={`col book-condition-box hvr-float ${selectedBooks.some(
                    (selectedBook) =>
                      selectedBook.book._id === book._id &&
                      selectedBook.condition === 'Neu'
                        ? 'book-condition-box-border'
                        : null
                  )}`}
                  style={{ backgroundColor: '#0f7700' }}
                  onClick={() => bookCondition(book, 'Neu')}
                />
                <div
                  className={`col book-condition-box hvr-float ${selectedBooks.some(
                    (selectedBook) =>
                      selectedBook.book._id === book._id &&
                      selectedBook.condition === 'Neuwertig'
                        ? 'book-condition-box-border'
                        : null
                  )}`}
                  style={{ backgroundColor: '#8caa08' }}
                  onClick={() => bookCondition(book, 'Neuwertig')}
                />
                <div
                  className={`col book-condition-box hvr-float ${selectedBooks.some(
                    (selectedBook) =>
                      selectedBook.book._id === book._id &&
                      selectedBook.condition === 'Sehr Gut'
                        ? 'book-condition-box-border'
                        : null
                  )}`}
                  style={{ backgroundColor: '#c09b00' }}
                  onClick={() => bookCondition(book, 'Sehr Gut')}
                />
                <div
                  className={`col book-condition-box hvr-float ${selectedBooks.some(
                    (selectedBook) =>
                      selectedBook.book._id === book._id &&
                      selectedBook.condition === 'Gut'
                        ? 'book-condition-box-border'
                        : null
                  )}`}
                  style={{ backgroundColor: '#dd8c00' }}
                  onClick={() => bookCondition(book, 'Gut')}
                />
                <div
                  className={`col book-condition-box hvr-float ${selectedBooks.some(
                    (selectedBook) =>
                      selectedBook.book._id === book._id &&
                      selectedBook.condition === 'Akzeptabel'
                        ? 'book-condition-box-border'
                        : null
                  )}`}
                  style={{ backgroundColor: '#e44e04' }}
                  onClick={() => bookCondition(book, 'Akzeptabel')}
                />
              </div>
            ) : null}
          </div>
        </div>
      );
    });
  };

  return (
    <div className='container'>
      <div id='interface'>
        <div>
          <h1 className='pt-2 pb-3'>Books Action</h1>
          <form style={{ width: '90%' }}>
            <div class='mb-3'>
              <label for='formFileMultiple' class='form-label'>
                Bilder
              </label>
              <input
                class='form-control'
                type='file'
                id='formFileMultiple'
                multiple
                onChange={(e) => setImages(e.target.files)}
              />
            </div>
            <div class='mb-3'>
              <label class='form-label'>Titel</label>
              <input
                class='form-control'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div class='mb-3'>
              <label class='form-label'>Verlag</label>
              <input
                class='form-control'
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </div>
            <div class='mb-3'>
              <label class='form-label'>Genre</label>
              <input
                class='form-control'
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <div class='mb-3'>
              <label class='form-label'>Seiten</label>
              <input
                class='form-control'
                value={pages}
                onChange={(e) => setPages(e.target.value)}
              />
            </div>
            <div class='mb-3'>
              <label class='form-label'>Format</label>
              <input
                class='form-control'
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              />
            </div>
            <button
              class='btn btn-success'
              onClick={(e) => {
                e.preventDefault();
                handleAdd();
              }}
            >
              Add
            </button>
          </form>
        </div>
      </div>
      <div
        style={{
          maxWidth: '700px',
          minWidth: '700px',
        }}
      >
        <h1 className='pt-2 pb-3'>
          All Books
          {userToAddBooks !== '' ? (
            <>
              <button
                className='btn btn-primary library-update-btn'
                onClick={handleUpdate}
              >
                Update Library
              </button>
              <button
                className='btn btn-danger library-cancel-btn'
                onClick={() => {
                  setUserToAddBooks('');
                  setSelectedBooks([]);
                }}
              >
                Cancel
              </button>
            </>
          ) : null}
        </h1>
        <div
          style={{
            maxHeight: '500px',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          <div className='row'>{renderBooks()}</div>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
