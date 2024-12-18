export const formatCoinAddress = (coinAddress) => {
  if (!coinAddress) return null;
  return coinAddress?.replace(/^(.{4}).*(.{5})$/, '$1******$2');
};

export const formatEmail = (email) => {
  if (!email) return null;
  const atIndex = email.indexOf('@');
  const prefix = email.substring(0, atIndex);

  const maskedPrefix = `${prefix.slice(0, 4)}${'*'.repeat(
    prefix.length - 8
  )}${prefix.slice(-4)}`;
  const maskedEmail = maskedPrefix + email.substring(atIndex);
  return maskedEmail;
};
