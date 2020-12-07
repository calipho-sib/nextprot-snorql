(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.createAuth0Client = factory());
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var check = function (it) {
      return it && it.Math == Math && it;
    };

    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global_1 =
      // eslint-disable-next-line no-undef
      check(typeof globalThis == 'object' && globalThis) ||
      check(typeof window == 'object' && window) ||
      check(typeof self == 'object' && self) ||
      check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
      // eslint-disable-next-line no-new-func
      (function () { return this; })() || Function('return this')();

    var fails = function (exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };

    // Thank's IE8 for his funny defineProperty
    var descriptors = !fails(function () {
      return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
    });

    var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

    // Nashorn ~ JDK8 bug
    var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

    // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
    var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : nativePropertyIsEnumerable;

    var objectPropertyIsEnumerable = {
    	f: f
    };

    var createPropertyDescriptor = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };

    var toString = {}.toString;

    var classofRaw = function (it) {
      return toString.call(it).slice(8, -1);
    };

    var split = ''.split;

    // fallback for non-array-like ES3 and non-enumerable old V8 strings
    var indexedObject = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins
      return !Object('z').propertyIsEnumerable(0);
    }) ? function (it) {
      return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
    } : Object;

    // `RequireObjectCoercible` abstract operation
    // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
    var requireObjectCoercible = function (it) {
      if (it == undefined) throw TypeError("Can't call method on " + it);
      return it;
    };

    // toObject with fallback for non-array-like ES3 strings



    var toIndexedObject = function (it) {
      return indexedObject(requireObjectCoercible(it));
    };

    var isObject = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };

    // `ToPrimitive` abstract operation
    // https://tc39.github.io/ecma262/#sec-toprimitive
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    var toPrimitive = function (input, PREFERRED_STRING) {
      if (!isObject(input)) return input;
      var fn, val;
      if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
      if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
      if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
      throw TypeError("Can't convert object to primitive value");
    };

    var hasOwnProperty = {}.hasOwnProperty;

    var has = function (it, key) {
      return hasOwnProperty.call(it, key);
    };

    var document$1 = global_1.document;
    // typeof document.createElement is 'object' in old IE
    var EXISTS = isObject(document$1) && isObject(document$1.createElement);

    var documentCreateElement = function (it) {
      return EXISTS ? document$1.createElement(it) : {};
    };

    // Thank's IE8 for his funny defineProperty
    var ie8DomDefine = !descriptors && !fails(function () {
      return Object.defineProperty(documentCreateElement('div'), 'a', {
        get: function () { return 7; }
      }).a != 7;
    });

    var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
    var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPrimitive(P, true);
      if (ie8DomDefine) try {
        return nativeGetOwnPropertyDescriptor(O, P);
      } catch (error) { /* empty */ }
      if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
    };

    var objectGetOwnPropertyDescriptor = {
    	f: f$1
    };

    var anObject = function (it) {
      if (!isObject(it)) {
        throw TypeError(String(it) + ' is not an object');
      } return it;
    };

    var nativeDefineProperty = Object.defineProperty;

    // `Object.defineProperty` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperty
    var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (ie8DomDefine) try {
        return nativeDefineProperty(O, P, Attributes);
      } catch (error) { /* empty */ }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

    var objectDefineProperty = {
    	f: f$2
    };

    var createNonEnumerableProperty = descriptors ? function (object, key, value) {
      return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };

    var setGlobal = function (key, value) {
      try {
        createNonEnumerableProperty(global_1, key, value);
      } catch (error) {
        global_1[key] = value;
      } return value;
    };

    var SHARED = '__core-js_shared__';
    var store = global_1[SHARED] || setGlobal(SHARED, {});

    var sharedStore = store;

    var functionToString = Function.toString;

    // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
    if (typeof sharedStore.inspectSource != 'function') {
      sharedStore.inspectSource = function (it) {
        return functionToString.call(it);
      };
    }

    var inspectSource = sharedStore.inspectSource;

    var WeakMap = global_1.WeakMap;

    var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

    var shared = createCommonjsModule(function (module) {
    (module.exports = function (key, value) {
      return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.7.0',
      mode:  'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
    });
    });

    var id = 0;
    var postfix = Math.random();

    var uid = function (key) {
      return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
    };

    var keys = shared('keys');

    var sharedKey = function (key) {
      return keys[key] || (keys[key] = uid(key));
    };

    var hiddenKeys = {};

    var WeakMap$1 = global_1.WeakMap;
    var set, get, has$1;

    var enforce = function (it) {
      return has$1(it) ? get(it) : set(it, {});
    };

    var getterFor = function (TYPE) {
      return function (it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        } return state;
      };
    };

    if (nativeWeakMap) {
      var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1());
      var wmget = store$1.get;
      var wmhas = store$1.has;
      var wmset = store$1.set;
      set = function (it, metadata) {
        metadata.facade = it;
        wmset.call(store$1, it, metadata);
        return metadata;
      };
      get = function (it) {
        return wmget.call(store$1, it) || {};
      };
      has$1 = function (it) {
        return wmhas.call(store$1, it);
      };
    } else {
      var STATE = sharedKey('state');
      hiddenKeys[STATE] = true;
      set = function (it, metadata) {
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function (it) {
        return has(it, STATE) ? it[STATE] : {};
      };
      has$1 = function (it) {
        return has(it, STATE);
      };
    }

    var internalState = {
      set: set,
      get: get,
      has: has$1,
      enforce: enforce,
      getterFor: getterFor
    };

    var redefine = createCommonjsModule(function (module) {
    var getInternalState = internalState.get;
    var enforceInternalState = internalState.enforce;
    var TEMPLATE = String(String).split('String');

    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;
      var state;
      if (typeof value == 'function') {
        if (typeof key == 'string' && !has(value, 'name')) {
          createNonEnumerableProperty(value, 'name', key);
        }
        state = enforceInternalState(value);
        if (!state.source) {
          state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
        }
      }
      if (O === global_1) {
        if (simple) O[key] = value;
        else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }
      if (simple) O[key] = value;
      else createNonEnumerableProperty(O, key, value);
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
    });
    });

    var path = global_1;

    var aFunction = function (variable) {
      return typeof variable == 'function' ? variable : undefined;
    };

    var getBuiltIn = function (namespace, method) {
      return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
        : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
    };

    var ceil = Math.ceil;
    var floor = Math.floor;

    // `ToInteger` abstract operation
    // https://tc39.github.io/ecma262/#sec-tointeger
    var toInteger = function (argument) {
      return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
    };

    var min = Math.min;

    // `ToLength` abstract operation
    // https://tc39.github.io/ecma262/#sec-tolength
    var toLength = function (argument) {
      return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };

    var max = Math.max;
    var min$1 = Math.min;

    // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
    var toAbsoluteIndex = function (index, length) {
      var integer = toInteger(index);
      return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
    };

    // `Array.prototype.{ indexOf, includes }` methods implementation
    var createMethod = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];
          // eslint-disable-next-line no-self-compare
          if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        } else for (;length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        } return !IS_INCLUDES && -1;
      };
    };

    var arrayIncludes = {
      // `Array.prototype.includes` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };

    var indexOf = arrayIncludes.indexOf;


    var objectKeysInternal = function (object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
      // Don't enum bug & hidden keys
      while (names.length > i) if (has(O, key = names[i++])) {
        ~indexOf(result, key) || result.push(key);
      }
      return result;
    };

    // IE8- don't enum bug keys
    var enumBugKeys = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ];

    var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

    // `Object.getOwnPropertyNames` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
    var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return objectKeysInternal(O, hiddenKeys$1);
    };

    var objectGetOwnPropertyNames = {
    	f: f$3
    };

    var f$4 = Object.getOwnPropertySymbols;

    var objectGetOwnPropertySymbols = {
    	f: f$4
    };

    // all object keys, includes non-enumerable and symbols
    var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
      var keys = objectGetOwnPropertyNames.f(anObject(it));
      var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
      return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
    };

    var copyConstructorProperties = function (target, source) {
      var keys = ownKeys(source);
      var defineProperty = objectDefineProperty.f;
      var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    };

    var replacement = /#|\.prototype\./;

    var isForced = function (feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true
        : value == NATIVE ? false
        : typeof detection == 'function' ? fails(detection)
        : !!detection;
    };

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase();
    };

    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = 'N';
    var POLYFILL = isForced.POLYFILL = 'P';

    var isForced_1 = isForced;

    var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






    /*
      options.target      - name of the target object
      options.global      - target is the global object
      options.stat        - export as static methods of target
      options.proto       - export as prototype methods of target
      options.real        - real prototype method for the `pure` version
      options.forced      - export even if the native feature is available
      options.bind        - bind methods to the target, required for the `pure` version
      options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
      options.unsafe      - use the simple assignment of property instead of delete + defineProperty
      options.sham        - add a flag to not completely full polyfills
      options.enumerable  - export as enumerable property
      options.noTargetGet - prevent calling a getter on target
    */
    var _export = function (options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = global_1;
      } else if (STATIC) {
        target = global_1[TARGET] || setGlobal(TARGET, {});
      } else {
        target = (global_1[TARGET] || {}).prototype;
      }
      if (target) for (key in source) {
        sourceProperty = source[key];
        if (options.noTargetGet) {
          descriptor = getOwnPropertyDescriptor$1(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
          if (typeof sourceProperty === typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || (targetProperty && targetProperty.sham)) {
          createNonEnumerableProperty(sourceProperty, 'sham', true);
        }
        // extend global
        redefine(target, key, sourceProperty, options);
      }
    };

    var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
      // Chrome 38 Symbol has incorrect toString conversion
      // eslint-disable-next-line no-undef
      return !String(Symbol());
    });

    var useSymbolAsUid = nativeSymbol
      // eslint-disable-next-line no-undef
      && !Symbol.sham
      // eslint-disable-next-line no-undef
      && typeof Symbol.iterator == 'symbol';

    var WellKnownSymbolsStore = shared('wks');
    var Symbol$1 = global_1.Symbol;
    var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

    var wellKnownSymbol = function (name) {
      if (!has(WellKnownSymbolsStore, name)) {
        if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
        else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      } return WellKnownSymbolsStore[name];
    };

    var MATCH = wellKnownSymbol('match');

    // `IsRegExp` abstract operation
    // https://tc39.github.io/ecma262/#sec-isregexp
    var isRegexp = function (it) {
      var isRegExp;
      return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
    };

    var notARegexp = function (it) {
      if (isRegexp(it)) {
        throw TypeError("The method doesn't accept regular expressions");
      } return it;
    };

    var MATCH$1 = wellKnownSymbol('match');

    var correctIsRegexpLogic = function (METHOD_NAME) {
      var regexp = /./;
      try {
        '/./'[METHOD_NAME](regexp);
      } catch (error1) {
        try {
          regexp[MATCH$1] = false;
          return '/./'[METHOD_NAME](regexp);
        } catch (error2) { /* empty */ }
      } return false;
    };

    var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;






    var nativeStartsWith = ''.startsWith;
    var min$2 = Math.min;

    var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('startsWith');
    // https://github.com/zloirock/core-js/pull/702
    var MDN_POLYFILL_BUG =  !CORRECT_IS_REGEXP_LOGIC && !!function () {
      var descriptor = getOwnPropertyDescriptor$2(String.prototype, 'startsWith');
      return descriptor && !descriptor.writable;
    }();

    // `String.prototype.startsWith` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.startswith
    _export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
      startsWith: function startsWith(searchString /* , position = 0 */) {
        var that = String(requireObjectCoercible(this));
        notARegexp(searchString);
        var index = toLength(min$2(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = String(searchString);
        return nativeStartsWith
          ? nativeStartsWith.call(that, search, index)
          : that.slice(index, index + search.length) === search;
      }
    });

    var aFunction$1 = function (it) {
      if (typeof it != 'function') {
        throw TypeError(String(it) + ' is not a function');
      } return it;
    };

    // optional / simple context binding
    var functionBindContext = function (fn, that, length) {
      aFunction$1(fn);
      if (that === undefined) return fn;
      switch (length) {
        case 0: return function () {
          return fn.call(that);
        };
        case 1: return function (a) {
          return fn.call(that, a);
        };
        case 2: return function (a, b) {
          return fn.call(that, a, b);
        };
        case 3: return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
      }
      return function (/* ...args */) {
        return fn.apply(that, arguments);
      };
    };

    var call = Function.call;

    var entryUnbind = function (CONSTRUCTOR, METHOD, length) {
      return functionBindContext(call, global_1[CONSTRUCTOR].prototype[METHOD], length);
    };

    var startsWith = entryUnbind('String', 'startsWith');

    // `IsArray` abstract operation
    // https://tc39.github.io/ecma262/#sec-isarray
    var isArray = Array.isArray || function isArray(arg) {
      return classofRaw(arg) == 'Array';
    };

    // `ToObject` abstract operation
    // https://tc39.github.io/ecma262/#sec-toobject
    var toObject = function (argument) {
      return Object(requireObjectCoercible(argument));
    };

    var createProperty = function (object, key, value) {
      var propertyKey = toPrimitive(key);
      if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
      else object[propertyKey] = value;
    };

    var SPECIES = wellKnownSymbol('species');

    // `ArraySpeciesCreate` abstract operation
    // https://tc39.github.io/ecma262/#sec-arrayspeciescreate
    var arraySpeciesCreate = function (originalArray, length) {
      var C;
      if (isArray(originalArray)) {
        C = originalArray.constructor;
        // cross-realm fallback
        if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
        else if (isObject(C)) {
          C = C[SPECIES];
          if (C === null) C = undefined;
        }
      } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
    };

    var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

    var process = global_1.process;
    var versions = process && process.versions;
    var v8 = versions && versions.v8;
    var match, version;

    if (v8) {
      match = v8.split('.');
      version = match[0] + match[1];
    } else if (engineUserAgent) {
      match = engineUserAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = engineUserAgent.match(/Chrome\/(\d+)/);
        if (match) version = match[1];
      }
    }

    var engineV8Version = version && +version;

    var SPECIES$1 = wellKnownSymbol('species');

    var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
      // We can't use this feature detection in V8 since it causes
      // deoptimization and serious performance degradation
      // https://github.com/zloirock/core-js/issues/677
      return engineV8Version >= 51 || !fails(function () {
        var array = [];
        var constructor = array.constructor = {};
        constructor[SPECIES$1] = function () {
          return { foo: 1 };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
      });
    };

    var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
    var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
    var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/679
    var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
      var array = [];
      array[IS_CONCAT_SPREADABLE] = false;
      return array.concat()[0] !== array;
    });

    var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

    var isConcatSpreadable = function (O) {
      if (!isObject(O)) return false;
      var spreadable = O[IS_CONCAT_SPREADABLE];
      return spreadable !== undefined ? !!spreadable : isArray(O);
    };

    var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

    // `Array.prototype.concat` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.concat
    // with adding support of @@isConcatSpreadable and @@species
    _export({ target: 'Array', proto: true, forced: FORCED }, {
      concat: function concat(arg) { // eslint-disable-line no-unused-vars
        var O = toObject(this);
        var A = arraySpeciesCreate(O, 0);
        var n = 0;
        var i, k, length, len, E;
        for (i = -1, length = arguments.length; i < length; i++) {
          E = i === -1 ? O : arguments[i];
          if (isConcatSpreadable(E)) {
            len = toLength(E.length);
            if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
            for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
          } else {
            if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
            createProperty(A, n++, E);
          }
        }
        A.length = n;
        return A;
      }
    });

    var TO_STRING_TAG = wellKnownSymbol('toStringTag');
    var test = {};

    test[TO_STRING_TAG] = 'z';

    var toStringTagSupport = String(test) === '[object z]';

    var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
    // ES3 wrong here
    var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

    // fallback for IE11 Script Access Denied error
    var tryGet = function (it, key) {
      try {
        return it[key];
      } catch (error) { /* empty */ }
    };

    // getting tag from ES6+ `Object.prototype.toString`
    var classof = toStringTagSupport ? classofRaw : function (it) {
      var O, tag, result;
      return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
        // builtinTag case
        : CORRECT_ARGUMENTS ? classofRaw(O)
        // ES3 arguments fallback
        : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
    };

    // `Object.prototype.toString` method implementation
    // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
    var objectToString = toStringTagSupport ? {}.toString : function toString() {
      return '[object ' + classof(this) + ']';
    };

    // `Object.prototype.toString` method
    // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
    if (!toStringTagSupport) {
      redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
    }

    // `Object.keys` method
    // https://tc39.github.io/ecma262/#sec-object.keys
    var objectKeys = Object.keys || function keys(O) {
      return objectKeysInternal(O, enumBugKeys);
    };

    // `Object.defineProperties` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperties
    var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
      return O;
    };

    var html = getBuiltIn('document', 'documentElement');

    var GT = '>';
    var LT = '<';
    var PROTOTYPE = 'prototype';
    var SCRIPT = 'script';
    var IE_PROTO = sharedKey('IE_PROTO');

    var EmptyConstructor = function () { /* empty */ };

    var scriptTag = function (content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
    };

    // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
    var NullProtoObjectViaActiveX = function (activeXDocument) {
      activeXDocument.write(scriptTag(''));
      activeXDocument.close();
      var temp = activeXDocument.parentWindow.Object;
      activeXDocument = null; // avoid memory leak
      return temp;
    };

    // Create object with fake `null` prototype: use iframe Object with cleared prototype
    var NullProtoObjectViaIFrame = function () {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = documentCreateElement('iframe');
      var JS = 'java' + SCRIPT + ':';
      var iframeDocument;
      iframe.style.display = 'none';
      html.appendChild(iframe);
      // https://github.com/zloirock/core-js/issues/475
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag('document.F=Object'));
      iframeDocument.close();
      return iframeDocument.F;
    };

    // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    // avoid IE GC bug
    var activeXDocument;
    var NullProtoObject = function () {
      try {
        /* global ActiveXObject */
        activeXDocument = document.domain && new ActiveXObject('htmlfile');
      } catch (error) { /* ignore */ }
      NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
      var length = enumBugKeys.length;
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };

    hiddenKeys[IE_PROTO] = true;

    // `Object.create` method
    // https://tc39.github.io/ecma262/#sec-object.create
    var objectCreate = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
      } else result = NullProtoObject();
      return Properties === undefined ? result : objectDefineProperties(result, Properties);
    };

    var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;

    var toString$1 = {}.toString;

    var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window) : [];

    var getWindowNames = function (it) {
      try {
        return nativeGetOwnPropertyNames(it);
      } catch (error) {
        return windowNames.slice();
      }
    };

    // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
    var f$5 = function getOwnPropertyNames(it) {
      return windowNames && toString$1.call(it) == '[object Window]'
        ? getWindowNames(it)
        : nativeGetOwnPropertyNames(toIndexedObject(it));
    };

    var objectGetOwnPropertyNamesExternal = {
    	f: f$5
    };

    var f$6 = wellKnownSymbol;

    var wellKnownSymbolWrapped = {
    	f: f$6
    };

    var defineProperty = objectDefineProperty.f;

    var defineWellKnownSymbol = function (NAME) {
      var Symbol = path.Symbol || (path.Symbol = {});
      if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
        value: wellKnownSymbolWrapped.f(NAME)
      });
    };

    var defineProperty$1 = objectDefineProperty.f;



    var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

    var setToStringTag = function (it, TAG, STATIC) {
      if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
        defineProperty$1(it, TO_STRING_TAG$2, { configurable: true, value: TAG });
      }
    };

    var push = [].push;

    // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
    var createMethod$1 = function (TYPE) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      return function ($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = indexedObject(O);
        var boundFunction = functionBindContext(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
        var value, result;
        for (;length > index; index++) if (NO_HOLES || index in self) {
          value = self[index];
          result = boundFunction(value, index, O);
          if (TYPE) {
            if (IS_MAP) target[index] = result; // map
            else if (result) switch (TYPE) {
              case 3: return true;              // some
              case 5: return value;             // find
              case 6: return index;             // findIndex
              case 2: push.call(target, value); // filter
            } else if (IS_EVERY) return false;  // every
          }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
      };
    };

    var arrayIteration = {
      // `Array.prototype.forEach` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
      forEach: createMethod$1(0),
      // `Array.prototype.map` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.map
      map: createMethod$1(1),
      // `Array.prototype.filter` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.filter
      filter: createMethod$1(2),
      // `Array.prototype.some` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.some
      some: createMethod$1(3),
      // `Array.prototype.every` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.every
      every: createMethod$1(4),
      // `Array.prototype.find` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.find
      find: createMethod$1(5),
      // `Array.prototype.findIndex` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
      findIndex: createMethod$1(6)
    };

    var $forEach = arrayIteration.forEach;

    var HIDDEN = sharedKey('hidden');
    var SYMBOL = 'Symbol';
    var PROTOTYPE$1 = 'prototype';
    var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
    var setInternalState = internalState.set;
    var getInternalState = internalState.getterFor(SYMBOL);
    var ObjectPrototype = Object[PROTOTYPE$1];
    var $Symbol = global_1.Symbol;
    var $stringify = getBuiltIn('JSON', 'stringify');
    var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
    var nativeDefineProperty$1 = objectDefineProperty.f;
    var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
    var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
    var AllSymbols = shared('symbols');
    var ObjectPrototypeSymbols = shared('op-symbols');
    var StringToSymbolRegistry = shared('string-to-symbol-registry');
    var SymbolToStringRegistry = shared('symbol-to-string-registry');
    var WellKnownSymbolsStore$1 = shared('wks');
    var QObject = global_1.QObject;
    // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
    var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

    // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
    var setSymbolDescriptor = descriptors && fails(function () {
      return objectCreate(nativeDefineProperty$1({}, 'a', {
        get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
      })).a != 7;
    }) ? function (O, P, Attributes) {
      var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
      if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
      nativeDefineProperty$1(O, P, Attributes);
      if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
        nativeDefineProperty$1(ObjectPrototype, P, ObjectPrototypeDescriptor);
      }
    } : nativeDefineProperty$1;

    var wrap = function (tag, description) {
      var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
      setInternalState(symbol, {
        type: SYMBOL,
        tag: tag,
        description: description
      });
      if (!descriptors) symbol.description = description;
      return symbol;
    };

    var isSymbol = useSymbolAsUid ? function (it) {
      return typeof it == 'symbol';
    } : function (it) {
      return Object(it) instanceof $Symbol;
    };

    var $defineProperty = function defineProperty(O, P, Attributes) {
      if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
      anObject(O);
      var key = toPrimitive(P, true);
      anObject(Attributes);
      if (has(AllSymbols, key)) {
        if (!Attributes.enumerable) {
          if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
          O[HIDDEN][key] = true;
        } else {
          if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
          Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
        } return setSymbolDescriptor(O, key, Attributes);
      } return nativeDefineProperty$1(O, key, Attributes);
    };

    var $defineProperties = function defineProperties(O, Properties) {
      anObject(O);
      var properties = toIndexedObject(Properties);
      var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
      $forEach(keys, function (key) {
        if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
      });
      return O;
    };

    var $create = function create(O, Properties) {
      return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
    };

    var $propertyIsEnumerable = function propertyIsEnumerable(V) {
      var P = toPrimitive(V, true);
      var enumerable = nativePropertyIsEnumerable$1.call(this, P);
      if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
      return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
    };

    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
      var it = toIndexedObject(O);
      var key = toPrimitive(P, true);
      if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
      var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
      if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
        descriptor.enumerable = true;
      }
      return descriptor;
    };

    var $getOwnPropertyNames = function getOwnPropertyNames(O) {
      var names = nativeGetOwnPropertyNames$1(toIndexedObject(O));
      var result = [];
      $forEach(names, function (key) {
        if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
      });
      return result;
    };

    var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
      var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
      var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
      var result = [];
      $forEach(names, function (key) {
        if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
          result.push(AllSymbols[key]);
        }
      });
      return result;
    };

    // `Symbol` constructor
    // https://tc39.github.io/ecma262/#sec-symbol-constructor
    if (!nativeSymbol) {
      $Symbol = function Symbol() {
        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
        var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
        var tag = uid(description);
        var setter = function (value) {
          if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
          if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
          setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
        };
        if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
        return wrap(tag, description);
      };

      redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
        return getInternalState(this).tag;
      });

      redefine($Symbol, 'withoutSetter', function (description) {
        return wrap(uid(description), description);
      });

      objectPropertyIsEnumerable.f = $propertyIsEnumerable;
      objectDefineProperty.f = $defineProperty;
      objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
      objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
      objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

      wellKnownSymbolWrapped.f = function (name) {
        return wrap(wellKnownSymbol(name), name);
      };

      if (descriptors) {
        // https://github.com/tc39/proposal-Symbol-description
        nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
          configurable: true,
          get: function description() {
            return getInternalState(this).description;
          }
        });
        {
          redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
        }
      }
    }

    _export({ global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, {
      Symbol: $Symbol
    });

    $forEach(objectKeys(WellKnownSymbolsStore$1), function (name) {
      defineWellKnownSymbol(name);
    });

    _export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
      // `Symbol.for` method
      // https://tc39.github.io/ecma262/#sec-symbol.for
      'for': function (key) {
        var string = String(key);
        if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
        var symbol = $Symbol(string);
        StringToSymbolRegistry[string] = symbol;
        SymbolToStringRegistry[symbol] = string;
        return symbol;
      },
      // `Symbol.keyFor` method
      // https://tc39.github.io/ecma262/#sec-symbol.keyfor
      keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
        if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
      },
      useSetter: function () { USE_SETTER = true; },
      useSimple: function () { USE_SETTER = false; }
    });

    _export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
      // `Object.create` method
      // https://tc39.github.io/ecma262/#sec-object.create
      create: $create,
      // `Object.defineProperty` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperty
      defineProperty: $defineProperty,
      // `Object.defineProperties` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperties
      defineProperties: $defineProperties,
      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor
    });

    _export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
      // `Object.getOwnPropertyNames` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
      getOwnPropertyNames: $getOwnPropertyNames,
      // `Object.getOwnPropertySymbols` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
      getOwnPropertySymbols: $getOwnPropertySymbols
    });

    // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
    // https://bugs.chromium.org/p/v8/issues/detail?id=3443
    _export({ target: 'Object', stat: true, forced: fails(function () { objectGetOwnPropertySymbols.f(1); }) }, {
      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        return objectGetOwnPropertySymbols.f(toObject(it));
      }
    });

    // `JSON.stringify` method behavior with symbols
    // https://tc39.github.io/ecma262/#sec-json.stringify
    if ($stringify) {
      var FORCED_JSON_STRINGIFY = !nativeSymbol || fails(function () {
        var symbol = $Symbol();
        // MS Edge converts symbol values to JSON as {}
        return $stringify([symbol]) != '[null]'
          // WebKit converts symbol values to JSON as null
          || $stringify({ a: symbol }) != '{}'
          // V8 throws on boxed symbols
          || $stringify(Object(symbol)) != '{}';
      });

      _export({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
        // eslint-disable-next-line no-unused-vars
        stringify: function stringify(it, replacer, space) {
          var args = [it];
          var index = 1;
          var $replacer;
          while (arguments.length > index) args.push(arguments[index++]);
          $replacer = replacer;
          if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
          if (!isArray(replacer)) replacer = function (key, value) {
            if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
            if (!isSymbol(value)) return value;
          };
          args[1] = replacer;
          return $stringify.apply(null, args);
        }
      });
    }

    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
    if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
      createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
    }
    // `Symbol.prototype[@@toStringTag]` property
    // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
    setToStringTag($Symbol, SYMBOL);

    hiddenKeys[HIDDEN] = true;

    // `Symbol.asyncIterator` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.asynciterator
    defineWellKnownSymbol('asyncIterator');

    var defineProperty$2 = objectDefineProperty.f;


    var NativeSymbol = global_1.Symbol;

    if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
      // Safari 12 bug
      NativeSymbol().description !== undefined
    )) {
      var EmptyStringDescriptionStore = {};
      // wrap Symbol constructor for correct work with undefined description
      var SymbolWrapper = function Symbol() {
        var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
        var result = this instanceof SymbolWrapper
          ? new NativeSymbol(description)
          // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
          : description === undefined ? NativeSymbol() : NativeSymbol(description);
        if (description === '') EmptyStringDescriptionStore[result] = true;
        return result;
      };
      copyConstructorProperties(SymbolWrapper, NativeSymbol);
      var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
      symbolPrototype.constructor = SymbolWrapper;

      var symbolToString = symbolPrototype.toString;
      var native = String(NativeSymbol('test')) == 'Symbol(test)';
      var regexp = /^Symbol\((.*)\)[^)]+$/;
      defineProperty$2(symbolPrototype, 'description', {
        configurable: true,
        get: function description() {
          var symbol = isObject(this) ? this.valueOf() : this;
          var string = symbolToString.call(symbol);
          if (has(EmptyStringDescriptionStore, symbol)) return '';
          var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
          return desc === '' ? undefined : desc;
        }
      });

      _export({ global: true, forced: true }, {
        Symbol: SymbolWrapper
      });
    }

    // `Symbol.hasInstance` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.hasinstance
    defineWellKnownSymbol('hasInstance');

    // `Symbol.isConcatSpreadable` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
    defineWellKnownSymbol('isConcatSpreadable');

    // `Symbol.iterator` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.iterator
    defineWellKnownSymbol('iterator');

    // `Symbol.match` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.match
    defineWellKnownSymbol('match');

    // `Symbol.matchAll` well-known symbol
    defineWellKnownSymbol('matchAll');

    // `Symbol.replace` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.replace
    defineWellKnownSymbol('replace');

    // `Symbol.search` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.search
    defineWellKnownSymbol('search');

    // `Symbol.species` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.species
    defineWellKnownSymbol('species');

    // `Symbol.split` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.split
    defineWellKnownSymbol('split');

    // `Symbol.toPrimitive` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.toprimitive
    defineWellKnownSymbol('toPrimitive');

    // `Symbol.toStringTag` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.tostringtag
    defineWellKnownSymbol('toStringTag');

    // `Symbol.unscopables` well-known symbol
    // https://tc39.github.io/ecma262/#sec-symbol.unscopables
    defineWellKnownSymbol('unscopables');

    // JSON[@@toStringTag] property
    // https://tc39.github.io/ecma262/#sec-json-@@tostringtag
    setToStringTag(global_1.JSON, 'JSON', true);

    // Math[@@toStringTag] property
    // https://tc39.github.io/ecma262/#sec-math-@@tostringtag
    setToStringTag(Math, 'Math', true);

    _export({ global: true }, { Reflect: {} });

    // Reflect[@@toStringTag] property
    // https://tc39.es/ecma262/#sec-reflect-@@tostringtag
    setToStringTag(global_1.Reflect, 'Reflect', true);

    var symbol = path.Symbol;

    // `String.prototype.{ codePointAt, at }` methods implementation
    var createMethod$2 = function (CONVERT_TO_STRING) {
      return function ($this, pos) {
        var S = String(requireObjectCoercible($this));
        var position = toInteger(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
        first = S.charCodeAt(position);
        return first < 0xD800 || first > 0xDBFF || position + 1 === size
          || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
            ? CONVERT_TO_STRING ? S.charAt(position) : first
            : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
      };
    };

    var stringMultibyte = {
      // `String.prototype.codePointAt` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod$2(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod$2(true)
    };

    var correctPrototypeGetter = !fails(function () {
      function F() { /* empty */ }
      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });

    var IE_PROTO$1 = sharedKey('IE_PROTO');
    var ObjectPrototype$1 = Object.prototype;

    // `Object.getPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-object.getprototypeof
    var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
      O = toObject(O);
      if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];
      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      } return O instanceof Object ? ObjectPrototype$1 : null;
    };

    var ITERATOR = wellKnownSymbol('iterator');
    var BUGGY_SAFARI_ITERATORS = false;

    var returnThis = function () { return this; };

    // `%IteratorPrototype%` object
    // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
    var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

    if ([].keys) {
      arrayIterator = [].keys();
      // Safari 8 has buggy iterators w/o `next`
      if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }

    if (IteratorPrototype == undefined) IteratorPrototype = {};

    // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
    if ( !has(IteratorPrototype, ITERATOR)) {
      createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
    }

    var iteratorsCore = {
      IteratorPrototype: IteratorPrototype,
      BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
    };

    var iterators = {};

    var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





    var returnThis$1 = function () { return this; };

    var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
      var TO_STRING_TAG = NAME + ' Iterator';
      IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
      iterators[TO_STRING_TAG] = returnThis$1;
      return IteratorConstructor;
    };

    var aPossiblePrototype = function (it) {
      if (!isObject(it) && it !== null) {
        throw TypeError("Can't set " + String(it) + ' as a prototype');
      } return it;
    };

    // `Object.setPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-object.setprototypeof
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    /* eslint-disable no-proto */
    var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;
      try {
        setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
        setter.call(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) { /* empty */ }
      return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter.call(O, proto);
        else O.__proto__ = proto;
        return O;
      };
    }() : undefined);

    var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR$1 = wellKnownSymbol('iterator');
    var KEYS = 'keys';
    var VALUES = 'values';
    var ENTRIES = 'entries';

    var returnThis$2 = function () { return this; };

    var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next);

      var getIterationMethod = function (KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch (KIND) {
          case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
          case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
          case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
        } return function () { return new IteratorConstructor(this); };
      };

      var TO_STRING_TAG = NAME + ' Iterator';
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR$1]
        || IterablePrototype['@@iterator']
        || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY;

      // fix native
      if (anyNativeIterator) {
        CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
          if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
            if (objectSetPrototypeOf) {
              objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
            } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
              createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$1, returnThis$2);
            }
          }
          // Set @@toStringTag to native iterators
          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
        }
      }

      // fix Array#{values, @@iterator}.name in V8 / FF
      if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return nativeIterator.call(this); };
      }

      // define iterator
      if ( IterablePrototype[ITERATOR$1] !== defaultIterator) {
        createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
      }
      iterators[NAME] = defaultIterator;

      // export additional methods
      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for (KEY in methods) {
          if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
            redefine(IterablePrototype, KEY, methods[KEY]);
          }
        } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
      }

      return methods;
    };

    var charAt = stringMultibyte.charAt;



    var STRING_ITERATOR = 'String Iterator';
    var setInternalState$1 = internalState.set;
    var getInternalState$1 = internalState.getterFor(STRING_ITERATOR);

    // `String.prototype[@@iterator]` method
    // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
    defineIterator(String, 'String', function (iterated) {
      setInternalState$1(this, {
        type: STRING_ITERATOR,
        string: String(iterated),
        index: 0
      });
    // `%StringIteratorPrototype%.next` method
    // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
    }, function next() {
      var state = getInternalState$1(this);
      var string = state.string;
      var index = state.index;
      var point;
      if (index >= string.length) return { value: undefined, done: true };
      point = charAt(string, index);
      state.index += point.length;
      return { value: point, done: false };
    });

    var iteratorClose = function (iterator) {
      var returnMethod = iterator['return'];
      if (returnMethod !== undefined) {
        return anObject(returnMethod.call(iterator)).value;
      }
    };

    // call something on iterator step with safe closing on error
    var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
      // 7.4.6 IteratorClose(iterator, completion)
      } catch (error) {
        iteratorClose(iterator);
        throw error;
      }
    };

    var ITERATOR$2 = wellKnownSymbol('iterator');
    var ArrayPrototype = Array.prototype;

    // check on default Array iterator
    var isArrayIteratorMethod = function (it) {
      return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR$2] === it);
    };

    var ITERATOR$3 = wellKnownSymbol('iterator');

    var getIteratorMethod = function (it) {
      if (it != undefined) return it[ITERATOR$3]
        || it['@@iterator']
        || iterators[classof(it)];
    };

    // `Array.from` method implementation
    // https://tc39.github.io/ecma262/#sec-array.from
    var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var argumentsLength = arguments.length;
      var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var iteratorMethod = getIteratorMethod(O);
      var index = 0;
      var length, result, step, iterator, next, value;
      if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
      // if the target is not iterable or it's an array with the default iterator - use a simple case
      if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
        iterator = iteratorMethod.call(O);
        next = iterator.next;
        result = new C();
        for (;!(step = next.call(iterator)).done; index++) {
          value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
          createProperty(result, index, value);
        }
      } else {
        length = toLength(O.length);
        result = new C(length);
        for (;length > index; index++) {
          value = mapping ? mapfn(O[index], index) : O[index];
          createProperty(result, index, value);
        }
      }
      result.length = index;
      return result;
    };

    var ITERATOR$4 = wellKnownSymbol('iterator');
    var SAFE_CLOSING = false;

    try {
      var called = 0;
      var iteratorWithReturn = {
        next: function () {
          return { done: !!called++ };
        },
        'return': function () {
          SAFE_CLOSING = true;
        }
      };
      iteratorWithReturn[ITERATOR$4] = function () {
        return this;
      };
      // eslint-disable-next-line no-throw-literal
      Array.from(iteratorWithReturn, function () { throw 2; });
    } catch (error) { /* empty */ }

    var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
      if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
      var ITERATION_SUPPORT = false;
      try {
        var object = {};
        object[ITERATOR$4] = function () {
          return {
            next: function () {
              return { done: ITERATION_SUPPORT = true };
            }
          };
        };
        exec(object);
      } catch (error) { /* empty */ }
      return ITERATION_SUPPORT;
    };

    var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
      Array.from(iterable);
    });

    // `Array.from` method
    // https://tc39.github.io/ecma262/#sec-array.from
    _export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
      from: arrayFrom
    });

    var from_1 = path.Array.from;

    var arrayBufferNative = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

    var defineProperty$3 = objectDefineProperty.f;





    var Int8Array$1 = global_1.Int8Array;
    var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
    var Uint8ClampedArray = global_1.Uint8ClampedArray;
    var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
    var TypedArray = Int8Array$1 && objectGetPrototypeOf(Int8Array$1);
    var TypedArrayPrototype = Int8ArrayPrototype && objectGetPrototypeOf(Int8ArrayPrototype);
    var ObjectPrototype$2 = Object.prototype;
    var isPrototypeOf = ObjectPrototype$2.isPrototypeOf;

    var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
    var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
    // Fixing native typed arrays in Opera Presto crashes the browser, see #595
    var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferNative && !!objectSetPrototypeOf && classof(global_1.opera) !== 'Opera';
    var TYPED_ARRAY_TAG_REQIRED = false;
    var NAME;

    var TypedArrayConstructorsList = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8
    };

    var isView = function isView(it) {
      var klass = classof(it);
      return klass === 'DataView' || has(TypedArrayConstructorsList, klass);
    };

    var isTypedArray = function (it) {
      return isObject(it) && has(TypedArrayConstructorsList, classof(it));
    };

    var aTypedArray = function (it) {
      if (isTypedArray(it)) return it;
      throw TypeError('Target is not a typed array');
    };

    var aTypedArrayConstructor = function (C) {
      if (objectSetPrototypeOf) {
        if (isPrototypeOf.call(TypedArray, C)) return C;
      } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
        var TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
          return C;
        }
      } throw TypeError('Target is not a typed array constructor');
    };

    var exportTypedArrayMethod = function (KEY, property, forced) {
      if (!descriptors) return;
      if (forced) for (var ARRAY in TypedArrayConstructorsList) {
        var TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
          delete TypedArrayConstructor.prototype[KEY];
        }
      }
      if (!TypedArrayPrototype[KEY] || forced) {
        redefine(TypedArrayPrototype, KEY, forced ? property
          : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
      }
    };

    var exportTypedArrayStaticMethod = function (KEY, property, forced) {
      var ARRAY, TypedArrayConstructor;
      if (!descriptors) return;
      if (objectSetPrototypeOf) {
        if (forced) for (ARRAY in TypedArrayConstructorsList) {
          TypedArrayConstructor = global_1[ARRAY];
          if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
            delete TypedArrayConstructor[KEY];
          }
        }
        if (!TypedArray[KEY] || forced) {
          // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
          try {
            return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array$1[KEY] || property);
          } catch (error) { /* empty */ }
        } else return;
      }
      for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
          redefine(TypedArrayConstructor, KEY, property);
        }
      }
    };

    for (NAME in TypedArrayConstructorsList) {
      if (!global_1[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
    }

    // WebKit bug - typed arrays constructors prototype is Object.prototype
    if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
      // eslint-disable-next-line no-shadow
      TypedArray = function TypedArray() {
        throw TypeError('Incorrect invocation');
      };
      if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
        if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME], TypedArray);
      }
    }

    if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype$2) {
      TypedArrayPrototype = TypedArray.prototype;
      if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
        if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME].prototype, TypedArrayPrototype);
      }
    }

    // WebKit bug - one more object in Uint8ClampedArray prototype chain
    if (NATIVE_ARRAY_BUFFER_VIEWS && objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
      objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
    }

    if (descriptors && !has(TypedArrayPrototype, TO_STRING_TAG$3)) {
      TYPED_ARRAY_TAG_REQIRED = true;
      defineProperty$3(TypedArrayPrototype, TO_STRING_TAG$3, { get: function () {
        return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
      } });
      for (NAME in TypedArrayConstructorsList) if (global_1[NAME]) {
        createNonEnumerableProperty(global_1[NAME], TYPED_ARRAY_TAG, NAME);
      }
    }

    var arrayBufferViewCore = {
      NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
      TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
      aTypedArray: aTypedArray,
      aTypedArrayConstructor: aTypedArrayConstructor,
      exportTypedArrayMethod: exportTypedArrayMethod,
      exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
      isView: isView,
      isTypedArray: isTypedArray,
      TypedArray: TypedArray,
      TypedArrayPrototype: TypedArrayPrototype
    };

    var SPECIES$2 = wellKnownSymbol('species');

    // `SpeciesConstructor` abstract operation
    // https://tc39.github.io/ecma262/#sec-speciesconstructor
    var speciesConstructor = function (O, defaultConstructor) {
      var C = anObject(O).constructor;
      var S;
      return C === undefined || (S = anObject(C)[SPECIES$2]) == undefined ? defaultConstructor : aFunction$1(S);
    };

    var aTypedArray$1 = arrayBufferViewCore.aTypedArray;
    var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;
    var exportTypedArrayMethod$1 = arrayBufferViewCore.exportTypedArrayMethod;
    var $slice = [].slice;

    var FORCED$1 = fails(function () {
      // eslint-disable-next-line no-undef
      new Int8Array(1).slice();
    });

    // `%TypedArray%.prototype.slice` method
    // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
    exportTypedArrayMethod$1('slice', function slice(start, end) {
      var list = $slice.call(aTypedArray$1(this), start, end);
      var C = speciesConstructor(this, this.constructor);
      var index = 0;
      var length = list.length;
      var result = new (aTypedArrayConstructor$1(C))(length);
      while (length > index) result[index] = list[index++];
      return result;
    }, FORCED$1);

    var UNSCOPABLES = wellKnownSymbol('unscopables');
    var ArrayPrototype$1 = Array.prototype;

    // Array.prototype[@@unscopables]
    // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
    if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
      objectDefineProperty.f(ArrayPrototype$1, UNSCOPABLES, {
        configurable: true,
        value: objectCreate(null)
      });
    }

    // add a key to Array.prototype[@@unscopables]
    var addToUnscopables = function (key) {
      ArrayPrototype$1[UNSCOPABLES][key] = true;
    };

    var defineProperty$4 = Object.defineProperty;
    var cache = {};

    var thrower = function (it) { throw it; };

    var arrayMethodUsesToLength = function (METHOD_NAME, options) {
      if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
      if (!options) options = {};
      var method = [][METHOD_NAME];
      var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
      var argument0 = has(options, 0) ? options[0] : thrower;
      var argument1 = has(options, 1) ? options[1] : undefined;

      return cache[METHOD_NAME] = !!method && !fails(function () {
        if (ACCESSORS && !descriptors) return true;
        var O = { length: -1 };

        if (ACCESSORS) defineProperty$4(O, 1, { enumerable: true, get: thrower });
        else O[1] = 1;

        method.call(O, argument0, argument1);
      });
    };

    var $includes = arrayIncludes.includes;



    var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

    // `Array.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    _export({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
      includes: function includes(el /* , fromIndex = 0 */) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('includes');

    var includes = entryUnbind('Array', 'includes');

    // `String.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.includes
    _export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
      includes: function includes(searchString /* , position = 0 */) {
        return !!~String(requireObjectCoercible(this))
          .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    var includes$1 = entryUnbind('String', 'includes');

    var freezing = !fails(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });

    var internalMetadata = createCommonjsModule(function (module) {
    var defineProperty = objectDefineProperty.f;



    var METADATA = uid('meta');
    var id = 0;

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var setMetadata = function (it) {
      defineProperty(it, METADATA, { value: {
        objectID: 'O' + ++id, // object ID
        weakData: {}          // weak collections IDs
      } });
    };

    var fastKey = function (it, create) {
      // return a primitive with prefix
      if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
      if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F';
        // not necessary to add metadata
        if (!create) return 'E';
        // add missing metadata
        setMetadata(it);
      // return object ID
      } return it[METADATA].objectID;
    };

    var getWeakData = function (it, create) {
      if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true;
        // not necessary to add metadata
        if (!create) return false;
        // add missing metadata
        setMetadata(it);
      // return the store of weak collections IDs
      } return it[METADATA].weakData;
    };

    // add metadata on freeze-family methods calling
    var onFreeze = function (it) {
      if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
      return it;
    };

    var meta = module.exports = {
      REQUIRED: false,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze
    };

    hiddenKeys[METADATA] = true;
    });
    var internalMetadata_1 = internalMetadata.REQUIRED;
    var internalMetadata_2 = internalMetadata.fastKey;
    var internalMetadata_3 = internalMetadata.getWeakData;
    var internalMetadata_4 = internalMetadata.onFreeze;

    var Result = function (stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };

    var iterate = function (iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
      var iterator, iterFn, index, length, result, next, step;

      var stop = function (condition) {
        if (iterator) iteratorClose(iterator);
        return new Result(true, condition);
      };

      var callFn = function (value) {
        if (AS_ENTRIES) {
          anObject(value);
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        } return INTERRUPTED ? fn(value, stop) : fn(value);
      };

      if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = toLength(iterable.length); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && result instanceof Result) return result;
          } return new Result(false);
        }
        iterator = iterFn.call(iterable);
      }

      next = iterator.next;
      while (!(step = next.call(iterator)).done) {
        try {
          result = callFn(step.value);
        } catch (error) {
          iteratorClose(iterator);
          throw error;
        }
        if (typeof result == 'object' && result && result instanceof Result) return result;
      } return new Result(false);
    };

    var anInstance = function (it, Constructor, name) {
      if (!(it instanceof Constructor)) {
        throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
      } return it;
    };

    // makes subclassing work correct for wrapped built-ins
    var inheritIfRequired = function ($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      if (
        // it can work only with native `setPrototypeOf`
        objectSetPrototypeOf &&
        // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
        typeof (NewTarget = dummy.constructor) == 'function' &&
        NewTarget !== Wrapper &&
        isObject(NewTargetPrototype = NewTarget.prototype) &&
        NewTargetPrototype !== Wrapper.prototype
      ) objectSetPrototypeOf($this, NewTargetPrototype);
      return $this;
    };

    var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
      var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
      var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
      var ADDER = IS_MAP ? 'set' : 'add';
      var NativeConstructor = global_1[CONSTRUCTOR_NAME];
      var NativePrototype = NativeConstructor && NativeConstructor.prototype;
      var Constructor = NativeConstructor;
      var exported = {};

      var fixMethod = function (KEY) {
        var nativeMethod = NativePrototype[KEY];
        redefine(NativePrototype, KEY,
          KEY == 'add' ? function add(value) {
            nativeMethod.call(this, value === 0 ? 0 : value);
            return this;
          } : KEY == 'delete' ? function (key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
          } : KEY == 'get' ? function get(key) {
            return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
          } : KEY == 'has' ? function has(key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
          } : function set(key, value) {
            nativeMethod.call(this, key === 0 ? 0 : key, value);
            return this;
          }
        );
      };

      // eslint-disable-next-line max-len
      if (isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
        new NativeConstructor().entries().next();
      })))) {
        // create collection constructor
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
        internalMetadata.REQUIRED = true;
      } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
        var instance = new Constructor();
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
        // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        // eslint-disable-next-line no-new
        var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new NativeConstructor();
          var index = 5;
          while (index--) $instance[ADDER](index, index);
          return !$instance.has(-0);
        });

        if (!ACCEPT_ITERABLES) {
          Constructor = wrapper(function (dummy, iterable) {
            anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
            var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
            if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
            return that;
          });
          Constructor.prototype = NativePrototype;
          NativePrototype.constructor = Constructor;
        }

        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete');
          fixMethod('has');
          IS_MAP && fixMethod('get');
        }

        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

        // weak collections should not contains .clear method
        if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
      }

      exported[CONSTRUCTOR_NAME] = Constructor;
      _export({ global: true, forced: Constructor != NativeConstructor }, exported);

      setToStringTag(Constructor, CONSTRUCTOR_NAME);

      if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

      return Constructor;
    };

    var redefineAll = function (target, src, options) {
      for (var key in src) redefine(target, key, src[key], options);
      return target;
    };

    var SPECIES$3 = wellKnownSymbol('species');

    var setSpecies = function (CONSTRUCTOR_NAME) {
      var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
      var defineProperty = objectDefineProperty.f;

      if (descriptors && Constructor && !Constructor[SPECIES$3]) {
        defineProperty(Constructor, SPECIES$3, {
          configurable: true,
          get: function () { return this; }
        });
      }
    };

    var defineProperty$5 = objectDefineProperty.f;








    var fastKey = internalMetadata.fastKey;


    var setInternalState$2 = internalState.set;
    var internalStateGetterFor = internalState.getterFor;

    var collectionStrong = {
      getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var C = wrapper(function (that, iterable) {
          anInstance(that, C, CONSTRUCTOR_NAME);
          setInternalState$2(that, {
            type: CONSTRUCTOR_NAME,
            index: objectCreate(null),
            first: undefined,
            last: undefined,
            size: 0
          });
          if (!descriptors) that.size = 0;
          if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        });

        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

        var define = function (that, key, value) {
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          var previous, index;
          // change existing entry
          if (entry) {
            entry.value = value;
          // create new entry
          } else {
            state.last = entry = {
              index: index = fastKey(key, true),
              key: key,
              value: value,
              previous: previous = state.last,
              next: undefined,
              removed: false
            };
            if (!state.first) state.first = entry;
            if (previous) previous.next = entry;
            if (descriptors) state.size++;
            else that.size++;
            // add to index
            if (index !== 'F') state.index[index] = entry;
          } return that;
        };

        var getEntry = function (that, key) {
          var state = getInternalState(that);
          // fast case
          var index = fastKey(key);
          var entry;
          if (index !== 'F') return state.index[index];
          // frozen object case
          for (entry = state.first; entry; entry = entry.next) {
            if (entry.key == key) return entry;
          }
        };

        redefineAll(C.prototype, {
          // 23.1.3.1 Map.prototype.clear()
          // 23.2.3.2 Set.prototype.clear()
          clear: function clear() {
            var that = this;
            var state = getInternalState(that);
            var data = state.index;
            var entry = state.first;
            while (entry) {
              entry.removed = true;
              if (entry.previous) entry.previous = entry.previous.next = undefined;
              delete data[entry.index];
              entry = entry.next;
            }
            state.first = state.last = undefined;
            if (descriptors) state.size = 0;
            else that.size = 0;
          },
          // 23.1.3.3 Map.prototype.delete(key)
          // 23.2.3.4 Set.prototype.delete(value)
          'delete': function (key) {
            var that = this;
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            if (entry) {
              var next = entry.next;
              var prev = entry.previous;
              delete state.index[entry.index];
              entry.removed = true;
              if (prev) prev.next = next;
              if (next) next.previous = prev;
              if (state.first == entry) state.first = next;
              if (state.last == entry) state.last = prev;
              if (descriptors) state.size--;
              else that.size--;
            } return !!entry;
          },
          // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
          // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
          forEach: function forEach(callbackfn /* , that = undefined */) {
            var state = getInternalState(this);
            var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
            var entry;
            while (entry = entry ? entry.next : state.first) {
              boundFunction(entry.value, entry.key, this);
              // revert to the last existing entry
              while (entry && entry.removed) entry = entry.previous;
            }
          },
          // 23.1.3.7 Map.prototype.has(key)
          // 23.2.3.7 Set.prototype.has(value)
          has: function has(key) {
            return !!getEntry(this, key);
          }
        });

        redefineAll(C.prototype, IS_MAP ? {
          // 23.1.3.6 Map.prototype.get(key)
          get: function get(key) {
            var entry = getEntry(this, key);
            return entry && entry.value;
          },
          // 23.1.3.9 Map.prototype.set(key, value)
          set: function set(key, value) {
            return define(this, key === 0 ? 0 : key, value);
          }
        } : {
          // 23.2.3.1 Set.prototype.add(value)
          add: function add(value) {
            return define(this, value = value === 0 ? 0 : value, value);
          }
        });
        if (descriptors) defineProperty$5(C.prototype, 'size', {
          get: function () {
            return getInternalState(this).size;
          }
        });
        return C;
      },
      setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
        var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
        var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
        // add .keys, .values, .entries, [@@iterator]
        // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
        defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
          setInternalState$2(this, {
            type: ITERATOR_NAME,
            target: iterated,
            state: getInternalCollectionState(iterated),
            kind: kind,
            last: undefined
          });
        }, function () {
          var state = getInternalIteratorState(this);
          var kind = state.kind;
          var entry = state.last;
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
          // get next entry
          if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
            // or finish the iteration
            state.target = undefined;
            return { value: undefined, done: true };
          }
          // return step by kind
          if (kind == 'keys') return { value: entry.key, done: false };
          if (kind == 'values') return { value: entry.value, done: false };
          return { value: [entry.key, entry.value], done: false };
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

        // add [@@species], 23.1.2.2, 23.2.2.2
        setSpecies(CONSTRUCTOR_NAME);
      }
    };

    // `Set` constructor
    // https://tc39.github.io/ecma262/#sec-set-objects
    var es_set = collection('Set', function (init) {
      return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
    }, collectionStrong);

    // iterable DOM collections
    // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
    var domIterables = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };

    var ARRAY_ITERATOR = 'Array Iterator';
    var setInternalState$3 = internalState.set;
    var getInternalState$2 = internalState.getterFor(ARRAY_ITERATOR);

    // `Array.prototype.entries` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.entries
    // `Array.prototype.keys` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.keys
    // `Array.prototype.values` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.values
    // `Array.prototype[@@iterator]` method
    // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
    // `CreateArrayIterator` internal method
    // https://tc39.github.io/ecma262/#sec-createarrayiterator
    var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
      setInternalState$3(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated), // target
        index: 0,                          // next index
        kind: kind                         // kind
      });
    // `%ArrayIteratorPrototype%.next` method
    // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
    }, function () {
      var state = getInternalState$2(this);
      var target = state.target;
      var kind = state.kind;
      var index = state.index++;
      if (!target || index >= target.length) {
        state.target = undefined;
        return { value: undefined, done: true };
      }
      if (kind == 'keys') return { value: index, done: false };
      if (kind == 'values') return { value: target[index], done: false };
      return { value: [index, target[index]], done: false };
    }, 'values');

    // argumentsList[@@iterator] is %ArrayProto_values%
    // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
    // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
    iterators.Arguments = iterators.Array;

    // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');

    var ITERATOR$5 = wellKnownSymbol('iterator');
    var TO_STRING_TAG$4 = wellKnownSymbol('toStringTag');
    var ArrayValues = es_array_iterator.values;

    for (var COLLECTION_NAME in domIterables) {
      var Collection = global_1[COLLECTION_NAME];
      var CollectionPrototype = Collection && Collection.prototype;
      if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[ITERATOR$5] !== ArrayValues) try {
          createNonEnumerableProperty(CollectionPrototype, ITERATOR$5, ArrayValues);
        } catch (error) {
          CollectionPrototype[ITERATOR$5] = ArrayValues;
        }
        if (!CollectionPrototype[TO_STRING_TAG$4]) {
          createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$4, COLLECTION_NAME);
        }
        if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
            createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
          } catch (error) {
            CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
          }
        }
      }
    }

    var set$1 = path.Set;

    /**
     * @this {Promise}
     */
    function finallyConstructor(callback) {
      var constructor = this.constructor;
      return this.then(
        function(value) {
          // @ts-ignore
          return constructor.resolve(callback()).then(function() {
            return value;
          });
        },
        function(reason) {
          // @ts-ignore
          return constructor.resolve(callback()).then(function() {
            // @ts-ignore
            return constructor.reject(reason);
          });
        }
      );
    }

    function allSettled(arr) {
      var P = this;
      return new P(function(resolve, reject) {
        if (!(arr && typeof arr.length !== 'undefined')) {
          return reject(
            new TypeError(
              typeof arr +
                ' ' +
                arr +
                ' is not iterable(cannot read property Symbol(Symbol.iterator))'
            )
          );
        }
        var args = Array.prototype.slice.call(arr);
        if (args.length === 0) return resolve([]);
        var remaining = args.length;

        function res(i, val) {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(
                val,
                function(val) {
                  res(i, val);
                },
                function(e) {
                  args[i] = { status: 'rejected', reason: e };
                  if (--remaining === 0) {
                    resolve(args);
                  }
                }
              );
              return;
            }
          }
          args[i] = { status: 'fulfilled', value: val };
          if (--remaining === 0) {
            resolve(args);
          }
        }

        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    }

    // Store setTimeout reference so promise-polyfill will be unaffected by
    // other code modifying setTimeout (like sinon.useFakeTimers())
    var setTimeoutFunc = setTimeout;

    function isArray$1(x) {
      return Boolean(x && typeof x.length !== 'undefined');
    }

    function noop() {}

    // Polyfill for Function.prototype.bind
    function bind(fn, thisArg) {
      return function() {
        fn.apply(thisArg, arguments);
      };
    }

    /**
     * @constructor
     * @param {Function} fn
     */
    function Promise$1(fn) {
      if (!(this instanceof Promise$1))
        throw new TypeError('Promises must be constructed via new');
      if (typeof fn !== 'function') throw new TypeError('not a function');
      /** @type {!number} */
      this._state = 0;
      /** @type {!boolean} */
      this._handled = false;
      /** @type {Promise|undefined} */
      this._value = undefined;
      /** @type {!Array<!Function>} */
      this._deferreds = [];

      doResolve(fn, this);
    }

    function handle(self, deferred) {
      while (self._state === 3) {
        self = self._value;
      }
      if (self._state === 0) {
        self._deferreds.push(deferred);
        return;
      }
      self._handled = true;
      Promise$1._immediateFn(function() {
        var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
          return;
        }
        var ret;
        try {
          ret = cb(self._value);
        } catch (e) {
          reject(deferred.promise, e);
          return;
        }
        resolve(deferred.promise, ret);
      });
    }

    function resolve(self, newValue) {
      try {
        // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
        if (newValue === self)
          throw new TypeError('A promise cannot be resolved with itself.');
        if (
          newValue &&
          (typeof newValue === 'object' || typeof newValue === 'function')
        ) {
          var then = newValue.then;
          if (newValue instanceof Promise$1) {
            self._state = 3;
            self._value = newValue;
            finale(self);
            return;
          } else if (typeof then === 'function') {
            doResolve(bind(then, newValue), self);
            return;
          }
        }
        self._state = 1;
        self._value = newValue;
        finale(self);
      } catch (e) {
        reject(self, e);
      }
    }

    function reject(self, newValue) {
      self._state = 2;
      self._value = newValue;
      finale(self);
    }

    function finale(self) {
      if (self._state === 2 && self._deferreds.length === 0) {
        Promise$1._immediateFn(function() {
          if (!self._handled) {
            Promise$1._unhandledRejectionFn(self._value);
          }
        });
      }

      for (var i = 0, len = self._deferreds.length; i < len; i++) {
        handle(self, self._deferreds[i]);
      }
      self._deferreds = null;
    }

    /**
     * @constructor
     */
    function Handler(onFulfilled, onRejected, promise) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.promise = promise;
    }

    /**
     * Take a potentially misbehaving resolver function and make sure
     * onFulfilled and onRejected are only called once.
     *
     * Makes no guarantees about asynchrony.
     */
    function doResolve(fn, self) {
      var done = false;
      try {
        fn(
          function(value) {
            if (done) return;
            done = true;
            resolve(self, value);
          },
          function(reason) {
            if (done) return;
            done = true;
            reject(self, reason);
          }
        );
      } catch (ex) {
        if (done) return;
        done = true;
        reject(self, ex);
      }
    }

    Promise$1.prototype['catch'] = function(onRejected) {
      return this.then(null, onRejected);
    };

    Promise$1.prototype.then = function(onFulfilled, onRejected) {
      // @ts-ignore
      var prom = new this.constructor(noop);

      handle(this, new Handler(onFulfilled, onRejected, prom));
      return prom;
    };

    Promise$1.prototype['finally'] = finallyConstructor;

    Promise$1.all = function(arr) {
      return new Promise$1(function(resolve, reject) {
        if (!isArray$1(arr)) {
          return reject(new TypeError('Promise.all accepts an array'));
        }

        var args = Array.prototype.slice.call(arr);
        if (args.length === 0) return resolve([]);
        var remaining = args.length;

        function res(i, val) {
          try {
            if (val && (typeof val === 'object' || typeof val === 'function')) {
              var then = val.then;
              if (typeof then === 'function') {
                then.call(
                  val,
                  function(val) {
                    res(i, val);
                  },
                  reject
                );
                return;
              }
            }
            args[i] = val;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (ex) {
            reject(ex);
          }
        }

        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };

    Promise$1.allSettled = allSettled;

    Promise$1.resolve = function(value) {
      if (value && typeof value === 'object' && value.constructor === Promise$1) {
        return value;
      }

      return new Promise$1(function(resolve) {
        resolve(value);
      });
    };

    Promise$1.reject = function(value) {
      return new Promise$1(function(resolve, reject) {
        reject(value);
      });
    };

    Promise$1.race = function(arr) {
      return new Promise$1(function(resolve, reject) {
        if (!isArray$1(arr)) {
          return reject(new TypeError('Promise.race accepts an array'));
        }

        for (var i = 0, len = arr.length; i < len; i++) {
          Promise$1.resolve(arr[i]).then(resolve, reject);
        }
      });
    };

    // Use polyfill for setImmediate for performance gains
    Promise$1._immediateFn =
      // @ts-ignore
      (typeof setImmediate === 'function' &&
        function(fn) {
          // @ts-ignore
          setImmediate(fn);
        }) ||
      function(fn) {
        setTimeoutFunc(fn, 0);
      };

    Promise$1._unhandledRejectionFn = function _unhandledRejectionFn(err) {
      if (typeof console !== 'undefined' && console) {
        console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
      }
    };

    /** @suppress {undefinedVars} */
    var globalNS = (function() {
      // the only reliable means to get the global object is
      // `Function('return this')()`
      // However, this causes CSP violations in Chrome apps.
      if (typeof self !== 'undefined') {
        return self;
      }
      if (typeof window !== 'undefined') {
        return window;
      }
      if (typeof global !== 'undefined') {
        return global;
      }
      throw new Error('unable to locate global object');
    })();

    // Expose the polyfill if Promise is undefined or set to a
    // non-function value. The latter can be due to a named HTMLElement
    // being exposed by browsers for legacy reasons.
    // https://github.com/taylorhakes/promise-polyfill/issues/114
    if (typeof globalNS['Promise'] !== 'function') {
      globalNS['Promise'] = Promise$1;
    } else if (!globalNS.Promise.prototype['finally']) {
      globalNS.Promise.prototype['finally'] = finallyConstructor;
    } else if (!globalNS.Promise.allSettled) {
      globalNS.Promise.allSettled = allSettled;
    }

    (function(l){function m(){}function k(a,c){a=void 0===a?"utf-8":a;c=void 0===c?{fatal:!1}:c;if(-1===r.indexOf(a.toLowerCase()))throw new RangeError("Failed to construct 'TextDecoder': The encoding label provided ('"+a+"') is invalid.");if(c.fatal)throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");}function t(a){return Buffer.from(a.buffer,a.byteOffset,a.byteLength).toString("utf-8")}function u(a){var c=URL.createObjectURL(new Blob([a],{type:"text/plain;charset=UTF-8"}));
    try{var f=new XMLHttpRequest;f.open("GET",c,!1);f.send();return f.responseText}catch(e){return q(a)}finally{URL.revokeObjectURL(c);}}function q(a){for(var c=0,f=Math.min(65536,a.length+1),e=new Uint16Array(f),h=[],d=0;;){var b=c<a.length;if(!b||d>=f-1){h.push(String.fromCharCode.apply(null,e.subarray(0,d)));if(!b)return h.join("");a=a.subarray(c);d=c=0;}b=a[c++];if(0===(b&128))e[d++]=b;else if(192===(b&224)){var g=a[c++]&63;e[d++]=(b&31)<<6|g;}else if(224===(b&240)){g=a[c++]&63;var n=a[c++]&63;e[d++]=
    (b&31)<<12|g<<6|n;}else if(240===(b&248)){g=a[c++]&63;n=a[c++]&63;var v=a[c++]&63;b=(b&7)<<18|g<<12|n<<6|v;65535<b&&(b-=65536,e[d++]=b>>>10&1023|55296,b=56320|b&1023);e[d++]=b;}}}if(l.TextEncoder&&l.TextDecoder)return !1;var r=["utf-8","utf8","unicode-1-1-utf-8"];Object.defineProperty(m.prototype,"encoding",{value:"utf-8"});m.prototype.encode=function(a,c){c=void 0===c?{stream:!1}:c;if(c.stream)throw Error("Failed to encode: the 'stream' option is unsupported.");c=0;for(var f=a.length,e=0,h=Math.max(32,
    f+(f>>>1)+7),d=new Uint8Array(h>>>3<<3);c<f;){var b=a.charCodeAt(c++);if(55296<=b&&56319>=b){if(c<f){var g=a.charCodeAt(c);56320===(g&64512)&&(++c,b=((b&1023)<<10)+(g&1023)+65536);}if(55296<=b&&56319>=b)continue}e+4>d.length&&(h+=8,h*=1+c/a.length*2,h=h>>>3<<3,g=new Uint8Array(h),g.set(d),d=g);if(0===(b&4294967168))d[e++]=b;else {if(0===(b&4294965248))d[e++]=b>>>6&31|192;else if(0===(b&4294901760))d[e++]=b>>>12&15|224,d[e++]=b>>>6&63|128;else if(0===(b&4292870144))d[e++]=b>>>18&7|240,d[e++]=b>>>12&
    63|128,d[e++]=b>>>6&63|128;else continue;d[e++]=b&63|128;}}return d.slice?d.slice(0,e):d.subarray(0,e)};Object.defineProperty(k.prototype,"encoding",{value:"utf-8"});Object.defineProperty(k.prototype,"fatal",{value:!1});Object.defineProperty(k.prototype,"ignoreBOM",{value:!1});var p=q;"function"===typeof Buffer&&Buffer.from?p=t:"function"===typeof Blob&&"function"===typeof URL&&"function"===typeof URL.createObjectURL&&(p=u);k.prototype.decode=function(a,c){c=void 0===c?{stream:!1}:c;if(c.stream)throw Error("Failed to decode: the 'stream' option is unsupported.");
    a=a instanceof Uint8Array?a:a.buffer instanceof ArrayBuffer?new Uint8Array(a.buffer):new Uint8Array(a);return p(a)};l.TextEncoder=m;l.TextDecoder=k;})("undefined"!==typeof window?window:"undefined"!==typeof commonjsGlobal?commonjsGlobal:commonjsGlobal);

    (function (factory) {
      
      factory();
    }((function () {
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        }

        return _assertThisInitialized(self);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();

        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
              result;

          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;

            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }

          return _possibleConstructorReturn(this, result);
        };
      }

      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null) break;
        }

        return object;
      }

      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);

            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);

            if (desc.get) {
              return desc.get.call(receiver);
            }

            return desc.value;
          };
        }

        return _get(target, property, receiver || target);
      }

      var Emitter = /*#__PURE__*/function () {
        function Emitter() {
          _classCallCheck(this, Emitter);

          Object.defineProperty(this, 'listeners', {
            value: {},
            writable: true,
            configurable: true
          });
        }

        _createClass(Emitter, [{
          key: "addEventListener",
          value: function addEventListener(type, callback) {
            if (!(type in this.listeners)) {
              this.listeners[type] = [];
            }

            this.listeners[type].push(callback);
          }
        }, {
          key: "removeEventListener",
          value: function removeEventListener(type, callback) {
            if (!(type in this.listeners)) {
              return;
            }

            var stack = this.listeners[type];

            for (var i = 0, l = stack.length; i < l; i++) {
              if (stack[i] === callback) {
                stack.splice(i, 1);
                return;
              }
            }
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(event) {
            var _this = this;

            if (!(event.type in this.listeners)) {
              return;
            }

            var debounce = function debounce(callback) {
              setTimeout(function () {
                return callback.call(_this, event);
              });
            };

            var stack = this.listeners[event.type];

            for (var i = 0, l = stack.length; i < l; i++) {
              debounce(stack[i]);
            }

            return !event.defaultPrevented;
          }
        }]);

        return Emitter;
      }();

      var AbortSignal = /*#__PURE__*/function (_Emitter) {
        _inherits(AbortSignal, _Emitter);

        var _super = _createSuper(AbortSignal);

        function AbortSignal() {
          var _this2;

          _classCallCheck(this, AbortSignal);

          _this2 = _super.call(this); // Some versions of babel does not transpile super() correctly for IE <= 10, if the parent
          // constructor has failed to run, then "this.listeners" will still be undefined and then we call
          // the parent constructor directly instead as a workaround. For general details, see babel bug:
          // https://github.com/babel/babel/issues/3041
          // This hack was added as a fix for the issue described here:
          // https://github.com/Financial-Times/polyfill-library/pull/59#issuecomment-477558042

          if (!_this2.listeners) {
            Emitter.call(_assertThisInitialized(_this2));
          } // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
          // we want Object.keys(new AbortController().signal) to be [] for compat with the native impl


          Object.defineProperty(_assertThisInitialized(_this2), 'aborted', {
            value: false,
            writable: true,
            configurable: true
          });
          Object.defineProperty(_assertThisInitialized(_this2), 'onabort', {
            value: null,
            writable: true,
            configurable: true
          });
          return _this2;
        }

        _createClass(AbortSignal, [{
          key: "toString",
          value: function toString() {
            return '[object AbortSignal]';
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(event) {
            if (event.type === 'abort') {
              this.aborted = true;

              if (typeof this.onabort === 'function') {
                this.onabort.call(this, event);
              }
            }

            _get(_getPrototypeOf(AbortSignal.prototype), "dispatchEvent", this).call(this, event);
          }
        }]);

        return AbortSignal;
      }(Emitter);
      var AbortController = /*#__PURE__*/function () {
        function AbortController() {
          _classCallCheck(this, AbortController);

          // Compared to assignment, Object.defineProperty makes properties non-enumerable by default and
          // we want Object.keys(new AbortController()) to be [] for compat with the native impl
          Object.defineProperty(this, 'signal', {
            value: new AbortSignal(),
            writable: true,
            configurable: true
          });
        }

        _createClass(AbortController, [{
          key: "abort",
          value: function abort() {
            var event;

            try {
              event = new Event('abort');
            } catch (e) {
              if (typeof document !== 'undefined') {
                if (!document.createEvent) {
                  // For Internet Explorer 8:
                  event = document.createEventObject();
                  event.type = 'abort';
                } else {
                  // For Internet Explorer 11:
                  event = document.createEvent('Event');
                  event.initEvent('abort', false, false);
                }
              } else {
                // Fallback where document isn't available:
                event = {
                  type: 'abort',
                  bubbles: false,
                  cancelable: false
                };
              }
            }

            this.signal.dispatchEvent(event);
          }
        }, {
          key: "toString",
          value: function toString() {
            return '[object AbortController]';
          }
        }]);

        return AbortController;
      }();

      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        // These are necessary to make sure that we get correct output for:
        // Object.prototype.toString.call(new AbortController())
        AbortController.prototype[Symbol.toStringTag] = 'AbortController';
        AbortSignal.prototype[Symbol.toStringTag] = 'AbortSignal';
      }

      function polyfillNeeded(self) {
        if (self.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) {
          console.log('__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill');
          return true;
        } // Note that the "unfetch" minimal fetch polyfill defines fetch() without
        // defining window.Request, and this polyfill need to work on top of unfetch
        // so the below feature detection needs the !self.AbortController part.
        // The Request.prototype check is also needed because Safari versions 11.1.2
        // up to and including 12.1.x has a window.AbortController present but still
        // does NOT correctly implement abortable fetch:
        // https://bugs.webkit.org/show_bug.cgi?id=174980#c2


        return typeof self.Request === 'function' && !self.Request.prototype.hasOwnProperty('signal') || !self.AbortController;
      }

      (function (self) {

        if (!polyfillNeeded(self)) {
          return;
        }

        self.AbortController = AbortController;
        self.AbortSignal = AbortSignal;
      })(typeof self !== 'undefined' ? self : commonjsGlobal);

    })));

    var processLock = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProcessLocking = /** @class */ (function () {
        function ProcessLocking() {
            var _this = this;
            this.locked = new Map();
            this.addToLocked = function (key, toAdd) {
                var callbacks = _this.locked.get(key);
                if (callbacks === undefined) {
                    if (toAdd === undefined) {
                        _this.locked.set(key, []);
                    }
                    else {
                        _this.locked.set(key, [toAdd]);
                    }
                }
                else {
                    if (toAdd !== undefined) {
                        callbacks.unshift(toAdd);
                        _this.locked.set(key, callbacks);
                    }
                }
            };
            this.isLocked = function (key) {
                return _this.locked.has(key);
            };
            this.lock = function (key) {
                return new Promise(function (resolve, reject) {
                    if (_this.isLocked(key)) {
                        _this.addToLocked(key, resolve);
                    }
                    else {
                        _this.addToLocked(key);
                        resolve();
                    }
                });
            };
            this.unlock = function (key) {
                var callbacks = _this.locked.get(key);
                if (callbacks === undefined || callbacks.length === 0) {
                    _this.locked.delete(key);
                    return;
                }
                var toCall = callbacks.pop();
                _this.locked.set(key, callbacks);
                if (toCall !== undefined) {
                    setTimeout(toCall, 0);
                }
            };
        }
        ProcessLocking.getInstance = function () {
            if (ProcessLocking.instance === undefined) {
                ProcessLocking.instance = new ProcessLocking();
            }
            return ProcessLocking.instance;
        };
        return ProcessLocking;
    }());
    function getLock() {
        return ProcessLocking.getInstance();
    }
    exports.default = getLock;
    });

    unwrapExports(processLock);

    var browserTabsLock = createCommonjsModule(function (module, exports) {
    var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    Object.defineProperty(exports, "__esModule", { value: true });

    /**
     * @author: SuperTokens (https://github.com/supertokens)
     * This library was created as a part of a larger project, SuperTokens(https://supertokens.io) - the best session management solution.
     * You can also check out our other projects on https://github.com/supertokens
     *
     * To contribute to this package visit https://github.com/supertokens/browser-tabs-lock
     * If you face any problems you can file an issue on https://github.com/supertokens/browser-tabs-lock/issues
     *
     * If you have any questions or if you just want to say hi visit https://supertokens.io/discord
     */
    /**
     * @constant
     * @type {string}
     * @default
     * @description All the locks taken by this package will have this as prefix
    */
    var LOCK_STORAGE_KEY = 'browser-tabs-lock-key';
    /**
     * @function delay
     * @param {number} milliseconds - How long the delay should be in terms of milliseconds
     * @returns {Promise<void>}
     */
    function delay(milliseconds) {
        return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
    }
    /**
     * @function generateRandomString
     * @params {number} length - How long the random string should be
     * @returns {string}
     * @description returns random string whose length is equal to the length passed as parameter
     */
    function generateRandomString(length) {
        var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
        var randomstring = '';
        for (var i = 0; i < length; i++) {
            var INDEX = Math.floor(Math.random() * CHARS.length);
            randomstring += CHARS[INDEX];
        }
        return randomstring;
    }
    /**
     * @function getLockId
     * @returns {string}
     * @description Generates an id which will be unique for the browser tab
     */
    function getLockId() {
        return Date.now().toString() + generateRandomString(15);
    }
    var SuperTokensLock = /** @class */ (function () {
        function SuperTokensLock() {
            this.acquiredIatSet = new Set();
            this.id = getLockId();
            this.acquireLock = this.acquireLock.bind(this);
            this.releaseLock = this.releaseLock.bind(this);
            this.releaseLock__private__ = this.releaseLock__private__.bind(this);
            this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this);
            this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this);
            if (SuperTokensLock.waiters === undefined) {
                SuperTokensLock.waiters = [];
            }
        }
        /**
         * @async
         * @memberOf Lock
         * @function acquireLock
         * @param {string} lockKey - Key for which the lock is being acquired
         * @param {number} [timeout=5000] - Maximum time for which the function will wait to acquire the lock
         * @returns {Promise<boolean>}
         * @description Will return true if lock is being acquired, else false.
         *              Also the lock can be acquired for maximum 10 secs
         */
        SuperTokensLock.prototype.acquireLock = function (lockKey, timeout) {
            if (timeout === void 0) { timeout = 5000; }
            return __awaiter(this, void 0, void 0, function () {
                var iat, MAX_TIME, STORAGE_KEY, STORAGE, lockObj, TIMEOUT_KEY, lockObjPostDelay;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            iat = Date.now() + generateRandomString(4);
                            MAX_TIME = Date.now() + timeout;
                            STORAGE_KEY = LOCK_STORAGE_KEY + "-" + lockKey;
                            STORAGE = window.localStorage;
                            _a.label = 1;
                        case 1:
                            if (!(Date.now() < MAX_TIME)) return [3 /*break*/, 8];
                            return [4 /*yield*/, delay(30)];
                        case 2:
                            _a.sent();
                            lockObj = STORAGE.getItem(STORAGE_KEY);
                            if (!(lockObj === null)) return [3 /*break*/, 5];
                            TIMEOUT_KEY = this.id + "-" + lockKey + "-" + iat;
                            // there is a problem if setItem happens at the exact same time for 2 different processes.. so we add some random delay here.
                            return [4 /*yield*/, delay(Math.floor(Math.random() * 25))];
                        case 3:
                            // there is a problem if setItem happens at the exact same time for 2 different processes.. so we add some random delay here.
                            _a.sent();
                            STORAGE.setItem(STORAGE_KEY, JSON.stringify({
                                id: this.id,
                                iat: iat,
                                timeoutKey: TIMEOUT_KEY,
                                timeAcquired: Date.now(),
                                timeRefreshed: Date.now()
                            }));
                            return [4 /*yield*/, delay(30)];
                        case 4:
                            _a.sent(); // this is to prevent race conditions. This time must be more than the time it takes for storage.setItem
                            lockObjPostDelay = STORAGE.getItem(STORAGE_KEY);
                            if (lockObjPostDelay !== null) {
                                lockObjPostDelay = JSON.parse(lockObjPostDelay);
                                if (lockObjPostDelay.id === this.id && lockObjPostDelay.iat === iat) {
                                    this.acquiredIatSet.add(iat);
                                    this.refreshLockWhileAcquired(STORAGE_KEY, iat);
                                    return [2 /*return*/, true];
                                }
                            }
                            return [3 /*break*/, 7];
                        case 5:
                            SuperTokensLock.lockCorrector();
                            return [4 /*yield*/, this.waitForSomethingToChange(MAX_TIME)];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7:
                            iat = Date.now() + generateRandomString(4);
                            return [3 /*break*/, 1];
                        case 8: return [2 /*return*/, false];
                    }
                });
            });
        };
        SuperTokensLock.prototype.refreshLockWhileAcquired = function (storageKey, iat) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                        var STORAGE, lockObj;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, processLock.default().lock(iat)];
                                case 1:
                                    _a.sent();
                                    if (!this.acquiredIatSet.has(iat)) {
                                        processLock.default().unlock(iat);
                                        return [2 /*return*/];
                                    }
                                    STORAGE = window.localStorage;
                                    lockObj = STORAGE.getItem(storageKey);
                                    if (lockObj !== null) {
                                        lockObj = JSON.parse(lockObj);
                                        lockObj.timeRefreshed = Date.now();
                                        STORAGE.setItem(storageKey, JSON.stringify(lockObj));
                                        processLock.default().unlock(iat);
                                    }
                                    else {
                                        processLock.default().unlock(iat);
                                        return [2 /*return*/];
                                    }
                                    this.refreshLockWhileAcquired(storageKey, iat);
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 1000);
                    return [2 /*return*/];
                });
            });
        };
        SuperTokensLock.prototype.waitForSomethingToChange = function (MAX_TIME) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, new Promise(function (resolve) {
                                var resolvedCalled = false;
                                var startedAt = Date.now();
                                var MIN_TIME_TO_WAIT = 50; // ms
                                var removedListeners = false;
                                function stopWaiting() {
                                    if (!removedListeners) {
                                        window.removeEventListener('storage', stopWaiting);
                                        SuperTokensLock.removeFromWaiting(stopWaiting);
                                        clearTimeout(timeOutId);
                                        removedListeners = true;
                                    }
                                    if (!resolvedCalled) {
                                        resolvedCalled = true;
                                        var timeToWait = MIN_TIME_TO_WAIT - (Date.now() - startedAt);
                                        if (timeToWait > 0) {
                                            setTimeout(resolve, timeToWait);
                                        }
                                        else {
                                            resolve();
                                        }
                                    }
                                }
                                window.addEventListener('storage', stopWaiting);
                                SuperTokensLock.addToWaiting(stopWaiting);
                                var timeOutId = setTimeout(stopWaiting, Math.max(0, MAX_TIME - Date.now()));
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        SuperTokensLock.addToWaiting = function (func) {
            this.removeFromWaiting(func);
            if (SuperTokensLock.waiters === undefined) {
                return;
            }
            SuperTokensLock.waiters.push(func);
        };
        SuperTokensLock.removeFromWaiting = function (func) {
            if (SuperTokensLock.waiters === undefined) {
                return;
            }
            SuperTokensLock.waiters = SuperTokensLock.waiters.filter(function (i) { return i !== func; });
        };
        SuperTokensLock.notifyWaiters = function () {
            if (SuperTokensLock.waiters === undefined) {
                return;
            }
            var waiters = SuperTokensLock.waiters.slice(); // so that if Lock.waiters is changed it's ok.
            waiters.forEach(function (i) { return i(); });
        };
        /**
         * @function releaseLock
         * @memberOf Lock
         * @param {string} lockKey - Key for which lock is being released
         * @returns {void}
         * @description Release a lock.
         */
        SuperTokensLock.prototype.releaseLock = function (lockKey) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.releaseLock__private__(lockKey)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * @function releaseLock
         * @memberOf Lock
         * @param {string} lockKey - Key for which lock is being released
         * @returns {void}
         * @description Release a lock.
         */
        SuperTokensLock.prototype.releaseLock__private__ = function (lockKey) {
            return __awaiter(this, void 0, void 0, function () {
                var STORAGE, STORAGE_KEY, lockObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            STORAGE = window.localStorage;
                            STORAGE_KEY = LOCK_STORAGE_KEY + "-" + lockKey;
                            lockObj = STORAGE.getItem(STORAGE_KEY);
                            if (lockObj === null) {
                                return [2 /*return*/];
                            }
                            lockObj = JSON.parse(lockObj);
                            if (!(lockObj.id === this.id)) return [3 /*break*/, 2];
                            return [4 /*yield*/, processLock.default().lock(lockObj.iat)];
                        case 1:
                            _a.sent();
                            this.acquiredIatSet.delete(lockObj.iat);
                            STORAGE.removeItem(STORAGE_KEY);
                            processLock.default().unlock(lockObj.iat);
                            SuperTokensLock.notifyWaiters();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @function lockCorrector
         * @returns {void}
         * @description If a lock is acquired by a tab and the tab is closed before the lock is
         *              released, this function will release those locks
         */
        SuperTokensLock.lockCorrector = function () {
            var MIN_ALLOWED_TIME = Date.now() - 5000;
            var STORAGE = window.localStorage;
            var KEYS = Object.keys(STORAGE);
            var notifyWaiters = false;
            for (var i = 0; i < KEYS.length; i++) {
                var LOCK_KEY = KEYS[i];
                if (LOCK_KEY.includes(LOCK_STORAGE_KEY)) {
                    var lockObj = STORAGE.getItem(LOCK_KEY);
                    if (lockObj !== null) {
                        lockObj = JSON.parse(lockObj);
                        if ((lockObj.timeRefreshed === undefined && lockObj.timeAcquired < MIN_ALLOWED_TIME) ||
                            (lockObj.timeRefreshed !== undefined && lockObj.timeRefreshed < MIN_ALLOWED_TIME)) {
                            STORAGE.removeItem(LOCK_KEY);
                            notifyWaiters = true;
                        }
                    }
                }
            }
            if (notifyWaiters) {
                SuperTokensLock.notifyWaiters();
            }
        };
        SuperTokensLock.waiters = undefined;
        return SuperTokensLock;
    }());
    exports.default = SuperTokensLock;
    });

    var Lock = unwrapExports(browserTabsLock);

    function fetch(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return {ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t;}),t(a());},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null);})}

    /**
     * @ignore
     */
    var DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS = 60;
    /**
     * @ignore
     */
    var DEFAULT_POPUP_CONFIG_OPTIONS = {
        timeoutInSeconds: DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS
    };
    /**
     * @ignore
     */
    var DEFAULT_SILENT_TOKEN_RETRY_COUNT = 3;
    /**
     * @ignore
     */
    var CLEANUP_IFRAME_TIMEOUT_IN_SECONDS = 2;
    /**
     * @ignore
     */
    var DEFAULT_FETCH_TIMEOUT_MS = 10000;
    var CACHE_LOCATION_MEMORY = 'memory';
    var MISSING_REFRESH_TOKEN_ERROR_MESSAGE = 'The web worker is missing the refresh token';
    /**
     * @ignore
     */
    var DEFAULT_SCOPE = 'openid profile email';
    /**
     * A list of errors that can be issued by the authorization server which the
     * user can recover from by signing in interactively.
     * https://openid.net/specs/openid-connect-core-1_0.html#AuthError
     * @ignore
     */
    var RECOVERABLE_ERRORS = [
        'login_required',
        'consent_required',
        'interaction_required',
        'account_selection_required',
        // Strictly speaking the user can't recover from `access_denied` - but they
        // can get more information about their access being denied by logging in
        // interactively.
        'access_denied'
    ];
    /**
     * @ignore
     */
    var DEFAULT_SESSION_CHECK_EXPIRY_DAYS = 1;

    var GenericError = /** @class */ (function (_super) {
        __extends(GenericError, _super);
        function GenericError(error, error_description) {
            var _this = _super.call(this, error_description) || this;
            _this.error = error;
            _this.error_description = error_description;
            Object.setPrototypeOf(_this, GenericError.prototype);
            return _this;
        }
        GenericError.fromPayload = function (_a) {
            var error = _a.error, error_description = _a.error_description;
            return new GenericError(error, error_description);
        };
        return GenericError;
    }(Error));
    var AuthenticationError = /** @class */ (function (_super) {
        __extends(AuthenticationError, _super);
        function AuthenticationError(error, error_description, state, appState) {
            if (appState === void 0) { appState = null; }
            var _this = _super.call(this, error, error_description) || this;
            _this.state = state;
            _this.appState = appState;
            //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
            Object.setPrototypeOf(_this, AuthenticationError.prototype);
            return _this;
        }
        return AuthenticationError;
    }(GenericError));
    var TimeoutError = /** @class */ (function (_super) {
        __extends(TimeoutError, _super);
        function TimeoutError() {
            var _this = _super.call(this, 'timeout', 'Timeout') || this;
            //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
            Object.setPrototypeOf(_this, TimeoutError.prototype);
            return _this;
        }
        return TimeoutError;
    }(GenericError));
    var PopupTimeoutError = /** @class */ (function (_super) {
        __extends(PopupTimeoutError, _super);
        function PopupTimeoutError(popup) {
            var _this = _super.call(this) || this;
            _this.popup = popup;
            //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
            Object.setPrototypeOf(_this, PopupTimeoutError.prototype);
            return _this;
        }
        return PopupTimeoutError;
    }(TimeoutError));

    var createAbortController = function () { return new AbortController(); };
    var parseQueryResult = function (queryString) {
        if (queryString.indexOf('#') > -1) {
            queryString = queryString.substr(0, queryString.indexOf('#'));
        }
        var queryParams = queryString.split('&');
        var parsedQuery = {};
        queryParams.forEach(function (qp) {
            var _a = qp.split('='), key = _a[0], val = _a[1];
            parsedQuery[key] = decodeURIComponent(val);
        });
        return __assign(__assign({}, parsedQuery), { expires_in: parseInt(parsedQuery.expires_in) });
    };
    var runIframe = function (authorizeUrl, eventOrigin, timeoutInSeconds) {
        if (timeoutInSeconds === void 0) { timeoutInSeconds = DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS; }
        return new Promise(function (res, rej) {
            var iframe = window.document.createElement('iframe');
            iframe.setAttribute('width', '0');
            iframe.setAttribute('height', '0');
            iframe.style.display = 'none';
            var removeIframe = function () {
                if (window.document.body.contains(iframe)) {
                    window.document.body.removeChild(iframe);
                    window.removeEventListener('message', iframeEventHandler, false);
                }
            };
            var iframeEventHandler;
            var timeoutSetTimeoutId = setTimeout(function () {
                rej(new TimeoutError());
                removeIframe();
            }, timeoutInSeconds * 1000);
            iframeEventHandler = function (e) {
                if (e.origin != eventOrigin)
                    return;
                if (!e.data || e.data.type !== 'authorization_response')
                    return;
                var eventSource = e.source;
                if (eventSource) {
                    eventSource.close();
                }
                e.data.response.error
                    ? rej(GenericError.fromPayload(e.data.response))
                    : res(e.data.response);
                clearTimeout(timeoutSetTimeoutId);
                window.removeEventListener('message', iframeEventHandler, false);
                // Delay the removal of the iframe to prevent hanging loading status
                // in Chrome: https://github.com/auth0/auth0-spa-js/issues/240
                setTimeout(removeIframe, CLEANUP_IFRAME_TIMEOUT_IN_SECONDS * 1000);
            };
            window.addEventListener('message', iframeEventHandler, false);
            window.document.body.appendChild(iframe);
            iframe.setAttribute('src', authorizeUrl);
        });
    };
    var openPopup = function (url) {
        var width = 400;
        var height = 600;
        var left = window.screenX + (window.innerWidth - width) / 2;
        var top = window.screenY + (window.innerHeight - height) / 2;
        return window.open(url, 'auth0:authorize:popup', "left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + ",resizable,scrollbars=yes,status=1");
    };
    var runPopup = function (authorizeUrl, config) {
        var popup = config.popup;
        if (popup) {
            popup.location.href = authorizeUrl;
        }
        else {
            popup = openPopup(authorizeUrl);
        }
        if (!popup) {
            throw new Error('Could not open popup');
        }
        return new Promise(function (resolve, reject) {
            var popupEventListener;
            var timeoutId = setTimeout(function () {
                reject(new PopupTimeoutError(popup));
                window.removeEventListener('message', popupEventListener, false);
            }, (config.timeoutInSeconds || DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS) * 1000);
            popupEventListener = function (e) {
                if (!e.data || e.data.type !== 'authorization_response') {
                    return;
                }
                clearTimeout(timeoutId);
                window.removeEventListener('message', popupEventListener, false);
                popup.close();
                if (e.data.response.error) {
                    return reject(GenericError.fromPayload(e.data.response));
                }
                resolve(e.data.response);
            };
            window.addEventListener('message', function (e) { return popupEventListener(e); });
        });
    };
    var getCrypto = function () {
        //ie 11.x uses msCrypto
        return (window.crypto || window.msCrypto);
    };
    var getCryptoSubtle = function () {
        var crypto = getCrypto();
        //safari 10.x uses webkitSubtle
        return crypto.subtle || crypto.webkitSubtle;
    };
    var createRandomString = function () {
        var charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.';
        var random = '';
        var randomValues = Array.from(getCrypto().getRandomValues(new Uint8Array(43)));
        randomValues.forEach(function (v) { return (random += charset[v % charset.length]); });
        return random;
    };
    var encode = function (value) { return btoa(value); };
    var createQueryParams = function (params) {
        return Object.keys(params)
            .filter(function (k) { return typeof params[k] !== 'undefined'; })
            .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); })
            .join('&');
    };
    var sha256 = function (s) { return __awaiter(void 0, void 0, void 0, function () {
        var digestOp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    digestOp = getCryptoSubtle().digest({ name: 'SHA-256' }, new TextEncoder().encode(s));
                    // msCrypto (IE11) uses the old spec, which is not Promise based
                    // https://msdn.microsoft.com/en-us/expression/dn904640(v=vs.71)
                    // Instead of returning a promise, it returns a CryptoOperation
                    // with a result property in it.
                    // As a result, the various events need to be handled in the event that we're
                    // working in IE11 (hence the msCrypto check). These events just call resolve
                    // or reject depending on their intention.
                    if (window.msCrypto) {
                        return [2 /*return*/, new Promise(function (res, rej) {
                                digestOp.oncomplete = function (e) {
                                    res(e.target.result);
                                };
                                digestOp.onerror = function (e) {
                                    rej(e.error);
                                };
                                digestOp.onabort = function () {
                                    rej('The digest operation was aborted');
                                };
                            })];
                    }
                    return [4 /*yield*/, digestOp];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var urlEncodeB64 = function (input) {
        var b64Chars = { '+': '-', '/': '_', '=': '' };
        return input.replace(/[+/=]/g, function (m) { return b64Chars[m]; });
    };
    // https://stackoverflow.com/questions/30106476/
    var decodeB64 = function (input) {
        return decodeURIComponent(atob(input)
            .split('')
            .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(''));
    };
    var urlDecodeB64 = function (input) {
        return decodeB64(input.replace(/_/g, '/').replace(/-/g, '+'));
    };
    var bufferToBase64UrlEncoded = function (input) {
        var ie11SafeInput = new Uint8Array(input);
        return urlEncodeB64(window.btoa(String.fromCharCode.apply(String, Array.from(ie11SafeInput))));
    };
    var sendMessage = function (message, to) {
        return new Promise(function (resolve, reject) {
            var messageChannel = new MessageChannel();
            messageChannel.port1.onmessage = function (event) {
                // Only for fetch errors, as these get retried
                if (event.data.error) {
                    reject(new Error(event.data.error));
                }
                else {
                    resolve(event.data);
                }
            };
            to.postMessage(message, [messageChannel.port2]);
        });
    };
    var switchFetch = function (url, audience, scope, opts, timeout, worker) { return __awaiter(void 0, void 0, void 0, function () {
        var response, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!worker) return [3 /*break*/, 1];
                    // AbortSignal is not serializable, need to implement in the Web Worker
                    delete opts.signal;
                    return [2 /*return*/, sendMessage(__assign({ url: url, audience: audience, scope: scope, timeout: timeout }, opts), worker)];
                case 1: return [4 /*yield*/, fetch(url, opts)];
                case 2:
                    response = _b.sent();
                    _a = {
                        ok: response.ok
                    };
                    return [4 /*yield*/, response.json()];
                case 3: return [2 /*return*/, (_a.json = _b.sent(),
                        _a)];
            }
        });
    }); };
    var fetchWithTimeout = function (url, audience, scope, options, worker, timeout) {
        if (timeout === void 0) { timeout = DEFAULT_FETCH_TIMEOUT_MS; }
        var controller = createAbortController();
        var signal = controller.signal;
        var fetchOptions = __assign(__assign({}, options), { signal: signal });
        var timeoutId;
        // The promise will resolve with one of these two promises (the fetch or the timeout), whichever completes first.
        return Promise.race([
            switchFetch(url, audience, scope, fetchOptions, timeout, worker),
            new Promise(function (_, reject) {
                timeoutId = setTimeout(function () {
                    controller.abort();
                    reject(new Error("Timeout when executing 'fetch'"));
                }, timeout);
            })
        ]).finally(function () {
            clearTimeout(timeoutId);
        });
    };
    var getJSON = function (url, timeout, audience, scope, options, worker) { return __awaiter(void 0, void 0, void 0, function () {
        var fetchError, response, i, e_1, _a, error, error_description, success, ok, errorMessage, e;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    fetchError = null;
                    i = 0;
                    _b.label = 1;
                case 1:
                    if (!(i < DEFAULT_SILENT_TOKEN_RETRY_COUNT)) return [3 /*break*/, 6];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, fetchWithTimeout(url, audience, scope, options, worker, timeout)];
                case 3:
                    response = _b.sent();
                    fetchError = null;
                    return [3 /*break*/, 6];
                case 4:
                    e_1 = _b.sent();
                    // Fetch only fails in the case of a network issue, so should be
                    // retried here. Failure status (4xx, 5xx, etc) return a resolved Promise
                    // with the failure in the body.
                    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
                    fetchError = e_1;
                    return [3 /*break*/, 5];
                case 5:
                    i++;
                    return [3 /*break*/, 1];
                case 6:
                    if (fetchError) {
                        // unfetch uses XMLHttpRequest under the hood which throws
                        // ProgressEvents on error, which don't have message properties
                        fetchError.message = fetchError.message || 'Failed to fetch';
                        throw fetchError;
                    }
                    _a = response.json, error = _a.error, error_description = _a.error_description, success = __rest(_a, ["error", "error_description"]), ok = response.ok;
                    if (!ok) {
                        errorMessage = error_description || "HTTP error. Unable to fetch " + url;
                        e = new Error(errorMessage);
                        e.error = error || 'request_error';
                        e.error_description = errorMessage;
                        throw e;
                    }
                    return [2 /*return*/, success];
            }
        });
    }); };
    var oauthToken = function (_a, worker) { return __awaiter(void 0, void 0, void 0, function () {
        var baseUrl = _a.baseUrl, timeout = _a.timeout, audience = _a.audience, scope = _a.scope, options = __rest(_a, ["baseUrl", "timeout", "audience", "scope"]);
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getJSON(baseUrl + "/oauth/token", timeout, audience || 'default', scope, {
                        method: 'POST',
                        body: JSON.stringify(__assign({ redirect_uri: window.location.origin }, options)),
                        headers: {
                            'Content-type': 'application/json'
                        }
                    }, worker)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    }); };
    var validateCrypto = function () {
        if (!getCrypto()) {
            throw new Error('For security reasons, `window.crypto` is required to run `auth0-spa-js`.');
        }
        if (typeof getCryptoSubtle() === 'undefined') {
            throw new Error("\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    ");
        }
    };

    /**
     * @ignore
     */
    var dedupe = function (arr) { return Array.from(new Set(arr)); };
    /**
     * @ignore
     */
    var getUniqueScopes = function () {
        var scopes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scopes[_i] = arguments[_i];
        }
        return dedupe(scopes.join(' ').trim().split(/\s+/)).join(' ');
    };

    var keyPrefix = '@@auth0spajs@@';
    var DEFAULT_EXPIRY_ADJUSTMENT_SECONDS = 0;
    var createKey = function (e) {
        return keyPrefix + "::" + e.client_id + "::" + e.audience + "::" + e.scope;
    };
    /**
     * Wraps the specified cache entry and returns the payload
     * @param entry The cache entry to wrap
     */
    var wrapCacheEntry = function (entry) {
        var expiresInTime = Math.floor(Date.now() / 1000) + entry.expires_in;
        var expirySeconds = Math.min(expiresInTime, entry.decodedToken.claims.exp);
        return {
            body: entry,
            expiresAt: expirySeconds
        };
    };
    var LocalStorageCache = /** @class */ (function () {
        function LocalStorageCache() {
        }
        LocalStorageCache.prototype.save = function (entry) {
            var cacheKey = createKey(entry);
            var payload = wrapCacheEntry(entry);
            window.localStorage.setItem(cacheKey, JSON.stringify(payload));
        };
        LocalStorageCache.prototype.get = function (key, expiryAdjustmentSeconds) {
            if (expiryAdjustmentSeconds === void 0) { expiryAdjustmentSeconds = DEFAULT_EXPIRY_ADJUSTMENT_SECONDS; }
            var cacheKey = createKey(key);
            var payload = this.readJson(cacheKey);
            var nowSeconds = Math.floor(Date.now() / 1000);
            if (!payload)
                return;
            if (payload.expiresAt - expiryAdjustmentSeconds < nowSeconds) {
                if (payload.body.refresh_token) {
                    var newPayload = this.stripData(payload);
                    this.writeJson(cacheKey, newPayload);
                    return newPayload.body;
                }
                localStorage.removeItem(cacheKey);
                return;
            }
            return payload.body;
        };
        LocalStorageCache.prototype.clear = function () {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                if (localStorage.key(i).startsWith(keyPrefix)) {
                    localStorage.removeItem(localStorage.key(i));
                }
            }
        };
        /**
         * Retrieves data from local storage and parses it into the correct format
         * @param cacheKey The cache key
         */
        LocalStorageCache.prototype.readJson = function (cacheKey) {
            var json = window.localStorage.getItem(cacheKey);
            var payload;
            if (!json) {
                return;
            }
            payload = JSON.parse(json);
            if (!payload) {
                return;
            }
            return payload;
        };
        /**
         * Writes the payload as JSON to localstorage
         * @param cacheKey The cache key
         * @param payload The payload to write as JSON
         */
        LocalStorageCache.prototype.writeJson = function (cacheKey, payload) {
            localStorage.setItem(cacheKey, JSON.stringify(payload));
        };
        /**
         * Produce a copy of the payload with everything removed except the refresh token
         * @param payload The payload
         */
        LocalStorageCache.prototype.stripData = function (payload) {
            var refresh_token = payload.body.refresh_token;
            var strippedPayload = {
                body: { refresh_token: refresh_token },
                expiresAt: payload.expiresAt
            };
            return strippedPayload;
        };
        return LocalStorageCache;
    }());
    var InMemoryCache = /** @class */ (function () {
        function InMemoryCache() {
            this.enclosedCache = (function () {
                var cache = {
                    body: {},
                    expiresAt: 0
                };
                return {
                    save: function (entry) {
                        var key = createKey(entry);
                        var payload = wrapCacheEntry(entry);
                        cache[key] = payload;
                    },
                    get: function (key, expiryAdjustmentSeconds) {
                        if (expiryAdjustmentSeconds === void 0) { expiryAdjustmentSeconds = DEFAULT_EXPIRY_ADJUSTMENT_SECONDS; }
                        var cacheKey = createKey(key);
                        var wrappedEntry = cache[cacheKey];
                        var nowSeconds = Math.floor(Date.now() / 1000);
                        if (!wrappedEntry) {
                            return;
                        }
                        if (wrappedEntry.expiresAt - expiryAdjustmentSeconds < nowSeconds) {
                            if (wrappedEntry.body.refresh_token) {
                                wrappedEntry.body = {
                                    refresh_token: wrappedEntry.body.refresh_token
                                };
                                return wrappedEntry.body;
                            }
                            delete cache[cacheKey];
                            return;
                        }
                        return wrappedEntry.body;
                    },
                    clear: function () {
                        cache = {
                            body: {},
                            expiresAt: 0
                        };
                    }
                };
            })();
        }
        return InMemoryCache;
    }());

    var TRANSACTION_STORAGE_KEY = 'a0.spajs.txs';
    var TransactionManager = /** @class */ (function () {
        function TransactionManager(storage) {
            this.storage = storage;
            this.transaction = this.storage.get(TRANSACTION_STORAGE_KEY);
        }
        TransactionManager.prototype.create = function (transaction) {
            this.transaction = transaction;
            this.storage.save(TRANSACTION_STORAGE_KEY, transaction, {
                daysUntilExpire: 1
            });
        };
        TransactionManager.prototype.get = function () {
            return this.transaction;
        };
        TransactionManager.prototype.remove = function () {
            delete this.transaction;
            this.storage.remove(TRANSACTION_STORAGE_KEY);
        };
        return TransactionManager;
    }());

    var isNumber = function (n) { return typeof n === 'number'; };
    var idTokendecoded = [
        'iss',
        'aud',
        'exp',
        'nbf',
        'iat',
        'jti',
        'azp',
        'nonce',
        'auth_time',
        'at_hash',
        'c_hash',
        'acr',
        'amr',
        'sub_jwk',
        'cnf',
        'sip_from_tag',
        'sip_date',
        'sip_callid',
        'sip_cseq_num',
        'sip_via_branch',
        'orig',
        'dest',
        'mky',
        'events',
        'toe',
        'txn',
        'rph',
        'sid',
        'vot',
        'vtm'
    ];
    var decode = function (token) {
        var parts = token.split('.');
        var header = parts[0], payload = parts[1], signature = parts[2];
        if (parts.length !== 3 || !header || !payload || !signature) {
            throw new Error('ID token could not be decoded');
        }
        var payloadJSON = JSON.parse(urlDecodeB64(payload));
        var claims = { __raw: token };
        var user = {};
        Object.keys(payloadJSON).forEach(function (k) {
            claims[k] = payloadJSON[k];
            if (!idTokendecoded.includes(k)) {
                user[k] = payloadJSON[k];
            }
        });
        return {
            encoded: { header: header, payload: payload, signature: signature },
            header: JSON.parse(urlDecodeB64(header)),
            claims: claims,
            user: user
        };
    };
    var verify = function (options) {
        if (!options.id_token) {
            throw new Error('ID token is required but missing');
        }
        var decoded = decode(options.id_token);
        if (!decoded.claims.iss) {
            throw new Error('Issuer (iss) claim must be a string present in the ID token');
        }
        if (decoded.claims.iss !== options.iss) {
            throw new Error("Issuer (iss) claim mismatch in the ID token; expected \"" + options.iss + "\", found \"" + decoded.claims.iss + "\"");
        }
        if (!decoded.user.sub) {
            throw new Error('Subject (sub) claim must be a string present in the ID token');
        }
        if (decoded.header.alg !== 'RS256') {
            throw new Error("Signature algorithm of \"" + decoded.header.alg + "\" is not supported. Expected the ID token to be signed with \"RS256\".");
        }
        if (!decoded.claims.aud ||
            !(typeof decoded.claims.aud === 'string' ||
                Array.isArray(decoded.claims.aud))) {
            throw new Error('Audience (aud) claim must be a string or array of strings present in the ID token');
        }
        if (Array.isArray(decoded.claims.aud)) {
            if (!decoded.claims.aud.includes(options.aud)) {
                throw new Error("Audience (aud) claim mismatch in the ID token; expected \"" + options.aud + "\" but was not one of \"" + decoded.claims.aud.join(', ') + "\"");
            }
            if (decoded.claims.aud.length > 1) {
                if (!decoded.claims.azp) {
                    throw new Error('Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values');
                }
                if (decoded.claims.azp !== options.aud) {
                    throw new Error("Authorized Party (azp) claim mismatch in the ID token; expected \"" + options.aud + "\", found \"" + decoded.claims.azp + "\"");
                }
            }
        }
        else if (decoded.claims.aud !== options.aud) {
            throw new Error("Audience (aud) claim mismatch in the ID token; expected \"" + options.aud + "\" but found \"" + decoded.claims.aud + "\"");
        }
        if (options.nonce) {
            if (!decoded.claims.nonce) {
                throw new Error('Nonce (nonce) claim must be a string present in the ID token');
            }
            if (decoded.claims.nonce !== options.nonce) {
                throw new Error("Nonce (nonce) claim mismatch in the ID token; expected \"" + options.nonce + "\", found \"" + decoded.claims.nonce + "\"");
            }
        }
        if (options.max_age && !isNumber(decoded.claims.auth_time)) {
            throw new Error('Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified');
        }
        /* istanbul ignore next */
        if (!isNumber(decoded.claims.exp)) {
            throw new Error('Expiration Time (exp) claim must be a number present in the ID token');
        }
        if (!isNumber(decoded.claims.iat)) {
            throw new Error('Issued At (iat) claim must be a number present in the ID token');
        }
        var leeway = options.leeway || 60;
        var now = new Date(Date.now());
        var expDate = new Date(0);
        var nbfDate = new Date(0);
        var authTimeDate = new Date(0);
        authTimeDate.setUTCSeconds(parseInt(decoded.claims.auth_time) + options.max_age + leeway);
        expDate.setUTCSeconds(decoded.claims.exp + leeway);
        nbfDate.setUTCSeconds(decoded.claims.nbf - leeway);
        if (now > expDate) {
            throw new Error("Expiration Time (exp) claim error in the ID token; current time (" + now + ") is after expiration time (" + expDate + ")");
        }
        if (isNumber(decoded.claims.nbf) && now < nbfDate) {
            throw new Error("Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" + now + ") is before " + nbfDate);
        }
        if (isNumber(decoded.claims.auth_time) && now > authTimeDate) {
            throw new Error("Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (" + now + ") is after last auth at " + authTimeDate);
        }
        if (options.organizationId) {
            if (!decoded.claims.org_id) {
                throw new Error('Organization ID (org_id) claim must be a string present in the ID token');
            }
            else if (options.organizationId !== decoded.claims.org_id) {
                throw new Error("Organization ID (org_id) claim mismatch in the ID token; expected \"" + options.organizationId + "\", found \"" + decoded.claims.org_id + "\"");
            }
        }
        return decoded;
    };

    var esCookie = createCommonjsModule(function (module, exports) {
    var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    exports.__esModule = true;
    function stringifyAttribute(name, value) {
        if (!value) {
            return '';
        }
        var stringified = '; ' + name;
        if (value === true) {
            return stringified; // boolean attributes shouldn't have a value
        }
        return stringified + '=' + value;
    }
    function stringifyAttributes(attributes) {
        if (typeof attributes.expires === 'number') {
            var expires = new Date();
            expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
            attributes.expires = expires;
        }
        return stringifyAttribute('Expires', attributes.expires ? attributes.expires.toUTCString() : '')
            + stringifyAttribute('Domain', attributes.domain)
            + stringifyAttribute('Path', attributes.path)
            + stringifyAttribute('Secure', attributes.secure)
            + stringifyAttribute('SameSite', attributes.sameSite);
    }
    function encode(name, value, attributes) {
        return encodeURIComponent(name)
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent) // allowed special characters
            .replace(/\(/g, '%28').replace(/\)/g, '%29') // replace opening and closing parens
            + '=' + encodeURIComponent(value)
            // allowed special characters
            .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)
            + stringifyAttributes(attributes);
    }
    exports.encode = encode;
    function parse(cookieString) {
        var result = {};
        var cookies = cookieString ? cookieString.split('; ') : [];
        var rdecode = /(%[\dA-F]{2})+/gi;
        for (var i = 0; i < cookies.length; i++) {
            var parts = cookies[i].split('=');
            var cookie = parts.slice(1).join('=');
            if (cookie.charAt(0) === '"') {
                cookie = cookie.slice(1, -1);
            }
            try {
                var name_1 = parts[0].replace(rdecode, decodeURIComponent);
                result[name_1] = cookie.replace(rdecode, decodeURIComponent);
            }
            catch (e) {
                // ignore cookies with invalid name/value encoding
            }
        }
        return result;
    }
    exports.parse = parse;
    function getAll() {
        return parse(document.cookie);
    }
    exports.getAll = getAll;
    function get(name) {
        return getAll()[name];
    }
    exports.get = get;
    function set(name, value, attributes) {
        document.cookie = encode(name, value, __assign({ path: '/' }, attributes));
    }
    exports.set = set;
    function remove(name, attributes) {
        set(name, '', __assign(__assign({}, attributes), { expires: -1 }));
    }
    exports.remove = remove;
    });

    unwrapExports(esCookie);
    var esCookie_1 = esCookie.encode;
    var esCookie_2 = esCookie.parse;
    var esCookie_3 = esCookie.getAll;
    var esCookie_4 = esCookie.get;
    var esCookie_5 = esCookie.set;
    var esCookie_6 = esCookie.remove;

    /**
     * A storage protocol for marshalling data to/from cookies
     */
    var CookieStorage = {
        get: function (key) {
            var value = esCookie_4(key);
            if (typeof value === 'undefined') {
                return;
            }
            return JSON.parse(value);
        },
        save: function (key, value, options) {
            var cookieAttributes = {};
            if ('https:' === window.location.protocol) {
                cookieAttributes = {
                    secure: true,
                    sameSite: 'none'
                };
            }
            cookieAttributes.expires = options.daysUntilExpire;
            esCookie_5(key, JSON.stringify(value), cookieAttributes);
        },
        remove: function (key) {
            esCookie_6(key);
        }
    };
    /**
     * @ignore
     */
    var LEGACY_PREFIX = '_legacy_';
    /**
     * Cookie storage that creates a cookie for modern and legacy browsers.
     * See: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
     */
    var CookieStorageWithLegacySameSite = {
        get: function (key) {
            var value = CookieStorage.get(key);
            if (value) {
                return value;
            }
            return CookieStorage.get("" + LEGACY_PREFIX + key);
        },
        save: function (key, value, options) {
            var cookieAttributes = {};
            if ('https:' === window.location.protocol) {
                cookieAttributes = { secure: true };
            }
            cookieAttributes.expires = options.daysUntilExpire;
            esCookie_5("" + LEGACY_PREFIX + key, JSON.stringify(value), cookieAttributes);
            CookieStorage.save(key, value, options);
        },
        remove: function (key) {
            CookieStorage.remove(key);
            CookieStorage.remove("" + LEGACY_PREFIX + key);
        }
    };
    /**
     * A storage protocol for marshalling data to/from session storage
     */
    var SessionStorage = {
        get: function (key) {
            if (typeof sessionStorage === 'undefined') {
                return;
            }
            var value = sessionStorage.getItem(key);
            if (typeof value === 'undefined') {
                return;
            }
            return JSON.parse(value);
        },
        save: function (key, value) {
            sessionStorage.setItem(key, JSON.stringify(value));
        },
        remove: function (key) {
            sessionStorage.removeItem(key);
        }
    };

    var version$1 = '1.13.3';

    function decodeBase64(base64, enableUnicode) {
        var binaryString = atob(base64);
        if (enableUnicode) {
            var binaryView = new Uint8Array(binaryString.length);
            for (var i = 0, n = binaryString.length; i < n; ++i) {
                binaryView[i] = binaryString.charCodeAt(i);
            }
            return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
        }
        return binaryString;
    }

    function createURL(base64, sourcemapArg, enableUnicodeArg) {
        var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
        var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
        var source = decodeBase64(base64, enableUnicode);
        var start = source.indexOf('\n', 10) + 1;
        var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
        var blob = new Blob([body], { type: 'application/javascript' });
        return URL.createObjectURL(blob);
    }

    function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
        var url;
        return function WorkerFactory(options) {
            url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
            return new Worker(url, options);
        };
    }

    var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLg0KICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOyB5b3UgbWF5IG5vdCB1c2UNCiAgICB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZQ0KICAgIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wDQoNCiAgICBUSElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZDQogICAgS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRA0KICAgIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsDQogICAgTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC4NCg0KICAgIFNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucw0KICAgIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7DQogICAgICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7DQogICAgICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHsNCiAgICAgICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldOw0KICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07DQogICAgICAgICAgICB9DQogICAgICAgICAgICByZXR1cm4gdDsNCiAgICAgICAgfTsNCiAgICAgICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7DQogICAgfTsNCg0KICAgIGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7DQogICAgICAgIHZhciB0ID0ge307DQogICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKQ0KICAgICAgICAgICAgdFtwXSA9IHNbcF07DQogICAgICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICJmdW5jdGlvbiIpDQogICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7DQogICAgICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKQ0KICAgICAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgcmV0dXJuIHQ7DQogICAgfQ0KDQogICAgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikgew0KICAgICAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsNCiAgICAgICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH0NCiAgICAgICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yWyJ0aHJvdyJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH0NCiAgICAgICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9DQogICAgICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7DQogICAgICAgIH0pOw0KICAgIH0NCg0KICAgIGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHsNCiAgICAgICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZzsNCiAgICAgICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksICJ0aHJvdyI6IHZlcmIoMSksICJyZXR1cm4iOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09ICJmdW5jdGlvbiIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7DQogICAgICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfQ0KICAgICAgICBmdW5jdGlvbiBzdGVwKG9wKSB7DQogICAgICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcigiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLiIpOw0KICAgICAgICAgICAgd2hpbGUgKF8pIHRyeSB7DQogICAgICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVsicmV0dXJuIl0gOiBvcFswXSA/IHlbInRocm93Il0gfHwgKCh0ID0geVsicmV0dXJuIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0Ow0KICAgICAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTsNCiAgICAgICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7DQogICAgICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrOw0KICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9Ow0KICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7DQogICAgICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTsNCiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoNCiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH0NCiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpOw0KICAgICAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7DQogICAgICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9DQogICAgICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTsNCiAgICAgICAgfQ0KICAgIH0KCiAgICAvKioNCiAgICAgKiBAaWdub3JlDQogICAgICovDQogICAgdmFyIE1JU1NJTkdfUkVGUkVTSF9UT0tFTl9FUlJPUl9NRVNTQUdFID0gJ1RoZSB3ZWIgd29ya2VyIGlzIG1pc3NpbmcgdGhlIHJlZnJlc2ggdG9rZW4nOwoKICAgIHZhciByZWZyZXNoVG9rZW5zID0ge307DQogICAgdmFyIGNhY2hlS2V5ID0gZnVuY3Rpb24gKGF1ZGllbmNlLCBzY29wZSkgeyByZXR1cm4gYXVkaWVuY2UgKyAifCIgKyBzY29wZTsgfTsNCiAgICB2YXIgZ2V0UmVmcmVzaFRva2VuID0gZnVuY3Rpb24gKGF1ZGllbmNlLCBzY29wZSkgew0KICAgICAgICByZXR1cm4gcmVmcmVzaFRva2Vuc1tjYWNoZUtleShhdWRpZW5jZSwgc2NvcGUpXTsNCiAgICB9Ow0KICAgIHZhciBzZXRSZWZyZXNoVG9rZW4gPSBmdW5jdGlvbiAocmVmcmVzaFRva2VuLCBhdWRpZW5jZSwgc2NvcGUpIHsNCiAgICAgICAgcmV0dXJuIChyZWZyZXNoVG9rZW5zW2NhY2hlS2V5KGF1ZGllbmNlLCBzY29wZSldID0gcmVmcmVzaFRva2VuKTsNCiAgICB9Ow0KICAgIHZhciBkZWxldGVSZWZyZXNoVG9rZW4gPSBmdW5jdGlvbiAoYXVkaWVuY2UsIHNjb3BlKSB7DQogICAgICAgIHJldHVybiBkZWxldGUgcmVmcmVzaFRva2Vuc1tjYWNoZUtleShhdWRpZW5jZSwgc2NvcGUpXTsNCiAgICB9Ow0KICAgIHZhciB3YWl0ID0gZnVuY3Rpb24gKHRpbWUpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpOyB9KTsgfTsNCiAgICB2YXIgbWVzc2FnZUhhbmRsZXIgPSBmdW5jdGlvbiAoX2EpIHsgdmFyIF9iLCB1cmwsIHRpbWVvdXQsIGF1ZGllbmNlLCBzY29wZSwgb3B0cywgcG9ydDsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7DQogICAgICAgIHZhciBqc29uLCBib2R5LCByZWZyZXNoVG9rZW4sIGFib3J0Q29udHJvbGxlciwgc2lnbmFsLCByZXNwb25zZSwgZXJyb3JfMSwgZXJyb3JfMjsNCiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykgew0KICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkgew0KICAgICAgICAgICAgICAgIGNhc2UgMDoNCiAgICAgICAgICAgICAgICAgICAgX2IgPSBfYS5kYXRhLCAodXJsID0gX2IudXJsLCB0aW1lb3V0ID0gX2IudGltZW91dCwgYXVkaWVuY2UgPSBfYi5hdWRpZW5jZSwgc2NvcGUgPSBfYi5zY29wZSwgX2IpLCBvcHRzID0gX19yZXN0KF9iLCBbInVybCIsICJ0aW1lb3V0IiwgImF1ZGllbmNlIiwgInNjb3BlIl0pLCAocG9ydCA9IF9hLnBvcnRzWzBdLCBfYSk7DQogICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTsNCiAgICAgICAgICAgICAgICBjYXNlIDE6DQogICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMSwgNywgLCA4XSk7DQogICAgICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKG9wdHMuYm9keSk7DQogICAgICAgICAgICAgICAgICAgIGlmICghYm9keS5yZWZyZXNoX3Rva2VuICYmIGJvZHkuZ3JhbnRfdHlwZSA9PT0gJ3JlZnJlc2hfdG9rZW4nKSB7DQogICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW4gPSBnZXRSZWZyZXNoVG9rZW4oYXVkaWVuY2UsIHNjb3BlKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVmcmVzaFRva2VuKSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKE1JU1NJTkdfUkVGUkVTSF9UT0tFTl9FUlJPUl9NRVNTQUdFKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMuYm9keSA9IEpTT04uc3RyaW5naWZ5KF9fYXNzaWduKF9fYXNzaWduKHt9LCBib2R5KSwgeyByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4gfSkpOw0KICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTsNCiAgICAgICAgICAgICAgICAgICAgc2lnbmFsID0gYWJvcnRDb250cm9sbGVyLnNpZ25hbDsNCiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB2b2lkIDA7DQogICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMjsNCiAgICAgICAgICAgICAgICBjYXNlIDI6DQogICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMiwgNCwgLCA1XSk7DQogICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UucmFjZShbDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FpdCh0aW1lb3V0KSwNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaCh1cmwsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRzKSwgeyBzaWduYWw6IHNpZ25hbCB9KSkNCiAgICAgICAgICAgICAgICAgICAgICAgIF0pXTsNCiAgICAgICAgICAgICAgICBjYXNlIDM6DQogICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Muc2VudCgpOw0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTsNCiAgICAgICAgICAgICAgICBjYXNlIDQ6DQogICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYy5zZW50KCk7DQogICAgICAgICAgICAgICAgICAgIC8vIGZldGNoIGVycm9yLCByZWplY3QgYHNlbmRNZXNzYWdlYCB1c2luZyBgZXJyb3JgIGtleSBzbyB0aGF0IHdlIHJldHJ5Lg0KICAgICAgICAgICAgICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8xLm1lc3NhZ2UNCiAgICAgICAgICAgICAgICAgICAgfSk7DQogICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTsNCiAgICAgICAgICAgICAgICBjYXNlIDU6DQogICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UpIHsNCiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXF1ZXN0IHRpbWVzIG91dCwgYWJvcnQgaXQgYW5kIGxldCBgZmV0Y2hXaXRoVGltZW91dGAgcmFpc2UgdGhlIGVycm9yLg0KICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7DQogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107DQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTsNCiAgICAgICAgICAgICAgICBjYXNlIDY6DQogICAgICAgICAgICAgICAgICAgIGpzb24gPSBfYy5zZW50KCk7DQogICAgICAgICAgICAgICAgICAgIGlmIChqc29uLnJlZnJlc2hfdG9rZW4pIHsNCiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlZnJlc2hUb2tlbihqc29uLnJlZnJlc2hfdG9rZW4sIGF1ZGllbmNlLCBzY29wZSk7DQogICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUganNvbi5yZWZyZXNoX3Rva2VuOw0KICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgIGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlUmVmcmVzaFRva2VuKGF1ZGllbmNlLCBzY29wZSk7DQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7DQogICAgICAgICAgICAgICAgICAgICAgICBvazogcmVzcG9uc2Uub2ssDQogICAgICAgICAgICAgICAgICAgICAgICBqc29uOiBqc29uDQogICAgICAgICAgICAgICAgICAgIH0pOw0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTsNCiAgICAgICAgICAgICAgICBjYXNlIDc6DQogICAgICAgICAgICAgICAgICAgIGVycm9yXzIgPSBfYy5zZW50KCk7DQogICAgICAgICAgICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2Uoew0KICAgICAgICAgICAgICAgICAgICAgICAgb2s6IGZhbHNlLA0KICAgICAgICAgICAgICAgICAgICAgICAganNvbjogew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yX2Rlc2NyaXB0aW9uOiBlcnJvcl8yLm1lc3NhZ2UNCiAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgfSk7DQogICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdOw0KICAgICAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIFsyIC8qcmV0dXJuKi9dOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9KTsgfTsNCiAgICAvLyBEb24ndCBydW4gYGFkZEV2ZW50TGlzdGVuZXJgIGluIG91ciB0ZXN0cyAodGhpcyBpcyByZXBsYWNlZCBpbiByb2xsdXApDQogICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovDQogICAgew0KICAgICAgICAvLyBAdHMtaWdub3JlDQogICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlSGFuZGxlcik7DQogICAgfQoKfSgpKTsKCg==', 'data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4ud29ya2VyLmpzIiwic291cmNlcyI6WyJ3b3JrZXI6Ly93ZWItd29ya2VyL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3b3JrZXI6Ly93ZWItd29ya2VyL3NyYy9jb25zdGFudHMudHMiLCJ3b3JrZXI6Ly93ZWItd29ya2VyL3NyYy90b2tlbi53b3JrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgUG9wdXBDb25maWdPcHRpb25zIH0gZnJvbSAnLi9nbG9iYWwnO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQVVUSE9SSVpFX1RJTUVPVVRfSU5fU0VDT05EUyA9IDYwO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUE9QVVBfQ09ORklHX09QVElPTlM6IFBvcHVwQ29uZmlnT3B0aW9ucyA9IHtcbiAgdGltZW91dEluU2Vjb25kczogREVGQVVMVF9BVVRIT1JJWkVfVElNRU9VVF9JTl9TRUNPTkRTXG59O1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0lMRU5UX1RPS0VOX1JFVFJZX0NPVU5UID0gMztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBDTEVBTlVQX0lGUkFNRV9USU1FT1VUX0lOX1NFQ09ORFMgPSAyO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRkVUQ0hfVElNRU9VVF9NUyA9IDEwMDAwO1xuXG5leHBvcnQgY29uc3QgQ0FDSEVfTE9DQVRJT05fTUVNT1JZID0gJ21lbW9yeSc7XG5leHBvcnQgY29uc3QgQ0FDSEVfTE9DQVRJT05fTE9DQUxfU1RPUkFHRSA9ICdsb2NhbHN0b3JhZ2UnO1xuZXhwb3J0IGNvbnN0IE1JU1NJTkdfUkVGUkVTSF9UT0tFTl9FUlJPUl9NRVNTQUdFID1cbiAgJ1RoZSB3ZWIgd29ya2VyIGlzIG1pc3NpbmcgdGhlIHJlZnJlc2ggdG9rZW4nO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0NPUEUgPSAnb3BlbmlkIHByb2ZpbGUgZW1haWwnO1xuXG4vKipcbiAqIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBjYW4gYmUgaXNzdWVkIGJ5IHRoZSBhdXRob3JpemF0aW9uIHNlcnZlciB3aGljaCB0aGVcbiAqIHVzZXIgY2FuIHJlY292ZXIgZnJvbSBieSBzaWduaW5nIGluIGludGVyYWN0aXZlbHkuXG4gKiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNBdXRoRXJyb3JcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IFJFQ09WRVJBQkxFX0VSUk9SUyA9IFtcbiAgJ2xvZ2luX3JlcXVpcmVkJyxcbiAgJ2NvbnNlbnRfcmVxdWlyZWQnLFxuICAnaW50ZXJhY3Rpb25fcmVxdWlyZWQnLFxuICAnYWNjb3VudF9zZWxlY3Rpb25fcmVxdWlyZWQnLFxuICAvLyBTdHJpY3RseSBzcGVha2luZyB0aGUgdXNlciBjYW4ndCByZWNvdmVyIGZyb20gYGFjY2Vzc19kZW5pZWRgIC0gYnV0IHRoZXlcbiAgLy8gY2FuIGdldCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZWlyIGFjY2VzcyBiZWluZyBkZW5pZWQgYnkgbG9nZ2luZyBpblxuICAvLyBpbnRlcmFjdGl2ZWx5LlxuICAnYWNjZXNzX2RlbmllZCdcbl07XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9TRVNTSU9OX0NIRUNLX0VYUElSWV9EQVlTID0gMTtcbiIsImltcG9ydCB7IE1JU1NJTkdfUkVGUkVTSF9UT0tFTl9FUlJPUl9NRVNTQUdFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5sZXQgcmVmcmVzaFRva2VucyA9IHt9O1xuXG5jb25zdCBjYWNoZUtleSA9IChhdWRpZW5jZSwgc2NvcGUpID0+IGAke2F1ZGllbmNlfXwke3Njb3BlfWA7XG5cbmNvbnN0IGdldFJlZnJlc2hUb2tlbiA9IChhdWRpZW5jZSwgc2NvcGUpID0+XG4gIHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV07XG5cbmNvbnN0IHNldFJlZnJlc2hUb2tlbiA9IChyZWZyZXNoVG9rZW4sIGF1ZGllbmNlLCBzY29wZSkgPT5cbiAgKHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV0gPSByZWZyZXNoVG9rZW4pO1xuXG5jb25zdCBkZWxldGVSZWZyZXNoVG9rZW4gPSAoYXVkaWVuY2UsIHNjb3BlKSA9PlxuICBkZWxldGUgcmVmcmVzaFRva2Vuc1tjYWNoZUtleShhdWRpZW5jZSwgc2NvcGUpXTtcblxuY29uc3Qgd2FpdDogYW55ID0gdGltZSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpO1xuXG5jb25zdCBtZXNzYWdlSGFuZGxlciA9IGFzeW5jICh7XG4gIGRhdGE6IHsgdXJsLCB0aW1lb3V0LCBhdWRpZW5jZSwgc2NvcGUsIC4uLm9wdHMgfSxcbiAgcG9ydHM6IFtwb3J0XVxufSkgPT4ge1xuICBsZXQganNvbjtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5wYXJzZShvcHRzLmJvZHkpO1xuICAgIGlmICghYm9keS5yZWZyZXNoX3Rva2VuICYmIGJvZHkuZ3JhbnRfdHlwZSA9PT0gJ3JlZnJlc2hfdG9rZW4nKSB7XG4gICAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBnZXRSZWZyZXNoVG9rZW4oYXVkaWVuY2UsIHNjb3BlKTtcbiAgICAgIGlmICghcmVmcmVzaFRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihNSVNTSU5HX1JFRlJFU0hfVE9LRU5fRVJST1JfTUVTU0FHRSk7XG4gICAgICB9XG4gICAgICBvcHRzLmJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IC4uLmJvZHksIHJlZnJlc2hfdG9rZW46IHJlZnJlc2hUb2tlbiB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgY29uc3QgeyBzaWduYWwgfSA9IGFib3J0Q29udHJvbGxlcjtcblxuICAgIGxldCByZXNwb25zZTtcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICB3YWl0KHRpbWVvdXQpLFxuICAgICAgICBmZXRjaCh1cmwsIHsgLi4ub3B0cywgc2lnbmFsIH0pXG4gICAgICBdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gZmV0Y2ggZXJyb3IsIHJlamVjdCBgc2VuZE1lc3NhZ2VgIHVzaW5nIGBlcnJvcmAga2V5IHNvIHRoYXQgd2UgcmV0cnkuXG4gICAgICBwb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIC8vIElmIHRoZSByZXF1ZXN0IHRpbWVzIG91dCwgYWJvcnQgaXQgYW5kIGxldCBgZmV0Y2hXaXRoVGltZW91dGAgcmFpc2UgdGhlIGVycm9yLlxuICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGlmIChqc29uLnJlZnJlc2hfdG9rZW4pIHtcbiAgICAgIHNldFJlZnJlc2hUb2tlbihqc29uLnJlZnJlc2hfdG9rZW4sIGF1ZGllbmNlLCBzY29wZSk7XG4gICAgICBkZWxldGUganNvbi5yZWZyZXNoX3Rva2VuO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGVSZWZyZXNoVG9rZW4oYXVkaWVuY2UsIHNjb3BlKTtcbiAgICB9XG5cbiAgICBwb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgIG9rOiByZXNwb25zZS5vayxcbiAgICAgIGpzb25cbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBwb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgIG9rOiBmYWxzZSxcbiAgICAgIGpzb246IHtcbiAgICAgICAgZXJyb3JfZGVzY3JpcHRpb246IGVycm9yLm1lc3NhZ2VcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuLy8gRG9uJ3QgcnVuIGBhZGRFdmVudExpc3RlbmVyYCBpbiBvdXIgdGVzdHMgKHRoaXMgaXMgcmVwbGFjZWQgaW4gcm9sbHVwKVxuLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHsgbWVzc2FnZUhhbmRsZXIgfTtcbn0gZWxzZSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG1lc3NhZ2VIYW5kbGVyKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtBQUNBO0lBQ0E7SUFDQTtJQUNBO0FBZUE7SUFDTyxJQUFJLFFBQVEsR0FBRyxXQUFXO0lBQ2pDLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFO0lBQ3JELFFBQVEsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDN0QsWUFBWSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLFlBQVksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekYsU0FBUztJQUNULFFBQVEsT0FBTyxDQUFDLENBQUM7SUFDakIsTUFBSztJQUNMLElBQUksT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMzQyxFQUFDO0FBQ0Q7SUFDTyxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0lBQzdCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2YsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3ZGLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sQ0FBQyxxQkFBcUIsS0FBSyxVQUFVO0lBQ3ZFLFFBQVEsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNoRixZQUFZLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxTQUFTO0lBQ1QsSUFBSSxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7QUFnQkQ7SUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7SUFDN0QsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7SUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7SUFDdkosUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUUsS0FBSyxDQUFDLENBQUM7SUFDUCxDQUFDO0FBQ0Q7SUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0lBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdKLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDdEUsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7SUFDdEIsUUFBUSxJQUFJLENBQUMsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDdEUsUUFBUSxPQUFPLENBQUMsRUFBRSxJQUFJO0lBQ3RCLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekssWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNO0lBQzlDLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDeEUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7SUFDakUsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVM7SUFDakUsZ0JBQWdCO0lBQ2hCLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFO0lBQ2hJLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO0lBQzFHLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7SUFDekYsb0JBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtJQUN2RixvQkFBb0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMxQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVM7SUFDM0MsYUFBYTtJQUNiLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtJQUNsRSxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDekYsS0FBSztJQUNMOztJQ3BHQTs7O0lBNkJPLElBQU0sbUNBQW1DLEdBQzlDLDZDQUE2Qzs7SUM5Qi9DLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUV2QixJQUFNLFFBQVEsR0FBRyxVQUFDLFFBQVEsRUFBRSxLQUFLLElBQUssT0FBRyxRQUFRLFNBQUksS0FBTyxHQUFBLENBQUM7SUFFN0QsSUFBTSxlQUFlLEdBQUcsVUFBQyxRQUFRLEVBQUUsS0FBSztRQUN0QyxPQUFBLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQXhDLENBQXdDLENBQUM7SUFFM0MsSUFBTSxlQUFlLEdBQUcsVUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLEtBQUs7UUFDcEQsUUFBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLFlBQVk7SUFBeEQsQ0FBeUQsQ0FBQztJQUU1RCxJQUFNLGtCQUFrQixHQUFHLFVBQUMsUUFBUSxFQUFFLEtBQUs7UUFDekMsT0FBQSxPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQS9DLENBQStDLENBQUM7SUFFbEQsSUFBTSxJQUFJLEdBQVEsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUEsQ0FBQyxHQUFBLENBQUM7SUFFNUUsSUFBTSxjQUFjLEdBQUcsVUFBTyxFQUc3Qjs7Ozs7b0JBRkMsWUFBZ0QsR0FBeEMsR0FBRyxTQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsS0FBSyxXQUFBLE9BQUssSUFBSSxjQUF4Qyx1Q0FBMEMsQ0FBRixHQUN0QyxJQUFJLGNBQUE7Ozs7b0JBSUosSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLGVBQWUsRUFBRTt3QkFDeEQsWUFBWSxHQUFHLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ3RELElBQUksQ0FBQyxZQUFZLEVBQUU7NEJBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQzt5QkFDdEQ7d0JBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyx1QkFBTSxJQUFJLEtBQUUsYUFBYSxFQUFFLFlBQVksSUFBRyxDQUFDO3FCQUN0RTtvQkFFSyxlQUFlLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztvQkFDdEMsTUFBTSxHQUFLLGVBQWUsT0FBcEIsQ0FBcUI7b0JBRS9CLFFBQVEsU0FBQSxDQUFDOzs7O29CQUVBLHFCQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUM7NEJBQzVCLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ2IsS0FBSyxDQUFDLEdBQUcsd0JBQU8sSUFBSSxLQUFFLE1BQU0sUUFBQSxJQUFHO3lCQUNoQyxDQUFDLEVBQUE7O29CQUhGLFFBQVEsR0FBRyxTQUdULENBQUM7Ozs7O29CQUdILElBQUksQ0FBQyxXQUFXLENBQUM7d0JBQ2YsS0FBSyxFQUFFLE9BQUssQ0FBQyxPQUFPO3FCQUNyQixDQUFDLENBQUM7b0JBQ0gsc0JBQU87O29CQUdULElBQUksQ0FBQyxRQUFRLEVBQUU7O3dCQUViLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDeEIsc0JBQU87cUJBQ1I7b0JBRU0scUJBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOztvQkFBNUIsSUFBSSxHQUFHLFNBQXFCLENBQUM7b0JBRTdCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTt3QkFDdEIsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNyRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7cUJBQzNCO3lCQUFNO3dCQUNMLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztxQkFDckM7b0JBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDZixFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUU7d0JBQ2YsSUFBSSxNQUFBO3FCQUNMLENBQUMsQ0FBQzs7OztvQkFFSCxJQUFJLENBQUMsV0FBVyxDQUFDO3dCQUNmLEVBQUUsRUFBRSxLQUFLO3dCQUNULElBQUksRUFBRTs0QkFDSixpQkFBaUIsRUFBRSxPQUFLLENBQUMsT0FBTzt5QkFDakM7cUJBQ0YsQ0FBQyxDQUFDOzs7OztTQUVOLENBQUM7SUFFRjtJQUNBO0lBR087O1FBRUwsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDOzs7Ozs7OyJ9', false);
    /* eslint-enable */

    var isIE11 = function () { return /Trident.*rv:11\.0/.test(navigator.userAgent); };
    var isSafari10 = function () {
        return /AppleWebKit.*Version\/10/.test(navigator.userAgent);
    };
    var isSafari11 = function () {
        return /AppleWebKit.*Version\/11/.test(navigator.userAgent);
    };
    var isSafari12_0 = function () {
        return /AppleWebKit.*Version\/12\.0/.test(navigator.userAgent);
    };

    /**
     * @ignore
     */
    var lock = new Lock();
    /**
     * @ignore
     */
    var GET_TOKEN_SILENTLY_LOCK_KEY = 'auth0.lock.getTokenSilently';
    /**
     * @ignore
     */
    var cacheLocationBuilders = {
        memory: function () { return new InMemoryCache().enclosedCache; },
        localstorage: function () { return new LocalStorageCache(); }
    };
    /**
     * @ignore
     */
    var cacheFactory = function (location) {
        return cacheLocationBuilders[location];
    };
    /**
     * @ignore
     */
    var supportWebWorker = function () {
        return !isIE11() && !isSafari10() && !isSafari11() && !isSafari12_0();
    };
    /**
     * @ignore
     */
    var getTokenIssuer = function (issuer, domainUrl) {
        if (issuer) {
            return issuer.startsWith('https://') ? issuer : "https://" + issuer + "/";
        }
        return domainUrl + "/";
    };
    /**
     * @ignore
     */
    var getCustomInitialOptions = function (options) {
        var advancedOptions = options.advancedOptions, audience = options.audience, auth0Client = options.auth0Client, authorizeTimeoutInSeconds = options.authorizeTimeoutInSeconds, cacheLocation = options.cacheLocation, client_id = options.client_id, domain = options.domain, issuer = options.issuer, leeway = options.leeway, max_age = options.max_age, redirect_uri = options.redirect_uri, scope = options.scope, useRefreshTokens = options.useRefreshTokens, customParams = __rest(options, ["advancedOptions", "audience", "auth0Client", "authorizeTimeoutInSeconds", "cacheLocation", "client_id", "domain", "issuer", "leeway", "max_age", "redirect_uri", "scope", "useRefreshTokens"]);
        return customParams;
    };
    /**
     * Auth0 SDK for Single Page Applications using [Authorization Code Grant Flow with PKCE](https://auth0.com/docs/api-auth/tutorials/authorization-code-grant-pkce).
     */
    var Auth0Client = /** @class */ (function () {
        function Auth0Client(options) {
            var _a, _b;
            this.options = options;
            typeof window !== 'undefined' && validateCrypto();
            this.cacheLocation = options.cacheLocation || CACHE_LOCATION_MEMORY;
            this.cookieStorage =
                options.legacySameSiteCookie === false
                    ? CookieStorage
                    : CookieStorageWithLegacySameSite;
            this.sessionCheckExpiryDays =
                options.sessionCheckExpiryDays || DEFAULT_SESSION_CHECK_EXPIRY_DAYS;
            if (!cacheFactory(this.cacheLocation)) {
                throw new Error("Invalid cache location \"" + this.cacheLocation + "\"");
            }
            var transactionStorage = options.useCookiesForTransactions
                ? this.cookieStorage
                : SessionStorage;
            this.cache = cacheFactory(this.cacheLocation)();
            this.scope = this.options.scope;
            this.transactionManager = new TransactionManager(transactionStorage);
            this.domainUrl = "https://" + this.options.domain;
            this.tokenIssuer = getTokenIssuer(this.options.issuer, this.domainUrl);
            this.defaultScope = getUniqueScopes('openid', ((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.advancedOptions) === null || _b === void 0 ? void 0 : _b.defaultScope) !== undefined
                ? this.options.advancedOptions.defaultScope
                : DEFAULT_SCOPE);
            // If using refresh tokens, automatically specify the `offline_access` scope.
            // Note we cannot add this to 'defaultScope' above as the scopes are used in the
            // cache keys - changing the order could invalidate the keys
            if (this.options.useRefreshTokens) {
                this.scope = getUniqueScopes(this.scope, 'offline_access');
            }
            // Don't use web workers unless using refresh tokens in memory and not IE11
            if (typeof window !== 'undefined' &&
                window.Worker &&
                this.options.useRefreshTokens &&
                this.cacheLocation === CACHE_LOCATION_MEMORY &&
                supportWebWorker()) {
                this.worker = new WorkerFactory();
            }
            this.customOptions = getCustomInitialOptions(options);
        }
        Auth0Client.prototype._url = function (path) {
            var auth0Client = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || {
                name: 'auth0-spa-js',
                version: version$1
            })));
            return "" + this.domainUrl + path + "&auth0Client=" + auth0Client;
        };
        Auth0Client.prototype._getParams = function (authorizeOptions, state, nonce, code_challenge, redirect_uri) {
            var _a = this.options, domain = _a.domain, leeway = _a.leeway, useRefreshTokens = _a.useRefreshTokens, auth0Client = _a.auth0Client, cacheLocation = _a.cacheLocation, advancedOptions = _a.advancedOptions, withoutDomain = __rest(_a, ["domain", "leeway", "useRefreshTokens", "auth0Client", "cacheLocation", "advancedOptions"]);
            return __assign(__assign(__assign({}, withoutDomain), authorizeOptions), { scope: getUniqueScopes(this.defaultScope, this.scope, authorizeOptions.scope), response_type: 'code', response_mode: 'query', state: state,
                nonce: nonce, redirect_uri: redirect_uri || this.options.redirect_uri, code_challenge: code_challenge, code_challenge_method: 'S256' });
        };
        Auth0Client.prototype._authorizeUrl = function (authorizeOptions) {
            return this._url("/authorize?" + createQueryParams(authorizeOptions));
        };
        Auth0Client.prototype._verifyIdToken = function (id_token, nonce, organizationId) {
            return verify({
                iss: this.tokenIssuer,
                aud: this.options.client_id,
                id_token: id_token,
                nonce: nonce,
                organizationId: organizationId,
                leeway: this.options.leeway,
                max_age: this._parseNumber(this.options.max_age)
            });
        };
        Auth0Client.prototype._parseNumber = function (value) {
            if (typeof value !== 'string') {
                return value;
            }
            return parseInt(value, 10) || undefined;
        };
        /**
         * ```js
         * await auth0.buildAuthorizeUrl(options);
         * ```
         *
         * Builds an `/authorize` URL for loginWithRedirect using the parameters
         * provided as arguments. Random and secure `state` and `nonce`
         * parameters will be auto-generated.
         *
         * @param options
         */
        Auth0Client.prototype.buildAuthorizeUrl = function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var redirect_uri, appState, authorizeOptions, stateIn, nonceIn, code_verifier, code_challengeBuffer, code_challenge, fragment, params, url, organizationId;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            redirect_uri = options.redirect_uri, appState = options.appState, authorizeOptions = __rest(options, ["redirect_uri", "appState"]);
                            stateIn = encode(createRandomString());
                            nonceIn = encode(createRandomString());
                            code_verifier = createRandomString();
                            return [4 /*yield*/, sha256(code_verifier)];
                        case 1:
                            code_challengeBuffer = _a.sent();
                            code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                            fragment = options.fragment ? "#" + options.fragment : '';
                            params = this._getParams(authorizeOptions, stateIn, nonceIn, code_challenge, redirect_uri);
                            url = this._authorizeUrl(params);
                            organizationId = options.organization || this.options.organization;
                            this.transactionManager.create(__assign({ nonce: nonceIn, code_verifier: code_verifier,
                                appState: appState, scope: params.scope, audience: params.audience || 'default', redirect_uri: params.redirect_uri }, (organizationId && { organizationId: organizationId })));
                            return [2 /*return*/, url + fragment];
                    }
                });
            });
        };
        /**
         * ```js
         * await auth0.loginWithPopup(options);
         * ```
         *
         * Opens a popup with the `/authorize` URL using the parameters
         * provided as arguments. Random and secure `state` and `nonce`
         * parameters will be auto-generated. If the response is successful,
         * results will be valid according to their expiration times.
         *
         * IMPORTANT: This method has to be called from an event handler
         * that was started by the user like a button click, for example,
         * otherwise the popup will be blocked in most browsers.
         *
         * @param options
         * @param config
         */
        Auth0Client.prototype.loginWithPopup = function (options, config) {
            if (options === void 0) { options = {}; }
            if (config === void 0) { config = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var authorizeOptions, stateIn, nonceIn, code_verifier, code_challengeBuffer, code_challenge, params, url, codeResult, authResult, organizationId, decodedToken, cacheEntry;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            authorizeOptions = __rest(options, []);
                            stateIn = encode(createRandomString());
                            nonceIn = encode(createRandomString());
                            code_verifier = createRandomString();
                            return [4 /*yield*/, sha256(code_verifier)];
                        case 1:
                            code_challengeBuffer = _a.sent();
                            code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                            params = this._getParams(authorizeOptions, stateIn, nonceIn, code_challenge, this.options.redirect_uri || window.location.origin);
                            url = this._authorizeUrl(__assign(__assign({}, params), { response_mode: 'web_message' }));
                            return [4 /*yield*/, runPopup(url, __assign(__assign({}, config), { timeoutInSeconds: config.timeoutInSeconds ||
                                        this.options.authorizeTimeoutInSeconds ||
                                        DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS }))];
                        case 2:
                            codeResult = _a.sent();
                            if (stateIn !== codeResult.state) {
                                throw new Error('Invalid state');
                            }
                            return [4 /*yield*/, oauthToken({
                                    audience: params.audience,
                                    scope: params.scope,
                                    baseUrl: this.domainUrl,
                                    client_id: this.options.client_id,
                                    code_verifier: code_verifier,
                                    code: codeResult.code,
                                    grant_type: 'authorization_code',
                                    redirect_uri: params.redirect_uri
                                }, this.worker)];
                        case 3:
                            authResult = _a.sent();
                            organizationId = options.organization || this.options.organization;
                            decodedToken = this._verifyIdToken(authResult.id_token, nonceIn, organizationId);
                            cacheEntry = __assign(__assign({}, authResult), { decodedToken: decodedToken, scope: params.scope, audience: params.audience || 'default', client_id: this.options.client_id });
                            this.cache.save(cacheEntry);
                            this.cookieStorage.save('auth0.is.authenticated', true, {
                                daysUntilExpire: this.sessionCheckExpiryDays
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * ```js
         * const user = await auth0.getUser();
         * ```
         *
         * Returns the user information if available (decoded
         * from the `id_token`).
         *
         * @param options
         */
        Auth0Client.prototype.getUser = function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var audience, scope, cache;
                return __generator(this, function (_a) {
                    audience = options.audience || this.options.audience || 'default';
                    scope = getUniqueScopes(this.defaultScope, this.scope, options.scope);
                    cache = this.cache.get({
                        client_id: this.options.client_id,
                        audience: audience,
                        scope: scope
                    });
                    return [2 /*return*/, cache && cache.decodedToken && cache.decodedToken.user];
                });
            });
        };
        /**
         * ```js
         * const claims = await auth0.getIdTokenClaims();
         * ```
         *
         * Returns all claims from the id_token if available.
         *
         * @param options
         */
        Auth0Client.prototype.getIdTokenClaims = function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var audience, scope, cache;
                return __generator(this, function (_a) {
                    audience = options.audience || this.options.audience || 'default';
                    scope = getUniqueScopes(this.defaultScope, this.scope, options.scope);
                    cache = this.cache.get({
                        client_id: this.options.client_id,
                        audience: audience,
                        scope: scope
                    });
                    return [2 /*return*/, cache && cache.decodedToken && cache.decodedToken.claims];
                });
            });
        };
        /**
         * ```js
         * await auth0.loginWithRedirect(options);
         * ```
         *
         * Performs a redirect to `/authorize` using the parameters
         * provided as arguments. Random and secure `state` and `nonce`
         * parameters will be auto-generated.
         *
         * @param options
         */
        Auth0Client.prototype.loginWithRedirect = function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.buildAuthorizeUrl(options)];
                        case 1:
                            url = _a.sent();
                            window.location.assign(url);
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * After the browser redirects back to the callback page,
         * call `handleRedirectCallback` to handle success and error
         * responses from Auth0. If the response is successful, results
         * will be valid according to their expiration times.
         */
        Auth0Client.prototype.handleRedirectCallback = function (url) {
            if (url === void 0) { url = window.location.href; }
            return __awaiter(this, void 0, void 0, function () {
                var queryStringFragments, _a, state, code, error, error_description, transaction, tokenOptions, authResult, decodedToken, cacheEntry;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            queryStringFragments = url.split('?').slice(1);
                            if (queryStringFragments.length === 0) {
                                throw new Error('There are no query params available for parsing.');
                            }
                            _a = parseQueryResult(queryStringFragments.join('')), state = _a.state, code = _a.code, error = _a.error, error_description = _a.error_description;
                            transaction = this.transactionManager.get();
                            // Transaction should have a `code_verifier` to do PKCE and a `nonce` for CSRF protection
                            if (!transaction || !transaction.code_verifier || !transaction.nonce) {
                                throw new Error('Invalid state');
                            }
                            this.transactionManager.remove();
                            if (error) {
                                throw new AuthenticationError(error, error_description, state, transaction.appState);
                            }
                            tokenOptions = {
                                audience: transaction.audience,
                                scope: transaction.scope,
                                baseUrl: this.domainUrl,
                                client_id: this.options.client_id,
                                code_verifier: transaction.code_verifier,
                                grant_type: 'authorization_code',
                                code: code
                            };
                            // some old versions of the SDK might not have added redirect_uri to the
                            // transaction, we dont want the key to be set to undefined.
                            if (undefined !== transaction.redirect_uri) {
                                tokenOptions.redirect_uri = transaction.redirect_uri;
                            }
                            return [4 /*yield*/, oauthToken(tokenOptions, this.worker)];
                        case 1:
                            authResult = _b.sent();
                            decodedToken = this._verifyIdToken(authResult.id_token, transaction.nonce, transaction.organizationId);
                            cacheEntry = __assign(__assign({}, authResult), { decodedToken: decodedToken, audience: transaction.audience, scope: transaction.scope, client_id: this.options.client_id });
                            this.cache.save(cacheEntry);
                            this.cookieStorage.save('auth0.is.authenticated', true, {
                                daysUntilExpire: this.sessionCheckExpiryDays
                            });
                            return [2 /*return*/, {
                                    appState: transaction.appState
                                }];
                    }
                });
            });
        };
        /**
         * ```js
         * await auth0.checkSession();
         * ```
         *
         * Check if the user is logged in using `getTokenSilently`. The difference
         * with `getTokenSilently` is that this doesn't return a token, but it will
         * pre-fill the token cache.
         *
         * It should be used for silently logging in the user when you instantiate the
         * `Auth0Client` constructor. You should not need this if you are using the
         * `createAuth0Client` factory.
         *
         * @param options
         */
        Auth0Client.prototype.checkSession = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.cookieStorage.get('auth0.is.authenticated')) {
                                return [2 /*return*/];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.getTokenSilently(options)];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            if (!RECOVERABLE_ERRORS.includes(error_1.error)) {
                                throw error_1;
                            }
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * ```js
         * const token = await auth0.getTokenSilently(options);
         * ```
         *
         * If there's a valid token stored, return it. Otherwise, opens an
         * iframe with the `/authorize` URL using the parameters provided
         * as arguments. Random and secure `state` and `nonce` parameters
         * will be auto-generated. If the response is successful, results
         * will be valid according to their expiration times.
         *
         * If refresh tokens are used, the token endpoint is called directly with the
         * 'refresh_token' grant. If no refresh token is available to make this call,
         * the SDK falls back to using an iframe to the '/authorize' URL.
         *
         * This method may use a web worker to perform the token call if the in-memory
         * cache is used.
         *
         * If an `audience` value is given to this function, the SDK always falls
         * back to using an iframe to make the token exchange.
         *
         * Note that in all cases, falling back to an iframe requires access to
         * the `auth0` cookie.
         *
         * @param options
         */
        Auth0Client.prototype.getTokenSilently = function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var _a, ignoreCache, getTokenOptions, getAccessTokenFromCache, accessToken, accessToken, authResult, _b, e_1;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = __assign(__assign({ audience: this.options.audience, ignoreCache: false }, options), { scope: getUniqueScopes(this.defaultScope, this.scope, options.scope) }), ignoreCache = _a.ignoreCache, getTokenOptions = __rest(_a, ["ignoreCache"]);
                            getAccessTokenFromCache = function () {
                                var cache = _this.cache.get({
                                    scope: getTokenOptions.scope,
                                    audience: getTokenOptions.audience || 'default',
                                    client_id: _this.options.client_id
                                }, 60 // get a new token if within 60 seconds of expiring
                                );
                                return cache && cache.access_token;
                            };
                            // Check the cache before acquiring the lock to avoid the latency of
                            // `lock.acquireLock` when the cache is populated.
                            if (!ignoreCache) {
                                accessToken = getAccessTokenFromCache();
                                if (accessToken) {
                                    return [2 /*return*/, accessToken];
                                }
                            }
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 7, 8, 10]);
                            return [4 /*yield*/, lock.acquireLock(GET_TOKEN_SILENTLY_LOCK_KEY, 5000)];
                        case 2:
                            _c.sent();
                            // Check the cache a second time, because it may have been populated
                            // by a previous call while this call was waiting to acquire the lock.
                            if (!ignoreCache) {
                                accessToken = getAccessTokenFromCache();
                                if (accessToken) {
                                    return [2 /*return*/, accessToken];
                                }
                            }
                            if (!this.options.useRefreshTokens) return [3 /*break*/, 4];
                            return [4 /*yield*/, this._getTokenUsingRefreshToken(getTokenOptions)];
                        case 3:
                            _b = _c.sent();
                            return [3 /*break*/, 6];
                        case 4: return [4 /*yield*/, this._getTokenFromIFrame(getTokenOptions)];
                        case 5:
                            _b = _c.sent();
                            _c.label = 6;
                        case 6:
                            authResult = _b;
                            this.cache.save(__assign({ client_id: this.options.client_id }, authResult));
                            this.cookieStorage.save('auth0.is.authenticated', true, {
                                daysUntilExpire: this.sessionCheckExpiryDays
                            });
                            return [2 /*return*/, authResult.access_token];
                        case 7:
                            e_1 = _c.sent();
                            throw e_1;
                        case 8: return [4 /*yield*/, lock.releaseLock(GET_TOKEN_SILENTLY_LOCK_KEY)];
                        case 9:
                            _c.sent();
                            return [7 /*endfinally*/];
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * ```js
         * const token = await auth0.getTokenWithPopup(options);
         * ```
         * Opens a popup with the `/authorize` URL using the parameters
         * provided as arguments. Random and secure `state` and `nonce`
         * parameters will be auto-generated. If the response is successful,
         * results will be valid according to their expiration times.
         *
         * @param options
         * @param config
         */
        Auth0Client.prototype.getTokenWithPopup = function (options, config) {
            if (options === void 0) { options = {}; }
            if (config === void 0) { config = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var cache;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options.audience = options.audience || this.options.audience;
                            options.scope = getUniqueScopes(this.defaultScope, this.scope, options.scope);
                            config = __assign(__assign({}, DEFAULT_POPUP_CONFIG_OPTIONS), config);
                            return [4 /*yield*/, this.loginWithPopup(options, config)];
                        case 1:
                            _a.sent();
                            cache = this.cache.get({
                                scope: options.scope,
                                audience: options.audience || 'default',
                                client_id: this.options.client_id
                            });
                            return [2 /*return*/, cache.access_token];
                    }
                });
            });
        };
        /**
         * ```js
         * const isAuthenticated = await auth0.isAuthenticated();
         * ```
         *
         * Returns `true` if there's valid information stored,
         * otherwise returns `false`.
         *
         */
        Auth0Client.prototype.isAuthenticated = function () {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getUser()];
                        case 1:
                            user = _a.sent();
                            return [2 /*return*/, !!user];
                    }
                });
            });
        };
        /**
         * ```js
         * await auth0.buildLogoutUrl(options);
         * ```
         *
         * Builds a URL to the logout endpoint using the parameters provided as arguments.
         * @param options
         */
        Auth0Client.prototype.buildLogoutUrl = function (options) {
            if (options === void 0) { options = {}; }
            if (options.client_id !== null) {
                options.client_id = options.client_id || this.options.client_id;
            }
            else {
                delete options.client_id;
            }
            var federated = options.federated, logoutOptions = __rest(options, ["federated"]);
            var federatedQuery = federated ? "&federated" : '';
            var url = this._url("/v2/logout?" + createQueryParams(logoutOptions));
            return url + federatedQuery;
        };
        /**
         * ```js
         * auth0.logout();
         * ```
         *
         * Clears the application session and performs a redirect to `/v2/logout`, using
         * the parameters provided as arguments, to clear the Auth0 session.
         * If the `federated` option is specified it also clears the Identity Provider session.
         * If the `localOnly` option is specified, it only clears the application session.
         * It is invalid to set both the `federated` and `localOnly` options to `true`,
         * and an error will be thrown if you do.
         * [Read more about how Logout works at Auth0](https://auth0.com/docs/logout).
         *
         * @param options
         */
        Auth0Client.prototype.logout = function (options) {
            if (options === void 0) { options = {}; }
            var localOnly = options.localOnly, logoutOptions = __rest(options, ["localOnly"]);
            if (localOnly && logoutOptions.federated) {
                throw new Error('It is invalid to set both the `federated` and `localOnly` options to `true`');
            }
            this.cache.clear();
            this.cookieStorage.remove('auth0.is.authenticated');
            if (localOnly) {
                return;
            }
            var url = this.buildLogoutUrl(logoutOptions);
            window.location.assign(url);
        };
        Auth0Client.prototype._getTokenFromIFrame = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var stateIn, nonceIn, code_verifier, code_challengeBuffer, code_challenge, params, url, timeout, codeResult, scope, audience, redirect_uri, ignoreCache, timeoutInSeconds, customOptions, tokenResult, decodedToken;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            stateIn = encode(createRandomString());
                            nonceIn = encode(createRandomString());
                            code_verifier = createRandomString();
                            return [4 /*yield*/, sha256(code_verifier)];
                        case 1:
                            code_challengeBuffer = _a.sent();
                            code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                            params = this._getParams(options, stateIn, nonceIn, code_challenge, options.redirect_uri ||
                                this.options.redirect_uri ||
                                window.location.origin);
                            url = this._authorizeUrl(__assign(__assign({}, params), { prompt: 'none', response_mode: 'web_message' }));
                            timeout = options.timeoutInSeconds || this.options.authorizeTimeoutInSeconds;
                            return [4 /*yield*/, runIframe(url, this.domainUrl, timeout)];
                        case 2:
                            codeResult = _a.sent();
                            if (stateIn !== codeResult.state) {
                                throw new Error('Invalid state');
                            }
                            scope = options.scope, audience = options.audience, redirect_uri = options.redirect_uri, ignoreCache = options.ignoreCache, timeoutInSeconds = options.timeoutInSeconds, customOptions = __rest(options, ["scope", "audience", "redirect_uri", "ignoreCache", "timeoutInSeconds"]);
                            return [4 /*yield*/, oauthToken(__assign(__assign(__assign({}, this.customOptions), customOptions), { scope: scope,
                                    audience: audience, baseUrl: this.domainUrl, client_id: this.options.client_id, code_verifier: code_verifier, code: codeResult.code, grant_type: 'authorization_code', redirect_uri: params.redirect_uri }), this.worker)];
                        case 3:
                            tokenResult = _a.sent();
                            decodedToken = this._verifyIdToken(tokenResult.id_token, nonceIn);
                            return [2 /*return*/, __assign(__assign({}, tokenResult), { decodedToken: decodedToken, scope: params.scope, audience: params.audience || 'default' })];
                    }
                });
            });
        };
        Auth0Client.prototype._getTokenUsingRefreshToken = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var cache, redirect_uri, tokenResult, scope, audience, ignoreCache, timeoutInSeconds, customOptions, timeout, e_2, decodedToken;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options.scope = getUniqueScopes(this.defaultScope, this.options.scope, options.scope);
                            cache = this.cache.get({
                                scope: options.scope,
                                audience: options.audience || 'default',
                                client_id: this.options.client_id
                            });
                            if (!((!cache || !cache.refresh_token) && !this.worker)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this._getTokenFromIFrame(options)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            redirect_uri = options.redirect_uri ||
                                this.options.redirect_uri ||
                                window.location.origin;
                            scope = options.scope, audience = options.audience, ignoreCache = options.ignoreCache, timeoutInSeconds = options.timeoutInSeconds, customOptions = __rest(options, ["scope", "audience", "ignoreCache", "timeoutInSeconds"]);
                            timeout = typeof options.timeoutInSeconds === 'number'
                                ? options.timeoutInSeconds * 1000
                                : null;
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 8]);
                            return [4 /*yield*/, oauthToken(__assign(__assign(__assign(__assign({}, this.customOptions), customOptions), { audience: audience,
                                    scope: scope, baseUrl: this.domainUrl, client_id: this.options.client_id, grant_type: 'refresh_token', refresh_token: cache && cache.refresh_token, redirect_uri: redirect_uri }), (timeout && { timeout: timeout })), this.worker)];
                        case 4:
                            tokenResult = _a.sent();
                            return [3 /*break*/, 8];
                        case 5:
                            e_2 = _a.sent();
                            if (!(e_2.message === MISSING_REFRESH_TOKEN_ERROR_MESSAGE)) return [3 /*break*/, 7];
                            return [4 /*yield*/, this._getTokenFromIFrame(options)];
                        case 6: return [2 /*return*/, _a.sent()];
                        case 7: throw e_2;
                        case 8:
                            decodedToken = this._verifyIdToken(tokenResult.id_token);
                            return [2 /*return*/, __assign(__assign({}, tokenResult), { decodedToken: decodedToken, scope: options.scope, audience: options.audience || 'default' })];
                    }
                });
            });
        };
        return Auth0Client;
    }());

    function createAuth0Client(options) {
        return __awaiter(this, void 0, void 0, function () {
            var auth0;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        auth0 = new Auth0Client(options);
                        return [4 /*yield*/, auth0.checkSession()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, auth0];
                }
            });
        });
    }

    /**
     * @ignore
     */
    var wrapper = createAuth0Client;
    wrapper.Auth0Client = Auth0Client;
    wrapper.createAuth0Client = createAuth0Client;

    return wrapper;

})));
('Auth0Client' in this) && this.console && this.console.warn && this.console.warn('Auth0Client already declared on the global namespace');
this && this.createAuth0Client && (this.Auth0Client = this.Auth0Client || this.createAuth0Client.Auth0Client);
//# sourceMappingURL=auth0-spa-js.development.js.map
