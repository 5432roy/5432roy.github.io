import React, { useState } from 'react';

const Header = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const email = "shangyu051601@gmail.com";
  const phone = "425-572-2797";

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    });
  };

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
              <a
                href={`mailto:${email}`}
                onClick={(e) => {
                  e.preventDefault();
                  copyToClipboard(email, 'email');
                }}
              >
                {email}
              </a>
              {copiedEmail && <span style={{ marginLeft: '8px', color: 'green' }}>Copied!</span>}
            </li>
            <li>
              <a
                href={`tel:${phone}`}
                onClick={(e) => {
                  e.preventDefault();
                  copyToClipboard(phone, 'phone');
                }}
              >
                {phone}
              </a>
              {copiedPhone && <span style={{ marginLeft: '8px', color: 'green' }}>Copied!</span>}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
