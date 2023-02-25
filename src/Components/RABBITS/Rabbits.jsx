import RabbitsData from "./RabbitsData";

const Rabbits = () => {
    return (
      <div>
        <nav class="navbar bg-body-tertiary shadow-lg">
          <div class="container-fluid">
            <a class="navbar-brand">RABBITS</a>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <RabbitsData />
      </div>
    );
  };
  
  export default Rabbits;
  