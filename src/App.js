import './App.css';
import Header from './components/layouts/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Section1 from './components/homepages/Section1';
import Footer from './components/layouts/Footer';
import Section3 from './components/homepages/Section3';
import Section4 from './components/homepages/Section4';
import Section2 from './components/homepages/Section2';
import Section5 from './components/homepages/Section5';
import { createContext, useState } from 'react';
import Section6 from './components/homepages/Section6';

export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
