import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Root from './Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Plant from './Pages/Plants/Plant.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import PlantLoader from './Components/Loader/PlantLoader.jsx';
import PlantDetails from './Components/Plant details/PlantDetails.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from './Auth Provider/AuthProvider.jsx';
import SinglePlant from './Components/Plant details/SinglePlant.jsx';
import PrivateRoutes from './Private Route/PrivateRoutes.jsx';
import About from './Pages/About/About.jsx';
import ErrorPage from './Error/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: '/plant',
        element: (
          <Suspense fallback={<PlantLoader></PlantLoader>}>
            <PrivateRoutes>
              <Plant></Plant>
            </PrivateRoutes>
          </Suspense>
        ),
      },

      {
        path: '/profile',
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
    ],
  },

  {
    path: '/plant/:id',
    element: (
      <Suspense fallback={<PlantLoader></PlantLoader>}>
        <SinglePlant></SinglePlant>
      </Suspense>
    ),
  },

  {
    path: '/login',
    Component: Login,
  },

  {
    path: '/register',
    Component: Register,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
