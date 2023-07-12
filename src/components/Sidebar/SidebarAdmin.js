import React, { useState } from 'react';

const SidebarAdmin = () => {
  // const [showSidebar, setShowSidebar] = useState(false);

  // return (
  //   <>
  //     {showSidebar ? (
  //       <button
  //         className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
  //         onClick={() => setShowSidebar(!showSidebar)}
  //       >
  //         x
  //       </button>
  //     ) : (
  //       <svg
  //         onClick={() => setShowSidebar(!showSidebar)}
  //         className="fixed  z-30 flex items-center cursor-pointer left-10 top-6"
  //         fill="#2563EB"
  //         viewBox="0 0 100 80"
  //         width="40"
  //         height="40"
  //       >
  //         <rect width="100" height="10"></rect>
  //         <rect y="30" width="100" height="10"></rect>
  //         <rect y="60" width="100" height="10"></rect>
  //       </svg>
  //     )}

  //     <div
  //       className={`top-0 left-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full min-h-screen z-40  ease-in-out duration-300 ${
  //         showSidebar ? "translate-x-0 " : "-translate-x-full"
  //       }`}
  //     >
  //       <h3 className="mt-20 text-4xl font-semibold text-white">
  //         I am a sidebar
  //       </h3>
  //     </div>
  //   </>
  // )
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex w-full">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-indigo-500 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt=''
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt=''
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} alt='' />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
}

export default SidebarAdmin