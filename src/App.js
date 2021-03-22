import RouteIndex from './routes';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <RouteIndex />
        </BrowserRouter>
  );
}

export default App;
