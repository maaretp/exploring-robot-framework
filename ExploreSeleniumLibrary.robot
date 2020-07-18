*** Settings ***
Documentation       Exploring Selenium Library, with selected keywords and targets of testing
Library             SeleniumLibrary

*** Test Cases ***
Select One Color
    Open Browser                    http://selenium.thinkcode.se/selectColor
    Select Checkbox                 css=input[name=color][value=blue]
    Click Button                    css=input[type=submit]
    Wait Until Element is Visible   css=li
    Page Should Contain             blue
    Close Browser
