package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.BaseClass.Library;

public class SearchPage extends Library {
	
	@FindBy(xpath = "//input[@class='LM6RPg']")
	WebElement searchitem;
	
	@FindBy(xpath = "//button[@class='vh79eN']")
	WebElement searchicon;

	
	public SearchPage() {
		PageFactory.initElements(driver, this);
	}
	
	public void SearchItem(String item) {
		
		Actions action = new Actions(driver);
		action.moveToElement(searchitem).build().perform();
		searchitem.sendKeys(item);
		
	}
	
	public DisplayProduct ClickonSearchIcon() {
		
		Actions act = new Actions(driver);
		act.moveToElement(searchicon).build().perform();
		searchicon.click();
		return new DisplayProduct();
	}
}
