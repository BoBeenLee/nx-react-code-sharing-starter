export function isJSON(str: string) {
  try {
    const obj = JSON.parse(str);
    if (obj && typeof obj === 'object' && obj !== null) {
      return true;
    }
  } catch (err) {
    // NOTHING
  }
  return false;
}
