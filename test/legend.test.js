const homePagePages = require("../pages/homePage.pages")
const sjgFieldbookPages = require("../pages/sjgFieldbook.pages")
const { assert, expect } = require("chai")
const { serviceAddressesLocations_legend } = require("../pages/sjgFieldbook.pages")

describe("Verifying legend components", function(){

    it("Should verify legend layer Work Order Points", ()=>{

        sjgFieldbookPages.zoomToEnableLegend()
        sjgFieldbookPages.clickLegend()
        sjgFieldbookPages.valveAsset_legend.waitForDisplayed()
        
        /*
        ***Validating different layers are displayed in the legend pane
        */
        assert.equal(true, sjgFieldbookPages.allOtherValues_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.approved_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.arrivedOnSite_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.canceled_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.closed_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.completed_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.designComplete_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.editedInHistory_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.fieldComplete_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.hold_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.inDesign_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.inProgressStart_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.pending_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.permitting_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.reviewCompletedWorkOrder_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.scheduled_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.supervisorComplete_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.supervisorComplete_2SupReq_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.suspend_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.waitOnApproval_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.waitToBeSched_points_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.allOtherValues_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.approved_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.arrivedOnSite_polygons_legend.isDisplayed())

        
    
        assert.equal(true, sjgFieldbookPages.canceled_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.closed_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.completed_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.designComplete_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.editedInHistory_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.fieldComplete_polygons_legend.isDisplayed())
       
        assert.equal(true, sjgFieldbookPages.hold_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.inDesign_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.inProgresStart_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.pending_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.permitting_polygons_legend.isDisplayed())
        
        assert.equal(true, sjgFieldbookPages.reviewCompletedWorkOrder_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.scheduled_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.supervisorComplete_2SupReqd_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.suspend_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.waitingOnApproval_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.waitingOnMaterial_polygons_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.waitingToBeScheduled_polygons_legend.isDisplayed())

        assert.equal(true, sjgFieldbookPages.premiseLocations_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.nonInsulators_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.aST25_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.aST26_legend.isDisplayed())
       
        assert.equal(true, sjgFieldbookPages.aST57_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.aST77_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.insul_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.meterAsset_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.valveAsset_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.rectifierAsset_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.dripAsset_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.unrepairedLeakLocation_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.repairedLeakLocation_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.serviceAddresses_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.cpSystemsLocations_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.pipeLineSegmentLocations_legend.isDisplayed())

        
        assert.equal(true, sjgFieldbookPages.serviceAssetsOperating_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.serviceAssetsRetired_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.null_mainAssets_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.lpLow_mainAssets_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.mpMed_mainAssets_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.hpHigh_mainAssets_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.epElevated_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.trans_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.farmTapLocations_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.blockValveLocations_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.distributionRegStationLoc_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.districtRegStationLoc_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.gateStationLocations_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.transmissionCustLoc_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.divisionLocations_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.municipalityLocations_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.plateMapLocations_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.pinelandsBoundary_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.cafraBoundary_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.roadCenterlines_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.parcelLabels_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.parcels_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.moritoriumLocations_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.moritoriumLocationsNotReady_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.femaFloodHazardLayerGroup_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.tideLandLayer_legend.isDisplayed())
        assert.equal(true, sjgFieldbookPages.landUseLandCoverWetland_legend.isDisplayed())
        //assert.equal(true, sjgFieldbookPages.sjgPlateMosaics_legend.isDisplayed())  

      
    })

})