import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ButtonDocumentation from './components/ButtonDocumentation';
import FooterDocumentation from './components/FooterDocumentation';
import HeaderDocumentation from './components/HeaderDocumentation';
import FormDocumentation from './components/FormDocumentation';
import GridDocumentation from './components/GridDocumentation';
import SearchBarDocumentation from './components/SearchBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
      <Route path="button" element={<ButtonDocumentation />} />
      <Route path="footer" element={<FooterDocumentation />} />
      <Route path="header" element={<HeaderDocumentation />} />
      <Route path="form" element={<FormDocumentation />} />
      <Route path="grid" element={<GridDocumentation />} />
      <Route path="searchBar" element={<SearchBarDocumentation />} />
          </Route>
    </Routes>
  </BrowserRouter>
    
  </StrictMode>,
);








