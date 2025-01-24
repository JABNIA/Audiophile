import React, { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import ProductPresentation from './components/ProductPresentation';
import Headphones from './components/Headphones';
import {AudiophileContext} from './components/Context';import Speakers from './components/Speakers';
import Earphones from './components/Earphones';
import data from "./data.json"
import Layout from './components/Layout';
import Checkout from './components/Checkout';



export type audiophileData ={
  devices: device[]
  selected: boolean
  productId: number
  cart: boolean 
  cartContent: CartItem[] | null
  checkOut: boolean

  setProductSelected: React.Dispatch<React.SetStateAction<boolean>>
  setProductId: React.Dispatch<React.SetStateAction<number>>
  setCart: React.Dispatch<React.SetStateAction<boolean>>
  setCartContent: React.Dispatch<React.SetStateAction<CartItem[] | null>>
  setCheckOut: React.Dispatch<React.SetStateAction<boolean>>
}

export type device = {
  id: number,
    slug: string,
    name: string,
    image: {
      mobile: string,
      tablet: string,
      desktop: string
    },
    category: string,
    categoryImage: {
      mobile: string,
      tablet: string,
      desktop: string
    },
    new: boolean,
    price: number,
    description: string,
    features: string,
    includes:
      {
        quantity: number,
        item: string
      }[],
    gallery: {
      first: {
        mobile: string,
        tablet: string,
        desktop: string
      },
      second: {
        mobile: string,
        tablet: string,
        desktop: string
      },
      third: {
        mobile: string,
        tablet: string,
        desktop: string
      }
    },
    others: 
      {
        slug: string,
        name: string,
        image: {
          mobile: string,
          tablet: string,
          desktop: string
        }
      }[]
  }


export type CartItem = {
    device: device
    quantity: number
  }

const devices:device[] = data

function App() {
  const [productSelected, setProductSelected] = useState<boolean>(false);
  const [productId, setProductId] = useState<number>(0)
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)
  const [cartContent, setCartContent] = useState<CartItem[] | null>([
    {
      device: devices[0],
      quantity: 3
    },
    {
      device: devices[1],
      quantity: 1
    }
  ])
  const [checkOut, setCheckOut] = useState<boolean>(false)  

  


  const data:audiophileData = {
    devices: devices,
    selected: productSelected,
    productId: productId,
    cart: cartIsOpen,
    cartContent:cartContent,
    checkOut: checkOut,

    setProductSelected: setProductSelected,
    setProductId: setProductId,
    setCart: setCartIsOpen,
    setCartContent: setCartContent,
    setCheckOut: setCheckOut
  }
  

  return (
    <>
      <AudiophileContext.Provider value={data}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<ProductPresentation />} />  
              <Route path='headphones' element={<Headphones />} />  
              <Route path='earphones' element={<Earphones />} />  
              <Route path='speakers' element={<Speakers />} />  
              <Route path='checkout' element={<Checkout />} />  
            </Route>
          </Routes>    
        </HashRouter>
      </AudiophileContext.Provider>
    </>
    )
  }
export default App



