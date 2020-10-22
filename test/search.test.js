const homePagePages = require("../pages/homePage.pages")
const sjgFieldbookPages = require("../pages/sjgFieldbook.pages")
const { assert, expect } = require("chai")
const { reverseGeoCodeSearch } = require("../pages/sjgFieldbook.pages")

describe("Verifying feature and reverse geocode", function(){

    it("Should verify tooltip after search", ()=>{

        sjgFieldbookPages.featureSearchMainAsset('CI2ZB198')
        browser.pause(7000)
       
        /*
        ***Validating tooltip text for the Main Asset searched for       
        */    
        var logo = $('//*[@id="Powerbireports_label"]') 
        console.log(logo.getLocation())
        logo.moveTo({x: 600,y: 200})
        browser.pause(9000)
        logo.click({ x: 600, y: 200 })
        browser.pause(7000)
        /*
        ***Validating reverse geocode search      
        */ 
        sjgFieldbookPages.reverseGeoCodeSearch()
        browser.pause(9000)
        logo.click({ x: 600, y: 200})
        var x_loc = $('//*[@id="kendoSearchGrid"]/div[4]/table/tbody/tr/td[2]').getText()
        var y_loc = $('//*[@id="kendoSearchGrid"]/div[4]/table/tbody/tr/td[3]').getText()
        assert.isNotNull(x_loc , 'x coordinate is null')
        assert.isNotNull(y_loc , 'y coordinate is null')
        browser.pause(9000)   
    })

})