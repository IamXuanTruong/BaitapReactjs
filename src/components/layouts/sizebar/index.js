import { Link } from "react-router-dom";
import './sizebar.css';
function Sizebar() {
    return (
        <>
            <div className="bg-sizebar">
                <div className="sizebar container">
                    <div className="sizebar-link ">
                        <Link className="link-sizebar" to="/">Trang Chủ</Link>
                    </div>
                    <div className="sizebar-link">
                        <Link className="link-sizebar" to="/shop">Sản Phẩm </Link>
                    </div>
                    <div className="sizebar-link">
                        <Link className="link-sizebar" to="/">Khuyến Mãi</Link>
                    </div>
                    <div className="sizebar-link">
                        <Link className="link-sizebar" to="/">Tin Tức</Link>
                    </div>
                    <div className="sizebar-link">
                        <Link className="link-sizebar" to="/">Vận Chuyển </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sizebar;