import Footer from "./Footer";
import Header from "./Header";
import MoviesList from "./MoviesList";
import Sidebar from "./Sidebar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Sidebar></Sidebar>
        <MoviesList></MoviesList>
        <Footer></Footer>
      </div>
    </div>
  );
}
