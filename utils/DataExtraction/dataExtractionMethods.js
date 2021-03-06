const JSSoup = require("jssoup").default;
const _ = require("lodash");
const {
  formatTitle,
  formatRank,
  formatPoint,
  formatComment,
} = require("../Formating/formatingMethods");
const convertHTMLToSoupObject = (html) => new JSSoup(html);

const extractTagsFromSoupObject = (soup) =>
  soup.findAll("table")[2].findAll("tr").slice(0, 90);

const getListOfRankAndTitle = (tags) => {
  let listOfRankAndTitle = [];
  tags.forEach((item) => {
    if (item.attrs.class !== "spacer" && item.attrs.class === "athing") {
      listOfRankAndTitle.push(getRankAndTitle(item));
    }
  });
  return listOfRankAndTitle;
};

const getListOfPointsAndComments = (tags) => {
  let listOfPointsAndComments = [];
  tags.forEach((item) => {
    if (item.attrs.class !== "spacer" && item.attrs.class !== "athing") {
      listOfPointsAndComments.push(getPointsAndComments(item));
    }
  });
  return listOfPointsAndComments;
};

const getRankAndTitle = (trTag) => ({
  title: formatTitle(trTag.contents[2].text),
  rank: formatRank(trTag.contents[0].text),
});

const getPointsAndComments = (trTag) => {
  const info = trTag.contents[1].contents;
  let comment;
  if (!info[8]) comment = "No data";
  else comment = info[8].text;
  return {
    points: formatPoint(info[0].text),
    comments: formatComment(comment),
  };
};

module.exports = {
  convertHTMLToSoupObject,
  extractTagsFromSoupObject,
  getListOfRankAndTitle,
  getListOfPointsAndComments,
};
