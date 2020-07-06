const homePagePages = require("../pages/homePage.pages")
const sjgFieldbookPages = require("../pages/sjgFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying Google StreetView", function(){

    it("Should verify Google streetview", ()=>{

        browser.url('/')
        browser.maximizeWindow()
        homePagePages.homePageSubmit('mmishra' , 'password=1')
        homePagePages.clickSJGTest()
        browser.pause(20000)
        browser.switchWindow('South Jersey Gas')
        sjgFieldbookPages.searchAddress('2701 Shore Road, Ocean View, NJ 08230, USA')
        
        
        sjgFieldbookPages.clickOnStreetViewBtn()
        var logo = $('#Powerbireports_label')
        const location = logo.getLocation();
        browser.pause(9000)
        logo.click({ x: 227, y: 295})
        browser.pause(7000)

        /*
        ***Validating streetView window is displayed
        ***Validating that the streetView address displayed is same as that the address searched
        */
        var streetView_street = sjgFieldbookPages.addressDisplayedStreetView()
        assert.isTrue($('#svWindow_wnd_title').isDisplayed())
        assert.equal('2701 Shore Road', streetView_street)          
               
    })

})