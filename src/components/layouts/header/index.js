import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <>
      <div className='container-fluid header'>
        <div className='row'>
          <div className='col-lg-2'>
            <Link to="/">
              <h1 className="anh">SNE<span className="em">A</span><span>KER</span></h1>
            </Link>
          </div>

          <div className='col-lg-2'></div>
          <div className='col-lg-8 timkiems d-flex justify-content-between align-items-center'>
            <div className='position-relative'>
              <input className='input-form' placeholder='Tìm kiếm sản phẩm ...' />
              <i class="fas fa-search icon-search"></i>
            </div>
            <div className='align-items-center d-flex anh'>
              <Link to="/cart" className='cart-icon'><i className="fas fa-cart-arrow-down"></i></Link>
              <Link to="/login" className='use-icon'><i className="fas fa-user-circle"></i></Link>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Header;