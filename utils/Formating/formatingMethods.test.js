const {
  formatTitle,
  formatRank,
  formatPoint,
  formatComment,
  mergeLists
} = require("./formatingMethods");

test("should format title", () => {
  const mockedTitle = "Title     2 (something)";
  const expectedTitle = "Title 2";

  expect(formatTitle(mockedTitle)).toEqual(expectedTitle);
});

test("should format rank", () => {
  const mockedRank = "1.";
  const expectedRank = "1";

  expect(formatRank(mockedRank)).toEqual(expectedRank);
});

test("should format point", () => {
  const mockedPoint = "12 points";
  const expectedPoint = 12;

  expect(formatPoint(mockedPoint)).toEqual(expectedPoint);
});

test("should format comments", () => {
  const mockedComment = "13&nbsp;comment";
  const expectedComment = 13;

  expect(formatComment(mockedComment)).toEqual(expectedComment);
});

test("should combine two lists", () => {
  const mockedFirstList = [
    { title: "Title 1", rank: "1" },
    { title: "Title 2", rank: "2" },
  ];
  const mockedSecondList = [
    { comments: 20, points: 30 },
    { comments: 40, points: 50 },
  ];
  const expectedList = [
    { title: "Title 1", rank: "1", comments: 20, points: 30 },
    { title: "Title 2", rank: "2", comments: 40, points: 50 },
  ];
  
  expect(mergeLists(mockedFirstList, mockedSecondList)).toEqual(expectedList);
});
