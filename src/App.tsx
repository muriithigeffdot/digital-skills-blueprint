import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Modules from './pages/Modules';
import Resources from './pages/Resources';
import Announcements from './pages/Announcements';
import Feedback from './pages/Feedback';
import Dashboard from './pages/Dashboard';
import { AppProvider } from './context/AppContext';
import EditorPanel from './components/EditorPanel';
import Module1 from './pages/Module1';
import Module2 from './pages/Module2';
import Module3 from './pages/Module3';
import Module4 from './pages/Module4';
import Module5 from './pages/Module5';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/modules' element={<Modules />} />
            <Route path='/module1' element={<Module1 />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/announcements' element={<Announcements />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Layout>
        <EditorPanel />
      </Router>
    </AppProvider>
  );
}

export default App;
