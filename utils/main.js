const {
  convertHTMLToSoupObject,
  extractTagsFromSoupObject,
  getListOfRankAndTitle,
  getListOfPointsAndComments,
} = require("./DataExtraction/dataExtractionMethods");

const {
  filterTitleLengthGreaterThanFive,
  filterTitleLengthLessThanFive,
} = require("./Filtering/filteringMethods");

const { mergeLists } = require("./Formating/formatingMethods");

const {
  orderByNumberOfComments,
  orderByNumberOfPoints,
} = require("./Sorting/sortingMethods");

const webCrawlingFuntion = (html) => {
  const soup = convertHTMLToSoupObject(html);

  const getTags = extractTagsFromSoupObject(soup);

  const listOfRankAndTitle = getListOfRankAndTitle(getTags);

  const listOfPointsAndComments = getListOfPointsAndComments(getTags);

  const mergedList = mergeLists(listOfRankAndTitle, listOfPointsAndComments);

  const fisrtFilteredList = orderByNumberOfComments(
    filterTitleLengthGreaterThanFive(mergedList)
  );
  const secondFilteredList = orderByNumberOfPoints(
    filterTitleLengthLessThanFive(mergedList)
  );

  console.log(
    "Filter entries with more than five words in the title ordered by the amount of comments first. \n",
    fisrtFilteredList
  );
  console.log('**********************************')
  console.log(
    "Filter all previous entries with less than or equal to five words in the title ordered by points. \n",
    secondFilteredList
  );
};

module.exports = webCrawlingFuntion;
