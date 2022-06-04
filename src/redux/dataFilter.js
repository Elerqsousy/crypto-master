const dataFilter = (arr, ListOfKeys, listOfFilters, filterIfObject) => arr.map((record) => {
  const arrObj = ListOfKeys.map((key, index) => {
    const item = typeof record === 'object' ? record[filterIfObject] : record;
    return {
      [key]: item[listOfFilters[index]],
    };
  });
  return Object.assign({}, ...arrObj, { favourite: false });
});

export default dataFilter;
