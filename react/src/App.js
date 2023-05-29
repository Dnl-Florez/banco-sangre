import { BancoProvider } from './components/Context/Context';
import './App.css';
import {FormMenu} from './components/FormMenu/FormMenu';

function App() {
  return (
	<BancoProvider>
		<FormMenu/>
	</BancoProvider>
  );
}

export default App;
