import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { publicRoutes } from '~/Routes';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'TikTok - Make Your Day!';
  }, []);
  return (
    <Router>
      <div className="font-ibm">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
