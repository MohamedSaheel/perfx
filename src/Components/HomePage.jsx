import { Link } from "react-router-dom";
import Sidebar from "../Components/DashBoard/Sidebar";
import Navbar from "../Components/DashBoard/Navbar";
import Pages from "./Pages";
import { NavLink } from "react-router-dom";
import React from "react";
import menu from '../Components/Images/menu.svg'

const Home = () => {
  return (
    <div>
      <div className="flex ">
        <div className="bg-secondary h-screen w-28 static">
          <div className="">
            <div className="flex flex-col items-center text-center mb-6 ">
              <Link className=" p-3 border rounded-lg ">
                {" "}
                <img src={menu} alt="logo" className="w-8 h-8" />
              </Link>
            </div>
            <div className="flex flex-col items-center text-center ">
              <NavLink
                to="/perfx/dashboard"
                className="hover:bg-primary hover:text-white p-3 border rounded-lg "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M0 14.1176V0H14.1176V14.1176H0ZM0 32V17.8824H14.1176V32H0ZM17.8824 14.1176V0H32V14.1176H17.8824ZM17.8824 32V17.8824H32V32H17.8824ZM2.82349 11.2941H11.2941V2.82349H2.82349V11.2941ZM20.7058 11.2941H29.1765V2.82349H20.7058V11.2941ZM20.7058 29.1765H29.1765V20.7058H20.7058V29.1765ZM2.82349 29.1765H11.2941V20.7058H2.82349V29.1765Z"
                    fill="currentColor"
                  />
                </svg>
              </NavLink>
              <p className="text-sm ">DashBoard</p>
            </div>
            <div className="flex flex-col items-center text-center ">
              <NavLink
                to="/perfx/create"
                className="hover:bg-primary hover:text-white p-3 border rounded-lg "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M26.6667 18.6667C28.1394 18.6667 29.3333 17.4728 29.3333 16C29.3333 14.5273 28.1394 13.3334 26.6667 13.3334C25.1939 13.3334 24 14.5273 24 16C24 17.4728 25.1939 18.6667 26.6667 18.6667Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.6667 7.99996C28.1394 7.99996 29.3333 6.80605 29.3333 5.33329C29.3333 3.86053 28.1394 2.66663 26.6667 2.66663C25.1939 2.66663 24 3.86053 24 5.33329C24 6.80605 25.1939 7.99996 26.6667 7.99996Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.6667 29.3333C28.1394 29.3333 29.3333 28.1394 29.3333 26.6667C29.3333 25.1939 28.1394 24 26.6667 24C25.1939 24 24 25.1939 24 26.6667C24 28.1394 25.1939 29.3333 26.6667 29.3333Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.33329 18.6667C6.80605 18.6667 7.99996 17.4728 7.99996 16C7.99996 14.5273 6.80605 13.3334 5.33329 13.3334C3.86053 13.3334 2.66663 14.5273 2.66663 16C2.66663 17.4728 3.86053 18.6667 5.33329 18.6667Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 16H24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 5.33337H18.6666C16 5.33337 14.6666 6.66671 14.6666 9.33337V22.6667C14.6666 25.3334 16 26.6667 18.6666 26.6667H24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>

              <p className="text-sm">Create Application</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <NavLink
                to="/perfx/projectview"
                className="hover:bg-primary hover:text-white p-3 border rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M29.3333 12V20C29.3333 23.3333 28.6666 25.6667 27.1733 27.1733L18.6666 18.6666L28.9733 8.35999C29.2133 9.41332 29.3333 10.6133 29.3333 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.9733 8.35997L8.35994 28.9733C4.34661 28.0533 2.66663 25.28 2.66663 20V12C2.66663 5.33329 5.33329 2.66663 12 2.66663H20C25.28 2.66663 28.0533 4.34663 28.9733 8.35997Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.1733 27.1733C25.6667 28.6666 23.3333 29.3333 20 29.3333H12C10.6133 29.3333 9.41332 29.2133 8.35999 28.9733L18.6667 18.6666L27.1733 27.1733Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.31998 10.64C9.22665 6.73329 15.0933 6.73329 16 10.64C16.52 12.9333 15.08 14.88 13.8133 16.08C12.8933 16.96 11.44 16.96 10.5067 16.08C9.24 14.88 7.78665 12.9333 8.31998 10.64Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12.1261 11.6H12.1381"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>
              <p className="text-sm break-words">Project View</p>
            </div>
            <div className="flex flex-col items-center text-center ">
              <Link className="hover:bg-primary hover:text-white p-3 border rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M10.6666 16.2667H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6666 21.6H16.5066"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3333 7.99996H18.6666C21.3333 7.99996 21.3333 6.66663 21.3333 5.33329C21.3333 2.66663 20 2.66663 18.6666 2.66663H13.3333C12 2.66663 10.6666 2.66663 10.6666 5.33329C10.6666 7.99996 12 7.99996 13.3333 7.99996Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.3333 5.35999C25.7733 5.59999 28 7.23999 28 13.3333V21.3333C28 26.6667 26.6667 29.3333 20 29.3333H12C5.33333 29.3333 4 26.6667 4 21.3333V13.3333C4 7.25332 6.22667 5.59999 10.6667 5.35999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <p className="text-sm">Reports</p>
            </div>
            <div className="flex flex-col items-center text-center ">
              <Link className="hover:bg-primary hover:text-white p-3 border rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M12.8 26.6667H19.2C24.5334 26.6667 26.6667 24.5334 26.6667 19.2V12.8C26.6667 7.46671 24.5334 5.33337 19.2 5.33337H12.8C7.46671 5.33337 5.33337 7.46671 5.33337 12.8V19.2C5.33337 24.5334 7.46671 26.6667 12.8 26.6667Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 22.6667H18C21.3334 22.6667 22.6667 21.3334 22.6667 18V14C22.6667 10.6667 21.3334 9.33337 18 9.33337H14C10.6667 9.33337 9.33337 10.6667 9.33337 14V18C9.33337 21.3334 10.6667 22.6667 14 22.6667Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6801 5.33329V2.66663"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 5.33329V2.66663"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.3334 5.33329V2.66663"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.6666 10.6666H29.3333"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.6666 16H29.3333"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.6666 21.3334H29.3333"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.3334 26.6666V29.3333"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.0133 26.6666V29.3333"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6801 26.6666V29.3333"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.66663 10.6666H5.33329"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.66663 16H5.33329"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.66663 21.3334H5.33329"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 12.9333L14.7467 15.12C14.4667 15.6 14.6934 16 15.2534 16H16.7467C17.3067 16 17.5334 16.4 17.2534 16.88L16 19.0667"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <p className="text-sm">Comparative Analysis</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div>
            <Navbar />
          </div>

          <div className="flex">
            <div className="">
              <Sidebar />
            </div>
            <div className="flex  p-2 w-full">
              <Pages />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
