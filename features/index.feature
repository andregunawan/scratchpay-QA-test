Feature: Index Express JS

    Scenario: Handles requests for calculating the date on which a settlement will reach a bank account, based on an initial date and a number of days of delay.
        Given User make a GET request with initial date '2022-05-10' and delay 60 business days
        When I received a response
        Then I expect response should have a status 200
        Then I expect response should have a json like
        """
        {
            "results": {
                "businessDate": "2022-08-04T07:00:00Z",
                "holidayDays": 3,
                "totalDays": 87,
                "weekendDays": 24
            }
        }
        """

    Scenario: Handles requests for determining if a given date is a business day.
        Given User make a GET request using business date '2022-06-23'
        When I received a response
        Then I expect response should have a status 200
        Then I expect response should have a json like
        """
        {
            "results": true
        }
        """

    Scenario: Handles requests for determining if a given date is a WEEKEND.
        Given User make a GET request using business date '2022-06-19'
        When I received a response
        Then I expect response should have a status 200
        Then I expect response should have a json like
        """
        {
            "results": false
        }
        """

    Scenario: Check incorrect date format should have a False result.
        Given User make a GET request using business date '2022-06-1999'
        When I received a response
        Then I expect response should have a status 200
        Then I expect response should have a json like
        """
        {
            "results": false
        }
        """

    Scenario: Check empty date should have an erro message.
        Given User make a GET request using business date ''
        When I received a response
        Then I expect response should have a status 200
        Then I expect response should have a json like
        """
        {
            "errorMessage": "A valid date is required"
        }
        """