import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { selectEmail, selectPassword, setEmail, setPassword } from "../features/auth/loginSlice";
import authServices from "../services/authServices";
import { useEffect } from "react";

const Login = () => {

    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useLoaderData();

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [user]);

    const handleCancel = () => {
        window.history.back();
    }

    const handleLogin = (e) => {
        e.preventDefault();

        // handle user login
        authServices.login({ email, password })
            .then(response => {
                alert(response.data.message);

                // clear the form
                dispatch(setEmail(''));
                dispatch(setPassword(''));

                // redirect to home page
                setTimeout(() => {
                    navigate('/dashboard');
                }, 500);
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h1>Login</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email"
                                        value={email}
                                        onChange={(e) => dispatch(setEmail(e.target.value))}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password"
                                        value={password}
                                        onChange={(e) => dispatch(setPassword(e.target.value))}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                <button type="button" className="btn btn-secondary mx-5" onClick={handleCancel}>Cancel</button>
                                <p className="mt-3">Don't have an account? <Link to="/register">Register</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login