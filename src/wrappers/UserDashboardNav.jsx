
import { useEffect } from "react";
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";

const UserDashboardNav = () => {

    const user = useLoaderData();

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            alert('You need to login first');

            // redirect to login page
            setTimeout(() => {
                navigate('/login');
            }, 500);
        }
    }, [user]);

    return (
        <div>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link disabled">{`Welcome ${user ? user.email : ''}`}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default UserDashboardNav;
