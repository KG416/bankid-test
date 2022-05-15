# BankID Test App

## [TLDR](https://www.howtogeek.com/435266/what-does-tldr-mean-and-how-do-you-use-it/)

This project is a template for how to implement BankID in an application. Use as much or as little of this code as you want. The app consists of 4 parts:

- Frontend in React (FE)
- HTTP server in node (HTTP)
- HTTPS server in node (HTTPS)
- BankID's JSON rest API (API)

**This is what happens when the user authenticates or signs with the app**
1. FE sends a request to HTTP
2. HTTP runs a function that sends an HTTPS request to the API

