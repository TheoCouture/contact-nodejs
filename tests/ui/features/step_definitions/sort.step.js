const { Given , Then , When } = require ('cucumber');

const assert = require ( 'assert' );

When('User clicks on sort button', function (callback) {
    // Write code here that turns the phrase above into concrete actions

        this.browser.query('#button_sort').click();

        callback();


});

Then('The list of contact is sorted by last name', function (callback) {
    // Write code here that turns the phrase above into concrete actions

    var ContactList = this.browser.tabs.current.Contact;
    var ContactList = ContactList.Contacts.instance().sort();


    assert.ok(this.browser.queryAll('td#cellFirstName')[0].innerHTML == ContactList[0].firstName());
    assert.ok(this.browser.queryAll('td#cellLastName')[0].innerHTML == ContactList[0].lastName());


    callback();
});

