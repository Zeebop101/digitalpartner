import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const CreateAdmin = ({ setCreateAdmin }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const toastLoadingID = toast.loading('Adding admin...');
    axios
      .post('https://ihrdigitalpartner.herokuapp.com/api/admins/add', {
        name,
        username,
        password,
      })
      .then((response) => {
        toast.dismiss(toastLoadingID);
        toast.success('Admin created!');
        setCreateAdmin(false);
      })
      .catch((err) => {
        if (err.response.data.existingUser) {
          toast.dismiss(toastLoadingID);
          toast.error('Admin with this username already exists!');
        }
      });
  };

  return (
    <div className='container justify-content-center'>
      <Toaster />
      <form style={{ width: '40%' }}>
        <h1 className='pt-2 pb-3'>Add Admin</h1>
        <div class='mb-3'>
          <label class='form-label'>Name</label>
          <input
            class='form-control'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class='mb-3'>
          <label class='form-label'>Username</label>
          <input
            class='form-control'
            onChange={(e) => setUsername(e.target.value)}
            maxLength='170'
          />
        </div>
        <div class='mb-3'>
          <label class='form-label'>Password</label>
          <input
            class='form-control'
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
        </div>
        <button
          class='btn btn-primary'
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          style={{ marginBottom: '50px' }}
        >
          Add
        </button>
        <button
          class='btn btn-danger ms-3'
          onClick={(e) => {
            e.preventDefault();
            setCreateAdmin(false);
          }}
          style={{ marginBottom: '50px' }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateAdmin;
