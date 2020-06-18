const {
  convertHTMLToSoupObject,
  extractTagsFromSoupObject,
  getListOfRankAndTitle,
  getListOfPointsAndComments,
} = require("./DataExtraction/dataExtractionMethods");

const webCrawlingFuntion = (html) => {
    
    const soup = convertHTMLToSoupObject(html);
    const getTags = extractTagsFromSoupObject(soup);
    const listOfRankAndTitle = getListOfRankAndTitle(getTags);
    const listOfPointsAndComments = getListOfPointsAndComments(getTags);

    console.log('test', listOfPointsAndComments, listOfRankAndTitle);
};

module.exports = webCrawlingFuntion;
