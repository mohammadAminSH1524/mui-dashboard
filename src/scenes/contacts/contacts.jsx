import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // field is to connect with data for sort and  headerName is for displaying header name it can br anything
  // cellClassName is for giving class to a cell so we can style it
  const columns = [
    {
      field: "id",
      headerName: "ID",
      cellClassName: "id-column--cell",
      flex: 0.5,
    },
    {
      field: "registrarId",
      headerName: "Registrar Id",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.gray[100]} !important`,
          },
        }}
      >
        {/* we can add  ------------ checkboxSelection-------------- property to add checkbox in data grid list */}
        <DataGrid
          components={{ Toolbar: GridToolbar }}
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          density="standard"
          autoPageSize
          pageSizeOptions={[5,10]}
          
        />
        
      </Box>
    </Box>
  );
};

export default Contacts;
