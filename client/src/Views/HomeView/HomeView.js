import React from 'react';
import Advantages from '../../Components/Advantages/Advantages';
import Explainer from '../../Components/Explainer/Explainer';
import Faq from '../../Components/Faq/Faq';
import Footer from '../../Components/Footer/Footer';
import Form from '../../Components/Form/Form';
import Header from '../../Components/Header/Header';
import Highlights from '../../Components/Highlights/Highlights';
import Idea from '../../Components/Idea/Idea';
import Search from '../../Components/Search/Search';
import Statistik from '../../Components/Statistik/Statistik';

const HomeView = () => {
  return (
    <>
      <Header />
      <Search />
      <Explainer />
      <Idea />
      <Statistik />
      <Highlights />
      <Advantages />
      <Faq />
      <Form />
      <Footer />
    </>
  );
};

export default HomeView;
