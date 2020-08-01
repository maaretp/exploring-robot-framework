*** Settings ***
Library           Browser

*** Variables ***
${URL}       https://eviltester.github.io/TestingApp/apps/eprimer/eprimer.html

*** Test Cases ***

Check a Phrase
    Open Browser    ${URL}      headless=false
    Type Text       \#inputtext      Socrates is a crafter conference ain't it
    Click           \#CheckForEPrimeButton
    Get Text        .ep_violation   equal  is
    Get Text        \#wordCount     equal   7
    Get Text        \#discouragedWordCount  equal   2
    Get Text        \#possibleViolationCount    equal   0
    Close Browser