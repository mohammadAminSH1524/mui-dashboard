import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useLocation } from "react-router-dom";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const isInDashboardpage = Boolean(path === "");

  return (
    <Box mb={isInDashboardpage ? "10px" : "30px"}>
      <Typography sx={{ mb: "5px" }} variant="h2" color={colors.gray[100]}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
