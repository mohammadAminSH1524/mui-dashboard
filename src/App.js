import { useEffect } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import TopBar from "./scenes/global/topbar";
import SideBar from "./scenes/global/sidebar";
import Dashboard from "./scenes/dashboard/dashboard";
import Team from "./scenes/team/team";
import Invoices from "./scenes/invoices/invoices";
import Contacts from "./scenes/contacts/contacts";
import Signup from "./scenes/signup/signup";
import FAQ from "./scenes/faq/faq";

import BarChartPage from "./scenes/barchart/barChart";
import LineChartPage from "./scenes/linechart/lineChart";
import PieChartPage from "./scenes/piechart/pieChart";
import GeographyChartPage from "./scenes/geographychart/geograohyChart";

const App = () => {
  useEffect(() => {
    document.title = "dashboard";
  }, []);
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/bar" element={<BarChartPage />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/line" element={<LineChartPage />} />
              <Route path="/pie" element={<PieChartPage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<GeographyChartPage />} />
            
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
