"use client";
import { useEffect, useState } from "react";
import { Menu, MenuMoblie, Wrapper } from "@/components";
import Image from "next/image";
import Link from "next/link";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await fetchDataFromApi("/api/categories?populate=*");
    // console.log("data = ", data);
    setCategories(data);
  };

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY < lastScrollY && !mobileMenu) {
        setShow("shadow-sm");
      } else {
        setShow("-translate-y-[80px]");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  const {cartItems} = useSelector((state) => state.cart)

  return (
    <header
      className={`sticky w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <Image
            className="md:h-[50px] md:w-[50px]"
            src={"/assets/icons/logo.svg"}
            height={30}
            width={30}
            alt=""
          />
        </Link>

        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />

        {mobileMenu && (
          <MenuMoblie
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}

        <div className="flex items-center gap-2 text-black">
          {/* Icon Start */}
          <div className=" w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full absolute top-0 md:top-1 left-4 md:left-6 flex justify-center items-center text-[10px] md:text-[12px] px-[3px] md:px-[5px] bg-red-600 text-white">
              15
            </div>
          </div>
          {/* Icon End */}
          {/* Icon Start */}
          <Link
            href="/cart"
            className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
          >
            <BsCart className="text-[15px] md:text-[20px]" />
           {cartItems.length > 0 && <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full absolute top-0 md:top-1 left-4 md:left-6 flex justify-center items-center text-[10px] md:text-[12px] px-[3px] md:px-[5px] bg-red-600 text-white">
            {cartItems.length}
            </div>}
          </Link>
          {/* Icon End */}

          <div
            className="w-8 md:w-12 h-8 md:h-12 md:hidden rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2"
            onClick={() => setMobileMenu((prev) => !prev)}
          >
            {mobileMenu ? (
              <VscChromeClose className="text-[16px]" />
            ) : (
              <BiMenuAltRight className="text-[20px]" />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
