import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Grid templateColumns="200px 1fr">
        <GridItem>
          <Navigation />
        </GridItem>
        <GridItem>
          <Box ml={8}>
            <Routes>
              <Route exact path="/" element={<Index />} />
            </Routes>
          </Box>
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;
