import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import LoopView from './views/LoopView';
import ConditionalView from './views/ConditionalView';

function App() {
  return (
    <>
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/loop">Loop</Link></li>
          <li><Link to="/conditional">Conditional</Link></li>
        </ul>

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/loop" element={<LoopView />} />
          <Route path="/conditional" element={<ConditionalView />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
