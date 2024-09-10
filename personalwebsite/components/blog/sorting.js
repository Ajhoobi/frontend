function filterByCategory(originalData, targetCategory) {
  
  const filteredData = originalData.filter(
    (item) => item.category   === targetCategory,
  );
 
  return filteredData;
}

export default filterByCategory;
