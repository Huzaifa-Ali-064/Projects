import React from "react";

function TaskListNumber() {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl w-[45%] p-6  bg-blue-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="xl font-medium font-semibold">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] p-6 bg-green-400">
        <h2 className="text-3xl font-semibold">3</h2>
        <h3 className="xl font-medium font-semibold">Completed Task</h3>
      </div>
      <div className="rounded-xl w-[45%] p-6 bg-yellow-400">
        <h2 className="text-3xl font-semibold text-black">0</h2>
        <h3 className="xl font-medium font-semibold text-black">
          Accepted Task
        </h3>
      </div>
      <div className="rounded-xl w-[45%] p-6 bg-red-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="xl font-medium font-semibold">New Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;
