import serverError from "../Images/404.webp";
import { Link } from "react-router-dom";
const ServerError = () => {
  return (
    <div className="mt-3 text-center">
      <section>
        <img src={serverError} alt="" class="rounded mx-auto d-block" />
      </section>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default ServerError;
