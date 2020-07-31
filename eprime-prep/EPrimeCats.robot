*** Settings ***
Documentation    Suite description
Library          Browser
Test Setup       Open Browser    ${URL}      headless=false
Test Teardown    Close Browser
Test Template    Check a Phrase

*** Variables ***
${URL}       https://eviltester.github.io/TestingApp/apps/eprimer/eprimer.html

*** Test Cases ***      Phrase                              Copula
Identity                The cat is my only pet              is
Identity2               The cat is Garfield                 is
Class Membership        Garfield is a cat                   is
Class Inclusion         A cat is an animal                  is
Predication             The cat is furry                    is
Auxiliary               The cat is sleeping                 is
Auxiliary Passive       The cat is being bitten by the dog  is
Existence               There is a cat                      is
Location                The cat is on the mat               is
Location2               The cat is here                     is


*** Keywords ***
Check a Phrase
    [Arguments]     ${PHRASE}    ${OUTPUT}
    Type Text       \#inputtext      ${PHRASE}
    Click           \#CheckForEPrimeButton
    Get Text        .ep_violation   equal  ${OUTPUT}
