import { BrowserRouter, Routes, Route } from "react-router-dom";
import MUITypography from "./Components/MUITypography";
import MUITable from "./Components/MUITable";
import ReactTable from "./Components/MUIReactTable";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/typography" element={<MUITypography />} />
          <Route exact path="/table" element={<MUITable />} />
          <Route exact path="/react-table" element={<ReactTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
