const {
  filterTitleLengthGreaterThanFive,
  filterTitleLengthLessThanFive,
} = require("./filteringMethods");

let mockedList;

beforeEach(() => {
  mockedList = [
    { title: "Title 1", rank: "1", points: 10, comments: 5 },
    {
      title: "Title with more than five words",
      rank: "2",
      points: 13,
      comments: 8,
    },
  ];
});

test("should filter titles with more than 5 words in them", () => {
  const expectedFilteredList = [
    {
      title: "Title with more than five words",
      rank: "2",
      points: 13,
      comments: 8,
    },
  ];

  expect(filterTitleLengthGreaterThanFive(mockedList)).toEqual(
    expectedFilteredList
  );
});

test("should filter titles with less than 5 words in them", () => {
  const expectedFilteredList = [
    { title: "Title 1", rank: "1", points: 10, comments: 5 },
  ];

  expect(filterTitleLengthLessThanFive(mockedList)).toEqual(
    expectedFilteredList
  );
});
