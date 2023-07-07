import { Given, When, Then } from "cucumber";
import loginPage from "../pageobjects/newToursPageObject";
import flightFinderPage from '../pageobjects/newToursFlightFinderPageObject';
Given(/^I'm on the login page$/, function () {
  loginPage.openBrowser();
});

When(/^I log in with a default user$/, function () {
 loginPage.login();
});

Then(/^I shall be on the Flight Finder page$/, function () {
  flightFinderPage.flightFinder();
});
