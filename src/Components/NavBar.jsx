import React from 'react'

const NavBar = () => {
  return (
    <div className="blueBar">
      <h1 className="mainHeader"> Github Followers</h1>
      <div className="searchBar">
        <h3 className="searchHeader">Search</h3>
      <input placeholder="search" label="search"></input>
      </div>
    </div>
  )
}

export default NavBar
