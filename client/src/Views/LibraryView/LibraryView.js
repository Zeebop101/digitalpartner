import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import Marquee from 'react-fast-marquee';
import './LibraryView.scss';

const LibraryView = () => {
  const { state } = useLocation();

  return (
    <>
      <div id='nav'>
        <a id='nav-logo' href=''>
          <img
            src='./images/logo.svg'
            alt='Dies ist das Logo von unserem Smartphone Reparatur Unternehmen in Berlin Mitte, Phone Tastisch.'
          />
        </a>
        <span id='nav-links'>
          <a href='https://www.ihr-digital-partner.de#bibiothekensuche'>
            Bibliothekensuche
          </a>
          <a href='https://www.ihr-digital-partner.de#about'>Die Idee</a>
          <a href='https://www.ihr-digital-partner.de#vorteile'>
            Ihre Vorteile
          </a>
          <a href='https://www.ihr-digital-partner.de#faq'>FAQ</a>
          <a href='https://www.ihr-digital-partner.de#kontakt'>Kontakt</a>
        </span>
        <div class='mobile'>
          <label class='mobile__label' for='checkbox'>
            <div class='mobile__label__content'>
              <span class='label__line'></span>
              <span class='label__line'></span>
            </div>
            <div class='mobile__label__content'>
              <span class='label__line'></span>
              <span class='label__line'></span>
            </div>
            <div class='mobile__label__content'>
              <span class='label__line'></span>
              <span class='label__line'></span>
            </div>
          </label>
          <input class='mobile__input' type='checkbox' id='checkbox' />
          <nav class='mobile__nav'>
            <ul>
              <li class='nav__item'>
                <a href='https://www.ihr-digital-partner.de#bibiothekensuche'>
                  Bibiothekensuche
                </a>
              </li>
              <li class='nav__item'>
                <a href='https://www.ihr-digital-partner.de#about'>Die Idee</a>
              </li>
              <li class='nav__item'>
                <a href='https://www.ihr-digital-partner.de#vorteile'>
                  Ihre Vorteile
                </a>
              </li>
              <li class='nav__item'>
                <a href='https://www.ihr-digital-partner.de#faq'>FAQ</a>
              </li>
              <li class='nav__item'>
                <a href='https://www.ihr-digital-partner.de#kontakt'>Kontakt</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main>
        <div class='libary-container'>
          <div class='sidebar'>
            <div class='sidebar-profil'>
              <div class='sidebar-profil-image'>
                <img id='db-image' src='src/img/libary/profilbild.png' alt='' />
              </div>
              <div class='sidebar-profil-daten'>
                <p id='db-name'>
                  {state.firstName}&nbsp;{state.lastName}
                </p>
                <p id='db-number'>{state.customerNumber}</p>
              </div>
              <div class='sidebar-profil-nummer'></div>
            </div>
          </div>

          <div class='libary'>
            <div class='libary-header'>
              <h1>Meine Bibliothek</h1>
            </div>

            <div class='libary-shelf'>
              {state.library ? (
                state.library.length !== 0 ? (
                  state.library.map((item) => {
                    return (
                      <div class='libary-books'>
                        <div class='libary-book'>
                          <div>
                            {state.library ? (
                              <ImageSlider bookImages={item.book.images} />
                            ) : null}
                          </div>
                        </div>
                        <div class='libary-content'>
                          {item.book.title.length > 15 ? (
                            <Marquee speed={100}>
                              <h3 className='library-marquee'>
                                {item.book.title}
                              </h3>
                            </Marquee>
                          ) : (
                            <h3>{item.book.title}</h3>
                          )}
                          <p>Verlag : {item.book.publisher}</p>
                          <p>
                            Genre :{' '}
                            {item.book.genre.map((genre, index) => {
                              if (index === item.book.genre.length - 1)
                                return genre;
                              else return genre + ' / ';
                            })}
                          </p>
                          <p>Seiten : {item.book.pages}</p>
                          <p>Format : ca. {item.book.format}</p>
                          <p>Zustand : {item.condition}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className='no-books'>
                    <div class='libary-header'>
                      <h1>
                        You have no books currently in your library! Please
                        contact administrator.
                      </h1>
                    </div>
                  </div>
                )
              ) : null}
            </div>
          </div>
        </div>
      </main>

      <div class='footer'>
        <div class='footer-container'>
          <a class='footer-links' href='#'>
            Impressum
          </a>
          <a class='footer-links' href='#'>
            Datenschutzhinweise
          </a>
          <a class='footer-links' href='#'>
            Haftungsausschluss
          </a>

          <img class='footer-logo' src='src/img/nav/logo.svg' alt='' />

          <p class='footer-copyright'>Alle Urheberrechte sind vorbehalten</p>
        </div>
      </div>
    </>
  );
};

export default LibraryView;
