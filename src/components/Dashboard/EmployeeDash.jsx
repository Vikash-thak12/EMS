import TaskLists from "../TaskLists"

const EmployeeDash = () => {
  return (
    <div className="min-h-screen w-full md:p-10 flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Hello Vikash 👋</h1>
        <button className="bg-red-500 px-5 py-2 rounded-md text-xl font-semibold">Logout</button>
      </div>

      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 mt-10">
        <div className="bg-green-500 p-10 rounded-2xl flex flex-col cursor-pointer">
            <span className="font-bold text-3xl">0</span>
            <span className="font-bold text-3xl">New Task</span>
        </div>
        <div className="bg-green-500 p-10 rounded-2xl flex flex-col cursor-pointer">
            <span className="font-bold text-3xl">0</span>
            <span className="font-bold text-3xl">New Task</span>
        </div>
        <div className="bg-green-500 p-10 rounded-2xl flex flex-col cursor-pointer">
            <span className="font-bold text-3xl">0</span>
            <span className="font-bold text-3xl">New Task</span>
        </div>
        <div className="bg-green-500 p-10 rounded-2xl flex flex-col cursor-pointer">
            <span className="font-bold text-3xl">0</span>
            <span className="font-bold text-3xl">New Task</span>
        </div>
      </div>

      <TaskLists />
    </div>
  )
}

export default EmployeeDash
