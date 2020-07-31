*** Settings ***
Documentation    Suite description
Library          Browser
Test Setup       Open Browser    ${URL}      headless=false
Test Teardown    Close Browser
Test Template    Check a Phrase

*** Variables ***
${URL}       https://eviltester.github.io/TestingApp/apps/eprimer/eprimer.html

*** Test Cases ***      Phrase                              Copula
Forbidden1              be                                  be
Forbidden2              being                               being
Forbidden3              been                                been
Forbidden4              am                                  am
Forbidden5              is                                  is
Forbidden6              isn't                               isn't
Forbidden7              are                                 are
Forbidden8              aren't                              aren't
Forbidden9              was                                 was
Forbidden10             wasn't                              wasn't
Forbidden11             were                                were
Forbidden12             weren't                             weren't

*** Keywords ***
Check a Phrase
    [Arguments]     ${PHRASE}    ${OUTPUT}
    Type Text       \#inputtext      ${PHRASE}
    Click           \#CheckForEPrimeButton
    Get Text        .ep_violation   equal  ${OUTPUT}
