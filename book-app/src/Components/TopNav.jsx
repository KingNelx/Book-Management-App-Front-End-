import { Link } from "react-router-dom";

const TopNav = () => {
    return (
        <div>
            <nav class="navbar bg-body-tertiary shadow-lg py-3">
                <div class="container-fluid">
                    <a class="navbar-brand">Book Management System</a>
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Others
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <Link to="/action"><button class="dropdown-item" type="button">ACTION</button></Link>
                            <Link to="/comedy"><button class="dropdown-item" type="button">COMEDY</button></Link>
                            <Link to="/horror"><button class="dropdown-item" type="button">HORROR</button></Link>
                            <Link to="/knowledge"><button class="dropdown-item" type="button">KNOWLEDGE</button></Link>
                            <Link to="/love"><button class="dropdown-item" type="button">LOVE</button></Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default TopNav;