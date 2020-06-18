const {
  orderByNumberOfComments,
  orderByNumberOfPoints,
} = require("./sortingMethods");

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

test("should order the list by nomber of comments in descent order", () => {
  const expectedFilteredList = [
    {
      title: "Title with more than five words",
      rank: "2",
      points: 13,
      comments: 8,
    },
    { title: "Title 1", rank: "1", points: 10, comments: 5 },
  ];

  expect(orderByNumberOfComments(mockedList)).toEqual(expectedFilteredList);
});

test("should order the list by nomber of comments in descent order", () => {
  const expectedFilteredList = [
    {
      title: "Title with more than five words",
      rank: "2",
      points: 13,
      comments: 8,
    },
    { title: "Title 1", rank: "1", points: 10, comments: 5 },
  ];

  expect(orderByNumberOfPoints(mockedList)).toEqual(expectedFilteredList);
});
