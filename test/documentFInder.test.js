const homePagePages = require("../pages/homePage.pages")
const sjgFieldbookPages = require("../pages/sjgFieldbook.pages")
const { assert, expect } = require("chai")
const { checkMainAsbuiltCount } = require("../pages/sjgFieldbook.pages")

describe("Verifying document finder count displayed", function(){

    it("verify main asbuilt count by town and street", ()=>{

        browser.url('/')
        homePagePages.homePageSubmit('mmishra' , 'password=1')
        homePagePages.clickSJGTest()
        browser.pause(20000)
        browser.switchWindow('South Jersey Gas')
        browser.pause(15000)
        sjgFieldbookPages.zoomToEnableLegend()
        sjgFieldbookPages.documents.click()
        /*
        ***Validating different basemaps are displayed
        */
        sjgFieldbookPages.searchByTownStreet('Cape May City' ,'Baltimore Ave')
        browser.pause(3000)
        sjgFieldbookPages.checkMainAsbuiltCount()
        browser.pause(10000)
        
    })

})