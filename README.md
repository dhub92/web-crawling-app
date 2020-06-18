# web-crawling-app
A web crawling app that extract the first 30 entries from https://news.ycombinator.com/ and also, it will flter the entries using the follow two criterias:
* Filter all previous entries with more than five words in the title ordered by the amount of comments first.
* Filter all previous entries with less than or equal to five words in the title ordered by points.
## Technologies used in this project
* Node js (required for use the app)
* **JSSoup:** HTML parser for Javascript  https://www.npmjs.com/package/jssoup
* **Lodash:** A JavaScript utility library
* **Jest:** A JavaScript Testing Framework
## How to use it
1. Download it or clone it with git using `git clone https://github.com/dhub92/web-crawling-app.git`
2. Run `npm install`
3. Run `node index.js` 
4. The app will show two lists (in terminal) matching the two above filter criterias. Both lists will have the next structure:
```
[
...
{
    title: 'Crystallography Open Database', (String)
    rank: '26', (String)
    points: 48, (Number)
    comments: 10 (Number)
  },
...
]
```
## Tests
To run the tests, run `npm test`
## Observations
- If the two lists show the comment attribute as 0 in all of its entries, it is not because the data is 0. I think it's probably caused by a bug in the JSSoup library because it does not generate a soup object correctly. This behaviour rarely happens 
but just so you know.  
 
