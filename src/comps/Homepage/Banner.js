import {Link} from 'react-router-dom'
import {useIMQA} from "imqa-react-sdk";

    function scrollToDonate(){
        window.scrollTo(0, window.scrollY+450);
    }
const Banner = () => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <div className="hero-banner">
        <div className="hero-banner-text">
            <span className="bold">COME, LAY THE FOUNDATION OF EDUCATION</span>
            <span>Let us build a educated nation, together</span>
            <br />
            <br />
            <div className="d-flex flex-wrap">
                <button onClick={scrollToDonate} className="donate-btn m-1">Donate Now</button>
                <Link to="/fundraiser/new">
                    <button className="fundraiser-btn m-1">Became a Fundraiser</button>
                </Link>
            </div>
        </div>
    </div>
        </div> // 삽입
     );
}

export default Banner;
