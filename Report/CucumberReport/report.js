$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adactin.feature");
formatter.feature({
  "line": 1,
  "name": "hotel booking",
  "description": "",
  "id": "hotel-booking",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "login successful",
  "description": "",
  "id": "hotel-booking;login-successful",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enter The Username And Password",
  "rows": [
    {
      "cells": [
        "userName",
        "passWord"
      ],
      "line": 5
    },
    {
      "cells": [
        "sharmishahul",
        "shasha123!"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Click The Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 7389265600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Username_And_Password(DataTable)"
});
formatter.result({
  "duration": 171689900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Click_The_Login_Button()"
});
formatter.result({
  "duration": 890215900,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Search Hotel",
  "description": "",
  "id": "hotel-booking;search-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user Selecting The Location",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user Selecting The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user Selecting The Roomtype",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Selecting The No Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Selecting The AdultsField",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Selecting The ChildrenField",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Clicks On The Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "it Navigated To Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Selecting_The_Location()"
});
formatter.result({
  "duration": 104107500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Selecting_The_Hotel()"
});
formatter.result({
  "duration": 139315500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Selecting_The_Roomtype()"
});
formatter.result({
  "duration": 138973900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Selecting_The_No_Of_Rooms()"
});
formatter.result({
  "duration": 184871300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Selecting_The_AdultsField()"
});
formatter.result({
  "duration": 168178100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Selecting_The_ChildrenField()"
});
formatter.result({
  "duration": 108189100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Clicks_On_The_Search_Button()"
});
formatter.result({
  "duration": 620015200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.it_Navigated_To_Search_Hotel()"
});
formatter.result({
  "duration": 18800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Select Hotel",
  "description": "",
  "id": "hotel-booking;select-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "user Clicks On The Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user Clicks On The Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "it Navigate To Book Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Clicks_On_The_Hotel()"
});
formatter.result({
  "duration": 63825600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Clicks_On_The_Continue_Button()"
});
formatter.result({
  "duration": 627913500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.it_Navigate_To_Book_Hotel_Page()"
});
formatter.result({
  "duration": 35400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Book A Hotel",
  "description": "",
  "id": "hotel-booking;book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "user Enter The First Name And Last Name",
  "rows": [
    {
      "cells": [
        "fname",
        "lname"
      ],
      "line": 30
    },
    {
      "cells": [
        "sharmi",
        "shahul"
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user Enter The Billing Address And Credit Card Number",
  "rows": [
    {
      "cells": [
        "bill",
        "cardno"
      ],
      "line": 33
    },
    {
      "cells": [
        "n0.2,dubai street",
        "1234567891234567"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Selecting The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Selecting The Month Expiirydate",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Selecting The Year Expirydate",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Selecting The Year Expirydate",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Enter The Cvv Number \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Enter The BookNow Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "it Navigate To Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_First_Name_And_Last_Name(DataTable)"
});
formatter.result({
  "duration": 118930000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Billing_Address_And_Credit_Card_Number(DataTable)"
});
formatter.result({
  "duration": 127769500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Selecting_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 102244300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Selecting_The_Month_Expiirydate()"
});
formatter.result({
  "duration": 107184100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Selecting_The_Year_Expirydate()"
});
formatter.result({
  "duration": 106693600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Selecting_The_Year_Expirydate()"
});
formatter.result({
  "duration": 60626700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 27
    }
  ],
  "location": "Stepdefinition.user_Enter_The_Cvv_Number(String)"
});
formatter.result({
  "duration": 50658100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_BookNow_Button()"
});
formatter.result({
  "duration": 57968000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.it_Navigate_To_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 21800,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Checking Confirmation",
  "description": "",
  "id": "hotel-booking;checking-confirmation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "user Clicks My Itinerary Button",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "it Navigate To Booked Itinerary",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Clicks_My_Itinerary_Button()"
});
formatter.result({
  "duration": 6626179200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.it_Navigate_To_Booked_Itinerary()"
});
formatter.result({
  "duration": 14100,
  "status": "passed"
});
});