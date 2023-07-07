import { Given, When, Then } from "cucumber";
const { assert } = require('chai');
Given(/^I'm on any page$/, function () {
  browser.url("https://demoqa.com/browser-windows");
  browser.maximizeWindow();
});

When(/^I have the right title$/, function () {
console.log("the title of the page is:",browser.getTitle());
});

Then(/^I will be performing window handler operations on browser$/, function () {
   console.log("Browser session id is:",browser.getWindowHandle());

   $('#windowButton').click();
   console.log("Multiple windows present?",browser.getWindowHandles());

   var handles=browser.getWindowHandles();
   browser.switchToWindow(handles[1]);

   console.log("browser session id after switch:", browser.getWindowHandle());

//    browser.closeWindow();
//    console.log("window closed!...");
//    console.log("browser session id after close window:", browser.getWindowHandle()); -> gives error because target window on top context would adready be closed.

    // browser.createWindow("tab");
    browser.createWindow("window");
    console.log("window handlers:",browser.getWindowHandles());
    browser.pause(3000);



});
