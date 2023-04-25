import { Box, CloseButton, useToast, Text } from "@chakra-ui/react";

interface AlertProps { 
    status: 'success' | 'error' | 'warning' | 'info';
    title: string;
    description: string;
}

const Alert: React.FC<AlertProps> = ({ status, title, description }) => {
  const toast = useToast();

  const handleAlertClose = () => {
    toast.closeAll();
  };

  return (
    <Box
      p={4}
      borderRadius="md"
      shadow="md"
      bg={status === "error" ? "red.500" : "green.500"}
    >
      <Text color="white" fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text color="white">{description}</Text>
      <CloseButton
        onClick={handleAlertClose}
        position="absolute"
        top="0.5rem"
        right="0.5rem"
      />
    </Box>
  );
};

export default Alert;
