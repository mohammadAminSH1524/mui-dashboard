import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const is650 = useMediaQuery("(max-width:650px)");
  const SingleAccordion = ({ accordionSummary, accordionDetails }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Accordion sx={{backgroundColor:colors.primary[400]}} defaultExpanded={is650 ? false : true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{}}>
          <Typography color={colors.greenAccent[500]} fontSize="18px">
            {accordionSummary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5" color={colors.gray[100]}>{accordionDetails}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Box>
        <SingleAccordion
          accordionSummary="why we must use Mui in react ?"
          accordionDetails="Material-UI is the best choice for React because it is a complete library that offers various components. It is also very easy to use and customize. So, if you are looking for a Material Design library for your React project, look no further than Material-UI!"
        />
        <SingleAccordion
          accordionSummary="why we must use Formik  in react ?"
          accordionDetails="In addition to helping us handle form data, Formik provides some other mechanisms that let us validate form fields, track form submission state, and handle errors. This tutorial will show you how to use Formik in a React app by creating a simple registration form."
        />
        <SingleAccordion
          accordionSummary="why we must use nivo   in react ?"
          accordionDetails="React is all about reusability, and Nivo enables you to create reusable components and, in doing so, eliminate hours of debugging. Nivo is a better choice for data visualization in React because it removes the complexity of building components."
        />
        <SingleAccordion
          accordionSummary="why we must use pro sidebar in react ?"
          accordionDetails="React-Pro-Sidebar is a powerful and lightweight library that allows developers to create responsive, collapsible, customizable dropdown menus and unlimited nested submenus for web applications. It provides a set of pre-built components and APIs that can be used to manage the sidebar"
        />
      </Box>
    </Box>
  );
};

export default FAQ;
