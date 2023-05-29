import {
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, useLocation } from "react-router-dom";
import { tokens } from "../../theme";

// mui icons == menu icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
//

// this component can seprated from this file
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.gray[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  let selectedOption = "";
  switch (path) {
    case "":
      selectedOption = "Dashboard";
      break;
    case "team":
      selectedOption = "Manage Team";
      break;
    case "contacts":
      selectedOption = "Contacts Information";
      break;
    case "invoices":
      selectedOption = "Invoices Balances";
      break;
    case "signup":
      selectedOption = "Profile Form";
      break;

    case "faq":
      selectedOption = "FAQ Page";
      break;
    case "bar":
      selectedOption = "Bar Chart";
      break;
    case "pie":
      selectedOption = "Pie Chart";
      break;
    case "line":
      selectedOption = "Line Chart";
      break;
    case "geography":
      selectedOption = "Geography Chart";
      break;

    default:
      break;
  }

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  // Dashboard
  const [selected, setSelected] = useState(selectedOption);

  const is1200 = useMediaQuery("(max-width:1200px)");
  const is900 = useMediaQuery("(max-width:900px)");
  const is800 = useMediaQuery("(max-width:800px)");
  const is600 = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        minHeight: "100vh",
      }}
    >
      <ProSidebar collapsed={is900 ? true : isCollapsed}>
        <Menu iconShape="square">
          {!is900 && (
            <MenuItem
              onClick={() => (is900 ? undefined : setIsCollapsed(!isCollapsed))}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.gray[100],
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                ml="15px"
              >
                <Typography fontSize="22px">ADMIN</Typography>
                <IconButton>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            </MenuItem>
          )}

          {!is900 && !isCollapsed && (
            <Box
              mb={1}
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <img
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                src={require("../../assests/user.png")}
                alt="user"
              />
              <Typography
                variant="h2"
                fontSize="28px"
                color={colors.gray[100]}
                fontWeight="600"
                sx={{ mt: "10px" }}
              >
                M Amin
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                VP Admin
              </Typography>
            </Box>
          )}

          {/*  */}
          <Box
            paddingLeft={isCollapsed ? undefined : is900 ? undefined : "10%"}
          >
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/signup"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
