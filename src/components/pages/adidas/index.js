import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
function Adidas() {
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

            <div className='sanpham'>
                <div className='row '>
                    <div className='col-lg-2 bg-thanh pt-5'>
                        <div className='row dieuhuong'>
                            <div className='col-lg-2'>
                                <i className="fas fa-align-justify icon-thanh"></i>
                            </div>
                            <div className='col-lg-10 pb-5'>
                                <h3>Danh mục</h3>
                            </div>
                        </div>
                        <Link to='/jodan'> <div className='text-thanh'><h5>Giày Air Jordan </h5></div></Link>
                        <Link to='/mlb'><div className='text-thanh'><h5>Giày MLB   </h5></div></Link>
                        <Link to='/nike01'><div className='text-thanh'><h5>Giày Nike Air Force 1 </h5></div></Link>
                        <Link to='/utraboot'> <div className='text-thanh'><h5>Giày Adidas UltraBoost </h5></div></Link>
                        <Link to='/converse'><div className='text-thanh'><h5>Giày Converse  </h5></div></Link> 
                        <Link to='/adidass'><div className='text-thanh'><h5>Giày Adidas Stan Smith </h5></div></Link> 
                        <Link to='/shop'><div className='text-thanh'><h5>Tất Cả Sản Phẩm </h5></div></Link> 
                    </div>
                    <div className='col-lg-10'>
                        <h1 className='pt-5'>Giày Adidas Stan Smith Chính Hãng</h1>
                        <div className='row pt-4'>
                            {listProduct.map((item, index) => {
                                return (
                                    <div className='col-lg-3 mb-3 product-item' key={index}>
                                        <div className="card">
                                            <img className="card-img-top" src={item.image} alt="" />
                                            <div className="card-body">
                                                <h6 className="card-title">{item.name}</h6>
                                                <h6 className="text-danger">{item.price}</h6>
                                                <Link to={`/detail/${item.id}`} className='btn btn-outline-danger '>
                                                    Mua ngay
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Adidas;