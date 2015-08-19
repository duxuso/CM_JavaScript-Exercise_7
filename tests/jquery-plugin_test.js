/**
 * Created by xuesongdu on 18/08/15.
 */

describe("Experimentation",function(){

    var elem;

    beforeEach(function(){

       elem = $("<div id=\"container\"><p>Hello World</p></div>");

    });

    it("allows us to search with CSS selectors",function(){

        //expect(elem).toBe('#container');
        expect(elem).toContain("p");
    });

    it("detects whether an element has a class",function(){
            expect(elem).toHaveClass('container');
        });

});





/*


describe("Unit: OfficeUI Elements", function() {
    // Provides a section to define code to execute before every test is     executed.
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/Tests/Fixtures/';
        loadFixtures('OfficeUI.Elements.Button.Test.html');
    });

    it("A class 'ie-fix' should be added to any 'a href' which is marked with a     'button' class when you click the element.", function() {

        $('#OfficeUI a.button').first().click();

        expect($('#OfficeUI a.button').first()).toHaveClass('ie-fix');
    });
});

    */