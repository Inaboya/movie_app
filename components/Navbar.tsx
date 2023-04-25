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
        <NextLink href="/" passHref>
          <ChakraLink fontSize={{ base: 'base', md: '2xl' }}>
            Watch
            <Box as="span" color="red.600">
              Me
            </Box>
          </ChakraLink>
        </NextLink>

        
      </Box>
    </Box>
  );
};
