import {Given,When,Then} from 'cucumber';

var textFromTable = [];
Given(/^I'm on the table page$/,function(){
    browser.url("https://demoqa.com/webtables");
})

When(/^I extract the text from a table row$/,function(){
   var table = browser.$("//*[@id='app']/div/div/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]") ;

   table.$$("./div").map(function(element){
   textFromTable.push(element.getText());
   })
})

Then(/^I shall able to print column texts$/,function(){
    console.log("All text from table columns : "+textFromTable);
})
