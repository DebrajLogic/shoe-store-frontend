export const calculateDiscountPercentage = (A, B) => {
  const discount = (1 - A / B) * 100;

  return discount.toFixed(0);
};

export const formatSlug = (slug) => {
  // Replace hyphens with spaces and capitalize each word
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
};
