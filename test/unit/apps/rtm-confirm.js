'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

describe('controllers/confirm', function () {

  describe('.saveValues()', function () {

    var req;
    var res;
    var callback;


    var modelProto = {
      save: sinon.spy(),
      set: sinon.stub()
    };
    var Model = sinon.stub().returns(modelProto);

    var ConfirmController = proxyquire('../../../apps/rtm/controllers/confirm', {
      '../../common/models/email': Model
    });

    beforeEach(function () {
      req = {
        sessionModel: {
          toJSON: sinon.stub().returns({report: [{some: 'data'}]})
        }
      };
      res = {};
      callback = sinon.stub();

      /*eslint no-unused-vars: 0*/
      ConfirmController.prototype.saveValues(req, res, callback);

    });

    it('should use the email service to send values', function () {
      /*eslint no-unused-vars: 1*/

      modelProto.set.should.have.been.called;

    });

    it('should pass a callback to the email service', function () {
      /*eslint no-unused-vars: 1*/

      modelProto.save.should.have.been.calledWith(callback);

    });
  });
});