QUnit.test("Length is not 10", function (assert) {                 //lengden er ikke 10
    assert.equal(isDateValid('02.03.199'), false);
});

QUnit.test("Inproper Punctuation", function (assert) {             //det er ikke punktum i begge de rette posisjonene
    assert.equal(isDateValid('02.0.31990'), false);
});

QUnit.test("Year does not have 4 characters", function (assert) {  //�ret best�r ikke av fire siffer
    assert.equal(isDateValid('02.03.199'), false);
});

QUnit.test("Month does not have 2 characters", function (assert) {   //m�ned best�r ikke av to siffer
    assert.equal(isDateValid('02.3.1990'), false);
});

QUnit.test("Month is not between 1-12", function (assert) {          //m�ned utenfor 1 - 12
    assert.equal(isDateValid('02.13.1990'), false);
});

QUnit.test("Day is larger than 31", function (assert) {              //dag er st�rre enn 31
    assert.equal(isDateValid('32.03.1990'), false);
});

QUnit.test("Day is 31, for month with 30 days", function (assert) {  //dag er 31 for en m�ned som ikke har 31 dager
    assert.equal(isDateValid('31.06.1990'), false);
});

QUnit.test("Day is 30, for february", function (assert) {            //dag er 30 og m�ned er februar
    assert.equal(isDateValid('30.02.1990'), false);
});

QUnit.test("Day is 29 of february, but it's not leap year", function (assert) {      //dag er 29 og m�ned er februar og det ikke er skudd�r
    assert.equal(isDateValid('29.02.1990'), false);
});

QUnit.test("Day is 29 of february, and it is leap year", function (assert) {               //En test som viser at 29. februar blir gyldig n�r det er skudd�r
    assert.equal(isDateValid('29.02.2012'), true);
});


