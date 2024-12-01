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


const App = function() {
  return (
    <Theme preset={presetGpnDefault}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<MainPage />}/>
              <Route path="/service" element={<ServicePage />}/>
              <Route path="/service/:id" element={<ServiceDetailPage />}/>
              <Route path="/auth" element={<AuthPage/>} />
            </Route>
              <Route path="*" element={<Responses404/>} />
          </Routes>
      </BrowserRouter>
      {/* <Button label="Attachment"/>
      <Button label="Layout"/>
      <Button label="Avatar"/>
      <Card verticalSpace='xs' horizontalSpace='xs'>
        <Text>Card</Text>
      </Card> */}

    </Theme>
  );
}

export default App;
