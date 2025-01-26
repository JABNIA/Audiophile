import usePageContext from "./Context"
import ProductPage from "./ProductPage"
import Product from "./Product"


export default function Earphones(){
    const context = usePageContext()
    const earphones = context.devices.filter(device => device.category === "earphones")
    
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
                        image={device.image.desktop} 
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
