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
    get print() {return $('//*[@id="printButton2_label"]') }
    /*
    ***Object repository of legend elements
    */
    get allOtherValues_points_legend() {return $('(//span[text()="<all other values>"])[1]')}
    get approved_points_legend() {return $('(//span[text()="Approved"])[1]')}
    get arrivedOnSite_points_legend() {return $('(//span[text()="Arrived on Site"])[1]')}
    get canceled_points_legend() {return $('(//span[text()="Canceled"])[1]')}
    get closed_points_legend() {return $('(//span[text()="Closed"])[1]')}
    get completed_points_legend() {return $('(//span[text()="Completed"])[1]')}
    get designComplete_points_legend() {return $('(//span[text()="Design Complete"])[1]')}
    get editedInHistory_points_legend() {return $('(//span[text()="Edited in History"])[1]')}
    get fieldComplete_points_legend() {return $('(//span[text()="Field Complete"])[1]')}
    get hold_points_legend() {return $('(//span[text()="Hold"])[1]')}
    get inDesign_points_legend() {return $('(//span[text()="In Design"])[1]')}
    get inProgressStart_points_legend() {return $('(//span[text()="In Progress (Start)"])[1]')}
    get pending_points_legend() {return $('(//span[text()="Pending"])[1]')}
    get permitting_points_legend() {return $('(//span[text()="Permitting"])[1]')}
    get reviewCompletedWorkOrder_points_legend() {return $('(//span[text()="Review Completed Work Order"])[1]')}
    get scheduled_points_legend() {return $('(//span[text()="Scheduled"])[1]')}   
    get supervisorComplete_points_legend() {return $('(//span[text()="Supervisor Complete"])[1]')}   
    get supervisorComplete_2SupReq_points_legend() {return $('(//span[text()="Supervisor Complete (2 Supervisors Required)"])[1]')} 
    get suspend_points_legend() {return $('(//span[text()="Suspend"])[1]')}  
    get waitOnApproval_points_legend() {return $('(//span[text()="Waiting on Approval"])[1]')} 
    get waitOnMaterial_points_legend() {return $('(//span[text()="Waiting on Material"])[1]')} 
    get waitToBeSched_points_legend() {return $('(//span[text()="Waiting to be Scheduled"])[1]')} 


    get allOtherValues_polygons_legend() {return $('(//span[text()="<all other values>"])[2]')}
    get approved_polygons_legend() {return $('(//span[text()="Approved"])[2]')}
    get arrivedOnSite_polygons_legend() {return $('(//span[text()="Arrived on Site"])[2]')}
    get canceled_polygons_legend() {return $('(//span[text()="Canceled"])[2]')}
    get closed_polygons_legend() {return $('(//span[text()="Closed"])[2]')}
    get completed_polygons_legend() {return $('(//span[text()="Completed"])[2]')}
    get designComplete_polygons_legend() {return $('(//span[text()="Design Complete"])[2]')}
    get editedInHistory_polygons_legend() {return $('(//span[text()="Edited in History"])[2]')}
    get fieldComplete_polygons_legend() {return $('(//span[text()="Field Complete"])[2]')}
    get hold_polygons_legend() {return $('(//span[text()="Hold"])[2]')}
    get inDesign_polygons_legend() {return $('(//span[text()="In Design"])[2]')}
    get inProgresStart_polygons_legend() {return $('(//span[text()="In Progress (Start)"])[2]')}
    get pending_polygons_legend() {return $('(//span[text()="Pending"])[2]')}
    get permitting_polygons_legend() {return $('(//span[text()="Permitting"])[2]')}
    get reviewCompletedWorkOrder_polygons_legend() {return $('(//span[text()="Review Completed Work Order"])[2]')}
    get scheduled_polygons_legend() {return $('(//span[text()="Scheduled"])[2]')}
    get supervisorComplete_polygons_legend() {return $('(//span[text()="Supervisor Complete"])[2]')}
    get supervisorComplete_2SupReqd_polygons_legend() {return $('(//span[text()="Supervisor Complete (2 Supervisors Required)"])[2]')}
    get suspend_polygons_legend() {return $('(//span[text()="Suspend"])[2]')}
    get waitingOnApproval_polygons_legend() {return $('(//span[text()="Waiting on Approval"])[2]')}
    get waitingOnMaterial_polygons_legend() {return $('(//span[text()="Waiting on Material"])[2]')}
    get waitingToBeScheduled_polygons_legend() {return $('(//span[text()="Waiting to be Scheduled"])[2]')}

    get premiseLocations_legend() {return $('//span[text()="Premise Locations"]')}
    get nonInsulators_legend() {return $('//span[text()="Non-Insulators"]')}
    get aST25_legend() {return $('//span[text()="AST-25"]')}
    get aST26_legend() {return $('//span[text()="AST-26"]')}
    get aST57_legend() {return $('//span[text()="AST-57"]')}
    get aST77_legend() {return $('//span[text()="AST-77"]')}
    get insul_legend() {return $('//span[text()="INSUL"]')}
    get meterAsset_legend() {return $('//span[text()="Meter Assets"]')}
    get valveAsset_legend() {return $('//span[text()="Valve Assets"]')}
    
    get rectifierAsset_legend() {return $('//span[text()="Rectifier Assets"]')}
    get dripAsset_legend() {return $('//span[text()="Drip Assets"]')}
    get unrepairedLeakLocation_legend() {return $('//span[text()="Unrepaired Leak Locations"]')}
    get repairedLeakLocation_legend() {return $('//span[text()="Repaired Leak Locations"]')}
    get serviceAddresses_legend() {return $('//span[text()="Service Addresses"]')}
    get serviceAddressesLocations_legend() {return $('//span[text()="Service Address Locations"]')}
    
    get cpSystemsLocations_legend() {return $('//span[text()="CP System Locations"]')}
    get pipeLineSegmentLocations_legend() {return $('//span[text()="Pipeline Segment Locations"]')}
    get serviceAssetsOperating_legend() {return $('//span[text()="Service Assets - Operating"]')}
    get serviceAssetsRetired_legend() {return $('//span[text()="Service Assets - Retired"]')}
     
    get null_mainAssets_legend() {return $('//span[text()="<Null>"]')}
    get lpLow_mainAssets_legend() {return $('//span[text()="LP - LOW"]')}
    get mpMed_mainAssets_legend() {return $('//span[text()="MP - MEDIUM"]')}
    get hpHigh_mainAssets_legend() {return $('//span[text()="HP - HIGH"]')}

    get epElevated_legend() {return $('//span[text()="EP - ELEVATED"]')}
    get trans_legend() {return $('//span[text()="TRANS - TRANSMISSION"]')}
    get farmTapLocations_legend() {return $('//span[text()="Farm Tap Locations"]')}
    get blockValveLocations_legend() {return $('//span[text()="Block Valve Locations"]')}
    get distributionRegStationLoc_legend() {return $('//span[text()="Distribution Regulator Station Locations"]')}
    get districtRegStationLoc_legend() {return $('//span[text()="District Regulator Station Locations"]')}
    get gateStationLocations_legend() {return $('//span[text()="Gate Station Locations"]')}
    get transmissionCustLoc_legend() {return $('//span[text()="Transmission Customer Locations"]')}
    get divisionLocations_legend() {return $('//span[text()="Division Locations"]')}
    get municipalityLocations_legend() {return $('//span[text()="Municipality Locations"]')}
    get plateMapLocations_legend() {return $('//span[text()="Plate Map Locations"]')}

    get pinelandsBoundary_legend() {return $('//span[text()="Pinelands Boundary"]')}
    get cafraBoundary_legend() {return $('//span[text()="CAFRA Boundary"]')}
    get roadCenterlines_legend() {return $('//span[text()="Road Centerlines"]')}
    get parcelLabels_legend() {return $('//span[text()="Parcel Labels"]')}
    get parcels_legend() {return $('//span[text()="Parcels"]')}
    get moritoriumLocations_legend() {return $('//span[text()="Moritorium Location"]')}
    get moritoriumLocationsNotReady_legend() {return $('//span[text()="Moritorium Location"]')}
    get femaFloodHazardLayerGroup_legend() {return $('//span[text()="Moritorium Locations - Not Ready Status"]')}
    get tideLandLayer_legend() {return $('//span[text()="Tidelands Layer"]')}
    get landUseLandCoverWetland_legend() {return $('//span[text()="Land Use Land Cover Wetlands 2012"]')}
    get sjgPlateMosaics_legend() {return $('//span[text()="SJG/SJG_PLATES_MOSAIC"]')}

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
    get searchWindowClose() {return $('/html/body/div[13]/div[1]/div/a[2]/span')}
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
        
        $('//*[@id="kendoPSEGDocumentsGrid"]/div[5]/span[2]').scrollIntoView();
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


        browser.pause(3000)
        $('//*[@id="advanceSearch"]/div/div[1]/div[3]/span/span').click()
        $('//*[@id="advStreet-list"]/span/input').setValue(street)
        browser.pause(2000)
        browser.keys('Enter')

        browser.pause(3000)
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