import ProductPage from "./ProductPage";
import usePageContext from "./Context";
import Product from "./Product";
import useScreenSize from "./customHooks/useScreenSize";


export default function Headphones(){
    const context = usePageContext();
    const screenSize = useScreenSize();
    const headphones = context.devices.filter(device => device.category === "headphones");

    return(
        context.selected
        ?
        <ProductPage id={context.productId}/>
        :
        <>
            { 
            headphones.map(headphone => {
                return ( 
                <Product 
                id={headphone.id} 
                image={headphone.image[`${screenSize.width >= 1440 ? "desktop": screenSize.width >= 768 ? "tablet" : "mobile"}`]} 
                name={headphone.name} 
                description={headphone.description} 
                newProduct={headphone.new}/>
            )})}
        
        </>
    )
}




