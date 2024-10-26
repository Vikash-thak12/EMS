const Task = ({ color }) => {
    return (
        <div 
        style={{ backgroundColor: color }} 
        className={`w-[350px] h-full rounded-3xl p-5 flex-shrink-0 overflow-hidden`}>
            <div className="flex items-center justify-between">
                <button className="bg-red-500 px-4 py-1 rounded-md">High</button>
                <span>20 Oct, 2024</span>
            </div>
            <div className="mt-5">
                <h1 className="font-bold text-2xl">Welcome to Admin Dashboard</h1>
                <p className="text-gray-500 line-clamp-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda suscipit tempore mollitia quis repellat quos voluptates, modi optio exercitationem id consectetur atque voluptatem alias earum unde perferendis sequi delectus temporibus.</p>
            </div>
        </div>
    )
}

export default Task
