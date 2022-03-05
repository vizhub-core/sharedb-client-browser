// Derived from
//   https://github.com/share/sharedb/blob/master/lib/client/index.js
//   https://github.com/share/sharedb/blob/master/lib/types.js
//
// Modified to swap out JSON0 with JSON1 as the default OT type.

import Connection from 'sharedb/lib/client/connection';
import Doc from 'sharedb/lib/client/doc';
import Query from 'sharedb/lib/client/query';
import Error from 'sharedb/lib/error';
import logger from 'sharedb/lib/logger';
import json1 from 'ot-json1';

console.log('Connection');
console.log(Connection);

const types = {};

types.defaultType = json1.type;

types.map = {};

types.register = function (type) {
  if (type.name) types.map[type.name] = type;
  if (type.uri) types.map[type.uri] = type;
};

types.register(types.defaultType);

export { Connection, Doc, Query, Error, logger, types };
