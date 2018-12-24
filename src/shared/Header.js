import React from 'react';

export function Header() {
  return (
    <nav className='navbar navbar-dark navbar-expand-lg'>
      <div className='container'>
        <a className='navbar-brand' href=''>CSL Scouting</a>
        <form className='form-inline my-2 my-lg-0'>
          <a className='nav-item nav-link active' href=''>Home</a>
          <a className='nav-item nav-link' href='http://www.championsimleague.com/index.php' target='_blank'>Forums</a>
          <a className='nav-item nav-link' href=''>Draft Classes</a>
          <a className='nav-item nav-link' href=''>Send Scouts</a>
          <input className='form-control mr-sm-2 csl-search' type='search' placeholder="Try 'Zion Williamson'" aria-label='Search'></input>
          <button className='btn btn-outline-success my-2 my-sm-0 btn-csl-search' type='submit'>Search</button>
        </form>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            <a className='nav-item nav-link active' href=''>Login <span className='sr-only'>(current)</span></a>
            <a className='nav-item nav-link' href=''>Register</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
