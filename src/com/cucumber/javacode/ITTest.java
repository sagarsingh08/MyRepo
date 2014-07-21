package com.cucumber.javacode;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@SuppressWarnings("unused")
public class ITTest {
	
	public Logger APPLICATION_LOGS = Logger.getLogger(ITTest.class);
	@Given("I am a \"([a-zA-Z0-9]{1,})\" tester")
	public void what_tester(String Tester_Type, List<String> person){
		int i = 2;
		
		APPLICATION_LOGS.debug("I am a "+Tester_Type+" Tester from " +person.get(i)+" Industry and country "+person.get(++i));
		APPLICATION_LOGS.debug("I am a "+Tester_Type+" Tester from " +person.get(++i)+" Industry and country "+person.get(++i));
	}
	@When("I go to work")
	public void go_to_work(){
		APPLICATION_LOGS.debug("I go to work");
	}
	@Then("I \"([a-zA-Z0-9]{1,})\" it")
	public void my_work(String Work_output){
		APPLICATION_LOGS.debug("I "+Work_output+" it");
	}
	@And("My boss \"([a-zA-Z0-9]{1,})\" me")
	public void my_boss(String Boss_Action){
		APPLICATION_LOGS.debug("My boss "+Boss_Action+" me");
	}
	@But("My developer \"([a-zA-Z0-9]{1,})\" me")
	public void my_dev(String Dev_Reaction){
		APPLICATION_LOGS.debug("My developer "+Dev_Reaction+" me");
		APPLICATION_LOGS.debug("-------------");
	}
}
