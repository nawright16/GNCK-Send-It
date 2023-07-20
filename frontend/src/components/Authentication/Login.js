import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { ChatState } from "../../Context/ChatProvider";

const Login = () => {
  // State variables
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  

  // Access the browser history object for navigation
  const history = useHistory();
  // Get the setUser function from the ChatState context
  const { setUser } = ChatState();

  // Submit form handler
  const submitHandler = async () => {
    setLoading(true);
    // Validate email and password
    if (!email || !password) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Send a login request to the server
      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      // Display a success toast message
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // Set the user data in the context
      setUser(data);
      // Store the user info in localStorage
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      // Redirect to the /chats route
      history.push("/chats");
    } catch (error) {
      // Display an error toast message
      toast({
        title: "Error Occurred!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing="12px" height="400px"   >
      <FormControl id="email" isRequired >
    
        <FormLabel color="#d9fff8ff">Email Address</FormLabel>
        <Input
          value={email}
          type="email"
          placeholder="Enter Your Email Address"
          bg="rgba(0, 0, 0, 0.2)"
          color="#d9fff8"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel color="#d9fff8ff">Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            color="#d9fff8"
            bg="rgba(0, 0, 0, 0.2)"
          />
           {/* Toggle password visibility button */}
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" bg="#d9fff8ff" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {/* Login button */}
      <Button
        bg="#d9fff8ff"
        color="#aa7bc3"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
           {/* Set guest credentials button */}
      <Button
        variant="solid"
        bg="#aa7bc3ff"
        color="#d9fff8"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Set Guest Credentials
      </Button>
    </VStack>
  );
};

export default Login;
