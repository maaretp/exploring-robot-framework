*** Settings ***
Documentation    Suite description
Library          Browser
Library          OperatingSystem
Test Setup       Open Browser    ${URL}      headless=false
Test Teardown    Close Browser
Test Template    Check Phrase from File

*** Variables ***
${URL}       https://eviltester.github.io/TestingApp/apps/eprimer/eprimer.html

*** Test Cases ***          Copula
OneFile                     be

*** Keywords ***

Check Phrase from File
    [Arguments]     ${OUTPUT}
    ${TextFileContent}    Get File    text.txt
    Type Text       \#inputtext      ${TextFileContent}
    Click           \#CheckForEPrimeButton
    Get Text        .ep_violation  equal  ${OUTPUT}

