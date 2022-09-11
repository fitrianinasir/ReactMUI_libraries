import { BrowserRouter, Routes, Route } from "react-router-dom";
import MUITypography from "./Components/MUITypography";
import MUITable from "./Components/MUITable";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/typography" element={<MUITypography />} />
          <Route exact path="/table" element={<MUITable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
