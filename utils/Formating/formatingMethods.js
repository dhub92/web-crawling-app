const formatTitle = (title) =>
  title.replace(/\s+/g, " ").replace(/ \(([^)]+)\)/g, "");
const formatRank = (rank) => rank.replace(/\./g, "");
const formatPoint = (point) => parseInt(point.replace(/ [\w]+/g, ""));
const formatComment = (comment) => {
  const formatedComment = comment.replace(/&nbsp;[\w]+/g, "");
  if (formatedComment === comment) return 0;
  return parseInt(formatedComment);
};

const mergeLists = (fisrtList, secondList) =>
fisrtList.map((item, index) => ({ ...item, ...secondList[index] }));



module.exports = { formatTitle, formatRank, formatPoint, formatComment,mergeLists };
