import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ListaItems from './componentes/ItemListConteiner';
import ItemListConteiner2 from './componentes/ItemListConteiner2';
import NavBar from './componentes/NavBar';

function App() {
  return (
<>
<NavBar />
<ListaItems/>
<ItemListConteiner2 />

</>
  );
}


export default App;
