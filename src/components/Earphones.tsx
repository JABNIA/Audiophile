import usePageContext from "./Context"
import ProductPage from "./ProductPage"
import Product from "./Product"
import useScreenSize from "./customHooks/useScreenSize"


export default function Earphones(){
    const context = usePageContext();
    const screenSize = useScreenSize();
    const earphones = context.devices.filter(device => device.category === "earphones");
    
    return( 
        context.selected
        ?
        <ProductPage id={context.productId}/>
        :
        <>
        {
            earphones.map((device) => {
                return (
                    <Product 
                        key={device.id} 
                        id={device.id} 
                        image={device.image[`${screenSize.width >= 1440 ? "desktop": screenSize.width <= 768 ? "tablet" : "mobile"}`]} 
                        name={device.name} 
                        description={device.description} 
                        newProduct={device.new}/>
                    
                    )
                }
            )
        }
        </>
    )
}
