// Implement the launch sequence function here and export it as the default export.
import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

loadPayload(NFSAT);
loadPayload(FISHSAT);
fuel();
countdown();
liftoff();
deployPayload();
