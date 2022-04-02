import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';
import toast, { Toaster } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiFillDelete, AiTwotoneAppstore } from 'react-icons/ai';
import { ImBook } from 'react-icons/im';
import { GrUpdate } from 'react-icons/gr';
import CreateAdmin from './CreateAdmin';
import './AdminDashboardView.css';
import BookSection from './BookSection';

const AdminDashboardView = () => {
  const scrollRef = useRef(null);
  const [allUsers, setAllUsers] = useState([]);
  //states for user section
  const [customerNumber, setCustomerNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [plz, setPlz] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');

  const [actionType, setActionType] = useState('add');
  const [userToAddBooks, setUserToAddBooks] = useState('');

  const [createAdmin, setCreateAdmin] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users/get-all').then((response) => {
      setAllUsers(response.data);
    });
  }, []);

  const executeScroll = () => scrollRef.current.scrollIntoView();

  const UpdateButton = () => {
    return (
      <div
        className='hvr-grow'
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setActionType('update');
        }}
      >
        <GrUpdate size={17} />
      </div>
    );
  };

  const DeleteButton = () => {
    return (
      <button
        className='hvr-grow'
        style={{ background: 'none', border: 'none' }}
      >
        <AiFillDelete style={{ color: 'red', background: 'none' }} size={25} />
      </button>
    );
  };

  const BookButton = () => {
    return (
      <button
        className='hvr-grow'
        style={{ background: 'none', border: 'none' }}
      >
        <ImBook style={{ color: 'green', background: 'none' }} size={20} />
      </button>
    );
  };

  const handleAdd = () => {
    axios
      .post('http://localhost:5000/api/users/add', {
        firstName: firstName,
        lastName: lastName,
        street: street,
        birthday: birthday,
        plz: plz,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          axios
            .get('http://localhost:5000/api/users/get-all')
            .then((response) => {
              setAllUsers(response.data);
              toast.success('User Added!');
              setFirstName('');
              setLastName('');
              setStreet('');
              setPlz('');
              setBirthday('');
              setPassword('');
            });
        }
      });
  };

  const handleUpdate = () => {
    axios
      .post('http://localhost:5000/api/users/update', {
        customerNumber: customerNumber,
        firstName: firstName,
        lastName: lastName,
        street: street,
        birthday: birthday,
        plz: plz,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          axios
            .get('http://localhost:5000/api/users/get-all')
            .then((response) => {
              setAllUsers(response.data);
              toast.success('User Updated!');
              setActionType('add');
              setCustomerNumber('');
              setFirstName('');
              setLastName('');
              setStreet('');
              setPlz('');
              setBirthday('');
              setPassword('');
            });
        }
      });
  };

  const handleDelete = (user) => {
    axios
      .post('http://localhost:5000/api/users/delete', {
        customerNumber: user.customerNumber,
      })
      .then((response) => {
        if (response.status === 200) {
          axios
            .get('http://localhost:5000/api/users/get-all')
            .then((response) => {
              setAllUsers(response.data);
              toast.success('User Deleted!');
            });
        }
      });
  };

  const UsersTable = () => {
    return (
      <div>
        <div className='table-responsive table-wrapper'>
          <table class='table table-bordered table-striped text-center table-sm mb-0'>
            <thead>
              <tr>
                <th className='align-middle' scope='col'>
                  Kundennummer
                </th>
                <th className='align-middle' scope='col'>
                  Vorname
                </th>
                <th className='align-middle' scope='col'>
                  Nachname
                </th>
                <th className='align-middle' scope='col'>
                  Straße
                </th>
                <th className='align-middle' scope='col'>
                  PLZ
                </th>
                <th className='align-middle' scope='col'>
                  Geburtsdatum
                </th>
                <th className='align-middle' scope='col'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => {
                return (
                  <tr className='animate__animated animate__fadeInLeft animate__faster'>
                    <td className='align-middle'>{user.customerNumber}</td>
                    <td className='align-middle'>{user.firstName}</td>
                    <td className='align-middle'>{user.lastName}</td>
                    <td className='align-middle'>{user.street}</td>
                    <td className='align-middle'>{user.plz}</td>
                    <td className='align-middle'>
                      {moment(user.birthday).format('DD/MM/YYYY')}
                    </td>
                    <td className='align-middle'>
                      <div className='row g-0'>
                        <div
                          className='col-6'
                          onClick={() => {
                            handleDelete(user);
                          }}
                        >
                          {DeleteButton()}
                        </div>
                        <div
                          className='col-6'
                          onClick={() => {
                            setCustomerNumber(user.customerNumber);
                            setFirstName(user.firstName);
                            setLastName(user.lastName);
                            setStreet(user.street);
                            setPlz(user.plz);
                            setBirthday(new Date(user.birthday));
                            setPassword(user.password);
                          }}
                        >
                          {UpdateButton()}
                        </div>
                      </div>
                      <div
                        className='row g-0'
                        onClick={() => {
                          setUserToAddBooks(user);
                          executeScroll();
                        }}
                      >
                        {BookButton()}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='container'>
        <div>
          <img
            src='./images/logo-crop.png'
            style={{ height: '50px', width: '50px' }}
          />
          <span className='admin-heading'>
            Digital Partner{' '}
            <span className='admin-subheading'> - Administrator</span>
          </span>
        </div>
      </div>
      {/* Users section */}
      <div className='container'>
        <Toaster />
        <div id='interface'>
          <div>
            <h1 className='pt-5 pb-3'>User Action</h1>
            <form style={{ width: '90%' }}>
              <div class='mb-3'>
                <label class='form-label'>Vorname</label>
                <input
                  class='form-control'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div class='mb-3'>
                <label class='form-label'>Nachname</label>
                <input
                  class='form-control'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div class='mb-3'>
                <label class='form-label'>Straße</label>
                <input
                  class='form-control'
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div class='mb-3'>
                <label class='form-label'>PLZ</label>
                <input
                  class='form-control'
                  value={plz}
                  onChange={(e) => setPlz(e.target.value)}
                />
              </div>
              <div class='mb-3'>
                <label class='form-label'>Geburtsdatum</label>
                <DatePicker
                  className='form-control'
                  selected={birthday}
                  onChange={(date) => setBirthday(date)}
                  customInput={<input type='text' />}
                  dateFormat='dd/MM/yy'
                  onKeyDown={(e) => {
                    e.preventDefault();
                  }}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode='select'
                />
              </div>
              <div class='mb-3'>
                <label class='form-label'>Passwort</label>
                <input
                  class='form-control'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {actionType === 'add' ? (
                <button
                  class='btn btn-success'
                  onClick={(e) => {
                    e.preventDefault();
                    handleAdd();
                  }}
                >
                  Add
                </button>
              ) : (
                <>
                  <button
                    class='btn btn-success'
                    onClick={(e) => {
                      e.preventDefault();
                      handleUpdate();
                    }}
                  >
                    Update
                  </button>
                  <button
                    class='btn btn-danger ms-3'
                    onClick={(e) => {
                      e.preventDefault();
                      setActionType('add');
                      setFirstName('');
                      setLastName('');
                      setStreet('');
                      setPlz('');
                      setBirthday('');
                      setPassword('');
                    }}
                  >
                    Cancel
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
        <div>
          <h1 className='pt-5 pb-3'>All Users</h1>
          <UsersTable />
        </div>
      </div>
      {/* Books section */}
      <div className='d-flex justify-content-center' ref={scrollRef}>
        <hr
          style={{
            marginTop: '30px',
            width: '76%',
          }}
        />
      </div>
      <BookSection
        userToAddBooks={userToAddBooks}
        setUserToAddBooks={setUserToAddBooks}
        setAllUsers={setAllUsers}
      />
      <div className='d-flex justify-content-center' ref={scrollRef}>
        <hr
          style={{
            marginTop: '30px',
            width: '76%',
          }}
        />
      </div>

      {createAdmin ? (
        <CreateAdmin setCreateAdmin={setCreateAdmin} />
      ) : (
        <div className='container justify-content-center'>
          <button
            className='btn btn-dark create-admin-btn'
            onClick={() => setCreateAdmin(true)}
          >
            Create New Admin
          </button>
        </div>
      )}
    </>
  );
};

export default AdminDashboardView;
