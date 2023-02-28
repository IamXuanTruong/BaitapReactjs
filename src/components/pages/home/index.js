import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import * as productServices from '../../../services/productServices';
import axios from 'axios';

function Home() {
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/product?category-id=6').then((res) => {
            setListProduct(res.data)
        })
    }, [])
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide banner " data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://censor.vn/wp-content/uploads/2022/03/air-jordan-1-mid-light-smoke-grey-censorvn-1400x630.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item ">
                        <img src="https://censor.vn/wp-content/uploads/2022/04/nike-dunk-black-white-banner-censorvn-1400x630.webp" className="d-block w-100" alt="..." />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
            <div className='sp-home'>
                <div className="row ">
                    <div className='col-lg-7'>
                        <Link to="/jodan">
                            <div className="card bg-dark text-white card-home ">
                                <img className="card-img " src="https://html.trongtamtay.com/biz/delta-shoes/data/banner_project_1.jpg" alt="Card image" />
                                <div className="card-img-overlay">
                                    <h4 className="card-title anhdep">Giày Thể Thao Jor.dan Royal</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-lg-5'>
                        <Link to='/nike01'>
                            <div className="card bg-dark text-white card-home ">
                                <img className="card-img " src="https://statics.hnbmg.com/2020/12/09203255/Stussy-Nike-Air-Force-1-Fossil-Stone-CZ9084-200-Release-Date-On-Feet-1-1140x847-1-1024x761-1.jpg" alt="Card image" />
                                <div className="card-img-overlay">
                                    <h4 className="card-title anhdep">Giày Nike Air Force 1</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className='col-lg-4'>
                        <Link to='/adidass'>
                            <div className="card bg-dark text-white card-home ">
                                <img className="card-img" src="https://html.trongtamtay.com/biz/delta-shoes/data/banner_project_3.jpg" alt="Card image" />
                                <div className="card-img-overlay">
                                    <h4 class="card-title anhdep">Giày Sneaker Adidas ZX 2K Futureshell </h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-lg-4'>
                        <Link to="/utraboot">
                            <div class="card bg-dark text-white card-home ">
                                <img className="card-img" src="https://html.trongtamtay.com/biz/delta-shoes/data/banner_project_2.jpg" alt="Card image" />
                                <div className="card-img-overlay">
                                    <h4 className="card-title anhdep">GIÀY ADIDAS ULTRABOOST</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-lg-4'>
                        <Link to='/converse'>
                            <div class="card bg-dark text-white card-home ">
                                <img className="card-img" src="https://html.trongtamtay.com/biz/delta-shoes/data/banner_project_5.jpg" alt="Card image" />
                                <div className="card-img-overlay">
                                    <h4 className="card-title anhdep">Giày Bóng Rổ Crossover Culture Sniper</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
            <div className='sp-home'>
                <h3 className=''>Mới Nhất</h3>
                <h6 className=''>Yêu giày không thể bỏ lỡ những cực phẩm mới ra mắt này</h6>
                <div className='row'>
                    {listProduct.map((item, index) => {
                        return (
                            <div className='col-lg-3 mb-3 product-item' key={index}>
                                <div className="card">
                                    <Link to={`/detail/${item.id}`} >
                                        <img className="card-img-top" src={item.image} alt="" />
                                    </Link>
                                    <div className="card-body">
                                        <h6 className="card-title">{item.name}</h6>
                                        <h6 className="text-danger">{item.price}</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Link className='btn alink m-3' to="shop">Xem Thêm</Link>
            </div>
            <div className='sp-home'>
                <h2>#Thương Hiệu Nổi Tiếng</h2>
                <div className="row pt-4">
                    <div className="col-lg-2">
                        <a src="https://www.nike.com/vn/w/mens-training-gym-shoes-58jtoznik1zy7ok"><img src="https://downloadwap.com/thumbs2/wallpapers/p2/22/logo-brands/1vu2AHwn.jpg" class="card-img-top" alt="..." /></a>
                    </div>
                    <div className="col-lg-2">
                        <a src="https://www.nike.com/vn/w/mens-training-gym-shoes-58jtoznik1zy7ok"><img src="https://www.elleman.vn/wp-content/uploads/2020/10/08/186364/logo-thuong-hieu-jordan-elle-man-feature-1.jpg" class="card-img-top" alt="..." /></a>
                    </div>
                    <div className="col-lg-2">
                        <a src="https://www.nike.com/vn/w/mens-training-gym-shoes-58jtoznik1zy7ok"><img src="https://wallpaperaccess.com/full/889590.jpg" class="card-img-top" alt="..." /></a>
                    </div>
                    <div className="col-lg-2">
                        <a src="https://www.nike.com/vn/w/mens-training-gym-shoes-58jtoznik1zy7ok"><img src="https://cdn.tgdd.vn/Files/2022/04/02/1423499/huong-dan-order-giay-converse-o-nuoc-ngoai-cuc-de-202204021342239602.jpg" class="card-img-top" alt="..." /></a>
                    </div>
                    <div className="col-lg-2">
                        <a src="https://www.nike.com/vn/w/mens-training-gym-shoes-58jtoznik1zy7ok"><img src="https://fado.vn/blog/wp-content/uploads/2019/11/puma-cua-nuoc-nao-1.jpg" class="card-img-top" alt="..." /></a>
                    </div>
                    <div className="col-lg-2">
                        <a src="https://www.nike.com/vn/w/mens-training-gym-shoes-58jtoznik1zy7ok"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrGXuKfsU_cmgArnt4p_oHBAp8wwC6OwpKNtn3mZQKAnyEVIK-orKyzJI1qvG9DlEX94&usqp=CAU" class="card-img-top" alt="..." /></a>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Home;