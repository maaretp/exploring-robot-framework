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

Request Password
    Open Browser    ${URL}      ${BROWSER}      ${HEADLESS}
    Click           \#requestPassword
    Type Text       \#account   MyAccount
    Click           [name=submit]
    Get Text        \#confirmation      contains    sent to MyAccount
    Get Text        \#confirmation      shouldnotbe    A new password has been sent to YourAccount
    [Teardown]      Close Browser

Select All Colors and Mess Up kEyWorD caPitAliZation
    [Tags]          ColorPicker
    open browser    http://selenium.thinkcode.se/selectColor    headless=false
    check Checkbox  input[name=color][value=red]
    check checkbox  input[name=color][value=green]
    check checkbox  input[name=color][value=blue]
    click           input[type=submit]
    get text        //body  contains  You wanted
    ${blue}   get text   //*[contains(text(),"blue")]
    should be equal     ${blue}   blue
    get text        //*[contains(text(), "green")]  shouldbe     green
    get text        //*[contains(text(), "red")]
    [Teardown]      Close Browser

Select One Color
    [Tags]          ColorPicker
    Open Browser    http://selenium.thinkcode.se/selectColor    headless=false
    Check Checkbox  input[name=color][value=blue]
    Click           input[type=submit]
    get text        li    equal      blue
    [Teardown]      Close Browser

Select Beverage
    [Tags]              Beverage
    Open Browser        http://selenium.thinkcode.se/selectBeverage    headless=false
    Check Checkbox      input[type=radio][value=tea]
    Click               input[type=radio][value=coffee]
    Get Checkbox State  input[type=radio][value=coffee]     equal   ${TRUE}
    Get Checkbox State  input[type=radio][value=tea]        equal   ${FALSE}



Exchage Rates
    [tags]  exchange
    open browser     http://selenium.thinkcode.se/exchangeRate  headless=false
    fill text   \#from   USD
    fill text   \#to     EUR
    click    input[type=submit]
    wait for elements state  \#waitingMessage  hidden
    wait for elements state  \#exchangeRate  hidden
    get text    \#exchangeRate  shouldbe  The exchange rate from USD to EUR is 2.07


