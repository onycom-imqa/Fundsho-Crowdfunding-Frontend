
import { Hearts,TailSpin } from  'react-loader-spinner'
import {useIMQA} from "imqa-react-sdk";

 var style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backdropFilter: "blur(5px)",
    padding: "100%",
    zIndex: "1"
}

const SpinLoader = () => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <div className="loader" id="spinloader" style={style} >
            <Hearts color="#ed3e3e" height={120} width={120} />
            <TailSpin color="#ed3e3e" height={120} width={120} />
        </div>
        </div>
     );
}

export default SpinLoader;
