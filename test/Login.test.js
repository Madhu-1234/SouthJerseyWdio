const homePagePages = require("../pages/homePage.pages")
describe("Interacting with elements" , function(){

    it("Login to testfieldbook", ()=>{

        browser.url('/')
        homePagePages.homePageSubmit('' , '')
        homePagePages.clickSJGTest()
        browser.pause(20000)
        browser.switchWindow('South Jersey Gas')
        browser.pause(20000)
        console.log(browser.getTitle)
        expect(browser.getTitle()).equals('South Jersey Gas')
      

    })



})


