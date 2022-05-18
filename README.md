# BankID Test App

## [TLDR](https://www.howtogeek.com/435266/what-does-tldr-mean-and-how-do-you-use-it/)

BankID is a Swedish method of electronic identification & signing. This app is a template for how an implementation of BankID can be done. The app consists of 4 parts:

- Frontend in React (FE)
- HTTP server in node (HTTP)
- HTTPS server in node (HTTPS)
- BankID's JSON rest API (API)

**This is what happens when the user authenticates or signs with the app**
1. FE sends a request to HTTP
2. HTTP runs a function that sends an HTTPS request to the API
3. Response is sent back to FE via BE (API -> BE -> FE) unless some of the response should only be saved in BE.