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
import types from 'sharedb/lib/types';
import json1 from 'ot-json1';

// TODO figure out how to exclude json0 from the bundle
types.defaultType = json1.type;
types.register(types.defaultType);

export { Connection, Doc, Query, Error, logger, types };
