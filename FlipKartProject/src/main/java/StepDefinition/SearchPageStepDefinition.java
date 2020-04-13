package StepDefinition;

import java.util.concurrent.TimeUnit;

import com.BaseClass.Library;
import com.SeleniumUtility.TestUtil;
import com.pages.DisplayProduct;
import com.pages.LoginPage;
import com.pages.SearchPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchPageStepDefinition extends Library {

	static LoginPage lp;
	static SearchPage sp;
	static DisplayProduct dp;
	
	@Given("^user is on the browser$")
	public void user_is_on_the_browser() throws Throwable {
		Library.initialization();
	  
	}

	@When("^Now enter  \"([^\"]*)\" and \"([^\"]*)\" in the field$")
	public void now_enter_and_in_the_field(String userid, String pass) throws Throwable {
		
          lp=new LoginPage();
		
		lp.validateLoginPage(userid,pass);
	 
	}

	@Then("^click on signin button$")
	public void click_on_signin_button() throws Throwable {
		
		sp=lp.SignInPage();
	    
	}

	@Then("^Go to search item and type \"([^\"]*)\"$")
	public void go_to_search_item_and_type(String item) throws Throwable {
		driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
		
		sp=new SearchPage();
		
		//driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
		
		sp.SearchItem(item);
	   
	}

	@Then("^click on searchicon to go to nextpage$")
	public void click_on_searchicon_to_go_to_nextpage() throws Throwable {
		
		//driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
          dp=sp.ClickonSearchIcon();
	    
		TestUtil s = new TestUtil(driver);
		s.to_take_screenshot("C:/Users/DEDEEPYA SAI/eclipse-project/FlipKartProject/src/test/resources/Screenshot/searchItem.png");
		
	  	}

}
	
	
	
