import Image from "next/image";
import Link from "next/link";

const SmallCard = ({ product }) => {
  return (
    <div className="border rounded-2xl bg-white overflow-hidden">
      <div className="w-full h-44 relative bg-gray-100">
        <Image src={product.image} layout="fill" alt={product.title} />
      </div>
      <div className="md:flex pt-4 px-2 justify-between items-center">
        <div>
          <p className=" text-sm" title={product.title}>
            {product.title.slice(0, 30)}...
          </p>
          <p className="font-semibold text-lg">${product.price}</p>
        </div>
        <div className="my-2 mt-4">
          <Link
            href={`/details/${product.id}`}
            className="inline-block text-center bg-orange-500 text-white rounded-xl text-sm py-2 w-full shadow-md uppercase"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
