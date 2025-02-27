import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="heading">
        <div className="name">Shang-Yu Chan</div>
        <div className="picture">
          <img src="me.jpg" alt="Shang-Yu Chan" />
        </div>
        <div className="contact">
          <ul>
            <li>
              <a href="mailto:960289@gmail.com">Email: 960289@gmail.com</a>
            </li>
            <li>
              <a href="tel:4255722797">425-572-2797</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
