import Gradient from "javascript-color-gradient";

const colorGradient = new Gradient();

const color1 = "b51743";
const color2 = "#F7A62B";
const color3 = "#EA4D94";


colorGradient.setMidpoint(20);

colorGradient.setGradient(color2, color1, color3, color1);

export default  colorGradient;