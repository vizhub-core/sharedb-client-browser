const ShareDBClient = require('sharedb/lib/client');
const json1 = require('ot-json1');
const textUnicode = require('ot-text-unicode');

// We don't set the default type as json1
// because it triggers some buggy behavior
// that is designed for json0.
// See https://github.com/share/sharedb/blob/master/lib/client/doc.js#L621
ShareDBClient.types.register(json1.type);

// Expose OT types like this so that downstream consumers can access them.
ShareDBClient.json1 = json1;
ShareDBClient.textUnicode = textUnicode;

module.exports = ShareDBClient;
