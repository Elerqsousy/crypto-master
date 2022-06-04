const dataFilter = (arr, ListOfKeys, listOfFilters, filterIfObject) => arr.map((record) => {
  const arrObj = ListOfKeys.map((key, index) => {
    console.log(record);
    console.log(record[filterIfObject]);

    const item = filterIfObject ? record[filterIfObject] : record;
    console.log(item);

    return {
      [key]: item[listOfFilters[index]],
    };
  });
  return Object.assign({}, ...arrObj, { favourite: false });
});

export default dataFilter;
