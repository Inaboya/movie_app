// components/SearchBar.js

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { Box, Button, Input } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

const SearchBar = () => {
  const [title, setTitle] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <Box pt={4} display="flex" alignItems="center" justifyContent="center">
  <Input
    borderWidth="1px"
    borderColor="gray.300"
    borderRadius="md"
    py={2}
    px={4}
    w="full"
    maxW="xs"
    type="text"
    placeholder="Search for movies..."
    onChange={handleChange}
    value={title}
  />

  <Button
    bg="blue.500"
    color="white"
    fontWeight="bold"
    ml={2}
    py={2}
    px={4}
    borderRadius="md"
  >
    <Link href={`/movie/movie-title/${title}`} passHref>Search</Link>
  </Button>
</Box>
  );
};



export default SearchBar;
