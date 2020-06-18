const { formatTitle, formatRank, formatPoint, formatComment } = require('./formaterMethods')

test('should format title',()=>{
    const mockedTitle = 'Title     2 (something)';
    const expectedTitle = 'Title 2';

    expect(formatTitle(mockedTitle)).toEqual(expectedTitle)
})

test('should format rank',()=>{
    const mockedRank = '1.';
    const expectedRank = '1';

    expect(formatRank(mockedRank)).toEqual(expectedRank)
})

test('should format point',()=>{
    const mockedPoint = '12 points';
    const expectedPoint = 12;

    expect(formatPoint(mockedPoint)).toEqual(expectedPoint)
})

test('should format comments',()=>{
    const mockedComment = '13&nbsp;comment';
    const expectedComment = 13;

    expect(formatComment(mockedComment)).toEqual(expectedComment)
})