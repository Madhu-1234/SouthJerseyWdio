const homePagePages = require("../pages/homePage.pages")
const sjgFieldbookPages = require("../pages/sjgFieldbook.pages")
const { assert, expect } = require("chai")
const { checkMainAsbuiltCount } = require("../pages/sjgFieldbook.pages")

describe("Verifying document finder count displayed", function(){

    it("verify main asbuilt,service asbuilt count by town and street and advanced search", ()=>{

        sjgFieldbookPages.documents.click()
        /*
        ***Validating Count of Main Asbuilt in the top of the page is same as that displayed for total records
        */
        sjgFieldbookPages.searchByTownStreetDocumentFinder('Cape May City' ,'Baltimore Ave')
        browser.pause(3000)
        var mainAsbCountHeader = sjgFieldbookPages.checkMainAsbuiltCountDocumentHeader() //count for main asbuilt in documents tab
        browser.pause(10000)
        var mainAsbCountFooter = sjgFieldbookPages.checkFooterCount()
        assert.equal(mainAsbCountFooter, mainAsbCountHeader)
        sjgFieldbookPages.searchByTownStreetDocumentFinder('Cape May City' ,'Falcon Ridge Rd')
        browser.pause(3000)
        var serviceAsbCountHeader = sjgFieldbookPages.checkServiceAsbuiltCountDocumentHeader() //count for service asbuilt in documents tab
        browser.pause(10000)
        var serviceAsbCountFooter = sjgFieldbookPages.checkFooterCount()
        assert.equal(serviceAsbCountFooter, serviceAsbCountHeader)

        const countHeader_advSearch = sjgFieldbookPages.checkAdvancedSearchCountHeader('ATLANTIC', 'ATLANTIC CITY', 'INDEPENDENCE AVE', 'Main Asbuilt')
        const countFooter_advSearch = sjgFieldbookPages.checkFooterCount_advSearch()
        assert.equal(countHeader_advSearch, countFooter_advSearch)
        
        
    })

   
    
    
   it.skip("verify document finder advanced search", ()=>{

    browser.url('/')
    homePagePages.clickSJGTest()
    browser.pause(20000)
    browser.switchWindow('South Jersey Gas')
    //browser.pause(10000)
    sjgFieldbookPages.documents.click()
    const countHeader_advSearch = sjgFieldbookPages.checkAdvancedSearchCountHeader('ATLANTIC', 'ATLANTIC CITY', 'INDEPENDENCE AVE', 'Main Asbuilt')
    const countFooter_advSearch = sjgFieldbookPages.checkFooterCount_advSearch()
    assert.equal(countHeader_advSearch, countFooter_advSearch)
    
    
})



})