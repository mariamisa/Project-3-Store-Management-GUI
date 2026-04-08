import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/** Component Imports */
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Layout from './Pages/Layout';

/**
 * This is the entry point for your react-app
 *  1. We strongly recommend comparmentalizing your code into Components
 *  2. We strongly recommend using the components folder and following whatever structure you like (for e.g., atomic design, feature-based, etc)
 *  3. We strongly recommend using a modular-approach to CSS:
 *    - An example has been provided for you, see the 'Example' component
 *    - The 'Example.jsx' component comes with an 'Example.module.css'
 *    - Pay attention to variable file import (gives access to CSS variables)
 *    - Pay special attention to how we apply the className from the imported 'styles'
 *  4. We added additional comments below to guide you
 */

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;
