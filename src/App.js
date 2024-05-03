import './App.css';

import {Article, Brand, Cta, Feature, Navbar} from './components';
import {Header, Blog, Features, Posibility, Footer, WhatGPT3} from './container'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
