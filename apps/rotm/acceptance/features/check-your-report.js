'use strict';

const defaults = require('../defaults');

Feature('Check your report');

Before((
  I
) => {
  I.amOnPage('/');
  I.completeToStep('/check-your-report', defaults({
    source: 'Facebook',
    'more-info': ''
  }));
});

Scenario('Optional fields show as "Not given" on summary page', (
  I
) => {
  I.see('Not given', 'td[data-field="more-info"]');
});

Scenario('I can edit "more info" field and return to summary page', (
  I
) => {
  I.click('#more-info-change');
  I.seeInCurrentUrl('/more-info');
  I.fillField('more-info', 'Some information');
  I.click('input[type="submit"]');
  I.seeInCurrentUrl('/check-your-report');
  I.see('Some information', 'td[data-field="more-info"]');
});

Scenario('I can edit "source" field and return to summary page', (
  I
) => {
  I.click('#source-change');
  I.seeInCurrentUrl('/source');
  I.fillField('source', 'A different source');
  I.click('input[type="submit"]');

  I.seeInCurrentUrl('/check-your-report');
  I.see('A different source', 'td[data-field="source"]');
});

Scenario('I see an image thumbnail if I have uploaded an image', (
  I
) => {
  I.seeElement('td[data-field="image"] img');
});

