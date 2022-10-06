import React from 'react'

const Searchbar = ({ value, handleSearchKey, clearSearch,formSubmit }) => {
    return (
        <nav className="navbar navbar-light bg-light container searchbar">
            <div className="container-fluid" >
                <a className="navbar-brand">Successors Story</a>
                <form className="d-flex" onSubmit={formSubmit}>
                    <input className="form-control me-2" type="text" placeholder="Search by categoty" aria-label="Search" value={value} onChange={handleSearchKey} />
                    {value && <span onClick={clearSearch}>X</span>}
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Searchbar