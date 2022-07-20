import { Navbar } from "./components/layout/components/navbar/navbar";
import { Body} from "./components/layout/components/body/body";


console.log(Navbar)
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Body/>
    </div>
  );
};

export default App;
