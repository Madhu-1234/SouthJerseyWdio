class sjgFieldbookPage{

    /*
    ***Object repository of main menu options
    */
    get legend() { return $('#legendButton_label') }
    get zoomIn() { return $('//*[@id="map_zoom_slider"]/div[1]/span')}
    get baseMap() { return $('//*[@id="webmap-toolbar-Basemap1"]/button') }
    get documents() { return $('#dmsButton_label') }
    get search() { return $('#searchButton') }
    get identifyButton() { return $('#identifyButton') }
    get streetView() { return $('#streetviewButton_label') }
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
    get advanceSearch() {return $('//*[@id="tabSearch"]')}
    get mainAsbuiltLink() {return $('*=Main')}
    get serviceAsbuiltLink() {return $('*=Service')}

    /*
    ***Object repository of searchbox elements
    */
    get searchBar() {return $('#searchBox')}
    get searchGridResult() {return $('//*[@id="kendoSearchGrid"]/div[4]/table/tbody/tr')}
    get searchButton_searchWindow() {return $('#searchWidgetButton')}
    get searchWindowClose() {return $('/html/body/div[12]/div[1]/div/a[2]/span')}
    



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

   
    
    searchByTownStreetDocumentFinder(townName, streetName){
         this.towns.click()
         browser.pause(5000)
         var tname = '='+townName
         var sname = '='+streetName
         $(tname).click()
         browser.pause(7000)
         $(sname).click()


    }
    checkMainAsbuiltCountDocumentHeader(){
        var mainAsbuiltText = this.mainAsbuiltLink.getText()
        var count = mainAsbuiltText.substring(13);
        console.log("the count is "+count)
        this.mainAsbuiltLink.waitForExist()
        this.mainAsbuiltLink.click()
        return count 
        
    }

    /**
     *Check count of documents mentioned in the foooter in Documents tab
     */

    checkFooterCount(){
        
        var string1 = $('//*[@id="kendoPSEGDocumentsGrid"]/div[5]/span[2]').getText()
        var temp = string1.split(" ")
        console.log(temp[4])
        return temp[4]
             
    }

    checkFooterCount_advSearch(){
        var string1 = $('//*[@id="AdvDocumentsGrid"]/div[5]/span[2]').getText()
        var temp = string1.split(" ")
        console.log(temp[4])
        return temp[4]
    }

    checkServiceAsbuiltCountDocumentHeader(){
        var serviceAsbuiltText = this.serviceAsbuiltLink.getText()
        var count = serviceAsbuiltText.substring(16);
        console.log("the count is "+count)
        //browser.pause(7000)
        this.serviceAsbuiltLink.waitForExist()
        this.serviceAsbuiltLink.click()
        return count 
        
    }

    checkAdvancedSearchCountHeader(division, town, street, document){
        browser.pause(5000)
        this.advanceSearch.click();
        browser.pause(4000)
        $('//*[@id="advanceSearch"]/div/div[1]/div[1]/span/span').click()
        $('//*[@id="advDivision-list"]/span/input').setValue(division)
        browser.pause(2000)
        browser.keys('Enter')
                  
        browser.pause(2000)
        $('//*[@id="advanceSearch"]/div/div[1]/div[2]/span/span').click()
        $('//*[@id="advTown-list"]/span/input').setValue(town)
        browser.pause(2000)
        browser.keys('Enter')


        browser.pause(2000)
        $('//*[@id="advanceSearch"]/div/div[1]/div[3]/span/span').click()
        $('//*[@id="advStreet-list"]/span/input').setValue(street)
        browser.pause(2000)
        browser.keys('Enter')

        browser.pause(2000)
        $('//*[@id="advanceSearch"]/div/div[1]/div[4]/span/span').click()
        $('//*[@id="advDocument-list"]/span/input').setValue(document)
        browser.pause(2000)
        browser.keys('Enter')

        $('//*[@id="advFind"]').click()

        browser.pause(3000)

        const countHeader_AdvSearch = $('//*[@id="lblCount"]').getText()
        console.log(countHeader_AdvSearch)
        return countHeader_AdvSearch
              
        
    }

    searchAddress(address){
        this.search.click()
        //this.searchBar.doubleClick()
        browser.pause(3000)
        this.searchBar.addValue(address)
        browser.pause(5000)
        this.searchButton_searchWindow.click()
        this.searchGridResult.click()
        this.searchWindowClose.click()        
    }

    clickOnIdentify(){
        this.identifyButton.click()
    }

    clickOnStreetViewBtn(){
        this.streetView.click()
        browser.pause(5000)
    }

    addressDisplayedStreetView(){

        var streetAddress = $('//*[@id="divAddressText"]/b').getText()
        //var cityAddress = $('//*[@id="divAddressText"]/font').getText()
        return streetAddress
    }


       
}

module.exports = new sjgFieldbookPage()