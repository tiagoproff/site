import { Outlet } from 'react-router-dom';

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

//@ts-ignore
//import * as logo from 'assets/images/logo.svg';

import { PageContent } from './styles';

export default function Root() {
  return (
    <>
      <Header />
      <PageContent>
        <Outlet />
      </PageContent>
      <Footer />
    </>
  );
}
