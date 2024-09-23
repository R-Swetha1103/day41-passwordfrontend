
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { selectEmail, selectName, selectPassword, setEmail, setName, setPassword } from "../features/auth/registerSlice"
import authServices from "../services/authServices";

const Register = () => {

    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCancel = () => {
        window.history.back()
    }

    const handleRegister = (e) => {
        e.preventDefault();

        // handle user registration
        authServices.register({ name, email, password })
            .then(response => {
                alert(response.data.message);

                // clear the form
                dispatch(setName(''));
                dispatch(setEmail(''));
                dispatch(setPassword(''));

                // redirect to login page
                setTimeout(() => {
                    navigate('/login');
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
                            <h1>Register</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name"
                                        value={name}
                                        onChange={(e) => dispatch(setName(e.target.value))}
                                    />
                                </div>
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
                                <button type="submit" className="btn btn-primary">Register</button>
                                <button type="button" className="btn btn-secondary mx-5" onClick={handleCancel}>Cancel</button>
                                <p className="mt-3">Already have an account? <Link to="/login">Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
