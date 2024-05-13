import { Component } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
