import { getRndInteger } from "../modules/getRndInteger.js";

export function getRndRgb() {
    let rndRgb = "rgb(" + [getRndInteger(0, 255), getRndInteger(0, 255), getRndInteger(0, 255)].join(",") + ")";
    return rndRgb;
}