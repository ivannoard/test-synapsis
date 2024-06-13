export function getRandomCategory() {
  const categoryData = ["Blog", "Fashion", "Technology", "News"];
  const indexData = Math.floor(Math.random() * 4);
  return categoryData[indexData];
}
