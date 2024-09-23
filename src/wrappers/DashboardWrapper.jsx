
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardWrapper = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardWrapper;
