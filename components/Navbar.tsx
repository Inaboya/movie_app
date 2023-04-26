import { Box, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <Box bg="gray.700">
      <Box
        fontWeight="bold"
        color="white"
        py={4}
        maxW="7xl"
        mx="auto"
        // container
        letterSpacing="widest"
        fontFamily="neue"
      >
         <Box
          color="red.600"
          mt={{ base: 5, md: 0 }}
          mx={3}
          fontSize={{ base: 'base', md: '2xl' }}
        >
          <NextLink href="/" passHref>
            Movies App
          </NextLink>
        </Box>

        
      </Box>
    </Box>
  );
};
