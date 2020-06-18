const JSSoup = require("jssoup").default;
const _ = require("lodash");

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
    console.log(trTag);
  const info = trTag.contents[1].contents;
  console.log(info);
  return {
    points: formatPoint(info[0].text),
    comments: formatComment(info[8].text),
  };
};

const formatTitle = (title) =>
  title.replace(/\s+/g, " ").replace(/ \(([^)]+)\)/g, "");
const formatRank = (rank) => rank.replace(/\./g, "");
const formatPoint = (point) => parseInt(point.replace(/ [\w]+/g, ""));
const formatComment = (comment) => {
  const formatedComment = comment.replace(/&nbsp;[\w]+/g, "");
  if (formatedComment === comment) return 0;
  return parseInt(formatedComment);
};

module.exports = {
  convertHTMLToSoupObject,
  extractTagsFromSoupObject,
  getListOfRankAndTitle,
  getListOfPointsAndComments,
};
