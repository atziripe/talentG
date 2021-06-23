import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import DailyClass from "./DailyClass/DailyClass";
import DailyClassSurvey from "./DailyClassSurvey/DailyClassSurvey";

function App() {
  return (
    <div className="App">
      <Header />
      <DailyClass />
      <DailyClassSurvey />
      <Footer />
    </div>
  );
}

export default App;
