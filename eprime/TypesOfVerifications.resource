*** Variables ***
${URL}       https://eviltester.github.io/TestingApp/apps/eprimer/eprimer.html

*** Keywords ***
Check a Phrase without discouraged words and possible violations
    [Arguments]     ${text}
    Input Phrase    ${text}
    Verify when no violations or warnings   ${text}

Check a Phrase with only discouraged words
    [Arguments]     ${text}  ${first_word}  ${wordcount}  ${discouragedcount}  ${possibleviolatedcount}
    Input Phrase    ${text}
    Verify when only violations   ${first_word}  ${wordcount}  ${discouragedcount}  ${possibleviolatedcount}

Check a Phrase with only possible violations
    [Arguments]     ${text}  ${first_word}  ${wordcount}  ${discouragedcount}  ${possibleviolatedcount}
    Input Phrase    ${text}
    Verify when only warnings  ${first_word}  ${wordcount}  ${discouragedcount}  ${possibleviolatedcount}

Check a Phrase with both discouraged words and possible violations
    [Arguments]     ${text}  ${first_violated_word}  ${first_warned_word}   ${wordcount}    ${possibleviolatedcount}   ${discouragedcount}
    Input Phrase    ${text}
    Verify when both violations and warnings  ${first_violated_word}  ${first_warned_word}   ${wordcount}    ${possibleviolatedcount}   ${discouragedcount}

Input Phrase
    [Arguments]     ${text}
    Type Text       \#inputtext      ${text}
    Click           \#CheckForEPrimeButton

Input Phrase from File
    [Arguments]     ${filename}
    ${TextFileContent}    Get File    ${filename}
    Type Text       \#inputtext      ${TextFileContent}
    Click           \#CheckForEPrimeButton

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
