import React from "react";
import Navbar from "./components/Navbar";
import QuoteCard from "./components/QuoteCard";
import QuoteForm from "./components/QuoteForm";
import QuoteRequest from "./components/QuoteRequest";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <QuoteRequest />
        <QuoteCard
          quote={
            "Shoplifting is a victimless crime, like punching someone in the dark."
          }
          character="Bart Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
          characterDirection="Right"
        />
        <QuoteCard
          quote="Why are you pleople avoiding me? Does my withered face remind you of the grim specter of death?"
          character="Abe Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593"
          characterDirection="Left"
        />
      </div>
      <QuoteForm />
    </div>
  );
}

export default App;
