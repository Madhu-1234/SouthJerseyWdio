const homePagePages = require("../pages/homePage.pages")
const sjgFieldbookPages = require("../pages/sjgFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying print functionality", function(){

    it.skip("Should display a new pdf tab for print", ()=>{

        sjgFieldbookPages.zoomToEnableLegend()
        sjgFieldbookPages.clickBaseMap()
        /*
        ***Validating different basemaps are displayed
        */
        browser.pause(4000)
        sjgFieldbookPages.print.click()
    })

})