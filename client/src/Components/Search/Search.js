import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Search.scss';

const Search = () => {
  const [searchId, setSearchId] = useState();
  const navigate = useNavigate();

  const handleSearch = () => {
    axios
      .post('https://ihrdigitalpartner.herokuapp.com/api/users/get', { customerNumber: searchId })
      .then((response) => {
        if (response.status === 200) {
          const user = response.data[0];
          if (!user) toast.error('Ungültige Kundennummer!');
          else if (
            (user && !user.library) ||
            (user && user.library.length === 0)
          )
            toast.error('Ihre Bibliothek ist leer!');
          else navigate('/library', { state: user });
        }
      });
  };

  return (
    <div class='header-search' id='bibiothekensuche'>
      <Toaster />
      <p>Eine Nummer für Ihre komplette Sammlung</p>
      <input
        id='bib-input'
        class='header-input'
        placeholder='Hier 8-stellige Registrierungsnummer eingeben'
        type='text'
        onChange={(e) => setSearchId(e.target.value)}
      />
      <div class='header-button'>
        <button onClick={handleSearch}>Bibliothek suchen</button>
      </div>
      <div class='header-search-error'>
        <p class='header-search-error-text'>
          Keine Bibliothek zu dieser Nummer gefunden.
        </p>
      </div>
    </div>
  );
};

export default Search;
