Feature: User can sort the contact list by last name
  As a user

  Scenario: User sort the contact list
    Given The contact list is display
    When User clicks on sort button
    Then The list of contact is sorted by last name