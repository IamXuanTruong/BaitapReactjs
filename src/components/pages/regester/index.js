import { Link } from 'react-router-dom';
import "./regester.css"
function Regester() {
    return (
        <>
            <div className="regester">
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
                                                    <h5 className="fw-normal mb-3 pb-3" >Login with of</h5>
                                                    <div className="form-outline mb-4">
                                                        <div className='row '>
                                                            <div className='col-lg-4 '><i class="fab fa-facebook icon-register"></i></div>
                                                            <div className='col-lg-4 '><i class="fab fa-google-plus-square icon-register"></i></div>
                                                            <div className='col-lg-4 '><i class="fab fa-twitter-square icon-register"></i></div>
                                                        </div>
                                                    </div>
                                                    <div className="form-outline mb-3">
                                                        <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                                        <label className="form-label" for="form2Example17">Email address</label>
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="form-outline mb-3 pr-2">
                                                            <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                                            <label className="form-label" for="form2Example17">Surname</label>
                                                        </div>
                                                        <div className="form-outline mb-3">
                                                            <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                                            <label className="form-label" for="form2Example17">Name</label>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex">
                                                        <div className="form-outline mb-3 pr-2">
                                                            <input type="password" id="form2Example27" className="form-control form-control-lg" />
                                                            <label className="form-label" for="form2Example27">Password</label>
                                                        </div>
                                                        <div className="form-outline mb-3">
                                                            <input type="password" id="form2Example27" className="form-control form-control-lg" />
                                                            <label className="form-label" for="form2Example27">Confirtpasswork</label>
                                                        </div>
                                                    </div>
                                                    <Link to='/login'>
                                                    <div className="pt-1 mb-4">
                                                        <button className="btn btn-dark btn-lg btn-block" type="button">Register</button>
                                                    </div>
                                                    </Link>
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

export default Regester;