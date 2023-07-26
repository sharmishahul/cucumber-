package com.adactin.stepdefinition;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.project.Sharmi.project.Baseclass_demo;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.org.newcucumber.ConfigurationReader;
import cucumber.org.newcucumber.FileReaderManager;

public class Stepdefinition extends Baseclass_demo {
	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {
	    browser("chrome");
	    url(FileReaderManager.CReader().geturl());
	    //url("https://adactinhotelapp.com");
	}

	@When("^user Enter The Username And Password$")
	public void user_Enter_The_Username_And_Password(DataTable data) throws Throwable {
		
		    List<Map<String, String>> m = data.asMaps(String.class,String.class);
		    
		    String user =m.get(0).get("userName");
		    String pass =m.get(0).get("passWord");
		    WebElement username = driver.findElement(By.id("username"));
			username.sendKeys(user);
			
			WebElement password = driver.findElement(By.id("password"));
			password.sendKeys(pass);
		    
		}
		

	@Then("^user Click The Login Button$")
	public void user_Click_The_Login_Button() throws Throwable {
		 driver.findElement(By.id("login")).click();
	}

	@When("^user Selecting The Location$")
	public void user_Selecting_The_Location() throws Throwable {
		 WebElement country = driver.findElement(By.tagName("select"));
		    Select s=new Select(country);
		    s.selectByValue("New York");    
	}

	@When("^user Selecting The Hotel$")
	public void user_Selecting_The_Hotel() throws Throwable {
		WebElement hotel = driver.findElement(By.name("hotels"));
	    Select h = new Select(hotel);
	    h.selectByIndex(2); 
	}

	@When("^user Selecting The Roomtype$")
	public void user_Selecting_The_Roomtype() throws Throwable {
		 WebElement roomtype = driver.findElement(By.name("room_type"));
		    Select r =new Select(roomtype);
		    r.selectByIndex(2);
	}

	@When("^user Selecting The No Of Rooms$")
	public void user_Selecting_The_No_Of_Rooms() throws Throwable {
		WebElement roomno = driver.findElement(By.name("room_nos"));
	    Select n = new Select(roomno);
	    n.selectByIndex(5);
	}


	@When("^user Selecting The AdultsField$")
	public void user_Selecting_The_AdultsField() throws Throwable {
		WebElement adult = driver.findElement(By.id("adult_room"));
	    Select ad =new Select(adult);
	    ad.selectByIndex(2);
	}

	@When("^user Selecting The ChildrenField$")
	public void user_Selecting_The_ChildrenField() throws Throwable {
		WebElement childroom = driver.findElement(By.name("child_room"));
	    Select cr =new Select(childroom);
	    cr.selectByValue("4"); 
	}

	@When("^user Clicks On The Search Button$")
	public void user_Clicks_On_The_Search_Button() throws Throwable {
		 driver.findElement(By.name("Submit")).click();
	}

	@Then("^it Navigated To Search Hotel$")
	public void it_Navigated_To_Search_Hotel() throws Throwable {
	    
	}

	@When("^user Clicks On The Hotel$")
	public void user_Clicks_On_The_Hotel() throws Throwable {
		driver.findElement(By.name("radiobutton_0")).click();
	}

	@When("^user Clicks On The Continue Button$")
	public void user_Clicks_On_The_Continue_Button() throws Throwable {
		driver.findElement(By.name("continue")).click();
	}

	@Then("^it Navigate To Book Hotel Page$")
	public void it_Navigate_To_Book_Hotel_Page() throws Throwable {
	    
	}

	@When("^user Enter The First Name And Last Name$")
	public void user_Enter_The_First_Name_And_Last_Name(DataTable data2) throws Throwable {
		List<Map<String, String>> m = data2.asMaps(String.class,String.class);
	    
	    String firstnam =m.get(0).get("fname");
	    String lastnam =m.get(0).get("lname");
		 WebElement firstname = driver.findElement(By.id("first_name"));
		    firstname.sendKeys(firstnam);
		    WebElement lastname = driver.findElement(By.id("last_name"));
		    lastname.sendKeys(lastnam);
	}

	@When("^user Enter The Billing Address And Credit Card Number$")
	public void user_Enter_The_Billing_Address_And_Credit_Card_Number(DataTable data3) throws Throwable {
         List<Map<String, String>> m = data3.asMaps(String.class,String.class);
	    
	    String add =m.get(0).get("bill");
	    String cvvno =m.get(0).get("cardno");
		
		WebElement address = driver.findElement(By.id("address"));
		address.sendKeys(add);
		WebElement ccnum = driver.findElement(By.id("cc_num"));
		ccnum.sendKeys(cvvno);
	}

	@When("^user Selecting The Credit Card Type$")
	public void user_Selecting_The_Credit_Card_Type() throws Throwable {
		WebElement cctype = driver.findElement(By.id("cc_type"));
		Select ct =new Select(cctype);
		ct.selectByValue("VISA");
	}

	@When("^user Selecting The Month Expiirydate$")
	public void user_Selecting_The_Month_Expiirydate() throws Throwable {
		WebElement ccexp = driver.findElement(By.id("cc_exp_month"));
		Select ce =new Select(ccexp);
		ce.selectByVisibleText("August");
	}

	@When("^user Selecting The Year Expirydate$")
	public void user_Selecting_The_Year_Expirydate() throws Throwable {
		WebElement expiryyear = driver.findElement(By.id("cc_exp_year"));
		Select ey =new Select(expiryyear);
		ey.selectByValue("2014");
	}

	@When("^user Enter The Cvv Number \"([^\"]*)\"$")
	public void user_Enter_The_Cvv_Number(String arg1) throws Throwable {
		WebElement cvv = driver.findElement(By.id("cc_cvv"));
		cvv.sendKeys(arg1);
	}

	@When("^user Enter The BookNow Button$")
	public void user_Enter_The_BookNow_Button() throws Throwable {
		driver.findElement(By.id("book_now")).click();
		
	}

	@Then("^it Navigate To Booking Confirmation Page$")
	public void it_Navigate_To_Booking_Confirmation_Page() throws Throwable {
	    
	}

	@When("^user Clicks My Itinerary Button$")
	public void user_Clicks_My_Itinerary_Button() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@id='my_itinerary']")));
		driver.findElement(By.xpath("//input[@id='my_itinerary']")).click();
	}

	@Then("^it Navigate To Booked Itinerary$")
	public void it_Navigate_To_Booked_Itinerary() throws Throwable {
	   
	}


}