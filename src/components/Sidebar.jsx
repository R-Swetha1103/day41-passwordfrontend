
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="d-flex">
            <div className="bg-light border-right mt-5" id="sidebar-wrapper">

                <div className="list-group list-group-flush">
                    <Link to="/dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
                    <Link to="/dashboard/companies" className="list-group-item list-group-item-action bg-light">Companies</Link>
                    <Link to="/dashboard/jobs" className="list-group-item list-group-item-action bg-light">Jobs</Link>
                    <Link to="/dashboard/applications" className="list-group-item list-group-item-action bg-light">Applications</Link>
                    <Link to="/dashboard/profile" className="list-group-item list-group-item-action bg-light">Profile</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
