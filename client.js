import { Connection, Doc, Error, Query, types, logger } from 'sharedb/lib/client';

const ShareDBClient = {};

// Oddities of Closure Compiler.
// Without this it does not preserve the names.
// See https://developers.google.com/closure/compiler/docs/api-tutorial3#propnames
ShareDBClient['Connection'] = Connection;
ShareDBClient['Doc'] = Doc;
ShareDBClient['Error'] = Error;
ShareDBClient['Query'] = Query;
ShareDBClient['types'] = types;
ShareDBClient['logger'] = logger;

window['ShareDBClient'] = ShareDBClient;
