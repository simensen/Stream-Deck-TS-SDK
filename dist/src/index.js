"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDReady = exports.SDOnEvent = exports.SDInit = exports.SDPropertyInspector = exports.SDPlugin = exports.SDDebug = exports.StreamDeckPlugin = void 0;
const decorator_declarations_1 = require("./decorators/decorator-declarations");
Object.defineProperty(exports, "SDDebug", { enumerable: true, get: function () { return decorator_declarations_1.SDDebug; } });
Object.defineProperty(exports, "SDPlugin", { enumerable: true, get: function () { return decorator_declarations_1.SDPlugin; } });
Object.defineProperty(exports, "SDPropertyInspector", { enumerable: true, get: function () { return decorator_declarations_1.SDPropertyInspector; } });
Object.defineProperty(exports, "SDInit", { enumerable: true, get: function () { return decorator_declarations_1.SDInit; } });
Object.defineProperty(exports, "SDOnEvent", { enumerable: true, get: function () { return decorator_declarations_1.SDOnEvent; } });
Object.defineProperty(exports, "SDReady", { enumerable: true, get: function () { return decorator_declarations_1.SDReady; } });
const stream_deck_plugin_1 = require("./stream-deck-plugin");
Object.defineProperty(exports, "StreamDeckPlugin", { enumerable: true, get: function () { return stream_deck_plugin_1.StreamDeckPlugin; } });