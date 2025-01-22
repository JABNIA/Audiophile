import styled from "styled-components"
import Navigation from "./Navigation"
import usePageContext from "./Context"
import useScreenSize from "./customHooks/useScreenSize"


export default function Header(){
  const context = usePageContext()  
  const screenSize = useScreenSize()
  
  
  
  return (
        <HeaderWrapper  selected={context.selected} checkout={context.checkOut} screen={screenSize.width} id="header">
          <Navigation />
        </HeaderWrapper>
    )
}


const HeaderWrapper = styled.header<{selected: boolean, checkout: boolean, screen: number}>`
  width: 1440px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  margin: auto;

  h1{
    text-align: center;
    margin-top: 120px;
    font-size: 40px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 1.4285714626312256px;
    text-align: center;
    color: #FFFFFF;
  }

  @media (max-width: 1440px){
    width: 729px;
  }


  @media (max-width: 768px){
    width: 375px;
    background-size: cover;
    background-position:center
  }
`

export const NewProductDescription = styled.div`
  width: 398px;
  height: 346px;
  margin: 100px 170px;
  padding-top: 20px;
  
  h4{
    font-weight: 100;
    margin: 30px 0px;
    letter-spacing: 10px;
    color: rgba(255,255,255,0.5);
  }

  p{
    font-size: 17px;
    font-weight: 100;
    line-height: 25px;
    text-align: left;
    margin: 30px 0px;
    color: #ffffff;
  }

  .productName{
    font-size: 56px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 2px;
    text-align: left;
    color: #ffffff
  }
  
  .newProductButton {
    margin-left: 0px;
  }

  @media (max-width: 1440px){
    width: 398px;
    height: 346px;
    margin: 126px auto;
    padding-top: 0px;
    
    .productName {
      width: 100%;
      font-family: Manrope;
      font-size: 56px;
      font-weight: 700;
      line-height: 58px;
      letter-spacing: 2px;
      text-align: left;
    }
    
    h4{
      font-family: Manrope;
      font-size: 14px;
      font-weight: 400;
      line-height: 19.12px;
      letter-spacing: 10px;
      text-align: center;
    }
    
    p {
      width: 349px;
      margin: auto;
      margin-top: 24px;
      font-family: Manrope;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;
    }
  
    .newProductButton {
      margin-left: 109px;
    }

    @media (max-width: 768px){
      width: 375px;
      height: 290px;
      margin-top: 108px;
      .productName {
      width: 100%;
      font-family: Manrope;
      font-size: 36px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 1.2857142686843872px;
      text-align: center;

    }
    
    h4{
      font-family: Manrope;
      font-size: 14px;
      font-weight: 400;
      line-height: 19.12px;
      letter-spacing: 10px;
      text-align: center;

    }
    
    p {
      width: 300px;
      margin: auto;
      margin-top: 24px;
      font-family: Manrope;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;

    }
  
    .newProductButton {
      margin-left: 107px;
    }
    }
  }
    `

export const Button = styled.button`
  width: 160px;
  height: 48px;
  background-color: #D87D4A;
  color: #FFF;
  cursor: pointer;
  border-radius: 0px;
  font-size: 13px;
  margin-left: 109px;

  &:hover{
    background-color: #FBAF85;
  }

  @media (max-width: 1440px){
    margin-top: 40px;
  }


`

