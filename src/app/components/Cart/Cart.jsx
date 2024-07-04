const Cart = ({cartItems}) => {
    return ( 
        <aside className="px-2 bg-gray-100">
            <h2 className="text-2xl ">Cart</h2>
            <div>
                <div className="flex gap-x-2 p-2 w-full rounded-md shadow items-center bg-white">
                    <div className="w-1/4 aspect-square bg-gray-100 rounded"></div>
                    <div className="flex items-center w-2/4 justify-evenly">
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                    <div className="w-1/4 flex justify-center">
                        <span>X</span>
                    </div>
                </div>
            </div>
        </aside>
     );
}
 
export default Cart;