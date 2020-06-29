const homePagePages = require("../pages/homePage.pages")
const sjgFieldbookPages = require("../pages/sjgFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying legend components", function(){

    it("Should verify legend layer Work Order Points", ()=>{

        browser.url('/')
        homePagePages.homePageSubmit('mmishra' , 'password=1')
        homePagePages.clickSJGTest()
        browser.pause(20000)
        browser.switchWindow('South Jersey Gas')
        browser.pause(15000)
        sjgFieldbookPages.zoomToEnableLegend()
        sjgFieldbookPages.clickLegend()
        sjgFieldbookPages.valveAsset_legend.waitForDisplayed()
        //sjgFieldbookPages.scrollToValve()
        /*
        ***Validating different layers are displayed in the legend pane
        */
        assert.equal(true, sjgFieldbookPages.valveAsset_legend.isDisplayed())
        console.log(sjgFieldbookPages.valveAsset_legend.getText())
        assert.equal(true, sjgFieldbookPages.meterAsset_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.rectifierAsset_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.dripAsset_legend.isDisplayed())
        //browser.debug()
    })

})