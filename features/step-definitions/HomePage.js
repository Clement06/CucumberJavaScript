import {Given,When,Then} from "cucumber";
var assert = require('assert'); 
Given("A web browser is at the Google home page", () =>{
browser.url("/");
});

When(/^The user enters "(.*)" into the search bar$/,(keyword) =>{
    browser.maximizeWindow();
    $(".gLFyf.gsfi").waitForDisplayed(5000);
    $(".gLFyf.gsfi").click();
    $(".gLFyf.gsfi").setValue(keyword);
    $(".sbtc .sbl1").waitForDisplayed(5000);
    $(".sbtc .sbl1").click();
    // browser.pause(8000);
});

Then(/^links related to "(.*)" are shown on the results page$/,(keyword) =>{
    const links=$$(".LC20lb");
    links.forEach(link => {
        const linkText=link.getText().toLowerCase();
        if(linkText){
            assert(
                linkText.includes(keyword),
                'Link text does not include ${keyword}'
            );
        }
    });
});