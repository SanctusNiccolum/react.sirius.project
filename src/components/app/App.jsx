import React from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
// import {Button} from '@consta/uikit/Button';
// import {Text} from '@consta/uikit/Text';
// import {Card} from '@consta/uikit/Card';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../../pages/main-page/MainPage';
import ServicePage from '../../pages/service-page/ServicePage';
import ServiceDetailPage from '../../pages/service-detail-page/ServiceDetailPage';
import MainLayout from '../../layouts/main-laout/MainLayout';
import {Responses404} from '@consta/uikit/Responses404'
import AuthPage from '../../pages/auth-page/AuthPage';
import ProfilePage from '../../pages/profile-page/ProfilePage';
import { AppRoute } from '../../const';
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  return token ? children : <Navigate to="/auth" />;
};

const App = function () {
  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.main} element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoute.service} element={<ServicePage />} />
            <Route path={AppRoute.serviceDetails} element={<ServiceDetailPage />} />
            <Route path={AppRoute.auth} element={<AuthPage />} />
            <Route path={AppRoute.user} element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
          </Route>
          <Route path="*" element={<Responses404 />} />
        </Routes>
      </BrowserRouter>


    </Theme >
  );
}

export default App;