import petLogo from "../Images/pet-logo.png"
import { Link } from "react-router-dom";
import '../CustomCSS/Style.css'
const Start = () => {
  return (
    <div class="container text-center mt-5">
      <div class="row">
        <div class="col mt-5">
            <img src={petLogo} alt="pet-logo" className="pet-logo" />
        </div>
        <div class="col mt-5">
            <h1 className="py-5 my-5">
            Welcome
                <div className="mt-5">
                    <Link to="">Get Started</Link>
                </div>
            </h1>
        </div>
      </div>
    </div>
  );
};

export default Start;
