import { Link } from "react-router-dom";
import img from '../../assets/random/a8121abee959e18cbad25ad4046f76d8.gif'

const ErrorPage = () => {
    return (
        <div className=" flex flex-col justify-center mx-auto">
            <div className="flex flex-col justify-center mx-auto">
                <img src={img} alt="" className="h-[70vh] w-[90vh]" />
            </div>
            <div className="mt-20 flex flex-col justify-center mx-auto my-20">
                <Link to='/'><button className="btn btn-secondary">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;