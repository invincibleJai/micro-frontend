import { load } from "growlers/store";
import VanillaTaps from "growlers/VanillaTaps";
import VanillaSearch from "growlers/VanillaSearch";
import VanillaCart from "growlers/VanillaCart";

import "./index.css";

load('hv-taplist');
VanillaSearch('.search');
VanillaTaps('.taps');
VanillaCart('.cart');
