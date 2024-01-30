// import React, { useState } from "react";
// import {
//   Box,
//   Link,
//   IconButton,
//   List,
//   ListItem,
//   Text,
//   Center,
//   Image,
// } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { Link as ReactRouterLink } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
// import { IconContext } from "react-icons";
// import sun from "../imgs/sun.png";
// function Navbar() {
//   const [sidebar, setSidebar] = useState(true);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <IconContext.Provider value={{ color: "undefined" }}>
//       <Box>
//         <Box className={`navbar ${sidebar ? "active" : ""}`}>
//           <Link as={ReactRouterLink} to="#" className="menu-bars">
//             <IconButton
//               icon={<HamburgerIcon />}
//               onClick={showSidebar}
//               variant="outline"
//             />
//           </Link>
//         </Box>
//         <Box position={"relative"} bottom={"3rem"}>
//           <Center>
//             <Image src={sun} height={"50px"} width={"50px"} />
//             <Text fontSize={"40px"}>Dukha Bhanjan</Text>
//           </Center>
//         </Box>
//         <Box className={`nav-menu ${sidebar ? "active" : ""}`}>
//           <List className="nav-menu-items" onClick={showSidebar}>
//             <ListItem className="navbar-toggle">
//               <Link as={ReactRouterLink} to="#" className="menu-bars">
//                 <IconButton icon={<CloseIcon />} variant="outline" />
//               </Link>
//             </ListItem>
//             {SidebarData.map((item, index) => (
//               <ListItem key={index} className={item.cName}>
//                 <Link as={ReactRouterLink} to={item.path}>
//                   {item.icon}
//                   <Text ml={2}>{item.title}</Text>
//                 </Link>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Box>
//     </IconContext.Provider>
//   );
// }

// export default Navbar;
import { RiLogoutCircleRFill } from "react-icons/ri";
import React from "react";
import {
  Box,
  Link,
  Text,
  List,
  ListItem,
  Image,
  useToast,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import sun from "../imgs/sun.png";
import { RiLogoutCircleFill } from "react-icons/ri";


function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
const toast = useToast()
  const handleLogout = () => {
    toast({
      title: 'Logout successfully!!',
      status: 'error',
      duration: 3000,
      position:'top-right',
      isClosable: true,
    })
    localStorage.clear();
   
    navigate("/login")
  }

const handleLogin = () =>{
  navigate("/login")
}

  return (
    <IconContext.Provider value={{ color: "undefined" }}>
      <Box>
        <Box className="nav-menu active">
          <List className="nav-menu-items">
            <ListItem className="navbar-toggle">
              <Link as={ReactRouterLink} to="#" className="menu-bars">
                {/* <CloseIcon fontSize="xl" /> */}
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  position={"relative"}
                  right={"2rem"}
                >
                  <Image src={sun} height={"10"} width={"10"} mr={"2"} />
                  <Text fontSize="xl">Dukha Bhanjan</Text>
                </Box>
              </Link>
            </ListItem>
            {SidebarData.map((item, index) => (
              <ListItem key={index} className={item.cName}>
             <Text as={ReactRouterLink} to={item.path}>
                  {item.icon}
               
                <Text  ml={2}>{item.title}</Text>     
                </Text>
              </ListItem>
            ))}
   
      {location.pathname === "/login" && <Box mt={2} ml={8} display={"flex"}>
          <RiLogoutCircleRFill   size={20}/>
            <Text letterSpacing={2} cursor={"pointer"} fontWeight={500} fontSize={"17px"} onClick={handleLogin} color={"green"} mt={"-5px"} ml={2}>Login</Text>
          </Box>}    
      {location.pathname !== "/login" && <Box mt={4} ml={8} display={"flex"}>
          <RiLogoutCircleFill   size={20}/>
            <Text letterSpacing={2} cursor={"pointer"} fontWeight={500} fontSize={"17px"} onClick={handleLogout} color={"red"} mt={"-4px"} ml={2}>Logout</Text>
          </Box>}    
          
          </List>
        </Box>
      </Box>
    </IconContext.Provider>
  );
}

export default Navbar;
