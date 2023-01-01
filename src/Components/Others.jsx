import { Link } from "react-router-dom";

const Others = () => {
    return (
        <div className="mt-2 mx-5">
            <div class="btn-group">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Others
                </button>
                <ul class="dropdown-menu">
                    <li><Link to="/allDogs" class="dropdown-item" href="#">ShowAllDogs</Link></li>
                    <li><Link to="/allCats" class="dropdown-item" href="#">ShowAllCats</Link></li>
                    <li><Link to="/allBirds" class="dropdown-item" href="#">ShowAllBirds</Link></li>
                    <li><Link to="/allSnake" class="dropdown-item" href="#">ShowAllSnake</Link></li>
                </ul>
            </div>
        </div>
    );
    }

export default Others;