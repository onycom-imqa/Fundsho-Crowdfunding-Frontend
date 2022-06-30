
import { useIMQA } from "imqa-react-sdk"; // 삽입

const Footer = () => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
    <nav className="navbar navbar-light bg-light mt-3">
        <div className="container-fluid">
            <span className="fs-6">Fundsho © 2022, Fair Hawn Pvt Ltd.</span>
            <span className="fs-6">Build with <i className="fa-solid fa-heart red link-danger"></i> by @karthifairhawn</span>
        </div>
    </nav>
        </div> // 삽입
     );
}

export default Footer;
