package StepDefinition;

import java.util.concurrent.TimeUnit;

import com.BaseClass.Library;
import com.SeleniumUtility.TestUtil;
import com.pages.DisplayProduct;
import com.pages.LoginPage;
import com.pages.SearchPage;
import com.pages.VerifyProduct;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DisplayproductStepDefinition extends Library{
	static LoginPage lp;
	static SearchPage sp;
	static DisplayProduct dp;
	static VerifyProduct vp;
	
	@Given("^user runs the application$")
	public void user_runs_the_application() throws Throwable {
	    
		Library.initialization();
	}

	@When("^user enter  \"([^\"]*)\" and \"([^\"]*)\" in the login field$")
	public void user_enter_and_in_the_login_field(String userid, String pass) throws Throwable {
		
		lp= new LoginPage();
		lp.validateLoginPage(userid, pass);
	}

	@Then("^user then logins by clicking in sign in$")
	public void user_then_logins_by_clicking_in_sign_in() throws Throwable {
	   
		sp=lp.SignInPage();	}

	@Then("^user Go to search product and type \"([^\"]*)\"$")
	public void user_Go_to_search_product_and_type(String item) throws Throwable {
		
		
	   sp=new SearchPage();
		sp.SearchItem(item);
		
	}

	@Then("^user then clicks on searchicon$")
	public void user_then_clicks_on_searchicon() throws Throwable {
		
		
		  dp=sp.ClickonSearchIcon();
	   
	}

	@Then("^User clicks on the product to go to nextpage$")
	public void user_clicks_on_the_product_to_go_to_nextpage() throws Throwable {
		
		//driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
		
		dp=new DisplayProduct();
		
		vp=dp.SelectProduct();
		
		TestUtil s = new TestUtil(driver);
		s.to_take_screenshot("C:/Users/DEDEEPYA SAI/eclipse-project/FlipKartProject/src/test/resources/Screenshot/displayproduct.png");
	    
	}
}

	
	