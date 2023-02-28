import './footer.css'
function Footer() {
    return (
        <>
            <div className="footer ">
                <div className='footer-form'>
                    <div className="row ">
                        <div className="col-lg-4">
                            <h4>
                                Thông Tin Liên Hệ
                            </h4>
                            <div className='row pb-2' >
                                <div className='col-lg-2'>
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div className='col-lg-10'>
                                    <h6 className='text-icon'>Hoàng Quốc Việt- Cầu Giấy- Hà Nội</h6>
                                </div>
                            </div>
                            <div className='row pb-2' >
                                <div className='col-lg-2'>
                                    <i class="far fa-envelope"></i>
                                </div>
                                <div className='col-lg-10'>
                                    <h6 className='text-icon'>Email: <span>conmeocon@gmail.com</span></h6>
                                </div>
                            </div>
                            <div className='row pb-2' >
                                <div className='col-lg-2'>
                                    <i class="fas fa-phone-alt"></i>
                                </div>
                                <div className='col-lg-10'>
                                    <h6 className='text-icon'>Hotline: 099891900</h6>
                                </div>
                            </div>
                            <div className='row pb-2' >
                                <div className='col-lg-2'>
                                    <i class="fas fa-globe"></i>
                                </div>
                                <div className='col-lg-10'>
                                    <h6 className='text-icon'>Website: www.http.com.vn</h6>
                                </div>
                            </div>
                            <div className='row pr-5'>
                                <div className='col-lg-3'></div>
                                <div className='col-lg-6'>
                                    <div className='row '>
                                        <div className='col-lg-3 '><i class="fab fa-facebook icon-ft"></i></div>
                                        <div className='col-lg-3 '><i class="fab fa-youtube icon-ft"></i></div>
                                        <div className='col-lg-3 '><i class="fab fa-google-plus-square icon-ft"></i></div>
                                        <div className='col-lg-3 '><i class="fab fa-twitter-square icon-ft"></i></div>
                                    </div>
                                </div>
                                <div className='col-lg-3'></div>
                            </div>
                        </div>
                        <div className='col-lg-4 pt-5'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14895.783629512549!2d105.76748897636303!3d21.03485027591946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab32dd670b87%3A0x5584fc13c4f1f6d5!2zMjUwIEhvw6BuZyBRdeG7kWMgVmnhu4d0LCBD4buVIE5odeG6vywgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1658331174874!5m2!1svi!2s" className='google'></iframe>
                        </div>
                        <div className='col-lg-4'>
                            <h4>Đăng Kí Nhận Thông Tin</h4>
                            <p className='text-left pl-4'>Gặp mọi vấn đề thắc mắc quý khách để lại gmail chúng tôi sẽ xử lý cho quý khách ^.^.</p>
                            <div className='form-inline'>
                                <input className='input-formm' placeholder='Họ và tên:'></input>
                                <input className='input-formm' placeholder='Gmail:'></input>
                            </div>
                            <button className='button-form btn btn-danger'>Gửi</button>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Footer;