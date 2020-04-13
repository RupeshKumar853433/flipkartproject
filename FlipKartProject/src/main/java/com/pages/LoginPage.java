package com.pages;


import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.BaseClass.Library;

public class LoginPage extends Library{
	
	@FindBy(xpath = "//input[@class='_2zrpKA _1dBPDZ']")
	WebElement username;
	
	@FindBy(xpath = "//input[@class='_2zrpKA _3v41xv _1dBPDZ']")
	WebElement password;
	
	@FindBy(xpath = "//button[@class='_2AkmmA _1LctnI _7UHT_c']")
	WebElement loginbtn;
	
	public LoginPage() {
		
		PageFactory.initElements(driver, this);
	}
	
	public void validateLoginPage(String userid,String pass) {
		
		username.sendKeys(userid);
		password.sendKeys(pass);
		
		
		
	}
	public SearchPage SignInPage() {
		loginbtn.click();
		return new SearchPage();
	}

}
