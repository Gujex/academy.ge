"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import { userRegister } from "@/services/registration";
import Swal from "sweetalert2";
import { useGlobalContext } from "@/app/Context/store";

// type InputValues = {
//     fullName: string;
//     parentFullName: string;
//     phoneNumber: string;
//     motivationLetter: string;
// }

const Contactusform = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpenModal, setIsOpenModal } = useGlobalContext();

  const [inputValues, setInputValues] = useState<any>({
    fullName: "",
    parentFullName: "",
    phoneNumber: "",
    motivationLetter: "",
    course: "",
  });
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value }: any = e.target;
    setInputValues((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    setIsOpenModal(false);
    userRegister(inputValues)
      .then((res: { message: string }) => {
        Swal.fire({
          icon: "success",
          title: "გილოცავთ!",
          text: res.message,
        });
        setInputValues({
          fullName: "",
          parentFullName: "",
          phoneNumber: "",
          motivationLetter: "",
          course: "",
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "უფს...",
          text: "რეგისტრაცია ვერ მოხერხდა !!!" + err.message,
        });
      });
  };

  // FORM SUBMIT
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // handle form submission
  };

  const isDisabled: any = Object.keys(inputValues).some(
    (key) => key !== "motivationLetter" && inputValues[key] === ""
  );

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
        <div className="hidden lg:block">
          <button
            type="button"
            className="justify-end text-xl font-semibold duration-300 bg-blue py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-hoblue text-white hover:text-white"
            onClick={openModal}
          >
            რეგისტრაცია
          </button>
        </div>
      </div>

      <Transition appear show={isOpenModal} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                    <div className="flex flex-shrink-0 items-center justify-center">
                      <Link
                        href="/"
                        className="text-2xl sm:text-4xl font-semibold text-black"
                      >
                        Leaders Academy
                      </Link>
                    </div>
                    <p className="mb-8 lg:mb-16 mt-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                      რეგისტრაციისთვის შეავსეთ მოცემული ველები
                    </p>
                    <form
                      action="#"
                      className="space-y-8"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label
                          htmlFor="text"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          სახელი და გვარი
                        </label>
                        <input
                          id="text"
                          name="fullName"
                          value={inputValues.fullName}
                          onChange={handleChange}
                          type="text"
                          autoComplete="current-password"
                          required
                          className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          // placeholder="Name..."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          მშობლის სახელი და გვარი
                        </label>
                        <input
                          id="email"
                          name="parentFullName"
                          value={inputValues.parentFullName}
                          onChange={handleChange}
                          type="text"
                          autoComplete="current-password"
                          required
                          className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          // placeholder="xyz@email.com"
                        />
                      </div>
                      {/*<div>*/}
                      {/*    <label htmlFor="email"*/}
                      {/*           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">მშობლის*/}
                      {/*        სახელი და გვარი</label>*/}
                      {/*    <select className={'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'}>*/}
                      {/*        <option value="volvo">გრიგოლეთი</option>*/}
                      {/*        <option value="saab">ხაიში</option>*/}
                      {/*        <option value="mercedes">თეთთრიწყარო</option>*/}

                      {/*    </select>*/}
                      {/*</div>*/}
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          მშობლის ტელეფონის ნომერი
                        </label>
                        <input
                          id="phoneNumber"
                          name="phoneNumber"
                          value={inputValues.phoneNumber}
                          onChange={handleChange}
                          type="number"
                          autoComplete="current-password"
                          required
                          className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="551123456"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          კურსი
                        </label>
                        <select
                          id="course"
                          name="course"
                          value={inputValues.course}
                          onChange={handleChange}
                          autoComplete="current-password"
                          required
                          className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          // placeholder="xyz@email.com"
                        >
                          <option value="">-</option>
                          <option value="0">პროგრამირება</option>
                          <option value="1">3D ხელოვნება</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                          სამოტივაციო წერილი
                        </label>
                        <textarea
                          id="motivationLetter"
                          name="motivationLetter"
                          value={inputValues.motivationLetter}
                          onChange={handleChange}
                          className="relative block w-full appearance-none  rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Leave a comment..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        onClick={handleClick}
                        disabled={isDisabled}
                        className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Send message
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Contactusform;
//
