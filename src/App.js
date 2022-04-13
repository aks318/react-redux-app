import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './Components/CakeContainer';
import store from './redux/store';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      {/* <ItemContainer cake />
      <ItemContainer />
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <NewCakeContainer /> */}
      <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
