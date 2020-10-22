const homePagePages = require("../pages/homePage.pages")
const sjgFieldbookPages = require("../pages/sjgFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying identify functionality", function(){

    it("TC_006 Identify functionality for division locations", ()=>{

        sjgFieldbookPages.searchAddress('maryland ter, atlantic city, nj')
        browser.pause(10000)
        sjgFieldbookPages.clickOnIdentify()
        browser.pause(10000)
        const logo = $('//*[@id="printButton2_label"]')
        //browser.moveToElement(logo, 25, 97)
        browser.pause(3000)
        logo.click({ x: 0, y: 48 })
        browser.pause(9000)
        assert.equal($('//*[@id="identifyLayerName"]/b').getText(), 'Main Assets')

              
    })

})