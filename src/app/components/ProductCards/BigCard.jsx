import Image from "next/image";

const BigCard = ({ product }) => {
  return (
    <div className="border rounded-2xl p-2 w-2/3 flex-none bg-white snap-start ">
      <div className="w-full relative aspect-square rounded-xl bg-gray-100 overflow-hidden">
        <Image src={product.image} layout="fill" />
      </div>
      <div className="md:flex pt-4 justify-between items-center">
        <div>
          <p className="" title={product.title}>
            {product.title.slice(0, 40)}...
          </p>
          <p className="font-semibold text-lg">${product.price}</p>
        </div>
        <div className="mt-4">
          <button className="bg-orange-500 text-white rounded-xl py-2 w-full shadow-md uppercase">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
