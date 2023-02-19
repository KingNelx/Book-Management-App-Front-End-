const Title = () => {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container shadow-lg p-3">
          <a class="navbar-brand">ShowDemYouPets</a>
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
    </div>
  );
};

export default Title;
