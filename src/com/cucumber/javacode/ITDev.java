package com.cucumber.javacode;

import org.apache.log4j.Logger;

import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ITDev {
	public Logger APPLICATION_LOGS = Logger.getLogger(ITDev.class);
	@Given("^I work in ([^\"]*)$")
	public void i_work(String str1){
		APPLICATION_LOGS.debug("-------------");
		APPLICATION_LOGS.debug("I work in "+str1);
	}
	@When("^I meet ([^\"]*)$")
    public void i_meet(String str2){
		APPLICATION_LOGS.debug("I meet "+str2);
	}
	@Then("^I ([a-zA-Z0-9]{1,})$")
	public void i_am(String str3){
		APPLICATION_LOGS.debug("I "+str3);
	}
	@But("^He is ([^\"]*) person$")
	public void type_person(String str4){
		APPLICATION_LOGS.debug("He is "+str4+" person");
		APPLICATION_LOGS.debug("-------------");
	}
}
