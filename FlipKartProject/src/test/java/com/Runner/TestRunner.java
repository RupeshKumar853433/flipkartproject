package com.Runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:/Users/DEDEEPYA SAI/eclipse-project/FlipKartProject/src/test/resources/features/flipkart.feature",
               glue= {"StepDefinition"},
            		   plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport",
               "com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
              
		monochrome=true,
		strict= true,
		dryRun =false
		)

public class TestRunner {
	
	 @AfterClass
	   public static void  extendReport()
	  {
	      Reporter.loadXMLConfig("C:/Users/DEDEEPYA SAI/eclipse-project/FlipKartProject/ExtentReports.xml");
	      Reporter.setSystemInfo("user", System.getProperty("user.name"));
	      Reporter.setSystemInfo("os", "Windows");
	      Reporter.setTestRunnerOutput("Sample test runner output message");
	  }
	

}
