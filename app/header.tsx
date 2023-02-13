"use client";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Hamburger from "./hamburger";
import { classNames } from "@/utils/common";

const userNavigation = [{ name: "로그아웃", href: "#" }];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div className="">
        {/* Static sidebar for desktop */}
        <Hamburger
          mobileMenuOpen={sidebarOpen}
          setMobileMenuOpen={setSidebarOpen}
        />
        <div className="flex flex-1 justify-between md:justify-end ">
          <button
            type="button"
            className="px-4 text-white focus:outline-none md:hidden"
            onClick={() => {
              setSidebarOpen(true);
            }}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex h-16 flex-shrink-0  shadow">
            <div className="flex flex-1 justify-end px-4">
              <div className="ml-4 flex items-center md:ml-8">
                {/* Profile dropdown */}
                {!isLogin && <div className="text-sm text-white">로그인</div>}
                {isLogin && (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex text-black max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <div> 000 님 </div>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
