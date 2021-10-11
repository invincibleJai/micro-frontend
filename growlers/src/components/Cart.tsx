import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import store from "../store";
import { MFE_BORDER } from "../constants";

const Cart = () => {
  const { cart } = useSnapshot(store);
  return (
    <Box border={MFE_BORDER}>
      {cart.map((beverage) => (
        <Box
          borderBottom="1px"
          borderBottomColor="gray.200"
          mb={3}
          key={[beverage.producerName, beverage.beverageName].join("")}
        >
          <Box>
            <Text fontSize="2xl">
              <strong>{beverage.producerName}</strong>&nbsp;
              {beverage.beverageName}
            </Text>
          </Box>
          <Box>
            <Text>{beverage.beverageStyle}</Text>
          </Box>
        </Box>
      ))}
      <Box>
        <Button width="100%" onClick={() => store.cart = []}>Checkout</Button>
      </Box>
    </Box>
  );
};

export default Cart;
