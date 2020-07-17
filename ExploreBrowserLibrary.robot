*** Settings ***
Library           Browser   enable_playwright_debug=true

*** Variables ***
${URL}       http://selenium.thinkcode.se/
${BROWSER}     chromium
${HEADLESS}     headless:false

*** Test Cases ***

Find Hello World
    Open Browser    ${URL}      ${BROWSER}         ${HEADLESS}
    Click           \#helloWorld
    Get Text        \#headline  equal  Hello, world!
    [Teardown]      Close Browser


Checkboxes
    open browser    http://selenium.thinkcode.se/selectColor    headless=false
    check checkbox    input[name=color][value=red]
    check checkbox  input[name=color][value=green]
    check checkbox  input[name=color][value=blue]
    click   input[type=submit]
    get text  //body  contains  You wanted
    ${blue}   get text   //*[contains(text(),"blue")]
    should be equal     ${blue}   blue
    get text    //*[contains(text(), "green")]  shouldbe     green
    get text    //*[contains(text(), "red")]
    
Exchage Rates
    [tags]  exchange
    open browser     http://selenium.thinkcode.se/exchangeRate  headless=false
    fill text   \#from   USD
    fill text   \#to     EUR
    click    input[type=submit]
    wait for elements state  \#waitingMessage  hidden
    wait for elements state  \#exchangeRate  hidden
    get text    \#exchangeRate  shouldbe  The exchange rate from USD to EUR is 2.07


