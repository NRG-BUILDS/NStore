const ImageSlider = () => {
    return ( 
        <section className="w-full">
            <div className="flex flex-nowrap overflow-x-auto gap-2  snap-x snap-mandatory">
                <div className="border rounded-2xl p-2 w-60 bg-white grow-0 shrink-0 basis-auto snap-start snap-always">
                    <div className=" w-full aspect-square rounded-xl bg-gray-100"></div>
                </div>
                <div className="border rounded-2xl p-2 w-60 bg-white grow-0 shrink-0 basis-auto snap-start snap-always">
                    <div className=" w-full aspect-square rounded-xl bg-gray-100"></div>
                </div>
                <div className="border rounded-2xl p-2 w-60 bg-white grow-0 shrink-0 basis-auto snap-start snap-always">
                    <div className=" w-full aspect-square rounded-xl bg-gray-100"></div>
                </div>
            </div>
        </section>
     );
}
 
export default ImageSlider;