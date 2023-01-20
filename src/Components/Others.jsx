import { Link } from "react-router-dom";

const Others = () => {
    return (
        <div className="mt-2 mx-5">
            <div class="btn-group">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Others
                </button>
                <ul class="dropdown-menu">
                    <li><Link to="/allDogs" class="dropdown-item" href="#">DOGS</Link></li>
                    <li><Link to="/allCats" class="dropdown-item" href="#">CATS</Link></li>
                    <li><Link to="/allBirds" class="dropdown-item" href="#">BIRDS</Link></li>
                    <li><Link to="/allSnakes" class="dropdown-item" href="#">SNAKES</Link></li>
                    <li><Link to="/allFish" class="dropdown-item" href="#">FISH</Link></li>
                    <li><Link to="/allTurtles" class="dropdown-item" href="#">TURTLES</Link></li>
                    <li><Link to="/allRabbits" class="dropdown-item" href="#">RABBITS</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Others;