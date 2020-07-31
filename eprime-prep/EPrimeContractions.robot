*** Settings ***
Documentation    Suite description
Library          Browser
Test Setup       Open Browser    ${URL}      headless=false
Test Teardown    Close Browser
Test Template    Check a Phrase

*** Variables ***
${URL}       https://eviltester.github.io/TestingApp/apps/eprimer/eprimer.html

*** Test Cases ***      Phrase                              Copula
Contractions            I'm                                 I'm
Contractions2           you're                              you're
Contractions3           we're                               we're
Contractions4           they're                             they're
Contractions5           he's                                he's
Contractions6           she's                               she's
Contractions7           it's                                it's
Contractions8           there's                             there's
Contractions9           here's                              here's
Contractions10          where's                             where's
Contractions11          how's                               how's
Contractions12          what's                              what's
Contractions13          who's                               who's
Contractions14          that's                              that's
Contractions non-std    ain't                               ain't


*** Keywords ***
Check a Phrase
    [Arguments]     ${PHRASE}    ${OUTPUT}
    Type Text       \#inputtext      ${PHRASE}
    Click           \#CheckForEPrimeButton
    Get Text        .ep_violation   equal  ${OUTPUT}
