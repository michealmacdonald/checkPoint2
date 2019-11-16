module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        evenOddInput: {
            selector: '(//input[@class="inputLine"])[1]',
            locateStrategy: 'xpath'
        },
        evenResults: {
            selector: '//span[@name="evenResults"]',
            locateStrategy: 'xpath'
        },
        oddResults: {
            selector: '//span[@name="oddResults"]',
            locateStrategy: 'xpath'
        },
        filterObjectInput: {
            selector: '(//input[@class="inputLine"])[2]',
            locateStrategy: 'xpath'
        },
        filterObjectResults: {
            selector: '//span[@name="objectFilterResults"]',
            locateStrategy: 'xpath'
        },
        filterStringInput: {
            selector: '(//input[@class="inputLine"])[3]',
            locateStrategy: 'xpath'
        },
        filterStringResults: {
            selector: '//span[@name="nameFilterResults"]',
            locateStrategy: 'xpath'
        },
        palindromeInput: {
            selector: '(//input[@class="inputLine"])[4]',
            locateStrategy: 'xpath'
        },
        palindromeResults: {
            selector: '//span[@name="palindromeResults"]',
            locateStrategy: 'xpath'
        },
        sumInput1: {
            selector: '//input[@name="sumInput1"]',
            locateStrategy: 'xpath'
        },
        sumInput2: {
            selector: '//input[@name="sumInput2"]',
            locateStrategy: 'xpath'
        },
        sumResults: {
            selector: '//span[@name="sumResults"]',
            locateStrategy: 'xpath'
        },
        evenOddSubmit: {
            selector: '(//button[@class="confirmationButton"])[1]',
            locateStrategy: 'xpath'
        },
        filterObjectSubmit: {
            selector: '(//button[@class="confirmationButton"])[2]',
            locateStrategy: 'xpath'
        },
        filterStringSubmit: {
            selector: '(//button[@class="confirmationButton"])[3]',
            locateStrategy: 'xpath'
        },
        palindromeSubmit: {
            selector: '(//button[@class="confirmationButton"])[4]',
            locateStrategy: 'xpath'
        },
        sumSubmit: {
            selector: '(//button[@class="confirmationButton"])[5]',
            locateStrategy: 'xpath'
        },



    }
}