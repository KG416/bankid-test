# BankID Test App

_Please use [BankID's official documentation](https://www.bankid.com/en/utvecklare/guider/teknisk-integrationsguide) as your main source of information for implementing BankID in an application. This project and this documentation was made in **may 2022** and changes may have occured since._

## What is this? (TLDR)

This app is a template for how an implementation of BankID can be done. BankID is a Swedish method of electronic identification & signing. The app consists of 4 parts.

- Frontend in React (FE)
- HTTP server in node (HTTP)
- HTTPS server in node (HTTPS)
- BankID's JSON rest API (API)

## Prerequisites

- A BankID for test
- A test version of a swedish social security number

[How do I get this?](https://www.bankid.com/en/utvecklare/test/skaffa-testbankid/test-bankid-get)

## How to use

In a terminal, run the following commands from the project root folder

1. `npm run server` starts node server
2. `npm run client` starts react dev server
3. App is now running on port 3000

## Features

The app allows you to try an example of the following BankID services

- Logging in
- Signing something

## The app flow in short

This is what happens when the user authenticates or signs with the app

1. FE sends a request to HTTP
2. HTTP runs a function that sends an HTTPS request to the API
3. Response is sent back to FE via BE (API -> BE -> FE) unless some of the response should only be saved in BE

## The app flow in more detail

### API endpoints

**auth** + **sign** <br>
These are called _orders_. An order lasts for a maximum of 30 seconds.

**collect** <br>
Is sent every other second until order is completed, failed or cancelled

**cancel** <br>
Cancels an ongoing order from the frontend. The user can also cancel an order by simply clicking cancel/avbryt in the BankID app.

_For further details, please read [BankID's official documentation](https://www.bankid.com/en/utvecklare/guider/teknisk-integrationsguide)_

## Project backlog

- Add QR code support

- Connect all official user messages to the corresponding order status

  - You can find all messages and their corresponding order status in `userMessages.json`

- Enable support for finishing an order on a different device than you started on
  - As of now, the app only supports the completion of orders on the same device as you started the order on
