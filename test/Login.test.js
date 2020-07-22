const homePagePages = require("../pages/homePage.pages")
describe("Validate SJG project card selected" , function(){

    it("Login to testfieldbook", ()=>{
       
        
        console.log(browser.getTitle)
        expect(browser.getTitle()).equals('South Jersey Gas')
        browser.saveFullPageScreen('fullPage');
        expect(browser.checkFullPageScreen('fullPage')).to.equal(0);
    
            

    })



})


