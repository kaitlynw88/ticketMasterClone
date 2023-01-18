import SearchBar from './components/SearchBar';
import Header from "./components/Header"
import { Footer } from './components/Footer';

import "./styles/App.scss"

function App() {

  return (
    <>
      <div className="wrapper">
          <Header/>
          <SearchBar/>
          <Footer/>
      </div>
    </>
  )
}

export default App;
