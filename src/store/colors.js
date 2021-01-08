import Gradient from "javascript-color-gradient";

const colorGradient = new Gradient();

const color1 = "#b51744";
const color2 = "#F7A64B";
const color3 = "#EA4D34";


colorGradient.setMidpoint(20);

colorGradient.setGradient(color1, color2, color3);

export default  colorGradient;