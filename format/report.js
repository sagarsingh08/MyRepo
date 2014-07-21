$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/cucumber/javacode/resource/itDeveloper.feature");
formatter.feature({
  "id": "life-of-it-developer",
  "description": "\r\nIn order to get a good salary \r\nAs a IT Guy\r\nI should keep my boss happy",
  "name": "Life of IT Developer",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "life-of-it-developer;i-am-a-java-developer",
  "description": "",
  "name": "I am a Java Developer",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "I work in Microsoft",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I meet Bill Gates",
  "keyword": "When ",
  "line": 9
});
formatter.step({
  "name": "I hesitate",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "He is good person",
  "keyword": "But ",
  "line": 11
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft",
      "offset": 10
    }
  ],
  "location": "ITDev.i_work(String)"
});
formatter.result({
  "duration": 295031850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bill Gates",
      "offset": 7
    }
  ],
  "location": "ITDev.i_meet(String)"
});
formatter.result({
  "duration": 139166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hesitate",
      "offset": 2
    }
  ],
  "location": "ITDev.i_am(String)"
});
formatter.result({
  "duration": 121103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "good",
      "offset": 6
    }
  ],
  "location": "ITDev.type_person(String)"
});
formatter.result({
  "duration": 131777,
  "status": "passed"
});
formatter.scenario({
  "id": "life-of-it-developer;i-am-a-linux-developer",
  "description": "",
  "name": "I am a Linux Developer",
  "keyword": "Scenario",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "I work in Apple",
  "keyword": "Given ",
  "line": 14
});
formatter.step({
  "name": "I meet Steve Jobs",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "I smile",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "He is wise person",
  "keyword": "But ",
  "line": 17
});
formatter.match({
  "arguments": [
    {
      "val": "Apple",
      "offset": 10
    }
  ],
  "location": "ITDev.i_work(String)"
});
formatter.result({
  "duration": 224965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Steve Jobs",
      "offset": 7
    }
  ],
  "location": "ITDev.i_meet(String)"
});
formatter.result({
  "duration": 123977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "smile",
      "offset": 2
    }
  ],
  "location": "ITDev.i_am(String)"
});
formatter.result({
  "duration": 126440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wise",
      "offset": 6
    }
  ],
  "location": "ITDev.type_person(String)"
});
formatter.result({
  "duration": 138345,
  "status": "passed"
});
formatter.uri("com/cucumber/javacode/resource/itTester.feature");
formatter.feature({
  "id": "life-of-it-tester",
  "description": "\r\nIn order to get good salary \r\nAs a IT Guy\r\nI want to keep my boss happy",
  "name": "Life of IT Tester",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "life-of-it-tester;i-am-a-tester;;2",
  "description": "",
  "name": "I am a Tester",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"Good\" tester",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "industry",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 10
    },
    {
      "cells": [
        "Automobiles",
        "Germany"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I go to work",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I \"Completes\" it",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "My boss \"Salute\" me",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "My developer \"Hates\" me",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Good",
      "offset": 8
    }
  ],
  "location": "ITTest.what_tester(String,String\u003e)"
});
formatter.result({
  "duration": 1516459,
  "status": "passed"
});
formatter.match({
  "location": "ITTest.go_to_work()"
});
formatter.result({
  "duration": 81283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Completes",
      "offset": 3
    }
  ],
  "location": "ITTest.my_work(String)"
});
formatter.result({
  "duration": 118641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Salute",
      "offset": 9
    }
  ],
  "location": "ITTest.my_boss(String)"
});
formatter.result({
  "duration": 107966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hates",
      "offset": 14
    }
  ],
  "location": "ITTest.my_dev(String)"
});
formatter.result({
  "duration": 140398,
  "status": "passed"
});
formatter.scenario({
  "id": "life-of-it-tester;i-am-a-tester;;3",
  "description": "",
  "name": "I am a Tester",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"Bad\" tester",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "industry",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 10
    },
    {
      "cells": [
        "Automobiles",
        "Germany"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I go to work",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I \"Mess\" it",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "My boss \"Fires\" me",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "My developer \"Likes\" me",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Bad",
      "offset": 8
    }
  ],
  "location": "ITTest.what_tester(String,String\u003e)"
});
formatter.result({
  "duration": 240975,
  "status": "passed"
});
formatter.match({
  "location": "ITTest.go_to_work()"
});
formatter.result({
  "duration": 77178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mess",
      "offset": 3
    }
  ],
  "location": "ITTest.my_work(String)"
});
formatter.result({
  "duration": 112072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fires",
      "offset": 9
    }
  ],
  "location": "ITTest.my_boss(String)"
});
formatter.result({
  "duration": 111662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Likes",
      "offset": 14
    }
  ],
  "location": "ITTest.my_dev(String)"
});
formatter.result({
  "duration": 142861,
  "status": "passed"
});
formatter.scenario({
  "id": "life-of-it-tester;i-am-a-tester;;4",
  "description": "",
  "name": "I am a Tester",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"Avg\" tester",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "industry",
        "Country"
      ],
      "line": 9
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 10
    },
    {
      "cells": [
        "Automobiles",
        "Germany"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I go to work",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I \"MeCom\" it",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "My boss \"Congrats\" me",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "My developer \"LiHa\" me",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Avg",
      "offset": 8
    }
  ],
  "location": "ITTest.what_tester(String,String\u003e)"
});
formatter.result({
  "duration": 288185,
  "status": "passed"
});
formatter.match({
  "location": "ITTest.go_to_work()"
});
formatter.result({
  "duration": 57062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MeCom",
      "offset": 3
    }
  ],
  "location": "ITTest.my_work(String)"
});
formatter.result({
  "duration": 106325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Congrats",
      "offset": 9
    }
  ],
  "location": "ITTest.my_boss(String)"
});
formatter.result({
  "duration": 89493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LiHa",
      "offset": 14
    }
  ],
  "location": "ITTest.my_dev(String)"
});
formatter.result({
  "duration": 117819,
  "status": "passed"
});
});