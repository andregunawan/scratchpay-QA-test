# scratchpay-QA-test

## Business Day Checker
Returns the number of business days it will take for a payment to be allocated into an account.

### Run Locally

```
npm install
npm install cucumber pactum chai
npm start
npm run test
click https://reports.cucumber.io/reports/ at the end of the test to show test report
```

## API

The entire API is accessible under `/api/v1` and the following endpoints are available:

- `GET /api/v1/settlementDate`
- `GET /api/v1/isBusinessDay`

I run the API test using Postman here is the link to API test collection: 
https://www.getpostman.com/collections/513fcfe6e39cfc70def4

![Screen Shot 2022-06-20 at 10 22 24 PM](https://user-images.githubusercontent.com/30281591/174727323-b91f3678-3aed-4848-85f1-662ee9bd31a4.png)

![Screen Shot 2022-06-20 at 1 27 46 AM](https://user-images.githubusercontent.com/30281591/174727393-4f8eaa69-066e-4f0f-9c7f-b08014db2d79.png)
![Screen Shot 2022-06-20 at 1 27 58 AM](https://user-images.githubusercontent.com/30281591/174727395-e738af57-9cd9-4163-89c1-1c4aff21be9c.png)
![Screen Shot 2022-06-20 at 1 28 10 AM](https://user-images.githubusercontent.com/30281591/174727396-e7e88c50-17eb-4d7a-af7a-4cf287e24bd8.png)

## Tickets for Bug
https://trello.com/invite/b/tik4DhHL/5a2939c6807cd1d4f49ea667f460e440/scratch-pay-qa
