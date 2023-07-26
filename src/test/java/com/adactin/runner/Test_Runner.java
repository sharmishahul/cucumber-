package com.adactin.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//java//com//adactin//feature", 
glue="com.adactin.stepdefinition",
monochrome=true,
plugin= {//"html:Report\\CucumberReport",
		//"pretty",
       // "json:CucumberReport\\JsonReport",
		"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"

}
)
public class Test_Runner {
                                             
}
