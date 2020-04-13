$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DEDEEPYA SAI/eclipse-project/FlipKartProject/src/test/resources/features/flipkart.feature");
formatter.feature({
  "line": 2,
  "name": "Flipkart Shopping",
  "description": "",
  "id": "flipkart-shopping",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Flipkart"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "validating login",
  "description": "",
  "id": "flipkart-shopping;validating-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tc_01_login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" in the field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on  submit button",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "flipkart-shopping;validating-login;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ],
      "line": 9,
      "id": "flipkart-shopping;validating-login;;1"
    },
    {
      "cells": [
        "7386670356",
        "",
        "ramya448"
      ],
      "line": 10,
      "id": "flipkart-shopping;validating-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "validating login",
  "description": "",
  "id": "flipkart-shopping;validating-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tc_01_login"
    },
    {
      "line": 1,
      "name": "@Flipkart"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"7386670356\" and \"ramya448\" in the field",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on  submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.i_launch_Chrome_Browser()"
});
formatter.result({
  "duration": 32796333200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7386670356",
      "offset": 13
    },
    {
      "val": "ramya448",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_and_in_the_field(String,String)"
});
formatter.result({
  "duration": 634628600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 2644756800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "validating selection",
  "description": "",
  "id": "flipkart-shopping;validating-selection",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@tc_02_SearchProduct"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is on the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Now enter  \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" in the field",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "click on signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Go to search item and type \"\u003citem\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on searchicon to go to nextpage",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "flipkart-shopping;validating-selection;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password",
        "",
        "item"
      ],
      "line": 20,
      "id": "flipkart-shopping;validating-selection;;1"
    },
    {
      "cells": [
        "7386670356",
        "",
        "ramya448",
        "",
        "coronavirus mask"
      ],
      "line": 21,
      "id": "flipkart-shopping;validating-selection;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "validating selection",
  "description": "",
  "id": "flipkart-shopping;validating-selection;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Flipkart"
    },
    {
      "line": 12,
      "name": "@tc_02_SearchProduct"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is on the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Now enter  \"7386670356\" and \"ramya448\" in the field",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "click on signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Go to search item and type \"coronavirus mask\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on searchicon to go to nextpage",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchPageStepDefinition.user_is_on_the_browser()"
});
formatter.result({
  "duration": 16964855600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7386670356",
      "offset": 12
    },
    {
      "val": "ramya448",
      "offset": 29
    }
  ],
  "location": "SearchPageStepDefinition.now_enter_and_in_the_field(String,String)"
});
formatter.result({
  "duration": 486364100,
  "status": "passed"
});
formatter.match({
  "location": "SearchPageStepDefinition.click_on_signin_button()"
});
formatter.result({
  "duration": 264128100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coronavirus mask",
      "offset": 28
    }
  ],
  "location": "SearchPageStepDefinition.go_to_search_item_and_type(String)"
});
formatter.result({
  "duration": 3205274600,
  "status": "passed"
});
formatter.match({
  "location": "SearchPageStepDefinition.click_on_searchicon_to_go_to_nextpage()"
});
formatter.result({
  "duration": 1758054200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "select Product",
  "description": "",
  "id": "flipkart-shopping;select-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@tc_03_DisplayProduct"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user runs the application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user enter  \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" in the login field",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user then logins by clicking in sign in",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user Go to search product and type \"\u003citem\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user then clicks on searchicon",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User clicks on the product to go to nextpage",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "flipkart-shopping;select-product;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password",
        "",
        "item"
      ],
      "line": 33,
      "id": "flipkart-shopping;select-product;;1"
    },
    {
      "cells": [
        "7386670356",
        "",
        "ramya448",
        "",
        "coronavirus mask"
      ],
      "line": 34,
      "id": "flipkart-shopping;select-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "select Product",
  "description": "",
  "id": "flipkart-shopping;select-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@tc_03_DisplayProduct"
    },
    {
      "line": 1,
      "name": "@Flipkart"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user runs the application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user enter  \"7386670356\" and \"ramya448\" in the login field",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user then logins by clicking in sign in",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user Go to search product and type \"coronavirus mask\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user then clicks on searchicon",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User clicks on the product to go to nextpage",
  "keyword": "Then "
});
formatter.match({
  "location": "DisplayproductStepDefinition.user_runs_the_application()"
});
formatter.result({
  "duration": 32234430400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7386670356",
      "offset": 13
    },
    {
      "val": "ramya448",
      "offset": 30
    }
  ],
  "location": "DisplayproductStepDefinition.user_enter_and_in_the_login_field(String,String)"
});
formatter.result({
  "duration": 411962100,
  "status": "passed"
});
formatter.match({
  "location": "DisplayproductStepDefinition.user_then_logins_by_clicking_in_sign_in()"
});
formatter.result({
  "duration": 209479200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "coronavirus mask",
      "offset": 36
    }
  ],
  "location": "DisplayproductStepDefinition.user_Go_to_search_product_and_type(String)"
});
formatter.result({
  "duration": 7137547000,
  "status": "passed"
});
formatter.match({
  "location": "DisplayproductStepDefinition.user_then_clicks_on_searchicon()"
});
formatter.result({
  "duration": 582215200,
  "status": "passed"
});
formatter.match({
  "location": "DisplayproductStepDefinition.user_clicks_on_the_product_to_go_to_nextpage()"
});
formatter.result({
  "duration": 9399515400,
  "status": "passed"
});
});