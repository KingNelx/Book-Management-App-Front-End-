import { Link } from "react-router-dom";

const Topnav = () => {
  return (
    <div >
      <nav class="navbar bg-body-tertiary shadow-lg py-3">
        <div class="container-fluid">
          <a class="navbar-brand">Register Your Pet</a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              <Link to="/"> Back </Link>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Topnav;
