import Header from './header'
import Footer from './Footer'
import { Outlet } from 'react-router';
import usePageContext from './Context';
import Checkout from './Checkout';
import HomeProductCategoriesSelection from './HomeProductCategorieSelection';
import About from './About';

function Layout() {
    const context = usePageContext()
  return (
    <div>
    <Header />
    <Outlet />
    {
        context.checkOut ? <Checkout /> 
        :
        <div style={{position: "relative"}}>

          <HomeProductCategoriesSelection />

          <About /> 
        </div>
        }
    <Footer />
    </div>
  )
}

export default Layout
