# Cypress - testing Google main page
This repository contains test suit which tests some functions on Google main page. Reason for doing that is to learn Cypress.
#### Test cases:
Internal links
✔ "Gmail" link opens page with information about Gmail (about)
✔ "Images" link opens image search
✔ Google apps icon opens menu with avaiable Google apps
✔ "Sign in" button leads to Google sign in page

#### Notes:
Due to technical limitations of Cypress, link targets were removed while testing internal links. This means links will not open in new tabs but this is not an issue since there no such links on Google main page.

<b>❗ This repository development was stopped because testing 3rd party application is an [antipattern](https://docs.cypress.io/guides/references/best-practices.html#Visiting-external-sites).