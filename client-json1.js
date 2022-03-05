// Derived from
//   https://github.com/share/sharedb/blob/master/lib/client/index.js
//   https://github.com/share/sharedb/blob/master/lib/types.js
//
// Modified to swap out JSON0 with JSON1 as the default OT type.

export const types = {};

import json1 from 'ot-json1';

types.defaultType = json1.type;

types.map = {};

types.register = function (type) {
  if (type.name) types.map[type.name] = type;
  if (type.uri) types.map[type.uri] = type;
};

types.register(types.defaultType);

export { Connection } from 'sharedb/lib/client/connection';
export { Doc } from 'sharedb/lib/client/doc';
export { Query } from 'sharedb/lib/client/query';
export { Error } from 'sharedb/lib/error';
export { logger } from 'sharedb/lib/logger';
