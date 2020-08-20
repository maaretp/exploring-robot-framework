*** Settings ***
Library             Browser
Library             OperatingSystem
Test Setup          Open Browser    ${URL}      headless=false
Test Teardown       Close Browser
Resource            TypesOfVerifications.resource

*** Variables ***
${URL}       https://eviltester.github.io/TestingApp/apps/eprimer/eprimer.html

*** Test Cases ***

Check a Phrase
    Type Text       \#inputtext      Socrates is a crafter conference ain't it
    Click           \#CheckForEPrimeButton
    Verify when only violations  is     7   2   0

Check a Phrase from File
    Input Phrase from File  eprime/text.txt
    Verify when only violations  be  490   2   0

Check Count of Words
    Type Text       \#inputtext      Word count: 4\nDiscouraged words: 0\nPossible violations: 0
    Click           \#CheckForEPrimeButton
    #Below reasonable expectations for this input. What we get is 7 and it makes no sense.
    Verify wordcount    6
    Verify wordcount    9

*** Keywords ***
Verify wordcount
    [Arguments]      ${wordcount}
    Get Text        \#wordCount     equal   ${wordcount}

Verify when no violations or warnings
    [Arguments]     ${text}
    Get Text        \#eprimeoutput   equal  ${text}

Verify when only warnings
    [Arguments]     ${first_word}    ${wordcount}    ${discouragedcount}    ${possibleviolatedcount}
    Get Text        .ep_warning   equal  ${first_word}
    Get Text        \#wordCount     equal   ${wordcount}
    Get Text        \#discouragedWordCount  equal   ${discouragedcount}
    Get Text        \#possibleViolationCount    equal   ${possibleviolatedcount}

Verify when only violations
    [Arguments]     ${first_word}    ${wordcount}  ${discouragedcount}  ${possibleviolatedcount}
    Get Text        .ep_violation   equal  ${first_word}
    Get Text        \#wordCount     equal   ${wordcount}
    Get Text        \#discouragedWordCount  equal   ${discouragedcount}
    Get Text        \#possibleViolationCount    equal   ${possibleviolatedcount}

Verify when both violations and warnings
   [Arguments]      ${first_violated_word}  ${first_warned_word}   ${wordcount}    ${possibleviolatedcount}   ${discouragedcount}
    Get Text        .ep_violation   equal  ${first_violated_word}
    Get Text        .ep_warning  equal  ${first_warned_word}
    Get Text        \#wordCount     equal   ${wordcount}
    Get Text        \#discouragedWordCount  equal   ${discouragedcount}
    Get Text        \#possibleViolationCount    equal   ${possibleviolatedcount}

