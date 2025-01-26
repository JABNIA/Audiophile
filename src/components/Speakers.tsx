import usePageContext from "./Context"
import ProductPage from "./ProductPage"
import Product from "./Product"


export default function Speakers(){
    const context = usePageContext()
    const speakers = context.devices.filter(device => device.category === "speakers")
    
    return(
            context.selected
            ?
            <ProductPage id={context.productId}/>
            :
            <>      
            {
            speakers.map((speaker) => {
                return (<Product 
                    key={speaker.id} 
                    id={speaker.id} 
                    image={speaker.image.desktop} 
                    name={speaker.name} 
                    description={speaker.description} 
                    newProduct={speaker.new}/>)
                    }
                )
            }
        </>
        )
}