Feature: Business Dates Calculation

    Scenario: Checks whether or not a date corresponds to a weekend day.
        When User input weekend date 2021-11-14 it should return as True
        Then If user input weekday date 2021-11-18 it should return as False
    
    Scenario: Checks whether or not a date corresponds to a holiday.
        When User input is a holiday date 2021-12-25 in 'US' it should return as True
        Then If user input is not a holiday date 2021-06-16 in 'US' it should return as False
    
    Scenario: Returns an object containing all the days in the delay by including weekend days and holidays.
        When User start counting days from 2022-05-10 for 60 business days in 'US'
    
    Scenario: Checks if a given date is a business day.
        When User input business day date 2022-06-16 in 'US' it should return as True
        Then If user input weekend date 2022-06-18 in 'US' it should return as False 
        Then If user input holiday date 2022-11-24 in 'US' it should return as False