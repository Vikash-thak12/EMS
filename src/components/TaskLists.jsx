import Task from "./Task"

const TaskLists = () => {
  return (
    <section className="mt-10">
        <div id="tasklist" className="h-[48vh] rounded-3xl p-5 flex items-center gap-5 flex-nowrap  overflow-x-auto">
            <Task color={"blue"} />
            <Task color={"green"} />
            <Task color={"yellow"} />
        </div>
    </section>
  )
}

export default TaskLists
