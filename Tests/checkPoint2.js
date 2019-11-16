var cp2 = {}
module.exports = {
    beforeEach: browser => {
        cp2 = browser.page.checkPoint2Page()
        cp2
            .navigate()
    },
    after: browser => {
        cp2
            .end()
    },
    'odds and evens test': browser => {
        cp2
        .useXpath()
        .waitForElementVisible('@evenOddInput')
        .click('@evenOddInput')
        .setValue('@evenOddInput', '2,3,5,6,8,1')
        .verify.valueContains('@evenOddInput', "2,3,5,6,8,1")
        .click('@evenOddSubmit')
        .waitForElementVisible('@evenResults')
        .expect.element('@evenResults').text.to.contain('[2,6,8]')
        cp2
        .useXpath()
        .expect.element('@oddResults').text.to.contain('3,5,1')
    },
    'Filter Object': browser => {
        cp2
        .useXpath()
        .waitForElementVisible('@filterObjectInput')
        .click('@filterObjectInput')
        .setValue('@filterObjectInput', 'name')
        .verify.valueContains('@filterObjectInput', "name")
        .click('@filterObjectSubmit')
        .waitForElementVisible('@filterObjectResults')
    },
    'Filter String': browser => {
        cp2
        .useXpath()
        .waitForElementVisible('@filterStringInput')
        .click('@filterStringInput')
        .setValue('@filterStringInput', 'yl')
        .verify.valueContains('@filterStringInput', 'yl')
        .click('@filterStringSubmit')
        .waitForElementVisible('@filterStringResults')
        .expect.element('@filterStringResults').text.to.contain('Tyler')
    },
    'palindrome true': browser => {
        cp2
        .useXpath()
        .waitForElementVisible('@palindromeInput')
        .click('@palindromeInput')
        .setValue('@palindromeInput', 'racecar')
        .verify.valueContains('@palindromeInput', 'racecar')
        .click('@palindromeSubmit')
        .waitForElementVisible('@palindromeResults')
        .expect.element('@palindromeResults').text.to.contain('true')
    },
    'palindrome false': browser => {
        cp2
        .useXpath()
        .waitForElementVisible('@palindromeInput')
        .click('@palindromeInput')
        .setValue('@palindromeInput', 'racingcar')
        .verify.valueContains('@palindromeInput', 'racingcar')
        .click('@palindromeSubmit')
        .waitForElementVisible('@palindromeResults')
        .expect.element('@palindromeResults').text.to.contain('false')
    },
    'a little sum sum': browser => {
        cp2
        .useXpath()
        .waitForElementVisible('@sumInput1')
        .click('@sumInput1')
        .setValue('@sumInput1', '4')
        .verify.valueContains('@sumInput1', '4')
        .setValue('@sumInput2', '1')
        .verify.valueContains('@sumInput2', '1')
        .click('@sumSubmit')
        .expect.element('@sumResults').text.to.contain('5')
        cp2
        .useXpath()
        .click('@sumInput1')
        .clearValue('@sumInput1')
        .setValue('@sumInput1', '5')
        .verify.valueContains('@sumInput1', '5')
        .click('@sumSubmit')
        .expect.element('@sumResults').text.to.contain('6')
    }
}