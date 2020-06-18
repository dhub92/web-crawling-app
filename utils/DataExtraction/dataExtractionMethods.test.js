const {
  convertHTMLToSoupObject,
  getListOfRankAndTitle,
  getListOfPointsAndComments,
} = require("./dataExtractionMethods");

const JSSoup = require("jssoup").default;

test("should convert HTML to soup object", () => {
  const mocketHtml = "<div></div>";
  const expectedSoup = new JSSoup(mocketHtml);
  expect(convertHTMLToSoupObject(mocketHtml)).toEqual(expectedSoup);
});

test("should extract title and rank object from tag", () => {
  const mockedTags = [
    {
      attrs: { class: "spacer" },
      contents: [{ text: "test" }, { text: "test 2" }, { text: "test 3" }],
    },
    {
      attrs: { class: "athing" },
      contents: [{ text: "test 4" }, { text: "test 5" }, { text: "test    6 (something)" }],
    },
  ];

  const exptectedObject = [{ title: "test 6", rank: "test 4" }];

  expect(getListOfRankAndTitle(mockedTags)).toEqual(exptectedObject);
});

test("should extract points and comments object from tag", () => {
  const mockedTags = [
    {
      attrs: { class: "spacer" },
      contents: [{ text: "test" }, { text: "test 2" }, { text: "test 3" }],
    },
    {
      attrs: { class: "" },
      contents: [
        { text: "test 4" },
        {
          text: "test 5",
          contents: [
            { text: "13" },
            { text: "test" },
            { text: "test" },
            { text: "test" },
            { text: "test" },
            { text: "test" },
            { text: "test" },
            { text: "test" },
            { text: "12&nbsp;comments" },
          ],
        },
        { text: "test 6" },
      ],
    },
  ];

  const expectedObject=[{points: 13, comments: 12}]

  expect(getListOfPointsAndComments(mockedTags)).toEqual(expectedObject);
});
