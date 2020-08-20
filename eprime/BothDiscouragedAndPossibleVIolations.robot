*** Settings ***
Library             Browser
Test Setup          Open Browser    ${URL}      headless=false
Test Teardown       Close Browser
Test Template       Check a Phrase with both discouraged words and possible violations
Resource            TypesOfVerifications.resource

*** Test Cases ***
First Example   Cat's friend is in the bag  is  Cat's   6   1   1