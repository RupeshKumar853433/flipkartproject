package StepDefinition;

import com.BaseClass.Library;
import com.SeleniumUtility.TestUtil;
import com.pages.LoginPage;
import com.pages.SearchPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition extends Library {
	
	static LoginPage lp;
	static SearchPage sp;

	@Given("^I launch Chrome Browser$")
	public void i_launch_Chrome_Browser() throws Throwable {
	   
		Library.initialization();
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\" in the field$")
	public void user_enters_and_in_the_field(String userid, String pass) throws Throwable {
		
		lp=new LoginPage();
		lp.validateLoginPage(userid,pass);
	   
	}

	@Then("^user clicks on  submit button$")
	public void user_clicks_on_submit_button() throws Throwable {

		sp=lp.SignInPage();
		TestUtil s = new TestUtil(driver);
		s.to_take_screenshot("C:/Users/DEDEEPYA SAI/eclipse-project/FlipKartProject/src/test/resources/Screenshot/login.png");
	  
	}

}
