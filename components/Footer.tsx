import React from 'react';
import { Box, Center, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Center
      h="32"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="xl" color="gray.800">
        &copy; Copyright 2022{' '}
        <Box as="span" fontWeight="bold">
          Canddev
        </Box>
      </Text>
    </Center>
  );
};

export default Footer;
