import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DarModeContext } from './components/context/darkModeContext';
import { productInputs, userInputs } from './formSource';
import { Home } from './pages/home';
import { List } from './pages/list';
import { Login } from './pages/login';
import { NewUser } from './pages/new';
import { Single } from './pages/single';
import './style/dark.scss';

function App() {
  const { darkMode } = useContext(DarModeContext);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<NewUser inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productsId" element={<Single />} />
              <Route path="new" element={<NewUser inputs={productInputs} title="Add New Product" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
