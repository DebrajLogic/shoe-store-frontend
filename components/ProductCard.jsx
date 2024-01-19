import { calculateDiscountPercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ data }) {
  const product_name = data?.attributes?.name;
  const price = data?.attributes?.price;
  const original_price = data?.attributes?.original_price;
  const thumbnail = data?.attributes?.thumbnail?.data?.attributes?.url;

  return (
    <Link
      href={`/product/${data?.attributes?.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image width={400} height={200} src={thumbnail || ""} alt="" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{product_name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#36;{price}</p>

          {original_price && (
            <>
              <p className="text-base font-medium line-through">
                &#36;{original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {calculateDiscountPercentage(price, original_price)}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
