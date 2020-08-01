*** Settings ***
Library             Browser
Test Setup          Open Browser    ${URL}      headless=false
Test Teardown       Close Browser

*** Variables ***
${URL}       https://eviltester.github.io/TestingApp/apps/eprimer/eprimer.html

*** Test Cases ***

Check a Phrase
    Type Text       \#inputtext      Socrates is a crafter conference ain't it
    Click           \#CheckForEPrimeButton
    Verify when only violations  is     7   2   0


*** Keywords ***
Verify when no violations or warnings
    [Arguments]     ${text}
    Get Text        \#eprimeoutput   equal  ${text}

Verify when only warnings
    [Arguments]     ${first_word}    ${wordcount}    ${discouragedcount}    ${possibleviolatedcount}
    Get Text        .ep_warnings   equal  ${first_word}
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
    Get Text        .ep_warnings  equal  ${first_warned_word}
    Get Text        \#wordCount     equal   ${wordcount}
    Get Text        \#discouragedWordCount  equal   ${discouragedcount}
    Get Text        \#possibleViolationCount    equal   ${possibleviolatedcount}


#Get Style
#discouragedWordCoud
#.ep_warning => possible violations
#.ep_violation => actual violations