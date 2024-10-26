const AllTask = () => {
  return (
    <div id="task" className="px-5 md:px-20 h-44 flex flex-col gap-2 overflow-auto mt-2 bg-[#1c1c1c] rounded-md">
    <h1 className="mt-2 font-bold text-xl">All Tasks</h1>
      <div className="bg-blue-400 cursor-pointer hover:scale-105 transition-all p-2 md:p-4 mt-2 rounded-md flex gap-10 items-center justify-between">
        <h1>Vikash</h1>
        <span className="line-clamp-1">Welcome to this beautiful website</span>
      </div>
    </div>
  )
}

export default AllTask
