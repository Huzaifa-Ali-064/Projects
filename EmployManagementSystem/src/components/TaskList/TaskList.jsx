import React from "react";

function TaskList() {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex item-center justify-start gap-5 flex-nowrap w-full py-5  mt-10"
    >
      <div className="flex-shrink-0 h-full p-5 w-[315px] bg-red-400 rounded-xl">
        <div className="flex justify-between ">
          <h3 className="bg-red-600 px-5 py-1 text-sm rounded items-center">
            High
          </h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam odio
          in minus, ab soluta maiores?
        </p>
      </div>{" "}
      <div className="flex-shrink-0 h-full p-5 w-[315px] bg-green-400 rounded-xl">
        <div className="flex justify-between ">
          <h3 className="bg-red-600 px-5 py-1 text-sm rounded items-center">
            High
          </h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam odio
          in minus, ab soluta maiores?
        </p>
      </div>{" "}
      <div className="flex-shrink-0 h-full p-5 w-[315px] bg-blue-400 rounded-xl">
        <div className="flex justify-between ">
          <h3 className="bg-red-600 px-5 py-1 text-sm rounded items-center">
            High
          </h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam odio
          in minus, ab soluta maiores?
        </p>
      </div>{" "}
      <div className="flex-shrink-0 h-full p-5 w-[315px] bg-yellow-400 rounded-xl">
        <div className="flex justify-between ">
          <h3 className="bg-red-600 px-5 py-1 text-sm rounded items-center">
            High
          </h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam odio
          in minus, ab soluta maiores?
        </p>
      </div>
    </div>
  );
}

export default TaskList;
