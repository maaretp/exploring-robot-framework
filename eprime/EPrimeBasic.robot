*** Settings ***
Library           Browser

*** Variables ***
${URL}       https://eviltester.github.io/TestingApp/apps/eprimer/eprimer.html

*** Test Cases ***

Check a Phrase
    Open Browser    ${URL}      headless=false
    Type Text       \#inputtext      The cat is my only pet
    Click           \#CheckForEPrimeButton
    Get Text        .ep_violation   equal  is
    [Teardown]      Close Browser