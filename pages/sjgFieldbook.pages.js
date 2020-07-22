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
    get print() {return $('//*[@id="dijit_form_ComboButton_1_label"]') }
    /*
    ***Object repository of legend elements
    */
    get allOtherValues_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_4"]/div/span/span[2]')}
    get approved_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_5"]/div/span/span[2]')}
    get arrivedOnSite_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_6"]/div/span/span[2]')}
    get canceled_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_7"]/div/span/span[2]')}
    get closed_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_8"]/div/span/span[2]')}
    get completed_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_9"]/div/span/span[2]')}
    get designComplete_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_10"]/div/span/span[2]')}
    get editedInHistory_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_11"]/div/span/span[2]')}
    get fieldComplete_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_12"]/div/span/span[2]')}
    get hold_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_13"]/div/span/span[2]')}
    get inDesign_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_14"]/div/span/span[2]')}
    get inProgressStart_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_15"]/div/span/span[2]')}
    get pending_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_16"]/div/span/span[2]')}
    get permitting_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_17"]/div/span/span[2]')}
    get reviewCompletedWorkOrder_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_18"]/div/span/span[2]')}
    get scheduled_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_19"]/div/span/span[2]')}   
    get supervisorComplete_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_20"]/div/span/span[2]')}   
    get supervisorComplete_2SupReq_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_21"]/div/span/span[2]')} 
    get suspend_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_22"]/div/span/span[2]')}  
    get waitOnApproval_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_23"]/div/span/span[2]')} 
    get waitOnMaterial_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_24"]/div/span/span[2]')} 
    get waitToBeSched_points_legend() {return $('//*[@id="agsjs_dijit__TOCNode_25"]/div/span/span[2]')} 


    get allOtherValues_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_30"]/div/span/span[2]')}
    get approved_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_31"]/div/span/span[2]')}
    get arrivedOnSite_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_32"]/div/span/span[2]')}
    get canceled_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_33"]/div/span/span[2]')}
    get closed_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_34"]/div/span/span[2]')}
    get completed_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_35"]/div/span/span[2]')}
    get designComplete_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_36"]/div/span/span[2]')}
    get editedInHistory_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_37"]/div/span/span[2]')}
    get fieldComplete_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_38"]/div/span/span[2]')}
    get hold_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_39"]/div/span/span[2]')}
    get inDesign_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_40"]/div/span/span[2]')}
    get inProgresStart_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_41"]/div/span/span[2]')}
    get pending_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_42"]/div/span/span[2]')}
    get permitting_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_43"]/div/span/span[2]')}
    get reviewCompletedWorkOrder_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_44"]/div/span/span[2]')}
    get scheduled_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_45"]/div/span/span[2]')}
    get supervisorComplete_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_46"]/div/span/span[2]')}
    get supervisorComplete_2SupReqd_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_47"]/div/span/span[2]')}
    get suspend_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_48"]/div/span/span[2]')}
    get waitingOnApproval_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_49"]/div/span/span[2]')}
    get waitingOnMaterial_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_50"]/div/span/span[2]')}
    get waitingToBeScheduled_polygons_legend() {return $('//*[@id="agsjs_dijit__TOCNode_51"]/div/span/span[2]')}

    get premiseLocations_legend() {return $('//*[@id="agsjs_dijit__TOCNode_55"]/div/span/span[2]')}
    get nonInsulators_legend() {return $('//*[@id="agsjs_dijit__TOCNode_57"]/div/span/span[2]')}
    get aST25_legend() {return $('//*[@id="agsjs_dijit__TOCNode_58"]/div/span/span[2]')}
    get aST26_legend() {return $('//*[@id="agsjs_dijit__TOCNode_59"]/div/span/span[2]')}
    get aST57_legend() {return $('//*[@id="agsjs_dijit__TOCNode_60"]/div/span/span[2]')}
    get aST77_legend() {return $('//*[@id="agsjs_dijit__TOCNode_61"]/div/span/span[2]')}
    get insul_legend() {return $('//*[@id="agsjs_dijit__TOCNode_62"]/div/span/span[2]')}
    get meterAsset_legend() {return $('//*[@id="agsjs_dijit__TOCNode_63"]/div/span/span[2]')}
    get valveAsset_legend() {return $('//*[@id="agsjs_dijit__TOCNode_64"]/div/span/span[2]')}
    
    get rectifierAsset_legend() {return $('//*[@id="agsjs_dijit__TOCNode_65"]/div/span/span[2]')}
    get dripAsset_legend() {return $('//*[@id="agsjs_dijit__TOCNode_66"]/div/span/span[2]')}
    get unrepairedLeakLocation_legend() {return $('//*[@id="agsjs_dijit__TOCNode_67"]/div/span/span[2]')}
    get repairedLeakLocation_legend() {return $('//*[@id="agsjs_dijit__TOCNode_68"]/div/span/span[2]')}
    get serviceAddresses_legend() {return $('//*[@id="agsjs_dijit__TOCNode_69"]/div/span/span[2]')}
    get serviceAddressesLocations_legend() {return $('//*[@id="agsjs_dijit__TOCNode_70"]/div/span/span[2]')}
    
    get cpSystemsLocations_legend() {return $('//*[@id="agsjs_dijit__TOCNode_72"]/div/span/span[2]')}
    get pipeLineSegmentLocations_legend() {return $('//*[@id="agsjs_dijit__TOCNode_73"]/div/span/span[2]')}
    get serviceAssetsOperating_legend() {return $('//*[@id="agsjs_dijit__TOCNode_74"]/div/span/span[2]')}
    get serviceAssetsRetired_legend() {return $('//*[@id="agsjs_dijit__TOCNode_78"]/div/span/span[2]')}
     
    get null_mainAssets_legend() {return $('//*[@id="agsjs_dijit__TOCNode_80"]/div/span/span[2]')}
    get lpLow_mainAssets_legend() {return $('//*[@id="agsjs_dijit__TOCNode_81"]/div/span/span[2]')}
    get mpMed_mainAssets_legend() {return $('//*[@id="agsjs_dijit__TOCNode_82"]/div/span/span[2]')}
    get hpHigh_mainAssets_legend() {return $('//*[@id="agsjs_dijit__TOCNode_83"]/div/span/span[2]')}

    get epElevated_legend() {return $('//*[@id="agsjs_dijit__TOCNode_84"]/div/span/span[2]')}
    get trans_legend() {return $('//*[@id="agsjs_dijit__TOCNode_85"]/div/span/span[2]')}
    get farmTapLocations_legend() {return $('//*[@id="agsjs_dijit__TOCNode_86"]/div/span/span[2]')}
    get blockValveLocations_legend() {return $('//*[@id="agsjs_dijit__TOCNode_87"]/div/span/span[2]')}
    get distributionRegStationLoc_legend() {return $('//*[@id="agsjs_dijit__TOCNode_88"]/div/span/span[2]')}
    get districtRegStationLoc_legend() {return $('//*[@id="agsjs_dijit__TOCNode_89"]/div/span/span[2]')}
    get gateStationLocations_legend() {return $('//*[@id="agsjs_dijit__TOCNode_90"]/div/span/span[2]')}
    get transmissionCustLoc_legend() {return $('//*[@id="agsjs_dijit__TOCNode_91"]/div/span/span[2]')}
    get divisionLocations_legend() {return $('//*[@id="agsjs_dijit__TOCNode_93"]/div/span/span[2]')}
    get municipalityLocations_legend() {return $('//*[@id="agsjs_dijit__TOCNode_94"]/div/span/span[2]')}
    get plateMapLocations_legend() {return $('//*[@id="agsjs_dijit__TOCNode_95"]/div/span/span[2]')}

    get pinelandsBoundary_legend() {return $('//*[@id="agsjs_dijit__TOCNode_97"]/div/span/span[2]')}
    get cafraBoundary_legend() {return $('//*[@id="agsjs_dijit__TOCNode_98"]/div/span/span[2]')}
    get roadCenterlines_legend() {return $('//*[@id="agsjs_dijit__TOCNode_99"]/div/span/span[2]')}
    get parcelLabels_legend() {return $('//*[@id="agsjs_dijit__TOCNode_116"]/div/span/span[2]')}
    get parcels_legend() {return $('//*[@id="agsjs_dijit__TOCNode_117"]/div/span/span[2]')}
    get moritoriumLocations_legend() {return $('//*[@id="agsjs_dijit__TOCNode_118"]/div/span/span[2]')}
    get moritoriumLocationsNotReady_legend() {return $('//*[@id="agsjs_dijit__TOCNode_119"]/div/span/span[2]')}
    get femaFloodHazardLayerGroup_legend() {return $('//*[@id="agsjs_dijit__TOCNode_120"]/div/span/span[2]')}
    get tideLandLayer_legend() {return $('//*[@id="agsjs_dijit__TOCNode_155"]/div/span/span[2]')}
    get landUseLandCoverWetland_legend() {return $('//*[@id="agsjs_dijit__TOCNode_156"]/div/span/span[2]')}
    get sjgPlateMosaics_legend() {return $('//*[@id="agsjs_dijit__TOCNode_0"]/div[1]/span/span[2]')}

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
    get featureSearchDrpdown() {return $('//*[@id="featureSearchRow"]/div[1]/span')}
    get featureSearchFieldDrpdown() {return $('//*[@id="featureSearchRow"]/div[2]/span')}
    get featureRadioBtn() {return $('//*[@id="featureRadionButton"]/div')}
    get reverseGeoCodeRadioBtn(){return $('//*[@id="reverseGeocodeButton"]')}

    



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
                  
        browser.pause(4000)
        $('//*[@id="advanceSearch"]/div/div[1]/div[2]/span/span').click()
        $('//*[@id="advTown-list"]/span/input').setValue(town)
        browser.pause(2000)
        browser.keys('Enter')


        browser.pause(4000)
        $('//*[@id="advanceSearch"]/div/div[1]/div[3]/span/span').click()
        $('//*[@id="advStreet-list"]/span/input').setValue(street)
        browser.pause(2000)
        browser.keys('Enter')

        browser.pause(5000)
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

    featureSearchMainAsset(fin){
        this.search.click()
        browser.pause(3000)
        this.featureRadioBtn.click()
        browser.pause(2000)
        this.featureSearchDrpdown.click()
        browser.pause(2000)
        this.featureSearchDrpdown.addValue('M')
        browser.pause(2000)
        browser.keys('Enter')

        this.featureSearchFieldDrpdown.click()
        browser.pause(3000)
        this.featureSearchFieldDrpdown.addValue('F')
        browser.pause(3000)
        this.featureSearchFieldDrpdown.click({ x: 340, y: 2})
        browser.pause(3000)

        this.searchBar.setValue(fin)
        this.searchButton_searchWindow.click()
        this.searchGridResult.click()
        this.searchWindowClose.click()                  
        
    }

    tooltipTextDisplayed(){
        var finText = $('//*[@id="tooltipDialog"]/div[1]/div/div').getText()
        return finText
    }
    reverseGeoCodeSearch(){
        this.search.click()
        browser.pause(3000)
        this.reverseGeoCodeRadioBtn.click()
        browser.pause(2000)
       
    }
}

module.exports = new sjgFieldbookPage()