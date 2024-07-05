import React from "react";


export const MeInfo = () => {
  return (
    <div className="meInfo mt-40 ml-40  flex flex-col items-center justify-between bg-white dark:bg-gray-800 shadow-md shadow-gray-300 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-center px-2 md:px-6">
          <img
            className="w-16 hidden rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block"
            src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?size=626&ext=jpg"
            alt=""
          />
          <div className="text-left ">
            <h4 className="text-lg md:text-2xl lg:text-3xl ease-in-out duration-1000 uppercase">
              <span className="text-red-500">Eder</span>Castro
            </h4>
            <h4 className="text-sm md:text-base font-medium dark:text-gray-200">
              Software Engineer
            </h4>
          </div>
        </div>
      </div>
      <div className="text-left p-2">
        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 pb-4">
          I am a passionate Software Engineer specialized in full-stack
          development. I focus on Web Application Development using technologies
          such as ReactJS, NodeJS, TypeScript, Java and Python. My goal is to
          create software solutions that offer users a smooth and enjoyable
          experience.
        </p>
        <h4 className="text-base text-green-400 font-semibold m-2">
          KNOWLEDGE
        </h4>
        <ul className="text-sm list-disc ml-6">
          <li>Linux and Windows management.</li>
          <li>Aws.</li>
          <li>Computer networks.</li>
        </ul>
       
      </div>
    </div>
  );
};
