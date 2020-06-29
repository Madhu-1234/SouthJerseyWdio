class sjgFieldbookPage{

    /*
    ***Object repository of main menu options
    */
    get legend() { return $('#legendButton_label') }
    get zoomIn() { return $('//*[@id="map_zoom_slider"]/div[1]/span')}
    get baseMap() { return $('//*[@id="webmap-toolbar-Basemap1"]/button') }
    get documents() { return $('#dmsButton_label') }


    /*
    ***Object repository of legend elements
    */
    get valveAsset_legend() {return $('//*[@id="agsjs_dijit__TOCNode_64"]/div/span/span[2]')}
    get meterAsset_legend() {return $('//*[@id="agsjs_dijit__TOCNode_63"]/div/span/span[2]')}
    get rectifierAsset_legend() {return $('//*[@id="agsjs_dijit__TOCNode_65"]/div/span/span[2]')}
    get dripAsset_legend() {return $('//*[@id="agsjs_dijit__TOCNode_66"]/div/span/span[2]')}
    

    /*
    ***Object repository of basemap elements
    */
    get googleHybrid_baseMap() {return $('//*[@id="galleryNode_GoogleHybrid"]/a/img')}
    get googleRoad_baseMap() {return $('//*[@id="galleryNode_GoogleRoad"]/a/img')}
    get googleSatellite_baseMap() {return $('//*[@id="galleryNode_GoogleSatellite"]/a/img')}
    get streets_baseMap() {return $('//*[@id="galleryNode_Streets"]/a/img')}
    get topographic_baseMap() {return $('//*[@id="galleryNode_Topographic"]/a/img')}
    get openStreetMap_baseMap() {return $('//*[@id="galleryNode_OpenStreetmap"]/a/img')}
    get usaTopoMap_baseMap() {return $('//*[@id="galleryNode_USATopoMaps"]/a/img')}
    get usgsNationalMap_baseMap() {return $('//*[@id="galleryNode_USGSNationalMap"]/a/img')}
    get terrainWithLabels_baseMap() {return $('//*[@id="galleryNode_Terrain"]/a/img')}
    get oceans_baseMap() {return $('//*[@id="galleryNode_Oceans"]/a/img')}
    get nationalGeo_baseMap() {return $('//*[@id="galleryNode_NationalGeographic"]/a/img')}
    get darkGreyCanvas_baseMap() {return $('//*[@id="galleryNode_DarkGrayCanvas"]/a/img')}
    get lightGreyCanvas_baseMap() {return $('//*[@id="galleryNode_LightGrayCanvas"]/a/img')}
    get esriClarity_baseMap() {return $('//*[@id="galleryNode_ESRIClarity"]/a/img')}
    
    /*
    ***Object repository of document finder elements
    */
    get towns() {return $('=Towns')}



    clickLegend(){        
        this.legend.click()
    }

    zoomToEnableLegend(){
        var i 
        for( i=0;i<10;i++){
            this.zoomIn.click()
        }
    }

    scrollToValve(){

        this.valveAsset_legend.moveTo()
        
    }

    clickBaseMap(){
        this.baseMap.click()
    }

   
    
    searchByTownStreet(townName, streetName){
         this.towns.click()
         browser.pause(5000)
         var tname = '='+townName
         var sname = '='+streetName
         $(tname).click()
         browser.pause(7000)
         $(sname).click()


    }
    checkMainAsbuiltCount(){
        var MainAsbuiltText = $('*=Main').getText()
        var count = MainAsbuiltText.substring(13);
        console.log("the count is "+count)
        
    }

    
}

module.exports = new sjgFieldbookPage()