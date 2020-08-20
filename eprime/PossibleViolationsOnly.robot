*** Settings ***
Library             Browser
Test Setup          Open Browser    ${URL}      headless=false
Test Teardown       Close Browser
Test Template       Check a Phrase with only possible violations
Resource            TypesOfVerifications.resource

*** Test Cases ***
Possessive   Cat's pet looks good in the hat   Cat's  7   0   1
Slag         Who's the boss     Who's   3   0   1
