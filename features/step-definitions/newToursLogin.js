import { Given, When, Then } from "cucumber";

Given(/^I'm on the login page$/, function () {
  browser.url("http://demo.guru99.com/test/newtours/");
});

When(/^I log in with a default user$/, function () {
  browser.$("//input[@name='userName']").setValue("mercury");
  browser.$("//input[@name='password']").setValue("mercury");
  browser.$("//input[@name='submit']").click();
});

Then(/^I shall be on the Flight Finder page$/, function () {
  var strUrl = browser.getUrl();
  console.log("URL is : " + strUrl);
});
