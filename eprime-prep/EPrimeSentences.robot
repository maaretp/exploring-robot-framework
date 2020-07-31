*** Settings ***
Documentation    Suite description
Library          Browser
Test Setup       Open Browser    ${URL}      headless=false
Test Teardown    Close Browser
Test Template    Check a Phrase

*** Variables ***
${URL}       https://eviltester.github.io/TestingApp/apps/eprimer/eprimer.html

*** Test Cases ***      Phrase  Copula
Bible1      Blessed are the poor in spirit, for theirs is the kingdom of heaven   are
Emotion     I am depressed                                                        am

*** Keywords ***
Check a Phrase
    [Arguments]     ${PHRASE}    ${OUTPUT}
    Type Text       \#inputtext      ${PHRASE}
    Click           \#CheckForEPrimeButton
    Get Text        .ep_violation   equal  ${OUTPUT}