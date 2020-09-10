# Cypress - testing Google main page
This repository contains test suit which tests all functions on Google main page.
#### Tested categories and test cases:
<b>Not signed in:</b>
 1. internal links
    - ✔ "Gmail" link opens page with information about Gmail (about)
    - ✔ "Images" link opens image search
    - ✔ Google apps icon opens menu with avaiable Google apps
    - ✔ "Sign in" button leads to Google sign in page
2. Field validation
    - clicking Search bar suggest previous searches
    - clicking Search bar and typing searched word suggest previous searches and recommended suggestions
    - clicking Search bar and submitting remains on the same page
        - via pressing Enter
        - via "Google search" button
    - clicking Search bar, typing query and submitting opens page with search results
        - via pressing Enter
        - via "Google search" button



<b>Signed in:</b>
1. internal links
    - Gmail link opens users Gmail
    - "Images" link opens image search
    - Google apps icon opens menu with avaiable Google apps
    - clicking user avatar opens menu with managing Google account

## Notes:
- Due to technical limitations of Cypress, link targets were removed while testing internal links. This means links will not open in new tabs but this is not an issue since there no such links on Google main page.
