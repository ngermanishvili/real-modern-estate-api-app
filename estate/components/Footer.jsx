import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" textAlign="center" p="5" color="gray.600" borderTop="1px">
      &copy; {new Date().getFullYear()} Realtor. All rights reserved.
    </Box>
  );
};      
export default Footer;