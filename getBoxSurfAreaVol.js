// Problem:

/* Write a function that returns the total surface area and volume of a box as an array: [area, volume]. */

// Solution:

function getBoxSurfAreaVol(width, height, depth) {
    let surfaceArea = (2 * depth * width) + (2 * depth * height) + (2 * height * width);
    let volume = width * height * depth;
    return [surfaceArea, volume];
}