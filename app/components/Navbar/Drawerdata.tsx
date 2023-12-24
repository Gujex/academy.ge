import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";
import { useGlobalContext } from "@/app/Context/store";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "ჩვენს შესახებ", href: "/about", current: false },
  { name: "კურსები", href: "#services-section", current: false },
  { name: "FAQ", href: "#faq-section", current: false },
  { name: "ბლოგი", href: "/blog", current: false },
  // { name: "რეკომენდაციები", href: "#testimonial-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  const { isOpenModal, setIsOpenModal } = useGlobalContext();

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-purple"
                    : "text-black hover:bg-gray-700 hover:text-purple",
                  "block  py-2 rounded-md text-base font-medium duration-300"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>
            <button
              onClick={() => setIsOpenModal(!isOpenModal)}
              className=" bg-blue  hover:bg-hoblue duration-300 w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded"
            >
              რეგისტრაცია
            </button>
            {/* <Contactusform /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
