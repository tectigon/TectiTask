import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import SignUp from './components/SignUp';
import './index.css';

const MyContext = createContext();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <MyContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      <BrowserRouter>
        {!isSignedIn ? (
          <Routes>
            <Route path="/" element={<SignUp />} />
          </Routes>
        ) : (
          <section className='main flex'>
            <div className="sidebarWrapper w-[20%]">
              <Sidebar />
            </div>
            <div className="content_Right w-[80%] px-4 py-2">
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </div>
          </section>
        )}
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
