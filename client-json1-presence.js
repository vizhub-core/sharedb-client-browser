const ShareDBClient = require('sharedb/lib/client');
const json1Presence = require('ot-json1-presence');
const textUnicode = require('ot-text-unicode');

// We don't set the default type as json1Presence
// because it triggers some buggy behavior
// that is designed for json0.
// See https://github.com/share/sharedb/blob/master/lib/client/doc.js#L621
ShareDBClient.types.register(json1Presence.type);

// Expose OT types like this so that downstream consumers can access them.
ShareDBClient.json1Presence = json1Presence;
ShareDBClient.textUnicode = textUnicode;

module.exports = ShareDBClient;
