const {When, Then, Given, Before} = require('@cucumber/cucumber')
const {expect} = require('chai')
const businessDates = require('../../lib/dates')
const routesDates = require('../../routes/business_dates')
const {DateTime} = require('luxon')

// Steps for lib/dates.js
When('User input weekend date {int}-{int}-{int} it should return as True', function (year, month, day) {
    date = DateTime.local(year, month, day)
    expect(businessDates.isWeekendDay(date)).to.be.true 
});

Then('If user input weekday date {int}-{int}-{int} it should return as False', function (year, month, day) {
    date = DateTime.local(year, month, day)
    expect(businessDates.isWeekendDay(date)).to.be.false    
});

When('User input is a holiday date {int}-{int}-{int} in {string} it should return as True', function (year, month, day, country) {
    date = DateTime.local(year, month, day)
    expect(businessDates.isHolidayDay(date, country)[0]).to.have.any.keys('name', 'type');
    console.log('IT\'S A HOLIDAY!!! ' + businessDates.isHolidayDay(date, country)[0]["name"])
});

Then('If user input is not a holiday date {int}-{int}-{int} in {string} it should return as False', function (year, month, day, country) {
    date = DateTime.local(year, month, day)
    expect(businessDates.isHolidayDay(date, country)).to.be.false 
});

When('User start counting days from {int}-{int}-{int} for {int} business days in {string}', function (year, month, day, delay, country) {
    date = DateTime.local(year, month, day)
    console.log(businessDates.getTotalDelay(date, delay, country))
});

When('User input business day date {int}-{int}-{int} in {string} it should return as True', function (year, month, day, country) {
    date = DateTime.local(year, month, day)
    expect(businessDates.isBusinessDay(date, country)).to.be.true 
});

Then('If user input weekend date {int}-{int}-{int} in {string} it should return as False', function (year, month, day, country) {
    date = DateTime.local(year, month, day)
    expect(businessDates.isBusinessDay(date, country)).to.be.false
});

Then('If user input holiday date {int}-{int}-{int} in {string} it should return as False', function (year, month, day, country) {
    date = DateTime.local(year, month, day)
    expect(businessDates.isBusinessDay(date, country)).to.be.false
});

// Steps for API test
const pactum = require('pactum');
let spec = pactum.spec();

Before(() => {
  spec = pactum.spec();
});

Given('User make a GET request with initial date {string} and delay {int} business days', function (date, delay) {
    spec.get("http://localhost:3000/api/v1/settlementDate?initialDate=" + date + "&delay=" + delay);
});

When('I received a response', async function () {
    await spec.toss();
});

Then('I expect response should have a status {int}', function (code) {
    spec.response().should.have.status(code);
});

Then('I expect response should have a json like', function (json) {
    spec.response().should.have.jsonLike(JSON.parse(json));
});

Given('User make a GET request using business date {string}', function (date) {
    spec.get("http://localhost:3000/api/v1/isBusinessDay?date=" + date); 
});

