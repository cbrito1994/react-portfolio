import '../css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from '../pages/AboutMe';
import Pages from '../pages/Pages';
import Header from './Header';
import Footer from './Footer';
import Cv from './Cv';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/cv" component={Cv} />
        <Route path="/:pages" component={Pages} />
        <Route path="/" component={AboutMe} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
