import "./Homepage.css";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    // Check if the user is already logged in
    const user = JSON.parse(localStorage.getItem("userInfo"));

    // Redirect to the /chats route if the user is logged in
    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      {/* Logo */}
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="rgba(0, 0, 0, 0.4)"
        w="100%"
        m="40px 0 15px 0"
        borderRadius= "1em"
      >
        <Text
          bgGradient="linear(to-l, #d9fff8, #11b5e4ff )"
          bgClip="text"
          fontSize="6xl"
          fontFamily="chalkboard"
          fontWeight="extrabold"
        >
          Send It
        </Text>
      </Box>
      {/* Authentication tabs */}
      <Box
        bg="rgba(0, 0, 0, 0.4)"
        borderRadius= "1em"
        w="100%"
        p={4}
        color="#aa7bc3ff"
        // textShadow=".5px .5px 0px #000000"
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab _selected={{color: "#d9fff8", bg:"#aa7bc3", border:"0px"}} bg="#d9fff8" color="#aa7bc3" >Login</Tab>
            <Tab _selected={{color: "#d9fff8", bg:"#aa7bc3", border:"0px"}} bg="#d9fff8" color="#aa7bc3" >Sign Up</Tab>
          </TabList>
          {/* Tab panels */}
          <TabPanels>
            <TabPanel>
              {/* Login component */}
              <Login />
            </TabPanel>
            <TabPanel>
              {/* Signup component */}
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
