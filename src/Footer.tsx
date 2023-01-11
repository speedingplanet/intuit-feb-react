import React from 'react';

interface Props {
  companyName: string;
  year: number;
}

// Defines the component
function Footer(props: Props) {
  // The actual content of the component
  return (
    <footer>
      <hr />
      <p>
        Copyright {props.year} {props.companyName}
      </p>
      <p>
        <small>Rendered via the Footer component</small>
      </p>
    </footer>
  );
}

// Makes the component available to other components via
// import Footer from './Footer';
export default Footer;
