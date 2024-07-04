import BigCard from "./ProductCards/BigCard";
import SmallCard from "./ProductCards/SmallCard";

const ProductTray = ({trayTitle, isFlex = null, products}) => {
    return ( 
        <section>
            <div className="py-4">
                <h2 className="text-2xl py-2 border-b">{trayTitle}</h2>
            </div>
            <div className={"overflow-x-auto gap-2 md:gap-4 " + (isFlex ? 'flex snap-x snap-mandatory' : 'grid grid-cols-2')}>
                {isFlex && (products.map((product) => (
                    <BigCard product={product} key={product.id}/>
                )))}
                {!isFlex && (products.map((product) => (
                    <SmallCard product={product} key={product.id}/>
                )))}
            </div>
        </section>
        
     );
}
 
export default ProductTray;