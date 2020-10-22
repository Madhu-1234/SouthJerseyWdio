const homePagePages = require("../pages/homePage.pages")
const sjgFieldbookPages = require("../pages/sjgFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying print functionality", function(){

    it("Should display and print preview window ", ()=>{

        
        /*
        ***Validating print button is clickable and print preview screen is displayed
        */
            sjgFieldbookPages.print.waitForDisplayed()
            assert.equal(true, sjgFieldbookPages.print.isClickable())
            browser.pause(3000)
            sjgFieldbookPages.print.click()
            browser.pause(8000)
            
            var ID = []
            ID = browser.getWindowHandles()
            var size = ID.length
            assert.equal(size, 3)
            
    })

})