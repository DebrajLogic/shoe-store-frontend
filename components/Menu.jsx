import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import React from "react";

function Menu({ showCatMenu, setShowCatMenu, categories }) {
  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11, url: "/category/jordan" },
    { id: 2, name: "Sneakers", doc_count: 8, url: "/category/sneaker" },
    {
      id: 3,
      name: "Running shoes",
      doc_count: 64,
      url: "/category/runningshoes",
    },
    {
      id: 4,
      name: "Football shoes",
      doc_count: 107,
      url: "/category/footballshoes",
    },
  ];
  
  return (
    <ul className="hidden md:flex items-center gap-8 font-semibold text-black">
      {data?.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item?.subMenu ? (
              <li
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
                className="cursor-pointer flex items-center gap-1 relative"
              >
                {item?.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul className=" absolute top-6 left-0 px-1 py-1 min-w-[250px] text-black shadow-lg bg-white">
                    {categories?.data?.map((category) => {
                     
                      return (
                        <Link
                          href={`/category/${category?.attributes?.slug}`}
                          key={category?.id}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className="h-12 px-3 flex justify-between items-center gap-2 hover:bg-black/[0.03] rounded-md">
                            {category?.attributes?.name}
                            <span className="opacity-50 text-sm">
                              {`(${category?.attributes?.products?.data?.length})`}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url}>{item?.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}

export default Menu;
