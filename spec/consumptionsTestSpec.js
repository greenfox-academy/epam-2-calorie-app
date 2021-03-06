'use strict';

var consumptions = require('../server/consumptions');

describe('test getAllConsumption', function() {
  it('is respons array', function(done) {
    var psql = {};
    psql.dbConnection = function(task,cb) {
      cb(null, [{}]);
    };
    consumptions.getAll(psql,function(err, result) {
      expect(result.length).toBeGreaterThan(0);
      done();
    });
  });
});

describe('test psql all consumption task', function() {
  it('is respons array', function(done) {
    var psql = {};
    psql.dbConnection = function(task, cb) {
      expect(task).toBe('SELECT cons_id, cons_name, cons_calories, date FROM consumption;');
      done();
    };
    consumptions.getAll(psql,function(err, result) {});
  });
});
