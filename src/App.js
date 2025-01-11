import React from "react";
import About from "./components/MainComponents/About";
import SideCardPromo from "./components/SideCardPromo";
import Chart from "./components/MainComponents/Chart";
import Performance from "./components/MainComponents/Performance";
import Sentiments from "./components/MainComponents/Sentiments";
import Toggler from "./components/MainComponents/Toggler";
import Tokenomics from "./components/MainComponents/Tokenomics";
import Trending from "./components/Trending";
import Team from "./components/MainComponents/Team";
import Cryptos from "./components/MainComponents/Cryptos";
import Location from "./components/Location";
import Navbar from "./components/MainComponents/Navbar";

const App = () => {
  return (
    <div className="h-full w-full bg-slate-200/40">
      <Navbar />
      <Location />
      <div className="w-full lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
          <Chart />
          <Toggler />
          <Performance />
          <Sentiments />
          <About />
          <Tokenomics />
          <Team />
        </div>
        <div className="lg:w-3/12 lg:mr-14 mx-2">
          <SideCardPromo />
          <Trending />
        </div>
      </div>
      <Cryptos />
    </div>
  );
}

export default App;
