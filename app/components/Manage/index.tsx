"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import { useGlobalContext } from "@/app/Context/store";
const names = [
  {
    heading: "3D modeling",
    // price: 41211,
    user: "თომა დოლენჯაშვილი",
    button: "რეგისტრაცია",
    profiles: "ანატომია",
    posts: "სკულპტირება",
    templates: "ტექსტურირება",
    view: "რენდერინგი",
    support: "ფიზიკა და სიმულაციები",
    category: "yearly",
  },
  {
    heading: "3D modeling",
    // price: 41211,
    user: "ელისაბედ ნიქაბაძე",
    button: "რეგისტრაცია",
    profiles: "ანატომია",
    posts: "სკულპტირება",
    templates: "ტექსტურირება",
    view: "რენდერინგი",
    support: "ფიზიკა და სიმულაციები",
    category: "yearly",
  },
  {
    heading: "Front-end Development",
    // price: 41211,
    user: "გიორგი გუჯეჯიანი",
    button: "რეგისტრაცია",
    profiles: "HTML/CSS/JS",
    posts: "Bootstrap/Tailwind",
    templates: "Responsive Web Design",
    view: "API ინტეგრაცია",
    support: "Error-ების აღმოფხვრა",
    category: "monthly",
  },
  {
    heading: "Backend Development",
    // price: 41211,
    user: "დავით გუჯეჯიანი",
    button: "რეგისტრაცია",
    profiles: "PHP/Laravel",
    posts: "მონაცემთა ბაზები",
    templates: "API Development",
    view: "სერვერის მენეჯმენტი",
    support: "Error-ების აღმოფხვრა",
    category: "monthly",
  },
  {
    heading: "Backend Development",
    // price: 41211,
    user: "გიორგი გუჯეჯიანი",
    button: "რეგისტრაცია",
    profiles: "Javascript/Node.js",
    posts: "მონაცემთა ბაზები",
    templates: "API Development",
    view: "სერვერის მენეჯმენტი",
    support: "Error-ების აღმოფხვრა",
    category: "monthly",
  },
];

const Manage = () => {
  const { isOpenModal, setIsOpenModal } = useGlobalContext();

  const [enabled, setEnabled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("monthly");

  const toggleEnabled = () => {
    setEnabled(!enabled);
    setSelectedCategory(enabled ? "monthly" : "yearly");
  };

  const filteredData = names.filter(
    (items) => items.category === selectedCategory
  );

  return (
    <div id="services-section">
      <div className="mx-auto max-w-7xl sm:py-20 text-white lg:px-8 my-16">
        <h3 className="text-center text-4xl sm:text-65xl font-black text-[#e4baee]">
          ჩვენთან ფასები <br /> მაქსიმალურად კომფორტულია.
        </h3>
        <div className="md:flex md:justify-around mt-20">
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-lg font-semibold">მეგობრული გარემო</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-lg font-semibold">სწრაფი განვითარება</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-lg font-semibold">აქტიური მენტორები</h4>
          </div>
        </div>

        <div className="mt-6 relative ">
          <div className="dance-text mb-5 ">ისწავლე ჩვენთან</div>
          <Image
            src="/images/manage/toggle.svg"
            alt="toggle-image"
            width={24}
            height={24}
            className="toggleImage"
          />
          <div className="flex justify-center">
            <h3 className="text-sm font-medium mr-5">პროგრამირება</h3>
            <Switch
              checked={enabled}
              onChange={toggleEnabled}
              className={`${
                enabled ? "bg-darkpurple" : "bg-darkpurple"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only text-black">Enable notifications</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <h3 className="text-sm font-medium ml-5">დიზაინი</h3>
          </div>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage">
          {filteredData.map((items, i) => (
            <div className="manageTabs  text-center p-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
              <h2 className="text-5xl sm:text-65xl font-extrabold mb-3"> </h2>
              <p className="text-sm font-medium text-[#b8d0c9] mb-6">
                {items.user}
              </p>
              <button
                onClick={() => setIsOpenModal(!isOpenModal)}
                className=" duration-300 text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6"
              >
                {items.button}
              </button>
              <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
              <h3 className="text-sm font-medium text-[#b8d0c9] mb-3 mt-6">
                {items.profiles}
              </h3>
              {/*<h3 className='text-sm font-medium text-[#b8d0c9] mb-3'>{items.posts}</h3>*/}
              <h3 className="text-sm font-medium text-[#b8d0c9] mb-3">
                {items.templates}
              </h3>
              <h3 className="text-sm font-medium text-[#b8d0c9] mb-3">
                {items.view}
              </h3>
              <h3 className="text-sm font-medium text-[#b8d0c9] mb-3">
                {items.support}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
