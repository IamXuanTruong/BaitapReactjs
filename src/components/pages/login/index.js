import { Link } from "react-router-dom";
import "./login.css";
function Login() {
    return (
        <>
            <div className="login">
                <section className="vh-100" >
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                                            <img src="https://images.pexels.com/photos/9400772/pexels-photo-9400772.jpeg?auto=compress&cs=tinysrgb&w=600"
                                                alt="login form" className="img-fluid " />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">
                                                <form>
                                                    <div className="d-flex align-items-center mb-3 pb-1">
                                                        <i className="fas fa-cubes fa-2x me-3" ></i>
                                                        <span className="h1 fw-bold mb-0">Sneaker</span>
                                                    </div>
                                                    <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>

                                                    <div className="form-outline mb-4">
                                                        <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                                        <label className="form-label" for="form2Example17">Email address</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="password" id="form2Example27" className="form-control form-control-lg" />
                                                        <label className="form-label" for="form2Example27">Password</label>
                                                    </div>
                                                    <Link to='/'>
                                                        <div className="pt-1 mb-4">
                                                            <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                                                        </div>
                                                    </Link>
                                                    <a className="small text-muted" href="#!">Forgot password?</a>
                                                    <p className="mb-5 pb-lg-2">Don't have an account? <Link to="/regester" href=""
                                                    >Register here</Link></p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Login;