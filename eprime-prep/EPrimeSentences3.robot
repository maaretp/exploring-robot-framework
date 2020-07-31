*** Settings ***
Documentation    Suite description
Library          Browser
Test Setup       Open Browser    ${URL}      headless=false
Test Teardown    Close Browser
Test Template    Check Phrase with Violations

*** Variables ***
${URL}       https://eviltester.github.io/TestingApp/apps/eprimer/eprimer.html

*** Test Cases ***      Phrase          Copula
Possessive              Maaret's        Maaret's
Possessive sentence     Maaret's thing  Maaret's

*** Keywords ***
Check Phrase with Violations
    [Arguments]     ${PHRASE}   ${OUTPUT}
    Type Text       \#inputtext      ${PHRASE}
    Click           \#CheckForEPrimeButton
    Get Text        .ep_warning  equal  ${OUTPUT}