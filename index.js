module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(676);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 87:
/***/ (function(module) {

module.exports = require("os");

/***/ }),

/***/ 103:
/***/ (function(module) {

module.exports = eval("require")("./index/create");


/***/ }),

/***/ 154:
/***/ (function(module, __unusedexports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(518)) :
	undefined;
}(this, (function (isPromise) { 'use strict';

isPromise = isPromise && isPromise.hasOwnProperty('default') ? isPromise['default'] : isPromise;

var handle = function handle(p) {
  return p.catch(function (err) {
    console.error(err);
    process.exit(1);
  });
};

/**
 * <a id="main"></a>
 * Catches a promise error, writes the stacktrace to stderr and exists
 *
 * [![](https://img.shields.io/npm/v/apr-main.svg?style=flat-square)](https://www.npmjs.com/package/apr-main) [![](https://img.shields.io/npm/l/apr-main.svg?style=flat-square)](https://www.npmjs.com/package/apr-main)
 *
 * @kind function
 * @name main
 * @param {Promise} input
 * @returns {Promise}
 *
 * @example
 * import main from 'apr-main';
 *
 * main(async () => 'hello') // writes nothing
 * main(async () => undefined) // writes nothing
 * main(async () => { throw new Error('uncaught error') }) // writes the stack trace to stderr and exists
 */
var main = function (p) {
  return isPromise(p) ? handle(p) : handle(p());
};

return main;

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW1pdG9zL2Rldi9hcHIvcGFja2FnZXMvbWFpbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc1Byb21pc2UgPSByZXF1aXJlKCdpcy1wcm9taXNlJyk7XG5cbmNvbnN0IGhhbmRsZSA9IHAgPT5cbiAgcC5jYXRjaChlcnIgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH0pO1xuXG4vKipcbiAqIDxhIGlkPVwibWFpblwiPjwvYT5cbiAqIENhdGNoZXMgYSBwcm9taXNlIGVycm9yLCB3cml0ZXMgdGhlIHN0YWNrdHJhY2UgdG8gc3RkZXJyIGFuZCBleGlzdHNcbiAqXG4gKiBbIVtdKGh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vbnBtL3YvYXByLW1haW4uc3ZnP3N0eWxlPWZsYXQtc3F1YXJlKV0oaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvYXByLW1haW4pIFshW10oaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9ucG0vbC9hcHItbWFpbi5zdmc/c3R5bGU9ZmxhdC1zcXVhcmUpXShodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9hcHItbWFpbilcbiAqXG4gKiBAa2luZCBmdW5jdGlvblxuICogQG5hbWUgbWFpblxuICogQHBhcmFtIHtQcm9taXNlfSBpbnB1dFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCBtYWluIGZyb20gJ2Fwci1tYWluJztcbiAqXG4gKiBtYWluKGFzeW5jICgpID0+ICdoZWxsbycpIC8vIHdyaXRlcyBub3RoaW5nXG4gKiBtYWluKGFzeW5jICgpID0+IHVuZGVmaW5lZCkgLy8gd3JpdGVzIG5vdGhpbmdcbiAqIG1haW4oYXN5bmMgKCkgPT4geyB0aHJvdyBuZXcgRXJyb3IoJ3VuY2F1Z2h0IGVycm9yJykgfSkgLy8gd3JpdGVzIHRoZSBzdGFjayB0cmFjZSB0byBzdGRlcnIgYW5kIGV4aXN0c1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IHAgPT4gKGlzUHJvbWlzZShwKSA/IGhhbmRsZShwKSA6IGhhbmRsZShwKCkpKTtcbiJdLCJuYW1lcyI6WyJoYW5kbGUiLCJwIiwiY2F0Y2giLCJlcnJvciIsImVyciIsImV4aXQiLCJtb2R1bGUiLCJpc1Byb21pc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO1NBQ2JDLEVBQUVDLEtBQUYsQ0FBUSxlQUFPO1lBQ0xDLEtBQVIsQ0FBY0MsR0FBZDtZQUNRQyxJQUFSLENBQWEsQ0FBYjtHQUZGLENBRGE7Q0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkFDLFFBQUEsR0FBaUI7U0FBTUMsVUFBVU4sQ0FBVixJQUFlRCxPQUFPQyxDQUFQLENBQWYsR0FBMkJELE9BQU9DLEdBQVAsQ0FBakM7Q0FBakI7Ozs7Ozs7OyJ9

/***/ }),

/***/ 431:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const os = __importStar(__webpack_require__(87));
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return (s || '')
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return (s || '')
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 470:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = __webpack_require__(431);
const os = __importStar(__webpack_require__(87));
const path = __importStar(__webpack_require__(622));
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable
 */
function exportVariable(name, val) {
    process.env[name] = val;
    command_1.issueCommand('set-env', { name }, val);
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    command_1.issueCommand('add-path', {}, inputPath);
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store
 */
function setOutput(name, value) {
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message
 */
function error(message) {
    command_1.issue('error', message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message
 */
function warning(message) {
    command_1.issue('warning', message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store
 */
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 518:
/***/ (function(module) {

module.exports = isPromise;
module.exports.default = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),

/***/ 622:
/***/ (function(module) {

module.exports = require("path");

/***/ }),

/***/ 676:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(470);
const Main = __webpack_require__(154);

const actions = {
  create: __webpack_require__(103),
  remove: __webpack_require__(854),
};

Main(async () => {
  // get action, can be "create" or "remove"
  const action = core.getInput('action', { required: true });
  if (!actions[action]) throw new Error(`Action "${action}" not valid`);
  return actions[action]();
});


/***/ }),

/***/ 854:
/***/ (function(module) {

module.exports = eval("require")("./index/remove");


/***/ })

/******/ });