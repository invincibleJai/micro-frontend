import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import store , {setSearchText, setAlcoholLimit} from "../store";
import { MFE_BORDER } from "../constants";

const Search = () => {
  const { searchText, alcoholLimit} = useSnapshot(store);
  return (
    <Box border={MFE_BORDER}>
      <FormControl id="search">
        <FormLabel>Search</FormLabel>
        <Input type="text"  value={searchText}
        onChange={(evt) => {setSearchText(evt.target.value)}}/>
      </FormControl>

      <FormControl id="alcohol">
        <FormLabel>Alcohol</FormLabel>
        <Slider 
          colorScheme="pink" 
          defaultValue={alcoholLimit} 
          min={0} 
          max={17} 
          value={alcoholLimit}
          onChange={(val) => setAlcoholLimit(val)}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </FormControl>
    </Box>
  );
};

export default Search;
