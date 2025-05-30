import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PrivateRoute from './components/PrivateRoute';
import CancelPage from './pages/Cancel';
import Overview from './components/Overview';
import ButtonsPage from './pages/ButtonsPage';
import CardsPage from './pages/CardsPage';
import ModalsPage from './pages/ModalsPage';
import TablesPage from './pages/TablesPage';
import NavigationPage from './pages/Navigation';
import FormsPage from './pages/FormsPage';
import GlobalLoader from "./components/GlobalLoader";

import ComponentsPage from './pages/ComponentsPage';
import DesignsPage from './pages/DesignsPage';
import ThemesPage from './pages/ThemesPage';
import CollectionsPage from './pages/CollectionsPage';

import Success from './pages/Success';
import Cancel from './pages/Cancel';

export default function App() {
  return (
    <Router>
      <GlobalLoader />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/*private routes */}
        <Route path="/components/buttons" element={<PrivateRoute><ButtonsPage /></PrivateRoute>} />
        <Route path="/components/cards" element={<PrivateRoute><CardsPage /></PrivateRoute>} />
        <Route path="/components/modals" element={<PrivateRoute><ModalsPage /></PrivateRoute>} />
        <Route path="/components/tables" element={<PrivateRoute><TablesPage /></PrivateRoute>} />
        <Route path="/components/navigation" element={<PrivateRoute><NavigationPage /></PrivateRoute>} />
        <Route path="/components/forms" element={<PrivateRoute><FormsPage /></PrivateRoute>} />

        <Route path="/" element={<PrivateRoute><Overview /></PrivateRoute>} />
        <Route path="/components" element={<PrivateRoute><ComponentsPage /></PrivateRoute>} />
        <Route path="/designs" element={<PrivateRoute><DesignsPage /></PrivateRoute>} />
        <Route path="/themes" element={<PrivateRoute><ThemesPage /></PrivateRoute>} />
        <Route path="/collections" element={<PrivateRoute><CollectionsPage /></PrivateRoute>} />

        <Route path="/success" element={<PrivateRoute><Success /></PrivateRoute>} />
        <Route path="/cancel" element={<PrivateRoute><Cancel /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}
