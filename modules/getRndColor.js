import { getRndInteger } from "../modules/getRndInteger.js";

export function getRndRgb() {
    let rndRgb = "rgb(" + [getRndInteger(0, 255), getRndInteger(0, 255), getRndInteger(0, 255)].join(",") + ")";
    // `rgb(${red}, ${green}, ${blue})` Math.floor(Math.random() * 256)
    return rndRgb;
}