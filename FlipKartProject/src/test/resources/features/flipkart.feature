@Flipkart 
Feature: Flipkart Shopping 
@tc_01_login 
Scenario Outline: validating login 
	Given I launch Chrome Browser 
	When user enters "<username>" and "<password>" in the field 
	Then user clicks on  submit button 
	Examples: 
		|username  |                         |password|
		|7386670356|                         |ramya448|  
		
		@tc_02_SearchProduct 
		Scenario Outline: validating selection 
			Given user is on the browser 
			When  Now enter  "<username>" and "<password>" in the field 
			Then  click on signin button 
			Then  Go to search item and type "<item>" 
			Then  click on searchicon to go to nextpage 
			Examples: 
				|username  | |password | |item |                       
				|7386670356| |ramya448 | |coronavirus mask|
				
				
		@tc_03_DisplayProduct 		
		Scenario Outline: select Product
			Given user runs the application 
			When  user enter  "<username>" and "<password>" in the login field 
			Then  user then logins by clicking in sign in 
			Then  user Go to search product and type "<item>" 	
			Then user then clicks on searchicon
			Then User clicks on the product to go to nextpage	
			Examples: 
				|username  | |password | |item |                       
				|7386670356| |ramya448 | |coronavirus mask|
				
				