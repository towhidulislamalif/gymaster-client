import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

const App = () => {
  return (
    <div className="font-body">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
