export const contractNumberLocal = "0xCe50072D47508d1b29F484a45bA4423157718Bb5";

export const contractNumberRospten =
  "0x3F46888b6b8e3b261917DffD09b74FCbA011abBb";

export const shortenAddress = (address) => {
  return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
};
