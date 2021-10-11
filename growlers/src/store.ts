import { proxy } from "valtio";
import { Beverage } from "./types";

export interface TapStore {
  taps: Beverage[];
  filteredTaps: Beverage[];
  cart: Beverage[];
  searchText: string;
  alcoholLimit: number;
}

const store = proxy<TapStore>({
  taps:[],
  filteredTaps:[],
  cart:[],
  searchText:'',
  alcoholLimit: 10
});

export const filter = () => {
 const searchRE = new RegExp(store.searchText, "i");
 return store.taps.filter(({beverageName, abv}) => {
   return beverageName.match(searchRE) && abv < store.alcoholLimit;
 }).slice(0,15);
}

export const load = (client:string) => {
  fetch(`http://localhost:8080/${client}.json`).then(resp => resp.json()).then((taps: Beverage[]) => {
    store.taps = taps;
    store.filteredTaps = filter();
  })
}

export const setSearchText = (text:string) => {
  store.searchText = text;
  store.filteredTaps = filter();
}

export const setAlcoholLimit = (limit: number) => {
  store.alcoholLimit = limit;
  store.filteredTaps = filter();
}

export const addToCart = (beverage: Beverage) => {
  store.cart.push(beverage);
}

export default store;