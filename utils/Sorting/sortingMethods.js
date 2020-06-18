const _ = require("lodash");

const orderByNumberOfComments = (list) => _.orderBy(list, "comments", "desc");

const orderByNumberOfPoints = (list) => _.orderBy(list, "points", "desc");

module.exports={orderByNumberOfComments, orderByNumberOfPoints}