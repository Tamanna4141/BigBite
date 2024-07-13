import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      {/* <img src="https://images.squarespace-cdn.com/content/v1/55e9a507e4b059be11906c07/1647859028381-6QJ50SSGJYASVFY4ATZS/Screenshot+2022-03-21+at+09.52.23.png?format=1000w" alt="" /> */}
      <div className="header-contents">
        <h2>Where every bite is a story.</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise,one delicious meal at a time.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
