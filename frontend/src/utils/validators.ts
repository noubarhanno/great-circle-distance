export const isFloat = (value: string): boolean => {
  const floatRegex = /^-?\d*(\.\d+)?$/;
  return floatRegex.test(value);
};
