package com.SeleniumUtility;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import com.BaseClass.Library;

public class TestUtil extends Library {
	
	public static long PAGE_LOAD_TIMEOUT=20;
	public static long IMPLICIT_WAIT=30;
	
	 WebDriver driver;
	
	public TestUtil(WebDriver driver) {
		this.driver=driver;
	}
	
	public void to_take_screenshot(String path) {
		
		TakesScreenshot screen = (TakesScreenshot)driver;
		File src = screen.getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(src, new File(path));
			
		} catch (IOException e) {
			
			e.printStackTrace();
		}
	}

}
