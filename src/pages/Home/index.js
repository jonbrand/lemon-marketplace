import React from 'react';
import { Header } from '../../components/Header/Header';
import { Explore } from '../../components/Explore/Explore';

export const Home = () => {
  /* const [isOpen, setIsOpen] = useState(false); */

  /* const toggle = () => {
    setIsOpen(!isOpen);
  }; */

  return (
    <>
      <Header />
      <Explore />
    </>
    );
  };