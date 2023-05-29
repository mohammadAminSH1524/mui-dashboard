import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const is1200 = useMediaQuery("(max-width:1200px)");
  const is1100 = useMediaQuery("(max-width:1100px)");
  const is1000 = useMediaQuery("(max-width:1000px)");
  const is950 = useMediaQuery("(max-width:950px)");
  const is900 = useMediaQuery("(max-width:900px)");
  const is800 = useMediaQuery("(max-width:800px)");
  const is750 = useMediaQuery("(max-width:750px)");
  const is650 = useMediaQuery("(max-width:750px)");
  const is600 = useMediaQuery("(max-width:600px)");
  const is450 = useMediaQuery("(max-width:450px)");

  // field is to connect with data for sort and  headerName is for displaying header name it can br anything
  // cellClassName is for giving class to a cell so we can style it
  const columns = [
    {
      field: "id",
      headerName: "ID",
      cellClassName: "id-column--cell",
      flex: is750 ? 0.2 : 0.5,
      hide: true,
    },
    {
      field: "name",
      headerName: "Name",
      flex: is600 ? 0.2 : is950 ? 0.8 : 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: is750 ? 0.2 : 0.5,
    },

    {
      field: "phone",
      headerName: "Phone Number",
      flex: is650 ? 0.4 : is1000 ? 0.7 : 1,
    },

    {
      field: "email",
      headerName: "Email",
      flex: is1100 ? 0.7 : 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      cellClassName: "access-column--cell",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            // m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.gray[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        mt="35px"
        height="75vh"
        // selecting a child classes which is dataGrid component
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            color: colors.gray[100],
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          //   below class name is a custom classname that i added to set the color
          "& .name-column--cell": {
            color: colors.greenAccent[400],
          },

          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[300]} !important`,
          },
        }}
      >
        {/* we can add  ------------ checkboxSelection-------------- property to add checkbox in data grid list */}
        <DataGrid
          autoPageSize
          checkboxSelection={is1200 ? false : true}
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Team;
