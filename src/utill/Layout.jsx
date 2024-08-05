import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}