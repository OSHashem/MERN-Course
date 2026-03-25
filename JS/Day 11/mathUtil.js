export const PI = 3.14159;

export function getCircumference(radius) {
  return 2 * PI * radius;
}

export function getArea(radius) {
  return 2 * PI * radius;
}
export function getVolume(radius) {
  return 4 * PI * radius * radius;
}

// To resue these variables and functions for any js program i hav
// To do so we will add the "export" keyword before each one
// Note: You can only have one 'default export' in a module file.