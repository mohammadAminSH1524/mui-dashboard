import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // field is to connect with data for sort and  headerName is for displaying header name it can br anything
  // cellClassName is for giving class to a cell so we can style it
  const columns = [
    {
      field: "id",
      headerName: "ID",
      cellClassName: "id-column--cell",
    },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "email",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => <Typography color={colors.greenAccent[500]}>{params.row.cost}</Typography>,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="INVOICES"
        subtitle="List of Invoice Balances"
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
            color: `${colors.greenAccent[200]} !important`,
          },
          
        }}
      >
        {/* we can add  ------------ checkboxSelection-------------- property to add checkbox in data grid list */}
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          density="comfortable"
          autoPageSize
        
        />
      </Box>
    </Box>
  );
};

export default Invoices;
