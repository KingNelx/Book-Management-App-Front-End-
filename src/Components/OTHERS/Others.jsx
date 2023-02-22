import PetCols from "./PetCols";

const Others = () => {
  return (
    <nav>
      <nav class="navbar bg-body-tertiary shadow-lg m-2 sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand">OTHERS</a>
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
      <section>
        <PetCols />
      </section>
    </nav>
  );
};

export default Others;
