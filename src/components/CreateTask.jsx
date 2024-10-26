const CreateTask = () => {
    return (
        <div className="mt-6 bg-[#1c1c1c] rounded-lg shadow-md md:px-8 ">
            <h2 className="text-2xl font-bold mb-6">Create Task</h2>
            <form className="flex flex-wrap md:-mx-4">
                {/* Left Column */}
                <div className="w-full md:w-1/2 mb-6 flex flex-col space-y-4 md:px-20">
                    {/* Task Title */}
                    <div>
                        <label className="block text-white font-semibold mb-1">
                            Task Title
                        </label>
                        <input
                            type="text"
                            id="task-title"
                            placeholder="Enter task title"
                            className="w-full px-3 py-2 border rounded-md outline-none text-gray-500"
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-white font-semibold mb-1">
                            Date
                        </label>
                        <input
                            type="date"
                            id="task-date"
                            className="w-full px-3 py-2 border rounded-md text-gray-500"
                        />
                    </div>

                    {/* Assign To */}
                    <div>
                        <label className="block text-white font-semibold mb-1" htmlFor="assign-to">
                            Assign To
                        </label>
                        <input
                            type="text"
                            id="assign-to"
                            placeholder="Assignee's name"
                            className="w-full px-3 py-2 border rounded-md text-gray-500 outline-none"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-white font-semibold mb-1">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            placeholder="Task category"
                            className="w-full px-3 py-2 border rounded-md text-gray-500 outline-none"
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-full md:w-1/2 md:px-20 mb-6 flex flex-col space-y-4">
                    {/* Description */}
                    <div>
                        <label className="block text-white font-semibold mb-1" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            placeholder="Enter task description"
                            rows="5"
                            className="w-full px-3 py-2 border rounded-md outline-none text-black font-semibold"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Create Task
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
