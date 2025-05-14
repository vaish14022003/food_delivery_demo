// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// // import App from './App'
// import Home from './components/Home';
// //import login from './routers/login';
// import './styles.css';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App /> */}
//     <Home/>
    
//   </StrictMode>,
// )


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';  
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  
  </StrictMode>
);
