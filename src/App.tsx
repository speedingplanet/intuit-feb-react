import React from 'react';
import Footer from './Footer';

function App() {
  return (
    <main className="container">
      <header>
        <h1>Some terrific app</h1>
        <hr />
      </header>
      <Footer companyName="Neat-o Partners" year={2022} />
    </main>
  );
}

export default App;
