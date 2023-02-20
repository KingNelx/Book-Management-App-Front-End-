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
              <Link to="/" className="btn btn-outline-success"> Back </Link>
          </form>
        </div>
      </nav>
     <section className="mt-5 mx-5">
     <Link to="/registerPet" type="button" class="btn btn-outline-primary">Register Pet</Link>
     </section>
    </div>
  );
};

export default Topnav;
