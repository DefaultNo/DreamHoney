(() => {
    var __webpack_modules__ = {
        529: module => {
            /*! choices.js v10.1.0 | © 2022 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
            (function webpackUniversalModuleDefinition(root, factory) {
                if (true) module.exports = factory();
            })(window, (function() {
                return function() {
                    "use strict";
                    var __webpack_modules__ = {
                        282: function(__unused_webpack_module, exports, __nested_webpack_require_632__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = void 0;
                            var constants_1 = __nested_webpack_require_632__(883);
                            var addChoice = function(_a) {
                                var value = _a.value, label = _a.label, id = _a.id, groupId = _a.groupId, disabled = _a.disabled, elementId = _a.elementId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_CHOICE,
                                    value,
                                    label,
                                    id,
                                    groupId,
                                    disabled,
                                    elementId,
                                    customProperties,
                                    placeholder,
                                    keyCode
                                };
                            };
                            exports.addChoice = addChoice;
                            var filterChoices = function(results) {
                                return {
                                    type: constants_1.ACTION_TYPES.FILTER_CHOICES,
                                    results
                                };
                            };
                            exports.filterChoices = filterChoices;
                            var activateChoices = function(active) {
                                if (void 0 === active) active = true;
                                return {
                                    type: constants_1.ACTION_TYPES.ACTIVATE_CHOICES,
                                    active
                                };
                            };
                            exports.activateChoices = activateChoices;
                            var clearChoices = function() {
                                return {
                                    type: constants_1.ACTION_TYPES.CLEAR_CHOICES
                                };
                            };
                            exports.clearChoices = clearChoices;
                        },
                        783: function(__unused_webpack_module, exports, __nested_webpack_require_2094__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.addGroup = void 0;
                            var constants_1 = __nested_webpack_require_2094__(883);
                            var addGroup = function(_a) {
                                var value = _a.value, id = _a.id, active = _a.active, disabled = _a.disabled;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_GROUP,
                                    value,
                                    id,
                                    active,
                                    disabled
                                };
                            };
                            exports.addGroup = addGroup;
                        },
                        464: function(__unused_webpack_module, exports, __nested_webpack_require_2630__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.highlightItem = exports.removeItem = exports.addItem = void 0;
                            var constants_1 = __nested_webpack_require_2630__(883);
                            var addItem = function(_a) {
                                var value = _a.value, label = _a.label, id = _a.id, choiceId = _a.choiceId, groupId = _a.groupId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_ITEM,
                                    value,
                                    label,
                                    id,
                                    choiceId,
                                    groupId,
                                    customProperties,
                                    placeholder,
                                    keyCode
                                };
                            };
                            exports.addItem = addItem;
                            var removeItem = function(id, choiceId) {
                                return {
                                    type: constants_1.ACTION_TYPES.REMOVE_ITEM,
                                    id,
                                    choiceId
                                };
                            };
                            exports.removeItem = removeItem;
                            var highlightItem = function(id, highlighted) {
                                return {
                                    type: constants_1.ACTION_TYPES.HIGHLIGHT_ITEM,
                                    id,
                                    highlighted
                                };
                            };
                            exports.highlightItem = highlightItem;
                        },
                        137: function(__unused_webpack_module, exports, __nested_webpack_require_3835__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.setIsLoading = exports.resetTo = exports.clearAll = void 0;
                            var constants_1 = __nested_webpack_require_3835__(883);
                            var clearAll = function() {
                                return {
                                    type: constants_1.ACTION_TYPES.CLEAR_ALL
                                };
                            };
                            exports.clearAll = clearAll;
                            var resetTo = function(state) {
                                return {
                                    type: constants_1.ACTION_TYPES.RESET_TO,
                                    state
                                };
                            };
                            exports.resetTo = resetTo;
                            var setIsLoading = function(isLoading) {
                                return {
                                    type: constants_1.ACTION_TYPES.SET_IS_LOADING,
                                    isLoading
                                };
                            };
                            exports.setIsLoading = setIsLoading;
                        },
                        373: function(__unused_webpack_module, exports, __nested_webpack_require_4557__) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || 2 === arguments.length) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var deepmerge_1 = __importDefault(__nested_webpack_require_4557__(996));
                            var fuse_js_1 = __importDefault(__nested_webpack_require_4557__(221));
                            var choices_1 = __nested_webpack_require_4557__(282);
                            var groups_1 = __nested_webpack_require_4557__(783);
                            var items_1 = __nested_webpack_require_4557__(464);
                            var misc_1 = __nested_webpack_require_4557__(137);
                            var components_1 = __nested_webpack_require_4557__(520);
                            var constants_1 = __nested_webpack_require_4557__(883);
                            var defaults_1 = __nested_webpack_require_4557__(789);
                            var utils_1 = __nested_webpack_require_4557__(799);
                            var reducers_1 = __nested_webpack_require_4557__(655);
                            var store_1 = __importDefault(__nested_webpack_require_4557__(744));
                            var templates_1 = __importDefault(__nested_webpack_require_4557__(686));
                            var IS_IE11 = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                            var USER_DEFAULTS = {};
                            var Choices = function() {
                                function Choices(element, userConfig) {
                                    var _this = this;
                                    if (void 0 === element) element = "[data-choice]";
                                    if (void 0 === userConfig) userConfig = {};
                                    if (void 0 === userConfig.allowHTML) console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.");
                                    this.config = deepmerge_1.default.all([ defaults_1.DEFAULT_CONFIG, Choices.defaults.options, userConfig ], {
                                        arrayMerge: function(_, sourceArray) {
                                            return __spreadArray([], sourceArray, true);
                                        }
                                    });
                                    var invalidConfigOptions = (0, utils_1.diff)(this.config, defaults_1.DEFAULT_CONFIG);
                                    if (invalidConfigOptions.length) console.warn("Unknown config option(s) passed", invalidConfigOptions.join(", "));
                                    var passedElement = "string" === typeof element ? document.querySelector(element) : element;
                                    if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
                                    this._isTextElement = passedElement.type === constants_1.TEXT_TYPE;
                                    this._isSelectOneElement = passedElement.type === constants_1.SELECT_ONE_TYPE;
                                    this._isSelectMultipleElement = passedElement.type === constants_1.SELECT_MULTIPLE_TYPE;
                                    this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
                                    this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
                                    if (![ "auto", "always" ].includes("".concat(this.config.renderSelectedChoices))) this.config.renderSelectedChoices = "auto";
                                    if (userConfig.addItemFilter && "function" !== typeof userConfig.addItemFilter) {
                                        var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
                                        this.config.addItemFilter = re.test.bind(re);
                                    }
                                    if (this._isTextElement) this.passedElement = new components_1.WrappedInput({
                                        element: passedElement,
                                        classNames: this.config.classNames,
                                        delimiter: this.config.delimiter
                                    }); else this.passedElement = new components_1.WrappedSelect({
                                        element: passedElement,
                                        classNames: this.config.classNames,
                                        template: function(data) {
                                            return _this._templates.option(data);
                                        }
                                    });
                                    this.initialised = false;
                                    this._store = new store_1.default;
                                    this._initialState = reducers_1.defaultState;
                                    this._currentState = reducers_1.defaultState;
                                    this._prevState = reducers_1.defaultState;
                                    this._currentValue = "";
                                    this._canSearch = !!this.config.searchEnabled;
                                    this._isScrollingOnIe = false;
                                    this._highlightPosition = 0;
                                    this._wasTap = true;
                                    this._placeholderValue = this._generatePlaceholderValue();
                                    this._baseId = (0, utils_1.generateId)(this.passedElement.element, "choices-");
                                    this._direction = this.passedElement.dir;
                                    if (!this._direction) {
                                        var elementDirection = window.getComputedStyle(this.passedElement.element).direction;
                                        var documentDirection = window.getComputedStyle(document.documentElement).direction;
                                        if (elementDirection !== documentDirection) this._direction = elementDirection;
                                    }
                                    this._idNames = {
                                        itemChoice: "item-choice"
                                    };
                                    if (this._isSelectElement) {
                                        this._presetGroups = this.passedElement.optionGroups;
                                        this._presetOptions = this.passedElement.options;
                                    }
                                    this._presetChoices = this.config.choices;
                                    this._presetItems = this.config.items;
                                    if (this.passedElement.value && this._isTextElement) {
                                        var splitValues = this.passedElement.value.split(this.config.delimiter);
                                        this._presetItems = this._presetItems.concat(splitValues);
                                    }
                                    if (this.passedElement.options) this.passedElement.options.forEach((function(option) {
                                        _this._presetChoices.push({
                                            value: option.value,
                                            label: option.innerHTML,
                                            selected: !!option.selected,
                                            disabled: option.disabled || option.parentNode.disabled,
                                            placeholder: "" === option.value || option.hasAttribute("placeholder"),
                                            customProperties: option.dataset["custom-properties"]
                                        });
                                    }));
                                    this._render = this._render.bind(this);
                                    this._onFocus = this._onFocus.bind(this);
                                    this._onBlur = this._onBlur.bind(this);
                                    this._onKeyUp = this._onKeyUp.bind(this);
                                    this._onKeyDown = this._onKeyDown.bind(this);
                                    this._onClick = this._onClick.bind(this);
                                    this._onTouchMove = this._onTouchMove.bind(this);
                                    this._onTouchEnd = this._onTouchEnd.bind(this);
                                    this._onMouseDown = this._onMouseDown.bind(this);
                                    this._onMouseOver = this._onMouseOver.bind(this);
                                    this._onFormReset = this._onFormReset.bind(this);
                                    this._onSelectKey = this._onSelectKey.bind(this);
                                    this._onEnterKey = this._onEnterKey.bind(this);
                                    this._onEscapeKey = this._onEscapeKey.bind(this);
                                    this._onDirectionKey = this._onDirectionKey.bind(this);
                                    this._onDeleteKey = this._onDeleteKey.bind(this);
                                    if (this.passedElement.isActive) {
                                        if (!this.config.silent) console.warn("Trying to initialise Choices on element already initialised", {
                                            element
                                        });
                                        this.initialised = true;
                                        return;
                                    }
                                    this.init();
                                }
                                Object.defineProperty(Choices, "defaults", {
                                    get: function() {
                                        return Object.preventExtensions({
                                            get options() {
                                                return USER_DEFAULTS;
                                            },
                                            get templates() {
                                                return templates_1.default;
                                            }
                                        });
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Choices.prototype.init = function() {
                                    if (this.initialised) return;
                                    this._createTemplates();
                                    this._createElements();
                                    this._createStructure();
                                    this._store.subscribe(this._render);
                                    this._render();
                                    this._addEventListeners();
                                    var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute("disabled");
                                    if (shouldDisable) this.disable();
                                    this.initialised = true;
                                    var callbackOnInit = this.config.callbackOnInit;
                                    if (callbackOnInit && "function" === typeof callbackOnInit) callbackOnInit.call(this);
                                };
                                Choices.prototype.destroy = function() {
                                    if (!this.initialised) return;
                                    this._removeEventListeners();
                                    this.passedElement.reveal();
                                    this.containerOuter.unwrap(this.passedElement.element);
                                    this.clearStore();
                                    if (this._isSelectElement) this.passedElement.options = this._presetOptions;
                                    this._templates = templates_1.default;
                                    this.initialised = false;
                                };
                                Choices.prototype.enable = function() {
                                    if (this.passedElement.isDisabled) this.passedElement.enable();
                                    if (this.containerOuter.isDisabled) {
                                        this._addEventListeners();
                                        this.input.enable();
                                        this.containerOuter.enable();
                                    }
                                    return this;
                                };
                                Choices.prototype.disable = function() {
                                    if (!this.passedElement.isDisabled) this.passedElement.disable();
                                    if (!this.containerOuter.isDisabled) {
                                        this._removeEventListeners();
                                        this.input.disable();
                                        this.containerOuter.disable();
                                    }
                                    return this;
                                };
                                Choices.prototype.highlightItem = function(item, runEvent) {
                                    if (void 0 === runEvent) runEvent = true;
                                    if (!item || !item.id) return this;
                                    var id = item.id, _a = item.groupId, groupId = void 0 === _a ? -1 : _a, _b = item.value, value = void 0 === _b ? "" : _b, _c = item.label, label = void 0 === _c ? "" : _c;
                                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    this._store.dispatch((0, items_1.highlightItem)(id, true));
                                    if (runEvent) this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                                        id,
                                        value,
                                        label,
                                        groupValue: group && group.value ? group.value : null
                                    });
                                    return this;
                                };
                                Choices.prototype.unhighlightItem = function(item) {
                                    if (!item || !item.id) return this;
                                    var id = item.id, _a = item.groupId, groupId = void 0 === _a ? -1 : _a, _b = item.value, value = void 0 === _b ? "" : _b, _c = item.label, label = void 0 === _c ? "" : _c;
                                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    this._store.dispatch((0, items_1.highlightItem)(id, false));
                                    this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                                        id,
                                        value,
                                        label,
                                        groupValue: group && group.value ? group.value : null
                                    });
                                    return this;
                                };
                                Choices.prototype.highlightAll = function() {
                                    var _this = this;
                                    this._store.items.forEach((function(item) {
                                        return _this.highlightItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.unhighlightAll = function() {
                                    var _this = this;
                                    this._store.items.forEach((function(item) {
                                        return _this.unhighlightItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.removeActiveItemsByValue = function(value) {
                                    var _this = this;
                                    this._store.activeItems.filter((function(item) {
                                        return item.value === value;
                                    })).forEach((function(item) {
                                        return _this._removeItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.removeActiveItems = function(excludedId) {
                                    var _this = this;
                                    this._store.activeItems.filter((function(_a) {
                                        var id = _a.id;
                                        return id !== excludedId;
                                    })).forEach((function(item) {
                                        return _this._removeItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.removeHighlightedItems = function(runEvent) {
                                    var _this = this;
                                    if (void 0 === runEvent) runEvent = false;
                                    this._store.highlightedActiveItems.forEach((function(item) {
                                        _this._removeItem(item);
                                        if (runEvent) _this._triggerChange(item.value);
                                    }));
                                    return this;
                                };
                                Choices.prototype.showDropdown = function(preventInputFocus) {
                                    var _this = this;
                                    if (this.dropdown.isActive) return this;
                                    requestAnimationFrame((function() {
                                        _this.dropdown.show();
                                        _this.containerOuter.open(_this.dropdown.distanceFromTopWindow);
                                        if (!preventInputFocus && _this._canSearch) _this.input.focus();
                                        _this.passedElement.triggerEvent(constants_1.EVENTS.showDropdown, {});
                                    }));
                                    return this;
                                };
                                Choices.prototype.hideDropdown = function(preventInputBlur) {
                                    var _this = this;
                                    if (!this.dropdown.isActive) return this;
                                    requestAnimationFrame((function() {
                                        _this.dropdown.hide();
                                        _this.containerOuter.close();
                                        if (!preventInputBlur && _this._canSearch) {
                                            _this.input.removeActiveDescendant();
                                            _this.input.blur();
                                        }
                                        _this.passedElement.triggerEvent(constants_1.EVENTS.hideDropdown, {});
                                    }));
                                    return this;
                                };
                                Choices.prototype.getValue = function(valueOnly) {
                                    if (void 0 === valueOnly) valueOnly = false;
                                    var values = this._store.activeItems.reduce((function(selectedItems, item) {
                                        var itemValue = valueOnly ? item.value : item;
                                        selectedItems.push(itemValue);
                                        return selectedItems;
                                    }), []);
                                    return this._isSelectOneElement ? values[0] : values;
                                };
                                Choices.prototype.setValue = function(items) {
                                    var _this = this;
                                    if (!this.initialised) return this;
                                    items.forEach((function(value) {
                                        return _this._setChoiceOrItem(value);
                                    }));
                                    return this;
                                };
                                Choices.prototype.setChoiceByValue = function(value) {
                                    var _this = this;
                                    if (!this.initialised || this._isTextElement) return this;
                                    var choiceValue = Array.isArray(value) ? value : [ value ];
                                    choiceValue.forEach((function(val) {
                                        return _this._findAndSelectChoiceByValue(val);
                                    }));
                                    return this;
                                };
                                Choices.prototype.setChoices = function(choicesArrayOrFetcher, value, label, replaceChoices) {
                                    var _this = this;
                                    if (void 0 === choicesArrayOrFetcher) choicesArrayOrFetcher = [];
                                    if (void 0 === value) value = "value";
                                    if (void 0 === label) label = "label";
                                    if (void 0 === replaceChoices) replaceChoices = false;
                                    if (!this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                                    if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
                                    if ("string" !== typeof value || !value) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                                    if (replaceChoices) this.clearChoices();
                                    if ("function" === typeof choicesArrayOrFetcher) {
                                        var fetcher_1 = choicesArrayOrFetcher(this);
                                        if ("function" === typeof Promise && fetcher_1 instanceof Promise) return new Promise((function(resolve) {
                                            return requestAnimationFrame(resolve);
                                        })).then((function() {
                                            return _this._handleLoadingState(true);
                                        })).then((function() {
                                            return fetcher_1;
                                        })).then((function(data) {
                                            return _this.setChoices(data, value, label, replaceChoices);
                                        })).catch((function(err) {
                                            if (!_this.config.silent) console.error(err);
                                        })).then((function() {
                                            return _this._handleLoadingState(false);
                                        })).then((function() {
                                            return _this;
                                        }));
                                        if (!Array.isArray(fetcher_1)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
                                        return this.setChoices(fetcher_1, value, label, false);
                                    }
                                    if (!Array.isArray(choicesArrayOrFetcher)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                                    this.containerOuter.removeLoadingState();
                                    this._startLoading();
                                    choicesArrayOrFetcher.forEach((function(groupOrChoice) {
                                        if (groupOrChoice.choices) _this._addGroup({
                                            id: groupOrChoice.id ? parseInt("".concat(groupOrChoice.id), 10) : null,
                                            group: groupOrChoice,
                                            valueKey: value,
                                            labelKey: label
                                        }); else {
                                            var choice = groupOrChoice;
                                            _this._addChoice({
                                                value: choice[value],
                                                label: choice[label],
                                                isSelected: !!choice.selected,
                                                isDisabled: !!choice.disabled,
                                                placeholder: !!choice.placeholder,
                                                customProperties: choice.customProperties
                                            });
                                        }
                                    }));
                                    this._stopLoading();
                                    return this;
                                };
                                Choices.prototype.clearChoices = function() {
                                    this._store.dispatch((0, choices_1.clearChoices)());
                                    return this;
                                };
                                Choices.prototype.clearStore = function() {
                                    this._store.dispatch((0, misc_1.clearAll)());
                                    return this;
                                };
                                Choices.prototype.clearInput = function() {
                                    var shouldSetInputWidth = !this._isSelectOneElement;
                                    this.input.clear(shouldSetInputWidth);
                                    if (!this._isTextElement && this._canSearch) {
                                        this._isSearching = false;
                                        this._store.dispatch((0, choices_1.activateChoices)(true));
                                    }
                                    return this;
                                };
                                Choices.prototype._render = function() {
                                    if (this._store.isLoading()) return;
                                    this._currentState = this._store.state;
                                    var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
                                    var shouldRenderChoices = this._isSelectElement;
                                    var shouldRenderItems = this._currentState.items !== this._prevState.items;
                                    if (!stateChanged) return;
                                    if (shouldRenderChoices) this._renderChoices();
                                    if (shouldRenderItems) this._renderItems();
                                    this._prevState = this._currentState;
                                };
                                Choices.prototype._renderChoices = function() {
                                    var _this = this;
                                    var _a = this._store, activeGroups = _a.activeGroups, activeChoices = _a.activeChoices;
                                    var choiceListFragment = document.createDocumentFragment();
                                    this.choiceList.clear();
                                    if (this.config.resetScrollPosition) requestAnimationFrame((function() {
                                        return _this.choiceList.scrollToTop();
                                    }));
                                    if (activeGroups.length >= 1 && !this._isSearching) {
                                        var activePlaceholders = activeChoices.filter((function(activeChoice) {
                                            return true === activeChoice.placeholder && -1 === activeChoice.groupId;
                                        }));
                                        if (activePlaceholders.length >= 1) choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
                                        choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
                                    } else if (activeChoices.length >= 1) choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
                                    if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
                                        var activeItems = this._store.activeItems;
                                        var canAddItem = this._canAddItem(activeItems, this.input.value);
                                        if (canAddItem.response) {
                                            this.choiceList.append(choiceListFragment);
                                            this._highlightChoice();
                                        } else {
                                            var notice = this._getTemplate("notice", canAddItem.notice);
                                            this.choiceList.append(notice);
                                        }
                                    } else {
                                        var dropdownItem = void 0;
                                        notice = void 0;
                                        if (this._isSearching) {
                                            notice = "function" === typeof this.config.noResultsText ? this.config.noResultsText() : this.config.noResultsText;
                                            dropdownItem = this._getTemplate("notice", notice, "no-results");
                                        } else {
                                            notice = "function" === typeof this.config.noChoicesText ? this.config.noChoicesText() : this.config.noChoicesText;
                                            dropdownItem = this._getTemplate("notice", notice, "no-choices");
                                        }
                                        this.choiceList.append(dropdownItem);
                                    }
                                };
                                Choices.prototype._renderItems = function() {
                                    var activeItems = this._store.activeItems || [];
                                    this.itemList.clear();
                                    var itemListFragment = this._createItemsFragment(activeItems);
                                    if (itemListFragment.childNodes) this.itemList.append(itemListFragment);
                                };
                                Choices.prototype._createGroupsFragment = function(groups, choices, fragment) {
                                    var _this = this;
                                    if (void 0 === fragment) fragment = document.createDocumentFragment();
                                    var getGroupChoices = function(group) {
                                        return choices.filter((function(choice) {
                                            if (_this._isSelectOneElement) return choice.groupId === group.id;
                                            return choice.groupId === group.id && ("always" === _this.config.renderSelectedChoices || !choice.selected);
                                        }));
                                    };
                                    if (this.config.shouldSort) groups.sort(this.config.sorter);
                                    groups.forEach((function(group) {
                                        var groupChoices = getGroupChoices(group);
                                        if (groupChoices.length >= 1) {
                                            var dropdownGroup = _this._getTemplate("choiceGroup", group);
                                            fragment.appendChild(dropdownGroup);
                                            _this._createChoicesFragment(groupChoices, fragment, true);
                                        }
                                    }));
                                    return fragment;
                                };
                                Choices.prototype._createChoicesFragment = function(choices, fragment, withinGroup) {
                                    var _this = this;
                                    if (void 0 === fragment) fragment = document.createDocumentFragment();
                                    if (void 0 === withinGroup) withinGroup = false;
                                    var _a = this.config, renderSelectedChoices = _a.renderSelectedChoices, searchResultLimit = _a.searchResultLimit, renderChoiceLimit = _a.renderChoiceLimit;
                                    var filter = this._isSearching ? utils_1.sortByScore : this.config.sorter;
                                    var appendChoice = function(choice) {
                                        var shouldRender = "auto" === renderSelectedChoices ? _this._isSelectOneElement || !choice.selected : true;
                                        if (shouldRender) {
                                            var dropdownItem = _this._getTemplate("choice", choice, _this.config.itemSelectText);
                                            fragment.appendChild(dropdownItem);
                                        }
                                    };
                                    var rendererableChoices = choices;
                                    if ("auto" === renderSelectedChoices && !this._isSelectOneElement) rendererableChoices = choices.filter((function(choice) {
                                        return !choice.selected;
                                    }));
                                    var _b = rendererableChoices.reduce((function(acc, choice) {
                                        if (choice.placeholder) acc.placeholderChoices.push(choice); else acc.normalChoices.push(choice);
                                        return acc;
                                    }), {
                                        placeholderChoices: [],
                                        normalChoices: []
                                    }), placeholderChoices = _b.placeholderChoices, normalChoices = _b.normalChoices;
                                    if (this.config.shouldSort || this._isSearching) normalChoices.sort(filter);
                                    var choiceLimit = rendererableChoices.length;
                                    var sortedChoices = this._isSelectOneElement ? __spreadArray(__spreadArray([], placeholderChoices, true), normalChoices, true) : normalChoices;
                                    if (this._isSearching) choiceLimit = searchResultLimit; else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) choiceLimit = renderChoiceLimit;
                                    for (var i = 0; i < choiceLimit; i += 1) if (sortedChoices[i]) appendChoice(sortedChoices[i]);
                                    return fragment;
                                };
                                Choices.prototype._createItemsFragment = function(items, fragment) {
                                    var _this = this;
                                    if (void 0 === fragment) fragment = document.createDocumentFragment();
                                    var _a = this.config, shouldSortItems = _a.shouldSortItems, sorter = _a.sorter, removeItemButton = _a.removeItemButton;
                                    if (shouldSortItems && !this._isSelectOneElement) items.sort(sorter);
                                    if (this._isTextElement) this.passedElement.value = items.map((function(_a) {
                                        var value = _a.value;
                                        return value;
                                    })).join(this.config.delimiter); else this.passedElement.options = items;
                                    var addItemToFragment = function(item) {
                                        var listItem = _this._getTemplate("item", item, removeItemButton);
                                        fragment.appendChild(listItem);
                                    };
                                    items.forEach(addItemToFragment);
                                    return fragment;
                                };
                                Choices.prototype._triggerChange = function(value) {
                                    if (void 0 === value || null === value) return;
                                    this.passedElement.triggerEvent(constants_1.EVENTS.change, {
                                        value
                                    });
                                };
                                Choices.prototype._selectPlaceholderChoice = function(placeholderChoice) {
                                    this._addItem({
                                        value: placeholderChoice.value,
                                        label: placeholderChoice.label,
                                        choiceId: placeholderChoice.id,
                                        groupId: placeholderChoice.groupId,
                                        placeholder: placeholderChoice.placeholder
                                    });
                                    this._triggerChange(placeholderChoice.value);
                                };
                                Choices.prototype._handleButtonAction = function(activeItems, element) {
                                    if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) return;
                                    var itemId = element.parentNode && element.parentNode.dataset.id;
                                    var itemToRemove = itemId && activeItems.find((function(item) {
                                        return item.id === parseInt(itemId, 10);
                                    }));
                                    if (!itemToRemove) return;
                                    this._removeItem(itemToRemove);
                                    this._triggerChange(itemToRemove.value);
                                    if (this._isSelectOneElement && this._store.placeholderChoice) this._selectPlaceholderChoice(this._store.placeholderChoice);
                                };
                                Choices.prototype._handleItemAction = function(activeItems, element, hasShiftKey) {
                                    var _this = this;
                                    if (void 0 === hasShiftKey) hasShiftKey = false;
                                    if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) return;
                                    var passedId = element.dataset.id;
                                    activeItems.forEach((function(item) {
                                        if (item.id === parseInt("".concat(passedId), 10) && !item.highlighted) _this.highlightItem(item); else if (!hasShiftKey && item.highlighted) _this.unhighlightItem(item);
                                    }));
                                    this.input.focus();
                                };
                                Choices.prototype._handleChoiceAction = function(activeItems, element) {
                                    if (!activeItems || !element) return;
                                    var id = element.dataset.id;
                                    var choice = id && this._store.getChoiceById(id);
                                    if (!choice) return;
                                    var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : void 0;
                                    var hasActiveDropdown = this.dropdown.isActive;
                                    choice.keyCode = passedKeyCode;
                                    this.passedElement.triggerEvent(constants_1.EVENTS.choice, {
                                        choice
                                    });
                                    if (!choice.selected && !choice.disabled) {
                                        var canAddItem = this._canAddItem(activeItems, choice.value);
                                        if (canAddItem.response) {
                                            this._addItem({
                                                value: choice.value,
                                                label: choice.label,
                                                choiceId: choice.id,
                                                groupId: choice.groupId,
                                                customProperties: choice.customProperties,
                                                placeholder: choice.placeholder,
                                                keyCode: choice.keyCode
                                            });
                                            this._triggerChange(choice.value);
                                        }
                                    }
                                    this.clearInput();
                                    if (hasActiveDropdown && this._isSelectOneElement) {
                                        this.hideDropdown(true);
                                        this.containerOuter.focus();
                                    }
                                };
                                Choices.prototype._handleBackspace = function(activeItems) {
                                    if (!this.config.removeItems || !activeItems) return;
                                    var lastItem = activeItems[activeItems.length - 1];
                                    var hasHighlightedItems = activeItems.some((function(item) {
                                        return item.highlighted;
                                    }));
                                    if (this.config.editItems && !hasHighlightedItems && lastItem) {
                                        this.input.value = lastItem.value;
                                        this.input.setWidth();
                                        this._removeItem(lastItem);
                                        this._triggerChange(lastItem.value);
                                    } else {
                                        if (!hasHighlightedItems) this.highlightItem(lastItem, false);
                                        this.removeHighlightedItems(true);
                                    }
                                };
                                Choices.prototype._startLoading = function() {
                                    this._store.dispatch((0, misc_1.setIsLoading)(true));
                                };
                                Choices.prototype._stopLoading = function() {
                                    this._store.dispatch((0, misc_1.setIsLoading)(false));
                                };
                                Choices.prototype._handleLoadingState = function(setLoading) {
                                    if (void 0 === setLoading) setLoading = true;
                                    var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
                                    if (setLoading) {
                                        this.disable();
                                        this.containerOuter.addLoadingState();
                                        if (this._isSelectOneElement) if (!placeholderItem) {
                                            placeholderItem = this._getTemplate("placeholder", this.config.loadingText);
                                            if (placeholderItem) this.itemList.append(placeholderItem);
                                        } else placeholderItem.innerHTML = this.config.loadingText; else this.input.placeholder = this.config.loadingText;
                                    } else {
                                        this.enable();
                                        this.containerOuter.removeLoadingState();
                                        if (this._isSelectOneElement) {
                                            if (placeholderItem) placeholderItem.innerHTML = this._placeholderValue || "";
                                        } else this.input.placeholder = this._placeholderValue || "";
                                    }
                                };
                                Choices.prototype._handleSearch = function(value) {
                                    if (!this.input.isFocussed) return;
                                    var choices = this._store.choices;
                                    var _a = this.config, searchFloor = _a.searchFloor, searchChoices = _a.searchChoices;
                                    var hasUnactiveChoices = choices.some((function(option) {
                                        return !option.active;
                                    }));
                                    if (null !== value && "undefined" !== typeof value && value.length >= searchFloor) {
                                        var resultCount = searchChoices ? this._searchChoices(value) : 0;
                                        this.passedElement.triggerEvent(constants_1.EVENTS.search, {
                                            value,
                                            resultCount
                                        });
                                    } else if (hasUnactiveChoices) {
                                        this._isSearching = false;
                                        this._store.dispatch((0, choices_1.activateChoices)(true));
                                    }
                                };
                                Choices.prototype._canAddItem = function(activeItems, value) {
                                    var canAddItem = true;
                                    var notice = "function" === typeof this.config.addItemText ? this.config.addItemText(value) : this.config.addItemText;
                                    if (!this._isSelectOneElement) {
                                        var isDuplicateValue = (0, utils_1.existsInArray)(activeItems, value);
                                        if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                                            canAddItem = false;
                                            notice = "function" === typeof this.config.maxItemText ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
                                        }
                                        if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                                            canAddItem = false;
                                            notice = "function" === typeof this.config.uniqueItemText ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
                                        }
                                        if (this._isTextElement && this.config.addItems && canAddItem && "function" === typeof this.config.addItemFilter && !this.config.addItemFilter(value)) {
                                            canAddItem = false;
                                            notice = "function" === typeof this.config.customAddItemText ? this.config.customAddItemText(value) : this.config.customAddItemText;
                                        }
                                    }
                                    return {
                                        response: canAddItem,
                                        notice
                                    };
                                };
                                Choices.prototype._searchChoices = function(value) {
                                    var newValue = "string" === typeof value ? value.trim() : value;
                                    var currentValue = "string" === typeof this._currentValue ? this._currentValue.trim() : this._currentValue;
                                    if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) return 0;
                                    var haystack = this._store.searchableChoices;
                                    var needle = newValue;
                                    var options = Object.assign(this.config.fuseOptions, {
                                        keys: __spreadArray([], this.config.searchFields, true),
                                        includeMatches: true
                                    });
                                    var fuse = new fuse_js_1.default(haystack, options);
                                    var results = fuse.search(needle);
                                    this._currentValue = newValue;
                                    this._highlightPosition = 0;
                                    this._isSearching = true;
                                    this._store.dispatch((0, choices_1.filterChoices)(results));
                                    return results.length;
                                };
                                Choices.prototype._addEventListeners = function() {
                                    var documentElement = document.documentElement;
                                    documentElement.addEventListener("touchend", this._onTouchEnd, true);
                                    this.containerOuter.element.addEventListener("keydown", this._onKeyDown, true);
                                    this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, true);
                                    documentElement.addEventListener("click", this._onClick, {
                                        passive: true
                                    });
                                    documentElement.addEventListener("touchmove", this._onTouchMove, {
                                        passive: true
                                    });
                                    this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                                        passive: true
                                    });
                                    if (this._isSelectOneElement) {
                                        this.containerOuter.element.addEventListener("focus", this._onFocus, {
                                            passive: true
                                        });
                                        this.containerOuter.element.addEventListener("blur", this._onBlur, {
                                            passive: true
                                        });
                                    }
                                    this.input.element.addEventListener("keyup", this._onKeyUp, {
                                        passive: true
                                    });
                                    this.input.element.addEventListener("focus", this._onFocus, {
                                        passive: true
                                    });
                                    this.input.element.addEventListener("blur", this._onBlur, {
                                        passive: true
                                    });
                                    if (this.input.element.form) this.input.element.form.addEventListener("reset", this._onFormReset, {
                                        passive: true
                                    });
                                    this.input.addEventListeners();
                                };
                                Choices.prototype._removeEventListeners = function() {
                                    var documentElement = document.documentElement;
                                    documentElement.removeEventListener("touchend", this._onTouchEnd, true);
                                    this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, true);
                                    this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, true);
                                    documentElement.removeEventListener("click", this._onClick);
                                    documentElement.removeEventListener("touchmove", this._onTouchMove);
                                    this.dropdown.element.removeEventListener("mouseover", this._onMouseOver);
                                    if (this._isSelectOneElement) {
                                        this.containerOuter.element.removeEventListener("focus", this._onFocus);
                                        this.containerOuter.element.removeEventListener("blur", this._onBlur);
                                    }
                                    this.input.element.removeEventListener("keyup", this._onKeyUp);
                                    this.input.element.removeEventListener("focus", this._onFocus);
                                    this.input.element.removeEventListener("blur", this._onBlur);
                                    if (this.input.element.form) this.input.element.form.removeEventListener("reset", this._onFormReset);
                                    this.input.removeEventListeners();
                                };
                                Choices.prototype._onKeyDown = function(event) {
                                    var keyCode = event.keyCode;
                                    var activeItems = this._store.activeItems;
                                    var hasFocusedInput = this.input.isFocussed;
                                    var hasActiveDropdown = this.dropdown.isActive;
                                    var hasItems = this.itemList.hasChildren();
                                    var keyString = String.fromCharCode(keyCode);
                                    var wasAlphaNumericChar = /[a-zA-Z0-9-_ ]/.test(keyString);
                                    var BACK_KEY = constants_1.KEY_CODES.BACK_KEY, DELETE_KEY = constants_1.KEY_CODES.DELETE_KEY, ENTER_KEY = constants_1.KEY_CODES.ENTER_KEY, A_KEY = constants_1.KEY_CODES.A_KEY, ESC_KEY = constants_1.KEY_CODES.ESC_KEY, UP_KEY = constants_1.KEY_CODES.UP_KEY, DOWN_KEY = constants_1.KEY_CODES.DOWN_KEY, PAGE_UP_KEY = constants_1.KEY_CODES.PAGE_UP_KEY, PAGE_DOWN_KEY = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                                    if (!this._isTextElement && !hasActiveDropdown && wasAlphaNumericChar) {
                                        this.showDropdown();
                                        if (!this.input.isFocussed) this.input.value += keyString.toLowerCase();
                                    }
                                    switch (keyCode) {
                                      case A_KEY:
                                        return this._onSelectKey(event, hasItems);

                                      case ENTER_KEY:
                                        return this._onEnterKey(event, activeItems, hasActiveDropdown);

                                      case ESC_KEY:
                                        return this._onEscapeKey(hasActiveDropdown);

                                      case UP_KEY:
                                      case PAGE_UP_KEY:
                                      case DOWN_KEY:
                                      case PAGE_DOWN_KEY:
                                        return this._onDirectionKey(event, hasActiveDropdown);

                                      case DELETE_KEY:
                                      case BACK_KEY:
                                        return this._onDeleteKey(event, activeItems, hasFocusedInput);

                                      default:
                                    }
                                };
                                Choices.prototype._onKeyUp = function(_a) {
                                    var target = _a.target, keyCode = _a.keyCode;
                                    var value = this.input.value;
                                    var activeItems = this._store.activeItems;
                                    var canAddItem = this._canAddItem(activeItems, value);
                                    var backKey = constants_1.KEY_CODES.BACK_KEY, deleteKey = constants_1.KEY_CODES.DELETE_KEY;
                                    if (this._isTextElement) {
                                        var canShowDropdownNotice = canAddItem.notice && value;
                                        if (canShowDropdownNotice) {
                                            var dropdownItem = this._getTemplate("notice", canAddItem.notice);
                                            this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                                            this.showDropdown(true);
                                        } else this.hideDropdown(true);
                                    } else {
                                        var wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
                                        var userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
                                        var canReactivateChoices = !this._isTextElement && this._isSearching;
                                        var canSearch = this._canSearch && canAddItem.response;
                                        if (userHasRemovedValue && canReactivateChoices) {
                                            this._isSearching = false;
                                            this._store.dispatch((0, choices_1.activateChoices)(true));
                                        } else if (canSearch) this._handleSearch(this.input.rawValue);
                                    }
                                    this._canSearch = this.config.searchEnabled;
                                };
                                Choices.prototype._onSelectKey = function(event, hasItems) {
                                    var ctrlKey = event.ctrlKey, metaKey = event.metaKey;
                                    var hasCtrlDownKeyPressed = ctrlKey || metaKey;
                                    if (hasCtrlDownKeyPressed && hasItems) {
                                        this._canSearch = false;
                                        var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
                                        if (shouldHightlightAll) this.highlightAll();
                                    }
                                };
                                Choices.prototype._onEnterKey = function(event, activeItems, hasActiveDropdown) {
                                    var target = event.target;
                                    var enterKey = constants_1.KEY_CODES.ENTER_KEY;
                                    var targetWasButton = target && target.hasAttribute("data-button");
                                    if (this._isTextElement && target && target.value) {
                                        var value = this.input.value;
                                        var canAddItem = this._canAddItem(activeItems, value);
                                        if (canAddItem.response) {
                                            this.hideDropdown(true);
                                            this._addItem({
                                                value
                                            });
                                            this._triggerChange(value);
                                            this.clearInput();
                                        }
                                    }
                                    if (targetWasButton) {
                                        this._handleButtonAction(activeItems, target);
                                        event.preventDefault();
                                    }
                                    if (hasActiveDropdown) {
                                        var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                                        if (highlightedChoice) {
                                            if (activeItems[0]) activeItems[0].keyCode = enterKey;
                                            this._handleChoiceAction(activeItems, highlightedChoice);
                                        }
                                        event.preventDefault();
                                    } else if (this._isSelectOneElement) {
                                        this.showDropdown();
                                        event.preventDefault();
                                    }
                                };
                                Choices.prototype._onEscapeKey = function(hasActiveDropdown) {
                                    if (hasActiveDropdown) {
                                        this.hideDropdown(true);
                                        this.containerOuter.focus();
                                    }
                                };
                                Choices.prototype._onDirectionKey = function(event, hasActiveDropdown) {
                                    var keyCode = event.keyCode, metaKey = event.metaKey;
                                    var downKey = constants_1.KEY_CODES.DOWN_KEY, pageUpKey = constants_1.KEY_CODES.PAGE_UP_KEY, pageDownKey = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                                    if (hasActiveDropdown || this._isSelectOneElement) {
                                        this.showDropdown();
                                        this._canSearch = false;
                                        var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
                                        var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
                                        var selectableChoiceIdentifier = "[data-choice-selectable]";
                                        var nextEl = void 0;
                                        if (skipKey) if (directionInt > 0) nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type")); else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier); else {
                                            var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                                            if (currentEl) nextEl = (0, utils_1.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt); else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                                        }
                                        if (nextEl) {
                                            if (!(0, utils_1.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) this.choiceList.scrollToChildElement(nextEl, directionInt);
                                            this._highlightChoice(nextEl);
                                        }
                                        event.preventDefault();
                                    }
                                };
                                Choices.prototype._onDeleteKey = function(event, activeItems, hasFocusedInput) {
                                    var target = event.target;
                                    if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
                                        this._handleBackspace(activeItems);
                                        event.preventDefault();
                                    }
                                };
                                Choices.prototype._onTouchMove = function() {
                                    if (this._wasTap) this._wasTap = false;
                                };
                                Choices.prototype._onTouchEnd = function(event) {
                                    var target = (event || event.touches[0]).target;
                                    var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
                                    if (touchWasWithinContainer) {
                                        var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
                                        if (containerWasExactTarget) if (this._isTextElement) this.input.focus(); else if (this._isSelectMultipleElement) this.showDropdown();
                                        event.stopPropagation();
                                    }
                                    this._wasTap = true;
                                };
                                Choices.prototype._onMouseDown = function(event) {
                                    var target = event.target;
                                    if (!(target instanceof HTMLElement)) return;
                                    if (IS_IE11 && this.choiceList.element.contains(target)) {
                                        var firstChoice = this.choiceList.element.firstElementChild;
                                        var isOnScrollbar = "ltr" === this._direction ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
                                        this._isScrollingOnIe = isOnScrollbar;
                                    }
                                    if (target === this.input.element) return;
                                    var item = target.closest("[data-button],[data-item],[data-choice]");
                                    if (item instanceof HTMLElement) {
                                        var hasShiftKey = event.shiftKey;
                                        var activeItems = this._store.activeItems;
                                        var dataset = item.dataset;
                                        if ("button" in dataset) this._handleButtonAction(activeItems, item); else if ("item" in dataset) this._handleItemAction(activeItems, item, hasShiftKey); else if ("choice" in dataset) this._handleChoiceAction(activeItems, item);
                                    }
                                    event.preventDefault();
                                };
                                Choices.prototype._onMouseOver = function(_a) {
                                    var target = _a.target;
                                    if (target instanceof HTMLElement && "choice" in target.dataset) this._highlightChoice(target);
                                };
                                Choices.prototype._onClick = function(_a) {
                                    var target = _a.target;
                                    var clickWasWithinContainer = this.containerOuter.element.contains(target);
                                    if (clickWasWithinContainer) {
                                        if (!this.dropdown.isActive && !this.containerOuter.isDisabled) if (this._isTextElement) {
                                            if (document.activeElement !== this.input.element) this.input.focus();
                                        } else {
                                            this.showDropdown();
                                            this.containerOuter.focus();
                                        } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) this.hideDropdown();
                                    } else {
                                        var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
                                        if (hasHighlightedItems) this.unhighlightAll();
                                        this.containerOuter.removeFocusState();
                                        this.hideDropdown(true);
                                    }
                                };
                                Choices.prototype._onFocus = function(_a) {
                                    var _b;
                                    var _this = this;
                                    var target = _a.target;
                                    var focusWasWithinContainer = target && this.containerOuter.element.contains(target);
                                    if (!focusWasWithinContainer) return;
                                    var focusActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                                        if (target === _this.input.element) _this.containerOuter.addFocusState();
                                    }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                                        _this.containerOuter.addFocusState();
                                        if (target === _this.input.element) _this.showDropdown(true);
                                    }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                                        if (target === _this.input.element) {
                                            _this.showDropdown(true);
                                            _this.containerOuter.addFocusState();
                                        }
                                    }, _b);
                                    focusActions[this.passedElement.element.type]();
                                };
                                Choices.prototype._onBlur = function(_a) {
                                    var _b;
                                    var _this = this;
                                    var target = _a.target;
                                    var blurWasWithinContainer = target && this.containerOuter.element.contains(target);
                                    if (blurWasWithinContainer && !this._isScrollingOnIe) {
                                        var activeItems = this._store.activeItems;
                                        var hasHighlightedItems_1 = activeItems.some((function(item) {
                                            return item.highlighted;
                                        }));
                                        var blurActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                                            if (target === _this.input.element) {
                                                _this.containerOuter.removeFocusState();
                                                if (hasHighlightedItems_1) _this.unhighlightAll();
                                                _this.hideDropdown(true);
                                            }
                                        }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                                            _this.containerOuter.removeFocusState();
                                            if (target === _this.input.element || target === _this.containerOuter.element && !_this._canSearch) _this.hideDropdown(true);
                                        }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                                            if (target === _this.input.element) {
                                                _this.containerOuter.removeFocusState();
                                                _this.hideDropdown(true);
                                                if (hasHighlightedItems_1) _this.unhighlightAll();
                                            }
                                        }, _b);
                                        blurActions[this.passedElement.element.type]();
                                    } else {
                                        this._isScrollingOnIe = false;
                                        this.input.element.focus();
                                    }
                                };
                                Choices.prototype._onFormReset = function() {
                                    this._store.dispatch((0, misc_1.resetTo)(this._initialState));
                                };
                                Choices.prototype._highlightChoice = function(el) {
                                    var _this = this;
                                    if (void 0 === el) el = null;
                                    var choices = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                                    if (!choices.length) return;
                                    var passedEl = el;
                                    var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState)));
                                    highlightedChoices.forEach((function(choice) {
                                        choice.classList.remove(_this.config.classNames.highlightedState);
                                        choice.setAttribute("aria-selected", "false");
                                    }));
                                    if (passedEl) this._highlightPosition = choices.indexOf(passedEl); else {
                                        if (choices.length > this._highlightPosition) passedEl = choices[this._highlightPosition]; else passedEl = choices[choices.length - 1];
                                        if (!passedEl) passedEl = choices[0];
                                    }
                                    passedEl.classList.add(this.config.classNames.highlightedState);
                                    passedEl.setAttribute("aria-selected", "true");
                                    this.passedElement.triggerEvent(constants_1.EVENTS.highlightChoice, {
                                        el: passedEl
                                    });
                                    if (this.dropdown.isActive) {
                                        this.input.setActiveDescendant(passedEl.id);
                                        this.containerOuter.setActiveDescendant(passedEl.id);
                                    }
                                };
                                Choices.prototype._addItem = function(_a) {
                                    var value = _a.value, _b = _a.label, label = void 0 === _b ? null : _b, _c = _a.choiceId, choiceId = void 0 === _c ? -1 : _c, _d = _a.groupId, groupId = void 0 === _d ? -1 : _d, _e = _a.customProperties, customProperties = void 0 === _e ? {} : _e, _f = _a.placeholder, placeholder = void 0 === _f ? false : _f, _g = _a.keyCode, keyCode = void 0 === _g ? -1 : _g;
                                    var passedValue = "string" === typeof value ? value.trim() : value;
                                    var items = this._store.items;
                                    var passedLabel = label || passedValue;
                                    var passedOptionId = choiceId || -1;
                                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    var id = items ? items.length + 1 : 1;
                                    if (this.config.prependValue) passedValue = this.config.prependValue + passedValue.toString();
                                    if (this.config.appendValue) passedValue += this.config.appendValue.toString();
                                    this._store.dispatch((0, items_1.addItem)({
                                        value: passedValue,
                                        label: passedLabel,
                                        id,
                                        choiceId: passedOptionId,
                                        groupId,
                                        customProperties,
                                        placeholder,
                                        keyCode
                                    }));
                                    if (this._isSelectOneElement) this.removeActiveItems(id);
                                    this.passedElement.triggerEvent(constants_1.EVENTS.addItem, {
                                        id,
                                        value: passedValue,
                                        label: passedLabel,
                                        customProperties,
                                        groupValue: group && group.value ? group.value : null,
                                        keyCode
                                    });
                                };
                                Choices.prototype._removeItem = function(item) {
                                    var id = item.id, value = item.value, label = item.label, customProperties = item.customProperties, choiceId = item.choiceId, groupId = item.groupId;
                                    var group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    if (!id || !choiceId) return;
                                    this._store.dispatch((0, items_1.removeItem)(id, choiceId));
                                    this.passedElement.triggerEvent(constants_1.EVENTS.removeItem, {
                                        id,
                                        value,
                                        label,
                                        customProperties,
                                        groupValue: group && group.value ? group.value : null
                                    });
                                };
                                Choices.prototype._addChoice = function(_a) {
                                    var value = _a.value, _b = _a.label, label = void 0 === _b ? null : _b, _c = _a.isSelected, isSelected = void 0 === _c ? false : _c, _d = _a.isDisabled, isDisabled = void 0 === _d ? false : _d, _e = _a.groupId, groupId = void 0 === _e ? -1 : _e, _f = _a.customProperties, customProperties = void 0 === _f ? {} : _f, _g = _a.placeholder, placeholder = void 0 === _g ? false : _g, _h = _a.keyCode, keyCode = void 0 === _h ? -1 : _h;
                                    if ("undefined" === typeof value || null === value) return;
                                    var choices = this._store.choices;
                                    var choiceLabel = label || value;
                                    var choiceId = choices ? choices.length + 1 : 1;
                                    var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);
                                    this._store.dispatch((0, choices_1.addChoice)({
                                        id: choiceId,
                                        groupId,
                                        elementId: choiceElementId,
                                        value,
                                        label: choiceLabel,
                                        disabled: isDisabled,
                                        customProperties,
                                        placeholder,
                                        keyCode
                                    }));
                                    if (isSelected) this._addItem({
                                        value,
                                        label: choiceLabel,
                                        choiceId,
                                        customProperties,
                                        placeholder,
                                        keyCode
                                    });
                                };
                                Choices.prototype._addGroup = function(_a) {
                                    var _this = this;
                                    var group = _a.group, id = _a.id, _b = _a.valueKey, valueKey = void 0 === _b ? "value" : _b, _c = _a.labelKey, labelKey = void 0 === _c ? "label" : _c;
                                    var groupChoices = (0, utils_1.isType)("Object", group) ? group.choices : Array.from(group.getElementsByTagName("OPTION"));
                                    var groupId = id || Math.floor((new Date).valueOf() * Math.random());
                                    var isDisabled = group.disabled ? group.disabled : false;
                                    if (groupChoices) {
                                        this._store.dispatch((0, groups_1.addGroup)({
                                            value: group.label,
                                            id: groupId,
                                            active: true,
                                            disabled: isDisabled
                                        }));
                                        var addGroupChoices = function(choice) {
                                            var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
                                            _this._addChoice({
                                                value: choice[valueKey],
                                                label: (0, utils_1.isType)("Object", choice) ? choice[labelKey] : choice.innerHTML,
                                                isSelected: choice.selected,
                                                isDisabled: isOptDisabled,
                                                groupId,
                                                customProperties: choice.customProperties,
                                                placeholder: choice.placeholder
                                            });
                                        };
                                        groupChoices.forEach(addGroupChoices);
                                    } else this._store.dispatch((0, groups_1.addGroup)({
                                        value: group.label,
                                        id: group.id,
                                        active: false,
                                        disabled: group.disabled
                                    }));
                                };
                                Choices.prototype._getTemplate = function(template) {
                                    var _a;
                                    var args = [];
                                    for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
                                    return (_a = this._templates[template]).call.apply(_a, __spreadArray([ this, this.config ], args, false));
                                };
                                Choices.prototype._createTemplates = function() {
                                    var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
                                    var userTemplates = {};
                                    if (callbackOnCreateTemplates && "function" === typeof callbackOnCreateTemplates) userTemplates = callbackOnCreateTemplates.call(this, utils_1.strToEl);
                                    this._templates = (0, deepmerge_1.default)(templates_1.default, userTemplates);
                                };
                                Choices.prototype._createElements = function() {
                                    this.containerOuter = new components_1.Container({
                                        element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type,
                                        position: this.config.position
                                    });
                                    this.containerInner = new components_1.Container({
                                        element: this._getTemplate("containerInner"),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type,
                                        position: this.config.position
                                    });
                                    this.input = new components_1.Input({
                                        element: this._getTemplate("input", this._placeholderValue),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type,
                                        preventPaste: !this.config.paste
                                    });
                                    this.choiceList = new components_1.List({
                                        element: this._getTemplate("choiceList", this._isSelectOneElement)
                                    });
                                    this.itemList = new components_1.List({
                                        element: this._getTemplate("itemList", this._isSelectOneElement)
                                    });
                                    this.dropdown = new components_1.Dropdown({
                                        element: this._getTemplate("dropdown"),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type
                                    });
                                };
                                Choices.prototype._createStructure = function() {
                                    this.passedElement.conceal();
                                    this.containerInner.wrap(this.passedElement.element);
                                    this.containerOuter.wrap(this.containerInner.element);
                                    if (this._isSelectOneElement) this.input.placeholder = this.config.searchPlaceholderValue || ""; else if (this._placeholderValue) {
                                        this.input.placeholder = this._placeholderValue;
                                        this.input.setWidth();
                                    }
                                    this.containerOuter.element.appendChild(this.containerInner.element);
                                    this.containerOuter.element.appendChild(this.dropdown.element);
                                    this.containerInner.element.appendChild(this.itemList.element);
                                    if (!this._isTextElement) this.dropdown.element.appendChild(this.choiceList.element);
                                    if (!this._isSelectOneElement) this.containerInner.element.appendChild(this.input.element); else if (this.config.searchEnabled) this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
                                    if (this._isSelectElement) {
                                        this._highlightPosition = 0;
                                        this._isSearching = false;
                                        this._startLoading();
                                        if (this._presetGroups.length) this._addPredefinedGroups(this._presetGroups); else this._addPredefinedChoices(this._presetChoices);
                                        this._stopLoading();
                                    }
                                    if (this._isTextElement) this._addPredefinedItems(this._presetItems);
                                };
                                Choices.prototype._addPredefinedGroups = function(groups) {
                                    var _this = this;
                                    var placeholderChoice = this.passedElement.placeholderOption;
                                    if (placeholderChoice && placeholderChoice.parentNode && "SELECT" === placeholderChoice.parentNode.tagName) this._addChoice({
                                        value: placeholderChoice.value,
                                        label: placeholderChoice.innerHTML,
                                        isSelected: placeholderChoice.selected,
                                        isDisabled: placeholderChoice.disabled,
                                        placeholder: true
                                    });
                                    groups.forEach((function(group) {
                                        return _this._addGroup({
                                            group,
                                            id: group.id || null
                                        });
                                    }));
                                };
                                Choices.prototype._addPredefinedChoices = function(choices) {
                                    var _this = this;
                                    if (this.config.shouldSort) choices.sort(this.config.sorter);
                                    var hasSelectedChoice = choices.some((function(choice) {
                                        return choice.selected;
                                    }));
                                    var firstEnabledChoiceIndex = choices.findIndex((function(choice) {
                                        return void 0 === choice.disabled || !choice.disabled;
                                    }));
                                    choices.forEach((function(choice, index) {
                                        var _a = choice.value, value = void 0 === _a ? "" : _a, label = choice.label, customProperties = choice.customProperties, placeholder = choice.placeholder;
                                        if (_this._isSelectElement) if (choice.choices) _this._addGroup({
                                            group: choice,
                                            id: choice.id || null
                                        }); else {
                                            var shouldPreselect = _this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                                            var isSelected = shouldPreselect ? true : choice.selected;
                                            var isDisabled = choice.disabled;
                                            _this._addChoice({
                                                value,
                                                label,
                                                isSelected: !!isSelected,
                                                isDisabled: !!isDisabled,
                                                placeholder: !!placeholder,
                                                customProperties
                                            });
                                        } else _this._addChoice({
                                            value,
                                            label,
                                            isSelected: !!choice.selected,
                                            isDisabled: !!choice.disabled,
                                            placeholder: !!choice.placeholder,
                                            customProperties
                                        });
                                    }));
                                };
                                Choices.prototype._addPredefinedItems = function(items) {
                                    var _this = this;
                                    items.forEach((function(item) {
                                        if ("object" === typeof item && item.value) _this._addItem({
                                            value: item.value,
                                            label: item.label,
                                            choiceId: item.id,
                                            customProperties: item.customProperties,
                                            placeholder: item.placeholder
                                        });
                                        if ("string" === typeof item) _this._addItem({
                                            value: item
                                        });
                                    }));
                                };
                                Choices.prototype._setChoiceOrItem = function(item) {
                                    var _this = this;
                                    var itemType = (0, utils_1.getType)(item).toLowerCase();
                                    var handleType = {
                                        object: function() {
                                            if (!item.value) return;
                                            if (!_this._isTextElement) _this._addChoice({
                                                value: item.value,
                                                label: item.label,
                                                isSelected: true,
                                                isDisabled: false,
                                                customProperties: item.customProperties,
                                                placeholder: item.placeholder
                                            }); else _this._addItem({
                                                value: item.value,
                                                label: item.label,
                                                choiceId: item.id,
                                                customProperties: item.customProperties,
                                                placeholder: item.placeholder
                                            });
                                        },
                                        string: function() {
                                            if (!_this._isTextElement) _this._addChoice({
                                                value: item,
                                                label: item,
                                                isSelected: true,
                                                isDisabled: false
                                            }); else _this._addItem({
                                                value: item
                                            });
                                        }
                                    };
                                    handleType[itemType]();
                                };
                                Choices.prototype._findAndSelectChoiceByValue = function(value) {
                                    var _this = this;
                                    var choices = this._store.choices;
                                    var foundChoice = choices.find((function(choice) {
                                        return _this.config.valueComparer(choice.value, value);
                                    }));
                                    if (foundChoice && !foundChoice.selected) this._addItem({
                                        value: foundChoice.value,
                                        label: foundChoice.label,
                                        choiceId: foundChoice.id,
                                        groupId: foundChoice.groupId,
                                        customProperties: foundChoice.customProperties,
                                        placeholder: foundChoice.placeholder,
                                        keyCode: foundChoice.keyCode
                                    });
                                };
                                Choices.prototype._generatePlaceholderValue = function() {
                                    if (this._isSelectElement && this.passedElement.placeholderOption) {
                                        var placeholderOption = this.passedElement.placeholderOption;
                                        return placeholderOption ? placeholderOption.text : null;
                                    }
                                    var _a = this.config, placeholder = _a.placeholder, placeholderValue = _a.placeholderValue;
                                    var dataset = this.passedElement.element.dataset;
                                    if (placeholder) {
                                        if (placeholderValue) return placeholderValue;
                                        if (dataset.placeholder) return dataset.placeholder;
                                    }
                                    return null;
                                };
                                return Choices;
                            }();
                            exports["default"] = Choices;
                        },
                        613: function(__unused_webpack_module, exports, __nested_webpack_require_75247__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var utils_1 = __nested_webpack_require_75247__(799);
                            var constants_1 = __nested_webpack_require_75247__(883);
                            var Container = function() {
                                function Container(_a) {
                                    var element = _a.element, type = _a.type, classNames = _a.classNames, position = _a.position;
                                    this.element = element;
                                    this.classNames = classNames;
                                    this.type = type;
                                    this.position = position;
                                    this.isOpen = false;
                                    this.isFlipped = false;
                                    this.isFocussed = false;
                                    this.isDisabled = false;
                                    this.isLoading = false;
                                    this._onFocus = this._onFocus.bind(this);
                                    this._onBlur = this._onBlur.bind(this);
                                }
                                Container.prototype.addEventListeners = function() {
                                    this.element.addEventListener("focus", this._onFocus);
                                    this.element.addEventListener("blur", this._onBlur);
                                };
                                Container.prototype.removeEventListeners = function() {
                                    this.element.removeEventListener("focus", this._onFocus);
                                    this.element.removeEventListener("blur", this._onBlur);
                                };
                                Container.prototype.shouldFlip = function(dropdownPos) {
                                    if ("number" !== typeof dropdownPos) return false;
                                    var shouldFlip = false;
                                    if ("auto" === this.position) shouldFlip = !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches; else if ("top" === this.position) shouldFlip = true;
                                    return shouldFlip;
                                };
                                Container.prototype.setActiveDescendant = function(activeDescendantID) {
                                    this.element.setAttribute("aria-activedescendant", activeDescendantID);
                                };
                                Container.prototype.removeActiveDescendant = function() {
                                    this.element.removeAttribute("aria-activedescendant");
                                };
                                Container.prototype.open = function(dropdownPos) {
                                    this.element.classList.add(this.classNames.openState);
                                    this.element.setAttribute("aria-expanded", "true");
                                    this.isOpen = true;
                                    if (this.shouldFlip(dropdownPos)) {
                                        this.element.classList.add(this.classNames.flippedState);
                                        this.isFlipped = true;
                                    }
                                };
                                Container.prototype.close = function() {
                                    this.element.classList.remove(this.classNames.openState);
                                    this.element.setAttribute("aria-expanded", "false");
                                    this.removeActiveDescendant();
                                    this.isOpen = false;
                                    if (this.isFlipped) {
                                        this.element.classList.remove(this.classNames.flippedState);
                                        this.isFlipped = false;
                                    }
                                };
                                Container.prototype.focus = function() {
                                    if (!this.isFocussed) this.element.focus();
                                };
                                Container.prototype.addFocusState = function() {
                                    this.element.classList.add(this.classNames.focusState);
                                };
                                Container.prototype.removeFocusState = function() {
                                    this.element.classList.remove(this.classNames.focusState);
                                };
                                Container.prototype.enable = function() {
                                    this.element.classList.remove(this.classNames.disabledState);
                                    this.element.removeAttribute("aria-disabled");
                                    if (this.type === constants_1.SELECT_ONE_TYPE) this.element.setAttribute("tabindex", "0");
                                    this.isDisabled = false;
                                };
                                Container.prototype.disable = function() {
                                    this.element.classList.add(this.classNames.disabledState);
                                    this.element.setAttribute("aria-disabled", "true");
                                    if (this.type === constants_1.SELECT_ONE_TYPE) this.element.setAttribute("tabindex", "-1");
                                    this.isDisabled = true;
                                };
                                Container.prototype.wrap = function(element) {
                                    (0, utils_1.wrap)(element, this.element);
                                };
                                Container.prototype.unwrap = function(element) {
                                    if (this.element.parentNode) {
                                        this.element.parentNode.insertBefore(element, this.element);
                                        this.element.parentNode.removeChild(this.element);
                                    }
                                };
                                Container.prototype.addLoadingState = function() {
                                    this.element.classList.add(this.classNames.loadingState);
                                    this.element.setAttribute("aria-busy", "true");
                                    this.isLoading = true;
                                };
                                Container.prototype.removeLoadingState = function() {
                                    this.element.classList.remove(this.classNames.loadingState);
                                    this.element.removeAttribute("aria-busy");
                                    this.isLoading = false;
                                };
                                Container.prototype._onFocus = function() {
                                    this.isFocussed = true;
                                };
                                Container.prototype._onBlur = function() {
                                    this.isFocussed = false;
                                };
                                return Container;
                            }();
                            exports["default"] = Container;
                        },
                        217: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var Dropdown = function() {
                                function Dropdown(_a) {
                                    var element = _a.element, type = _a.type, classNames = _a.classNames;
                                    this.element = element;
                                    this.classNames = classNames;
                                    this.type = type;
                                    this.isActive = false;
                                }
                                Object.defineProperty(Dropdown.prototype, "distanceFromTopWindow", {
                                    get: function() {
                                        return this.element.getBoundingClientRect().bottom;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Dropdown.prototype.getChild = function(selector) {
                                    return this.element.querySelector(selector);
                                };
                                Dropdown.prototype.show = function() {
                                    this.element.classList.add(this.classNames.activeState);
                                    this.element.setAttribute("aria-expanded", "true");
                                    this.isActive = true;
                                    return this;
                                };
                                Dropdown.prototype.hide = function() {
                                    this.element.classList.remove(this.classNames.activeState);
                                    this.element.setAttribute("aria-expanded", "false");
                                    this.isActive = false;
                                    return this;
                                };
                                return Dropdown;
                            }();
                            exports["default"] = Dropdown;
                        },
                        520: function(__unused_webpack_module, exports, __nested_webpack_require_81463__) {
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.WrappedSelect = exports.WrappedInput = exports.List = exports.Input = exports.Container = exports.Dropdown = void 0;
                            var dropdown_1 = __importDefault(__nested_webpack_require_81463__(217));
                            exports.Dropdown = dropdown_1.default;
                            var container_1 = __importDefault(__nested_webpack_require_81463__(613));
                            exports.Container = container_1.default;
                            var input_1 = __importDefault(__nested_webpack_require_81463__(11));
                            exports.Input = input_1.default;
                            var list_1 = __importDefault(__nested_webpack_require_81463__(624));
                            exports.List = list_1.default;
                            var wrapped_input_1 = __importDefault(__nested_webpack_require_81463__(541));
                            exports.WrappedInput = wrapped_input_1.default;
                            var wrapped_select_1 = __importDefault(__nested_webpack_require_81463__(982));
                            exports.WrappedSelect = wrapped_select_1.default;
                        },
                        11: function(__unused_webpack_module, exports, __nested_webpack_require_82511__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var utils_1 = __nested_webpack_require_82511__(799);
                            var constants_1 = __nested_webpack_require_82511__(883);
                            var Input = function() {
                                function Input(_a) {
                                    var element = _a.element, type = _a.type, classNames = _a.classNames, preventPaste = _a.preventPaste;
                                    this.element = element;
                                    this.type = type;
                                    this.classNames = classNames;
                                    this.preventPaste = preventPaste;
                                    this.isFocussed = this.element.isEqualNode(document.activeElement);
                                    this.isDisabled = element.disabled;
                                    this._onPaste = this._onPaste.bind(this);
                                    this._onInput = this._onInput.bind(this);
                                    this._onFocus = this._onFocus.bind(this);
                                    this._onBlur = this._onBlur.bind(this);
                                }
                                Object.defineProperty(Input.prototype, "placeholder", {
                                    set: function(placeholder) {
                                        this.element.placeholder = placeholder;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Input.prototype, "value", {
                                    get: function() {
                                        return (0, utils_1.sanitise)(this.element.value);
                                    },
                                    set: function(value) {
                                        this.element.value = value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Input.prototype, "rawValue", {
                                    get: function() {
                                        return this.element.value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Input.prototype.addEventListeners = function() {
                                    this.element.addEventListener("paste", this._onPaste);
                                    this.element.addEventListener("input", this._onInput, {
                                        passive: true
                                    });
                                    this.element.addEventListener("focus", this._onFocus, {
                                        passive: true
                                    });
                                    this.element.addEventListener("blur", this._onBlur, {
                                        passive: true
                                    });
                                };
                                Input.prototype.removeEventListeners = function() {
                                    this.element.removeEventListener("input", this._onInput);
                                    this.element.removeEventListener("paste", this._onPaste);
                                    this.element.removeEventListener("focus", this._onFocus);
                                    this.element.removeEventListener("blur", this._onBlur);
                                };
                                Input.prototype.enable = function() {
                                    this.element.removeAttribute("disabled");
                                    this.isDisabled = false;
                                };
                                Input.prototype.disable = function() {
                                    this.element.setAttribute("disabled", "");
                                    this.isDisabled = true;
                                };
                                Input.prototype.focus = function() {
                                    if (!this.isFocussed) this.element.focus();
                                };
                                Input.prototype.blur = function() {
                                    if (this.isFocussed) this.element.blur();
                                };
                                Input.prototype.clear = function(setWidth) {
                                    if (void 0 === setWidth) setWidth = true;
                                    if (this.element.value) this.element.value = "";
                                    if (setWidth) this.setWidth();
                                    return this;
                                };
                                Input.prototype.setWidth = function() {
                                    var _a = this.element, style = _a.style, value = _a.value, placeholder = _a.placeholder;
                                    style.minWidth = "".concat(placeholder.length + 1, "ch");
                                    style.width = "".concat(value.length + 1, "ch");
                                };
                                Input.prototype.setActiveDescendant = function(activeDescendantID) {
                                    this.element.setAttribute("aria-activedescendant", activeDescendantID);
                                };
                                Input.prototype.removeActiveDescendant = function() {
                                    this.element.removeAttribute("aria-activedescendant");
                                };
                                Input.prototype._onInput = function() {
                                    if (this.type !== constants_1.SELECT_ONE_TYPE) this.setWidth();
                                };
                                Input.prototype._onPaste = function(event) {
                                    if (this.preventPaste) event.preventDefault();
                                };
                                Input.prototype._onFocus = function() {
                                    this.isFocussed = true;
                                };
                                Input.prototype._onBlur = function() {
                                    this.isFocussed = false;
                                };
                                return Input;
                            }();
                            exports["default"] = Input;
                        },
                        624: function(__unused_webpack_module, exports, __nested_webpack_require_86550__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var constants_1 = __nested_webpack_require_86550__(883);
                            var List = function() {
                                function List(_a) {
                                    var element = _a.element;
                                    this.element = element;
                                    this.scrollPos = this.element.scrollTop;
                                    this.height = this.element.offsetHeight;
                                }
                                List.prototype.clear = function() {
                                    this.element.innerHTML = "";
                                };
                                List.prototype.append = function(node) {
                                    this.element.appendChild(node);
                                };
                                List.prototype.getChild = function(selector) {
                                    return this.element.querySelector(selector);
                                };
                                List.prototype.hasChildren = function() {
                                    return this.element.hasChildNodes();
                                };
                                List.prototype.scrollToTop = function() {
                                    this.element.scrollTop = 0;
                                };
                                List.prototype.scrollToChildElement = function(element, direction) {
                                    var _this = this;
                                    if (!element) return;
                                    var listHeight = this.element.offsetHeight;
                                    var listScrollPosition = this.element.scrollTop + listHeight;
                                    var elementHeight = element.offsetHeight;
                                    var elementPos = element.offsetTop + elementHeight;
                                    var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
                                    requestAnimationFrame((function() {
                                        _this._animateScroll(destination, direction);
                                    }));
                                };
                                List.prototype._scrollDown = function(scrollPos, strength, destination) {
                                    var easing = (destination - scrollPos) / strength;
                                    var distance = easing > 1 ? easing : 1;
                                    this.element.scrollTop = scrollPos + distance;
                                };
                                List.prototype._scrollUp = function(scrollPos, strength, destination) {
                                    var easing = (scrollPos - destination) / strength;
                                    var distance = easing > 1 ? easing : 1;
                                    this.element.scrollTop = scrollPos - distance;
                                };
                                List.prototype._animateScroll = function(destination, direction) {
                                    var _this = this;
                                    var strength = constants_1.SCROLLING_SPEED;
                                    var choiceListScrollTop = this.element.scrollTop;
                                    var continueAnimation = false;
                                    if (direction > 0) {
                                        this._scrollDown(choiceListScrollTop, strength, destination);
                                        if (choiceListScrollTop < destination) continueAnimation = true;
                                    } else {
                                        this._scrollUp(choiceListScrollTop, strength, destination);
                                        if (choiceListScrollTop > destination) continueAnimation = true;
                                    }
                                    if (continueAnimation) requestAnimationFrame((function() {
                                        _this._animateScroll(destination, direction);
                                    }));
                                };
                                return List;
                            }();
                            exports["default"] = List;
                        },
                        730: function(__unused_webpack_module, exports, __nested_webpack_require_89383__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var utils_1 = __nested_webpack_require_89383__(799);
                            var WrappedElement = function() {
                                function WrappedElement(_a) {
                                    var element = _a.element, classNames = _a.classNames;
                                    this.element = element;
                                    this.classNames = classNames;
                                    if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
                                    this.isDisabled = false;
                                }
                                Object.defineProperty(WrappedElement.prototype, "isActive", {
                                    get: function() {
                                        return "active" === this.element.dataset.choice;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedElement.prototype, "dir", {
                                    get: function() {
                                        return this.element.dir;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedElement.prototype, "value", {
                                    get: function() {
                                        return this.element.value;
                                    },
                                    set: function(value) {
                                        this.element.value = value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                WrappedElement.prototype.conceal = function() {
                                    this.element.classList.add(this.classNames.input);
                                    this.element.hidden = true;
                                    this.element.tabIndex = -1;
                                    var origStyle = this.element.getAttribute("style");
                                    if (origStyle) this.element.setAttribute("data-choice-orig-style", origStyle);
                                    this.element.setAttribute("data-choice", "active");
                                };
                                WrappedElement.prototype.reveal = function() {
                                    this.element.classList.remove(this.classNames.input);
                                    this.element.hidden = false;
                                    this.element.removeAttribute("tabindex");
                                    var origStyle = this.element.getAttribute("data-choice-orig-style");
                                    if (origStyle) {
                                        this.element.removeAttribute("data-choice-orig-style");
                                        this.element.setAttribute("style", origStyle);
                                    } else this.element.removeAttribute("style");
                                    this.element.removeAttribute("data-choice");
                                    this.element.value = this.element.value;
                                };
                                WrappedElement.prototype.enable = function() {
                                    this.element.removeAttribute("disabled");
                                    this.element.disabled = false;
                                    this.isDisabled = false;
                                };
                                WrappedElement.prototype.disable = function() {
                                    this.element.setAttribute("disabled", "");
                                    this.element.disabled = true;
                                    this.isDisabled = true;
                                };
                                WrappedElement.prototype.triggerEvent = function(eventType, data) {
                                    (0, utils_1.dispatchEvent)(this.element, eventType, data);
                                };
                                return WrappedElement;
                            }();
                            exports["default"] = WrappedElement;
                        },
                        541: function(__unused_webpack_module, exports, __nested_webpack_require_92462__) {
                            var __extends = this && this.__extends || function() {
                                var extendStatics = function(d, b) {
                                    extendStatics = Object.setPrototypeOf || {
                                        __proto__: []
                                    } instanceof Array && function(d, b) {
                                        d.__proto__ = b;
                                    } || function(d, b) {
                                        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                                    };
                                    return extendStatics(d, b);
                                };
                                return function(d, b) {
                                    if ("function" !== typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                                    extendStatics(d, b);
                                    function __() {
                                        this.constructor = d;
                                    }
                                    d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __);
                                };
                            }();
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var wrapped_element_1 = __importDefault(__nested_webpack_require_92462__(730));
                            var WrappedInput = function(_super) {
                                __extends(WrappedInput, _super);
                                function WrappedInput(_a) {
                                    var element = _a.element, classNames = _a.classNames, delimiter = _a.delimiter;
                                    var _this = _super.call(this, {
                                        element,
                                        classNames
                                    }) || this;
                                    _this.delimiter = delimiter;
                                    return _this;
                                }
                                Object.defineProperty(WrappedInput.prototype, "value", {
                                    get: function() {
                                        return this.element.value;
                                    },
                                    set: function(value) {
                                        this.element.setAttribute("value", value);
                                        this.element.value = value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                return WrappedInput;
                            }(wrapped_element_1.default);
                            exports["default"] = WrappedInput;
                        },
                        982: function(__unused_webpack_module, exports, __nested_webpack_require_94334__) {
                            var __extends = this && this.__extends || function() {
                                var extendStatics = function(d, b) {
                                    extendStatics = Object.setPrototypeOf || {
                                        __proto__: []
                                    } instanceof Array && function(d, b) {
                                        d.__proto__ = b;
                                    } || function(d, b) {
                                        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                                    };
                                    return extendStatics(d, b);
                                };
                                return function(d, b) {
                                    if ("function" !== typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                                    extendStatics(d, b);
                                    function __() {
                                        this.constructor = d;
                                    }
                                    d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __);
                                };
                            }();
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var wrapped_element_1 = __importDefault(__nested_webpack_require_94334__(730));
                            var WrappedSelect = function(_super) {
                                __extends(WrappedSelect, _super);
                                function WrappedSelect(_a) {
                                    var element = _a.element, classNames = _a.classNames, template = _a.template;
                                    var _this = _super.call(this, {
                                        element,
                                        classNames
                                    }) || this;
                                    _this.template = template;
                                    return _this;
                                }
                                Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
                                    get: function() {
                                        return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedSelect.prototype, "optionGroups", {
                                    get: function() {
                                        return Array.from(this.element.getElementsByTagName("OPTGROUP"));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedSelect.prototype, "options", {
                                    get: function() {
                                        return Array.from(this.element.options);
                                    },
                                    set: function(options) {
                                        var _this = this;
                                        var fragment = document.createDocumentFragment();
                                        var addOptionToFragment = function(data) {
                                            var option = _this.template(data);
                                            fragment.appendChild(option);
                                        };
                                        options.forEach((function(optionData) {
                                            return addOptionToFragment(optionData);
                                        }));
                                        this.appendDocFragment(fragment);
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                WrappedSelect.prototype.appendDocFragment = function(fragment) {
                                    this.element.innerHTML = "";
                                    this.element.appendChild(fragment);
                                };
                                return WrappedSelect;
                            }(wrapped_element_1.default);
                            exports["default"] = WrappedSelect;
                        },
                        883: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.SCROLLING_SPEED = exports.SELECT_MULTIPLE_TYPE = exports.SELECT_ONE_TYPE = exports.TEXT_TYPE = exports.KEY_CODES = exports.ACTION_TYPES = exports.EVENTS = void 0;
                            exports.EVENTS = {
                                showDropdown: "showDropdown",
                                hideDropdown: "hideDropdown",
                                change: "change",
                                choice: "choice",
                                search: "search",
                                addItem: "addItem",
                                removeItem: "removeItem",
                                highlightItem: "highlightItem",
                                highlightChoice: "highlightChoice",
                                unhighlightItem: "unhighlightItem"
                            };
                            exports.ACTION_TYPES = {
                                ADD_CHOICE: "ADD_CHOICE",
                                FILTER_CHOICES: "FILTER_CHOICES",
                                ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
                                CLEAR_CHOICES: "CLEAR_CHOICES",
                                ADD_GROUP: "ADD_GROUP",
                                ADD_ITEM: "ADD_ITEM",
                                REMOVE_ITEM: "REMOVE_ITEM",
                                HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
                                CLEAR_ALL: "CLEAR_ALL",
                                RESET_TO: "RESET_TO",
                                SET_IS_LOADING: "SET_IS_LOADING"
                            };
                            exports.KEY_CODES = {
                                BACK_KEY: 46,
                                DELETE_KEY: 8,
                                ENTER_KEY: 13,
                                A_KEY: 65,
                                ESC_KEY: 27,
                                UP_KEY: 38,
                                DOWN_KEY: 40,
                                PAGE_UP_KEY: 33,
                                PAGE_DOWN_KEY: 34
                            };
                            exports.TEXT_TYPE = "text";
                            exports.SELECT_ONE_TYPE = "select-one";
                            exports.SELECT_MULTIPLE_TYPE = "select-multiple";
                            exports.SCROLLING_SPEED = 4;
                        },
                        789: function(__unused_webpack_module, exports, __nested_webpack_require_98665__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.DEFAULT_CONFIG = exports.DEFAULT_CLASSNAMES = void 0;
                            var utils_1 = __nested_webpack_require_98665__(799);
                            exports.DEFAULT_CLASSNAMES = {
                                containerOuter: "choices",
                                containerInner: "choices__inner",
                                input: "choices__input",
                                inputCloned: "choices__input--cloned",
                                list: "choices__list",
                                listItems: "choices__list--multiple",
                                listSingle: "choices__list--single",
                                listDropdown: "choices__list--dropdown",
                                item: "choices__item",
                                itemSelectable: "choices__item--selectable",
                                itemDisabled: "choices__item--disabled",
                                itemChoice: "choices__item--choice",
                                placeholder: "choices__placeholder",
                                group: "choices__group",
                                groupHeading: "choices__heading",
                                button: "choices__button",
                                activeState: "is-active",
                                focusState: "is-focused",
                                openState: "is-open",
                                disabledState: "is-disabled",
                                highlightedState: "is-highlighted",
                                selectedState: "is-selected",
                                flippedState: "is-flipped",
                                loadingState: "is-loading",
                                noResults: "has-no-results",
                                noChoices: "has-no-choices"
                            };
                            exports.DEFAULT_CONFIG = {
                                items: [],
                                choices: [],
                                silent: false,
                                renderChoiceLimit: -1,
                                maxItemCount: -1,
                                addItems: true,
                                addItemFilter: null,
                                removeItems: true,
                                removeItemButton: false,
                                editItems: false,
                                allowHTML: true,
                                duplicateItemsAllowed: true,
                                delimiter: ",",
                                paste: true,
                                searchEnabled: true,
                                searchChoices: true,
                                searchFloor: 1,
                                searchResultLimit: 4,
                                searchFields: [ "label", "value" ],
                                position: "auto",
                                resetScrollPosition: true,
                                shouldSort: true,
                                shouldSortItems: false,
                                sorter: utils_1.sortByAlpha,
                                placeholder: true,
                                placeholderValue: null,
                                searchPlaceholderValue: null,
                                prependValue: null,
                                appendValue: null,
                                renderSelectedChoices: "auto",
                                loadingText: "Loading...",
                                noResultsText: "No results found",
                                noChoicesText: "No choices to choose from",
                                itemSelectText: "Press to select",
                                uniqueItemText: "Only unique values can be added",
                                customAddItemText: "Only values matching specific conditions can be added",
                                addItemText: function(value) {
                                    return 'Press Enter to add <b>"'.concat((0, utils_1.sanitise)(value), '"</b>');
                                },
                                maxItemText: function(maxItemCount) {
                                    return "Only ".concat(maxItemCount, " values can be added");
                                },
                                valueComparer: function(value1, value2) {
                                    return value1 === value2;
                                },
                                fuseOptions: {
                                    includeScore: true
                                },
                                labelId: "",
                                callbackOnInit: null,
                                callbackOnCreateTemplates: null,
                                classNames: exports.DEFAULT_CLASSNAMES
                            };
                        },
                        18: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        978: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        948: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        359: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        285: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        533: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        187: function(__unused_webpack_module, exports, __nested_webpack_require_102291__) {
                            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                                if (void 0 === k2) k2 = k;
                                Object.defineProperty(o, k2, {
                                    enumerable: true,
                                    get: function() {
                                        return m[k];
                                    }
                                });
                            } : function(o, m, k, k2) {
                                if (void 0 === k2) k2 = k;
                                o[k2] = m[k];
                            });
                            var __exportStar = this && this.__exportStar || function(m, exports) {
                                for (var p in m) if ("default" !== p && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            __exportStar(__nested_webpack_require_102291__(18), exports);
                            __exportStar(__nested_webpack_require_102291__(978), exports);
                            __exportStar(__nested_webpack_require_102291__(948), exports);
                            __exportStar(__nested_webpack_require_102291__(359), exports);
                            __exportStar(__nested_webpack_require_102291__(285), exports);
                            __exportStar(__nested_webpack_require_102291__(533), exports);
                            __exportStar(__nested_webpack_require_102291__(287), exports);
                            __exportStar(__nested_webpack_require_102291__(132), exports);
                            __exportStar(__nested_webpack_require_102291__(837), exports);
                            __exportStar(__nested_webpack_require_102291__(598), exports);
                            __exportStar(__nested_webpack_require_102291__(369), exports);
                            __exportStar(__nested_webpack_require_102291__(37), exports);
                            __exportStar(__nested_webpack_require_102291__(47), exports);
                            __exportStar(__nested_webpack_require_102291__(923), exports);
                            __exportStar(__nested_webpack_require_102291__(876), exports);
                        },
                        287: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        132: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        837: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        598: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        37: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        369: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        47: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        923: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        876: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        799: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.diff = exports.cloneObject = exports.existsInArray = exports.dispatchEvent = exports.sortByScore = exports.sortByAlpha = exports.strToEl = exports.sanitise = exports.isScrolledIntoView = exports.getAdjacentEl = exports.wrap = exports.isType = exports.getType = exports.generateId = exports.generateChars = exports.getRandomNumber = void 0;
                            var getRandomNumber = function(min, max) {
                                return Math.floor(Math.random() * (max - min) + min);
                            };
                            exports.getRandomNumber = getRandomNumber;
                            var generateChars = function(length) {
                                return Array.from({
                                    length
                                }, (function() {
                                    return (0, exports.getRandomNumber)(0, 36).toString(36);
                                })).join("");
                            };
                            exports.generateChars = generateChars;
                            var generateId = function(element, prefix) {
                                var id = element.id || element.name && "".concat(element.name, "-").concat((0, exports.generateChars)(2)) || (0, 
                                exports.generateChars)(4);
                                id = id.replace(/(:|\.|\[|\]|,)/g, "");
                                id = "".concat(prefix, "-").concat(id);
                                return id;
                            };
                            exports.generateId = generateId;
                            var getType = function(obj) {
                                return Object.prototype.toString.call(obj).slice(8, -1);
                            };
                            exports.getType = getType;
                            var isType = function(type, obj) {
                                return void 0 !== obj && null !== obj && (0, exports.getType)(obj) === type;
                            };
                            exports.isType = isType;
                            var wrap = function(element, wrapper) {
                                if (void 0 === wrapper) wrapper = document.createElement("div");
                                if (element.parentNode) if (element.nextSibling) element.parentNode.insertBefore(wrapper, element.nextSibling); else element.parentNode.appendChild(wrapper);
                                return wrapper.appendChild(element);
                            };
                            exports.wrap = wrap;
                            var getAdjacentEl = function(startEl, selector, direction) {
                                if (void 0 === direction) direction = 1;
                                var prop = "".concat(direction > 0 ? "next" : "previous", "ElementSibling");
                                var sibling = startEl[prop];
                                while (sibling) {
                                    if (sibling.matches(selector)) return sibling;
                                    sibling = sibling[prop];
                                }
                                return sibling;
                            };
                            exports.getAdjacentEl = getAdjacentEl;
                            var isScrolledIntoView = function(element, parent, direction) {
                                if (void 0 === direction) direction = 1;
                                if (!element) return false;
                                var isVisible;
                                if (direction > 0) isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight; else isVisible = element.offsetTop >= parent.scrollTop;
                                return isVisible;
                            };
                            exports.isScrolledIntoView = isScrolledIntoView;
                            var sanitise = function(value) {
                                if ("string" !== typeof value) return value;
                                return value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
                            };
                            exports.sanitise = sanitise;
                            exports.strToEl = function() {
                                var tmpEl = document.createElement("div");
                                return function(str) {
                                    var cleanedInput = str.trim();
                                    tmpEl.innerHTML = cleanedInput;
                                    var firldChild = tmpEl.children[0];
                                    while (tmpEl.firstChild) tmpEl.removeChild(tmpEl.firstChild);
                                    return firldChild;
                                };
                            }();
                            var sortByAlpha = function(_a, _b) {
                                var value = _a.value, _c = _a.label, label = void 0 === _c ? value : _c;
                                var value2 = _b.value, _d = _b.label, label2 = void 0 === _d ? value2 : _d;
                                return label.localeCompare(label2, [], {
                                    sensitivity: "base",
                                    ignorePunctuation: true,
                                    numeric: true
                                });
                            };
                            exports.sortByAlpha = sortByAlpha;
                            var sortByScore = function(a, b) {
                                var _a = a.score, scoreA = void 0 === _a ? 0 : _a;
                                var _b = b.score, scoreB = void 0 === _b ? 0 : _b;
                                return scoreA - scoreB;
                            };
                            exports.sortByScore = sortByScore;
                            var dispatchEvent = function(element, type, customArgs) {
                                if (void 0 === customArgs) customArgs = null;
                                var event = new CustomEvent(type, {
                                    detail: customArgs,
                                    bubbles: true,
                                    cancelable: true
                                });
                                return element.dispatchEvent(event);
                            };
                            exports.dispatchEvent = dispatchEvent;
                            var existsInArray = function(array, value, key) {
                                if (void 0 === key) key = "value";
                                return array.some((function(item) {
                                    if ("string" === typeof value) return item[key] === value.trim();
                                    return item[key] === value;
                                }));
                            };
                            exports.existsInArray = existsInArray;
                            var cloneObject = function(obj) {
                                return JSON.parse(JSON.stringify(obj));
                            };
                            exports.cloneObject = cloneObject;
                            var diff = function(a, b) {
                                var aKeys = Object.keys(a).sort();
                                var bKeys = Object.keys(b).sort();
                                return aKeys.filter((function(i) {
                                    return bKeys.indexOf(i) < 0;
                                }));
                            };
                            exports.diff = diff;
                        },
                        273: function(__unused_webpack_module, exports) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || 2 === arguments.length) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = [];
                            function choices(state, action) {
                                if (void 0 === state) state = exports.defaultState;
                                if (void 0 === action) action = {};
                                switch (action.type) {
                                  case "ADD_CHOICE":
                                    var addChoiceAction = action;
                                    var choice = {
                                        id: addChoiceAction.id,
                                        elementId: addChoiceAction.elementId,
                                        groupId: addChoiceAction.groupId,
                                        value: addChoiceAction.value,
                                        label: addChoiceAction.label || addChoiceAction.value,
                                        disabled: addChoiceAction.disabled || false,
                                        selected: false,
                                        active: true,
                                        score: 9999,
                                        customProperties: addChoiceAction.customProperties,
                                        placeholder: addChoiceAction.placeholder || false
                                    };
                                    return __spreadArray(__spreadArray([], state, true), [ choice ], false);

                                  case "ADD_ITEM":
                                    var addItemAction_1 = action;
                                    if (addItemAction_1.choiceId > -1) return state.map((function(obj) {
                                        var choice = obj;
                                        if (choice.id === parseInt("".concat(addItemAction_1.choiceId), 10)) choice.selected = true;
                                        return choice;
                                    }));
                                    return state;

                                  case "REMOVE_ITEM":
                                    var removeItemAction_1 = action;
                                    if (removeItemAction_1.choiceId && removeItemAction_1.choiceId > -1) return state.map((function(obj) {
                                        var choice = obj;
                                        if (choice.id === parseInt("".concat(removeItemAction_1.choiceId), 10)) choice.selected = false;
                                        return choice;
                                    }));
                                    return state;

                                  case "FILTER_CHOICES":
                                    var filterChoicesAction_1 = action;
                                    return state.map((function(obj) {
                                        var choice = obj;
                                        choice.active = filterChoicesAction_1.results.some((function(_a) {
                                            var item = _a.item, score = _a.score;
                                            if (item.id === choice.id) {
                                                choice.score = score;
                                                return true;
                                            }
                                            return false;
                                        }));
                                        return choice;
                                    }));

                                  case "ACTIVATE_CHOICES":
                                    var activateChoicesAction_1 = action;
                                    return state.map((function(obj) {
                                        var choice = obj;
                                        choice.active = activateChoicesAction_1.active;
                                        return choice;
                                    }));

                                  case "CLEAR_CHOICES":
                                    return exports.defaultState;

                                  default:
                                    return state;
                                }
                            }
                            exports["default"] = choices;
                        },
                        871: function(__unused_webpack_module, exports) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || 2 === arguments.length) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = [];
                            function groups(state, action) {
                                if (void 0 === state) state = exports.defaultState;
                                if (void 0 === action) action = {};
                                switch (action.type) {
                                  case "ADD_GROUP":
                                    var addGroupAction = action;
                                    return __spreadArray(__spreadArray([], state, true), [ {
                                        id: addGroupAction.id,
                                        value: addGroupAction.value,
                                        active: addGroupAction.active,
                                        disabled: addGroupAction.disabled
                                    } ], false);

                                  case "CLEAR_CHOICES":
                                    return [];

                                  default:
                                    return state;
                                }
                            }
                            exports["default"] = groups;
                        },
                        655: function(__unused_webpack_module, exports, __nested_webpack_require_114973__) {
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            var redux_1 = __nested_webpack_require_114973__(857);
                            var items_1 = __importDefault(__nested_webpack_require_114973__(52));
                            var groups_1 = __importDefault(__nested_webpack_require_114973__(871));
                            var choices_1 = __importDefault(__nested_webpack_require_114973__(273));
                            var loading_1 = __importDefault(__nested_webpack_require_114973__(502));
                            var utils_1 = __nested_webpack_require_114973__(799);
                            exports.defaultState = {
                                groups: [],
                                items: [],
                                choices: [],
                                loading: false
                            };
                            var appReducer = (0, redux_1.combineReducers)({
                                items: items_1.default,
                                groups: groups_1.default,
                                choices: choices_1.default,
                                loading: loading_1.default
                            });
                            var rootReducer = function(passedState, action) {
                                var state = passedState;
                                if ("CLEAR_ALL" === action.type) state = exports.defaultState; else if ("RESET_TO" === action.type) return (0, 
                                utils_1.cloneObject)(action.state);
                                return appReducer(state, action);
                            };
                            exports["default"] = rootReducer;
                        },
                        52: function(__unused_webpack_module, exports) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || 2 === arguments.length) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = [];
                            function items(state, action) {
                                if (void 0 === state) state = exports.defaultState;
                                if (void 0 === action) action = {};
                                switch (action.type) {
                                  case "ADD_ITEM":
                                    var addItemAction = action;
                                    var newState = __spreadArray(__spreadArray([], state, true), [ {
                                        id: addItemAction.id,
                                        choiceId: addItemAction.choiceId,
                                        groupId: addItemAction.groupId,
                                        value: addItemAction.value,
                                        label: addItemAction.label,
                                        active: true,
                                        highlighted: false,
                                        customProperties: addItemAction.customProperties,
                                        placeholder: addItemAction.placeholder || false,
                                        keyCode: null
                                    } ], false);
                                    return newState.map((function(obj) {
                                        var item = obj;
                                        item.highlighted = false;
                                        return item;
                                    }));

                                  case "REMOVE_ITEM":
                                    return state.map((function(obj) {
                                        var item = obj;
                                        if (item.id === action.id) item.active = false;
                                        return item;
                                    }));

                                  case "HIGHLIGHT_ITEM":
                                    var highlightItemAction_1 = action;
                                    return state.map((function(obj) {
                                        var item = obj;
                                        if (item.id === highlightItemAction_1.id) item.highlighted = highlightItemAction_1.highlighted;
                                        return item;
                                    }));

                                  default:
                                    return state;
                                }
                            }
                            exports["default"] = items;
                        },
                        502: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = false;
                            var general = function(state, action) {
                                if (void 0 === state) state = exports.defaultState;
                                if (void 0 === action) action = {};
                                switch (action.type) {
                                  case "SET_IS_LOADING":
                                    return action.isLoading;

                                  default:
                                    return state;
                                }
                            };
                            exports["default"] = general;
                        },
                        744: function(__unused_webpack_module, exports, __nested_webpack_require_119100__) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || 2 === arguments.length) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var redux_1 = __nested_webpack_require_119100__(857);
                            var index_1 = __importDefault(__nested_webpack_require_119100__(655));
                            var Store = function() {
                                function Store() {
                                    this._store = (0, redux_1.createStore)(index_1.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
                                }
                                Store.prototype.subscribe = function(onChange) {
                                    this._store.subscribe(onChange);
                                };
                                Store.prototype.dispatch = function(action) {
                                    this._store.dispatch(action);
                                };
                                Object.defineProperty(Store.prototype, "state", {
                                    get: function() {
                                        return this._store.getState();
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "items", {
                                    get: function() {
                                        return this.state.items;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "activeItems", {
                                    get: function() {
                                        return this.items.filter((function(item) {
                                            return true === item.active;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "highlightedActiveItems", {
                                    get: function() {
                                        return this.items.filter((function(item) {
                                            return item.active && item.highlighted;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "choices", {
                                    get: function() {
                                        return this.state.choices;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "activeChoices", {
                                    get: function() {
                                        return this.choices.filter((function(choice) {
                                            return true === choice.active;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "selectableChoices", {
                                    get: function() {
                                        return this.choices.filter((function(choice) {
                                            return true !== choice.disabled;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "searchableChoices", {
                                    get: function() {
                                        return this.selectableChoices.filter((function(choice) {
                                            return true !== choice.placeholder;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "placeholderChoice", {
                                    get: function() {
                                        return __spreadArray([], this.choices, true).reverse().find((function(choice) {
                                            return true === choice.placeholder;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "groups", {
                                    get: function() {
                                        return this.state.groups;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "activeGroups", {
                                    get: function() {
                                        var _a = this, groups = _a.groups, choices = _a.choices;
                                        return groups.filter((function(group) {
                                            var isActive = true === group.active && false === group.disabled;
                                            var hasActiveOptions = choices.some((function(choice) {
                                                return true === choice.active && false === choice.disabled;
                                            }));
                                            return isActive && hasActiveOptions;
                                        }), []);
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Store.prototype.isLoading = function() {
                                    return this.state.loading;
                                };
                                Store.prototype.getChoiceById = function(id) {
                                    return this.activeChoices.find((function(choice) {
                                        return choice.id === parseInt(id, 10);
                                    }));
                                };
                                Store.prototype.getGroupById = function(id) {
                                    return this.groups.find((function(group) {
                                        return group.id === id;
                                    }));
                                };
                                return Store;
                            }();
                            exports["default"] = Store;
                        },
                        686: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var templates = {
                                containerOuter: function(_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
                                    var containerOuter = _a.classNames.containerOuter;
                                    var div = Object.assign(document.createElement("div"), {
                                        className: containerOuter
                                    });
                                    div.dataset.type = passedElementType;
                                    if (dir) div.dir = dir;
                                    if (isSelectOneElement) div.tabIndex = 0;
                                    if (isSelectElement) {
                                        div.setAttribute("role", searchEnabled ? "combobox" : "listbox");
                                        if (searchEnabled) div.setAttribute("aria-autocomplete", "list");
                                    }
                                    div.setAttribute("aria-haspopup", "true");
                                    div.setAttribute("aria-expanded", "false");
                                    if (labelId) div.setAttribute("aria-labeledby", labelId);
                                    return div;
                                },
                                containerInner: function(_a) {
                                    var containerInner = _a.classNames.containerInner;
                                    return Object.assign(document.createElement("div"), {
                                        className: containerInner
                                    });
                                },
                                itemList: function(_a, isSelectOneElement) {
                                    var _b = _a.classNames, list = _b.list, listSingle = _b.listSingle, listItems = _b.listItems;
                                    return Object.assign(document.createElement("div"), {
                                        className: "".concat(list, " ").concat(isSelectOneElement ? listSingle : listItems)
                                    });
                                },
                                placeholder: function(_a, value) {
                                    var _b;
                                    var allowHTML = _a.allowHTML, placeholder = _a.classNames.placeholder;
                                    return Object.assign(document.createElement("div"), (_b = {
                                        className: placeholder
                                    }, _b[allowHTML ? "innerHTML" : "innerText"] = value, _b));
                                },
                                item: function(_a, _b, removeItemButton) {
                                    var _c, _d;
                                    var allowHTML = _a.allowHTML, _e = _a.classNames, item = _e.item, button = _e.button, highlightedState = _e.highlightedState, itemSelectable = _e.itemSelectable, placeholder = _e.placeholder;
                                    var id = _b.id, value = _b.value, label = _b.label, customProperties = _b.customProperties, active = _b.active, disabled = _b.disabled, highlighted = _b.highlighted, isPlaceholder = _b.placeholder;
                                    var div = Object.assign(document.createElement("div"), (_c = {
                                        className: item
                                    }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c));
                                    Object.assign(div.dataset, {
                                        item: "",
                                        id,
                                        value,
                                        customProperties
                                    });
                                    if (active) div.setAttribute("aria-selected", "true");
                                    if (disabled) div.setAttribute("aria-disabled", "true");
                                    if (isPlaceholder) div.classList.add(placeholder);
                                    div.classList.add(highlighted ? highlightedState : itemSelectable);
                                    if (removeItemButton) {
                                        if (disabled) div.classList.remove(itemSelectable);
                                        div.dataset.deletable = "";
                                        var REMOVE_ITEM_TEXT = "Remove item";
                                        var removeButton = Object.assign(document.createElement("button"), (_d = {
                                            type: "button",
                                            className: button
                                        }, _d[allowHTML ? "innerHTML" : "innerText"] = REMOVE_ITEM_TEXT, _d));
                                        removeButton.setAttribute("aria-label", "".concat(REMOVE_ITEM_TEXT, ": '").concat(value, "'"));
                                        removeButton.dataset.button = "";
                                        div.appendChild(removeButton);
                                    }
                                    return div;
                                },
                                choiceList: function(_a, isSelectOneElement) {
                                    var list = _a.classNames.list;
                                    var div = Object.assign(document.createElement("div"), {
                                        className: list
                                    });
                                    if (!isSelectOneElement) div.setAttribute("aria-multiselectable", "true");
                                    div.setAttribute("role", "listbox");
                                    return div;
                                },
                                choiceGroup: function(_a, _b) {
                                    var _c;
                                    var allowHTML = _a.allowHTML, _d = _a.classNames, group = _d.group, groupHeading = _d.groupHeading, itemDisabled = _d.itemDisabled;
                                    var id = _b.id, value = _b.value, disabled = _b.disabled;
                                    var div = Object.assign(document.createElement("div"), {
                                        className: "".concat(group, " ").concat(disabled ? itemDisabled : "")
                                    });
                                    div.setAttribute("role", "group");
                                    Object.assign(div.dataset, {
                                        group: "",
                                        id,
                                        value
                                    });
                                    if (disabled) div.setAttribute("aria-disabled", "true");
                                    div.appendChild(Object.assign(document.createElement("div"), (_c = {
                                        className: groupHeading
                                    }, _c[allowHTML ? "innerHTML" : "innerText"] = value, _c)));
                                    return div;
                                },
                                choice: function(_a, _b, selectText) {
                                    var _c;
                                    var allowHTML = _a.allowHTML, _d = _a.classNames, item = _d.item, itemChoice = _d.itemChoice, itemSelectable = _d.itemSelectable, selectedState = _d.selectedState, itemDisabled = _d.itemDisabled, placeholder = _d.placeholder;
                                    var id = _b.id, value = _b.value, label = _b.label, groupId = _b.groupId, elementId = _b.elementId, isDisabled = _b.disabled, isSelected = _b.selected, isPlaceholder = _b.placeholder;
                                    var div = Object.assign(document.createElement("div"), (_c = {
                                        id: elementId
                                    }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c.className = "".concat(item, " ").concat(itemChoice), 
                                    _c));
                                    if (isSelected) div.classList.add(selectedState);
                                    if (isPlaceholder) div.classList.add(placeholder);
                                    div.setAttribute("role", groupId && groupId > 0 ? "treeitem" : "option");
                                    Object.assign(div.dataset, {
                                        choice: "",
                                        id,
                                        value,
                                        selectText
                                    });
                                    if (isDisabled) {
                                        div.classList.add(itemDisabled);
                                        div.dataset.choiceDisabled = "";
                                        div.setAttribute("aria-disabled", "true");
                                    } else {
                                        div.classList.add(itemSelectable);
                                        div.dataset.choiceSelectable = "";
                                    }
                                    return div;
                                },
                                input: function(_a, placeholderValue) {
                                    var _b = _a.classNames, input = _b.input, inputCloned = _b.inputCloned;
                                    var inp = Object.assign(document.createElement("input"), {
                                        type: "search",
                                        name: "search_terms",
                                        className: "".concat(input, " ").concat(inputCloned),
                                        autocomplete: "off",
                                        autocapitalize: "off",
                                        spellcheck: false
                                    });
                                    inp.setAttribute("role", "textbox");
                                    inp.setAttribute("aria-autocomplete", "list");
                                    inp.setAttribute("aria-label", placeholderValue);
                                    return inp;
                                },
                                dropdown: function(_a) {
                                    var _b = _a.classNames, list = _b.list, listDropdown = _b.listDropdown;
                                    var div = document.createElement("div");
                                    div.classList.add(list, listDropdown);
                                    div.setAttribute("aria-expanded", "false");
                                    return div;
                                },
                                notice: function(_a, innerText, type) {
                                    var _b;
                                    var allowHTML = _a.allowHTML, _c = _a.classNames, item = _c.item, itemChoice = _c.itemChoice, noResults = _c.noResults, noChoices = _c.noChoices;
                                    if (void 0 === type) type = "";
                                    var classes = [ item, itemChoice ];
                                    if ("no-choices" === type) classes.push(noChoices); else if ("no-results" === type) classes.push(noResults);
                                    return Object.assign(document.createElement("div"), (_b = {}, _b[allowHTML ? "innerHTML" : "innerText"] = innerText, 
                                    _b.className = classes.join(" "), _b));
                                },
                                option: function(_a) {
                                    var label = _a.label, value = _a.value, customProperties = _a.customProperties, active = _a.active, disabled = _a.disabled;
                                    var opt = new Option(label, value, false, active);
                                    if (customProperties) opt.dataset.customProperties = "".concat(customProperties);
                                    opt.disabled = !!disabled;
                                    return opt;
                                }
                            };
                            exports["default"] = templates;
                        },
                        996: function(module) {
                            var isMergeableObject = function isMergeableObject(value) {
                                return isNonNullObject(value) && !isSpecial(value);
                            };
                            function isNonNullObject(value) {
                                return !!value && "object" === typeof value;
                            }
                            function isSpecial(value) {
                                var stringValue = Object.prototype.toString.call(value);
                                return "[object RegExp]" === stringValue || "[object Date]" === stringValue || isReactElement(value);
                            }
                            var canUseSymbol = "function" === typeof Symbol && Symbol.for;
                            var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
                            function isReactElement(value) {
                                return value.$$typeof === REACT_ELEMENT_TYPE;
                            }
                            function emptyTarget(val) {
                                return Array.isArray(val) ? [] : {};
                            }
                            function cloneUnlessOtherwiseSpecified(value, options) {
                                return false !== options.clone && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
                            }
                            function defaultArrayMerge(target, source, options) {
                                return target.concat(source).map((function(element) {
                                    return cloneUnlessOtherwiseSpecified(element, options);
                                }));
                            }
                            function getMergeFunction(key, options) {
                                if (!options.customMerge) return deepmerge;
                                var customMerge = options.customMerge(key);
                                return "function" === typeof customMerge ? customMerge : deepmerge;
                            }
                            function getEnumerableOwnPropertySymbols(target) {
                                return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter((function(symbol) {
                                    return target.propertyIsEnumerable(symbol);
                                })) : [];
                            }
                            function getKeys(target) {
                                return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
                            }
                            function propertyIsOnObject(object, property) {
                                try {
                                    return property in object;
                                } catch (_) {
                                    return false;
                                }
                            }
                            function propertyIsUnsafe(target, key) {
                                return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
                            }
                            function mergeObject(target, source, options) {
                                var destination = {};
                                if (options.isMergeableObject(target)) getKeys(target).forEach((function(key) {
                                    destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                                }));
                                getKeys(source).forEach((function(key) {
                                    if (propertyIsUnsafe(target, key)) return;
                                    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options); else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                                }));
                                return destination;
                            }
                            function deepmerge(target, source, options) {
                                options = options || {};
                                options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                                options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                                options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                                var sourceIsArray = Array.isArray(source);
                                var targetIsArray = Array.isArray(target);
                                var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
                                if (!sourceAndTargetTypesMatch) return cloneUnlessOtherwiseSpecified(source, options); else if (sourceIsArray) return options.arrayMerge(target, source, options); else return mergeObject(target, source, options);
                            }
                            deepmerge.all = function deepmergeAll(array, options) {
                                if (!Array.isArray(array)) throw new Error("first argument should be an array");
                                return array.reduce((function(prev, next) {
                                    return deepmerge(prev, next, options);
                                }), {});
                            };
                            var deepmerge_1 = deepmerge;
                            module.exports = deepmerge_1;
                        },
                        221: function(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_136676__) {
                            __nested_webpack_require_136676__.r(__webpack_exports__);
                            __nested_webpack_require_136676__.d(__webpack_exports__, {
                                default: function() {
                                    return Fuse;
                                }
                            });
                            function isArray(value) {
                                return !Array.isArray ? "[object Array]" === getTag(value) : Array.isArray(value);
                            }
                            const INFINITY = 1 / 0;
                            function baseToString(value) {
                                if ("string" == typeof value) return value;
                                let result = value + "";
                                return "0" == result && 1 / value == -INFINITY ? "-0" : result;
                            }
                            function toString(value) {
                                return null == value ? "" : baseToString(value);
                            }
                            function isString(value) {
                                return "string" === typeof value;
                            }
                            function isNumber(value) {
                                return "number" === typeof value;
                            }
                            function isBoolean(value) {
                                return true === value || false === value || isObjectLike(value) && "[object Boolean]" == getTag(value);
                            }
                            function isObject(value) {
                                return "object" === typeof value;
                            }
                            function isObjectLike(value) {
                                return isObject(value) && null !== value;
                            }
                            function isDefined(value) {
                                return void 0 !== value && null !== value;
                            }
                            function isBlank(value) {
                                return !value.trim().length;
                            }
                            function getTag(value) {
                                return null == value ? void 0 === value ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
                            }
                            const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
                            const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = key => `Invalid value for key ${key}`;
                            const PATTERN_LENGTH_TOO_LARGE = max => `Pattern length exceeds max of ${max}.`;
                            const MISSING_KEY_PROPERTY = name => `Missing ${name} property in key`;
                            const INVALID_KEY_WEIGHT_VALUE = key => `Property 'weight' in key '${key}' must be a positive integer`;
                            const hasOwn = Object.prototype.hasOwnProperty;
                            class KeyStore {
                                constructor(keys) {
                                    this._keys = [];
                                    this._keyMap = {};
                                    let totalWeight = 0;
                                    keys.forEach((key => {
                                        let obj = createKey(key);
                                        totalWeight += obj.weight;
                                        this._keys.push(obj);
                                        this._keyMap[obj.id] = obj;
                                        totalWeight += obj.weight;
                                    }));
                                    this._keys.forEach((key => {
                                        key.weight /= totalWeight;
                                    }));
                                }
                                get(keyId) {
                                    return this._keyMap[keyId];
                                }
                                keys() {
                                    return this._keys;
                                }
                                toJSON() {
                                    return JSON.stringify(this._keys);
                                }
                            }
                            function createKey(key) {
                                let path = null;
                                let id = null;
                                let src = null;
                                let weight = 1;
                                if (isString(key) || isArray(key)) {
                                    src = key;
                                    path = createKeyPath(key);
                                    id = createKeyId(key);
                                } else {
                                    if (!hasOwn.call(key, "name")) throw new Error(MISSING_KEY_PROPERTY("name"));
                                    const name = key.name;
                                    src = name;
                                    if (hasOwn.call(key, "weight")) {
                                        weight = key.weight;
                                        if (weight <= 0) throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
                                    }
                                    path = createKeyPath(name);
                                    id = createKeyId(name);
                                }
                                return {
                                    path,
                                    id,
                                    weight,
                                    src
                                };
                            }
                            function createKeyPath(key) {
                                return isArray(key) ? key : key.split(".");
                            }
                            function createKeyId(key) {
                                return isArray(key) ? key.join(".") : key;
                            }
                            function get(obj, path) {
                                let list = [];
                                let arr = false;
                                const deepGet = (obj, path, index) => {
                                    if (!isDefined(obj)) return;
                                    if (!path[index]) list.push(obj); else {
                                        let key = path[index];
                                        const value = obj[key];
                                        if (!isDefined(value)) return;
                                        if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) list.push(toString(value)); else if (isArray(value)) {
                                            arr = true;
                                            for (let i = 0, len = value.length; i < len; i += 1) deepGet(value[i], path, index + 1);
                                        } else if (path.length) deepGet(value, path, index + 1);
                                    }
                                };
                                deepGet(obj, isString(path) ? path.split(".") : path, 0);
                                return arr ? list : list[0];
                            }
                            const MatchOptions = {
                                includeMatches: false,
                                findAllMatches: false,
                                minMatchCharLength: 1
                            };
                            const BasicOptions = {
                                isCaseSensitive: false,
                                includeScore: false,
                                keys: [],
                                shouldSort: true,
                                sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
                            };
                            const FuzzyOptions = {
                                location: 0,
                                threshold: .6,
                                distance: 100
                            };
                            const AdvancedOptions = {
                                useExtendedSearch: false,
                                getFn: get,
                                ignoreLocation: false,
                                ignoreFieldNorm: false,
                                fieldNormWeight: 1
                            };
                            var Config = {
                                ...BasicOptions,
                                ...MatchOptions,
                                ...FuzzyOptions,
                                ...AdvancedOptions
                            };
                            const SPACE = /[^ ]+/g;
                            function norm(weight = 1, mantissa = 3) {
                                const cache = new Map;
                                const m = Math.pow(10, mantissa);
                                return {
                                    get(value) {
                                        const numTokens = value.match(SPACE).length;
                                        if (cache.has(numTokens)) return cache.get(numTokens);
                                        const norm = 1 / Math.pow(numTokens, .5 * weight);
                                        const n = parseFloat(Math.round(norm * m) / m);
                                        cache.set(numTokens, n);
                                        return n;
                                    },
                                    clear() {
                                        cache.clear();
                                    }
                                };
                            }
                            class FuseIndex {
                                constructor({getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight} = {}) {
                                    this.norm = norm(fieldNormWeight, 3);
                                    this.getFn = getFn;
                                    this.isCreated = false;
                                    this.setIndexRecords();
                                }
                                setSources(docs = []) {
                                    this.docs = docs;
                                }
                                setIndexRecords(records = []) {
                                    this.records = records;
                                }
                                setKeys(keys = []) {
                                    this.keys = keys;
                                    this._keysMap = {};
                                    keys.forEach(((key, idx) => {
                                        this._keysMap[key.id] = idx;
                                    }));
                                }
                                create() {
                                    if (this.isCreated || !this.docs.length) return;
                                    this.isCreated = true;
                                    if (isString(this.docs[0])) this.docs.forEach(((doc, docIndex) => {
                                        this._addString(doc, docIndex);
                                    })); else this.docs.forEach(((doc, docIndex) => {
                                        this._addObject(doc, docIndex);
                                    }));
                                    this.norm.clear();
                                }
                                add(doc) {
                                    const idx = this.size();
                                    if (isString(doc)) this._addString(doc, idx); else this._addObject(doc, idx);
                                }
                                removeAt(idx) {
                                    this.records.splice(idx, 1);
                                    for (let i = idx, len = this.size(); i < len; i += 1) this.records[i].i -= 1;
                                }
                                getValueForItemAtKeyId(item, keyId) {
                                    return item[this._keysMap[keyId]];
                                }
                                size() {
                                    return this.records.length;
                                }
                                _addString(doc, docIndex) {
                                    if (!isDefined(doc) || isBlank(doc)) return;
                                    let record = {
                                        v: doc,
                                        i: docIndex,
                                        n: this.norm.get(doc)
                                    };
                                    this.records.push(record);
                                }
                                _addObject(doc, docIndex) {
                                    let record = {
                                        i: docIndex,
                                        $: {}
                                    };
                                    this.keys.forEach(((key, keyIndex) => {
                                        let value = this.getFn(doc, key.path);
                                        if (!isDefined(value)) return;
                                        if (isArray(value)) {
                                            let subRecords = [];
                                            const stack = [ {
                                                nestedArrIndex: -1,
                                                value
                                            } ];
                                            while (stack.length) {
                                                const {nestedArrIndex, value} = stack.pop();
                                                if (!isDefined(value)) continue;
                                                if (isString(value) && !isBlank(value)) {
                                                    let subRecord = {
                                                        v: value,
                                                        i: nestedArrIndex,
                                                        n: this.norm.get(value)
                                                    };
                                                    subRecords.push(subRecord);
                                                } else if (isArray(value)) value.forEach(((item, k) => {
                                                    stack.push({
                                                        nestedArrIndex: k,
                                                        value: item
                                                    });
                                                }));
                                            }
                                            record.$[keyIndex] = subRecords;
                                        } else if (!isBlank(value)) {
                                            let subRecord = {
                                                v: value,
                                                n: this.norm.get(value)
                                            };
                                            record.$[keyIndex] = subRecord;
                                        }
                                    }));
                                    this.records.push(record);
                                }
                                toJSON() {
                                    return {
                                        keys: this.keys,
                                        records: this.records
                                    };
                                }
                            }
                            function createIndex(keys, docs, {getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight} = {}) {
                                const myIndex = new FuseIndex({
                                    getFn,
                                    fieldNormWeight
                                });
                                myIndex.setKeys(keys.map(createKey));
                                myIndex.setSources(docs);
                                myIndex.create();
                                return myIndex;
                            }
                            function parseIndex(data, {getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight} = {}) {
                                const {keys, records} = data;
                                const myIndex = new FuseIndex({
                                    getFn,
                                    fieldNormWeight
                                });
                                myIndex.setKeys(keys);
                                myIndex.setIndexRecords(records);
                                return myIndex;
                            }
                            function computeScore$1(pattern, {errors = 0, currentLocation = 0, expectedLocation = 0, distance = Config.distance, ignoreLocation = Config.ignoreLocation} = {}) {
                                const accuracy = errors / pattern.length;
                                if (ignoreLocation) return accuracy;
                                const proximity = Math.abs(expectedLocation - currentLocation);
                                if (!distance) return proximity ? 1 : accuracy;
                                return accuracy + proximity / distance;
                            }
                            function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
                                let indices = [];
                                let start = -1;
                                let end = -1;
                                let i = 0;
                                for (let len = matchmask.length; i < len; i += 1) {
                                    let match = matchmask[i];
                                    if (match && -1 === start) start = i; else if (!match && -1 !== start) {
                                        end = i - 1;
                                        if (end - start + 1 >= minMatchCharLength) indices.push([ start, end ]);
                                        start = -1;
                                    }
                                }
                                if (matchmask[i - 1] && i - start >= minMatchCharLength) indices.push([ start, i - 1 ]);
                                return indices;
                            }
                            const MAX_BITS = 32;
                            function search(text, pattern, patternAlphabet, {location = Config.location, distance = Config.distance, threshold = Config.threshold, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, includeMatches = Config.includeMatches, ignoreLocation = Config.ignoreLocation} = {}) {
                                if (pattern.length > MAX_BITS) throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
                                const patternLen = pattern.length;
                                const textLen = text.length;
                                const expectedLocation = Math.max(0, Math.min(location, textLen));
                                let currentThreshold = threshold;
                                let bestLocation = expectedLocation;
                                const computeMatches = minMatchCharLength > 1 || includeMatches;
                                const matchMask = computeMatches ? Array(textLen) : [];
                                let index;
                                while ((index = text.indexOf(pattern, bestLocation)) > -1) {
                                    let score = computeScore$1(pattern, {
                                        currentLocation: index,
                                        expectedLocation,
                                        distance,
                                        ignoreLocation
                                    });
                                    currentThreshold = Math.min(score, currentThreshold);
                                    bestLocation = index + patternLen;
                                    if (computeMatches) {
                                        let i = 0;
                                        while (i < patternLen) {
                                            matchMask[index + i] = 1;
                                            i += 1;
                                        }
                                    }
                                }
                                bestLocation = -1;
                                let lastBitArr = [];
                                let finalScore = 1;
                                let binMax = patternLen + textLen;
                                const mask = 1 << patternLen - 1;
                                for (let i = 0; i < patternLen; i += 1) {
                                    let binMin = 0;
                                    let binMid = binMax;
                                    while (binMin < binMid) {
                                        const score = computeScore$1(pattern, {
                                            errors: i,
                                            currentLocation: expectedLocation + binMid,
                                            expectedLocation,
                                            distance,
                                            ignoreLocation
                                        });
                                        if (score <= currentThreshold) binMin = binMid; else binMax = binMid;
                                        binMid = Math.floor((binMax - binMin) / 2 + binMin);
                                    }
                                    binMax = binMid;
                                    let start = Math.max(1, expectedLocation - binMid + 1);
                                    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
                                    let bitArr = Array(finish + 2);
                                    bitArr[finish + 1] = (1 << i) - 1;
                                    for (let j = finish; j >= start; j -= 1) {
                                        let currentLocation = j - 1;
                                        let charMatch = patternAlphabet[text.charAt(currentLocation)];
                                        if (computeMatches) matchMask[currentLocation] = +!!charMatch;
                                        bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
                                        if (i) bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
                                        if (bitArr[j] & mask) {
                                            finalScore = computeScore$1(pattern, {
                                                errors: i,
                                                currentLocation,
                                                expectedLocation,
                                                distance,
                                                ignoreLocation
                                            });
                                            if (finalScore <= currentThreshold) {
                                                currentThreshold = finalScore;
                                                bestLocation = currentLocation;
                                                if (bestLocation <= expectedLocation) break;
                                                start = Math.max(1, 2 * expectedLocation - bestLocation);
                                            }
                                        }
                                    }
                                    const score = computeScore$1(pattern, {
                                        errors: i + 1,
                                        currentLocation: expectedLocation,
                                        expectedLocation,
                                        distance,
                                        ignoreLocation
                                    });
                                    if (score > currentThreshold) break;
                                    lastBitArr = bitArr;
                                }
                                const result = {
                                    isMatch: bestLocation >= 0,
                                    score: Math.max(.001, finalScore)
                                };
                                if (computeMatches) {
                                    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
                                    if (!indices.length) result.isMatch = false; else if (includeMatches) result.indices = indices;
                                }
                                return result;
                            }
                            function createPatternAlphabet(pattern) {
                                let mask = {};
                                for (let i = 0, len = pattern.length; i < len; i += 1) {
                                    const char = pattern.charAt(i);
                                    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
                                }
                                return mask;
                            }
                            class BitapSearch {
                                constructor(pattern, {location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreLocation = Config.ignoreLocation} = {}) {
                                    this.options = {
                                        location,
                                        threshold,
                                        distance,
                                        includeMatches,
                                        findAllMatches,
                                        minMatchCharLength,
                                        isCaseSensitive,
                                        ignoreLocation
                                    };
                                    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                                    this.chunks = [];
                                    if (!this.pattern.length) return;
                                    const addChunk = (pattern, startIndex) => {
                                        this.chunks.push({
                                            pattern,
                                            alphabet: createPatternAlphabet(pattern),
                                            startIndex
                                        });
                                    };
                                    const len = this.pattern.length;
                                    if (len > MAX_BITS) {
                                        let i = 0;
                                        const remainder = len % MAX_BITS;
                                        const end = len - remainder;
                                        while (i < end) {
                                            addChunk(this.pattern.substr(i, MAX_BITS), i);
                                            i += MAX_BITS;
                                        }
                                        if (remainder) {
                                            const startIndex = len - MAX_BITS;
                                            addChunk(this.pattern.substr(startIndex), startIndex);
                                        }
                                    } else addChunk(this.pattern, 0);
                                }
                                searchIn(text) {
                                    const {isCaseSensitive, includeMatches} = this.options;
                                    if (!isCaseSensitive) text = text.toLowerCase();
                                    if (this.pattern === text) {
                                        let result = {
                                            isMatch: true,
                                            score: 0
                                        };
                                        if (includeMatches) result.indices = [ [ 0, text.length - 1 ] ];
                                        return result;
                                    }
                                    const {location, distance, threshold, findAllMatches, minMatchCharLength, ignoreLocation} = this.options;
                                    let allIndices = [];
                                    let totalScore = 0;
                                    let hasMatches = false;
                                    this.chunks.forEach((({pattern, alphabet, startIndex}) => {
                                        const {isMatch, score, indices} = search(text, pattern, alphabet, {
                                            location: location + startIndex,
                                            distance,
                                            threshold,
                                            findAllMatches,
                                            minMatchCharLength,
                                            includeMatches,
                                            ignoreLocation
                                        });
                                        if (isMatch) hasMatches = true;
                                        totalScore += score;
                                        if (isMatch && indices) allIndices = [ ...allIndices, ...indices ];
                                    }));
                                    let result = {
                                        isMatch: hasMatches,
                                        score: hasMatches ? totalScore / this.chunks.length : 1
                                    };
                                    if (hasMatches && includeMatches) result.indices = allIndices;
                                    return result;
                                }
                            }
                            class BaseMatch {
                                constructor(pattern) {
                                    this.pattern = pattern;
                                }
                                static isMultiMatch(pattern) {
                                    return getMatch(pattern, this.multiRegex);
                                }
                                static isSingleMatch(pattern) {
                                    return getMatch(pattern, this.singleRegex);
                                }
                                search() {}
                            }
                            function getMatch(pattern, exp) {
                                const matches = pattern.match(exp);
                                return matches ? matches[1] : null;
                            }
                            class ExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "exact";
                                }
                                static get multiRegex() {
                                    return /^="(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^=(.*)$/;
                                }
                                search(text) {
                                    const isMatch = text === this.pattern;
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, this.pattern.length - 1 ]
                                    };
                                }
                            }
                            class InverseExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "inverse-exact";
                                }
                                static get multiRegex() {
                                    return /^!"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^!(.*)$/;
                                }
                                search(text) {
                                    const index = text.indexOf(this.pattern);
                                    const isMatch = -1 === index;
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, text.length - 1 ]
                                    };
                                }
                            }
                            class PrefixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "prefix-exact";
                                }
                                static get multiRegex() {
                                    return /^\^"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^\^(.*)$/;
                                }
                                search(text) {
                                    const isMatch = text.startsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, this.pattern.length - 1 ]
                                    };
                                }
                            }
                            class InversePrefixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "inverse-prefix-exact";
                                }
                                static get multiRegex() {
                                    return /^!\^"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^!\^(.*)$/;
                                }
                                search(text) {
                                    const isMatch = !text.startsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, text.length - 1 ]
                                    };
                                }
                            }
                            class SuffixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "suffix-exact";
                                }
                                static get multiRegex() {
                                    return /^"(.*)"\$$/;
                                }
                                static get singleRegex() {
                                    return /^(.*)\$$/;
                                }
                                search(text) {
                                    const isMatch = text.endsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ text.length - this.pattern.length, text.length - 1 ]
                                    };
                                }
                            }
                            class InverseSuffixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "inverse-suffix-exact";
                                }
                                static get multiRegex() {
                                    return /^!"(.*)"\$$/;
                                }
                                static get singleRegex() {
                                    return /^!(.*)\$$/;
                                }
                                search(text) {
                                    const isMatch = !text.endsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, text.length - 1 ]
                                    };
                                }
                            }
                            class FuzzyMatch extends BaseMatch {
                                constructor(pattern, {location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreLocation = Config.ignoreLocation} = {}) {
                                    super(pattern);
                                    this._bitapSearch = new BitapSearch(pattern, {
                                        location,
                                        threshold,
                                        distance,
                                        includeMatches,
                                        findAllMatches,
                                        minMatchCharLength,
                                        isCaseSensitive,
                                        ignoreLocation
                                    });
                                }
                                static get type() {
                                    return "fuzzy";
                                }
                                static get multiRegex() {
                                    return /^"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^(.*)$/;
                                }
                                search(text) {
                                    return this._bitapSearch.searchIn(text);
                                }
                            }
                            class IncludeMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "include";
                                }
                                static get multiRegex() {
                                    return /^'"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^'(.*)$/;
                                }
                                search(text) {
                                    let location = 0;
                                    let index;
                                    const indices = [];
                                    const patternLen = this.pattern.length;
                                    while ((index = text.indexOf(this.pattern, location)) > -1) {
                                        location = index + patternLen;
                                        indices.push([ index, location - 1 ]);
                                    }
                                    const isMatch = !!indices.length;
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices
                                    };
                                }
                            }
                            const searchers = [ ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch ];
                            const searchersLen = searchers.length;
                            const SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
                            const OR_TOKEN = "|";
                            function parseQuery(pattern, options = {}) {
                                return pattern.split(OR_TOKEN).map((item => {
                                    let query = item.trim().split(SPACE_RE).filter((item => item && !!item.trim()));
                                    let results = [];
                                    for (let i = 0, len = query.length; i < len; i += 1) {
                                        const queryItem = query[i];
                                        let found = false;
                                        let idx = -1;
                                        while (!found && ++idx < searchersLen) {
                                            const searcher = searchers[idx];
                                            let token = searcher.isMultiMatch(queryItem);
                                            if (token) {
                                                results.push(new searcher(token, options));
                                                found = true;
                                            }
                                        }
                                        if (found) continue;
                                        idx = -1;
                                        while (++idx < searchersLen) {
                                            const searcher = searchers[idx];
                                            let token = searcher.isSingleMatch(queryItem);
                                            if (token) {
                                                results.push(new searcher(token, options));
                                                break;
                                            }
                                        }
                                    }
                                    return results;
                                }));
                            }
                            const MultiMatchSet = new Set([ FuzzyMatch.type, IncludeMatch.type ]);
                            class ExtendedSearch {
                                constructor(pattern, {isCaseSensitive = Config.isCaseSensitive, includeMatches = Config.includeMatches, minMatchCharLength = Config.minMatchCharLength, ignoreLocation = Config.ignoreLocation, findAllMatches = Config.findAllMatches, location = Config.location, threshold = Config.threshold, distance = Config.distance} = {}) {
                                    this.query = null;
                                    this.options = {
                                        isCaseSensitive,
                                        includeMatches,
                                        minMatchCharLength,
                                        findAllMatches,
                                        ignoreLocation,
                                        location,
                                        threshold,
                                        distance
                                    };
                                    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                                    this.query = parseQuery(this.pattern, this.options);
                                }
                                static condition(_, options) {
                                    return options.useExtendedSearch;
                                }
                                searchIn(text) {
                                    const query = this.query;
                                    if (!query) return {
                                        isMatch: false,
                                        score: 1
                                    };
                                    const {includeMatches, isCaseSensitive} = this.options;
                                    text = isCaseSensitive ? text : text.toLowerCase();
                                    let numMatches = 0;
                                    let allIndices = [];
                                    let totalScore = 0;
                                    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
                                        const searchers = query[i];
                                        allIndices.length = 0;
                                        numMatches = 0;
                                        for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
                                            const searcher = searchers[j];
                                            const {isMatch, indices, score} = searcher.search(text);
                                            if (isMatch) {
                                                numMatches += 1;
                                                totalScore += score;
                                                if (includeMatches) {
                                                    const type = searcher.constructor.type;
                                                    if (MultiMatchSet.has(type)) allIndices = [ ...allIndices, ...indices ]; else allIndices.push(indices);
                                                }
                                            } else {
                                                totalScore = 0;
                                                numMatches = 0;
                                                allIndices.length = 0;
                                                break;
                                            }
                                        }
                                        if (numMatches) {
                                            let result = {
                                                isMatch: true,
                                                score: totalScore / numMatches
                                            };
                                            if (includeMatches) result.indices = allIndices;
                                            return result;
                                        }
                                    }
                                    return {
                                        isMatch: false,
                                        score: 1
                                    };
                                }
                            }
                            const registeredSearchers = [];
                            function register(...args) {
                                registeredSearchers.push(...args);
                            }
                            function createSearcher(pattern, options) {
                                for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
                                    let searcherClass = registeredSearchers[i];
                                    if (searcherClass.condition(pattern, options)) return new searcherClass(pattern, options);
                                }
                                return new BitapSearch(pattern, options);
                            }
                            const LogicalOperator = {
                                AND: "$and",
                                OR: "$or"
                            };
                            const KeyType = {
                                PATH: "$path",
                                PATTERN: "$val"
                            };
                            const isExpression = query => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
                            const isPath = query => !!query[KeyType.PATH];
                            const isLeaf = query => !isArray(query) && isObject(query) && !isExpression(query);
                            const convertToExplicit = query => ({
                                [LogicalOperator.AND]: Object.keys(query).map((key => ({
                                    [key]: query[key]
                                })))
                            });
                            function parse(query, options, {auto = true} = {}) {
                                const next = query => {
                                    let keys = Object.keys(query);
                                    const isQueryPath = isPath(query);
                                    if (!isQueryPath && keys.length > 1 && !isExpression(query)) return next(convertToExplicit(query));
                                    if (isLeaf(query)) {
                                        const key = isQueryPath ? query[KeyType.PATH] : keys[0];
                                        const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];
                                        if (!isString(pattern)) throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
                                        const obj = {
                                            keyId: createKeyId(key),
                                            pattern
                                        };
                                        if (auto) obj.searcher = createSearcher(pattern, options);
                                        return obj;
                                    }
                                    let node = {
                                        children: [],
                                        operator: keys[0]
                                    };
                                    keys.forEach((key => {
                                        const value = query[key];
                                        if (isArray(value)) value.forEach((item => {
                                            node.children.push(next(item));
                                        }));
                                    }));
                                    return node;
                                };
                                if (!isExpression(query)) query = convertToExplicit(query);
                                return next(query);
                            }
                            function computeScore(results, {ignoreFieldNorm = Config.ignoreFieldNorm}) {
                                results.forEach((result => {
                                    let totalScore = 1;
                                    result.matches.forEach((({key, norm, score}) => {
                                        const weight = key ? key.weight : null;
                                        totalScore *= Math.pow(0 === score && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
                                    }));
                                    result.score = totalScore;
                                }));
                            }
                            function transformMatches(result, data) {
                                const matches = result.matches;
                                data.matches = [];
                                if (!isDefined(matches)) return;
                                matches.forEach((match => {
                                    if (!isDefined(match.indices) || !match.indices.length) return;
                                    const {indices, value} = match;
                                    let obj = {
                                        indices,
                                        value
                                    };
                                    if (match.key) obj.key = match.key.src;
                                    if (match.idx > -1) obj.refIndex = match.idx;
                                    data.matches.push(obj);
                                }));
                            }
                            function transformScore(result, data) {
                                data.score = result.score;
                            }
                            function format(results, docs, {includeMatches = Config.includeMatches, includeScore = Config.includeScore} = {}) {
                                const transformers = [];
                                if (includeMatches) transformers.push(transformMatches);
                                if (includeScore) transformers.push(transformScore);
                                return results.map((result => {
                                    const {idx} = result;
                                    const data = {
                                        item: docs[idx],
                                        refIndex: idx
                                    };
                                    if (transformers.length) transformers.forEach((transformer => {
                                        transformer(result, data);
                                    }));
                                    return data;
                                }));
                            }
                            class Fuse {
                                constructor(docs, options = {}, index) {
                                    this.options = {
                                        ...Config,
                                        ...options
                                    };
                                    if (this.options.useExtendedSearch && !true) ;
                                    this._keyStore = new KeyStore(this.options.keys);
                                    this.setCollection(docs, index);
                                }
                                setCollection(docs, index) {
                                    this._docs = docs;
                                    if (index && !(index instanceof FuseIndex)) throw new Error(INCORRECT_INDEX_TYPE);
                                    this._myIndex = index || createIndex(this.options.keys, this._docs, {
                                        getFn: this.options.getFn,
                                        fieldNormWeight: this.options.fieldNormWeight
                                    });
                                }
                                add(doc) {
                                    if (!isDefined(doc)) return;
                                    this._docs.push(doc);
                                    this._myIndex.add(doc);
                                }
                                remove(predicate = (() => false)) {
                                    const results = [];
                                    for (let i = 0, len = this._docs.length; i < len; i += 1) {
                                        const doc = this._docs[i];
                                        if (predicate(doc, i)) {
                                            this.removeAt(i);
                                            i -= 1;
                                            len -= 1;
                                            results.push(doc);
                                        }
                                    }
                                    return results;
                                }
                                removeAt(idx) {
                                    this._docs.splice(idx, 1);
                                    this._myIndex.removeAt(idx);
                                }
                                getIndex() {
                                    return this._myIndex;
                                }
                                search(query, {limit = -1} = {}) {
                                    const {includeMatches, includeScore, shouldSort, sortFn, ignoreFieldNorm} = this.options;
                                    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
                                    computeScore(results, {
                                        ignoreFieldNorm
                                    });
                                    if (shouldSort) results.sort(sortFn);
                                    if (isNumber(limit) && limit > -1) results = results.slice(0, limit);
                                    return format(results, this._docs, {
                                        includeMatches,
                                        includeScore
                                    });
                                }
                                _searchStringList(query) {
                                    const searcher = createSearcher(query, this.options);
                                    const {records} = this._myIndex;
                                    const results = [];
                                    records.forEach((({v: text, i: idx, n: norm}) => {
                                        if (!isDefined(text)) return;
                                        const {isMatch, score, indices} = searcher.searchIn(text);
                                        if (isMatch) results.push({
                                            item: text,
                                            idx,
                                            matches: [ {
                                                score,
                                                value: text,
                                                norm,
                                                indices
                                            } ]
                                        });
                                    }));
                                    return results;
                                }
                                _searchLogical(query) {
                                    const expression = parse(query, this.options);
                                    const evaluate = (node, item, idx) => {
                                        if (!node.children) {
                                            const {keyId, searcher} = node;
                                            const matches = this._findMatches({
                                                key: this._keyStore.get(keyId),
                                                value: this._myIndex.getValueForItemAtKeyId(item, keyId),
                                                searcher
                                            });
                                            if (matches && matches.length) return [ {
                                                idx,
                                                item,
                                                matches
                                            } ];
                                            return [];
                                        }
                                        const res = [];
                                        for (let i = 0, len = node.children.length; i < len; i += 1) {
                                            const child = node.children[i];
                                            const result = evaluate(child, item, idx);
                                            if (result.length) res.push(...result); else if (node.operator === LogicalOperator.AND) return [];
                                        }
                                        return res;
                                    };
                                    const records = this._myIndex.records;
                                    const resultMap = {};
                                    const results = [];
                                    records.forEach((({$: item, i: idx}) => {
                                        if (isDefined(item)) {
                                            let expResults = evaluate(expression, item, idx);
                                            if (expResults.length) {
                                                if (!resultMap[idx]) {
                                                    resultMap[idx] = {
                                                        idx,
                                                        item,
                                                        matches: []
                                                    };
                                                    results.push(resultMap[idx]);
                                                }
                                                expResults.forEach((({matches}) => {
                                                    resultMap[idx].matches.push(...matches);
                                                }));
                                            }
                                        }
                                    }));
                                    return results;
                                }
                                _searchObjectList(query) {
                                    const searcher = createSearcher(query, this.options);
                                    const {keys, records} = this._myIndex;
                                    const results = [];
                                    records.forEach((({$: item, i: idx}) => {
                                        if (!isDefined(item)) return;
                                        let matches = [];
                                        keys.forEach(((key, keyIndex) => {
                                            matches.push(...this._findMatches({
                                                key,
                                                value: item[keyIndex],
                                                searcher
                                            }));
                                        }));
                                        if (matches.length) results.push({
                                            idx,
                                            item,
                                            matches
                                        });
                                    }));
                                    return results;
                                }
                                _findMatches({key, value, searcher}) {
                                    if (!isDefined(value)) return [];
                                    let matches = [];
                                    if (isArray(value)) value.forEach((({v: text, i: idx, n: norm}) => {
                                        if (!isDefined(text)) return;
                                        const {isMatch, score, indices} = searcher.searchIn(text);
                                        if (isMatch) matches.push({
                                            score,
                                            key,
                                            value: text,
                                            idx,
                                            norm,
                                            indices
                                        });
                                    })); else {
                                        const {v: text, n: norm} = value;
                                        const {isMatch, score, indices} = searcher.searchIn(text);
                                        if (isMatch) matches.push({
                                            score,
                                            key,
                                            value: text,
                                            norm,
                                            indices
                                        });
                                    }
                                    return matches;
                                }
                            }
                            Fuse.version = "6.5.3";
                            Fuse.createIndex = createIndex;
                            Fuse.parseIndex = parseIndex;
                            Fuse.config = Config;
                            Fuse.parseQuery = parse;
                            register(ExtendedSearch);
                        },
                        857: function(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_178160__) {
                            __nested_webpack_require_178160__.r(__webpack_exports__);
                            __nested_webpack_require_178160__.d(__webpack_exports__, {
                                __DO_NOT_USE__ActionTypes: function() {
                                    return ActionTypes;
                                },
                                applyMiddleware: function() {
                                    return applyMiddleware;
                                },
                                bindActionCreators: function() {
                                    return bindActionCreators;
                                },
                                combineReducers: function() {
                                    return combineReducers;
                                },
                                compose: function() {
                                    return compose;
                                },
                                createStore: function() {
                                    return createStore;
                                }
                            });
                            function _defineProperty(obj, key, value) {
                                if (key in obj) Object.defineProperty(obj, key, {
                                    value,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }); else obj[key] = value;
                                return obj;
                            }
                            function ownKeys(object, enumerableOnly) {
                                var keys = Object.keys(object);
                                if (Object.getOwnPropertySymbols) {
                                    var symbols = Object.getOwnPropertySymbols(object);
                                    enumerableOnly && (symbols = symbols.filter((function(sym) {
                                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                                    }))), keys.push.apply(keys, symbols);
                                }
                                return keys;
                            }
                            function _objectSpread2(target) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {};
                                    i % 2 ? ownKeys(Object(source), !0).forEach((function(key) {
                                        _defineProperty(target, key, source[key]);
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function(key) {
                                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                                    }));
                                }
                                return target;
                            }
                            function formatProdErrorMessage(code) {
                                return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + "use the non-minified dev environment for full errors. ";
                            }
                            var $$observable = function() {
                                return "function" === typeof Symbol && Symbol.observable || "@@observable";
                            }();
                            var randomString = function randomString() {
                                return Math.random().toString(36).substring(7).split("").join(".");
                            };
                            var ActionTypes = {
                                INIT: "@@redux/INIT" + randomString(),
                                REPLACE: "@@redux/REPLACE" + randomString(),
                                PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
                                    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
                                }
                            };
                            function isPlainObject(obj) {
                                if ("object" !== typeof obj || null === obj) return false;
                                var proto = obj;
                                while (null !== Object.getPrototypeOf(proto)) proto = Object.getPrototypeOf(proto);
                                return Object.getPrototypeOf(obj) === proto;
                            }
                            function createStore(reducer, preloadedState, enhancer) {
                                var _ref2;
                                if ("function" === typeof preloadedState && "function" === typeof enhancer || "function" === typeof enhancer && "function" === typeof arguments[3]) throw new Error(true ? formatProdErrorMessage(0) : 0);
                                if ("function" === typeof preloadedState && "undefined" === typeof enhancer) {
                                    enhancer = preloadedState;
                                    preloadedState = void 0;
                                }
                                if ("undefined" !== typeof enhancer) {
                                    if ("function" !== typeof enhancer) throw new Error(true ? formatProdErrorMessage(1) : 0);
                                    return enhancer(createStore)(reducer, preloadedState);
                                }
                                if ("function" !== typeof reducer) throw new Error(true ? formatProdErrorMessage(2) : 0);
                                var currentReducer = reducer;
                                var currentState = preloadedState;
                                var currentListeners = [];
                                var nextListeners = currentListeners;
                                var isDispatching = false;
                                function ensureCanMutateNextListeners() {
                                    if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
                                }
                                function getState() {
                                    if (isDispatching) throw new Error(true ? formatProdErrorMessage(3) : 0);
                                    return currentState;
                                }
                                function subscribe(listener) {
                                    if ("function" !== typeof listener) throw new Error(true ? formatProdErrorMessage(4) : 0);
                                    if (isDispatching) throw new Error(true ? formatProdErrorMessage(5) : 0);
                                    var isSubscribed = true;
                                    ensureCanMutateNextListeners();
                                    nextListeners.push(listener);
                                    return function unsubscribe() {
                                        if (!isSubscribed) return;
                                        if (isDispatching) throw new Error(true ? formatProdErrorMessage(6) : 0);
                                        isSubscribed = false;
                                        ensureCanMutateNextListeners();
                                        var index = nextListeners.indexOf(listener);
                                        nextListeners.splice(index, 1);
                                        currentListeners = null;
                                    };
                                }
                                function dispatch(action) {
                                    if (!isPlainObject(action)) throw new Error(true ? formatProdErrorMessage(7) : 0);
                                    if ("undefined" === typeof action.type) throw new Error(true ? formatProdErrorMessage(8) : 0);
                                    if (isDispatching) throw new Error(true ? formatProdErrorMessage(9) : 0);
                                    try {
                                        isDispatching = true;
                                        currentState = currentReducer(currentState, action);
                                    } finally {
                                        isDispatching = false;
                                    }
                                    var listeners = currentListeners = nextListeners;
                                    for (var i = 0; i < listeners.length; i++) {
                                        var listener = listeners[i];
                                        listener();
                                    }
                                    return action;
                                }
                                function replaceReducer(nextReducer) {
                                    if ("function" !== typeof nextReducer) throw new Error(true ? formatProdErrorMessage(10) : 0);
                                    currentReducer = nextReducer;
                                    dispatch({
                                        type: ActionTypes.REPLACE
                                    });
                                }
                                function observable() {
                                    var _ref;
                                    var outerSubscribe = subscribe;
                                    return _ref = {
                                        subscribe: function subscribe(observer) {
                                            if ("object" !== typeof observer || null === observer) throw new Error(true ? formatProdErrorMessage(11) : 0);
                                            function observeState() {
                                                if (observer.next) observer.next(getState());
                                            }
                                            observeState();
                                            var unsubscribe = outerSubscribe(observeState);
                                            return {
                                                unsubscribe
                                            };
                                        }
                                    }, _ref[$$observable] = function() {
                                        return this;
                                    }, _ref;
                                }
                                dispatch({
                                    type: ActionTypes.INIT
                                });
                                return _ref2 = {
                                    dispatch,
                                    subscribe,
                                    getState,
                                    replaceReducer
                                }, _ref2[$$observable] = observable, _ref2;
                            }
                            function assertReducerShape(reducers) {
                                Object.keys(reducers).forEach((function(key) {
                                    var reducer = reducers[key];
                                    var initialState = reducer(void 0, {
                                        type: ActionTypes.INIT
                                    });
                                    if ("undefined" === typeof initialState) throw new Error(true ? formatProdErrorMessage(12) : 0);
                                    if ("undefined" === typeof reducer(void 0, {
                                        type: ActionTypes.PROBE_UNKNOWN_ACTION()
                                    })) throw new Error(true ? formatProdErrorMessage(13) : 0);
                                }));
                            }
                            function combineReducers(reducers) {
                                var reducerKeys = Object.keys(reducers);
                                var finalReducers = {};
                                for (var i = 0; i < reducerKeys.length; i++) {
                                    var key = reducerKeys[i];
                                    if (false) ;
                                    if ("function" === typeof reducers[key]) finalReducers[key] = reducers[key];
                                }
                                var finalReducerKeys = Object.keys(finalReducers);
                                if (false) ;
                                var shapeAssertionError;
                                try {
                                    assertReducerShape(finalReducers);
                                } catch (e) {
                                    shapeAssertionError = e;
                                }
                                return function combination(state, action) {
                                    if (void 0 === state) state = {};
                                    if (shapeAssertionError) throw shapeAssertionError;
                                    if (false) ;
                                    var hasChanged = false;
                                    var nextState = {};
                                    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                                        var _key = finalReducerKeys[_i];
                                        var reducer = finalReducers[_key];
                                        var previousStateForKey = state[_key];
                                        var nextStateForKey = reducer(previousStateForKey, action);
                                        if ("undefined" === typeof nextStateForKey) {
                                            action && action.type;
                                            throw new Error(true ? formatProdErrorMessage(14) : 0);
                                        }
                                        nextState[_key] = nextStateForKey;
                                        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
                                    }
                                    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
                                    return hasChanged ? nextState : state;
                                };
                            }
                            function bindActionCreator(actionCreator, dispatch) {
                                return function() {
                                    return dispatch(actionCreator.apply(this, arguments));
                                };
                            }
                            function bindActionCreators(actionCreators, dispatch) {
                                if ("function" === typeof actionCreators) return bindActionCreator(actionCreators, dispatch);
                                if ("object" !== typeof actionCreators || null === actionCreators) throw new Error(true ? formatProdErrorMessage(16) : 0);
                                var boundActionCreators = {};
                                for (var key in actionCreators) {
                                    var actionCreator = actionCreators[key];
                                    if ("function" === typeof actionCreator) boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
                                }
                                return boundActionCreators;
                            }
                            function compose() {
                                for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) funcs[_key] = arguments[_key];
                                if (0 === funcs.length) return function(arg) {
                                    return arg;
                                };
                                if (1 === funcs.length) return funcs[0];
                                return funcs.reduce((function(a, b) {
                                    return function() {
                                        return a(b.apply(void 0, arguments));
                                    };
                                }));
                            }
                            function applyMiddleware() {
                                for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) middlewares[_key] = arguments[_key];
                                return function(createStore) {
                                    return function() {
                                        var store = createStore.apply(void 0, arguments);
                                        var _dispatch = function dispatch() {
                                            throw new Error(true ? formatProdErrorMessage(15) : 0);
                                        };
                                        var middlewareAPI = {
                                            getState: store.getState,
                                            dispatch: function dispatch() {
                                                return _dispatch.apply(void 0, arguments);
                                            }
                                        };
                                        var chain = middlewares.map((function(middleware) {
                                            return middleware(middlewareAPI);
                                        }));
                                        _dispatch = compose.apply(void 0, chain)(store.dispatch);
                                        return _objectSpread2(_objectSpread2({}, store), {}, {
                                            dispatch: _dispatch
                                        });
                                    };
                                };
                            }
                            if (false) ;
                        }
                    };
                    var __webpack_module_cache__ = {};
                    function __nested_webpack_require_201985__(moduleId) {
                        var cachedModule = __webpack_module_cache__[moduleId];
                        if (void 0 !== cachedModule) return cachedModule.exports;
                        var module = __webpack_module_cache__[moduleId] = {
                            exports: {}
                        };
                        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_201985__);
                        return module.exports;
                    }
                    !function() {
                        __nested_webpack_require_201985__.n = function(module) {
                            var getter = module && module.__esModule ? function() {
                                return module["default"];
                            } : function() {
                                return module;
                            };
                            __nested_webpack_require_201985__.d(getter, {
                                a: getter
                            });
                            return getter;
                        };
                    }();
                    !function() {
                        __nested_webpack_require_201985__.d = function(exports, definition) {
                            for (var key in definition) if (__nested_webpack_require_201985__.o(definition, key) && !__nested_webpack_require_201985__.o(exports, key)) Object.defineProperty(exports, key, {
                                enumerable: true,
                                get: definition[key]
                            });
                        };
                    }();
                    !function() {
                        __nested_webpack_require_201985__.o = function(obj, prop) {
                            return Object.prototype.hasOwnProperty.call(obj, prop);
                        };
                    }();
                    !function() {
                        __nested_webpack_require_201985__.r = function(exports) {
                            if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                                value: "Module"
                            });
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        };
                    }();
                    var __webpack_exports__ = {};
                    !function() {
                        var _scripts_choices__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_201985__(373);
                        var _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_201985__.n(_scripts_choices__WEBPACK_IMPORTED_MODULE_0__);
                        __nested_webpack_require_201985__(187);
                        __nested_webpack_require_201985__(883);
                        __nested_webpack_require_201985__(789);
                        __nested_webpack_require_201985__(686);
                        __webpack_exports__["default"] = _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default();
                    }();
                    __webpack_exports__ = __webpack_exports__["default"];
                    return __webpack_exports__;
                }();
            }));
        },
        211: function(__unused_webpack_module, exports) {
            (function(global, factory) {
                true ? factory(exports) : 0;
            })(0, (function(exports) {
                "use strict";
                exports.PipsMode = void 0;
                (function(PipsMode) {
                    PipsMode["Range"] = "range";
                    PipsMode["Steps"] = "steps";
                    PipsMode["Positions"] = "positions";
                    PipsMode["Count"] = "count";
                    PipsMode["Values"] = "values";
                })(exports.PipsMode || (exports.PipsMode = {}));
                exports.PipsType = void 0;
                (function(PipsType) {
                    PipsType[PipsType["None"] = -1] = "None";
                    PipsType[PipsType["NoValue"] = 0] = "NoValue";
                    PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
                    PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
                })(exports.PipsType || (exports.PipsType = {}));
                function isValidFormatter(entry) {
                    return isValidPartialFormatter(entry) && "function" === typeof entry.from;
                }
                function isValidPartialFormatter(entry) {
                    return "object" === typeof entry && "function" === typeof entry.to;
                }
                function removeElement(el) {
                    el.parentElement.removeChild(el);
                }
                function isSet(value) {
                    return null !== value && void 0 !== value;
                }
                function preventDefault(e) {
                    e.preventDefault();
                }
                function unique(array) {
                    return array.filter((function(a) {
                        return !this[a] ? this[a] = true : false;
                    }), {});
                }
                function closest(value, to) {
                    return Math.round(value / to) * to;
                }
                function offset(elem, orientation) {
                    var rect = elem.getBoundingClientRect();
                    var doc = elem.ownerDocument;
                    var docElem = doc.documentElement;
                    var pageOffset = getPageOffset(doc);
                    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) pageOffset.x = 0;
                    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
                }
                function isNumeric(a) {
                    return "number" === typeof a && !isNaN(a) && isFinite(a);
                }
                function addClassFor(element, className, duration) {
                    if (duration > 0) {
                        addClass(element, className);
                        setTimeout((function() {
                            removeClass(element, className);
                        }), duration);
                    }
                }
                function limit(a) {
                    return Math.max(Math.min(a, 100), 0);
                }
                function asArray(a) {
                    return Array.isArray(a) ? a : [ a ];
                }
                function countDecimals(numStr) {
                    numStr = String(numStr);
                    var pieces = numStr.split(".");
                    return pieces.length > 1 ? pieces[1].length : 0;
                }
                function addClass(el, className) {
                    if (el.classList && !/\s/.test(className)) el.classList.add(className); else el.className += " " + className;
                }
                function removeClass(el, className) {
                    if (el.classList && !/\s/.test(className)) el.classList.remove(className); else el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
                }
                function hasClass(el, className) {
                    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
                }
                function getPageOffset(doc) {
                    var supportPageOffset = void 0 !== window.pageXOffset;
                    var isCSS1Compat = "CSS1Compat" === (doc.compatMode || "");
                    var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
                    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
                    return {
                        x,
                        y
                    };
                }
                function getActions() {
                    return window.navigator.pointerEnabled ? {
                        start: "pointerdown",
                        move: "pointermove",
                        end: "pointerup"
                    } : window.navigator.msPointerEnabled ? {
                        start: "MSPointerDown",
                        move: "MSPointerMove",
                        end: "MSPointerUp"
                    } : {
                        start: "mousedown touchstart",
                        move: "mousemove touchmove",
                        end: "mouseup touchend"
                    };
                }
                function getSupportsPassive() {
                    var supportsPassive = false;
                    try {
                        var opts = Object.defineProperty({}, "passive", {
                            get: function() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("test", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }
                function getSupportsTouchActionNone() {
                    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
                }
                function subRangeRatio(pa, pb) {
                    return 100 / (pb - pa);
                }
                function fromPercentage(range, value, startRange) {
                    return 100 * value / (range[startRange + 1] - range[startRange]);
                }
                function toPercentage(range, value) {
                    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
                }
                function isPercentage(range, value) {
                    return value * (range[1] - range[0]) / 100 + range[0];
                }
                function getJ(value, arr) {
                    var j = 1;
                    while (value >= arr[j]) j += 1;
                    return j;
                }
                function toStepping(xVal, xPct, value) {
                    if (value >= xVal.slice(-1)[0]) return 100;
                    var j = getJ(value, xVal);
                    var va = xVal[j - 1];
                    var vb = xVal[j];
                    var pa = xPct[j - 1];
                    var pb = xPct[j];
                    return pa + toPercentage([ va, vb ], value) / subRangeRatio(pa, pb);
                }
                function fromStepping(xVal, xPct, value) {
                    if (value >= 100) return xVal.slice(-1)[0];
                    var j = getJ(value, xPct);
                    var va = xVal[j - 1];
                    var vb = xVal[j];
                    var pa = xPct[j - 1];
                    var pb = xPct[j];
                    return isPercentage([ va, vb ], (value - pa) * subRangeRatio(pa, pb));
                }
                function getStep(xPct, xSteps, snap, value) {
                    if (100 === value) return value;
                    var j = getJ(value, xPct);
                    var a = xPct[j - 1];
                    var b = xPct[j];
                    if (snap) {
                        if (value - a > (b - a) / 2) return b;
                        return a;
                    }
                    if (!xSteps[j - 1]) return value;
                    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
                }
                var Spectrum = function() {
                    function Spectrum(entry, snap, singleStep) {
                        this.xPct = [];
                        this.xVal = [];
                        this.xSteps = [];
                        this.xNumSteps = [];
                        this.xHighestCompleteStep = [];
                        this.xSteps = [ singleStep || false ];
                        this.xNumSteps = [ false ];
                        this.snap = snap;
                        var index;
                        var ordered = [];
                        Object.keys(entry).forEach((function(index) {
                            ordered.push([ asArray(entry[index]), index ]);
                        }));
                        ordered.sort((function(a, b) {
                            return a[0][0] - b[0][0];
                        }));
                        for (index = 0; index < ordered.length; index++) this.handleEntryPoint(ordered[index][1], ordered[index][0]);
                        this.xNumSteps = this.xSteps.slice(0);
                        for (index = 0; index < this.xNumSteps.length; index++) this.handleStepPoint(index, this.xNumSteps[index]);
                    }
                    Spectrum.prototype.getDistance = function(value) {
                        var distances = [];
                        for (var index = 0; index < this.xNumSteps.length - 1; index++) distances[index] = fromPercentage(this.xVal, value, index);
                        return distances;
                    };
                    Spectrum.prototype.getAbsoluteDistance = function(value, distances, direction) {
                        var xPct_index = 0;
                        if (value < this.xPct[this.xPct.length - 1]) while (value > this.xPct[xPct_index + 1]) xPct_index++; else if (value === this.xPct[this.xPct.length - 1]) xPct_index = this.xPct.length - 2;
                        if (!direction && value === this.xPct[xPct_index + 1]) xPct_index++;
                        if (null === distances) distances = [];
                        var start_factor;
                        var rest_factor = 1;
                        var rest_rel_distance = distances[xPct_index];
                        var range_pct = 0;
                        var rel_range_distance = 0;
                        var abs_distance_counter = 0;
                        var range_counter = 0;
                        if (direction) start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]); else start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
                        while (rest_rel_distance > 0) {
                            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                            if (distances[xPct_index + range_counter] * rest_factor + 100 - 100 * start_factor > 100) {
                                rel_range_distance = range_pct * start_factor;
                                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                                start_factor = 1;
                            } else {
                                rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
                                rest_factor = 0;
                            }
                            if (direction) {
                                abs_distance_counter -= rel_range_distance;
                                if (this.xPct.length + range_counter >= 1) range_counter--;
                            } else {
                                abs_distance_counter += rel_range_distance;
                                if (this.xPct.length - range_counter >= 1) range_counter++;
                            }
                            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
                        }
                        return value + abs_distance_counter;
                    };
                    Spectrum.prototype.toStepping = function(value) {
                        value = toStepping(this.xVal, this.xPct, value);
                        return value;
                    };
                    Spectrum.prototype.fromStepping = function(value) {
                        return fromStepping(this.xVal, this.xPct, value);
                    };
                    Spectrum.prototype.getStep = function(value) {
                        value = getStep(this.xPct, this.xSteps, this.snap, value);
                        return value;
                    };
                    Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
                        var j = getJ(value, this.xPct);
                        if (100 === value || isDown && value === this.xPct[j - 1]) j = Math.max(j - 1, 1);
                        return (this.xVal[j] - this.xVal[j - 1]) / size;
                    };
                    Spectrum.prototype.getNearbySteps = function(value) {
                        var j = getJ(value, this.xPct);
                        return {
                            stepBefore: {
                                startValue: this.xVal[j - 2],
                                step: this.xNumSteps[j - 2],
                                highestStep: this.xHighestCompleteStep[j - 2]
                            },
                            thisStep: {
                                startValue: this.xVal[j - 1],
                                step: this.xNumSteps[j - 1],
                                highestStep: this.xHighestCompleteStep[j - 1]
                            },
                            stepAfter: {
                                startValue: this.xVal[j],
                                step: this.xNumSteps[j],
                                highestStep: this.xHighestCompleteStep[j]
                            }
                        };
                    };
                    Spectrum.prototype.countStepDecimals = function() {
                        var stepDecimals = this.xNumSteps.map(countDecimals);
                        return Math.max.apply(null, stepDecimals);
                    };
                    Spectrum.prototype.hasNoSize = function() {
                        return this.xVal[0] === this.xVal[this.xVal.length - 1];
                    };
                    Spectrum.prototype.convert = function(value) {
                        return this.getStep(this.toStepping(value));
                    };
                    Spectrum.prototype.handleEntryPoint = function(index, value) {
                        var percentage;
                        if ("min" === index) percentage = 0; else if ("max" === index) percentage = 100; else percentage = parseFloat(index);
                        if (!isNumeric(percentage) || !isNumeric(value[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
                        this.xPct.push(percentage);
                        this.xVal.push(value[0]);
                        var value1 = Number(value[1]);
                        if (!percentage) {
                            if (!isNaN(value1)) this.xSteps[0] = value1;
                        } else this.xSteps.push(isNaN(value1) ? false : value1);
                        this.xHighestCompleteStep.push(0);
                    };
                    Spectrum.prototype.handleStepPoint = function(i, n) {
                        if (!n) return;
                        if (this.xVal[i] === this.xVal[i + 1]) {
                            this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                            return;
                        }
                        this.xSteps[i] = fromPercentage([ this.xVal[i], this.xVal[i + 1] ], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
                        var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
                        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
                        var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
                        this.xHighestCompleteStep[i] = step;
                    };
                    return Spectrum;
                }();
                var defaultFormatter = {
                    to: function(value) {
                        return void 0 === value ? "" : value.toFixed(2);
                    },
                    from: Number
                };
                var cssClasses = {
                    target: "target",
                    base: "base",
                    origin: "origin",
                    handle: "handle",
                    handleLower: "handle-lower",
                    handleUpper: "handle-upper",
                    touchArea: "touch-area",
                    horizontal: "horizontal",
                    vertical: "vertical",
                    background: "background",
                    connect: "connect",
                    connects: "connects",
                    ltr: "ltr",
                    rtl: "rtl",
                    textDirectionLtr: "txt-dir-ltr",
                    textDirectionRtl: "txt-dir-rtl",
                    draggable: "draggable",
                    drag: "state-drag",
                    tap: "state-tap",
                    active: "active",
                    tooltip: "tooltip",
                    pips: "pips",
                    pipsHorizontal: "pips-horizontal",
                    pipsVertical: "pips-vertical",
                    marker: "marker",
                    markerHorizontal: "marker-horizontal",
                    markerVertical: "marker-vertical",
                    markerNormal: "marker-normal",
                    markerLarge: "marker-large",
                    markerSub: "marker-sub",
                    value: "value",
                    valueHorizontal: "value-horizontal",
                    valueVertical: "value-vertical",
                    valueNormal: "value-normal",
                    valueLarge: "value-large",
                    valueSub: "value-sub"
                };
                var INTERNAL_EVENT_NS = {
                    tooltips: ".__tooltips",
                    aria: ".__aria"
                };
                function testStep(parsed, entry) {
                    if (!isNumeric(entry)) throw new Error("noUiSlider: 'step' is not numeric.");
                    parsed.singleStep = entry;
                }
                function testKeyboardPageMultiplier(parsed, entry) {
                    if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
                    parsed.keyboardPageMultiplier = entry;
                }
                function testKeyboardMultiplier(parsed, entry) {
                    if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
                    parsed.keyboardMultiplier = entry;
                }
                function testKeyboardDefaultStep(parsed, entry) {
                    if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
                    parsed.keyboardDefaultStep = entry;
                }
                function testRange(parsed, entry) {
                    if ("object" !== typeof entry || Array.isArray(entry)) throw new Error("noUiSlider: 'range' is not an object.");
                    if (void 0 === entry.min || void 0 === entry.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
                    parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
                }
                function testStart(parsed, entry) {
                    entry = asArray(entry);
                    if (!Array.isArray(entry) || !entry.length) throw new Error("noUiSlider: 'start' option is incorrect.");
                    parsed.handles = entry.length;
                    parsed.start = entry;
                }
                function testSnap(parsed, entry) {
                    if ("boolean" !== typeof entry) throw new Error("noUiSlider: 'snap' option must be a boolean.");
                    parsed.snap = entry;
                }
                function testAnimate(parsed, entry) {
                    if ("boolean" !== typeof entry) throw new Error("noUiSlider: 'animate' option must be a boolean.");
                    parsed.animate = entry;
                }
                function testAnimationDuration(parsed, entry) {
                    if ("number" !== typeof entry) throw new Error("noUiSlider: 'animationDuration' option must be a number.");
                    parsed.animationDuration = entry;
                }
                function testConnect(parsed, entry) {
                    var connect = [ false ];
                    var i;
                    if ("lower" === entry) entry = [ true, false ]; else if ("upper" === entry) entry = [ false, true ];
                    if (true === entry || false === entry) {
                        for (i = 1; i < parsed.handles; i++) connect.push(entry);
                        connect.push(false);
                    } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count."); else connect = entry;
                    parsed.connect = connect;
                }
                function testOrientation(parsed, entry) {
                    switch (entry) {
                      case "horizontal":
                        parsed.ort = 0;
                        break;

                      case "vertical":
                        parsed.ort = 1;
                        break;

                      default:
                        throw new Error("noUiSlider: 'orientation' option is invalid.");
                    }
                }
                function testMargin(parsed, entry) {
                    if (!isNumeric(entry)) throw new Error("noUiSlider: 'margin' option must be numeric.");
                    if (0 === entry) return;
                    parsed.margin = parsed.spectrum.getDistance(entry);
                }
                function testLimit(parsed, entry) {
                    if (!isNumeric(entry)) throw new Error("noUiSlider: 'limit' option must be numeric.");
                    parsed.limit = parsed.spectrum.getDistance(entry);
                    if (!parsed.limit || parsed.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
                }
                function testPadding(parsed, entry) {
                    var index;
                    if (!isNumeric(entry) && !Array.isArray(entry)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
                    if (Array.isArray(entry) && !(2 === entry.length || isNumeric(entry[0]) || isNumeric(entry[1]))) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
                    if (0 === entry) return;
                    if (!Array.isArray(entry)) entry = [ entry, entry ];
                    parsed.padding = [ parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1]) ];
                    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
                    var totalPadding = entry[0] + entry[1];
                    var firstValue = parsed.spectrum.xVal[0];
                    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
                    if (totalPadding / (lastValue - firstValue) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
                }
                function testDirection(parsed, entry) {
                    switch (entry) {
                      case "ltr":
                        parsed.dir = 0;
                        break;

                      case "rtl":
                        parsed.dir = 1;
                        break;

                      default:
                        throw new Error("noUiSlider: 'direction' option was not recognized.");
                    }
                }
                function testBehaviour(parsed, entry) {
                    if ("string" !== typeof entry) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
                    var tap = entry.indexOf("tap") >= 0;
                    var drag = entry.indexOf("drag") >= 0;
                    var fixed = entry.indexOf("fixed") >= 0;
                    var snap = entry.indexOf("snap") >= 0;
                    var hover = entry.indexOf("hover") >= 0;
                    var unconstrained = entry.indexOf("unconstrained") >= 0;
                    var dragAll = entry.indexOf("drag-all") >= 0;
                    var smoothSteps = entry.indexOf("smooth-steps") >= 0;
                    if (fixed) {
                        if (2 !== parsed.handles) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
                        testMargin(parsed, parsed.start[1] - parsed.start[0]);
                    }
                    if (unconstrained && (parsed.margin || parsed.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
                    parsed.events = {
                        tap: tap || snap,
                        drag,
                        dragAll,
                        smoothSteps,
                        fixed,
                        snap,
                        hover,
                        unconstrained
                    };
                }
                function testTooltips(parsed, entry) {
                    if (false === entry) return;
                    if (true === entry || isValidPartialFormatter(entry)) {
                        parsed.tooltips = [];
                        for (var i = 0; i < parsed.handles; i++) parsed.tooltips.push(entry);
                    } else {
                        entry = asArray(entry);
                        if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                        entry.forEach((function(formatter) {
                            if ("boolean" !== typeof formatter && !isValidPartialFormatter(formatter)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                        }));
                        parsed.tooltips = entry;
                    }
                }
                function testHandleAttributes(parsed, entry) {
                    if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
                    parsed.handleAttributes = entry;
                }
                function testAriaFormat(parsed, entry) {
                    if (!isValidPartialFormatter(entry)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
                    parsed.ariaFormat = entry;
                }
                function testFormat(parsed, entry) {
                    if (!isValidFormatter(entry)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
                    parsed.format = entry;
                }
                function testKeyboardSupport(parsed, entry) {
                    if ("boolean" !== typeof entry) throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
                    parsed.keyboardSupport = entry;
                }
                function testDocumentElement(parsed, entry) {
                    parsed.documentElement = entry;
                }
                function testCssPrefix(parsed, entry) {
                    if ("string" !== typeof entry && false !== entry) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
                    parsed.cssPrefix = entry;
                }
                function testCssClasses(parsed, entry) {
                    if ("object" !== typeof entry) throw new Error("noUiSlider: 'cssClasses' must be an object.");
                    if ("string" === typeof parsed.cssPrefix) {
                        parsed.cssClasses = {};
                        Object.keys(entry).forEach((function(key) {
                            parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
                        }));
                    } else parsed.cssClasses = entry;
                }
                function testOptions(options) {
                    var parsed = {
                        margin: null,
                        limit: null,
                        padding: null,
                        animate: true,
                        animationDuration: 300,
                        ariaFormat: defaultFormatter,
                        format: defaultFormatter
                    };
                    var tests = {
                        step: {
                            r: false,
                            t: testStep
                        },
                        keyboardPageMultiplier: {
                            r: false,
                            t: testKeyboardPageMultiplier
                        },
                        keyboardMultiplier: {
                            r: false,
                            t: testKeyboardMultiplier
                        },
                        keyboardDefaultStep: {
                            r: false,
                            t: testKeyboardDefaultStep
                        },
                        start: {
                            r: true,
                            t: testStart
                        },
                        connect: {
                            r: true,
                            t: testConnect
                        },
                        direction: {
                            r: true,
                            t: testDirection
                        },
                        snap: {
                            r: false,
                            t: testSnap
                        },
                        animate: {
                            r: false,
                            t: testAnimate
                        },
                        animationDuration: {
                            r: false,
                            t: testAnimationDuration
                        },
                        range: {
                            r: true,
                            t: testRange
                        },
                        orientation: {
                            r: false,
                            t: testOrientation
                        },
                        margin: {
                            r: false,
                            t: testMargin
                        },
                        limit: {
                            r: false,
                            t: testLimit
                        },
                        padding: {
                            r: false,
                            t: testPadding
                        },
                        behaviour: {
                            r: true,
                            t: testBehaviour
                        },
                        ariaFormat: {
                            r: false,
                            t: testAriaFormat
                        },
                        format: {
                            r: false,
                            t: testFormat
                        },
                        tooltips: {
                            r: false,
                            t: testTooltips
                        },
                        keyboardSupport: {
                            r: true,
                            t: testKeyboardSupport
                        },
                        documentElement: {
                            r: false,
                            t: testDocumentElement
                        },
                        cssPrefix: {
                            r: true,
                            t: testCssPrefix
                        },
                        cssClasses: {
                            r: true,
                            t: testCssClasses
                        },
                        handleAttributes: {
                            r: false,
                            t: testHandleAttributes
                        }
                    };
                    var defaults = {
                        connect: false,
                        direction: "ltr",
                        behaviour: "tap",
                        orientation: "horizontal",
                        keyboardSupport: true,
                        cssPrefix: "noUi-",
                        cssClasses,
                        keyboardPageMultiplier: 5,
                        keyboardMultiplier: 1,
                        keyboardDefaultStep: 10
                    };
                    if (options.format && !options.ariaFormat) options.ariaFormat = options.format;
                    Object.keys(tests).forEach((function(name) {
                        if (!isSet(options[name]) && void 0 === defaults[name]) {
                            if (tests[name].r) throw new Error("noUiSlider: '" + name + "' is required.");
                            return;
                        }
                        tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
                    }));
                    parsed.pips = options.pips;
                    var d = document.createElement("div");
                    var msPrefix = void 0 !== d.style.msTransform;
                    var noPrefix = void 0 !== d.style.transform;
                    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
                    var styles = [ [ "left", "top" ], [ "right", "bottom" ] ];
                    parsed.style = styles[parsed.dir][parsed.ort];
                    return parsed;
                }
                function scope(target, options, originalOptions) {
                    var actions = getActions();
                    var supportsTouchActionNone = getSupportsTouchActionNone();
                    var supportsPassive = supportsTouchActionNone && getSupportsPassive();
                    var scope_Target = target;
                    var scope_Base;
                    var scope_Handles;
                    var scope_Connects;
                    var scope_Pips;
                    var scope_Tooltips;
                    var scope_Spectrum = options.spectrum;
                    var scope_Values = [];
                    var scope_Locations = [];
                    var scope_HandleNumbers = [];
                    var scope_ActiveHandlesCount = 0;
                    var scope_Events = {};
                    var scope_Document = target.ownerDocument;
                    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
                    var scope_Body = scope_Document.body;
                    var scope_DirOffset = "rtl" === scope_Document.dir || 1 === options.ort ? 0 : 100;
                    function addNodeTo(addTarget, className) {
                        var div = scope_Document.createElement("div");
                        if (className) addClass(div, className);
                        addTarget.appendChild(div);
                        return div;
                    }
                    function addOrigin(base, handleNumber) {
                        var origin = addNodeTo(base, options.cssClasses.origin);
                        var handle = addNodeTo(origin, options.cssClasses.handle);
                        addNodeTo(handle, options.cssClasses.touchArea);
                        handle.setAttribute("data-handle", String(handleNumber));
                        if (options.keyboardSupport) {
                            handle.setAttribute("tabindex", "0");
                            handle.addEventListener("keydown", (function(event) {
                                return eventKeydown(event, handleNumber);
                            }));
                        }
                        if (void 0 !== options.handleAttributes) {
                            var attributes_1 = options.handleAttributes[handleNumber];
                            Object.keys(attributes_1).forEach((function(attribute) {
                                handle.setAttribute(attribute, attributes_1[attribute]);
                            }));
                        }
                        handle.setAttribute("role", "slider");
                        handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
                        if (0 === handleNumber) addClass(handle, options.cssClasses.handleLower); else if (handleNumber === options.handles - 1) addClass(handle, options.cssClasses.handleUpper);
                        return origin;
                    }
                    function addConnect(base, add) {
                        if (!add) return false;
                        return addNodeTo(base, options.cssClasses.connect);
                    }
                    function addElements(connectOptions, base) {
                        var connectBase = addNodeTo(base, options.cssClasses.connects);
                        scope_Handles = [];
                        scope_Connects = [];
                        scope_Connects.push(addConnect(connectBase, connectOptions[0]));
                        for (var i = 0; i < options.handles; i++) {
                            scope_Handles.push(addOrigin(base, i));
                            scope_HandleNumbers[i] = i;
                            scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
                        }
                    }
                    function addSlider(addTarget) {
                        addClass(addTarget, options.cssClasses.target);
                        if (0 === options.dir) addClass(addTarget, options.cssClasses.ltr); else addClass(addTarget, options.cssClasses.rtl);
                        if (0 === options.ort) addClass(addTarget, options.cssClasses.horizontal); else addClass(addTarget, options.cssClasses.vertical);
                        var textDirection = getComputedStyle(addTarget).direction;
                        if ("rtl" === textDirection) addClass(addTarget, options.cssClasses.textDirectionRtl); else addClass(addTarget, options.cssClasses.textDirectionLtr);
                        return addNodeTo(addTarget, options.cssClasses.base);
                    }
                    function addTooltip(handle, handleNumber) {
                        if (!options.tooltips || !options.tooltips[handleNumber]) return false;
                        return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
                    }
                    function isSliderDisabled() {
                        return scope_Target.hasAttribute("disabled");
                    }
                    function isHandleDisabled(handleNumber) {
                        var handleOrigin = scope_Handles[handleNumber];
                        return handleOrigin.hasAttribute("disabled");
                    }
                    function removeTooltips() {
                        if (scope_Tooltips) {
                            removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                            scope_Tooltips.forEach((function(tooltip) {
                                if (tooltip) removeElement(tooltip);
                            }));
                            scope_Tooltips = null;
                        }
                    }
                    function tooltips() {
                        removeTooltips();
                        scope_Tooltips = scope_Handles.map(addTooltip);
                        bindEvent("update" + INTERNAL_EVENT_NS.tooltips, (function(values, handleNumber, unencoded) {
                            if (!scope_Tooltips || !options.tooltips) return;
                            if (false === scope_Tooltips[handleNumber]) return;
                            var formattedValue = values[handleNumber];
                            if (true !== options.tooltips[handleNumber]) formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                            scope_Tooltips[handleNumber].innerHTML = formattedValue;
                        }));
                    }
                    function aria() {
                        removeEvent("update" + INTERNAL_EVENT_NS.aria);
                        bindEvent("update" + INTERNAL_EVENT_NS.aria, (function(values, handleNumber, unencoded, tap, positions) {
                            scope_HandleNumbers.forEach((function(index) {
                                var handle = scope_Handles[index];
                                var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                                var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                                var now = positions[index];
                                var text = String(options.ariaFormat.to(unencoded[index]));
                                min = scope_Spectrum.fromStepping(min).toFixed(1);
                                max = scope_Spectrum.fromStepping(max).toFixed(1);
                                now = scope_Spectrum.fromStepping(now).toFixed(1);
                                handle.children[0].setAttribute("aria-valuemin", min);
                                handle.children[0].setAttribute("aria-valuemax", max);
                                handle.children[0].setAttribute("aria-valuenow", now);
                                handle.children[0].setAttribute("aria-valuetext", text);
                            }));
                        }));
                    }
                    function getGroup(pips) {
                        if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) return scope_Spectrum.xVal;
                        if (pips.mode === exports.PipsMode.Count) {
                            if (pips.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                            var interval = pips.values - 1;
                            var spread = 100 / interval;
                            var values = [];
                            while (interval--) values[interval] = interval * spread;
                            values.push(100);
                            return mapToRange(values, pips.stepped);
                        }
                        if (pips.mode === exports.PipsMode.Positions) return mapToRange(pips.values, pips.stepped);
                        if (pips.mode === exports.PipsMode.Values) {
                            if (pips.stepped) return pips.values.map((function(value) {
                                return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                            }));
                            return pips.values;
                        }
                        return [];
                    }
                    function mapToRange(values, stepped) {
                        return values.map((function(value) {
                            return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                        }));
                    }
                    function generateSpread(pips) {
                        function safeIncrement(value, increment) {
                            return Number((value + increment).toFixed(7));
                        }
                        var group = getGroup(pips);
                        var indexes = {};
                        var firstInRange = scope_Spectrum.xVal[0];
                        var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
                        var ignoreFirst = false;
                        var ignoreLast = false;
                        var prevPct = 0;
                        group = unique(group.slice().sort((function(a, b) {
                            return a - b;
                        })));
                        if (group[0] !== firstInRange) {
                            group.unshift(firstInRange);
                            ignoreFirst = true;
                        }
                        if (group[group.length - 1] !== lastInRange) {
                            group.push(lastInRange);
                            ignoreLast = true;
                        }
                        group.forEach((function(current, index) {
                            var step;
                            var i;
                            var q;
                            var low = current;
                            var high = group[index + 1];
                            var newPct;
                            var pctDifference;
                            var pctPos;
                            var type;
                            var steps;
                            var realSteps;
                            var stepSize;
                            var isSteps = pips.mode === exports.PipsMode.Steps;
                            if (isSteps) step = scope_Spectrum.xNumSteps[index];
                            if (!step) step = high - low;
                            if (void 0 === high) high = low;
                            step = Math.max(step, 1e-7);
                            for (i = low; i <= high; i = safeIncrement(i, step)) {
                                newPct = scope_Spectrum.toStepping(i);
                                pctDifference = newPct - prevPct;
                                steps = pctDifference / (pips.density || 1);
                                realSteps = Math.round(steps);
                                stepSize = pctDifference / realSteps;
                                for (q = 1; q <= realSteps; q += 1) {
                                    pctPos = prevPct + q * stepSize;
                                    indexes[pctPos.toFixed(5)] = [ scope_Spectrum.fromStepping(pctPos), 0 ];
                                }
                                type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                                if (!index && ignoreFirst && i !== high) type = 0;
                                if (!(i === high && ignoreLast)) indexes[newPct.toFixed(5)] = [ i, type ];
                                prevPct = newPct;
                            }
                        }));
                        return indexes;
                    }
                    function addMarking(spread, filterFunc, formatter) {
                        var _a, _b;
                        var element = scope_Document.createElement("div");
                        var valueSizeClasses = (_a = {}, _a[exports.PipsType.None] = "", _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal, 
                        _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge, _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub, 
                        _a);
                        var markerSizeClasses = (_b = {}, _b[exports.PipsType.None] = "", _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal, 
                        _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge, _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub, 
                        _b);
                        var valueOrientationClasses = [ options.cssClasses.valueHorizontal, options.cssClasses.valueVertical ];
                        var markerOrientationClasses = [ options.cssClasses.markerHorizontal, options.cssClasses.markerVertical ];
                        addClass(element, options.cssClasses.pips);
                        addClass(element, 0 === options.ort ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
                        function getClasses(type, source) {
                            var a = source === options.cssClasses.value;
                            var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                            var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                            return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
                        }
                        function addSpread(offset, value, type) {
                            type = filterFunc ? filterFunc(value, type) : type;
                            if (type === exports.PipsType.None) return;
                            var node = addNodeTo(element, false);
                            node.className = getClasses(type, options.cssClasses.marker);
                            node.style[options.style] = offset + "%";
                            if (type > exports.PipsType.NoValue) {
                                node = addNodeTo(element, false);
                                node.className = getClasses(type, options.cssClasses.value);
                                node.setAttribute("data-value", String(value));
                                node.style[options.style] = offset + "%";
                                node.innerHTML = String(formatter.to(value));
                            }
                        }
                        Object.keys(spread).forEach((function(offset) {
                            addSpread(offset, spread[offset][0], spread[offset][1]);
                        }));
                        return element;
                    }
                    function removePips() {
                        if (scope_Pips) {
                            removeElement(scope_Pips);
                            scope_Pips = null;
                        }
                    }
                    function pips(pips) {
                        removePips();
                        var spread = generateSpread(pips);
                        var filter = pips.filter;
                        var format = pips.format || {
                            to: function(value) {
                                return String(Math.round(value));
                            }
                        };
                        scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
                        return scope_Pips;
                    }
                    function baseSize() {
                        var rect = scope_Base.getBoundingClientRect();
                        var alt = "offset" + [ "Width", "Height" ][options.ort];
                        return 0 === options.ort ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
                    }
                    function attachEvent(events, element, callback, data) {
                        var method = function(event) {
                            var e = fixEvent(event, data.pageOffset, data.target || element);
                            if (!e) return false;
                            if (isSliderDisabled() && !data.doNotReject) return false;
                            if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) return false;
                            if (events === actions.start && void 0 !== e.buttons && e.buttons > 1) return false;
                            if (data.hover && e.buttons) return false;
                            if (!supportsPassive) e.preventDefault();
                            e.calcPoint = e.points[options.ort];
                            callback(e, data);
                            return;
                        };
                        var methods = [];
                        events.split(" ").forEach((function(eventName) {
                            element.addEventListener(eventName, method, supportsPassive ? {
                                passive: true
                            } : false);
                            methods.push([ eventName, method ]);
                        }));
                        return methods;
                    }
                    function fixEvent(e, pageOffset, eventTarget) {
                        var touch = 0 === e.type.indexOf("touch");
                        var mouse = 0 === e.type.indexOf("mouse");
                        var pointer = 0 === e.type.indexOf("pointer");
                        var x = 0;
                        var y = 0;
                        if (0 === e.type.indexOf("MSPointer")) pointer = true;
                        if ("mousedown" === e.type && !e.buttons && !e.touches) return false;
                        if (touch) {
                            var isTouchOnTarget = function(checkTouch) {
                                var target = checkTouch.target;
                                return target === eventTarget || eventTarget.contains(target) || e.composed && e.composedPath().shift() === eventTarget;
                            };
                            if ("touchstart" === e.type) {
                                var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                                if (targetTouches.length > 1) return false;
                                x = targetTouches[0].pageX;
                                y = targetTouches[0].pageY;
                            } else {
                                var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                                if (!targetTouch) return false;
                                x = targetTouch.pageX;
                                y = targetTouch.pageY;
                            }
                        }
                        pageOffset = pageOffset || getPageOffset(scope_Document);
                        if (mouse || pointer) {
                            x = e.clientX + pageOffset.x;
                            y = e.clientY + pageOffset.y;
                        }
                        e.pageOffset = pageOffset;
                        e.points = [ x, y ];
                        e.cursor = mouse || pointer;
                        return e;
                    }
                    function calcPointToPercentage(calcPoint) {
                        var location = calcPoint - offset(scope_Base, options.ort);
                        var proposal = 100 * location / baseSize();
                        proposal = limit(proposal);
                        return options.dir ? 100 - proposal : proposal;
                    }
                    function getClosestHandle(clickedPosition) {
                        var smallestDifference = 100;
                        var handleNumber = false;
                        scope_Handles.forEach((function(handle, index) {
                            if (isHandleDisabled(index)) return;
                            var handlePosition = scope_Locations[index];
                            var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                            var clickAtEdge = 100 === differenceWithThisHandle && 100 === smallestDifference;
                            var isCloser = differenceWithThisHandle < smallestDifference;
                            var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                            if (isCloser || isCloserAfter || clickAtEdge) {
                                handleNumber = index;
                                smallestDifference = differenceWithThisHandle;
                            }
                        }));
                        return handleNumber;
                    }
                    function documentLeave(event, data) {
                        if ("mouseout" === event.type && "HTML" === event.target.nodeName && null === event.relatedTarget) eventEnd(event, data);
                    }
                    function eventMove(event, data) {
                        if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === event.buttons && 0 !== data.buttonsProperty) return eventEnd(event, data);
                        var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
                        var proposal = 100 * movement / data.baseSize;
                        moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
                    }
                    function eventEnd(event, data) {
                        if (data.handle) {
                            removeClass(data.handle, options.cssClasses.active);
                            scope_ActiveHandlesCount -= 1;
                        }
                        data.listeners.forEach((function(c) {
                            scope_DocumentElement.removeEventListener(c[0], c[1]);
                        }));
                        if (0 === scope_ActiveHandlesCount) {
                            removeClass(scope_Target, options.cssClasses.drag);
                            setZindex();
                            if (event.cursor) {
                                scope_Body.style.cursor = "";
                                scope_Body.removeEventListener("selectstart", preventDefault);
                            }
                        }
                        if (options.events.smoothSteps) {
                            data.handleNumbers.forEach((function(handleNumber) {
                                setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                            }));
                            data.handleNumbers.forEach((function(handleNumber) {
                                fireEvent("update", handleNumber);
                            }));
                        }
                        data.handleNumbers.forEach((function(handleNumber) {
                            fireEvent("change", handleNumber);
                            fireEvent("set", handleNumber);
                            fireEvent("end", handleNumber);
                        }));
                    }
                    function eventStart(event, data) {
                        if (data.handleNumbers.some(isHandleDisabled)) return;
                        var handle;
                        if (1 === data.handleNumbers.length) {
                            var handleOrigin = scope_Handles[data.handleNumbers[0]];
                            handle = handleOrigin.children[0];
                            scope_ActiveHandlesCount += 1;
                            addClass(handle, options.cssClasses.active);
                        }
                        event.stopPropagation();
                        var listeners = [];
                        var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                            target: event.target,
                            handle,
                            connect: data.connect,
                            listeners,
                            startCalcPoint: event.calcPoint,
                            baseSize: baseSize(),
                            pageOffset: event.pageOffset,
                            handleNumbers: data.handleNumbers,
                            buttonsProperty: event.buttons,
                            locations: scope_Locations.slice()
                        });
                        var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                            target: event.target,
                            handle,
                            listeners,
                            doNotReject: true,
                            handleNumbers: data.handleNumbers
                        });
                        var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                            target: event.target,
                            handle,
                            listeners,
                            doNotReject: true,
                            handleNumbers: data.handleNumbers
                        });
                        listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
                        if (event.cursor) {
                            scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                            if (scope_Handles.length > 1) addClass(scope_Target, options.cssClasses.drag);
                            scope_Body.addEventListener("selectstart", preventDefault, false);
                        }
                        data.handleNumbers.forEach((function(handleNumber) {
                            fireEvent("start", handleNumber);
                        }));
                    }
                    function eventTap(event) {
                        event.stopPropagation();
                        var proposal = calcPointToPercentage(event.calcPoint);
                        var handleNumber = getClosestHandle(proposal);
                        if (false === handleNumber) return;
                        if (!options.events.snap) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                        setHandle(handleNumber, proposal, true, true);
                        setZindex();
                        fireEvent("slide", handleNumber, true);
                        fireEvent("update", handleNumber, true);
                        if (!options.events.snap) {
                            fireEvent("change", handleNumber, true);
                            fireEvent("set", handleNumber, true);
                        } else eventStart(event, {
                            handleNumbers: [ handleNumber ]
                        });
                    }
                    function eventHover(event) {
                        var proposal = calcPointToPercentage(event.calcPoint);
                        var to = scope_Spectrum.getStep(proposal);
                        var value = scope_Spectrum.fromStepping(to);
                        Object.keys(scope_Events).forEach((function(targetEvent) {
                            if ("hover" === targetEvent.split(".")[0]) scope_Events[targetEvent].forEach((function(callback) {
                                callback.call(scope_Self, value);
                            }));
                        }));
                    }
                    function eventKeydown(event, handleNumber) {
                        if (isSliderDisabled() || isHandleDisabled(handleNumber)) return false;
                        var horizontalKeys = [ "Left", "Right" ];
                        var verticalKeys = [ "Down", "Up" ];
                        var largeStepKeys = [ "PageDown", "PageUp" ];
                        var edgeKeys = [ "Home", "End" ];
                        if (options.dir && !options.ort) horizontalKeys.reverse(); else if (options.ort && !options.dir) {
                            verticalKeys.reverse();
                            largeStepKeys.reverse();
                        }
                        var key = event.key.replace("Arrow", "");
                        var isLargeDown = key === largeStepKeys[0];
                        var isLargeUp = key === largeStepKeys[1];
                        var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
                        var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
                        var isMin = key === edgeKeys[0];
                        var isMax = key === edgeKeys[1];
                        if (!isDown && !isUp && !isMin && !isMax) return true;
                        event.preventDefault();
                        var to;
                        if (isUp || isDown) {
                            var direction = isDown ? 0 : 1;
                            var steps = getNextStepsForHandle(handleNumber);
                            var step = steps[direction];
                            if (null === step) return false;
                            if (false === step) step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                            if (isLargeUp || isLargeDown) step *= options.keyboardPageMultiplier; else step *= options.keyboardMultiplier;
                            step = Math.max(step, 1e-7);
                            step *= isDown ? -1 : 1;
                            to = scope_Values[handleNumber] + step;
                        } else if (isMax) to = options.spectrum.xVal[options.spectrum.xVal.length - 1]; else to = options.spectrum.xVal[0];
                        setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
                        fireEvent("slide", handleNumber);
                        fireEvent("update", handleNumber);
                        fireEvent("change", handleNumber);
                        fireEvent("set", handleNumber);
                        return false;
                    }
                    function bindSliderEvents(behaviour) {
                        if (!behaviour.fixed) scope_Handles.forEach((function(handle, index) {
                            attachEvent(actions.start, handle.children[0], eventStart, {
                                handleNumbers: [ index ]
                            });
                        }));
                        if (behaviour.tap) attachEvent(actions.start, scope_Base, eventTap, {});
                        if (behaviour.hover) attachEvent(actions.move, scope_Base, eventHover, {
                            hover: true
                        });
                        if (behaviour.drag) scope_Connects.forEach((function(connect, index) {
                            if (false === connect || 0 === index || index === scope_Connects.length - 1) return;
                            var handleBefore = scope_Handles[index - 1];
                            var handleAfter = scope_Handles[index];
                            var eventHolders = [ connect ];
                            var handlesToDrag = [ handleBefore, handleAfter ];
                            var handleNumbersToDrag = [ index - 1, index ];
                            addClass(connect, options.cssClasses.draggable);
                            if (behaviour.fixed) {
                                eventHolders.push(handleBefore.children[0]);
                                eventHolders.push(handleAfter.children[0]);
                            }
                            if (behaviour.dragAll) {
                                handlesToDrag = scope_Handles;
                                handleNumbersToDrag = scope_HandleNumbers;
                            }
                            eventHolders.forEach((function(eventHolder) {
                                attachEvent(actions.start, eventHolder, eventStart, {
                                    handles: handlesToDrag,
                                    handleNumbers: handleNumbersToDrag,
                                    connect
                                });
                            }));
                        }));
                    }
                    function bindEvent(namespacedEvent, callback) {
                        scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
                        scope_Events[namespacedEvent].push(callback);
                        if ("update" === namespacedEvent.split(".")[0]) scope_Handles.forEach((function(a, index) {
                            fireEvent("update", index);
                        }));
                    }
                    function isInternalNamespace(namespace) {
                        return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
                    }
                    function removeEvent(namespacedEvent) {
                        var event = namespacedEvent && namespacedEvent.split(".")[0];
                        var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
                        Object.keys(scope_Events).forEach((function(bind) {
                            var tEvent = bind.split(".")[0];
                            var tNamespace = bind.substring(tEvent.length);
                            if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) if (!isInternalNamespace(tNamespace) || namespace === tNamespace) delete scope_Events[bind];
                        }));
                    }
                    function fireEvent(eventName, handleNumber, tap) {
                        Object.keys(scope_Events).forEach((function(targetEvent) {
                            var eventType = targetEvent.split(".")[0];
                            if (eventName === eventType) scope_Events[targetEvent].forEach((function(callback) {
                                callback.call(scope_Self, scope_Values.map(options.format.to), handleNumber, scope_Values.slice(), tap || false, scope_Locations.slice(), scope_Self);
                            }));
                        }));
                    }
                    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
                        var distance;
                        if (scope_Handles.length > 1 && !options.events.unconstrained) {
                            if (lookBackward && handleNumber > 0) {
                                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                                to = Math.max(to, distance);
                            }
                            if (lookForward && handleNumber < scope_Handles.length - 1) {
                                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                                to = Math.min(to, distance);
                            }
                        }
                        if (scope_Handles.length > 1 && options.limit) {
                            if (lookBackward && handleNumber > 0) {
                                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                                to = Math.min(to, distance);
                            }
                            if (lookForward && handleNumber < scope_Handles.length - 1) {
                                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                                to = Math.max(to, distance);
                            }
                        }
                        if (options.padding) {
                            if (0 === handleNumber) {
                                distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                                to = Math.max(to, distance);
                            }
                            if (handleNumber === scope_Handles.length - 1) {
                                distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                                to = Math.min(to, distance);
                            }
                        }
                        if (!smoothSteps) to = scope_Spectrum.getStep(to);
                        to = limit(to);
                        if (to === reference[handleNumber] && !getValue) return false;
                        return to;
                    }
                    function inRuleOrder(v, a) {
                        var o = options.ort;
                        return (o ? a : v) + ", " + (o ? v : a);
                    }
                    function moveHandles(upward, proposal, locations, handleNumbers, connect) {
                        var proposals = locations.slice();
                        var firstHandle = handleNumbers[0];
                        var smoothSteps = options.events.smoothSteps;
                        var b = [ !upward, upward ];
                        var f = [ upward, !upward ];
                        handleNumbers = handleNumbers.slice();
                        if (upward) handleNumbers.reverse();
                        if (handleNumbers.length > 1) handleNumbers.forEach((function(handleNumber, o) {
                            var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                            if (false === to) proposal = 0; else {
                                proposal = to - proposals[handleNumber];
                                proposals[handleNumber] = to;
                            }
                        })); else b = f = [ true ];
                        var state = false;
                        handleNumbers.forEach((function(handleNumber, o) {
                            state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
                        }));
                        if (state) {
                            handleNumbers.forEach((function(handleNumber) {
                                fireEvent("update", handleNumber);
                                fireEvent("slide", handleNumber);
                            }));
                            if (void 0 != connect) fireEvent("drag", firstHandle);
                        }
                    }
                    function transformDirection(a, b) {
                        return options.dir ? 100 - a - b : a;
                    }
                    function updateHandlePosition(handleNumber, to) {
                        scope_Locations[handleNumber] = to;
                        scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
                        var translation = transformDirection(to, 0) - scope_DirOffset;
                        var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
                        scope_Handles[handleNumber].style[options.transformRule] = translateRule;
                        updateConnect(handleNumber);
                        updateConnect(handleNumber + 1);
                    }
                    function setZindex() {
                        scope_HandleNumbers.forEach((function(handleNumber) {
                            var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                            var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                            scope_Handles[handleNumber].style.zIndex = String(zIndex);
                        }));
                    }
                    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
                        if (!exactInput) to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
                        if (false === to) return false;
                        updateHandlePosition(handleNumber, to);
                        return true;
                    }
                    function updateConnect(index) {
                        if (!scope_Connects[index]) return;
                        var l = 0;
                        var h = 100;
                        if (0 !== index) l = scope_Locations[index - 1];
                        if (index !== scope_Connects.length - 1) h = scope_Locations[index];
                        var connectWidth = h - l;
                        var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
                        var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
                        scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
                    }
                    function resolveToValue(to, handleNumber) {
                        if (null === to || false === to || void 0 === to) return scope_Locations[handleNumber];
                        if ("number" === typeof to) to = String(to);
                        to = options.format.from(to);
                        if (false !== to) to = scope_Spectrum.toStepping(to);
                        if (false === to || isNaN(to)) return scope_Locations[handleNumber];
                        return to;
                    }
                    function valueSet(input, fireSetEvent, exactInput) {
                        var values = asArray(input);
                        var isInit = void 0 === scope_Locations[0];
                        fireSetEvent = void 0 === fireSetEvent ? true : fireSetEvent;
                        if (options.animate && !isInit) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                        scope_HandleNumbers.forEach((function(handleNumber) {
                            setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
                        }));
                        var i = 1 === scope_HandleNumbers.length ? 0 : 1;
                        if (isInit && scope_Spectrum.hasNoSize()) {
                            exactInput = true;
                            scope_Locations[0] = 0;
                            if (scope_HandleNumbers.length > 1) {
                                var space_1 = 100 / (scope_HandleNumbers.length - 1);
                                scope_HandleNumbers.forEach((function(handleNumber) {
                                    scope_Locations[handleNumber] = handleNumber * space_1;
                                }));
                            }
                        }
                        for (;i < scope_HandleNumbers.length; ++i) scope_HandleNumbers.forEach((function(handleNumber) {
                            setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                        }));
                        setZindex();
                        scope_HandleNumbers.forEach((function(handleNumber) {
                            fireEvent("update", handleNumber);
                            if (null !== values[handleNumber] && fireSetEvent) fireEvent("set", handleNumber);
                        }));
                    }
                    function valueReset(fireSetEvent) {
                        valueSet(options.start, fireSetEvent);
                    }
                    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
                        handleNumber = Number(handleNumber);
                        if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
                        setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
                        fireEvent("update", handleNumber);
                        if (fireSetEvent) fireEvent("set", handleNumber);
                    }
                    function valueGet(unencoded) {
                        if (void 0 === unencoded) unencoded = false;
                        if (unencoded) return 1 === scope_Values.length ? scope_Values[0] : scope_Values.slice(0);
                        var values = scope_Values.map(options.format.to);
                        if (1 === values.length) return values[0];
                        return values;
                    }
                    function destroy() {
                        removeEvent(INTERNAL_EVENT_NS.aria);
                        removeEvent(INTERNAL_EVENT_NS.tooltips);
                        Object.keys(options.cssClasses).forEach((function(key) {
                            removeClass(scope_Target, options.cssClasses[key]);
                        }));
                        while (scope_Target.firstChild) scope_Target.removeChild(scope_Target.firstChild);
                        delete scope_Target.noUiSlider;
                    }
                    function getNextStepsForHandle(handleNumber) {
                        var location = scope_Locations[handleNumber];
                        var nearbySteps = scope_Spectrum.getNearbySteps(location);
                        var value = scope_Values[handleNumber];
                        var increment = nearbySteps.thisStep.step;
                        var decrement = null;
                        if (options.snap) return [ value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null ];
                        if (false !== increment) if (value + increment > nearbySteps.stepAfter.startValue) increment = nearbySteps.stepAfter.startValue - value;
                        if (value > nearbySteps.thisStep.startValue) decrement = nearbySteps.thisStep.step; else if (false === nearbySteps.stepBefore.step) decrement = false; else decrement = value - nearbySteps.stepBefore.highestStep;
                        if (100 === location) increment = null; else if (0 === location) decrement = null;
                        var stepDecimals = scope_Spectrum.countStepDecimals();
                        if (null !== increment && false !== increment) increment = Number(increment.toFixed(stepDecimals));
                        if (null !== decrement && false !== decrement) decrement = Number(decrement.toFixed(stepDecimals));
                        return [ decrement, increment ];
                    }
                    function getNextSteps() {
                        return scope_HandleNumbers.map(getNextStepsForHandle);
                    }
                    function updateOptions(optionsToUpdate, fireSetEvent) {
                        var v = valueGet();
                        var updateAble = [ "margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips" ];
                        updateAble.forEach((function(name) {
                            if (void 0 !== optionsToUpdate[name]) originalOptions[name] = optionsToUpdate[name];
                        }));
                        var newOptions = testOptions(originalOptions);
                        updateAble.forEach((function(name) {
                            if (void 0 !== optionsToUpdate[name]) options[name] = newOptions[name];
                        }));
                        scope_Spectrum = newOptions.spectrum;
                        options.margin = newOptions.margin;
                        options.limit = newOptions.limit;
                        options.padding = newOptions.padding;
                        if (options.pips) pips(options.pips); else removePips();
                        if (options.tooltips) tooltips(); else removeTooltips();
                        scope_Locations = [];
                        valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
                    }
                    function setupSlider() {
                        scope_Base = addSlider(scope_Target);
                        addElements(options.connect, scope_Base);
                        bindSliderEvents(options.events);
                        valueSet(options.start);
                        if (options.pips) pips(options.pips);
                        if (options.tooltips) tooltips();
                        aria();
                    }
                    setupSlider();
                    var scope_Self = {
                        destroy,
                        steps: getNextSteps,
                        on: bindEvent,
                        off: removeEvent,
                        get: valueGet,
                        set: valueSet,
                        setHandle: valueSetHandle,
                        reset: valueReset,
                        __moveHandles: function(upward, proposal, handleNumbers) {
                            moveHandles(upward, proposal, scope_Locations, handleNumbers);
                        },
                        options: originalOptions,
                        updateOptions,
                        target: scope_Target,
                        removePips,
                        removeTooltips,
                        getPositions: function() {
                            return scope_Locations.slice();
                        },
                        getTooltips: function() {
                            return scope_Tooltips;
                        },
                        getOrigins: function() {
                            return scope_Handles;
                        },
                        pips
                    };
                    return scope_Self;
                }
                function initialize(target, originalOptions) {
                    if (!target || !target.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + target);
                    if (target.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
                    var options = testOptions(originalOptions);
                    var api = scope(target, options, originalOptions);
                    target.noUiSlider = api;
                    return api;
                }
                var nouislider = {
                    __spectrum: Spectrum,
                    cssClasses,
                    create: initialize
                };
                exports.create = initialize;
                exports.cssClasses = cssClasses;
                exports["default"] = nouislider;
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = ".header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
            }
        };
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if ("navigator" === targetElement.dataset.watch) {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        const techModule = {};
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if ("error" !== this._dataValue) {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        }
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && 27 == e.which && "Escape" === e.code && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && 9 == e.which && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") ? true : false;
                    if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                    }
                }
            }
            close(selectorValue) {
                if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && 0 === focusedIndex) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
        }
        techModule.popup = new Popup({});
        class MousePRLX {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                if (this.config.init) {
                    const paralaxMouse = document.querySelectorAll("[data-prlx-mouse]");
                    if (paralaxMouse.length) this.paralaxMouseInit(paralaxMouse);
                }
            }
            paralaxMouseInit(paralaxMouse) {
                paralaxMouse.forEach((el => {
                    const paralaxMouseWrapper = el.closest("[data-prlx-mouse-wrapper]");
                    const paramСoefficientX = el.dataset.prlxCx ? +el.dataset.prlxCx : 100;
                    const paramСoefficientY = el.dataset.prlxCy ? +el.dataset.prlxCy : 100;
                    const directionX = el.hasAttribute("data-prlx-dxr") ? -1 : 1;
                    const directionY = el.hasAttribute("data-prlx-dyr") ? -1 : 1;
                    const paramAnimation = el.dataset.prlxA ? +el.dataset.prlxA : 50;
                    let positionX = 0, positionY = 0;
                    let coordXprocent = 0, coordYprocent = 0;
                    setMouseParallaxStyle();
                    if (paralaxMouseWrapper) mouseMoveParalax(paralaxMouseWrapper); else mouseMoveParalax();
                    function setMouseParallaxStyle() {
                        const distX = coordXprocent - positionX;
                        const distY = coordYprocent - positionY;
                        positionX += distX * paramAnimation / 1e3;
                        positionY += distY * paramAnimation / 1e3;
                        el.style.cssText = `transform: translate3D(${directionX * positionX / (paramСoefficientX / 10)}%,${directionY * positionY / (paramСoefficientY / 10)}%,0);`;
                        requestAnimationFrame(setMouseParallaxStyle);
                    }
                    function mouseMoveParalax(wrapper = window) {
                        wrapper.addEventListener("mousemove", (function(e) {
                            const offsetTop = el.getBoundingClientRect().top + window.scrollY;
                            if (offsetTop >= window.scrollY || offsetTop + el.offsetHeight >= window.scrollY) {
                                const parallaxWidth = window.innerWidth;
                                const parallaxHeight = window.innerHeight;
                                const coordX = e.clientX - parallaxWidth / 2;
                                const coordY = e.clientY - parallaxHeight / 2;
                                coordXprocent = coordX / parallaxWidth * 100;
                                coordYprocent = coordY / parallaxHeight * 100;
                            }
                        }));
                    }
                }));
            }
        }
        techModule.mousePrlx = new MousePRLX({});
        function formFieldsInit(options = {
            viewPass: false
        }) {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (formFields.length) formFields.forEach((formField => {
                if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((null !== formRequiredItem.offsetParent || "SELECT" === formRequiredItem.tagName) && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if ("email" === formRequiredItem.dataset.required) {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if ("checkbox" === formRequiredItem.type && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (techModule.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            techModule.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit(options = {
            validate: true
        }) {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (0 === error) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        if (!document.querySelector(".item-cart")) {
                            alert("Додайте товар!");
                            return;
                        }
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        let productsArray = [];
                        if (document.querySelector(".item-cart")) {
                            const list = document.querySelector(".order-basket__items");
                            list.querySelectorAll(".item-cart").forEach((product => {
                                const productName = product.querySelector(".item-cart__name").innerHTML, productQuantity = product.querySelector(".item-cart__input span").innerHTML, productWeigh = product.querySelector(".item-cart__weigh").innerHTML, productPrice = product.querySelector(".item-cart__price span").innerHTML;
                                let productInfo = {
                                    name: productName,
                                    quantity: productQuantity,
                                    weigh: productWeigh,
                                    price: productPrice
                                };
                                productsArray.push(productInfo);
                            }));
                            formData.append("products", JSON.stringify(productsArray));
                        }
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            await response.json();
                            form.classList.remove("_sending");
                            formSent(form);
                        } else {
                            alert("Ошибка");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        if (!document.querySelector(".item-cart")) {
                            alert("Додайте товар");
                            return;
                        }
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    const formError = form.querySelector("._form-error");
                    if (formError && form.hasAttribute("data-goto-error")) gotoBlock(formError, true, 1e3);
                }
            }
            function formSent(form) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (techModule.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? techModule.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                console.log("Форма отправлена");
            }
        }
        var nouislider = __webpack_require__(211);
        if (document.getElementById("range-slider")) {
            const productsContent = document.querySelector(".controls-products__content");
            let rangeSlider = document.getElementById("range-slider");
            const fistNumber = document.querySelector(".spoilers-select__ranges-begin");
            const lastNumber = document.querySelector(".spoilers-select__ranges-end");
            nouislider.create(rangeSlider, {
                start: [ 0, 950 ],
                connect: true,
                range: {
                    min: 0,
                    max: 950
                }
            });
            rangeSlider.noUiSlider.on("update", ((value, handle) => {
                fistNumber.innerHTML = Math.round(value[0]);
                lastNumber.innerHTML = Math.round(value[1]);
                productsContent.setAttribute("start-range-filter", Math.round(value[0]));
                productsContent.setAttribute("end-range-filter", Math.round(value[1]));
                const allProducts = document.querySelectorAll(".item-product");
                allProducts.forEach((product => {
                    let price = Number(product.querySelector(".item-product__one--active span").innerHTML);
                    if (price < Number(productsContent.getAttribute("start-range-filter")) || price > Number(productsContent.getAttribute("end-range-filter"))) {
                        if (product.classList.contains("_sort")) product.style = "display: none";
                    } else if (product.classList.contains("_sort")) product.style = "display: block";
                }));
            }));
        }
        function _typeof(obj) {
            "@babel/helpers - typeof";
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
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
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        function _inherits(subClass, superClass) {
            if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    writable: true,
                    configurable: true
                }
            });
            Object.defineProperty(subClass, "prototype", {
                writable: false
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
            if ("undefined" === typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" === typeof Proxy) return true;
            try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                return true;
            } catch (e) {
                return false;
            }
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var target = {};
            var sourceKeys = Object.keys(source);
            var key, i;
            for (i = 0; i < sourceKeys.length; i++) {
                key = sourceKeys[i];
                if (excluded.indexOf(key) >= 0) continue;
                target[key] = source[key];
            }
            return target;
        }
        function _objectWithoutProperties(source, excluded) {
            if (null == source) return {};
            var target = _objectWithoutPropertiesLoose(source, excluded);
            var key, i;
            if (Object.getOwnPropertySymbols) {
                var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                for (i = 0; i < sourceSymbolKeys.length; i++) {
                    key = sourceSymbolKeys[i];
                    if (excluded.indexOf(key) >= 0) continue;
                    if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
                    target[key] = source[key];
                }
            }
            return target;
        }
        function _assertThisInitialized(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        }
        function _possibleConstructorReturn(self, call) {
            if (call && ("object" === typeof call || "function" === typeof call)) return call; else if (void 0 !== call) throw new TypeError("Derived constructors may only return object or undefined");
            return _assertThisInitialized(self);
        }
        function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();
            return function _createSuperInternal() {
                var result, Super = _getPrototypeOf(Derived);
                if (hasNativeReflectConstruct) {
                    var NewTarget = _getPrototypeOf(this).constructor;
                    result = Reflect.construct(Super, arguments, NewTarget);
                } else result = Super.apply(this, arguments);
                return _possibleConstructorReturn(this, result);
            };
        }
        function _superPropBase(object, property) {
            while (!Object.prototype.hasOwnProperty.call(object, property)) {
                object = _getPrototypeOf(object);
                if (null === object) break;
            }
            return object;
        }
        function _get() {
            if ("undefined" !== typeof Reflect && Reflect.get) _get = Reflect.get; else _get = function _get(target, property, receiver) {
                var base = _superPropBase(target, property);
                if (!base) return;
                var desc = Object.getOwnPropertyDescriptor(base, property);
                if (desc.get) return desc.get.call(arguments.length < 3 ? target : receiver);
                return desc.value;
            };
            return _get.apply(this, arguments);
        }
        function set(target, property, value, receiver) {
            if ("undefined" !== typeof Reflect && Reflect.set) set = Reflect.set; else set = function set(target, property, value, receiver) {
                var base = _superPropBase(target, property);
                var desc;
                if (base) {
                    desc = Object.getOwnPropertyDescriptor(base, property);
                    if (desc.set) {
                        desc.set.call(receiver, value);
                        return true;
                    } else if (!desc.writable) return false;
                }
                desc = Object.getOwnPropertyDescriptor(receiver, property);
                if (desc) {
                    if (!desc.writable) return false;
                    desc.value = value;
                    Object.defineProperty(receiver, property, desc);
                } else _defineProperty(receiver, property, value);
                return true;
            };
            return set(target, property, value, receiver);
        }
        function _set(target, property, value, receiver, isStrict) {
            var s = set(target, property, value, receiver || target);
            if (!s && isStrict) throw new Error("failed to set property");
            return value;
        }
        function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        function _iterableToArrayLimit(arr, i) {
            var _i = null == arr ? null : "undefined" !== typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
            if (null == _i) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
                for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && null != _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if ("Object" === n && o.constructor) n = o.constructor.name;
            if ("Map" === n || "Set" === n) return Array.from(o);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
            if (null == len || len > arr.length) len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
            return arr2;
        }
        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var ChangeDetails = function() {
            function ChangeDetails(details) {
                _classCallCheck(this, ChangeDetails);
                Object.assign(this, {
                    inserted: "",
                    rawInserted: "",
                    skip: false,
                    tailShift: 0
                }, details);
            }
            _createClass(ChangeDetails, [ {
                key: "aggregate",
                value: function aggregate(details) {
                    this.rawInserted += details.rawInserted;
                    this.skip = this.skip || details.skip;
                    this.inserted += details.inserted;
                    this.tailShift += details.tailShift;
                    return this;
                }
            }, {
                key: "offset",
                get: function get() {
                    return this.tailShift + this.inserted.length;
                }
            } ]);
            return ChangeDetails;
        }();
        function isString(str) {
            return "string" === typeof str || str instanceof String;
        }
        var DIRECTION = {
            NONE: "NONE",
            LEFT: "LEFT",
            FORCE_LEFT: "FORCE_LEFT",
            RIGHT: "RIGHT",
            FORCE_RIGHT: "FORCE_RIGHT"
        };
        function forceDirection(direction) {
            switch (direction) {
              case DIRECTION.LEFT:
                return DIRECTION.FORCE_LEFT;

              case DIRECTION.RIGHT:
                return DIRECTION.FORCE_RIGHT;

              default:
                return direction;
            }
        }
        function escapeRegExp(str) {
            return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        function normalizePrepare(prep) {
            return Array.isArray(prep) ? prep : [ prep, new ChangeDetails ];
        }
        function objectIncludes(b, a) {
            if (a === b) return true;
            var i, arrA = Array.isArray(a), arrB = Array.isArray(b);
            if (arrA && arrB) {
                if (a.length != b.length) return false;
                for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
                return true;
            }
            if (arrA != arrB) return false;
            if (a && b && "object" === _typeof(a) && "object" === _typeof(b)) {
                var dateA = a instanceof Date, dateB = b instanceof Date;
                if (dateA && dateB) return a.getTime() == b.getTime();
                if (dateA != dateB) return false;
                var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
                if (regexpA && regexpB) return a.toString() == b.toString();
                if (regexpA != regexpB) return false;
                var keys = Object.keys(a);
                for (i = 0; i < keys.length; i++) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
                for (i = 0; i < keys.length; i++) if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
                return true;
            } else if (a && b && "function" === typeof a && "function" === typeof b) return a.toString() === b.toString();
            return false;
        }
        var ActionDetails = function() {
            function ActionDetails(value, cursorPos, oldValue, oldSelection) {
                _classCallCheck(this, ActionDetails);
                this.value = value;
                this.cursorPos = cursorPos;
                this.oldValue = oldValue;
                this.oldSelection = oldSelection;
                while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) --this.oldSelection.start;
            }
            _createClass(ActionDetails, [ {
                key: "startChangePos",
                get: function get() {
                    return Math.min(this.cursorPos, this.oldSelection.start);
                }
            }, {
                key: "insertedCount",
                get: function get() {
                    return this.cursorPos - this.startChangePos;
                }
            }, {
                key: "inserted",
                get: function get() {
                    return this.value.substr(this.startChangePos, this.insertedCount);
                }
            }, {
                key: "removedCount",
                get: function get() {
                    return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
                }
            }, {
                key: "removed",
                get: function get() {
                    return this.oldValue.substr(this.startChangePos, this.removedCount);
                }
            }, {
                key: "head",
                get: function get() {
                    return this.value.substring(0, this.startChangePos);
                }
            }, {
                key: "tail",
                get: function get() {
                    return this.value.substring(this.startChangePos + this.insertedCount);
                }
            }, {
                key: "removeDirection",
                get: function get() {
                    if (!this.removedCount || this.insertedCount) return DIRECTION.NONE;
                    return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
                }
            } ]);
            return ActionDetails;
        }();
        var ContinuousTailDetails = function() {
            function ContinuousTailDetails() {
                var value = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                var from = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                var stop = arguments.length > 2 ? arguments[2] : void 0;
                _classCallCheck(this, ContinuousTailDetails);
                this.value = value;
                this.from = from;
                this.stop = stop;
            }
            _createClass(ContinuousTailDetails, [ {
                key: "toString",
                value: function toString() {
                    return this.value;
                }
            }, {
                key: "extend",
                value: function extend(tail) {
                    this.value += String(tail);
                }
            }, {
                key: "appendTo",
                value: function appendTo(masked) {
                    return masked.append(this.toString(), {
                        tail: true
                    }).aggregate(masked._appendPlaceholder());
                }
            }, {
                key: "state",
                get: function get() {
                    return {
                        value: this.value,
                        from: this.from,
                        stop: this.stop
                    };
                },
                set: function set(state) {
                    Object.assign(this, state);
                }
            }, {
                key: "unshift",
                value: function unshift(beforePos) {
                    if (!this.value.length || null != beforePos && this.from >= beforePos) return "";
                    var shiftChar = this.value[0];
                    this.value = this.value.slice(1);
                    return shiftChar;
                }
            }, {
                key: "shift",
                value: function shift() {
                    if (!this.value.length) return "";
                    var shiftChar = this.value[this.value.length - 1];
                    this.value = this.value.slice(0, -1);
                    return shiftChar;
                }
            } ]);
            return ContinuousTailDetails;
        }();
        function IMask(el) {
            var opts = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new IMask.InputMask(el, opts);
        }
        var Masked = function() {
            function Masked(opts) {
                _classCallCheck(this, Masked);
                this._value = "";
                this._update(Object.assign({}, Masked.DEFAULTS, opts));
                this.isInitialized = true;
            }
            _createClass(Masked, [ {
                key: "updateOptions",
                value: function updateOptions(opts) {
                    if (!Object.keys(opts).length) return;
                    this.withValueRefresh(this._update.bind(this, opts));
                }
            }, {
                key: "_update",
                value: function _update(opts) {
                    Object.assign(this, opts);
                }
            }, {
                key: "state",
                get: function get() {
                    return {
                        _value: this.value
                    };
                },
                set: function set(state) {
                    this._value = state._value;
                }
            }, {
                key: "reset",
                value: function reset() {
                    this._value = "";
                }
            }, {
                key: "value",
                get: function get() {
                    return this._value;
                },
                set: function set(value) {
                    this.resolve(value);
                }
            }, {
                key: "resolve",
                value: function resolve(value) {
                    this.reset();
                    this.append(value, {
                        input: true
                    }, "");
                    this.doCommit();
                    return this.value;
                }
            }, {
                key: "unmaskedValue",
                get: function get() {
                    return this.value;
                },
                set: function set(value) {
                    this.reset();
                    this.append(value, {}, "");
                    this.doCommit();
                }
            }, {
                key: "typedValue",
                get: function get() {
                    return this.doParse(this.value);
                },
                set: function set(value) {
                    this.value = this.doFormat(value);
                }
            }, {
                key: "rawInputValue",
                get: function get() {
                    return this.extractInput(0, this.value.length, {
                        raw: true
                    });
                },
                set: function set(value) {
                    this.reset();
                    this.append(value, {
                        raw: true
                    }, "");
                    this.doCommit();
                }
            }, {
                key: "isComplete",
                get: function get() {
                    return true;
                }
            }, {
                key: "isFilled",
                get: function get() {
                    return this.isComplete;
                }
            }, {
                key: "nearestInputPos",
                value: function nearestInputPos(cursorPos, direction) {
                    return cursorPos;
                }
            }, {
                key: "extractInput",
                value: function extractInput() {
                    var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    return this.value.slice(fromPos, toPos);
                }
            }, {
                key: "extractTail",
                value: function extractTail() {
                    var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
                }
            }, {
                key: "appendTail",
                value: function appendTail(tail) {
                    if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
                    return tail.appendTo(this);
                }
            }, {
                key: "_appendCharRaw",
                value: function _appendCharRaw(ch) {
                    if (!ch) return new ChangeDetails;
                    this._value += ch;
                    return new ChangeDetails({
                        inserted: ch,
                        rawInserted: ch
                    });
                }
            }, {
                key: "_appendChar",
                value: function _appendChar(ch) {
                    var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    var checkTail = arguments.length > 2 ? arguments[2] : void 0;
                    var consistentState = this.state;
                    var details;
                    var _normalizePrepare = normalizePrepare(this.doPrepare(ch, flags));
                    var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);
                    ch = _normalizePrepare2[0];
                    details = _normalizePrepare2[1];
                    details = details.aggregate(this._appendCharRaw(ch, flags));
                    if (details.inserted) {
                        var consistentTail;
                        var appended = false !== this.doValidate(flags);
                        if (appended && null != checkTail) {
                            var beforeTailState = this.state;
                            if (true === this.overwrite) {
                                consistentTail = checkTail.state;
                                checkTail.unshift(this.value.length);
                            }
                            var tailDetails = this.appendTail(checkTail);
                            appended = tailDetails.rawInserted === checkTail.toString();
                            if (!(appended && tailDetails.inserted) && "shift" === this.overwrite) {
                                this.state = beforeTailState;
                                consistentTail = checkTail.state;
                                checkTail.shift();
                                tailDetails = this.appendTail(checkTail);
                                appended = tailDetails.rawInserted === checkTail.toString();
                            }
                            if (appended && tailDetails.inserted) this.state = beforeTailState;
                        }
                        if (!appended) {
                            details = new ChangeDetails;
                            this.state = consistentState;
                            if (checkTail && consistentTail) checkTail.state = consistentTail;
                        }
                    }
                    return details;
                }
            }, {
                key: "_appendPlaceholder",
                value: function _appendPlaceholder() {
                    return new ChangeDetails;
                }
            }, {
                key: "_appendEager",
                value: function _appendEager() {
                    return new ChangeDetails;
                }
            }, {
                key: "append",
                value: function append(str, flags, tail) {
                    if (!isString(str)) throw new Error("value should be string");
                    var details = new ChangeDetails;
                    var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
                    if (flags && flags.tail) flags._beforeTailState = this.state;
                    for (var ci = 0; ci < str.length; ++ci) details.aggregate(this._appendChar(str[ci], flags, checkTail));
                    if (null != checkTail) details.tailShift += this.appendTail(checkTail).tailShift;
                    if (this.eager && null !== flags && void 0 !== flags && flags.input && str) details.aggregate(this._appendEager());
                    return details;
                }
            }, {
                key: "remove",
                value: function remove() {
                    var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
                    return new ChangeDetails;
                }
            }, {
                key: "withValueRefresh",
                value: function withValueRefresh(fn) {
                    if (this._refreshing || !this.isInitialized) return fn();
                    this._refreshing = true;
                    var rawInput = this.rawInputValue;
                    var value = this.value;
                    var ret = fn();
                    this.rawInputValue = rawInput;
                    if (this.value && this.value !== value && 0 === value.indexOf(this.value)) this.append(value.slice(this.value.length), {}, "");
                    delete this._refreshing;
                    return ret;
                }
            }, {
                key: "runIsolated",
                value: function runIsolated(fn) {
                    if (this._isolated || !this.isInitialized) return fn(this);
                    this._isolated = true;
                    var state = this.state;
                    var ret = fn(this);
                    this.state = state;
                    delete this._isolated;
                    return ret;
                }
            }, {
                key: "doPrepare",
                value: function doPrepare(str) {
                    var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.prepare ? this.prepare(str, this, flags) : str;
                }
            }, {
                key: "doValidate",
                value: function doValidate(flags) {
                    return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
                }
            }, {
                key: "doCommit",
                value: function doCommit() {
                    if (this.commit) this.commit(this.value, this);
                }
            }, {
                key: "doFormat",
                value: function doFormat(value) {
                    return this.format ? this.format(value, this) : value;
                }
            }, {
                key: "doParse",
                value: function doParse(str) {
                    return this.parse ? this.parse(str, this) : str;
                }
            }, {
                key: "splice",
                value: function splice(start, deleteCount, inserted, removeDirection) {
                    var tailPos = start + deleteCount;
                    var tail = this.extractTail(tailPos);
                    var oldRawValue;
                    if (this.eager) {
                        removeDirection = forceDirection(removeDirection);
                        oldRawValue = this.extractInput(0, tailPos, {
                            raw: true
                        });
                    }
                    var startChangePos = this.nearestInputPos(start, deleteCount > 1 && 0 !== start && !this.eager ? DIRECTION.NONE : removeDirection);
                    var details = new ChangeDetails({
                        tailShift: startChangePos - start
                    }).aggregate(this.remove(startChangePos));
                    if (this.eager && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) if (removeDirection === DIRECTION.FORCE_LEFT) {
                        var valLength;
                        while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) details.aggregate(new ChangeDetails({
                            tailShift: -1
                        })).aggregate(this.remove(valLength - 1));
                    } else if (removeDirection === DIRECTION.FORCE_RIGHT) tail.unshift();
                    return details.aggregate(this.append(inserted, {
                        input: true
                    }, tail));
                }
            }, {
                key: "maskEquals",
                value: function maskEquals(mask) {
                    return this.mask === mask;
                }
            } ]);
            return Masked;
        }();
        Masked.DEFAULTS = {
            format: function format(v) {
                return v;
            },
            parse: function parse(v) {
                return v;
            }
        };
        IMask.Masked = Masked;
        function maskedClass(mask) {
            if (null == mask) throw new Error("mask property should be defined");
            if (mask instanceof RegExp) return IMask.MaskedRegExp;
            if (isString(mask)) return IMask.MaskedPattern;
            if (mask instanceof Date || mask === Date) return IMask.MaskedDate;
            if (mask instanceof Number || "number" === typeof mask || mask === Number) return IMask.MaskedNumber;
            if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic;
            if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask;
            if (mask instanceof IMask.Masked) return mask.constructor;
            if (mask instanceof Function) return IMask.MaskedFunction;
            console.warn("Mask not found for mask", mask);
            return IMask.Masked;
        }
        function createMask(opts) {
            if (IMask.Masked && opts instanceof IMask.Masked) return opts;
            opts = Object.assign({}, opts);
            var mask = opts.mask;
            if (IMask.Masked && mask instanceof IMask.Masked) return mask;
            var MaskedClass = maskedClass(mask);
            if (!MaskedClass) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
            return new MaskedClass(opts);
        }
        IMask.createMask = createMask;
        var _excluded = [ "mask" ];
        var DEFAULT_INPUT_DEFINITIONS = {
            0: /\d/,
            a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
            "*": /./
        };
        var PatternInputDefinition = function() {
            function PatternInputDefinition(opts) {
                _classCallCheck(this, PatternInputDefinition);
                var mask = opts.mask, blockOpts = _objectWithoutProperties(opts, _excluded);
                this.masked = createMask({
                    mask
                });
                Object.assign(this, blockOpts);
            }
            _createClass(PatternInputDefinition, [ {
                key: "reset",
                value: function reset() {
                    this.isFilled = false;
                    this.masked.reset();
                }
            }, {
                key: "remove",
                value: function remove() {
                    var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    if (0 === fromPos && toPos >= 1) {
                        this.isFilled = false;
                        return this.masked.remove(fromPos, toPos);
                    }
                    return new ChangeDetails;
                }
            }, {
                key: "value",
                get: function get() {
                    return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
                }
            }, {
                key: "unmaskedValue",
                get: function get() {
                    return this.masked.unmaskedValue;
                }
            }, {
                key: "isComplete",
                get: function get() {
                    return Boolean(this.masked.value) || this.isOptional;
                }
            }, {
                key: "_appendChar",
                value: function _appendChar(ch) {
                    var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.isFilled) return new ChangeDetails;
                    var state = this.masked.state;
                    var details = this.masked._appendChar(ch, flags);
                    if (details.inserted && false === this.doValidate(flags)) {
                        details.inserted = details.rawInserted = "";
                        this.masked.state = state;
                    }
                    if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) details.inserted = this.placeholderChar;
                    details.skip = !details.inserted && !this.isOptional;
                    this.isFilled = Boolean(details.inserted);
                    return details;
                }
            }, {
                key: "append",
                value: function append() {
                    var _this$masked;
                    return (_this$masked = this.masked).append.apply(_this$masked, arguments);
                }
            }, {
                key: "_appendPlaceholder",
                value: function _appendPlaceholder() {
                    var details = new ChangeDetails;
                    if (this.isFilled || this.isOptional) return details;
                    this.isFilled = true;
                    details.inserted = this.placeholderChar;
                    return details;
                }
            }, {
                key: "_appendEager",
                value: function _appendEager() {
                    return new ChangeDetails;
                }
            }, {
                key: "extractTail",
                value: function extractTail() {
                    var _this$masked2;
                    return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
                }
            }, {
                key: "appendTail",
                value: function appendTail() {
                    var _this$masked3;
                    return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
                }
            }, {
                key: "extractInput",
                value: function extractInput() {
                    var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    var flags = arguments.length > 2 ? arguments[2] : void 0;
                    return this.masked.extractInput(fromPos, toPos, flags);
                }
            }, {
                key: "nearestInputPos",
                value: function nearestInputPos(cursorPos) {
                    var direction = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DIRECTION.NONE;
                    var minPos = 0;
                    var maxPos = this.value.length;
                    var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
                    switch (direction) {
                      case DIRECTION.LEFT:
                      case DIRECTION.FORCE_LEFT:
                        return this.isComplete ? boundPos : minPos;

                      case DIRECTION.RIGHT:
                      case DIRECTION.FORCE_RIGHT:
                        return this.isComplete ? boundPos : maxPos;

                      case DIRECTION.NONE:
                      default:
                        return boundPos;
                    }
                }
            }, {
                key: "doValidate",
                value: function doValidate() {
                    var _this$masked4, _this$parent;
                    return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
                }
            }, {
                key: "doCommit",
                value: function doCommit() {
                    this.masked.doCommit();
                }
            }, {
                key: "state",
                get: function get() {
                    return {
                        masked: this.masked.state,
                        isFilled: this.isFilled
                    };
                },
                set: function set(state) {
                    this.masked.state = state.masked;
                    this.isFilled = state.isFilled;
                }
            } ]);
            return PatternInputDefinition;
        }();
        var PatternFixedDefinition = function() {
            function PatternFixedDefinition(opts) {
                _classCallCheck(this, PatternFixedDefinition);
                Object.assign(this, opts);
                this._value = "";
                this.isFixed = true;
            }
            _createClass(PatternFixedDefinition, [ {
                key: "value",
                get: function get() {
                    return this._value;
                }
            }, {
                key: "unmaskedValue",
                get: function get() {
                    return this.isUnmasking ? this.value : "";
                }
            }, {
                key: "reset",
                value: function reset() {
                    this._isRawInput = false;
                    this._value = "";
                }
            }, {
                key: "remove",
                value: function remove() {
                    var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
                    this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
                    if (!this._value) this._isRawInput = false;
                    return new ChangeDetails;
                }
            }, {
                key: "nearestInputPos",
                value: function nearestInputPos(cursorPos) {
                    var direction = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DIRECTION.NONE;
                    var minPos = 0;
                    var maxPos = this._value.length;
                    switch (direction) {
                      case DIRECTION.LEFT:
                      case DIRECTION.FORCE_LEFT:
                        return minPos;

                      case DIRECTION.NONE:
                      case DIRECTION.RIGHT:
                      case DIRECTION.FORCE_RIGHT:
                      default:
                        return maxPos;
                    }
                }
            }, {
                key: "extractInput",
                value: function extractInput() {
                    var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
                    var flags = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || "";
                }
            }, {
                key: "isComplete",
                get: function get() {
                    return true;
                }
            }, {
                key: "isFilled",
                get: function get() {
                    return Boolean(this._value);
                }
            }, {
                key: "_appendChar",
                value: function _appendChar(ch) {
                    var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    var details = new ChangeDetails;
                    if (this._value) return details;
                    var appended = this.char === ch;
                    var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !this.eager && !flags.tail;
                    if (isResolved) details.rawInserted = this.char;
                    this._value = details.inserted = this.char;
                    this._isRawInput = isResolved && (flags.raw || flags.input);
                    return details;
                }
            }, {
                key: "_appendEager",
                value: function _appendEager() {
                    return this._appendChar(this.char);
                }
            }, {
                key: "_appendPlaceholder",
                value: function _appendPlaceholder() {
                    var details = new ChangeDetails;
                    if (this._value) return details;
                    this._value = details.inserted = this.char;
                    return details;
                }
            }, {
                key: "extractTail",
                value: function extractTail() {
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    return new ContinuousTailDetails("");
                }
            }, {
                key: "appendTail",
                value: function appendTail(tail) {
                    if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
                    return tail.appendTo(this);
                }
            }, {
                key: "append",
                value: function append(str, flags, tail) {
                    var details = this._appendChar(str[0], flags);
                    if (null != tail) details.tailShift += this.appendTail(tail).tailShift;
                    return details;
                }
            }, {
                key: "doCommit",
                value: function doCommit() {}
            }, {
                key: "state",
                get: function get() {
                    return {
                        _value: this._value,
                        _isRawInput: this._isRawInput
                    };
                },
                set: function set(state) {
                    Object.assign(this, state);
                }
            } ]);
            return PatternFixedDefinition;
        }();
        var chunk_tail_details_excluded = [ "chunks" ];
        var ChunksTailDetails = function() {
            function ChunksTailDetails() {
                var chunks = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                var from = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                _classCallCheck(this, ChunksTailDetails);
                this.chunks = chunks;
                this.from = from;
            }
            _createClass(ChunksTailDetails, [ {
                key: "toString",
                value: function toString() {
                    return this.chunks.map(String).join("");
                }
            }, {
                key: "extend",
                value: function extend(tailChunk) {
                    if (!String(tailChunk)) return;
                    if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
                    var lastChunk = this.chunks[this.chunks.length - 1];
                    var extendLast = lastChunk && (lastChunk.stop === tailChunk.stop || null == tailChunk.stop) && tailChunk.from === lastChunk.from + lastChunk.toString().length;
                    if (tailChunk instanceof ContinuousTailDetails) if (extendLast) lastChunk.extend(tailChunk.toString()); else this.chunks.push(tailChunk); else if (tailChunk instanceof ChunksTailDetails) {
                        if (null == tailChunk.stop) {
                            var firstTailChunk;
                            while (tailChunk.chunks.length && null == tailChunk.chunks[0].stop) {
                                firstTailChunk = tailChunk.chunks.shift();
                                firstTailChunk.from += tailChunk.from;
                                this.extend(firstTailChunk);
                            }
                        }
                        if (tailChunk.toString()) {
                            tailChunk.stop = tailChunk.blockIndex;
                            this.chunks.push(tailChunk);
                        }
                    }
                }
            }, {
                key: "appendTo",
                value: function appendTo(masked) {
                    if (!(masked instanceof IMask.MaskedPattern)) {
                        var tail = new ContinuousTailDetails(this.toString());
                        return tail.appendTo(masked);
                    }
                    var details = new ChangeDetails;
                    for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
                        var chunk = this.chunks[ci];
                        var lastBlockIter = masked._mapPosToBlock(masked.value.length);
                        var stop = chunk.stop;
                        var chunkBlock = void 0;
                        if (null != stop && (!lastBlockIter || lastBlockIter.index <= stop)) {
                            if (chunk instanceof ChunksTailDetails || masked._stops.indexOf(stop) >= 0) details.aggregate(masked._appendPlaceholder(stop));
                            chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
                        }
                        if (chunkBlock) {
                            var tailDetails = chunkBlock.appendTail(chunk);
                            tailDetails.skip = false;
                            details.aggregate(tailDetails);
                            masked._value += tailDetails.inserted;
                            var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
                            if (remainChars) details.aggregate(masked.append(remainChars, {
                                tail: true
                            }));
                        } else details.aggregate(masked.append(chunk.toString(), {
                            tail: true
                        }));
                    }
                    return details;
                }
            }, {
                key: "state",
                get: function get() {
                    return {
                        chunks: this.chunks.map((function(c) {
                            return c.state;
                        })),
                        from: this.from,
                        stop: this.stop,
                        blockIndex: this.blockIndex
                    };
                },
                set: function set(state) {
                    var chunks = state.chunks, props = _objectWithoutProperties(state, chunk_tail_details_excluded);
                    Object.assign(this, props);
                    this.chunks = chunks.map((function(cstate) {
                        var chunk = "chunks" in cstate ? new ChunksTailDetails : new ContinuousTailDetails;
                        chunk.state = cstate;
                        return chunk;
                    }));
                }
            }, {
                key: "unshift",
                value: function unshift(beforePos) {
                    if (!this.chunks.length || null != beforePos && this.from >= beforePos) return "";
                    var chunkShiftPos = null != beforePos ? beforePos - this.from : beforePos;
                    var ci = 0;
                    while (ci < this.chunks.length) {
                        var chunk = this.chunks[ci];
                        var shiftChar = chunk.unshift(chunkShiftPos);
                        if (chunk.toString()) {
                            if (!shiftChar) break;
                            ++ci;
                        } else this.chunks.splice(ci, 1);
                        if (shiftChar) return shiftChar;
                    }
                    return "";
                }
            }, {
                key: "shift",
                value: function shift() {
                    if (!this.chunks.length) return "";
                    var ci = this.chunks.length - 1;
                    while (0 <= ci) {
                        var chunk = this.chunks[ci];
                        var shiftChar = chunk.shift();
                        if (chunk.toString()) {
                            if (!shiftChar) break;
                            --ci;
                        } else this.chunks.splice(ci, 1);
                        if (shiftChar) return shiftChar;
                    }
                    return "";
                }
            } ]);
            return ChunksTailDetails;
        }();
        var PatternCursor = function() {
            function PatternCursor(masked, pos) {
                _classCallCheck(this, PatternCursor);
                this.masked = masked;
                this._log = [];
                var _ref = masked._mapPosToBlock(pos) || (pos < 0 ? {
                    index: 0,
                    offset: 0
                } : {
                    index: this.masked._blocks.length,
                    offset: 0
                }), offset = _ref.offset, index = _ref.index;
                this.offset = offset;
                this.index = index;
                this.ok = false;
            }
            _createClass(PatternCursor, [ {
                key: "block",
                get: function get() {
                    return this.masked._blocks[this.index];
                }
            }, {
                key: "pos",
                get: function get() {
                    return this.masked._blockStartPos(this.index) + this.offset;
                }
            }, {
                key: "state",
                get: function get() {
                    return {
                        index: this.index,
                        offset: this.offset,
                        ok: this.ok
                    };
                },
                set: function set(s) {
                    Object.assign(this, s);
                }
            }, {
                key: "pushState",
                value: function pushState() {
                    this._log.push(this.state);
                }
            }, {
                key: "popState",
                value: function popState() {
                    var s = this._log.pop();
                    this.state = s;
                    return s;
                }
            }, {
                key: "bindBlock",
                value: function bindBlock() {
                    if (this.block) return;
                    if (this.index < 0) {
                        this.index = 0;
                        this.offset = 0;
                    }
                    if (this.index >= this.masked._blocks.length) {
                        this.index = this.masked._blocks.length - 1;
                        this.offset = this.block.value.length;
                    }
                }
            }, {
                key: "_pushLeft",
                value: function _pushLeft(fn) {
                    this.pushState();
                    for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = (null === (_this$block = this.block) || void 0 === _this$block ? void 0 : _this$block.value.length) || 0) {
                        var _this$block;
                        if (fn()) return this.ok = true;
                    }
                    return this.ok = false;
                }
            }, {
                key: "_pushRight",
                value: function _pushRight(fn) {
                    this.pushState();
                    for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) if (fn()) return this.ok = true;
                    return this.ok = false;
                }
            }, {
                key: "pushLeftBeforeFilled",
                value: function pushLeftBeforeFilled() {
                    var _this = this;
                    return this._pushLeft((function() {
                        if (_this.block.isFixed || !_this.block.value) return;
                        _this.offset = _this.block.nearestInputPos(_this.offset, DIRECTION.FORCE_LEFT);
                        if (0 !== _this.offset) return true;
                    }));
                }
            }, {
                key: "pushLeftBeforeInput",
                value: function pushLeftBeforeInput() {
                    var _this2 = this;
                    return this._pushLeft((function() {
                        if (_this2.block.isFixed) return;
                        _this2.offset = _this2.block.nearestInputPos(_this2.offset, DIRECTION.LEFT);
                        return true;
                    }));
                }
            }, {
                key: "pushLeftBeforeRequired",
                value: function pushLeftBeforeRequired() {
                    var _this3 = this;
                    return this._pushLeft((function() {
                        if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value) return;
                        _this3.offset = _this3.block.nearestInputPos(_this3.offset, DIRECTION.LEFT);
                        return true;
                    }));
                }
            }, {
                key: "pushRightBeforeFilled",
                value: function pushRightBeforeFilled() {
                    var _this4 = this;
                    return this._pushRight((function() {
                        if (_this4.block.isFixed || !_this4.block.value) return;
                        _this4.offset = _this4.block.nearestInputPos(_this4.offset, DIRECTION.FORCE_RIGHT);
                        if (_this4.offset !== _this4.block.value.length) return true;
                    }));
                }
            }, {
                key: "pushRightBeforeInput",
                value: function pushRightBeforeInput() {
                    var _this5 = this;
                    return this._pushRight((function() {
                        if (_this5.block.isFixed) return;
                        _this5.offset = _this5.block.nearestInputPos(_this5.offset, DIRECTION.NONE);
                        return true;
                    }));
                }
            }, {
                key: "pushRightBeforeRequired",
                value: function pushRightBeforeRequired() {
                    var _this6 = this;
                    return this._pushRight((function() {
                        if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value) return;
                        _this6.offset = _this6.block.nearestInputPos(_this6.offset, DIRECTION.NONE);
                        return true;
                    }));
                }
            } ]);
            return PatternCursor;
        }();
        var MaskedRegExp = function(_Masked) {
            _inherits(MaskedRegExp, _Masked);
            var _super = _createSuper(MaskedRegExp);
            function MaskedRegExp() {
                _classCallCheck(this, MaskedRegExp);
                return _super.apply(this, arguments);
            }
            _createClass(MaskedRegExp, [ {
                key: "_update",
                value: function _update(opts) {
                    if (opts.mask) opts.validate = function(value) {
                        return value.search(opts.mask) >= 0;
                    };
                    _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
                }
            } ]);
            return MaskedRegExp;
        }(Masked);
        IMask.MaskedRegExp = MaskedRegExp;
        var pattern_excluded = [ "_blocks" ];
        var MaskedPattern = function(_Masked) {
            _inherits(MaskedPattern, _Masked);
            var _super = _createSuper(MaskedPattern);
            function MaskedPattern() {
                var opts = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                _classCallCheck(this, MaskedPattern);
                opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
                return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
            }
            _createClass(MaskedPattern, [ {
                key: "_update",
                value: function _update() {
                    var opts = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    opts.definitions = Object.assign({}, this.definitions, opts.definitions);
                    _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);
                    this._rebuildMask();
                }
            }, {
                key: "_rebuildMask",
                value: function _rebuildMask() {
                    var _this = this;
                    var defs = this.definitions;
                    this._blocks = [];
                    this._stops = [];
                    this._maskedBlocks = {};
                    var pattern = this.mask;
                    if (!pattern || !defs) return;
                    var unmaskingBlock = false;
                    var optionalBlock = false;
                    for (var i = 0; i < pattern.length; ++i) {
                        if (this.blocks) {
                            var _ret = function() {
                                var p = pattern.slice(i);
                                var bNames = Object.keys(_this.blocks).filter((function(bName) {
                                    return 0 === p.indexOf(bName);
                                }));
                                bNames.sort((function(a, b) {
                                    return b.length - a.length;
                                }));
                                var bName = bNames[0];
                                if (bName) {
                                    var maskedBlock = createMask(Object.assign({
                                        parent: _this,
                                        lazy: _this.lazy,
                                        eager: _this.eager,
                                        placeholderChar: _this.placeholderChar,
                                        overwrite: _this.overwrite
                                    }, _this.blocks[bName]));
                                    if (maskedBlock) {
                                        _this._blocks.push(maskedBlock);
                                        if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];
                                        _this._maskedBlocks[bName].push(_this._blocks.length - 1);
                                    }
                                    i += bName.length - 1;
                                    return "continue";
                                }
                            }();
                            if ("continue" === _ret) continue;
                        }
                        var char = pattern[i];
                        var isInput = char in defs;
                        if (char === MaskedPattern.STOP_CHAR) {
                            this._stops.push(this._blocks.length);
                            continue;
                        }
                        if ("{" === char || "}" === char) {
                            unmaskingBlock = !unmaskingBlock;
                            continue;
                        }
                        if ("[" === char || "]" === char) {
                            optionalBlock = !optionalBlock;
                            continue;
                        }
                        if (char === MaskedPattern.ESCAPE_CHAR) {
                            ++i;
                            char = pattern[i];
                            if (!char) break;
                            isInput = false;
                        }
                        var def = isInput ? new PatternInputDefinition({
                            parent: this,
                            lazy: this.lazy,
                            eager: this.eager,
                            placeholderChar: this.placeholderChar,
                            mask: defs[char],
                            isOptional: optionalBlock
                        }) : new PatternFixedDefinition({
                            char,
                            eager: this.eager,
                            isUnmasking: unmaskingBlock
                        });
                        this._blocks.push(def);
                    }
                }
            }, {
                key: "state",
                get: function get() {
                    return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
                        _blocks: this._blocks.map((function(b) {
                            return b.state;
                        }))
                    });
                },
                set: function set(state) {
                    var _blocks = state._blocks, maskedState = _objectWithoutProperties(state, pattern_excluded);
                    this._blocks.forEach((function(b, bi) {
                        return b.state = _blocks[bi];
                    }));
                    _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
                }
            }, {
                key: "reset",
                value: function reset() {
                    _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);
                    this._blocks.forEach((function(b) {
                        return b.reset();
                    }));
                }
            }, {
                key: "isComplete",
                get: function get() {
                    return this._blocks.every((function(b) {
                        return b.isComplete;
                    }));
                }
            }, {
                key: "isFilled",
                get: function get() {
                    return this._blocks.every((function(b) {
                        return b.isFilled;
                    }));
                }
            }, {
                key: "isFixed",
                get: function get() {
                    return this._blocks.every((function(b) {
                        return b.isFixed;
                    }));
                }
            }, {
                key: "isOptional",
                get: function get() {
                    return this._blocks.every((function(b) {
                        return b.isOptional;
                    }));
                }
            }, {
                key: "doCommit",
                value: function doCommit() {
                    this._blocks.forEach((function(b) {
                        return b.doCommit();
                    }));
                    _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
                }
            }, {
                key: "unmaskedValue",
                get: function get() {
                    return this._blocks.reduce((function(str, b) {
                        return str += b.unmaskedValue;
                    }), "");
                },
                set: function set(unmaskedValue) {
                    _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
                }
            }, {
                key: "value",
                get: function get() {
                    return this._blocks.reduce((function(str, b) {
                        return str += b.value;
                    }), "");
                },
                set: function set(value) {
                    _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
                }
            }, {
                key: "appendTail",
                value: function appendTail(tail) {
                    return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
                }
            }, {
                key: "_appendEager",
                value: function _appendEager() {
                    var _this$_mapPosToBlock;
                    var details = new ChangeDetails;
                    var startBlockIndex = null === (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) || void 0 === _this$_mapPosToBlock ? void 0 : _this$_mapPosToBlock.index;
                    if (null == startBlockIndex) return details;
                    if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
                    for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
                        var d = this._blocks[bi]._appendEager();
                        if (!d.inserted) break;
                        details.aggregate(d);
                    }
                    return details;
                }
            }, {
                key: "_appendCharRaw",
                value: function _appendCharRaw(ch) {
                    var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    var blockIter = this._mapPosToBlock(this.value.length);
                    var details = new ChangeDetails;
                    if (!blockIter) return details;
                    for (var bi = blockIter.index; ;++bi) {
                        var _flags$_beforeTailSta;
                        var _block = this._blocks[bi];
                        if (!_block) break;
                        var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
                            _beforeTailState: null === (_flags$_beforeTailSta = flags._beforeTailState) || void 0 === _flags$_beforeTailSta ? void 0 : _flags$_beforeTailSta._blocks[bi]
                        }));
                        var skip = blockDetails.skip;
                        details.aggregate(blockDetails);
                        if (skip || blockDetails.rawInserted) break;
                    }
                    return details;
                }
            }, {
                key: "extractTail",
                value: function extractTail() {
                    var _this2 = this;
                    var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    var chunkTail = new ChunksTailDetails;
                    if (fromPos === toPos) return chunkTail;
                    this._forEachBlocksInRange(fromPos, toPos, (function(b, bi, bFromPos, bToPos) {
                        var blockChunk = b.extractTail(bFromPos, bToPos);
                        blockChunk.stop = _this2._findStopBefore(bi);
                        blockChunk.from = _this2._blockStartPos(bi);
                        if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
                        chunkTail.extend(blockChunk);
                    }));
                    return chunkTail;
                }
            }, {
                key: "extractInput",
                value: function extractInput() {
                    var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    var flags = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (fromPos === toPos) return "";
                    var input = "";
                    this._forEachBlocksInRange(fromPos, toPos, (function(b, _, fromPos, toPos) {
                        input += b.extractInput(fromPos, toPos, flags);
                    }));
                    return input;
                }
            }, {
                key: "_findStopBefore",
                value: function _findStopBefore(blockIndex) {
                    var stopBefore;
                    for (var si = 0; si < this._stops.length; ++si) {
                        var stop = this._stops[si];
                        if (stop <= blockIndex) stopBefore = stop; else break;
                    }
                    return stopBefore;
                }
            }, {
                key: "_appendPlaceholder",
                value: function _appendPlaceholder(toBlockIndex) {
                    var _this3 = this;
                    var details = new ChangeDetails;
                    if (this.lazy && null == toBlockIndex) return details;
                    var startBlockIter = this._mapPosToBlock(this.value.length);
                    if (!startBlockIter) return details;
                    var startBlockIndex = startBlockIter.index;
                    var endBlockIndex = null != toBlockIndex ? toBlockIndex : this._blocks.length;
                    this._blocks.slice(startBlockIndex, endBlockIndex).forEach((function(b) {
                        if (!b.lazy || null != toBlockIndex) {
                            var args = null != b._blocks ? [ b._blocks.length ] : [];
                            var bDetails = b._appendPlaceholder.apply(b, args);
                            _this3._value += bDetails.inserted;
                            details.aggregate(bDetails);
                        }
                    }));
                    return details;
                }
            }, {
                key: "_mapPosToBlock",
                value: function _mapPosToBlock(pos) {
                    var accVal = "";
                    for (var bi = 0; bi < this._blocks.length; ++bi) {
                        var _block2 = this._blocks[bi];
                        var blockStartPos = accVal.length;
                        accVal += _block2.value;
                        if (pos <= accVal.length) return {
                            index: bi,
                            offset: pos - blockStartPos
                        };
                    }
                }
            }, {
                key: "_blockStartPos",
                value: function _blockStartPos(blockIndex) {
                    return this._blocks.slice(0, blockIndex).reduce((function(pos, b) {
                        return pos += b.value.length;
                    }), 0);
                }
            }, {
                key: "_forEachBlocksInRange",
                value: function _forEachBlocksInRange(fromPos) {
                    var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    var fn = arguments.length > 2 ? arguments[2] : void 0;
                    var fromBlockIter = this._mapPosToBlock(fromPos);
                    if (fromBlockIter) {
                        var toBlockIter = this._mapPosToBlock(toPos);
                        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
                        var fromBlockStartPos = fromBlockIter.offset;
                        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
                        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
                        if (toBlockIter && !isSameBlock) {
                            for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
                            fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
                        }
                    }
                }
            }, {
                key: "remove",
                value: function remove() {
                    var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);
                    this._forEachBlocksInRange(fromPos, toPos, (function(b, _, bFromPos, bToPos) {
                        removeDetails.aggregate(b.remove(bFromPos, bToPos));
                    }));
                    return removeDetails;
                }
            }, {
                key: "nearestInputPos",
                value: function nearestInputPos(cursorPos) {
                    var direction = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DIRECTION.NONE;
                    if (!this._blocks.length) return 0;
                    var cursor = new PatternCursor(this, cursorPos);
                    if (direction === DIRECTION.NONE) {
                        if (cursor.pushRightBeforeInput()) return cursor.pos;
                        cursor.popState();
                        if (cursor.pushLeftBeforeInput()) return cursor.pos;
                        return this.value.length;
                    }
                    if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
                        if (direction === DIRECTION.LEFT) {
                            cursor.pushRightBeforeFilled();
                            if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
                            cursor.popState();
                        }
                        cursor.pushLeftBeforeInput();
                        cursor.pushLeftBeforeRequired();
                        cursor.pushLeftBeforeFilled();
                        if (direction === DIRECTION.LEFT) {
                            cursor.pushRightBeforeInput();
                            cursor.pushRightBeforeRequired();
                            if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                            cursor.popState();
                            if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                            cursor.popState();
                        }
                        if (cursor.ok) return cursor.pos;
                        if (direction === DIRECTION.FORCE_LEFT) return 0;
                        cursor.popState();
                        if (cursor.ok) return cursor.pos;
                        cursor.popState();
                        if (cursor.ok) return cursor.pos;
                        return 0;
                    }
                    if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
                        cursor.pushRightBeforeInput();
                        cursor.pushRightBeforeRequired();
                        if (cursor.pushRightBeforeFilled()) return cursor.pos;
                        if (direction === DIRECTION.FORCE_RIGHT) return this.value.length;
                        cursor.popState();
                        if (cursor.ok) return cursor.pos;
                        cursor.popState();
                        if (cursor.ok) return cursor.pos;
                        return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
                    }
                    return cursorPos;
                }
            }, {
                key: "maskedBlock",
                value: function maskedBlock(name) {
                    return this.maskedBlocks(name)[0];
                }
            }, {
                key: "maskedBlocks",
                value: function maskedBlocks(name) {
                    var _this4 = this;
                    var indices = this._maskedBlocks[name];
                    if (!indices) return [];
                    return indices.map((function(gi) {
                        return _this4._blocks[gi];
                    }));
                }
            } ]);
            return MaskedPattern;
        }(Masked);
        MaskedPattern.DEFAULTS = {
            lazy: true,
            placeholderChar: "_"
        };
        MaskedPattern.STOP_CHAR = "`";
        MaskedPattern.ESCAPE_CHAR = "\\";
        MaskedPattern.InputDefinition = PatternInputDefinition;
        MaskedPattern.FixedDefinition = PatternFixedDefinition;
        IMask.MaskedPattern = MaskedPattern;
        var MaskedRange = function(_MaskedPattern) {
            _inherits(MaskedRange, _MaskedPattern);
            var _super = _createSuper(MaskedRange);
            function MaskedRange() {
                _classCallCheck(this, MaskedRange);
                return _super.apply(this, arguments);
            }
            _createClass(MaskedRange, [ {
                key: "_matchFrom",
                get: function get() {
                    return this.maxLength - String(this.from).length;
                }
            }, {
                key: "_update",
                value: function _update(opts) {
                    opts = Object.assign({
                        to: this.to || 0,
                        from: this.from || 0,
                        maxLength: this.maxLength || 0
                    }, opts);
                    var maxLength = String(opts.to).length;
                    if (null != opts.maxLength) maxLength = Math.max(maxLength, opts.maxLength);
                    opts.maxLength = maxLength;
                    var fromStr = String(opts.from).padStart(maxLength, "0");
                    var toStr = String(opts.to).padStart(maxLength, "0");
                    var sameCharsCount = 0;
                    while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
                    opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, "\\0") + "0".repeat(maxLength - sameCharsCount);
                    _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
                }
            }, {
                key: "isComplete",
                get: function get() {
                    return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
                }
            }, {
                key: "boundaries",
                value: function boundaries(str) {
                    var minstr = "";
                    var maxstr = "";
                    var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [], _ref2 = _slicedToArray(_ref, 3), placeholder = _ref2[1], num = _ref2[2];
                    if (num) {
                        minstr = "0".repeat(placeholder.length) + num;
                        maxstr = "9".repeat(placeholder.length) + num;
                    }
                    minstr = minstr.padEnd(this.maxLength, "0");
                    maxstr = maxstr.padEnd(this.maxLength, "9");
                    return [ minstr, maxstr ];
                }
            }, {
                key: "doPrepare",
                value: function doPrepare(ch) {
                    var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    var details;
                    var _normalizePrepare = normalizePrepare(_get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ""), flags));
                    var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);
                    ch = _normalizePrepare2[0];
                    details = _normalizePrepare2[1];
                    if (!this.autofix || !ch) return ch;
                    var fromStr = String(this.from).padStart(this.maxLength, "0");
                    var toStr = String(this.to).padStart(this.maxLength, "0");
                    var nextVal = this.value + ch;
                    if (nextVal.length > this.maxLength) return "";
                    var _this$boundaries = this.boundaries(nextVal), _this$boundaries2 = _slicedToArray(_this$boundaries, 2), minstr = _this$boundaries2[0], maxstr = _this$boundaries2[1];
                    if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];
                    if (Number(minstr) > this.to) {
                        if ("pad" === this.autofix && nextVal.length < this.maxLength) return [ "", details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags)) ];
                        return toStr[nextVal.length - 1];
                    }
                    return ch;
                }
            }, {
                key: "doValidate",
                value: function doValidate() {
                    var _get2;
                    var str = this.value;
                    var firstNonZero = str.search(/[^0]/);
                    if (-1 === firstNonZero && str.length <= this._matchFrom) return true;
                    var _this$boundaries3 = this.boundaries(str), _this$boundaries4 = _slicedToArray(_this$boundaries3, 2), minstr = _this$boundaries4[0], maxstr = _this$boundaries4[1];
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [ this ].concat(args));
                }
            } ]);
            return MaskedRange;
        }(MaskedPattern);
        IMask.MaskedRange = MaskedRange;
        var MaskedDate = function(_MaskedPattern) {
            _inherits(MaskedDate, _MaskedPattern);
            var _super = _createSuper(MaskedDate);
            function MaskedDate(opts) {
                _classCallCheck(this, MaskedDate);
                return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
            }
            _createClass(MaskedDate, [ {
                key: "_update",
                value: function _update(opts) {
                    if (opts.mask === Date) delete opts.mask;
                    if (opts.pattern) opts.mask = opts.pattern;
                    var blocks = opts.blocks;
                    opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
                    if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
                    if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();
                    if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
                        opts.blocks.m.from = opts.min.getMonth() + 1;
                        opts.blocks.m.to = opts.max.getMonth() + 1;
                        if (opts.blocks.m.from === opts.blocks.m.to) {
                            opts.blocks.d.from = opts.min.getDate();
                            opts.blocks.d.to = opts.max.getDate();
                        }
                    }
                    Object.assign(opts.blocks, this.blocks, blocks);
                    Object.keys(opts.blocks).forEach((function(bk) {
                        var b = opts.blocks[bk];
                        if (!("autofix" in b) && "autofix" in opts) b.autofix = opts.autofix;
                    }));
                    _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
                }
            }, {
                key: "doValidate",
                value: function doValidate() {
                    var _get2;
                    var date = this.date;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [ this ].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && null != date && (null == this.min || this.min <= date) && (null == this.max || date <= this.max));
                }
            }, {
                key: "isDateExist",
                value: function isDateExist(str) {
                    return this.format(this.parse(str, this), this).indexOf(str) >= 0;
                }
            }, {
                key: "date",
                get: function get() {
                    return this.typedValue;
                },
                set: function set(date) {
                    this.typedValue = date;
                }
            }, {
                key: "typedValue",
                get: function get() {
                    return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null;
                },
                set: function set(value) {
                    _set(_getPrototypeOf(MaskedDate.prototype), "typedValue", value, this, true);
                }
            }, {
                key: "maskEquals",
                value: function maskEquals(mask) {
                    return mask === Date || _get(_getPrototypeOf(MaskedDate.prototype), "maskEquals", this).call(this, mask);
                }
            } ]);
            return MaskedDate;
        }(MaskedPattern);
        MaskedDate.DEFAULTS = {
            pattern: "d{.}`m{.}`Y",
            format: function format(date) {
                if (!date) return "";
                var day = String(date.getDate()).padStart(2, "0");
                var month = String(date.getMonth() + 1).padStart(2, "0");
                var year = date.getFullYear();
                return [ day, month, year ].join(".");
            },
            parse: function parse(str) {
                var _str$split = str.split("."), _str$split2 = _slicedToArray(_str$split, 3), day = _str$split2[0], month = _str$split2[1], year = _str$split2[2];
                return new Date(year, month - 1, day);
            }
        };
        MaskedDate.GET_DEFAULT_BLOCKS = function() {
            return {
                d: {
                    mask: MaskedRange,
                    from: 1,
                    to: 31,
                    maxLength: 2
                },
                m: {
                    mask: MaskedRange,
                    from: 1,
                    to: 12,
                    maxLength: 2
                },
                Y: {
                    mask: MaskedRange,
                    from: 1900,
                    to: 9999
                }
            };
        };
        IMask.MaskedDate = MaskedDate;
        var MaskElement = function() {
            function MaskElement() {
                _classCallCheck(this, MaskElement);
            }
            _createClass(MaskElement, [ {
                key: "selectionStart",
                get: function get() {
                    var start;
                    try {
                        start = this._unsafeSelectionStart;
                    } catch (e) {}
                    return null != start ? start : this.value.length;
                }
            }, {
                key: "selectionEnd",
                get: function get() {
                    var end;
                    try {
                        end = this._unsafeSelectionEnd;
                    } catch (e) {}
                    return null != end ? end : this.value.length;
                }
            }, {
                key: "select",
                value: function select(start, end) {
                    if (null == start || null == end || start === this.selectionStart && end === this.selectionEnd) return;
                    try {
                        this._unsafeSelect(start, end);
                    } catch (e) {}
                }
            }, {
                key: "_unsafeSelect",
                value: function _unsafeSelect(start, end) {}
            }, {
                key: "isActive",
                get: function get() {
                    return false;
                }
            }, {
                key: "bindEvents",
                value: function bindEvents(handlers) {}
            }, {
                key: "unbindEvents",
                value: function unbindEvents() {}
            } ]);
            return MaskElement;
        }();
        IMask.MaskElement = MaskElement;
        var HTMLMaskElement = function(_MaskElement) {
            _inherits(HTMLMaskElement, _MaskElement);
            var _super = _createSuper(HTMLMaskElement);
            function HTMLMaskElement(input) {
                var _this;
                _classCallCheck(this, HTMLMaskElement);
                _this = _super.call(this);
                _this.input = input;
                _this._handlers = {};
                return _this;
            }
            _createClass(HTMLMaskElement, [ {
                key: "rootElement",
                get: function get() {
                    var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
                    return null !== (_this$input$getRootNo = null === (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) || void 0 === _this$input$getRootNo2 ? void 0 : _this$input$getRootNo2.call(_this$input)) && void 0 !== _this$input$getRootNo ? _this$input$getRootNo : document;
                }
            }, {
                key: "isActive",
                get: function get() {
                    return this.input === this.rootElement.activeElement;
                }
            }, {
                key: "_unsafeSelectionStart",
                get: function get() {
                    return this.input.selectionStart;
                }
            }, {
                key: "_unsafeSelectionEnd",
                get: function get() {
                    return this.input.selectionEnd;
                }
            }, {
                key: "_unsafeSelect",
                value: function _unsafeSelect(start, end) {
                    this.input.setSelectionRange(start, end);
                }
            }, {
                key: "value",
                get: function get() {
                    return this.input.value;
                },
                set: function set(value) {
                    this.input.value = value;
                }
            }, {
                key: "bindEvents",
                value: function bindEvents(handlers) {
                    var _this2 = this;
                    Object.keys(handlers).forEach((function(event) {
                        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
                    }));
                }
            }, {
                key: "unbindEvents",
                value: function unbindEvents() {
                    var _this3 = this;
                    Object.keys(this._handlers).forEach((function(event) {
                        return _this3._toggleEventHandler(event);
                    }));
                }
            }, {
                key: "_toggleEventHandler",
                value: function _toggleEventHandler(event, handler) {
                    if (this._handlers[event]) {
                        this.input.removeEventListener(event, this._handlers[event]);
                        delete this._handlers[event];
                    }
                    if (handler) {
                        this.input.addEventListener(event, handler);
                        this._handlers[event] = handler;
                    }
                }
            } ]);
            return HTMLMaskElement;
        }(MaskElement);
        HTMLMaskElement.EVENTS_MAP = {
            selectionChange: "keydown",
            input: "input",
            drop: "drop",
            click: "click",
            focus: "focus",
            commit: "blur"
        };
        IMask.HTMLMaskElement = HTMLMaskElement;
        var HTMLContenteditableMaskElement = function(_HTMLMaskElement) {
            _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);
            var _super = _createSuper(HTMLContenteditableMaskElement);
            function HTMLContenteditableMaskElement() {
                _classCallCheck(this, HTMLContenteditableMaskElement);
                return _super.apply(this, arguments);
            }
            _createClass(HTMLContenteditableMaskElement, [ {
                key: "_unsafeSelectionStart",
                get: function get() {
                    var root = this.rootElement;
                    var selection = root.getSelection && root.getSelection();
                    var anchorOffset = selection && selection.anchorOffset;
                    var focusOffset = selection && selection.focusOffset;
                    if (null == focusOffset || null == anchorOffset || anchorOffset < focusOffset) return anchorOffset;
                    return focusOffset;
                }
            }, {
                key: "_unsafeSelectionEnd",
                get: function get() {
                    var root = this.rootElement;
                    var selection = root.getSelection && root.getSelection();
                    var anchorOffset = selection && selection.anchorOffset;
                    var focusOffset = selection && selection.focusOffset;
                    if (null == focusOffset || null == anchorOffset || anchorOffset > focusOffset) return anchorOffset;
                    return focusOffset;
                }
            }, {
                key: "_unsafeSelect",
                value: function _unsafeSelect(start, end) {
                    if (!this.rootElement.createRange) return;
                    var range = this.rootElement.createRange();
                    range.setStart(this.input.firstChild || this.input, start);
                    range.setEnd(this.input.lastChild || this.input, end);
                    var root = this.rootElement;
                    var selection = root.getSelection && root.getSelection();
                    if (selection) {
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                }
            }, {
                key: "value",
                get: function get() {
                    return this.input.textContent;
                },
                set: function set(value) {
                    this.input.textContent = value;
                }
            } ]);
            return HTMLContenteditableMaskElement;
        }(HTMLMaskElement);
        IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
        var input_excluded = [ "mask" ];
        var InputMask = function() {
            function InputMask(el, opts) {
                _classCallCheck(this, InputMask);
                this.el = el instanceof MaskElement ? el : el.isContentEditable && "INPUT" !== el.tagName && "TEXTAREA" !== el.tagName ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
                this.masked = createMask(opts);
                this._listeners = {};
                this._value = "";
                this._unmaskedValue = "";
                this._saveSelection = this._saveSelection.bind(this);
                this._onInput = this._onInput.bind(this);
                this._onChange = this._onChange.bind(this);
                this._onDrop = this._onDrop.bind(this);
                this._onFocus = this._onFocus.bind(this);
                this._onClick = this._onClick.bind(this);
                this.alignCursor = this.alignCursor.bind(this);
                this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
                this._bindEvents();
                this.updateValue();
                this._onChange();
            }
            _createClass(InputMask, [ {
                key: "mask",
                get: function get() {
                    return this.masked.mask;
                },
                set: function set(mask) {
                    if (this.maskEquals(mask)) return;
                    if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
                        this.masked.updateOptions({
                            mask
                        });
                        return;
                    }
                    var masked = createMask({
                        mask
                    });
                    masked.unmaskedValue = this.masked.unmaskedValue;
                    this.masked = masked;
                }
            }, {
                key: "maskEquals",
                value: function maskEquals(mask) {
                    var _this$masked;
                    return null == mask || (null === (_this$masked = this.masked) || void 0 === _this$masked ? void 0 : _this$masked.maskEquals(mask));
                }
            }, {
                key: "value",
                get: function get() {
                    return this._value;
                },
                set: function set(str) {
                    this.masked.value = str;
                    this.updateControl();
                    this.alignCursor();
                }
            }, {
                key: "unmaskedValue",
                get: function get() {
                    return this._unmaskedValue;
                },
                set: function set(str) {
                    this.masked.unmaskedValue = str;
                    this.updateControl();
                    this.alignCursor();
                }
            }, {
                key: "typedValue",
                get: function get() {
                    return this.masked.typedValue;
                },
                set: function set(val) {
                    this.masked.typedValue = val;
                    this.updateControl();
                    this.alignCursor();
                }
            }, {
                key: "_bindEvents",
                value: function _bindEvents() {
                    this.el.bindEvents({
                        selectionChange: this._saveSelection,
                        input: this._onInput,
                        drop: this._onDrop,
                        click: this._onClick,
                        focus: this._onFocus,
                        commit: this._onChange
                    });
                }
            }, {
                key: "_unbindEvents",
                value: function _unbindEvents() {
                    if (this.el) this.el.unbindEvents();
                }
            }, {
                key: "_fireEvent",
                value: function _fireEvent(ev) {
                    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
                    var listeners = this._listeners[ev];
                    if (!listeners) return;
                    listeners.forEach((function(l) {
                        return l.apply(void 0, args);
                    }));
                }
            }, {
                key: "selectionStart",
                get: function get() {
                    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
                }
            }, {
                key: "cursorPos",
                get: function get() {
                    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
                },
                set: function set(pos) {
                    if (!this.el || !this.el.isActive) return;
                    this.el.select(pos, pos);
                    this._saveSelection();
                }
            }, {
                key: "_saveSelection",
                value: function _saveSelection() {
                    if (this.value !== this.el.value) console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.");
                    this._selection = {
                        start: this.selectionStart,
                        end: this.cursorPos
                    };
                }
            }, {
                key: "updateValue",
                value: function updateValue() {
                    this.masked.value = this.el.value;
                    this._value = this.masked.value;
                }
            }, {
                key: "updateControl",
                value: function updateControl() {
                    var newUnmaskedValue = this.masked.unmaskedValue;
                    var newValue = this.masked.value;
                    var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
                    this._unmaskedValue = newUnmaskedValue;
                    this._value = newValue;
                    if (this.el.value !== newValue) this.el.value = newValue;
                    if (isChanged) this._fireChangeEvents();
                }
            }, {
                key: "updateOptions",
                value: function updateOptions(opts) {
                    var mask = opts.mask, restOpts = _objectWithoutProperties(opts, input_excluded);
                    var updateMask = !this.maskEquals(mask);
                    var updateOpts = !objectIncludes(this.masked, restOpts);
                    if (updateMask) this.mask = mask;
                    if (updateOpts) this.masked.updateOptions(restOpts);
                    if (updateMask || updateOpts) this.updateControl();
                }
            }, {
                key: "updateCursor",
                value: function updateCursor(cursorPos) {
                    if (null == cursorPos) return;
                    this.cursorPos = cursorPos;
                    this._delayUpdateCursor(cursorPos);
                }
            }, {
                key: "_delayUpdateCursor",
                value: function _delayUpdateCursor(cursorPos) {
                    var _this = this;
                    this._abortUpdateCursor();
                    this._changingCursorPos = cursorPos;
                    this._cursorChanging = setTimeout((function() {
                        if (!_this.el) return;
                        _this.cursorPos = _this._changingCursorPos;
                        _this._abortUpdateCursor();
                    }), 10);
                }
            }, {
                key: "_fireChangeEvents",
                value: function _fireChangeEvents() {
                    this._fireEvent("accept", this._inputEvent);
                    if (this.masked.isComplete) this._fireEvent("complete", this._inputEvent);
                }
            }, {
                key: "_abortUpdateCursor",
                value: function _abortUpdateCursor() {
                    if (this._cursorChanging) {
                        clearTimeout(this._cursorChanging);
                        delete this._cursorChanging;
                    }
                }
            }, {
                key: "alignCursor",
                value: function alignCursor() {
                    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
                }
            }, {
                key: "alignCursorFriendly",
                value: function alignCursorFriendly() {
                    if (this.selectionStart !== this.cursorPos) return;
                    this.alignCursor();
                }
            }, {
                key: "on",
                value: function on(ev, handler) {
                    if (!this._listeners[ev]) this._listeners[ev] = [];
                    this._listeners[ev].push(handler);
                    return this;
                }
            }, {
                key: "off",
                value: function off(ev, handler) {
                    if (!this._listeners[ev]) return this;
                    if (!handler) {
                        delete this._listeners[ev];
                        return this;
                    }
                    var hIndex = this._listeners[ev].indexOf(handler);
                    if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
                    return this;
                }
            }, {
                key: "_onInput",
                value: function _onInput(e) {
                    this._inputEvent = e;
                    this._abortUpdateCursor();
                    if (!this._selection) return this.updateValue();
                    var details = new ActionDetails(this.el.value, this.cursorPos, this.value, this._selection);
                    var oldRawValue = this.masked.rawInputValue;
                    var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset;
                    var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
                    var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
                    if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
                    this.updateControl();
                    this.updateCursor(cursorPos);
                    delete this._inputEvent;
                }
            }, {
                key: "_onChange",
                value: function _onChange() {
                    if (this.value !== this.el.value) this.updateValue();
                    this.masked.doCommit();
                    this.updateControl();
                    this._saveSelection();
                }
            }, {
                key: "_onDrop",
                value: function _onDrop(ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }, {
                key: "_onFocus",
                value: function _onFocus(ev) {
                    this.alignCursorFriendly();
                }
            }, {
                key: "_onClick",
                value: function _onClick(ev) {
                    this.alignCursorFriendly();
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    this._unbindEvents();
                    this._listeners.length = 0;
                    delete this.el;
                }
            } ]);
            return InputMask;
        }();
        IMask.InputMask = InputMask;
        var MaskedEnum = function(_MaskedPattern) {
            _inherits(MaskedEnum, _MaskedPattern);
            var _super = _createSuper(MaskedEnum);
            function MaskedEnum() {
                _classCallCheck(this, MaskedEnum);
                return _super.apply(this, arguments);
            }
            _createClass(MaskedEnum, [ {
                key: "_update",
                value: function _update(opts) {
                    if (opts.enum) opts.mask = "*".repeat(opts.enum[0].length);
                    _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
                }
            }, {
                key: "doValidate",
                value: function doValidate() {
                    var _get2, _this = this;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    return this.enum.some((function(e) {
                        return e.indexOf(_this.unmaskedValue) >= 0;
                    })) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [ this ].concat(args));
                }
            } ]);
            return MaskedEnum;
        }(MaskedPattern);
        IMask.MaskedEnum = MaskedEnum;
        var MaskedNumber = function(_Masked) {
            _inherits(MaskedNumber, _Masked);
            var _super = _createSuper(MaskedNumber);
            function MaskedNumber(opts) {
                _classCallCheck(this, MaskedNumber);
                return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
            }
            _createClass(MaskedNumber, [ {
                key: "_update",
                value: function _update(opts) {
                    _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);
                    this._updateRegExps();
                }
            }, {
                key: "_updateRegExps",
                value: function _updateRegExps() {
                    var start = "^" + (this.allowNegative ? "[+|\\-]?" : "");
                    var midInput = "(0|([1-9]+\\d*))?";
                    var mid = "\\d*";
                    var end = (this.scale ? "(" + escapeRegExp(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
                    this._numberRegExpInput = new RegExp(start + midInput + end);
                    this._numberRegExp = new RegExp(start + mid + end);
                    this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(escapeRegExp).join("") + "]", "g");
                    this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), "g");
                }
            }, {
                key: "_removeThousandsSeparators",
                value: function _removeThousandsSeparators(value) {
                    return value.replace(this._thousandsSeparatorRegExp, "");
                }
            }, {
                key: "_insertThousandsSeparators",
                value: function _insertThousandsSeparators(value) {
                    var parts = value.split(this.radix);
                    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
                    return parts.join(this.radix);
                }
            }, {
                key: "doPrepare",
                value: function doPrepare(ch) {
                    var _get2;
                    ch = ch.replace(this._mapToRadixRegExp, this.radix);
                    var noSepCh = this._removeThousandsSeparators(ch);
                    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
                    var _normalizePrepare = normalizePrepare((_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [ this, noSepCh ].concat(args))), _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2), prepCh = _normalizePrepare2[0], details = _normalizePrepare2[1];
                    if (ch && !noSepCh) details.skip = true;
                    return [ prepCh, details ];
                }
            }, {
                key: "_separatorsCount",
                value: function _separatorsCount(to) {
                    var extendOnSeparators = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
                    var count = 0;
                    for (var pos = 0; pos < to; ++pos) if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
                        ++count;
                        if (extendOnSeparators) to += this.thousandsSeparator.length;
                    }
                    return count;
                }
            }, {
                key: "_separatorsCountFromSlice",
                value: function _separatorsCountFromSlice() {
                    var slice = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
                    return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
                }
            }, {
                key: "extractInput",
                value: function extractInput() {
                    var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    var flags = arguments.length > 2 ? arguments[2] : void 0;
                    var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);
                    var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);
                    fromPos = _this$_adjustRangeWit2[0];
                    toPos = _this$_adjustRangeWit2[1];
                    return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
                }
            }, {
                key: "_appendCharRaw",
                value: function _appendCharRaw(ch) {
                    var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
                    var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
                    var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
                    this._value = this._removeThousandsSeparators(this.value);
                    var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
                    this._value = this._insertThousandsSeparators(this._value);
                    var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
                    var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
                    appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
                    appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
                    return appendDetails;
                }
            }, {
                key: "_findSeparatorAround",
                value: function _findSeparatorAround(pos) {
                    if (this.thousandsSeparator) {
                        var searchFrom = pos - this.thousandsSeparator.length + 1;
                        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
                        if (separatorPos <= pos) return separatorPos;
                    }
                    return -1;
                }
            }, {
                key: "_adjustRangeWithSeparators",
                value: function _adjustRangeWithSeparators(from, to) {
                    var separatorAroundFromPos = this._findSeparatorAround(from);
                    if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
                    var separatorAroundToPos = this._findSeparatorAround(to);
                    if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
                    return [ from, to ];
                }
            }, {
                key: "remove",
                value: function remove() {
                    var fromPos = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
                    var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);
                    var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);
                    fromPos = _this$_adjustRangeWit4[0];
                    toPos = _this$_adjustRangeWit4[1];
                    var valueBeforePos = this.value.slice(0, fromPos);
                    var valueAfterPos = this.value.slice(toPos);
                    var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
                    this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
                    var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
                    return new ChangeDetails({
                        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
                    });
                }
            }, {
                key: "nearestInputPos",
                value: function nearestInputPos(cursorPos, direction) {
                    if (!this.thousandsSeparator) return cursorPos;
                    switch (direction) {
                      case DIRECTION.NONE:
                      case DIRECTION.LEFT:
                      case DIRECTION.FORCE_LEFT:
                        var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
                        if (separatorAtLeftPos >= 0) {
                            var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
                            if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) return separatorAtLeftPos;
                        }
                        break;

                      case DIRECTION.RIGHT:
                      case DIRECTION.FORCE_RIGHT:
                        var separatorAtRightPos = this._findSeparatorAround(cursorPos);
                        if (separatorAtRightPos >= 0) return separatorAtRightPos + this.thousandsSeparator.length;
                    }
                    return cursorPos;
                }
            }, {
                key: "doValidate",
                value: function doValidate(flags) {
                    var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp;
                    var valid = regexp.test(this._removeThousandsSeparators(this.value));
                    if (valid) {
                        var number = this.number;
                        valid = valid && !isNaN(number) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max);
                    }
                    return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
                }
            }, {
                key: "doCommit",
                value: function doCommit() {
                    if (this.value) {
                        var number = this.number;
                        var validnum = number;
                        if (null != this.min) validnum = Math.max(validnum, this.min);
                        if (null != this.max) validnum = Math.min(validnum, this.max);
                        if (validnum !== number) this.unmaskedValue = String(validnum);
                        var formatted = this.value;
                        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
                        if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
                        this._value = formatted;
                    }
                    _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
                }
            }, {
                key: "_normalizeZeros",
                value: function _normalizeZeros(value) {
                    var parts = this._removeThousandsSeparators(value).split(this.radix);
                    parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (function(match, sign, zeros, num) {
                        return sign + num;
                    }));
                    if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + "0";
                    if (parts.length > 1) {
                        parts[1] = parts[1].replace(/0*$/, "");
                        if (!parts[1].length) parts.length = 1;
                    }
                    return this._insertThousandsSeparators(parts.join(this.radix));
                }
            }, {
                key: "_padFractionalZeros",
                value: function _padFractionalZeros(value) {
                    if (!value) return value;
                    var parts = value.split(this.radix);
                    if (parts.length < 2) parts.push("");
                    parts[1] = parts[1].padEnd(this.scale, "0");
                    return parts.join(this.radix);
                }
            }, {
                key: "unmaskedValue",
                get: function get() {
                    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".");
                },
                set: function set(unmaskedValue) {
                    _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace(".", this.radix), this, true);
                }
            }, {
                key: "typedValue",
                get: function get() {
                    return Number(this.unmaskedValue);
                },
                set: function set(n) {
                    _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
                }
            }, {
                key: "number",
                get: function get() {
                    return this.typedValue;
                },
                set: function set(number) {
                    this.typedValue = number;
                }
            }, {
                key: "allowNegative",
                get: function get() {
                    return this.signed || null != this.min && this.min < 0 || null != this.max && this.max < 0;
                }
            } ]);
            return MaskedNumber;
        }(Masked);
        MaskedNumber.DEFAULTS = {
            radix: ",",
            thousandsSeparator: "",
            mapToRadix: [ "." ],
            scale: 2,
            signed: false,
            normalizeZeros: true,
            padFractionalZeros: false
        };
        IMask.MaskedNumber = MaskedNumber;
        var MaskedFunction = function(_Masked) {
            _inherits(MaskedFunction, _Masked);
            var _super = _createSuper(MaskedFunction);
            function MaskedFunction() {
                _classCallCheck(this, MaskedFunction);
                return _super.apply(this, arguments);
            }
            _createClass(MaskedFunction, [ {
                key: "_update",
                value: function _update(opts) {
                    if (opts.mask) opts.validate = opts.mask;
                    _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
                }
            } ]);
            return MaskedFunction;
        }(Masked);
        IMask.MaskedFunction = MaskedFunction;
        var dynamic_excluded = [ "compiledMasks", "currentMaskRef", "currentMask" ];
        var MaskedDynamic = function(_Masked) {
            _inherits(MaskedDynamic, _Masked);
            var _super = _createSuper(MaskedDynamic);
            function MaskedDynamic(opts) {
                var _this;
                _classCallCheck(this, MaskedDynamic);
                _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
                _this.currentMask = null;
                return _this;
            }
            _createClass(MaskedDynamic, [ {
                key: "_update",
                value: function _update(opts) {
                    _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);
                    if ("mask" in opts) this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map((function(m) {
                        return createMask(m);
                    })) : [];
                }
            }, {
                key: "_appendCharRaw",
                value: function _appendCharRaw(ch) {
                    var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    var details = this._applyDispatch(ch, flags);
                    if (this.currentMask) details.aggregate(this.currentMask._appendChar(ch, flags));
                    return details;
                }
            }, {
                key: "_applyDispatch",
                value: function _applyDispatch() {
                    var appended = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    var prevValueBeforeTail = flags.tail && null != flags._beforeTailState ? flags._beforeTailState._value : this.value;
                    var inputValue = this.rawInputValue;
                    var insertValue = flags.tail && null != flags._beforeTailState ? flags._beforeTailState._rawInputValue : inputValue;
                    var tailValue = inputValue.slice(insertValue.length);
                    var prevMask = this.currentMask;
                    var details = new ChangeDetails;
                    var prevMaskState = prevMask && prevMask.state;
                    this.currentMask = this.doDispatch(appended, Object.assign({}, flags));
                    if (this.currentMask) if (this.currentMask !== prevMask) {
                        this.currentMask.reset();
                        if (insertValue) {
                            var d = this.currentMask.append(insertValue, {
                                raw: true
                            });
                            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
                        }
                        if (tailValue) details.tailShift += this.currentMask.append(tailValue, {
                            raw: true,
                            tail: true
                        }).tailShift;
                    } else this.currentMask.state = prevMaskState;
                    return details;
                }
            }, {
                key: "_appendPlaceholder",
                value: function _appendPlaceholder() {
                    var details = this._applyDispatch.apply(this, arguments);
                    if (this.currentMask) details.aggregate(this.currentMask._appendPlaceholder());
                    return details;
                }
            }, {
                key: "_appendEager",
                value: function _appendEager() {
                    var details = this._applyDispatch.apply(this, arguments);
                    if (this.currentMask) details.aggregate(this.currentMask._appendEager());
                    return details;
                }
            }, {
                key: "doDispatch",
                value: function doDispatch(appended) {
                    var flags = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.dispatch(appended, this, flags);
                }
            }, {
                key: "doValidate",
                value: function doValidate() {
                    var _get2, _this$currentMask;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [ this ].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
                }
            }, {
                key: "reset",
                value: function reset() {
                    var _this$currentMask2;
                    null === (_this$currentMask2 = this.currentMask) || void 0 === _this$currentMask2 ? void 0 : _this$currentMask2.reset();
                    this.compiledMasks.forEach((function(m) {
                        return m.reset();
                    }));
                }
            }, {
                key: "value",
                get: function get() {
                    return this.currentMask ? this.currentMask.value : "";
                },
                set: function set(value) {
                    _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
                }
            }, {
                key: "unmaskedValue",
                get: function get() {
                    return this.currentMask ? this.currentMask.unmaskedValue : "";
                },
                set: function set(unmaskedValue) {
                    _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
                }
            }, {
                key: "typedValue",
                get: function get() {
                    return this.currentMask ? this.currentMask.typedValue : "";
                },
                set: function set(value) {
                    var unmaskedValue = String(value);
                    if (this.currentMask) {
                        this.currentMask.typedValue = value;
                        unmaskedValue = this.currentMask.unmaskedValue;
                    }
                    this.unmaskedValue = unmaskedValue;
                }
            }, {
                key: "isComplete",
                get: function get() {
                    var _this$currentMask3;
                    return Boolean(null === (_this$currentMask3 = this.currentMask) || void 0 === _this$currentMask3 ? void 0 : _this$currentMask3.isComplete);
                }
            }, {
                key: "isFilled",
                get: function get() {
                    var _this$currentMask4;
                    return Boolean(null === (_this$currentMask4 = this.currentMask) || void 0 === _this$currentMask4 ? void 0 : _this$currentMask4.isFilled);
                }
            }, {
                key: "remove",
                value: function remove() {
                    var details = new ChangeDetails;
                    if (this.currentMask) {
                        var _this$currentMask5;
                        details.aggregate((_this$currentMask5 = this.currentMask).remove.apply(_this$currentMask5, arguments)).aggregate(this._applyDispatch());
                    }
                    return details;
                }
            }, {
                key: "state",
                get: function get() {
                    return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
                        _rawInputValue: this.rawInputValue,
                        compiledMasks: this.compiledMasks.map((function(m) {
                            return m.state;
                        })),
                        currentMaskRef: this.currentMask,
                        currentMask: this.currentMask && this.currentMask.state
                    });
                },
                set: function set(state) {
                    var compiledMasks = state.compiledMasks, currentMaskRef = state.currentMaskRef, currentMask = state.currentMask, maskedState = _objectWithoutProperties(state, dynamic_excluded);
                    this.compiledMasks.forEach((function(m, mi) {
                        return m.state = compiledMasks[mi];
                    }));
                    if (null != currentMaskRef) {
                        this.currentMask = currentMaskRef;
                        this.currentMask.state = currentMask;
                    }
                    _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
                }
            }, {
                key: "extractInput",
                value: function extractInput() {
                    var _this$currentMask6;
                    return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : "";
                }
            }, {
                key: "extractTail",
                value: function extractTail() {
                    var _this$currentMask7, _get3;
                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                    return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [ this ].concat(args));
                }
            }, {
                key: "doCommit",
                value: function doCommit() {
                    if (this.currentMask) this.currentMask.doCommit();
                    _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
                }
            }, {
                key: "nearestInputPos",
                value: function nearestInputPos() {
                    var _this$currentMask8, _get4;
                    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
                    return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [ this ].concat(args));
                }
            }, {
                key: "overwrite",
                get: function get() {
                    return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
                },
                set: function set(overwrite) {
                    console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
                }
            }, {
                key: "eager",
                get: function get() {
                    return this.currentMask ? this.currentMask.eager : _get(_getPrototypeOf(MaskedDynamic.prototype), "eager", this);
                },
                set: function set(eager) {
                    console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
                }
            }, {
                key: "maskEquals",
                value: function maskEquals(mask) {
                    return Array.isArray(mask) && this.compiledMasks.every((function(m, mi) {
                        var _mask$mi;
                        return m.maskEquals(null === (_mask$mi = mask[mi]) || void 0 === _mask$mi ? void 0 : _mask$mi.mask);
                    }));
                }
            } ]);
            return MaskedDynamic;
        }(Masked);
        MaskedDynamic.DEFAULTS = {
            dispatch: function dispatch(appended, masked, flags) {
                if (!masked.compiledMasks.length) return;
                var inputValue = masked.rawInputValue;
                var inputs = masked.compiledMasks.map((function(m, index) {
                    m.reset();
                    m.append(inputValue, {
                        raw: true
                    });
                    m.append(appended, flags);
                    var weight = m.rawInputValue.length;
                    return {
                        weight,
                        index
                    };
                }));
                inputs.sort((function(i1, i2) {
                    return i2.weight - i1.weight;
                }));
                return masked.compiledMasks[inputs[0].index];
            }
        };
        IMask.MaskedDynamic = MaskedDynamic;
        var PIPE_TYPE = {
            MASKED: "value",
            UNMASKED: "unmaskedValue",
            TYPED: "typedValue"
        };
        function createPipe(mask) {
            var from = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PIPE_TYPE.MASKED;
            var to = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PIPE_TYPE.MASKED;
            var masked = createMask(mask);
            return function(value) {
                return masked.runIsolated((function(m) {
                    m[from] = value;
                    return m[to];
                }));
            };
        }
        function pipe(value) {
            for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) pipeArgs[_key - 1] = arguments[_key];
            return createPipe.apply(void 0, pipeArgs)(value);
        }
        IMask.PIPE_TYPE = PIPE_TYPE;
        IMask.createPipe = createPipe;
        IMask.pipe = pipe;
        try {
            globalThis.IMask = IMask;
        } catch (e) {}
        if (document.getElementById("tel")) {
            let phoneInput = document.getElementById("tel");
            let maskOptions = {
                mask: "+{38} (000) 000-00-00"
            };
            let mask = IMask(phoneInput, maskOptions);
            document.addEventListener("formSent", (() => {
                mask.value = "";
            }));
        }
        var choices = __webpack_require__(529);
        if (document.querySelector(".filter-sort")) {
            const el = document.querySelector(".filter-sort");
            new choices(el, {
                allowHTML: true,
                searchEnabled: false
            });
            const secondEl = document.querySelector(".filter-consistency");
            new choices(secondEl, {
                allowHTML: true,
                searchEnabled: false
            });
            const thirtyEl = document.querySelector(".filter-color");
            new choices(thirtyEl, {
                allowHTML: true,
                searchEnabled: false
            });
        }
        function ssr_window_esm_isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if ("number" === typeof items) super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if ("string" !== typeof selector) return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if ("string" === typeof selector) {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (0 === html.indexOf("<li")) toCreate = "ul";
                    if (0 === html.indexOf("<tr")) toCreate = "tbody";
                    if (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) toCreate = "tr";
                    if (0 === html.indexOf("<tbody")) toCreate = "table";
                    if (0 === html.indexOf("<option")) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (1 === arguments.length && "string" === typeof attrs) {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = "string" !== typeof duration ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (1 === arguments.length) if ("string" === typeof props) {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (2 === arguments.length && "string" === typeof props) {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if ("undefined" === typeof html) return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if ("undefined" === typeof text) return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || "undefined" === typeof selector) return false;
            if ("string" === typeof selector) {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if ("undefined" === typeof index) return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (null !== this[i].parentNode) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if ("undefined" === typeof selector) return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if ("undefined" === typeof args[0]) {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (void 0 === delay) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (void 0 === axis) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => "next" === dir && current >= target || "prev" === dir && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (null === startTime) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = void 0 === _temp ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = "Win32" === platform;
            let macos = "MacIntel" === platform;
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (void 0 === overrides) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && "undefined" !== typeof window.ResizeObserver) {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (void 0 === options) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = $el[0].clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = $el[0].clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter((key => "undefined" !== typeof params.breakpoints[key].slidesPerView)).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if ("none" === slide.css("display")) continue;
                if ("auto" === params.slidesPerView) {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || dom([])).each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || 0 === newHeight) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate) {
            if (void 0 === translate) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if ("undefined" === typeof translate) {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && 0 === nextSlide.length) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && 0 === prevSlide.length) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if ("undefined" === typeof activeIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (void 0 === axis) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (void 0 === translate) translate = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === translateBounds) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if ("next" === dir) swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("number" !== typeof index && "string" !== typeof index) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            const translate = -snapGrid[snapIndex];
            swiper.updateProgress(translate);
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(100 * translate);
                const normalizedGrid = Math.floor(100 * slidesGrid[i]);
                const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (0 === speed) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (0 === speed) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if ("undefined" !== typeof prevSnapIndex) prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === threshold) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if ("auto" === params.slidesPerView && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                dom(el).attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < swiper.loopedSlides; i += 1) {
                const index = i - Math.floor(i / slides.length) * slides.length;
                appendSlides.push(slides.eq(index)[0]);
                prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
            }
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - 3 * loopedSlides + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = "container" === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (void 0 === base) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if ("wrapper" === params.touchEventsTarget) if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = "touchstart" === e.type;
            if (!data.isTouchEvent && "which" in e && 3 === e.which) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = dom(event.path[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if ("touchstart" !== e.type) {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ("SELECT" === $targetEl[0].nodeName) data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && "touchmove" !== e.type) return;
            const targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX;
            const pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = "touchstart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (void 0 === base) base = "window";
            if (!breakpoints || "container" === base && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if ("window" === base) {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if ("object" === typeof item) Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if ("undefined" === typeof swiper || null === swiper || !swiper || swiper.destroyed) return;
                if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = 1 === swiper.snapGrid.length;
            if (true === params.allowSlideNext) swiper.allowSlideNext = !swiper.isLocked;
            if (true === params.allowSlidePrev) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: true,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (void 0 === obj) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if ("object" !== typeof moduleParams || null === moduleParams) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (true === params[moduleParamName]) params[moduleParamName] = {
                    enabled: true
                };
                if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => 0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass)));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass))).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (void 0 === view) view = "current";
                if (void 0 === exact) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if ("current" === view) for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (void 0 === needUpdate) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && "rtl" === direction || !swiper.rtl && "ltr" === direction) return;
                swiper.rtl = "rtl" === direction;
                swiper.rtlTranslate = "horizontal" === swiper.params.direction && swiper.rtl;
                if (swiper.rtl) {
                    swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    if (!$el.children) return dom($el).children(getWrapperSelector());
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (void 0 === deleteInstance) deleteInstance = true;
                if (void 0 === cleanStyles) cleanStyles = true;
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                const modules = Swiper.prototype.__modules__;
                if ("function" === typeof mod && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => Swiper.installModule(m)));
                    return Swiper;
                }
                Swiper.installModule(module);
                return Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        Swiper.use([ Resize, Observer ]);
        const core = Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && true === params.auto) {
                    let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                    if (!element) {
                        element = document.createElement("div");
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            };
            function getEl(el) {
                let $el;
                if (el) {
                    $el = dom(el);
                    if (swiper.params.uniqueNavElements && "string" === typeof el && $el.length > 1 && 1 === swiper.$el.find(el).length) $el = swiper.$el.find(el);
                }
                return $el;
            }
            function toggleEl($el, disabled) {
                const params = swiper.params.navigation;
                if ($el && $el.length > 0) {
                    $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
                    if ($el[0] && "BUTTON" === $el[0].tagName) $el[0].disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
            }
            function update() {
                if (swiper.params.loop) return;
                const {$nextEl, $prevEl} = swiper.navigation;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                const $nextEl = getEl(params.nextEl);
                const $prevEl = getEl(params.prevEl);
                if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
                if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
                Object.assign(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });
                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }
            function destroy() {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off("click", onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off("click", onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }
            on("init", (() => {
                if (false === swiper.params.navigation.enabled) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
            }));
            on("click", ((_s, e) => {
                const {$nextEl, $prevEl} = swiper.navigation;
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass); else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    if (true === isHidden) emit("navigationShow"); else emit("navigationHide");
                    if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
                init();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        const burgerButton = document.querySelector(".header__burger"), burgerMenu = document.querySelector(".header__menu"), gotoItems = document.querySelectorAll(".goto-item");
        burgerButton.addEventListener("click", (() => {
            burgerButton.classList.toggle("_active");
            burgerMenu.classList.toggle("_active");
            document.body.classList.toggle("lock");
        }));
        gotoItems.forEach((gotoItem => {
            gotoItem.addEventListener("click", (() => {
                document.body.classList.remove("lock");
                burgerButton.classList.remove("_active");
                burgerMenu.classList.remove("_active");
            }));
        }));
        function initSliders() {
            if (document.querySelector(".best-pruducts__slider")) {
                const slider = new core(".best-pruducts__slider", {
                    modules: [ Navigation ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 3,
                    spaceBetween: 0,
                    autoHeight: true,
                    speed: 800,
                    loop: true,
                    autoHeight: true,
                    centeredSlides: true,
                    init: false,
                    simulateTouch: false,
                    navigation: {
                        prevEl: ".best-pruducts__arrow_prev",
                        nextEl: ".best-pruducts__arrow_next"
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                            autoHeight: true
                        },
                        768: {
                            slidesPerView: 3
                        }
                    },
                    on: {}
                });
                async function getSliderProducts() {
                    const file = "./files/products.json";
                    let response = await fetch(file, {
                        method: "GET"
                    });
                    if (response.ok) {
                        let result = await response.json();
                        loadSliderProducts(result.productsSlider);
                        slider.init();
                    } else alert("Ошибка");
                }
                function loadSliderProducts(data) {
                    const sliderBody = document.querySelector(".best-pruducts__wrap");
                    data.forEach((item => {
                        item.productUrl;
                        const productId = item.id;
                        const productTitle = item.title;
                        const productText = item.text;
                        const productImage = item.image;
                        const productPrice = item.price;
                        const productWeigh = item.weigh;
                        let sliderHtml = `\n                    <div data-pid="${productId}" class="best-pruducts__slide slide-product swiper-slide">\n                    <a href="" class="slide-product__image">\n                        <img src="img/best-products/${productImage}" alt="${productTitle}">\n                    </a>\n                    <div class="slide-product__info">\n                        <a href="" class="slide-product__name">${productTitle}</a>\n                        <div class="slide-product__text">${productText}, <span>${productWeigh}</span>г.</div>\n                        <div class="slide-product__price"><span>${productPrice}</span> грн</div>\n                    </div>\n                <div class="slide-product__menu">\n                    <button class="slide-product__favourite">\n                        <span>\n                            <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0198 3.4383C11.3595 2.33774 9.85457 1.33611 8.08843 1.06881C6.35038 0.805758 4.39929 1.26092 2.82023 3.01545C1.74994 4.20468 1.23699 5.33783 1.06705 6.37876C0.896765 7.42174 1.06491 8.40897 1.41486 9.31302C2.12207 11.14 3.54744 12.5728 4.30213 13.3275C5.4529 14.4782 9.52379 18.0788 12.474 20.0949C15.4241 18.0788 19.495 14.4782 20.6458 13.3275C21.4005 12.5728 22.8259 11.14 23.5331 9.31302C23.883 8.40897 24.0512 7.42174 23.8809 6.37876C23.7109 5.33783 23.198 4.20468 22.1277 3.01545C20.5487 1.26092 18.5976 0.805758 16.8595 1.06881C15.0934 1.33611 13.5885 2.33774 12.9281 3.4383C12.8298 3.60218 12.6524 3.68941 12.474 3.6805C12.2956 3.68941 12.1182 3.60218 12.0198 3.4383ZM12.474 2.35683C11.5353 1.22353 9.96646 0.341656 8.23807 0.0800685C6.20257 -0.228 3.90366 0.316768 2.07693 2.34649C0.897223 3.6573 0.285168 4.96167 0.0801143 6.21763C-0.124603 7.47153 0.0822515 8.64056 0.482297 9.67401C1.27047 11.7101 2.83142 13.271 3.58193 14.0215L3.58194 14.0215L3.59503 14.0346C4.81112 15.2507 9.13651 19.0739 12.1712 21.0971C12.2642 21.159 12.3704 21.1858 12.474 21.1804C12.5776 21.1858 12.6838 21.159 12.7767 21.0971C15.8114 19.0739 20.1368 15.2507 21.3529 14.0346L21.366 14.0215L21.366 14.0215C22.1165 13.271 23.6775 11.7101 24.4656 9.67401C24.8657 8.64056 25.0725 7.47153 24.8678 6.21763C24.6628 4.96167 24.0507 3.6573 22.871 2.34649C21.0443 0.316768 18.7454 -0.228 16.7099 0.0800685C14.9815 0.341656 13.4126 1.22353 12.474 2.35683ZM18.5398 2.98408C18.6486 2.73027 18.9425 2.61269 19.1963 2.72147C20.4788 3.27108 22.4994 5.01615 22.4994 7.68104C22.4994 7.95718 22.2755 8.18104 21.9994 8.18104C21.7232 8.18104 21.4994 7.95718 21.4994 7.68104C21.4994 5.54593 19.8533 4.091 18.8024 3.64061C18.5486 3.53183 18.431 3.2379 18.5398 2.98408ZM17.4994 3.18104C17.7755 3.18104 17.9994 2.95718 17.9994 2.68104C17.9994 2.4049 17.7755 2.18104 17.4994 2.18104C17.2232 2.18104 16.9994 2.4049 16.9994 2.68104C16.9994 2.95718 17.2232 3.18104 17.4994 3.18104Z" fill="black"/> </svg>\n                        </span>\n                    </button>\n                    <button class="slide-product__buy">\n                        <span>\n                            <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3.6001 16.9205H2.8501V17.6705V28.9999C2.8501 30.5187 4.08132 31.7499 5.6001 31.7499H24.4001C25.9189 31.7499 27.1501 30.5187 27.1501 28.9999V17.6705V16.9205H26.4001H3.6001Z" stroke="white" stroke-width="1.5"/> <rect x="0.75" y="12.3621" width="28.5" height="4.5588" rx="2.2794" stroke="white" stroke-width="1.5"/> <rect x="8.3999" y="21.3058" width="1.2" height="7.27056" rx="0.6" fill="white"/> <rect x="14.4001" y="21.3058" width="1.2" height="7.27056" rx="0.6" fill="white"/> <rect x="20.3999" y="21.3058" width="1.2" height="7.27056" rx="0.6" fill="white"/> <path d="M26.4001 11.9058C26.4001 9.01343 25.199 6.23949 23.0611 4.19425C20.9232 2.149 18.0236 1 15.0001 1C11.9766 1 9.077 2.149 6.93908 4.19424C4.80117 6.23948 3.6001 9.01343 3.6001 11.9058L15.0001 11.9058H26.4001Z" stroke="white" stroke-width="1.5"/> </svg>\n                        </span>\n                    </button>\n                </div>\n                    </div>\n                `;
                        sliderBody.insertAdjacentHTML("beforeend", sliderHtml);
                    }));
                }
                getSliderProducts();
            }
        }
        window.addEventListener("load", (() => {
            initSliders();
        }));
        const formBasket = document.querySelector(".form-basket");
        const itemPostContent = document.querySelector(".item-post__content");
        if (document.querySelector(".item-radio__columns_delivery")) {
            const itemRadionInputs = document.querySelector(".item-radio__columns_delivery").querySelectorAll(".item-radio__input");
            itemRadionInputs.forEach((item => {
                item.addEventListener("click", (() => {
                    document.querySelector(".form-basket").classList.remove("post");
                    if (item.classList.contains("post")) {
                        formBasket.classList.remove("post-2");
                        formBasket.classList.add("post");
                    } else if (item.classList.contains("post-2")) {
                        formBasket.classList.remove("post");
                        formBasket.classList.add("post-2");
                    } else {
                        formBasket.classList.remove("post");
                        formBasket.classList.remove("post-2");
                    }
                }));
            }));
            const itemPost = document.querySelector(".item-post");
            const secondItemPostContent = document.querySelector(".item-post__content-2");
            itemPost.querySelectorAll(".item-post__checkbox-input").forEach((checkbox => {
                checkbox.addEventListener("click", (() => {
                    itemPostContent.classList.remove("p1");
                    itemPostContent.classList.remove("p2");
                    if (checkbox.classList.contains("p1")) itemPostContent.classList.add("p1"); else itemPostContent.classList.add("p2");
                }));
            }));
            const secondItemPost = document.querySelector(".item-post-2");
            secondItemPost.querySelectorAll(".item-post__checkbox-input-2").forEach((checkbox => {
                checkbox.addEventListener("click", (() => {
                    secondItemPostContent.classList.remove("p3");
                    secondItemPostContent.classList.remove("p4");
                    if (checkbox.classList.contains("p3")) secondItemPostContent.classList.add("p3"); else secondItemPostContent.classList.add("p4");
                }));
            }));
        }
        if (document.querySelector(".item-radio__columns_two")) {
            function clearCheckBox() {
                document.querySelector(".form-basket__block_payment").classList.remove("_active");
                checkBoxes.forEach((item => {
                    item.classList.remove("_active");
                }));
            }
            const checkBoxes = document.querySelectorAll(".item-radio__columns_two .item-radio__column");
            checkBoxes[1].classList.add("_active");
            checkBoxes.forEach((checkBox => {
                checkBox.addEventListener("click", (() => {
                    clearCheckBox();
                    checkBox.classList.add("_active");
                    if (checkBox.classList.contains("online-payment")) document.querySelector(".form-basket__block_payment").classList.add("_active");
                }));
            }));
        }
        if (document.querySelector(".products")) {
            let products = null;
            async function getProducts() {
                const file = "./files/products.json";
                let response = await fetch(file, {
                    method: "GET"
                });
                if (response.ok) {
                    let result = await response.json();
                    loadProducts(result.products);
                    products = result.products;
                    initWeigh();
                    initFilters();
                } else alert("Ошибка");
            }
            function loadProducts(data) {
                const productsItemsAll = document.querySelector(".controls-products__body_all .controls-products__wrapper"), productsItemsNatural = document.querySelector(".controls-products__body_natural .controls-products__wrapper"), productsItemsNuts = document.querySelector(".controls-products__body_nuts .controls-products__wrapper"), productsItemsCream = document.querySelector(".controls-products__body_cream .controls-products__wrapper"), productsItemsPerga = document.querySelector(".controls-products__body_perga .controls-products__wrapper"), productsItemsSets = document.querySelector(".controls-products__body_sets .controls-products__wrapper");
                data.forEach((item => {
                    item.type;
                    const productUrl = item.productUrl;
                    const productId = item.id;
                    const productTitle = item.title;
                    const productLabels = item.labels;
                    const productImage = item.image;
                    const productPrice = item.prices;
                    const productOldPrice = item.oldPrice;
                    const productWeigh = item.weigh;
                    let productTemplateStart = `<article data-pid="${productId}" class="controls-products__item item-product _sort">`;
                    let productTemplateEnd = `</article>`;
                    let productTemplateName = `\n            <a href="" class="item-product__name">${productTitle}</a>\n        `;
                    let productTemplateLabels = "";
                    if (productLabels) {
                        let productTemplateLabelsStart = `<div class="item-product__tablets">`;
                        let productTemplateLabelsEnd = `</div>`;
                        let productTemplateLabelsContent = "";
                        productLabels.forEach((labelItem => {
                            if ("recommend" === labelItem.type) productTemplateLabelsContent += `<div class="item-product__tabl item-product__tabl_blue">${labelItem.value}</div>`; else if ("new" === labelItem.type) productTemplateLabelsContent += `<div class="item-product__tabl item-product__tabl_green">${labelItem.value}</div>`; else if ("stock" === labelItem.type) productTemplateLabelsContent += `<div class="item-product__tabl item-product__tabl_orange">${labelItem.value}</div>`; else productTemplateLabelsContent += `<div class="item-product__stock">${labelItem.value}</div>`;
                        }));
                        productTemplateLabels += productTemplateLabelsStart;
                        productTemplateLabels += productTemplateLabelsContent;
                        productTemplateLabels += productTemplateLabelsEnd;
                    }
                    let productTemplateWeigh = "";
                    let productTemplateWeighStart = `<div class="item-product__weigh">`;
                    let productTemplateWeighEnd = `</div>`;
                    let productTemplateWeighContent = `<input class="item-product__weigh-input" type="checkbox" value="${productWeigh[0].weighValue}">`;
                    productWeigh.forEach((weighItem => {
                        productTemplateWeighContent += `<div class="item-product__weigh-item">${weighItem.weighValue} г</div>`;
                    }));
                    productTemplateWeigh += productTemplateWeighStart;
                    productTemplateWeigh += productTemplateWeighContent;
                    productTemplateWeigh += productTemplateWeighEnd;
                    let productTemplateImage = `\n\t\t<a href="${productUrl}" class="item-product__image _ibg">\n\t\t\t<img src="img/products/${productImage}" alt="${productTitle}">\n\t\t</a>\n\t    `;
                    let productTemplatePrices = "";
                    let productTemplatePricesStart = `<div class="item-product__price">`;
                    let productTemplatePricesEnd = `</div>`;
                    let productTemplatePricesWrapperStart = `<div class="item-product__prices">`;
                    let productTemplatePricesWrapperEnd = `</div>`;
                    let productTemplateWrapper = "";
                    let productTemplatePriceMain = "";
                    productPrice.forEach(((item, id) => {
                        if (0 == id) productTemplateWrapper += `<div class="item-product__one item-product__one--active"><span>${item.price}</span> грн</div>`; else productTemplateWrapper += `<div class="item-product__one"><span>${item.price}</span> грн</div>`;
                    }));
                    let productTemplatePricesOld = "";
                    if (productOldPrice) productTemplatePricesOld = `<div class="item-product__old-price"><span>${productOldPrice}</span> грн</div>`;
                    productTemplatePriceMain = productTemplatePricesWrapperStart;
                    productTemplatePriceMain += productTemplateWrapper;
                    productTemplatePriceMain += productTemplatePricesWrapperEnd;
                    productTemplatePrices = productTemplatePricesStart;
                    productTemplatePrices += productTemplatePriceMain;
                    productTemplatePrices += productTemplatePricesOld;
                    productTemplatePrices += productTemplatePricesEnd;
                    let productTemplateInfoStart = `<div class="item-product__info">`;
                    let productTemplateInfoEnd = `</div>`;
                    let productTemplateMenu = `\n            <div class="item-product__menu">\n                <div class="item-product__eye">\n                    <img src="img/products/eye.svg" alt="">\n                </div>\n                <div class="item-product__bonus">\n                    +20\n                    <span>бонусов</span>\n                </div>\n                <button class="item-product__favourite">\n                <span>\n                <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0199 3.43832C11.3595 2.33776 9.85459 1.33613 8.08844 1.06883C6.35039 0.805778 4.3993 1.26094 2.82024 3.01547C1.74995 4.2047 1.23701 5.33785 1.06706 6.37878C0.896779 7.42176 1.06492 8.40899 1.41488 9.31304C2.12209 11.14 3.54745 12.5728 4.30215 13.3275C5.45292 14.4782 9.52381 18.0788 12.474 20.0949C15.4242 18.0788 19.4951 14.4782 20.6458 13.3275C21.4005 12.5728 22.8259 11.14 23.5331 9.31304C23.883 8.40899 24.0512 7.42176 23.8809 6.37878C23.711 5.33785 23.198 4.2047 22.1277 3.01547C20.5487 1.26094 18.5976 0.805778 16.8595 1.06883C15.0934 1.33613 13.5885 2.33776 12.9281 3.43832C12.8298 3.6022 12.6524 3.68944 12.474 3.68052C12.2956 3.68944 12.1182 3.6022 12.0199 3.43832ZM12.474 2.35685C11.5353 1.22355 9.96648 0.341677 8.23809 0.0800892C6.20259 -0.227979 3.90367 0.316789 2.07695 2.34651C0.897238 3.65732 0.285182 4.96169 0.0801287 6.21765C-0.124589 7.47155 0.0822659 8.64058 0.482311 9.67403C1.27049 11.7102 2.83143 13.271 3.58194 14.0215L3.58195 14.0215L3.59504 14.0346C4.81114 15.2507 9.13652 19.0739 12.1712 21.0971C12.2642 21.1591 12.3704 21.1858 12.474 21.1804C12.5776 21.1858 12.6838 21.1591 12.7767 21.0971C15.8114 19.0739 20.1368 15.2507 21.3529 14.0346L21.366 14.0215L21.366 14.0215C22.1165 13.271 23.6775 11.7102 24.4657 9.67403C24.8657 8.64058 25.0726 7.47155 24.8678 6.21765C24.6628 4.96169 24.0507 3.65732 22.871 2.34651C21.0443 0.316789 18.7454 -0.227979 16.7099 0.0800892C14.9815 0.341677 13.4127 1.22355 12.474 2.35685ZM18.5398 2.9841C18.6486 2.73029 18.9425 2.61271 19.1963 2.72149C20.4788 3.2711 22.4994 5.01617 22.4994 7.68106C22.4994 7.9572 22.2755 8.18106 21.9994 8.18106C21.7232 8.18106 21.4994 7.9572 21.4994 7.68106C21.4994 5.54595 19.8533 4.09102 18.8024 3.64063C18.5486 3.53186 18.431 3.23792 18.5398 2.9841ZM17.4994 3.18106C17.7755 3.18106 17.9994 2.9572 17.9994 2.68106C17.9994 2.40492 17.7755 2.18106 17.4994 2.18106C17.2232 2.18106 16.9994 2.40492 16.9994 2.68106C16.9994 2.9572 17.2232 3.18106 17.4994 3.18106Z" fill="black"/> </svg> </span>\n                </button>\n                <button class="item-product__buy">\n                    <span>\n                    <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">\n                    <path d="M3.6001 16.9205H2.8501V17.6705V28.9999C2.8501 30.5187 4.08132 31.7499 5.6001 31.7499H24.4001C25.9189 31.7499 27.1501 30.5187 27.1501 28.9999V17.6705V16.9205H26.4001H3.6001Z" stroke="white" stroke-width="1.5"/>\n                    <rect x="0.75" y="12.3621" width="28.5" height="4.5588" rx="2.2794" stroke="white" stroke-width="1.5"/>\n                    <rect x="8.3999" y="21.3058" width="1.2" height="7.27056" rx="0.6" fill="white"/>\n                    <rect x="14.4001" y="21.3058" width="1.2" height="7.27056" rx="0.6" fill="white"/>\n                    <rect x="20.3999" y="21.3058" width="1.2" height="7.27056" rx="0.6" fill="white"/>\n                    <path d="M26.4001 11.9058C26.4001 9.01343 25.199 6.23949 23.0611 4.19425C20.9232 2.149 18.0236 1 15.0001 1C11.9766 1 9.077 2.149 6.93908 4.19424C4.80117 6.23948 3.6001 9.01343 3.6001 11.9058L15.0001 11.9058H26.4001Z" stroke="white" stroke-width="1.5"/>\n                    </svg>\n                    \n                    </span\n                </button>\n            </div>\n        `;
                    let productTemplateInfo = "";
                    productTemplateInfo += productTemplateInfoStart;
                    productTemplateInfo += productTemplatePrices;
                    productTemplateInfo += productTemplateName;
                    productTemplateInfo += productTemplateWeigh;
                    productTemplateInfo += productTemplateInfoEnd;
                    let productTemplate = "";
                    productTemplate += productTemplateStart;
                    productTemplate += productTemplateImage;
                    productTemplate += productTemplateInfo;
                    productTemplate += productTemplateMenu;
                    productTemplate += productTemplateLabels;
                    productTemplate += productTemplateEnd;
                    if ("all" === item.type) productsItemsAll.insertAdjacentHTML("beforeend", productTemplate); else if ("natural" === item.type) productsItemsNatural.insertAdjacentHTML("beforeend", productTemplate); else if ("nuts" === item.type) productsItemsNuts.insertAdjacentHTML("beforeend", productTemplate); else if ("cream" === item.type) productsItemsCream.insertAdjacentHTML("beforeend", productTemplate); else if ("perga" === item.type) productsItemsPerga.insertAdjacentHTML("beforeend", productTemplate); else if ("sets" === item.type) productsItemsSets.insertAdjacentHTML("beforeend", productTemplate);
                }));
            }
            getProducts();
            const controlProductsBody = document.querySelectorAll(".controls-products__body .controls-products__wrapper");
            function clearBody() {
                controlProductsBody.forEach((item => {
                    item.innerHTML = "";
                }));
            }
            function initWeigh() {
                const productsItems = document.querySelectorAll(".item-product");
                productsItems.forEach((productItem => {
                    const weighItems = productItem.querySelectorAll(".item-product__weigh-item");
                    const weighInput = productItem.querySelector(".item-product__weigh-input");
                    const prices = productItem.querySelectorAll(".item-product__one");
                    if (weighItems.length > 1) {
                        weighItems[0].classList.add("_active");
                        weighInput.value = weighItems[0].innerHTML.replace(/[^+\d]/g, "");
                        weighItems.forEach(((weighItem, id) => {
                            weighItem.addEventListener("click", (() => {
                                prices.forEach((item => {
                                    item.classList.remove("item-product__one--active");
                                }));
                                prices[id].classList.add("item-product__one--active");
                                clearWeighItems();
                                weighItem.classList.add("_active");
                                weighInput.value = weighItem.innerHTML.replace(/[^+\d]/g, "");
                            }));
                        }));
                        function clearWeighItems() {
                            weighItems.forEach((item => {
                                item.classList.remove("_active");
                            }));
                        }
                    } else weighInput.value = productItem.querySelector(".item-product__weigh-item").innerHTML.replace(/[^+\d]/g, "");
                }));
            }
            function initFilters() {
                const filters = {
                    sort: document.querySelector(".filter-sort"),
                    consistency: document.querySelector(".filter-consistency"),
                    color: document.querySelector(".filter-color")
                };
                const filtersType = [ "sort", "consistency", "color" ];
                const cardsData = products;
                filtersType.forEach((item => {
                    handleChangeFilter(item);
                }));
                function handleChangeFilter(type) {
                    filters[type].addEventListener("change", (event => {
                        const value = event.target.value;
                        const filteredCards = filterCards(type, value, cardsData);
                        const fullFilteredCards = checkOtherFilters(filtersType, filteredCards, type);
                        clearBody();
                        loadProducts(fullFilteredCards);
                        initWeigh();
                    }));
                }
                function filterCards(filterType, value, cards) {
                    const filteredCards = cards.filter((card => {
                        const reg = new RegExp(value);
                        if (reg.test(card.params[filterType])) return true; else return false;
                    }));
                    return filteredCards;
                }
                function checkOtherFilters(filtersType, filteredCards, extraFilterType) {
                    let updateFilteredCards = filteredCards;
                    let filteredFiltersType = filtersType.filter((type => type !== extraFilterType));
                    filteredFiltersType.forEach((type => {
                        const value = filters[type].value;
                        const reg = new RegExp(value);
                        const newFilteredCards = updateFilteredCards.filter((card => {
                            if (reg.test(card.params[type])) return true; else return false;
                        }));
                        updateFilteredCards = newFilteredCards;
                    }));
                    return updateFilteredCards;
                }
            }
        }
        window.addEventListener("load", (() => {
            const cartList = document.querySelector(".cart-header__list");
            const wishList = document.querySelector(".favourite-header__list");
            const empty = document.querySelector(".cart-header__empty");
            const emptyInfo = document.querySelector(".cart-header__info");
            const emptyWish = document.querySelector(".favourite-header__empty");
            const emptyWishInfo = document.querySelector(".favourite-header__list");
            const totalPriceInput = document.querySelector(".cart-header__price span");
            const iconHeaderNumber = document.querySelector(".icon-header__number");
            const iconWishNumber = document.querySelector(".favourite-header__number");
            function calcCartPrice() {
                const cartItems = cartList.querySelectorAll(".item-cart");
                let totalPrice = 0;
                cartItems.forEach((cartItem => {
                    let el = cartItem.querySelector(".item-cart__input span");
                    const price = cartItem.querySelector(".item-cart__price span");
                    let currentPrice = parseInt(el.innerHTML) * parseInt(price.innerHTML);
                    totalPrice += currentPrice;
                    totalPriceInput.innerHTML = totalPrice;
                }));
                localStorage.setItem("price", totalPrice);
            }
            emptyInfo.style = "display: none";
            function toggleCartStatus() {
                if (!cartList.querySelector(".item-cart")) {
                    empty.style = "display: block";
                    emptyInfo.style = "display: none";
                } else {
                    empty.style = "display: none";
                    emptyInfo.style = "display: block";
                }
            }
            function toggleWishStatus() {
                if (!wishList.querySelector(".favourite-header__item")) {
                    emptyWish.style = "display: block";
                    emptyWishInfo.style = "display: none";
                } else {
                    emptyWish.style = "display: none";
                    emptyWishInfo.style = "display: flex";
                }
            }
            function renderCartProduct(productInfo) {
                const cartItemHtml = `\n        <li data-cart-pid="${productInfo.id}" class="cart-header__item item-cart">\n            <a href="" class="item-cart__image">\n                <img src="${productInfo.imgSrc}" alt="${productInfo.title}"/>\n            </a>\n            <div class="item-cart__content">\n                <div class="item-cart__info">\n                    <a href="" class="item-cart__title">\n                        <span class="item-cart__name">${productInfo.title}</span>,\n                        <span class="item-cart__weigh">${productInfo.weigh}г</span>\n                    </a>\n                </div>\n                <div class="item-cart__quantity">\n                    <button type="button" class="item-cart__button item-cart__button_minus">-</button>\n                    <div class="item-cart__input">\n                        <span>1</span>\n                    </div>\n                    <button type="button" class="item-cart__button item-cart__button_plus">+</button>\n                </div>\n            </div>\n            <div class="item-cart__control">\n                <div class="item-cart__price">\n                    <span>${productInfo.price}</span>грн\n                </div>\n                <div class="item-cart__delete">\n                    <span>\n                    <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg"> <path d="M2.32129 2.32363C2.72582 1.9191 3.38168 1.9191 3.78621 2.32363L25.6966 24.234C26.1011 24.6385 26.1011 25.2944 25.6966 25.6989C25.2921 26.1035 24.6362 26.1035 24.2317 25.6989L2.32129 3.78854C1.91676 3.38402 1.91676 2.72815 2.32129 2.32363Z" fill="black"></path> <path d="M25.6787 2.30339C25.2742 1.89887 24.6183 1.89887 24.2138 2.30339L2.30339 24.2138C1.89887 24.6183 1.89887 25.2742 2.30339 25.6787C2.70792 26.0832 3.36379 26.0832 3.76831 25.6787L25.6787 3.76831C26.0832 3.36379 26.0832 2.70792 25.6787 2.30339Z" fill="black"></path> </svg>\n                    </span>\n                </div>\n            </div>\n        </li>\n                `;
                return cartItemHtml;
            }
            function flyProduct(buyButton) {
                const basketHeader = document.querySelector(".cart-header");
                const product = buyButton.closest(".item-product");
                buyButton.classList.add("_fly");
                const productImage = product.querySelector(".item-product__image");
                const productImageFly = productImage.cloneNode(true);
                const productImageFlyWidth = productImage.offsetWidth;
                const productImageFlyHeight = productImage.offsetHeight;
                const productImageFlyTop = productImage.getBoundingClientRect().top;
                const productImageFlyLeft = productImage.getBoundingClientRect().left;
                productImageFly.setAttribute("class", "_flyImage _ibg");
                productImageFly.style.cssText = `\n                left: ${productImageFlyLeft}px;\n                top: ${productImageFlyTop}px;\n                width: ${productImageFlyWidth}px;\n                height: ${productImageFlyHeight}px;\n            `;
                document.body.append(productImageFly);
                const cartFlyLeft = basketHeader.getBoundingClientRect().left;
                const cartFlyTop = basketHeader.getBoundingClientRect().top;
                productImageFly.style.cssText = `\n                left: ${cartFlyLeft}px;\n                top: ${cartFlyTop}px;\n                width: 0px;\n                height: 0px;\n                opacity: 0;\n            `;
                productImageFly.addEventListener("transitionend", (() => {
                    if (buyButton.classList.contains("_fly")) {
                        productImageFly.remove();
                        buyButton.classList.remove("_fly");
                    }
                }));
            }
            function flyProductSlider(buyButton) {
                const basketHeader = document.querySelector(".cart-header");
                const product = buyButton.closest(".slide-product");
                buyButton.classList.add("_fly");
                const productImage = product.querySelector(".slide-product__image");
                const productImageFly = productImage.cloneNode(true);
                const productImageFlyWidth = productImage.offsetWidth;
                const productImageFlyHeight = productImage.offsetHeight;
                const productImageFlyTop = productImage.getBoundingClientRect().top;
                const productImageFlyLeft = productImage.getBoundingClientRect().left;
                productImageFly.setAttribute("class", "_flyImage _ibg");
                productImageFly.style.cssText = `\n                left: ${productImageFlyLeft}px;\n                top: ${productImageFlyTop}px;\n                width: ${productImageFlyWidth}px;\n                height: ${productImageFlyHeight}px;\n            `;
                document.body.append(productImageFly);
                const cartFlyLeft = basketHeader.getBoundingClientRect().left;
                const cartFlyTop = basketHeader.getBoundingClientRect().top;
                productImageFly.style.cssText = `\n                left: ${cartFlyLeft}px;\n                top: ${cartFlyTop}px;\n                width: 0px;\n                height: 0px;\n                opacity: 0;\n            `;
                productImageFly.addEventListener("transitionend", (() => {
                    if (buyButton.classList.contains("_fly")) {
                        productImageFly.remove();
                        buyButton.classList.remove("_fly");
                    }
                }));
            }
            function addToStorage(product, productId) {
                const storageId = "product" + productId;
                localStorage.setItem(storageId, product);
            }
            function deleteFromStorage(productId) {
                const storageId = "product" + productId;
                localStorage.removeItem(storageId);
            }
            function storagePlusQuantity(product, productId) {
                const storageId = "product" + productId;
                localStorage.removeItem(storageId);
                localStorage.setItem(storageId, product.outerHTML);
            }
            function storageMinusQuantity(product, productId) {
                const storageId = "product" + productId;
                localStorage.removeItem(storageId);
                localStorage.setItem(storageId, product.outerHTML);
            }
            function wishAddToStorage(product, productId) {
                const storageId = "wish" + productId;
                localStorage.setItem(storageId, product);
            }
            function deleteWishFromStorage(productId) {
                const storageId = "wish" + productId;
                localStorage.removeItem(storageId);
            }
            window.addEventListener("click", (e => {
                const searchHeader = document.querySelector(".search-header");
                const basketHeader = document.querySelector(".cart-header");
                const favouriteHeader = document.querySelector(".favourite-header");
                if (e.target === document.querySelector(".search-header__icon") && searchHeader.classList.contains("_open")) searchHeader.classList.remove("_open"); else if (e.target.closest(".search-header")) searchHeader.classList.add("_open"); else searchHeader.classList.remove("_open");
                if (e.target === document.querySelector(".cart-header__icon") && basketHeader.classList.contains("_open")) basketHeader.classList.remove("_open"); else if (e.target.closest(".cart-header")) basketHeader.classList.add("_open"); else basketHeader.classList.remove("_open");
                if (e.target === document.querySelector(".favourite-header__icon") && favouriteHeader.classList.contains("_open")) favouriteHeader.classList.remove("_open"); else if (e.target.closest(".favourite-header")) favouriteHeader.classList.add("_open"); else favouriteHeader.classList.remove("_open");
                if (e.target.classList.contains("item-product__buy")) {
                    const product = e.target.closest(".item-product");
                    const productId = e.target.closest(".item-product").dataset.pid;
                    const selectWeigh = product.querySelector(".item-product__weigh-input").value;
                    const newProductId = productId + "-" + selectWeigh;
                    flyProduct(e.target);
                    const productInfo = {
                        id: newProductId,
                        imgSrc: product.querySelector(".item-product__image img").getAttribute("src"),
                        title: product.querySelector(".item-product__name").innerHTML,
                        price: product.querySelector(".item-product__one--active span").innerHTML,
                        weigh: selectWeigh
                    };
                    const itemInCart = cartList.querySelector(`[data-cart-pid="${productInfo.id}"]`);
                    if (itemInCart) {
                        iconHeaderNumber.innerHTML = +parseInt(iconHeaderNumber.innerHTML);
                        const counterElement = itemInCart.querySelector(".item-cart__input span");
                        counterElement.innerHTML = parseInt(counterElement.innerHTML) + 1;
                        if (cartList.querySelector(".cart-header__item")) iconHeaderNumber.classList.add("_active");
                        storagePlusQuantity(itemInCart, productInfo.id);
                        calcCartPrice();
                    } else {
                        iconHeaderNumber.innerHTML = parseInt(iconHeaderNumber.innerHTML) + 1;
                        const cartItemHtml = renderCartProduct(productInfo);
                        addToStorage(cartItemHtml, productInfo.id);
                        cartList.insertAdjacentHTML("beforeend", cartItemHtml);
                        if (cartList.querySelector(".cart-header__item")) iconHeaderNumber.classList.add("_active");
                        calcCartPrice();
                    }
                    toggleCartStatus();
                }
                if (e.target.classList.contains("item-cart__button_minus")) {
                    const product = e.target.closest(".item-cart");
                    const productInput = product.querySelector(".item-cart__input span");
                    const orderBasketDelivery = document.querySelector(".order-basket__price_delivery");
                    if (1 == parseInt(productInput.innerHTML)) return; else {
                        productInput.innerHTML = parseInt(productInput.innerHTML) - 1;
                        calcCartPrice();
                        storageMinusQuantity(product, product.getAttribute("data-cart-pid"));
                        if (document.querySelector(".basket")) {
                            const orderBasketItems = document.querySelector(".order-basket__items");
                            const basketPrice = document.querySelector(".order-basket__price span");
                            let elements = "";
                            for (let i = 0; i < localStorage.length; i++) if ("price" !== localStorage.key(i) && "wish" !== localStorage.key(i).replace(/[^a-zA-Z ]/g, "")) elements += localStorage.getItem(localStorage.key(i));
                            orderBasketItems.innerHTML = elements;
                            cartList.innerHTML = elements;
                            calcCartPrice();
                            let testPrice = localStorage.getItem("price");
                            basketPrice.innerHTML = testPrice;
                            if (testPrice > 2e3) orderBasketDelivery.innerHTML = "Безкоштовно"; else orderBasketDelivery.innerHTML = "Не безкоштовно";
                        }
                    }
                    toggleCartStatus();
                }
                if (e.target.classList.contains("item-cart__button_plus")) {
                    const product = e.target.closest(".item-cart");
                    const productInput = product.querySelector(".item-cart__input span");
                    productInput.innerHTML = parseInt(productInput.innerHTML) + 1;
                    storagePlusQuantity(product, product.getAttribute("data-cart-pid"));
                    calcCartPrice();
                    if (document.querySelector(".basket")) {
                        const orderBasketItems = document.querySelector(".order-basket__items");
                        const basketPrice = document.querySelector(".order-basket__price span");
                        const orderBasketDelivery = document.querySelector(".order-basket__price_delivery");
                        let elements = "";
                        for (let i = 0; i < localStorage.length; i++) if ("price" !== localStorage.key(i) && "wish" !== localStorage.key(i).replace(/[^a-zA-Z ]/g, "")) elements += localStorage.getItem(localStorage.key(i));
                        orderBasketItems.innerHTML = elements;
                        cartList.innerHTML = elements;
                        calcCartPrice();
                        let testPrice = localStorage.getItem("price");
                        basketPrice.innerHTML = testPrice;
                        if (testPrice > 2e3) orderBasketDelivery.innerHTML = "Безкоштовно"; else orderBasketDelivery.innerHTML = "Не безкоштовно";
                    }
                    toggleCartStatus();
                }
                if (e.target.classList.contains("item-cart__delete")) {
                    iconHeaderNumber.innerHTML = parseInt(iconHeaderNumber.innerHTML) - 1;
                    const product = e.target.closest(".item-cart");
                    deleteFromStorage(product.getAttribute("data-cart-pid"));
                    product.remove();
                    calcCartPrice();
                    toggleCartStatus();
                    if (!cartList.querySelector(".cart-header__item")) iconHeaderNumber.classList.remove("_active");
                    if (document.querySelector(".basket")) {
                        const basketPrice = document.querySelector(".order-basket__price span");
                        const orderBasketItems = document.querySelector(".order-basket__items");
                        const orderBasketDelivery = document.querySelector(".order-basket__price_delivery");
                        let elements = "";
                        for (var i = 0; i < localStorage.length; i++) if ("price" !== localStorage.key(i) && "wish" !== localStorage.key(i).replace(/[^a-zA-Z ]/g, "")) elements += localStorage.getItem(localStorage.key(i));
                        orderBasketItems.innerHTML = elements;
                        cartList.innerHTML = elements;
                        calcCartPrice();
                        basketPrice.innerHTML = localStorage.getItem("price");
                        if (localStorage.getItem("price") > 2e3) orderBasketDelivery.innerHTML = "Безкоштовно"; else orderBasketDelivery.innerHTML = "Не безкоштовно";
                        toggleCartStatus();
                    }
                }
                if (e.target.classList.contains("slide-product__buy")) {
                    const product = e.target.closest(".slide-product");
                    const productId = product.getAttribute("data-pid");
                    const selectWeigh = product.querySelector(".slide-product__text span").innerHTML;
                    const newProductId = productId + "-" + selectWeigh;
                    flyProductSlider(e.target);
                    const productInfo = {
                        id: newProductId,
                        imgSrc: product.querySelector(".slide-product__image img").getAttribute("src"),
                        title: product.querySelector(".slide-product__name").innerHTML,
                        price: product.querySelector(".slide-product__price span").innerHTML,
                        weigh: selectWeigh
                    };
                    const itemInCart = cartList.querySelector(`[data-cart-pid="${productInfo.id}"]`);
                    if (itemInCart) {
                        const counterElement = itemInCart.querySelector(".item-cart__input span");
                        counterElement.innerHTML = parseInt(counterElement.innerHTML) + 1;
                        storagePlusQuantity(itemInCart, productInfo.id);
                        calcCartPrice();
                    } else {
                        const cartItemHtml = renderCartProduct(productInfo);
                        addToStorage(cartItemHtml, productInfo.id);
                        cartList.insertAdjacentHTML("beforeend", cartItemHtml);
                        iconHeaderNumber.innerHTML = parseInt(iconHeaderNumber.innerHTML) + 1;
                        if (cartList.querySelector(".cart-header__item")) iconHeaderNumber.classList.add("_active");
                        calcCartPrice();
                    }
                    toggleCartStatus();
                }
                if (e.target.classList.contains("slide-product__favourite")) {
                    const product = e.target.closest(".slide-product");
                    const productId = product.getAttribute("data-pid");
                    const selectWeigh = product.querySelector(".slide-product__text span").innerHTML;
                    const newProductId = productId + "-" + selectWeigh;
                    const productInfo = {
                        id: newProductId,
                        imgSrc: product.querySelector(".slide-product__image img").getAttribute("src"),
                        title: product.querySelector(".slide-product__name").innerHTML,
                        price: product.querySelector(".slide-product__price span").innerHTML,
                        weigh: selectWeigh
                    };
                    const productInWishList = wishList.querySelector(`[data-cart-pid="${productInfo.id}"]`);
                    if (productInWishList) return; else {
                        const cartItemHtml = `\n            <li data-cart-pid="${productInfo.id}" class="favourite-header__item">\n                <a href="" class="favourite-header__image">\n                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">\n                </a>\n                <div class="favourite-header__content">\n                    <a href="" class="favourite-header__title">\n                        <span class="favourite-header__name">${productInfo.title}</span>,\n                        <span class="favourite-header__weigh"><span>${productInfo.weigh}</span>г</span>\n                    </a>\n                    <button class="favourite-header__in-cart">У кошик</button>\n                </div>\n                <div class="favourite-header__control">\n                    <div class="favourite-header__price"><span>${productInfo.price}</span>грн</div>\n                    <div class="favourite-header__delete">\n                        <span>\n                                <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg"> <path d="M2.32129 2.32363C2.72582 1.9191 3.38168 1.9191 3.78621 2.32363L25.6966 24.234C26.1011 24.6385 26.1011 25.2944 25.6966 25.6989C25.2921 26.1035 24.6362 26.1035 24.2317 25.6989L2.32129 3.78854C1.91676 3.38402 1.91676 2.72815 2.32129 2.32363Z" fill="black"></path> <path d="M25.6787 2.30339C25.2742 1.89887 24.6183 1.89887 24.2138 2.30339L2.30339 24.2138C1.89887 24.6183 1.89887 25.2742 2.30339 25.6787C2.70792 26.0832 3.36379 26.0832 3.76831 25.6787L25.6787 3.76831C26.0832 3.36379 26.0832 2.70792 25.6787 2.30339Z" fill="black"></path> </svg>\n                        </span>\n                    </div>\n                </div>\n            </li>\n                    `;
                        wishList.insertAdjacentHTML("beforeend", cartItemHtml);
                        iconWishNumber.innerHTML = parseInt(iconWishNumber.innerHTML) + 1;
                        if (wishList.querySelector(".favourite-header__item")) iconWishNumber.classList.add("_active");
                        wishAddToStorage(cartItemHtml, productInfo.id);
                        toggleWishStatus();
                    }
                }
                if (e.target.classList.contains("item-product__favourite")) {
                    const product = e.target.closest(".item-product");
                    const productId = e.target.closest(".item-product").dataset.pid;
                    const selectWeigh = product.querySelector(".item-product__weigh-input").value;
                    const newProductId = productId + "-" + selectWeigh;
                    const productInfo = {
                        id: newProductId,
                        imgSrc: product.querySelector(".item-product__image img").getAttribute("src"),
                        title: product.querySelector(".item-product__name").innerHTML,
                        price: product.querySelector(".item-product__one--active span").innerHTML,
                        weigh: selectWeigh
                    };
                    const productInWishList = wishList.querySelector(`[data-cart-pid="${productInfo.id}"]`);
                    if (productInWishList) return; else {
                        const cartItemHtml = `\n            <li data-cart-pid="${productInfo.id}" class="favourite-header__item">\n                <a href="" class="favourite-header__image _ibg">\n                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">\n                </a>\n                <div class="favourite-header__content">\n                    <a href="" class="favourite-header__title">\n                        <span class="favourite-header__name">${productInfo.title}</span>,\n                        <span class="favourite-header__weigh"><span>${productInfo.weigh}</span>г</span>\n                    </a>\n                    <button class="favourite-header__in-cart">У кошик</button>\n                </div>\n                <div class="favourite-header__control">\n                    <div class="favourite-header__price"><span>${productInfo.price}</span>грн</div>\n                    <div class="favourite-header__delete">\n                        <span>\n                                <svg fill="none" height="28" viewBox="0 0 28 28" width="28" xmlns="http://www.w3.org/2000/svg"> <path d="M2.32129 2.32363C2.72582 1.9191 3.38168 1.9191 3.78621 2.32363L25.6966 24.234C26.1011 24.6385 26.1011 25.2944 25.6966 25.6989C25.2921 26.1035 24.6362 26.1035 24.2317 25.6989L2.32129 3.78854C1.91676 3.38402 1.91676 2.72815 2.32129 2.32363Z" fill="black"></path> <path d="M25.6787 2.30339C25.2742 1.89887 24.6183 1.89887 24.2138 2.30339L2.30339 24.2138C1.89887 24.6183 1.89887 25.2742 2.30339 25.6787C2.70792 26.0832 3.36379 26.0832 3.76831 25.6787L25.6787 3.76831C26.0832 3.36379 26.0832 2.70792 25.6787 2.30339Z" fill="black"></path> </svg>\n                        </span>\n                    </div>\n                </div>\n            </li>\n                `;
                        iconWishNumber.innerHTML = parseInt(iconWishNumber.innerHTML) + 1;
                        wishAddToStorage(cartItemHtml, productInfo.id);
                        wishList.insertAdjacentHTML("beforeend", cartItemHtml);
                        toggleWishStatus();
                        if (wishList.querySelector(".favourite-header__item")) iconWishNumber.classList.add("_active");
                        product.classList.add("_wish");
                    }
                }
                if (e.target.classList.contains("favourite-header__in-cart")) {
                    const product = e.target.closest(".favourite-header__item");
                    const productId = product.getAttribute("data-cart-pid");
                    const itemInCart = cartList.querySelector(`[data-cart-pid="${productId}"]`);
                    if (itemInCart) {
                        alert("Вже у кошику!");
                        product.remove();
                        iconWishNumber.innerHTML = parseInt(iconWishNumber.innerHTML) - 1;
                        if (!wishList.querySelector(".favourite-header__item")) iconWishNumber.classList.remove("_active");
                        deleteWishFromStorage(productId);
                        toggleWishStatus();
                    } else {
                        const productTitle = product.querySelector(".favourite-header__name").innerHTML;
                        const selectWeigh = product.querySelector(".favourite-header__weigh span").innerHTML;
                        const productImgSrc = product.querySelector(".favourite-header__image img").getAttribute("src");
                        const productPrice = product.querySelector(".favourite-header__price span").innerHTML;
                        const productInfo = {
                            id: productId,
                            imgSrc: productImgSrc,
                            title: productTitle,
                            price: productPrice,
                            weigh: selectWeigh
                        };
                        const cartItemHtml = renderCartProduct(productInfo);
                        addToStorage(cartItemHtml, productInfo.id);
                        if (document.querySelector(".basket")) {
                            const orderBasketItems = document.querySelector(".order-basket__items");
                            const basketPrice = document.querySelector(".order-basket__price span");
                            const orderBasketDelivery = document.querySelector(".order-basket__price_delivery");
                            let elements = "";
                            let number = 0;
                            for (i = 0; i < localStorage.length; i++) if ("price" !== localStorage.key(i) && "wish" !== localStorage.key(i).replace(/[^a-zA-Z ]/g, "")) {
                                elements += localStorage.getItem(localStorage.key(i));
                                number++;
                            }
                            orderBasketItems.innerHTML = elements;
                            cartList.innerHTML = elements;
                            calcCartPrice();
                            basketPrice.innerHTML = localStorage.getItem("price");
                            if (localStorage.getItem("price") > 2e3) orderBasketDelivery.innerHTML = "Безкоштовно"; else orderBasketDelivery.innerHTML = "Не безкоштовно";
                        }
                        cartList.insertAdjacentHTML("beforeend", cartItemHtml);
                        deleteWishFromStorage(productInfo.id);
                        iconHeaderNumber.innerHTML = parseInt(iconHeaderNumber.innerHTML) + 1;
                        iconWishNumber.innerHTML = parseInt(iconWishNumber.innerHTML) - 1;
                        calcCartPrice();
                        toggleCartStatus();
                        product.remove();
                        if (cartList.querySelector(".cart-header__item")) iconHeaderNumber.classList.add("_active");
                        if (!wishList.querySelector(".favourite-header__item")) iconWishNumber.classList.remove("_active");
                        toggleWishStatus();
                    }
                }
                if (e.target.classList.contains("favourite-header__delete")) {
                    const product = e.target.closest(".favourite-header__item");
                    product.remove();
                    toggleWishStatus();
                    if (!wishList.querySelector(".favourite-header__item")) iconWishNumber.classList.remove("_active");
                    deleteWishFromStorage(product.getAttribute("data-cart-pid"));
                    iconWishNumber.innerHTML = parseInt(iconWishNumber.innerHTML) - 1;
                }
            }));
            let elements = "";
            let elementsWish = "";
            let number = 0;
            let numberWish = 0;
            for (var i = 0; i < localStorage.length; i++) if ("price" !== localStorage.key(i) && "wish" !== localStorage.key(i).replace(/[^a-zA-Z ]/g, "")) {
                elements += localStorage.getItem(localStorage.key(i));
                number++;
            } else if ("wish" == localStorage.key(i).replace(/[^a-zA-Z ]/g, "")) {
                elementsWish += localStorage.getItem(localStorage.key(i));
                numberWish++;
            }
            cartList.innerHTML = elements;
            wishList.innerHTML = elementsWish;
            if (number > 0) {
                iconHeaderNumber.innerHTML = number;
                iconHeaderNumber.classList.add("_active");
            }
            if (numberWish > 0) {
                iconWishNumber.innerHTML = numberWish;
                iconWishNumber.classList.add("_active");
            }
            totalPriceInput.innerHTML = localStorage.getItem("price");
            toggleCartStatus();
            toggleWishStatus();
            if (document.querySelector(".basket")) {
                const orderBasketItems = document.querySelector(".order-basket__items");
                const basketPrice = document.querySelector(".order-basket__price span");
                const orderBasketDelivery = document.querySelector(".order-basket__price_delivery");
                let elements = "";
                let number = 0;
                for (i = 0; i < localStorage.length; i++) if ("price" !== localStorage.key(i) && "wish" !== localStorage.key(i).replace(/[^a-zA-Z ]/g, "")) {
                    elements += localStorage.getItem(localStorage.key(i));
                    number++;
                }
                orderBasketItems.innerHTML = elements;
                basketPrice.innerHTML = localStorage.getItem("price");
                if (localStorage.getItem("price") > 2e3) orderBasketDelivery.innerHTML = "Безкоштовно"; else orderBasketDelivery.innerHTML = "Не безкоштовно";
            }
            document.addEventListener("formSent", (function(e) {
                const orderList = document.querySelector(".order-basket__items");
                const cartList = document.querySelector(".cart-header__list");
                const price = document.querySelector(".order-basket__price span");
                const free = document.querySelector(".order-basket__price_delivery");
                formBasket.classList.remove("post-2");
                formBasket.classList.remove("post");
                itemPostContent.classList.remove("p2");
                itemPostContent.classList.add("p1");
                orderList.innerHTML = "";
                cartList.innerHTML = "";
                price.innerHTML = 0;
                free.innerHTML = "Не безкоштовно";
                document.querySelector(".icon-header__number").classList.remove("_active");
                localStorage.clear();
            }));
        }));
        pageNavigation();
        tabs();
        formFieldsInit({
            viewPass: false
        });
        window.addEventListener("load", (() => {
            formSubmit();
        }));
    })();
})();