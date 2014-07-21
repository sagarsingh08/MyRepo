Feature: Life of IT Tester

In order to get good salary 
As a IT Guy
I want to keep my boss happy

Scenario Outline: I am a Tester
Given I am a "<Tester_Type>" tester
|  industry     |  Country  |
|  IT           |  India    |
|  Automobiles  |  Germany  |
When I go to work
Then I "<Work_output>" it
And My boss "<Boss_Action>" me
But My developer "<Dev_Reaction>" me

Examples:
 |  Tester_Type  |  Work_output  |  Boss_Action  |  Dev_Reaction  |
 |  Good         |  Completes    |  Salute 		 |  Hates		  |
 |  Bad			 |  Mess		 |  Fires        |  Likes		  |
 |  Avg			 |  MeCom		 |  Congrats     |  LiHa		  |

