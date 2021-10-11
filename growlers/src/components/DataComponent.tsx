import React, { ReactElement } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import store , { TapStore }from "../store";
import { MFE_BORDER } from "../constants";

const DataComponent: React.FC<{children:(state: TapStore) => ReactElement}> = ({children}) => {
  const state = useSnapshot(store);
  return children(state)
};

export default DataComponent;
