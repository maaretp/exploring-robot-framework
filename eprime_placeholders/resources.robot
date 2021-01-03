*** Settings ***
Documentation   Oh well

*** Keywords ***
Check wordcount
    [Arguments]     ${foo}
    Log             Examples of how it counts right amount of words ${foo}
