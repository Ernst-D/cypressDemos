Feature: User creates request transaction

    Some description needs to be added  

    Scenario: User logs in
        Given User is on the login page
        When It logs as Tavares_Barrows
        Then It sees the home page
        And User sees his username
    
    Scenario: User creates request transaction
        Given User is on the home page
        And User creates new transaction to user Giovanna74
        When It fill amount of money and adds note on transaction page
        And It clicks on a request button
        Then User see request in notifications
        And User can see request in Mine transactions