*** Settings ***
Library             Browser
Test Setup          Open Browser    ${URL}      headless=false
Test Teardown       Close Browser
Test Template       Check a Phrase with only discouraged words
Resource            TypesOfVerifications.resource

*** Test Cases ***
Test1   Socrates is a crafter conference ain't it   is  7   2   0
