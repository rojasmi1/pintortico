import React from 'react';

const Footer = props => {
  let footer = {};
  if (props.settings) {
    footer = props.settings.footer;
  }
  return (
    <footer className="footer">
      {footer.copyright ? footer.copyright : ''}
    </footer>
  );
};

export default Footer;
