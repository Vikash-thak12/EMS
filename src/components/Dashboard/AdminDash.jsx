import AllTask from "../AllTask";
import CreateTask from "../CreateTask";
import Header from "../Header";

const AdminDash = () => {
    return (
        <div className="px-10 py-5">
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    );
};

export default AdminDash;
