import Footer from "./footer";
import Header from "./header";
import Sizebar from "./sizebar";
function MasterLayout({ Page }) {

    return (
        <>
            <Header />
            <Sizebar />
            {Page}
            <Footer />
        </>
    );
}

export default MasterLayout;