import { useEffect, useState } from "react";
 import './cart.css'
function Cart() {
    const [count, setCount] = useState(1);

    return (<>
<div className="cart">
        <div className="row text-cart">
            <div className="col-lg-2">
                <div className="sp-cart">
                    <h3 >Shopping Bag</h3>
                </div>
            </div>
            <div className="col-lg-4 ">
                <h4 className="p-2">Name</h4>
            </div>
            <div className="col-lg-3">
                <h4 className="p-2">Quantity</h4>
            </div>
            <div className="col-lg-3">
                <h4 className="p-2">Price</h4>
            </div>

        </div>
       
        <div className="row text-cart">
            <div className="col-lg-2">
                <div className="sp-cart">
                    <img src="https://product.hstatic.net/1000282067/product/gz5993.png_8b8b01808c274cc99b03d515de867cbf_1024x1024.png" className="d-block w-100 p-3" alt="..." />
                </div>
            </div>
            <div className="col-lg-4 ">
                <h5 className="pt-3">Giày Adidas Wmns Stan Smith 'Silver Metallic' FW5477</h5>
            </div>
            <div className="col-lg-3">
                <button onClick={() => setCount(count - 1)} className="p-1">-</button>
                <span className="p-2">{count}</span>
                <button onClick={() => setCount(count + 1)} className="p-1">+</button>
            </div>
            <div className="col-lg-3">
                <h5 className="text-danger pt-2">1,500,000 vnđ</h5>
            </div>

        </div>
       
        <div className="row text-cart">
            <div className="col-lg-2">
                <div className="sp-cart">
                    <img src="https://product.hstatic.net/1000282067/product/fw5477_4736dbfa5f3d4b7fa065233e64b2bd61_1024x1024.png" className="d-block w-100 p-3" alt="..." />
                </div>
            </div>
            <div className="col-lg-4 ">
                <h5 className="pt-3">Giày Adidas Wmns Stan Smith 'Silver Metallic' FW5477</h5>
            </div>
            <div className="col-lg-3 mt-3">
                <button onClick={() => setCount(count - 1)} className="p-1">-</button>
                <span className="p-2">{count}</span>
                <button onClick={() => setCount(count + 1)} className="p-1">+</button>
            </div>
            <div className="col-lg-3">
                <h5 className="text-danger pt-3">5,500,000 vnđ</h5>
            </div>

        </div>
       
        <div className="row text-cart">
            <div className="col-lg-2">
                <div className="sp-cart">
                    <img src="https://product.hstatic.net/1000282067/product/nike-air-force-1-id-gucci-ct7875-994-2_a14ba67f67ec46e7a919015ba1961a0b_1024x1024.png" className="d-block w-100 p-3" alt="..." />
                </div>
            </div>
            <div className="col-lg-4 ">
                <h5 className="pt-3">Giày Nike Air Jordan 1 Low “Triple White” 553558-126</h5>
            </div>
            <div className="col-lg-3 mt-3">
                <button onClick={() => setCount(count - 1)} className="p-1">-</button>
                <span className="p-2">{count}</span>
                <button onClick={() => setCount(count + 1)} className="p-1">+</button>
            </div>
            <div className="col-lg-3">
                <h5 className="text-danger pt-3">1,500,000 vnđ</h5>
            </div>

        </div>
       
        <div className="row text-cart">
            <div className="col-lg-2">
                <div className="sp-cart">
                    <img src="https://product.hstatic.net/1000282067/product/img01__1__3e73ec9892a845f5811aaa_70b0e8c538984d1589e873888d901be2_1024x1024.png" className="d-block w-100 p-3" alt="..." />
                </div>
            </div>
            <div className="col-lg-4 ">
                <h5 className="pt-3">Giày Nike Air Jordan 1 Mid White Shadow 554724-073</h5>
            </div>
            <div className="col-lg-3 mt-3">
                <button onClick={() => setCount(count - 1)} className="p-1">-</button>
                <span className="p-2">{count}</span>
                <button onClick={() => setCount(count + 1)} className="p-1">+</button>
            </div>
            <div className="col-lg-3">
                <h5 className="text-danger pt-3">7,500,000 vnđ</h5>
            </div>

        </div>
       
        <div className="row text-cart">
            <div className="col-lg-2">
                <div className="sp-cart">
                    <img src="https://product.hstatic.net/1000282067/product/863c9ca82214281af0181812afc32992_70ce481f53ba4d5586d37380ad052d52_1024x1024.png" className="d-block w-100 p-3" alt="..." />
                </div>
            </div>
            <div className="col-lg-4 ">
                <h5 className="pt-5">Giày Converse Chuck 70 Plus Canvas Hi 'Black'-BINKCUAVN</h5>
            </div>
            <div className="col-lg-3 pt-5">
                <button onClick={() => setCount(count - 1)} className="p-1">-</button>
                <span className="p-2">{count}</span>
                <button onClick={() => setCount(count + 1)} className="p-1">+</button>
            </div>
            <div className="col-lg-3">
                <h5 className="text-danger pt-5">2,500,000 vnđ</h5>
            </div>

        </div>
       
        <div className="row text-cart">
            <div className="col-lg-2">
                <div className="sp-cart">
                    <img src="https://product.hstatic.net/1000282067/product/1_59cb1a1e-ffd8-4a9b-abba-2fdb25_2c08c5cbf5cc4dd4bd176d011176a816_1024x1024.png" className="d-block w-100 p-3" alt="..." />
                </div>
            </div>
            <div className="col-lg-4 ">
                <h5 className="pt-3">Giày Converse One Star Pro Nomad 'Khaki' A00941C</h5>
            </div>
            <div className="col-lg-3 mt-3">
                <button onClick={() => setCount(count - 1)} className="p-1">-</button>
                <span className="p-2">{count}</span>
                <button onClick={() => setCount(count + 1)} className="p-1">+</button>
            </div>
            <div className="col-lg-3">
                <h5 className="text-danger pt-3">3,500,000 vnđ</h5>
            </div>

        </div>
       
    
</div>

    </>);
}

export default Cart;