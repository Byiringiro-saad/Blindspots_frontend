import { groupBy } from "lodash";

const filterArray = (data, key) => {
  return groupBy(data, key);
};

export default filterArray;
