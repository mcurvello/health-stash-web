import { Button } from '@chakra-ui/react';

export default function CustomButton({ disabled, onClick }) {
  return (
    <Button
      colorScheme="gray"
      isDisabled={disabled}
      onClick={onClick}
      borderRadius="50px" 
      width="100%"
      marginY={2}
      color="#0083C5"
    >
      ENTRAR
    </Button>
  );
}
