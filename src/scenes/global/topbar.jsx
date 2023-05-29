import { Box, useTheme, IconButton } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { LightModeOutlined } from "@mui/icons-material";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* search bar */}
      
      <Box
        sx={{
          backgroundColor: colors.primary[400],
          display: "flex",
          borderRadius: "3px",
          alignItems: "center",
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
      </Box>

      {/* icons */}

      <Box display="flex" alignItems="center">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
