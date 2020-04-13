package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.BaseClass.Library;

public class DisplayProduct extends Library {

	@FindBy(xpath = "//div[@class='_1HmYoV _35HD7C']//div[2]//div[1]//div[1]//div[1]//a[2]")
	WebElement productbtn;
	
	public DisplayProduct() {
		PageFactory.initElements(driver, this);
	}
	
	public VerifyProduct SelectProduct() {
		Actions action=new Actions(driver);
		action.moveToElement(productbtn).build().perform();
		productbtn.click();
		return new VerifyProduct();
	}
}
