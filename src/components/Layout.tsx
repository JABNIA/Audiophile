import Header from './header'
import Footer from './Footer'
import { Outlet } from 'react-router';
import usePageContext from './Context';
import HomeProductCategoriesSelection from './HomeProductCategorieSelection';
import About from './About';
import Cart from './Cart';

function Layout() {
    const context = usePageContext()


    

  return (
    <div>
    <Header />
    <Outlet />
    {
        context.checkOut ?
        null 
        :
        <div style={{position: "relative"}}>

        <HomeProductCategoriesSelection />

        <About /> 
      </div>
      }
      {
        context.cart ? <Cart /> : null
      }
    <Footer />
    </div>
  )
}

export default Layout
