import ImageSlider from "../ImageSlider";

async function getProducts(id) {
  const res = await fetch('https://fakestoreapi.com/products/'+ id)
  return res.json()
}

export default async function Details ({ params }) {
  const product = await getProducts(params.id)

  return (
    <>
      <main className="px-2 my-4 bg-gray-50 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
            <ImageSlider />

            <div className="py-4 col-span-2">
              <h3 className="text-lg ">{product.title}</h3>
              <p className="text-2xl font-bold py-2">${product.price}</p>
              <small className=" bg-orange-100 text-orange-500 rounded p-2">In Stock</small>
              <small className="block py-2">+ shipping from <b>₦250</b> to cities excluding Abuja, Lagos and Akure</small>

              <div className="py-2 flex gap-2">
                <p># # # # #</p>
                <span>({product.rating.count} verified ratings)</span>
              </div>
              <div className="py-4">
                <h5 className="font-bold opacity-60 uppercase">Variations</h5>
                <div className="flex gap-2 justify-evenly py-2">
                  <div className="border rounded p-2 px-4"><span>45</span></div>
                  <div className="border rounded p-2 px-4"><span>45</span></div>
                  <div className="border rounded p-2 px-4"><span>45</span></div>
                  <div className="border rounded p-2 px-4"><span>45</span></div>
                </div>
              </div>
              <div className="my-4">
                <buttton className="block rounded py-4 bg-orange-500 text-center text-white shadow-lg">
                  Add to cart
                </buttton>
              </div>
            </div>
        </div>
      </main>
    </>
  );
};

