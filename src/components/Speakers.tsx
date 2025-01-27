import usePageContext from "./Context"
import ProductPage from "./ProductPage"
import Product from "./Product"
import useScreenSize from "./customHooks/useScreenSize"


export default function Speakers(){
    const context = usePageContext();
    const screenSize = useScreenSize();
    const speakers = context.devices.filter(device => device.category === "speakers");

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
                    image={speaker.image[`${screenSize.width >= 1440 ? "desktop": screenSize.width <= 768 ? "tablet" : "mobile"}`]} 
                    name={speaker.name} 
                    description={speaker.description} 
                    newProduct={speaker.new}/>)
                    }
                )
            }
        </>
        )
}