*** Settings ***
Library             Browser
Test Setup          Open Browser    ${URL}      headless=false
Test Teardown       Close Browser
Test Template       Check a Phrase without discouraged words and possible violations
Resource            TypesOfVerifications.resource

*** Test Cases ***
Cat in hat      Cat in a hat
Sandwich        I eat sandwich
Bible2          The poor in spirit receive blessings, for the kingdom of heaven belongs to them.
Emotion         I tend to make myself depressed about
Emotion2        I feel depressed when
