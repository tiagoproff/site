import { Outlet } from 'react-router-dom';

import Header from 'layout/Header';

//@ts-ignore
//import * as logo from 'assets/images/logo.svg';

import { PageContent } from './styles';
import Footer from 'layout/Footer';

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
