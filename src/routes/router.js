import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import UserList from '../pages/dashboard/UserList';
import Error from '../pages/Error';
import Homepage from '../pages/Home/Homepage';
import ForgotPassword from '../pages/signinandregistration/ForgotPassword';
import Signin from '../pages/signinandregistration/Signin';
import Signup from '../pages/signinandregistration/Signup';
import Protected from './Protected';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/sign-in',
        element: <Signin />,
      },
      {
        path: '/sign-up',
        element: <Signup />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/users',
        element: (
          <Protected>
            <UserList />
          </Protected>
        ),
      },
    ],
  },
]);

export default router;
