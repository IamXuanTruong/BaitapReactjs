import { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from "react-router-dom";
import *as productServices from "../../../services/productServices"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './detail.css'

function Detail() {
    const [count, setCount] = useState(1);
    let { id } = useParams();
    const [detail, setDetail] = useState({});
    useEffect(() => {
        const getDataFormAPI = async () => {
            const data = await productServices.find(id);
            setDetail(data)
        }
        getDataFormAPI();

    }, [])
    return (
        <>
            <div className="detail">
                <div className="row pt-4">
                    <div className="col-lg-7">
                        <Carousel>
                            <div>
                                <img src="https://product.hstatic.net/1000282067/product/air-jordan-1-mid-bred-2020_3db8584c57794090979a52329c057424_1024x1024.jpg" alt="..." />
                            </div>
                            <div>
                                <img src="https://product.hstatic.net/1000282067/product/air-jordan-1-mid-bred-2020_3db8584c57794090979a52329c057424_1024x1024.jpg" alt="..." />
                            </div>
                            <div>
                                <img src="https://product.hstatic.net/1000282067/product/air-jordan-1-mid-bred-2020-release-date-info-2_2a815605524a4193b8f0455a9a825b9a_1024x1024.jpeg" alt="..." />
                            </div>
                            <div>
                                <img src="https://product.hstatic.net/1000282067/product/air-jordan-1-mid-bred-2020-release-date-info-2_2a815605524a4193b8f0455a9a825b9a_1024x1024.jpeg" alt="..." />
                            </div>
                            <div>
                                <img src="https://product.hstatic.net/1000282067/product/air-jordan-1-mid-bred-2020-release-date-info-2_2a815605524a4193b8f0455a9a825b9a_1024x1024.jpeg" alt="..." />
                            </div>
                        </Carousel>
                    </div>
                    <div className="col-lg-5 text-left pl-5">
                        <h2 className="pb-1">Tên Sản Phẩm: </h2>
                        <h2>Giày Nike Air Jordan 1 Low Black Toe 553558-116  </h2>
                        <h4 className="pt-4">Giá: <span className="text-danger">5,500,000 vnđ</span></h4>
                        <h4 className="pt-3">Tình Trạng : Còn hàng</h4>
                        <h4 className="pt-3">Kích cỡ</h4>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="/shop">35</a></li>
                                <li class="page-item pl-2"><a class="page-link" href="/shop">36</a></li>
                                <li class="page-item pl-2"><a class="page-link" href="/shop">37</a></li>
                                <li class="page-item pl-2"><a class="page-link" href="/shop">48</a></li>
                                <li class="page-item pl-2"><a class="page-link" href="/shop">39</a></li>
                                <li class="page-item pl-2"><a class="page-link" href="/shop">40</a></li>
                                <li class="page-item pl-2"><a class="page-link" href="/shop">41</a></li>
                                <li class="page-item pl-2"><a class="page-link" href="/shop">42</a></li>
                            </ul>
                        </nav>
                        <div className="button-sl d-flex">
                            <h3 className="pr-5">Số Lượng</h3>
                            <button onClick={() => setCount(count - 1)} className="item-button">-</button>
                            <span className="text-button">{count}</span>
                            <button onClick={() => setCount(count + 1)} className="item-button">+</button>
                        </div>
                        <button className="btn btn-danger">Thêm vào giỏ hàng</button>
                        <Link className="btn btn-danger" to="/cart">Mua ngay</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <h4>Thông tin phát hành sản phẩm</h4>
                        <ul>
                            <li>Mã giày: 554724-074 / 554725-074</li>
                            <li>Phối màu: Black/University Red-Black-White</li>
                            <li>Giá Retail: $115</li>
                            <li>Phát hành: 12/11/2020</li>
                            <li>Nhà thiết kế: Peter Moore</li>
                            <li>Danh mục: Air Jordan 1</li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        <h4>Điểm đặc biệt của giày Air Jordan 1 Mid "Banned" 2020?</h4>
                        <p className="text-left">Giày Air Jordan 1 Mid "Banned" 2020 được chính thức ra mắt vào cuối năm 2020. Sở hữu phối màu Banned, là bản remake của đôi giày từng bị cấm sử dụng trong các giải đấu bóng rổ ngày xưa, mang trên mình cả một câu chuyện góp phần giúp Air Jordan 1 trở thành huyền thoại. </p>
                        <p className="text-left">Trong năm 2020, Nike đã cho ra mắt những bản phối mới mang phối màu Banned huyền thoại. Thay vì bản High đã giúp thương hiệu này bội thu ngay khi vừa ra mắt thì lần này nó là bản Mid. Những hình ảnh đầu tiên về phiên bản này đã nhận được con số đặt hàng cao khủng khiếp. Trong phiên bản Air Jordan 1 Mid "Banned" 2020 có sự nâng cấp về chất liệu da sử dụng, Form giày với phần lưỡi gà cao hơn, tôn dáng hơn so với Form cũ.</p>
                        <p className="text-left">Lối phối màu vẫn được giữ nguyên vẹn với Black Toe, logo Swoosh màu đỏ nổi bật cùng với Jumpman quen thuộc. Chất liệu da Tumble leather có độ mềm cao hơn, được phủ bóng bằng lớp chống bụi bẩn và chống nước nên việc vệ sinh cũng tương đối dễ dàng. Hệ thống đế đệm Air cũng được nâng cấp mềm mại hơn so với phiên bản gốc. </p>
                        <p className="text-left">Tất cả những ưu điểm này đã khiến Air Jordan 1 Mid "Banned" 2020 trở thành đôi giày không thể không sở hữu với những người sành giày chính hiệu. Trong giới Sneakerhead nó đã trở thành cái tên hot nhất, nhanh chóng thống trị hashtag Air jordan 1 trên mọi mặt trận Facebook và instagram tại thời điểm ra mắt. Hiện sản phẩm đang được phân phối tại Authentic Shoes.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;