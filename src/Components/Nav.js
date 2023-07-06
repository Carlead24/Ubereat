import React from 'react'

function Nav() {
  return (
    <div className='NavBar'>
        <div className='Nav-Logo'>
            Uber <b>Eats</b>
        </div>
        <div>    
        <ul className='Nav-btn'>
            <button type="">Log in</button>
            <button className='Nav-Btn-Sign' type="">Sign up</button>
        </ul>
        </div>
    </div>
  )
}

export default Nav