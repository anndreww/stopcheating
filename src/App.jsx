import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import Privacy from "./pages/privacy-policy.jsx"; 
import Terms from "./pages/terms-of-service.jsx"; 

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/privacy-policy" component={Privacy} />
        <Route path="/terms-of-service" component={Terms} />
      </Switch>
    </Router>
  );
};

export default App;
