import {useIMQA} from "imqa-react-sdk";

const NotFound = () => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <div className="content-404"> 404 page not found
            <style>

            </style>
        </div>
        </div>
     );
}

export default NotFound;
