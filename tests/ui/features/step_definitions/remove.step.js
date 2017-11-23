const { Given , Then , When } = require ('cucumber');

const assert = require ( 'assert' );
//const chai = require ('chai');

var buttonfirst;

Given('The contact list is display', function (callback) {
    // Write code here that turns the phrase above into concrete actions


    this.browser.visit ("/" ,(err) => {
        if (err) throw err ;
        assert.ok (this.browser.success, 'page loaded');

        assert.equal (this.browser.text('th#cellFirstName'),'First name');
        assert.equal (this.browser.text('th#cellLastName'),'Last name');
        assert.equal (this.browser.text('th#cellPhones'),'Phones');
        assert.equal (this.browser.text('th#cellMails'),'Mails');
        assert.equal (this.browser.text('th#cellTags'),'Tags');



        var ContactList = this.browser.tabs.current.Contact;
        var ContactList = ContactList.Contacts.instance().iterator();
        var i = 0;
        while (ContactList.hasNext()){
            var contact = ContactList.next();


            assert.equal(this.browser.queryAll('td#cellFirstName')[i].innerHTML, contact.firstName());
            assert.equal(this.browser.queryAll('td#cellLastName')[i].innerHTML, contact.lastName());

            i++;

        }


        callback ();
    });

});


When('User clicks on remove button of the first contact', function (callback) {
    // Write code here that turns the phrase above into concrete actions

    this.browser.visit ("/" ,(err) => {
        if (err) throw err ;
        var ContactList = this.browser.tabs.current.Contact;
        var ContactList = ContactList.Contacts.instance().iterator();

        buttonfirst = "#button_" + ContactList.first().id();
        this.browser.query(buttonfirst).click();


        callback();
    });
});




Then('The first contact is removed', function (callback) {
    // Write code here that turns the phrase above into concrete actions

    this.browser.visit ("/" ,(err) => {
        if (err) throw err ;

        var ContactList = this.browser.tabs.current.Contact;
        var ContactList = ContactList.Contacts.instance().iterator();

        var buttonsecond = "#button_" + ContactList.first().id();

        assert.notEqual(buttonfirst,buttonsecond);


        callback();

    });
});

