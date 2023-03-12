import { useState } from 'react';
import GridPets from './GridPets';

const Others = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // prevent form submission
    // do something with the searchQuery, e.g. filter the pets list
  }

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
    <div>
      <nav className="navbar bg-body-tertiary shadow-lg p-2 m-2 sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand">Other Pets</a>
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <section className="mt-5">
        <GridPets searchQuery={searchQuery} />
      </section>
    </div>
  );
};

export default Others;
