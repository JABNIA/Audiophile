import ProductPage from "./ProductPage";
import usePageContext from "./Context";
import Product from "./Product";


export default function Headphones(){
    const context = usePageContext()
    const headphones = context.devices.filter(device => device.category === "headphones")

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
                image={headphone.image.desktop} 
                name={headphone.name} 
                description={headphone.description} 
                newProduct={headphone.new}/>
            )})}
        
        </>
    )
}




