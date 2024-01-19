"use client";
import { Wrapper, ProductDetailsCarousel } from "@/components";
import { IoMdHeartEmpty } from "react-icons/io";
import ReactMarkdown from "react-markdown";
import { RelatedProducts } from "@/components";
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "@/utils/api";
import { calculateDiscountPercentage } from "@/utils/helper";
import { useDispatch } from "react-redux";
import { addToCart } from "@/provider/redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetails({ params }) {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [selectedSize, setSelectedSize] = useState();
  const [showSizeError, setShowSizeError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProductDetails();
    fetchRelatedProducts();
  }, []);

  const fetchProductDetails = async () => {
    const data = await fetchDataFromApi(
      `/api/products?populate=*&[filters][slug][$eq]=${params?.slug}`
    );
    setProduct(data);
  };

  const fetchRelatedProducts = async () => {
    const realatedProductdata = await fetchDataFromApi(
      `/api/products?populate=*&[filters][slug][$ne]=${params?.slug}`
    );

    setRelatedProducts(realatedProductdata);
  };

  const baseUrl = product?.data[0]?.attributes;
  const name = product?.data[0]?.attributes?.name;
  const subtitle = product?.data[0]?.attributes?.subtitle;
  const price = product?.data[0]?.attributes?.price;
  const original_price = product?.data[0]?.attributes?.original_price;
  const sizes = product?.data[0]?.attributes?.size?.data;
  const description =
    product?.data[0]?.attributes?.description[0]?.children[0]?.text;
  const images = product?.data[0]?.attributes?.image?.data;

  const notify = () => {
    toast.success("Added To Cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={images} />
          </div>
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {name}
            </div>
            <div className="text-lg font-semibold mb-5">{subtitle}</div>
            <p className="mr-2 text-lg font-semibold">&#36;{price}</p>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>

            {original_price && (
              <>
                <p className="text-base  font-medium line-through">
                  &#36;{original_price}
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  {calculateDiscountPercentage(price, original_price)}% off
                </p>
              </>
            )}
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
            {/* PRODUCT SIZE RANGE START */}
            <div id="sizeChart" className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {sizes?.map((size) => {
                  return (
                    <div
                      className={`border rounded-md text-center py-3 font-medium hover:border-black ${
                        size?.enabled
                          ? "cursor-pointer"
                          : "cursor-not-allowed bg-black/[0.05]"
                      } ${selectedSize === size?.size ? "border-black" : ""}`}
                      onClick={() => {
                        setSelectedSize(size?.size);
                        setShowSizeError(false);
                      }}
                    >
                      {size?.size}
                    </div>
                  );
                })}
              </div>
              {/* SIZE END */}
              {showSizeError && (
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              )}
            </div>
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                if (!selectedSize) {
                  setShowSizeError(true);
                } else {
                  dispatch(
                    addToCart({
                      ...product?.data[0],
                      selectedSize,
                      oneQuantityPrice: price,
                    })
                  );
                  notify();
                }
                document.getElementById("sizeChart").scrollIntoView({
                  block: "center",
                  behavior: "smooth",
                });
              }}
            >
              Add To Cart
            </button>
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>{description}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts products={relatedProducts} />
      </Wrapper>
    </div>
  );
}

export default ProductDetails;
