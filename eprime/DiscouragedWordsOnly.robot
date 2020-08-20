*** Settings ***
Library             Browser
Test Setup          Open Browser    ${URL}      headless=false
Test Teardown       Close Browser
Test Template       Check a Phrase with only discouraged words
Resource            TypesOfVerifications.resource

*** Test Cases ***
Socrates                Socrates is a crafter conference ain't it   is      7   2   0
#Expecting fail as the Linebreak test demonstrates a bug
Linebreak               Being\nare                                  Being   2   2   0
Identity                The cat is my only pet                      is      6   1   0
Identity2               The cat is Garfield                         is      4   1   0
Class Membership        Garfield is a cat                           is      4   1   0
Class Inclusion         A cat is an animal                          is      5   1   0
Predication             The cat is furry                            is      4   1   0
Auxiliary               The cat is sleeping                         is      4   1   0
Auxiliary Passive       The cat is being bitten by the dog          is      8   2   0
Existence               There is a cat                              is      4   1   0
Location                The cat is on the mat                       is      6   1   0
Location2               The cat is here                             is      4   1   0
Forbidden1              be                                          be      1   1   0
Forbidden2              being                                       being   1   1   0
Forbidden3              been                                        been    1   1   0
Forbidden4              am                                          am      1   1   0
Forbidden5              is                                          is      1   1   0
Forbidden6              isn't                                       isn't   1   1   0
Forbidden7              are                                         are     1   1   0
Forbidden8              aren't                                      aren't  1   1   0
Forbidden9              was                                         was     1   1   0
Forbidden10             wasn't                                      wasn't  1   1   0
Forbidden11             were                                        were    1   1   0
Forbidden12             weren't                                     weren't  1   1   0
Contractions            I'm                                         I'm     1   1   0
Contractions2           you're                                      you're  1   1   0
Contractions3           we're                                       we're   1   1   0
Contractions4           they're                                     they're  1   1   0
Contractions5           he's                                        he's     1   1   0
Contractions6           she's                                       she's    1   1   0
Contractions7           it's                                        it's     1   1   0
Contractions8           there's                                     there's  1   1   0
Contractions9           here's                                      here's   1   1   0
Contractions10          where's                                     where's  1   1   0
Contractions11          how's                                       how's    1   1   0
Contractions12          what's                                      what's   1   1   0
Contractions13          who's                                       who's    1   1   0
Contractions14          that's                                      that's   1   1   0
Contractions non-std    ain't                                       ain't    1   1   0
Contractions from code  amn't                                       amn't    1   1   0
Bible1      Blessed are the poor in spirit, for theirs is the kingdom of heaven   are   13  2   0
Emotion     I am depressed                                                        am    3   1   0