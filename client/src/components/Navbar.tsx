import { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

// import { Layout, Row, Col } from "antd";

import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

export default function Navbar() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <nav className="py-6 px-8 w-full absolute top-0 left-0 overflow-x-hidden">
        <div className="flex flex-row items-center justify-between lg:justify-center">
          <div id="logo" className="basis-3/12 flex justify-start items-center">
            <a href="/">
              <img
                className="w-10 h-10"
                src="https://cngupugurzdczieryupu.supabase.co/storage/v1/object/public/unfold24/soultix-logo.png?t=2024-12-02T03%3A30%3A50.177Z"
                alt="Logo"
              />
            </a>
            <Link to="/" className="ml-4 text-2xl font-bold text-gray-300">
              SoulTix
            </Link>
          </div>
          <div className="lg:hidden flex">
            <button
              onClick={handleToggle}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div
            id="nav-links"
            className="basis-6/12 mx-auto  transition-ease text-xs font-semibold font-Sora hidden lg:flex justify-center items-center gap-8"
          >
            <Link to="/" className="text-slate-400 hover:text-white">
              Home
            </Link>

            <Link to="/dashboard" className="text-slate-400 hover:text-white">
              Dashboard
            </Link>
            <Link to="/discover" className="text-slate-400 hover:text-white">
              Discover
            </Link>

            <Link
              to="/upload-images"
              className="text-slate-400 hover:text-white"
            >
              Upload
            </Link>
          </div>
          <div className="nav-contact basis-3/12 hidden lg:flex justify-end gap-3 items-center text-xs font-semibold font-Sora">
            {/*TODO: ADD BUTTON HERE <ConnectButton /> */}

            <WalletSelector />
          </div>
          <div role="dialog" aria-modal={isActive ? "false" : "true"}>
            <div
              //   focus="true"
              className="fixed inset-0 z-40 overflow-y-auto bg-midnight px-6 py-6 lg:hidden"
            >
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#home" className="-m-1.5 p-1.5">
                    <span className="sr-only">SoulTix</span>
                    <img className="h-8" src={logo} alt="" />
                  </a>
                </div>
                <div className="flex">
                  <button
                    onClick={handleToggle}
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                  >
                    <span className="sr-only">Close menu</span>

                    <svg
                      className="h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-700">
                  <div className="space-y-2 py-6">
                    <a
                      href="#Auctions"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-400/10"
                    >
                      Auctions
                    </a>
                    <Link
                      to={"/dashboard"}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-400/10"
                    >
                      Dashboard
                    </Link>
                    <a
                      href="#Discover"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-400/10"
                    >
                      Discover
                    </a>
                  </div>
                  <div className="py-6">
                    <div>{/*TODO: ADD BUTTON HERE <ConnectButton /> */}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
