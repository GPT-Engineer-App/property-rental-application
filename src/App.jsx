import { Box, Flex } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Flex>
        <Navigation />
        <Box flex={1} ml={{ base: 0, md: 8 }}>
          <Routes>
            <Route exact path="/" element={<Index />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
