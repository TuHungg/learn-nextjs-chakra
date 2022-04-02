import React from "react";
import {
  VStack,
  Heading,
  Image,
  AspectRatio,
  Text,
  Divider,
  Stack,
  Button,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "while");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <Heading size="2x1">Your cart</Heading>
      <Text>
        If the price is too hard your eyes,{""}
        <Button onClick={toggleColorMode} variant="link" colorScheme="black">
          try changing the theme.
        </Button>
      </Text>
      <VStack>
        <HStack spacing={6} alignItems="center" w="full">
          <AspectRatio ratio={1} w={24}>
            <Image src="/img/p1622622.jpg" alt=""></Image>
          </AspectRatio>
          <Stack
            spacing={0}
            w="full"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <VStack w="full" spacing={0} alignItems="flex-start">
              <Heading size="md">Penny broad</Heading>
              <Text color={secondaryTextColor}>PNYCOMP27541</Text>
            </VStack>
            <Heading size="sm" textAlign="end">
              $199.00
            </Heading>
          </Stack>
        </HStack>
        <VStack spacing={4} alignItems="stretch" w="full">
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>Subtotal</Text>
            <Heading size="sm">$199.00</Heading>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>Shipping</Text>
            <Heading size="sm">$19.99</Heading>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>Taxes (estimated)</Text>
            <Heading size="sm">$23.00</Heading>
          </HStack>
        </VStack>
        <Divider />
        <HStack justifyContent="space-between" w="full">
          <Text color={secondaryTextColor}>Total</Text>
          <Heading size="lg">$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
