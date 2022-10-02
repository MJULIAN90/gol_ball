export const contractNumberLocal = "0xCe50072D47508d1b29F484a45bA4423157718Bb5";

export const contractNumberRospten =
  "0x47ce3d8feD93B8098B93676c80279ECEcef8CE6C";

export const shortenAddress = (address) => {
  return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
};
