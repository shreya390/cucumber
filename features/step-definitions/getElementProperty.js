import { Given, When, Then } from "cucumber";
Given(/^I'm on any page$/, function () {
  browser.url("http://demo.guru99.com/test/newtours/");
  browser.maximizeWindow();
});

When(/^I have the right title$/, function () {
console.log("the title of the page is:",browser.getTitle());
});

Then(/^I will be finding element properties using locators$/, function () {
  var attribute=$("//input[@name='userName']").getAttribute("size");
  console.log("Attribute returned as:"+attribute);

  var css_prop=$("//input[@name='userName']").getCSSProperty("font-family");
  console.log("CSS property returned as :"+JSON.stringify(css_prop));

  var html=$("// form").getHTML();
  console.log("html hierarchy returned as :"+html);

  var property=$("//input[@name='userName']").getProperty("name");
  console.log("property returned as:"+property);

  var tag_name=$("//input[@name='userName']").getTagName();
  console.log("tag name returned as:"+tag_name);

  var value=$("//input[@name='submit']").getValue();
  console.log("value returned as:"+value);

  var text=$("//a[text()='SIGN-ON']").getText();
  console.log("text returned as:"+text);


  
});
