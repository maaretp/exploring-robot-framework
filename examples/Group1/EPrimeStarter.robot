*** Settings ***
Library             Browser

*** Variables ***
${URL}       https://eviltester.github.io/TestingApp/apps/eprimer/eprimer.html

*** Test Cases ***
Example Test
    Open Browser    ${URL}      headless=false
    fill text   \#inputtext     be
    click   \#CheckForEPrimeButton
    get text    \#wordCount    ==    1
    get text     \#discouragedWordCount      ==     1
    get text   \#possibleViolationCount   ==  0
    get text   .ep_violation    ==  be

being test
    new page     ${URL}
    fill text   \#inputtext     being's
    click   \#CheckForEPrimeButton
    get text    \#wordCount    ==    1
    get text     \#discouragedWordCount      ==     0
    get text   \#possibleViolationCount   ==  1
    get text   .ep_warning    ==  being's

being test
    new page     ${URL}
    type text   \#inputtext     %$*#    clear=False
    click   \#CheckForEPrimeButton
    get text    \#wordCount    ==    1
    get text     \#discouragedWordCount      ==     0
    get text   \#possibleViolationCount   ==    0
    #get text   .ep_warning    ==  being's