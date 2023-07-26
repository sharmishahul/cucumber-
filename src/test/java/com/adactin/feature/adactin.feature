Feature: hotel booking
Scenario: login successful
Given user Launch The Application
When user Enter The Username And Password
|userName|passWord|
|shasha12|O3MM0W|
Then user Click The Login Button

Scenario: Search Hotel

When user Selecting The Location
And user Selecting The Hotel
And user Selecting The Roomtype
And user Selecting The No Of Rooms

And user Selecting The AdultsField
And user Selecting The ChildrenField
And user Clicks On The Search Button
Then it Navigated To Search Hotel

Scenario: Select Hotel

When user Clicks On The Hotel
And user Clicks On The Continue Button
Then it Navigate To Book Hotel Page

Scenario: Book A Hotel

When user Enter The First Name And Last Name
|fname|lname|
|sharmi|shahul|
And user Enter The Billing Address And Credit Card Number
|bill|cardno|
|n0.2,dubai street|1234567891234567|

And user Selecting The Credit Card Type
And user Selecting The Month Expiirydate
And user Selecting The Year Expirydate
And user Selecting The Year Expirydate
And user Enter The Cvv Number "123"
And user Enter The BookNow Button
Then it Navigate To Booking Confirmation Page

Scenario: Checking Confirmation

When user Clicks My Itinerary Button
Then it Navigate To Booked Itinerary
