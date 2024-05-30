import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import { AddressProvider } from './context/AddressContext';
import AddAddress from './pages/addAddress';
import EditAddress from './pages/editAddress';
import Home from './pages/home';

const AppRoutes = () => {
  return (
    <AddressProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddAddress />} />
          <Route path="/edit/:id" element={<EditAddress />} />
        </Routes>
      </Router>
    </AddressProvider>
  );
};

export default AppRoutes;
