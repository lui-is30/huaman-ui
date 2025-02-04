// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@huaman-ui/button';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { Footer } from '@huaman-ui';
import { Form } from '@huaman-ui/form';
import { Header } from '@huaman-ui/header';
import { Grid } from '@huaman-ui/grid';
import { Searchbar } from '@huaman-ui/searchbar';


import HeaderGlobal from '../components/HeaderGlobal';
import ButtonDocumentation from '../components/ButtonDocumentation';
import { Link, Outlet } from 'react-router-dom';


/**
 * 
 * <Button />
      <Footer />
      <Form />
      <Header />
      <Grid />
      <Searchbar />
 */
export function App() {
  return (
     <>
     <HeaderGlobal />
      

     <Outlet />
     </>
  );
}

export default App;
