*** Settings ***
Documentation    Suite description
Library          Browser
Test Setup       Open Browser    ${URL}      headless=false
Test Teardown    Close Browser
Test Template    Check ePrime Phrase

*** Variables ***
${URL}       https://eviltester.github.io/TestingApp/apps/eprimer/eprimer.html

*** Test Cases ***      Phrase  Copula
Bible2      The poor in spirit receive blessings, for the kingdom of heaven belongs to them.
Emotion     I tend to make myself depressed about
Emotion2    I feel depressed when

*** Keywords ***
Check ePrime Phrase
    [Arguments]     ${PHRASE}
    Type Text       \#inputtext      ${PHRASE}
    Click           \#CheckForEPrimeButton
    Get Text        \#eprimeoutput   equal  ${PHRASE}