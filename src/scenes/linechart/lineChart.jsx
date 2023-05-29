import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import Header from "../../components/Header";

const LineChartPage = () => {
    return ( <Box m="20px">
    <Header title="Line Chart" subtitle="Simple Line Chart" />
    <Box height="75vh">
      <LineChart />
    </Box>
  </Box> );
}
 
export default LineChartPage;