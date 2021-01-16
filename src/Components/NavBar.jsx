import React from 'react'


const NavBar = () => {
// constructor(){
//   super()
//   this.state={
//     formInput:'',
//   }
// }



  return (
    <div className="blueBar">
      <h1 className="mainHeader"> Github Followers</h1>
      <div className="searchBar">
        <h3 className="searchHeader">Search</h3>
      <input name="search" placeholder="search" label="search"></input>
      
      <button>Search</button>
      </div>
    </div>
  )
}

export default NavBar
//Create a formSubmit Handler in app so you can search
//Try doing it with react-hook-forms
//create the cards needed