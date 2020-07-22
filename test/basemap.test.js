const homePagePages = require("../pages/homePage.pages")
const sjgFieldbookPages = require("../pages/sjgFieldbook.pages")
const { assert, expect } = require("chai")

describe("Verifying basemap components", function(){

    it("Should verify different components of the basemap", ()=>{

        sjgFieldbookPages.zoomToEnableLegend()
        sjgFieldbookPages.clickBaseMap()
        /*
        ***Validating different basemaps are displayed
        */
        browser.pause(4000)
        assert.equal(true, sjgFieldbookPages.googleHybrid_baseMap.isClickable())
        
        assert.equal(true, sjgFieldbookPages.googleRoad_baseMap.isClickable())
        assert.equal(true, sjgFieldbookPages.streets_baseMap.isClickable())
        assert.equal(true, sjgFieldbookPages.topographic_baseMap.isClickable())
        assert.equal(true, sjgFieldbookPages.openStreetMap_baseMap.isClickable())
        assert.equal(true, sjgFieldbookPages.usaTopoMap_baseMap.isClickable())
        assert.equal(true, sjgFieldbookPages.usgsNationalMap_baseMap.isClickable())
        assert.equal(true, sjgFieldbookPages.terrainWithLabels_baseMap.isClickable())
        assert.equal(true, sjgFieldbookPages.oceans_baseMap.isClickable())
        assert.equal(true, sjgFieldbookPages.nationalGeo_baseMap.isClickable())
        assert.equal(true, sjgFieldbookPages.darkGreyCanvas_baseMap.isClickable())
        assert.equal(true, sjgFieldbookPages.lightGreyCanvas_baseMap.isClickable())
        assert.equal(true, sjgFieldbookPages.esriClarity_baseMap.isClickable())
      
    })

})
