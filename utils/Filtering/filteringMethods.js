const filterTitleLengthGreaterThanFive = (list) =>
  list.filter((item) => item.title.split(' ').length > 5);

const filterTitleLengthLessThanFive = (list) =>
  list.filter((item) => item.title.split(' ').length <= 5);

  module.exports={
    filterTitleLengthGreaterThanFive,
    filterTitleLengthLessThanFive
  }
