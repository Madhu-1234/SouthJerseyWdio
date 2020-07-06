const homePagePages = require("../pages/homePage.pages")
const sjgFieldbookPages = require("../pages/sjgFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying identify functionality", function(){

    it("TC_006 Identify functionality for valve", ()=>{

        browser.url('/')
        browser.maximizeWindow()
        homePagePages.homePageSubmit('mmishra' , 'password=1')
        homePagePages.clickSJGTest()
        browser.pause(20000)
        browser.switchWindow('South Jersey Gas')
        
        sjgFieldbookPages.searchAddress('maryland ter, atlantic city')
        browser.pause(10000)
        sjgFieldbookPages.clickOnIdentify()
        browser.pause(10000)
        const logo = $('//*[@id="dijit_form_ComboButton_0_arrow"]')
        const location = logo.getLocation();
        console.log(location);
        browser.moveToElement(logo, 25, 97)
        browser.pause(9000)
        logo.click({ x: 25, y: 97 })
        browser.pause(9000)
        assert.equal($('//*[@id="identifyLayerName"]/b').getText(), 'Valve Assets')

              
    })

})