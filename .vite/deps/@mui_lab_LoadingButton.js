import {
  ButtonGroupContext_default,
  Button_default,
  CircularProgress_default,
  createPopper
} from "./chunk-PA6RPMBU.js";
import "./chunk-MSHDVH7Q.js";
import "./chunk-FOXCILTQ.js";
import "./chunk-WT3SXMHS.js";
import {
  require_react_dom
} from "./chunk-NEZJQHI7.js";
import {
  init_utils,
  useId_default
} from "./chunk-A7CSMK3C.js";
import {
  capitalize_default
} from "./chunk-BDJ4D2RV.js";
import "./chunk-OJKPAQLC.js";
import "./chunk-EFGLQNUC.js";
import "./chunk-ZJUSKGE2.js";
import {
  memoTheme
} from "./chunk-TOKM6Z3M.js";
import {
  init_DefaultPropsProvider,
  useDefaultProps
} from "./chunk-OPZCHWMZ.js";
import {
  chainPropTypes,
  generateUtilityClass,
  generateUtilityClasses,
  init_esm,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_resolveProps,
  require_prop_types,
  resolveProps,
  styled_default
} from "./chunk-6HL664A2.js";
import {
  require_jsx_runtime
} from "./chunk-URWWIEBN.js";
import {
  clsx_default,
  init_clsx
} from "./chunk-2DLXG6XR.js";
import {
  require_react
} from "./chunk-FXJVXTVJ.js";
import {
  __commonJS,
  __publicField,
  __toESM
} from "./chunk-4B2QHNJT.js";

// node_modules/@mui/base/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/@mui/base/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef2 = REACT_FORWARD_REF_TYPE;
        var Fragment8 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo2 = REACT_MEMO_TYPE;
        var Portal3 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef2;
        exports.Fragment = Fragment8;
        exports.Lazy = Lazy;
        exports.Memo = Memo2;
        exports.Portal = Portal3;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/@mui/base/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/@mui/base/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/@mui/lab/LoadingButton/LoadingButton.js
var React86 = __toESM(require_react());
var import_prop_types34 = __toESM(require_prop_types());
init_esm();
init_utils();

// node_modules/@mui/base/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js
function isHostComponent(element) {
  return typeof element === "string";
}
var isHostComponent_default = isHostComponent;

// node_modules/@mui/base/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === void 0 || isHostComponent_default(elementType)) {
    return otherProps;
  }
  return {
    ...otherProps,
    ownerState: {
      ...otherProps.ownerState,
      ...ownerState
    }
  };
}
var appendOwnerState_default = appendOwnerState;

// node_modules/@mui/base/utils/areArraysEqual.js
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index2) => itemComparer(value, array2[index2]));
}

// node_modules/@mui/base/utils/ClassNameConfigurator.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var defaultContextValue = {
  disableDefaultClasses: false
};
var ClassNameConfiguratorContext = React.createContext(defaultContextValue);
if (true) {
  ClassNameConfiguratorContext.displayName = "ClassNameConfiguratorContext";
}
function useClassNamesOverride(generateUtilityClass4) {
  const {
    disableDefaultClasses
  } = React.useContext(ClassNameConfiguratorContext);
  return (slot) => {
    if (disableDefaultClasses) {
      return "";
    }
    return generateUtilityClass4(slot);
  };
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
var extractEventHandlers_default = extractEventHandlers;

// node_modules/@mui/base/utils/isHostComponent.js
function isHostComponent2(element) {
  return typeof element === "string";
}

// node_modules/@mui/base/utils/resolveComponentProps.js
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}

// node_modules/@mui/base/utils/useRootElementName.js
var React2 = __toESM(require_react());
function useRootElementName(parameters) {
  const {
    rootElementName: rootElementNameProp = "",
    componentName
  } = parameters;
  const [rootElementName, setRootElementName] = React2.useState(rootElementNameProp.toUpperCase());
  if (true) {
    React2.useEffect(() => {
      if (rootElementNameProp && rootElementName !== rootElementNameProp.toUpperCase()) {
        console.error(`useRootElementName: the \`rootElementName\` prop of ${componentName ? `the ${componentName} component` : "a component"} expected the '${rootElementNameProp}' element, but a '${rootElementName.toLowerCase()}' was rendered instead`, "This may cause hydration issues in an SSR context, for example in a Next.js app");
      }
    }, [rootElementNameProp, rootElementName, componentName]);
  }
  const updateRootElementName = React2.useCallback((instance) => {
    setRootElementName((instance == null ? void 0 : instance.tagName) ?? "");
  }, []);
  return [rootElementName, updateRootElementName];
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var React3 = __toESM(require_react());

// node_modules/@mui/base/node_modules/@mui/utils/esm/setRef/setRef.js
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
function useForkRef(...refs) {
  return React3.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (instance) => {
      refs.forEach((ref) => {
        setRef(ref, instance);
      });
    };
  }, refs);
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js
init_clsx();

// node_modules/@mui/base/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
function omitEventHandlers(object) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
var omitEventHandlers_default = omitEventHandlers;

// node_modules/@mui/base/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx_default(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle2 = {
      ...additionalProps == null ? void 0 : additionalProps.style,
      ...externalForwardedProps == null ? void 0 : externalForwardedProps.style,
      ...externalSlotProps == null ? void 0 : externalSlotProps.style
    };
    const props2 = {
      ...additionalProps,
      ...externalForwardedProps,
      ...externalSlotProps
    };
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers_default({
    ...externalForwardedProps,
    ...externalSlotProps
  });
  const componentsPropsWithoutEventHandlers = omitEventHandlers_default(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers_default(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx_default(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = {
    ...internalSlotProps == null ? void 0 : internalSlotProps.style,
    ...additionalProps == null ? void 0 : additionalProps.style,
    ...externalForwardedProps == null ? void 0 : externalForwardedProps.style,
    ...externalSlotProps == null ? void 0 : externalSlotProps.style
  };
  const props = {
    ...internalSlotProps,
    ...additionalProps,
    ...otherPropsWithoutEventHandlers,
    ...componentsPropsWithoutEventHandlers
  };
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
var mergeSlotProps_default = mergeSlotProps;

// node_modules/@mui/base/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js
function resolveComponentProps2(componentProps, ownerState, slotState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
var resolveComponentProps_default = resolveComponentProps2;

// node_modules/@mui/base/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
function useSlotProps(parameters) {
  var _a;
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false,
    ...other
  } = parameters;
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps_default(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps_default({
    ...other,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_a = parameters.additionalProps) == null ? void 0 : _a.ref);
  const props = appendOwnerState_default(elementType, {
    ...mergedProps,
    ref
  }, ownerState);
  return props;
}
var useSlotProps_default = useSlotProps;

// node_modules/@mui/base/utils/mergeSlotProps.js
init_clsx();

// node_modules/@mui/base/utils/prepareForSlot.js
var React4 = __toESM(require_react());

// node_modules/@mui/base/Badge/Badge.js
var React15 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());

// node_modules/@mui/base/node_modules/@mui/utils/esm/chainPropTypes/chainPropTypes.js
function chainPropTypes2(propType1, propType2) {
  if (false) {
    return () => null;
  }
  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/elementAcceptingRef/elementAcceptingRef.js
var import_prop_types = __toESM(require_prop_types());
function isClassComponent(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;
  if (element == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === "undefined") {
    return null;
  }
  let warningHint;
  const elementType = element.type;
  if (typeof elementType === "function" && !isClassComponent(elementType)) {
    warningHint = "Did you accidentally use a plain function component for an element instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var elementAcceptingRef = chainPropTypes2(import_prop_types.default.element, acceptingRef);
elementAcceptingRef.isRequired = chainPropTypes2(import_prop_types.default.element.isRequired, acceptingRef);
var elementAcceptingRef_default = elementAcceptingRef;

// node_modules/@mui/base/node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js
var import_prop_types2 = __toESM(require_prop_types());
function isClassComponent2(elementType) {
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === "undefined") {
    return null;
  }
  let warningHint;
  if (typeof propValue === "function" && !isClassComponent2(propValue)) {
    warningHint = "Did you accidentally provide a plain function component instead?";
  }
  if (warningHint !== void 0) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an element type that can hold a ref. ${warningHint} For more information see https://mui.com/r/caveat-with-refs-guide`);
  }
  return null;
}
var elementTypeAcceptingRef_default = chainPropTypes2(import_prop_types2.default.elementType, elementTypeAcceptingRef);

// node_modules/@mui/base/node_modules/@mui/utils/esm/exactProp/exactProp.js
var specialProperty = "exact-prop: ​";
function exactProp(propTypes) {
  if (false) {
    return propTypes;
  }
  return {
    ...propTypes,
    [specialProperty]: (props) => {
      const unsupportedProps = Object.keys(props).filter((prop) => !propTypes.hasOwnProperty(prop));
      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map((prop) => `\`${prop}\``).join(", ")}. Please remove them.`);
      }
      return null;
    }
  };
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js
var import_react_is = __toESM(require_react_is());

// node_modules/@mui/base/node_modules/@mui/utils/esm/HTMLElementType/HTMLElementType.js
function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (false) {
    return null;
  }
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null) {
    return null;
  }
  if (propValue && propValue.nodeType !== 1) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. Expected an HTMLElement.`);
  }
  return null;
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/ponyfillGlobal/ponyfillGlobal.js
var ponyfillGlobal_default = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();

// node_modules/@mui/base/node_modules/@mui/utils/esm/refType/refType.js
var import_prop_types3 = __toESM(require_prop_types());
var refType = import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]);
var refType_default = refType;

// node_modules/@mui/base/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {
  });
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/debounce/debounce.js
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js
var React5 = __toESM(require_react());

// node_modules/@mui/base/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js
function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
var React6 = __toESM(require_react());
var useEnhancedEffect = typeof window !== "undefined" ? React6.useLayoutEffect : React6.useEffect;
var useEnhancedEffect_default = useEnhancedEffect;

// node_modules/@mui/base/node_modules/@mui/utils/esm/useId/useId.js
var React7 = __toESM(require_react());
var globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React7.useState(idOverride);
  const id = idOverride || defaultId;
  React7.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}
var maybeReactUseId = React7["useId".toString()];
function useId(idOverride) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride ?? reactId;
  }
  return useGlobalId(idOverride);
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/useControlled/useControlled.js
var React8 = __toESM(require_react());
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = React8.useRef(controlled !== void 0);
  const [valueState, setValue] = React8.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (true) {
    React8.useEffect(() => {
      if (isControlled !== (controlled !== void 0)) {
        console.error([`MUI: A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = React8.useRef(defaultProp);
    React8.useEffect(() => {
      if (!isControlled && !Object.is(defaultValue, defaultProp)) {
        console.error([`MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  const setValueIfUncontrolled = React8.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
var React9 = __toESM(require_react());
function useEventCallback(fn) {
  const ref = React9.useRef(fn);
  useEnhancedEffect_default(() => {
    ref.current = fn;
  });
  return React9.useRef((...args) => (
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)
  )).current;
}
var useEventCallback_default = useEventCallback;

// node_modules/@mui/base/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js
var React10 = __toESM(require_react());
var UNINITIALIZED = {};
function useLazyRef(init, initArg) {
  const ref = React10.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/useOnMount/useOnMount.js
var React11 = __toESM(require_react());
var EMPTY = [];
function useOnMount(fn) {
  React11.useEffect(fn, EMPTY);
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/useTimeout/useTimeout.js
var Timeout = class _Timeout {
  constructor() {
    __publicField(this, "currentId", null);
    __publicField(this, "clear", () => {
      if (this.currentId !== null) {
        clearTimeout(this.currentId);
        this.currentId = null;
      }
    });
    __publicField(this, "disposeEffect", () => {
      return this.clear;
    });
  }
  static create() {
    return new _Timeout();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }
};
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js
function isFocusVisible(element) {
  try {
    return element.matches(":focus-visible");
  } catch (error) {
    if (!/jsdom/.test(window.navigator.userAgent)) {
      console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join("\n"));
    }
  }
  return false;
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js
function getScrollbarSize(doc) {
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/usePreviousProps/usePreviousProps.js
var React12 = __toESM(require_react());
var usePreviousProps = (value) => {
  const ref = React12.useRef({});
  React12.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
var usePreviousProps_default = usePreviousProps;

// node_modules/@mui/base/node_modules/@mui/utils/esm/getValidReactChildren/getValidReactChildren.js
var React13 = __toESM(require_react());

// node_modules/@mui/base/node_modules/@mui/utils/esm/visuallyHidden/visuallyHidden.js
var visuallyHidden = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
};
var visuallyHidden_default = visuallyHidden;

// node_modules/@mui/base/node_modules/@mui/utils/esm/integerPropType/integerPropType.js
function getTypeByValue(value) {
  const valueType = typeof value;
  switch (valueType) {
    case "number":
      if (Number.isNaN(value)) {
        return "NaN";
      }
      if (!Number.isFinite(value)) {
        return "Infinity";
      }
      if (value !== Math.floor(value)) {
        return "float";
      }
      return "number";
    case "object":
      if (value === null) {
        return "null";
      }
      return value.constructor.name;
    default:
      return valueType;
  }
}
function requiredInteger(props, propName, componentName, location) {
  const propValue = props[propName];
  if (propValue == null || !Number.isInteger(propValue)) {
    const propType = getTypeByValue(propValue);
    return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
  }
  return null;
}
function validator(props, propName, ...other) {
  const propValue = props[propName];
  if (propValue === void 0) {
    return null;
  }
  return requiredInteger(props, propName, ...other);
}
function validatorNoop() {
  return null;
}
validator.isRequired = requiredInteger;
validatorNoop.isRequired = validatorNoop;
var integerPropType_default = false ? validatorNoop : validator;

// node_modules/@mui/base/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
function composeClasses(slots, getUtilityClass, classes = void 0) {
  const output = {};
  for (const slotName in slots) {
    const slot = slots[slotName];
    let buffer = "";
    for (let i = 0; i < slot.length; i += 1) {
      const value = slot[i];
      if (value) {
        buffer += getUtilityClass(value) + " ";
        if (classes && classes[value]) {
          buffer += classes[value] + " ";
        }
      }
    }
    output[slotName] = buffer;
  }
  return output;
}

// node_modules/@mui/base/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
var defaultGenerator = (componentName) => componentName;
var createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
var ClassNameGenerator = createClassNameGenerator();

// node_modules/@mui/base/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var globalStateClasses = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};

// node_modules/@mui/base/node_modules/@mui/utils/esm/clamp/clamp.js
function clamp(val, min2 = Number.MIN_SAFE_INTEGER, max2 = Number.MAX_SAFE_INTEGER) {
  return Math.max(min2, Math.min(val, max2));
}
var clamp_default = clamp;

// node_modules/@mui/base/node_modules/@mui/utils/esm/getReactNodeRef/getReactNodeRef.js
var React14 = __toESM(require_react());
function getReactNodeRef(element) {
  if (!element || !React14.isValidElement(element)) {
    return null;
  }
  return element.props.propertyIsEnumerable("ref") ? element.props.ref : (
    // @ts-expect-error element.ref is not included in the ReactElement type
    // We cannot check for it, but isValidElement is true at this point
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    element.ref
  );
}

// node_modules/@mui/base/useBadge/useBadge.js
function useBadge(parameters) {
  const {
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false
  } = parameters;
  const prevProps = usePreviousProps_default({
    badgeContent: badgeContentProp,
    max: maxProp
  });
  let invisible = invisibleProp;
  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }
  const {
    badgeContent,
    max: max2 = maxProp
  } = invisible ? prevProps : parameters;
  const displayValue = badgeContent && Number(badgeContent) > max2 ? `${max2}+` : badgeContent;
  return {
    badgeContent,
    invisible,
    max: max2,
    displayValue
  };
}

// node_modules/@mui/base/generateUtilityClass/index.js
var GLOBAL_CLASS_PREFIX = "base";
function buildStateClass(state) {
  return `${GLOBAL_CLASS_PREFIX}--${state}`;
}
function buildSlotClass(componentName, slot) {
  return `${GLOBAL_CLASS_PREFIX}-${componentName}-${slot}`;
}
function generateUtilityClass3(componentName, slot) {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? buildStateClass(globalStateClass) : buildSlotClass(componentName, slot);
}

// node_modules/@mui/base/generateUtilityClasses/index.js
function generateUtilityClasses3(componentName, slots) {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass3(componentName, slot);
  });
  return result;
}

// node_modules/@mui/base/Badge/badgeClasses.js
var COMPONENT_NAME = "Badge";
function getBadgeUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME, slot);
}
var badgeClasses = generateUtilityClasses3(COMPONENT_NAME, ["root", "badge", "invisible"]);

// node_modules/@mui/base/Badge/Badge.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var useUtilityClasses = (ownerState) => {
  const {
    invisible
  } = ownerState;
  const slots = {
    root: ["root"],
    badge: ["badge", invisible && "invisible"]
  };
  return composeClasses(slots, useClassNamesOverride(getBadgeUtilityClass));
};
var Badge = React15.forwardRef(function Badge2(props, forwardedRef) {
  const {
    badgeContent: badgeContentProp,
    children,
    invisible: invisibleProp,
    max: maxProp = 99,
    slotProps = {},
    slots = {},
    showZero = false,
    ...other
  } = props;
  const {
    badgeContent,
    max: max2,
    displayValue,
    invisible
  } = useBadge({
    ...props,
    max: maxProp
  });
  const ownerState = {
    ...props,
    badgeContent,
    invisible,
    max: max2,
    showZero
  };
  const classes = useUtilityClasses(ownerState);
  const Root = slots.root ?? "span";
  const rootProps = useSlotProps_default({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const BadgeComponent = slots.badge ?? "span";
  const badgeProps = useSlotProps_default({
    elementType: BadgeComponent,
    externalSlotProps: slotProps.badge,
    ownerState,
    className: classes.badge
  });
  return (0, import_jsx_runtime2.jsxs)(Root, {
    ...rootProps,
    children: [children, (0, import_jsx_runtime2.jsx)(BadgeComponent, {
      ...badgeProps,
      children: displayValue
    })]
  });
});
true ? Badge.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content rendered within the badge.
   */
  badgeContent: import_prop_types4.default.node,
  /**
   * The badge will be added relative to this node.
   */
  children: import_prop_types4.default.node,
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: import_prop_types4.default.bool,
  /**
   * Max count to show.
   * @default 99
   */
  max: import_prop_types4.default.number,
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: import_prop_types4.default.bool,
  /**
   * The props used for each slot inside the Badge.
   * @default {}
   */
  slotProps: import_prop_types4.default.shape({
    badge: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object]),
    root: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object])
  }),
  /**
   * The components used for each slot inside the Badge.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types4.default.shape({
    badge: import_prop_types4.default.elementType,
    root: import_prop_types4.default.elementType
  })
} : void 0;

// node_modules/@mui/base/Button/Button.js
var React17 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());

// node_modules/@mui/base/Button/buttonClasses.js
var COMPONENT_NAME2 = "Button";
function getButtonUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME2, slot);
}
var buttonClasses = generateUtilityClasses3(COMPONENT_NAME2, ["root", "active", "disabled", "focusVisible"]);

// node_modules/@mui/base/useButton/useButton.js
var React16 = __toESM(require_react());
function useButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    href,
    rootRef: externalRef,
    tabIndex,
    to,
    type,
    rootElementName: rootElementNameProp
  } = parameters;
  const buttonRef = React16.useRef(null);
  const [active, setActive] = React16.useState(false);
  const [focusVisible, setFocusVisible] = React16.useState(false);
  if (disabled && !focusableWhenDisabled && focusVisible) {
    setFocusVisible(false);
  }
  const [rootElementName, updateRootElementName] = useRootElementName({
    rootElementName: rootElementNameProp ?? (href || to ? "a" : void 0),
    componentName: "Button"
  });
  const createHandleMouseLeave = (otherHandlers) => (event) => {
    var _a;
    if (focusVisible) {
      event.preventDefault();
    }
    (_a = otherHandlers.onMouseLeave) == null ? void 0 : _a.call(otherHandlers, event);
  };
  const createHandleBlur = (otherHandlers) => (event) => {
    var _a;
    if (!isFocusVisible(event.target)) {
      setFocusVisible(false);
    }
    (_a = otherHandlers.onBlur) == null ? void 0 : _a.call(otherHandlers, event);
  };
  const createHandleFocus = (otherHandlers) => (event) => {
    var _a, _b;
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    if (isFocusVisible(event.target)) {
      setFocusVisible(true);
      (_a = otherHandlers.onFocusVisible) == null ? void 0 : _a.call(otherHandlers, event);
    }
    (_b = otherHandlers.onFocus) == null ? void 0 : _b.call(otherHandlers, event);
  };
  const isNativeButton = () => {
    const button = buttonRef.current;
    return rootElementName === "BUTTON" || rootElementName === "INPUT" && ["button", "submit", "reset"].includes(button == null ? void 0 : button.type) || rootElementName === "A" && (button == null ? void 0 : button.href);
  };
  const createHandleClick = (otherHandlers) => (event) => {
    var _a;
    if (!disabled) {
      (_a = otherHandlers.onClick) == null ? void 0 : _a.call(otherHandlers, event);
    }
  };
  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _a;
    if (!disabled) {
      setActive(true);
      document.addEventListener("mouseup", () => {
        setActive(false);
      }, {
        once: true
      });
    }
    (_a = otherHandlers.onMouseDown) == null ? void 0 : _a.call(otherHandlers, event);
  };
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _a, _b;
    (_a = otherHandlers.onKeyDown) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.target === event.currentTarget && !isNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (event.target === event.currentTarget && event.key === " " && !disabled) {
      setActive(true);
    }
    if (event.target === event.currentTarget && !isNativeButton() && event.key === "Enter" && !disabled) {
      (_b = otherHandlers.onClick) == null ? void 0 : _b.call(otherHandlers, event);
      event.preventDefault();
    }
  };
  const createHandleKeyUp = (otherHandlers) => (event) => {
    var _a, _b;
    if (event.target === event.currentTarget) {
      setActive(false);
    }
    (_a = otherHandlers.onKeyUp) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.target === event.currentTarget && !isNativeButton() && !disabled && event.key === " " && !event.defaultMuiPrevented) {
      (_b = otherHandlers.onClick) == null ? void 0 : _b.call(otherHandlers, event);
    }
  };
  const handleRef = useForkRef(updateRootElementName, externalRef, buttonRef);
  const buttonProps = {};
  if (tabIndex !== void 0) {
    buttonProps.tabIndex = tabIndex;
  }
  if (rootElementName === "BUTTON") {
    buttonProps.type = type ?? "button";
    if (focusableWhenDisabled) {
      buttonProps["aria-disabled"] = disabled;
    } else {
      buttonProps.disabled = disabled;
    }
  } else if (rootElementName === "INPUT") {
    if (type && ["button", "submit", "reset"].includes(type)) {
      if (focusableWhenDisabled) {
        buttonProps["aria-disabled"] = disabled;
      } else {
        buttonProps.disabled = disabled;
      }
    }
  } else if (rootElementName !== "") {
    if (!href && !to) {
      buttonProps.role = "button";
      buttonProps.tabIndex = tabIndex ?? 0;
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
      buttonProps.tabIndex = focusableWhenDisabled ? tabIndex ?? 0 : -1;
    }
  }
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = {
      ...extractEventHandlers_default(parameters),
      ...extractEventHandlers_default(externalProps)
    };
    const props = {
      type,
      ...externalEventHandlers,
      ...buttonProps,
      ...externalProps,
      onBlur: createHandleBlur(externalEventHandlers),
      onClick: createHandleClick(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      onKeyUp: createHandleKeyUp(externalEventHandlers),
      onMouseDown: createHandleMouseDown(externalEventHandlers),
      onMouseLeave: createHandleMouseLeave(externalEventHandlers),
      ref: handleRef
    };
    delete props.onFocusVisible;
    return props;
  };
  return {
    getRootProps,
    focusVisible,
    setFocusVisible,
    active,
    rootRef: handleRef
  };
}

// node_modules/@mui/base/Button/Button.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var useUtilityClasses2 = (ownerState) => {
  const {
    active,
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", active && "active"]
  };
  return composeClasses(slots, useClassNamesOverride(getButtonUtilityClass));
};
var Button = React17.forwardRef(function Button2(props, forwardedRef) {
  const {
    action,
    children,
    disabled,
    focusableWhenDisabled = false,
    onFocusVisible,
    slotProps = {},
    slots = {},
    rootElementName: rootElementNameProp = "button",
    ...other
  } = props;
  const buttonRef = React17.useRef(null);
  let rootElementName = rootElementNameProp;
  if (typeof slots.root === "string") {
    rootElementName = slots.root;
  } else if (other.href || other.to) {
    rootElementName = "a";
  }
  const {
    active,
    focusVisible,
    setFocusVisible,
    getRootProps
  } = useButton({
    ...props,
    focusableWhenDisabled,
    rootElementName
  });
  React17.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = {
    ...props,
    active,
    focusableWhenDisabled,
    focusVisible
  };
  const classes = useUtilityClasses2(ownerState);
  const defaultElement = other.href || other.to ? "a" : "button";
  const Root = slots.root ?? defaultElement;
  const rootProps = useSlotProps_default({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime3.jsx)(Root, {
    ...rootProps,
    children
  });
});
true ? Button.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.shape({
    current: import_prop_types5.default.shape({
      focusVisible: import_prop_types5.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  children: import_prop_types5.default.node,
  /**
   * @ignore
   */
  className: import_prop_types5.default.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types5.default.bool,
  /**
   * If `true`, allows a disabled button to receive focus.
   * @default false
   */
  focusableWhenDisabled: import_prop_types5.default.bool,
  /**
   * @ignore
   */
  href: import_prop_types5.default.string,
  /**
   * @ignore
   */
  onFocusVisible: import_prop_types5.default.func,
  /**
   * The HTML element that is ultimately rendered, for example 'button' or 'a'
   * @default 'button'
   */
  rootElementName: import_prop_types5.default.string,
  /**
   * The props used for each slot inside the Button.
   * @default {}
   */
  slotProps: import_prop_types5.default.shape({
    root: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object])
  }),
  /**
   * The components used for each slot inside the Button.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types5.default.shape({
    root: import_prop_types5.default.elementType
  }),
  /**
   * @ignore
   */
  to: import_prop_types5.default.string
} : void 0;

// node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js
var React18 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = "onClick",
    onClickAway,
    touchEvent = "onTouchEnd"
  } = props;
  const movedRef = React18.useRef(false);
  const nodeRef = React18.useRef(null);
  const activatedRef = React18.useRef(false);
  const syntheticEventRef = React18.useRef(false);
  React18.useEffect(() => {
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = useForkRef(getReactNodeRef(children), nodeRef);
  const handleClickAway = useEventCallback_default((event) => {
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!activatedRef.current || !nodeRef.current || "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      ) || nodeRef.current.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      );
    }
    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });
  const createHandleSynthetic = (handlerName) => (event) => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const childrenProps = {
    ref: handleRef
  };
  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }
  React18.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [handleClickAway, touchEvent]);
  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }
  React18.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return void 0;
  }, [handleClickAway, mouseEvent]);
  return (0, import_jsx_runtime4.jsx)(React18.Fragment, {
    children: React18.cloneElement(children, childrenProps)
  });
}
true ? ClickAwayListener.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree: import_prop_types6.default.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent: import_prop_types6.default.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", false]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: import_prop_types6.default.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent: import_prop_types6.default.oneOf(["onTouchEnd", "onTouchStart", false])
} : void 0;
if (true) {
  ClickAwayListener["propTypes"] = exactProp(ClickAwayListener.propTypes);
}

// node_modules/@mui/base/Dropdown/Dropdown.js
var React22 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());

// node_modules/@mui/base/useDropdown/DropdownContext.js
var React19 = __toESM(require_react());
var DropdownContext = React19.createContext(null);
if (true) {
  DropdownContext.displayName = "DropdownContext";
}

// node_modules/@mui/base/useDropdown/useDropdown.js
var React21 = __toESM(require_react());

// node_modules/@mui/base/utils/useControllableReducer.js
var React20 = __toESM(require_react());
function areEqual(a, b) {
  return a === b;
}
var EMPTY_OBJECT = {};
var NOOP = () => {
};
function getControlledState(internalState, controlledProps) {
  const augmentedState = {
    ...internalState
  };
  Object.keys(controlledProps).forEach((key) => {
    if (controlledProps[key] !== void 0) {
      augmentedState[key] = controlledProps[key];
    }
  });
  return augmentedState;
}
function useStateChangeDetection(parameters) {
  const {
    nextState,
    initialState,
    stateComparers,
    onStateChange,
    controlledProps,
    lastActionRef
  } = parameters;
  const internalPreviousStateRef = React20.useRef(initialState);
  React20.useEffect(() => {
    if (lastActionRef.current === null) {
      return;
    }
    const previousState = getControlledState(internalPreviousStateRef.current, controlledProps);
    Object.keys(nextState).forEach((key) => {
      const stateComparer = stateComparers[key] ?? areEqual;
      const nextStateItem = nextState[key];
      const previousStateItem = previousState[key];
      if (previousStateItem == null && nextStateItem != null || previousStateItem != null && nextStateItem == null || previousStateItem != null && nextStateItem != null && !stateComparer(nextStateItem, previousStateItem)) {
        onStateChange == null ? void 0 : onStateChange(lastActionRef.current.event ?? null, key, nextStateItem, lastActionRef.current.type ?? "", nextState);
      }
    });
    internalPreviousStateRef.current = nextState;
    lastActionRef.current = null;
  }, [internalPreviousStateRef, nextState, lastActionRef, onStateChange, stateComparers, controlledProps]);
}
function useControllableReducer(parameters) {
  const lastActionRef = React20.useRef(null);
  const {
    reducer,
    initialState,
    controlledProps = EMPTY_OBJECT,
    stateComparers = EMPTY_OBJECT,
    onStateChange = NOOP,
    actionContext,
    componentName = ""
  } = parameters;
  const controlledPropsRef = React20.useRef(controlledProps);
  if (true) {
    React20.useEffect(() => {
      Object.keys(controlledProps).forEach((key) => {
        if (controlledPropsRef.current[key] !== void 0 && controlledProps[key] === void 0) {
          console.error(`useControllableReducer: ${componentName ? `The ${componentName} component` : "A component"} is changing a controlled prop to be uncontrolled: ${key}`);
        }
        if (controlledPropsRef.current[key] === void 0 && controlledProps[key] !== void 0) {
          console.error(`useControllableReducer: ${componentName ? `The ${componentName} component` : "A component"} is changing an uncontrolled prop to be controlled: ${key}`);
        }
      });
    }, [controlledProps, componentName]);
  }
  const reducerWithControlledState = React20.useCallback((state, action) => {
    lastActionRef.current = action;
    const controlledState = getControlledState(state, controlledProps);
    const newState = reducer(controlledState, action);
    return newState;
  }, [controlledProps, reducer]);
  const [nextState, dispatch] = React20.useReducer(reducerWithControlledState, initialState);
  const dispatchWithContext = React20.useCallback((action) => {
    dispatch({
      ...action,
      context: actionContext
    });
  }, [actionContext]);
  useStateChangeDetection({
    nextState,
    initialState,
    stateComparers: stateComparers ?? EMPTY_OBJECT,
    onStateChange: onStateChange ?? NOOP,
    controlledProps,
    lastActionRef
  });
  return [getControlledState(nextState, controlledProps), dispatchWithContext];
}

// node_modules/@mui/base/useDropdown/useDropdown.types.js
var DropdownActionTypes = {
  blur: "dropdown:blur",
  escapeKeyDown: "dropdown:escapeKeyDown",
  toggle: "dropdown:toggle",
  open: "dropdown:open",
  close: "dropdown:close"
};

// node_modules/@mui/base/useDropdown/dropdownReducer.js
function dropdownReducer(state, action) {
  switch (action.type) {
    case DropdownActionTypes.blur:
      return {
        open: false,
        changeReason: action.event
      };
    case DropdownActionTypes.escapeKeyDown:
      return {
        open: false,
        changeReason: action.event
      };
    case DropdownActionTypes.toggle:
      return {
        open: !state.open,
        changeReason: action.event
      };
    case DropdownActionTypes.open:
      return {
        open: true,
        changeReason: action.event
      };
    case DropdownActionTypes.close:
      return {
        open: false,
        changeReason: action.event
      };
    default:
      throw new Error(`Unhandled action`);
  }
}

// node_modules/@mui/base/useDropdown/useDropdown.js
function useDropdown(parameters = {}) {
  const {
    defaultOpen,
    onOpenChange,
    open: openProp,
    componentName = "useDropdown"
  } = parameters;
  const [popupId, setPopupId] = React21.useState("");
  const [triggerElement, setTriggerElement] = React21.useState(null);
  const lastActionType = React21.useRef(null);
  const handleStateChange = React21.useCallback((event, field, value, reason) => {
    if (field === "open") {
      onOpenChange == null ? void 0 : onOpenChange(event, value);
    }
    lastActionType.current = reason;
  }, [onOpenChange]);
  const controlledProps = React21.useMemo(() => openProp !== void 0 ? {
    open: openProp
  } : {}, [openProp]);
  const [state, dispatch] = useControllableReducer({
    controlledProps,
    initialState: defaultOpen ? {
      open: true,
      changeReason: null
    } : {
      open: false,
      changeReason: null
    },
    onStateChange: handleStateChange,
    reducer: dropdownReducer,
    componentName
  });
  React21.useEffect(() => {
    if (!state.open && lastActionType.current !== null && lastActionType.current !== DropdownActionTypes.blur) {
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }, [state.open, triggerElement]);
  const contextValue = {
    state,
    dispatch,
    popupId,
    registerPopup: setPopupId,
    registerTrigger: setTriggerElement,
    triggerElement
  };
  return {
    contextValue,
    open: state.open
  };
}

// node_modules/@mui/base/Dropdown/Dropdown.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
function Dropdown(props) {
  const {
    children,
    open,
    defaultOpen,
    onOpenChange
  } = props;
  const {
    contextValue
  } = useDropdown({
    defaultOpen,
    onOpenChange,
    open
  });
  return (0, import_jsx_runtime5.jsx)(DropdownContext.Provider, {
    value: contextValue,
    children
  });
}
true ? Dropdown.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types7.default.node,
  /**
   * If `true`, the dropdown is initially open.
   */
  defaultOpen: import_prop_types7.default.bool,
  /**
   * Callback fired when the component requests to be opened or closed.
   */
  onOpenChange: import_prop_types7.default.func,
  /**
   * Allows to control whether the dropdown is open.
   * This is a controlled counterpart of `defaultOpen`.
   */
  open: import_prop_types7.default.bool
} : void 0;
if (true) {
  Dropdown["propTypes"] = exactProp(Dropdown.propTypes);
}

// node_modules/@mui/base/FocusTrap/FocusTrap.js
var React23 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute("tabindex") || "", 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (node.contentEditable === "true" || (node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== "INPUT" || node.type !== "radio") {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = (selector) => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === "INPUT" && node.type === "hidden" || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map((a) => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = React23.useRef(false);
  const sentinelStart = React23.useRef(null);
  const sentinelEnd = React23.useRef(null);
  const nodeToRestore = React23.useRef(null);
  const reactFocusEventTarget = React23.useRef(null);
  const activated = React23.useRef(false);
  const rootRef = React23.useRef(null);
  const handleRef = useForkRef(getReactNodeRef(children), rootRef);
  const lastKeydown = React23.useRef(null);
  React23.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  React23.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        if (true) {
          console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join("\n"));
        }
        rootRef.current.setAttribute("tabIndex", "-1");
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [open]);
  React23.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    const loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
        return;
      }
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    const contain = () => {
      var _a, _b;
      const rootElement = rootRef.current;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (rootElement.contains(doc.activeElement)) {
        return;
      }
      if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
        return;
      }
      if (doc.activeElement !== reactFocusEventTarget.current) {
        reactFocusEventTarget.current = null;
      } else if (reactFocusEventTarget.current !== null) {
        return;
      }
      if (!activated.current) {
        return;
      }
      let tabbable = [];
      if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
        tabbable = getTabbable(rootRef.current);
      }
      if (tabbable.length > 0) {
        const isShiftTab = Boolean(((_a = lastKeydown.current) == null ? void 0 : _a.shiftKey) && ((_b = lastKeydown.current) == null ? void 0 : _b.key) === "Tab");
        const focusNext = tabbable[0];
        const focusPrevious = tabbable[tabbable.length - 1];
        if (typeof focusNext !== "string" && typeof focusPrevious !== "string") {
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        }
      } else {
        rootElement.focus();
      }
    };
    doc.addEventListener("focusin", contain);
    doc.addEventListener("keydown", loopFocus, true);
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === "BODY") {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener("focusin", contain);
      doc.removeEventListener("keydown", loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return (0, import_jsx_runtime6.jsxs)(React23.Fragment, {
    children: [(0, import_jsx_runtime6.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), React23.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), (0, import_jsx_runtime6.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
true ? FocusTrap.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types8.default.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types8.default.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types8.default.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: import_prop_types8.default.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: import_prop_types8.default.func,
  /**
   * If `true`, focus is locked.
   */
  open: import_prop_types8.default.bool.isRequired
} : void 0;
if (true) {
  FocusTrap["propTypes"] = exactProp(FocusTrap.propTypes);
}

// node_modules/@mui/base/FormControl/FormControl.js
var React25 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());

// node_modules/@mui/base/FormControl/FormControlContext.js
var React24 = __toESM(require_react());
var FormControlContext = React24.createContext(void 0);
if (true) {
  FormControlContext.displayName = "FormControlContext";
}

// node_modules/@mui/base/FormControl/formControlClasses.js
var COMPONENT_NAME3 = "FormControl";
function getFormControlUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME3, slot);
}
var formControlClasses = generateUtilityClasses3(COMPONENT_NAME3, ["root", "disabled", "error", "filled", "focused", "required"]);

// node_modules/@mui/base/FormControl/FormControl.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0) && value !== "";
}
function useUtilityClasses3(ownerState) {
  const {
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focused && "focused", error && "error", filled && "filled", required && "required"]
  };
  return composeClasses(slots, useClassNamesOverride(getFormControlUtilityClass));
}
var FormControl = React25.forwardRef(function FormControl2(props, forwardedRef) {
  const {
    defaultValue,
    children,
    disabled = false,
    error = false,
    onChange,
    required = false,
    slotProps = {},
    slots = {},
    value: incomingValue,
    ...other
  } = props;
  const [value, setValue] = useControlled({
    controlled: incomingValue,
    default: defaultValue,
    name: "FormControl",
    state: "value"
  });
  const filled = hasValue(value);
  const [focusedState, setFocused] = React25.useState(false);
  const focused = focusedState && !disabled;
  React25.useEffect(() => setFocused((isFocused) => disabled ? false : isFocused), [disabled]);
  const ownerState = {
    ...props,
    disabled,
    error,
    filled,
    focused,
    required
  };
  const childContext = React25.useMemo(() => {
    return {
      disabled,
      error,
      filled,
      focused,
      onBlur: () => {
        setFocused(false);
      },
      onChange: (event) => {
        setValue(event.target.value);
        onChange == null ? void 0 : onChange(event);
      },
      onFocus: () => {
        setFocused(true);
      },
      required,
      value: value ?? ""
    };
  }, [disabled, error, filled, focused, onChange, required, setValue, value]);
  const classes = useUtilityClasses3(ownerState);
  const renderChildren = () => {
    if (typeof children === "function") {
      return children(childContext);
    }
    return children;
  };
  const Root = slots.root ?? "div";
  const rootProps = useSlotProps_default({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef,
      children: renderChildren()
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime7.jsx)(FormControlContext.Provider, {
    value: childContext,
    children: (0, import_jsx_runtime7.jsx)(Root, {
      ...rootProps
    })
  });
});
true ? FormControl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types9.default.oneOfType([import_prop_types9.default.node, import_prop_types9.default.func]),
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types9.default.string,
  /**
   * @ignore
   */
  defaultValue: import_prop_types9.default.any,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: import_prop_types9.default.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: import_prop_types9.default.bool,
  /**
   * Callback fired when the form element's value is modified.
   */
  onChange: import_prop_types9.default.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: import_prop_types9.default.bool,
  /**
   * The props used for each slot inside the FormControl.
   * @default {}
   */
  slotProps: import_prop_types9.default.shape({
    root: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object])
  }),
  /**
   * The components used for each slot inside the FormControl.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types9.default.shape({
    root: import_prop_types9.default.elementType
  }),
  /**
   * The value of the form element.
   */
  value: import_prop_types9.default.any
} : void 0;

// node_modules/@mui/base/FormControl/useFormControlContext.js
var React26 = __toESM(require_react());
function useFormControlContext() {
  return React26.useContext(FormControlContext);
}

// node_modules/@mui/base/Input/Input.js
var React28 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());

// node_modules/@mui/base/Input/inputClasses.js
var COMPONENT_NAME4 = "Input";
function getInputUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME4, slot);
}
var inputClasses = generateUtilityClasses3(COMPONENT_NAME4, ["root", "formControl", "focused", "disabled", "error", "multiline", "input", "inputMultiline", "inputTypeSearch", "adornedStart", "adornedEnd"]);

// node_modules/@mui/base/useInput/useInput.js
var React27 = __toESM(require_react());
function useInput(parameters = {}) {
  const {
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onChange,
    onFocus,
    required: requiredProp = false,
    value: valueProp,
    inputRef: inputRefProp
  } = parameters;
  const formControlContext = useFormControlContext();
  let defaultValue;
  let disabled;
  let error;
  let required;
  let value;
  if (formControlContext) {
    defaultValue = void 0;
    disabled = formControlContext.disabled ?? false;
    error = formControlContext.error ?? false;
    required = formControlContext.required ?? false;
    value = formControlContext.value;
    if (true) {
      const definedLocalProps = ["defaultValue", "disabled", "error", "required", "value"].filter((prop) => parameters[prop] !== void 0);
      if (definedLocalProps.length > 0) {
        console.warn(["MUI: You have set props on an input that is inside a FormControl.", "Set these props on a FormControl instead. Otherwise they will be ignored.", `Ignored props: ${definedLocalProps.join(", ")}`].join("\n"));
      }
    }
  } else {
    defaultValue = defaultValueProp;
    disabled = disabledProp;
    error = errorProp;
    required = requiredProp;
    value = valueProp;
  }
  const {
    current: isControlled
  } = React27.useRef(value != null);
  const handleInputRefWarning = React27.useCallback((instance) => {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["MUI: You have provided a `slots.input` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  const inputRef = React27.useRef(null);
  const handleInputRef = useForkRef(inputRef, inputRefProp, handleInputRefWarning);
  const [focused, setFocused] = React27.useState(false);
  React27.useEffect(() => {
    if (!formControlContext && disabled && focused) {
      setFocused(false);
      onBlur == null ? void 0 : onBlur();
    }
  }, [formControlContext, disabled, focused, onBlur]);
  const handleFocus = (otherHandlers) => (event) => {
    var _a, _b;
    if (formControlContext == null ? void 0 : formControlContext.disabled) {
      event.stopPropagation();
      return;
    }
    (_a = otherHandlers.onFocus) == null ? void 0 : _a.call(otherHandlers, event);
    if (formControlContext && formControlContext.onFocus) {
      (_b = formControlContext == null ? void 0 : formControlContext.onFocus) == null ? void 0 : _b.call(formControlContext);
    } else {
      setFocused(true);
    }
  };
  const handleBlur2 = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onBlur) == null ? void 0 : _a.call(otherHandlers, event);
    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    } else {
      setFocused(false);
    }
  };
  const handleChange = (otherHandlers) => (event, ...args) => {
    var _a, _b;
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(true ? `MUI: Expected valid input target. Did you use a custom \`slots.input\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : formatMuiErrorMessage(17));
      }
    }
    (_a = formControlContext == null ? void 0 : formControlContext.onChange) == null ? void 0 : _a.call(formControlContext, event);
    (_b = otherHandlers.onChange) == null ? void 0 : _b.call(otherHandlers, event, ...args);
  };
  const handleClick = (otherHandlers) => (event) => {
    var _a;
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    (_a = otherHandlers.onClick) == null ? void 0 : _a.call(otherHandlers, event);
  };
  const getRootProps = (externalProps = {}) => {
    const propsEventHandlers = extractEventHandlers_default(parameters, ["onBlur", "onChange", "onFocus"]);
    const externalEventHandlers = {
      ...propsEventHandlers,
      ...extractEventHandlers_default(externalProps)
    };
    return {
      ...externalProps,
      ...externalEventHandlers,
      onClick: handleClick(externalEventHandlers)
    };
  };
  const getInputProps = (externalProps = {}) => {
    const propsEventHandlers = {
      onBlur,
      onChange,
      onFocus
    };
    const externalEventHandlers = {
      ...propsEventHandlers,
      ...extractEventHandlers_default(externalProps)
    };
    const mergedEventHandlers = {
      ...externalEventHandlers,
      onBlur: handleBlur2(externalEventHandlers),
      onChange: handleChange(externalEventHandlers),
      onFocus: handleFocus(externalEventHandlers)
    };
    return {
      ...mergedEventHandlers,
      "aria-invalid": error || void 0,
      defaultValue,
      value,
      required,
      disabled,
      ...externalProps,
      ref: handleInputRef,
      ...mergedEventHandlers
    };
  };
  return {
    disabled,
    error,
    focused,
    formControlContext,
    getInputProps,
    getRootProps,
    inputRef: handleInputRef,
    required,
    value
  };
}

// node_modules/@mui/base/Input/Input.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var useUtilityClasses4 = (ownerState) => {
  const {
    disabled,
    error,
    focused,
    formControlContext,
    multiline,
    startAdornment,
    endAdornment
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", focused && "focused", Boolean(formControlContext) && "formControl", multiline && "multiline", Boolean(startAdornment) && "adornedStart", Boolean(endAdornment) && "adornedEnd"],
    input: ["input", disabled && "disabled", multiline && "multiline"]
  };
  return composeClasses(slots, useClassNamesOverride(getInputUtilityClass));
};
var Input = React28.forwardRef(function Input2(props, forwardedRef) {
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    className,
    defaultValue,
    disabled,
    endAdornment,
    error,
    id,
    multiline = false,
    name,
    onClick,
    onChange,
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    placeholder,
    readOnly,
    required,
    startAdornment,
    value,
    type: typeProp,
    rows,
    slotProps = {},
    slots = {},
    minRows,
    maxRows,
    ...other
  } = props;
  const {
    getRootProps,
    getInputProps,
    focused,
    formControlContext,
    error: errorState,
    disabled: disabledState
  } = useInput({
    disabled,
    defaultValue,
    error,
    onBlur,
    onClick,
    onChange,
    onFocus,
    required,
    value
  });
  const type = !multiline ? typeProp ?? "text" : void 0;
  const ownerState = {
    ...props,
    disabled: disabledState,
    error: errorState,
    focused,
    formControlContext,
    multiline,
    type
  };
  const classes = useUtilityClasses4(ownerState);
  const propsToForward = {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    id,
    onKeyDown,
    onKeyUp,
    name,
    placeholder,
    readOnly,
    type
  };
  const Root = slots.root ?? "div";
  const rootProps = useSlotProps_default({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: [classes.root, className]
  });
  const InputComponent = multiline ? slots.textarea ?? "textarea" : slots.input ?? "input";
  const inputProps = useSlotProps_default({
    elementType: InputComponent,
    getSlotProps: (otherHandlers) => {
      return getInputProps({
        ...propsToForward,
        ...otherHandlers
      });
    },
    externalSlotProps: slotProps.input,
    additionalProps: {
      rows: multiline ? rows : void 0,
      ...multiline && !isHostComponent2(InputComponent) && {
        minRows: rows || minRows,
        maxRows: rows || maxRows
      }
    },
    ownerState,
    className: classes.input
  });
  if (true) {
    if (multiline) {
      if (rows) {
        if (minRows || maxRows) {
          console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set.");
        }
      }
    }
  }
  return (0, import_jsx_runtime8.jsxs)(Root, {
    ...rootProps,
    children: [startAdornment, (0, import_jsx_runtime8.jsx)(InputComponent, {
      ...inputProps
    }), endAdornment]
  });
});
true ? Input.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": import_prop_types10.default.string,
  /**
   * @ignore
   */
  "aria-label": import_prop_types10.default.string,
  /**
   * @ignore
   */
  "aria-labelledby": import_prop_types10.default.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types10.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types10.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types10.default.string,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types10.default.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types10.default.bool,
  /**
   * Trailing adornment for this input.
   */
  endAdornment: import_prop_types10.default.node,
  /**
   * If `true`, the `input` will indicate an error by setting the `aria-invalid` attribute on the input and the `baseui--error` class on the root element.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: import_prop_types10.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types10.default.string,
  /**
   * @ignore
   */
  inputRef: import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.shape({
    current: import_prop_types10.default.object
  })]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: import_prop_types10.default.number,
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: import_prop_types10.default.number,
  /**
   * If `true`, a `textarea` element is rendered.
   * @default false
   */
  multiline: import_prop_types10.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types10.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types10.default.func,
  /**
   * @ignore
   */
  onChange: import_prop_types10.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types10.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types10.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types10.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types10.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types10.default.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: import_prop_types10.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types10.default.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: import_prop_types10.default.number,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: import_prop_types10.default.shape({
    input: import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object]),
    root: import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object])
  }),
  /**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types10.default.shape({
    input: import_prop_types10.default.elementType,
    root: import_prop_types10.default.elementType,
    textarea: import_prop_types10.default.elementType
  }),
  /**
   * Leading adornment for this input.
   */
  startAdornment: import_prop_types10.default.node,
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: import_prop_types10.default.oneOf(["button", "checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"]),
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: import_prop_types10.default.any
} : void 0;

// node_modules/@mui/base/Menu/Menu.js
var React44 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());

// node_modules/@mui/base/Menu/menuClasses.js
var COMPONENT_NAME5 = "Menu";
function getMenuUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME5, slot);
}
var menuClasses = generateUtilityClasses3(COMPONENT_NAME5, ["root", "listbox", "expanded"]);

// node_modules/@mui/base/useMenu/useMenu.js
var React35 = __toESM(require_react());

// node_modules/@mui/base/useList/useList.js
var React30 = __toESM(require_react());

// node_modules/@mui/base/useList/listActions.types.js
var ListActionTypes = {
  blur: "list:blur",
  focus: "list:focus",
  itemClick: "list:itemClick",
  itemHover: "list:itemHover",
  itemsChange: "list:itemsChange",
  keyDown: "list:keyDown",
  resetHighlight: "list:resetHighlight",
  highlightLast: "list:highlightLast",
  textNavigation: "list:textNavigation",
  clearSelection: "list:clearSelection"
};

// node_modules/@mui/base/useList/listReducer.js
function findValidItemToHighlight(currentIndex, lookupDirection, items, includeDisabledItems, isItemDisabled, wrapAround) {
  if (items.length === 0 || !includeDisabledItems && items.every((item, itemIndex) => isItemDisabled(item, itemIndex))) {
    return -1;
  }
  let nextFocus = currentIndex;
  for (; ; ) {
    if (!wrapAround && lookupDirection === "next" && nextFocus === items.length || !wrapAround && lookupDirection === "previous" && nextFocus === -1) {
      return -1;
    }
    const nextFocusDisabled = includeDisabledItems ? false : isItemDisabled(items[nextFocus], nextFocus);
    if (nextFocusDisabled) {
      nextFocus += lookupDirection === "next" ? 1 : -1;
      if (wrapAround) {
        nextFocus = (nextFocus + items.length) % items.length;
      }
    } else {
      return nextFocus;
    }
  }
}
function moveHighlight(previouslyHighlightedValue, offset4, context) {
  const {
    items,
    isItemDisabled,
    disableListWrap,
    disabledItemsFocusable,
    itemComparer,
    focusManagement
  } = context;
  const defaultHighlightedIndex = focusManagement === "DOM" ? 0 : -1;
  const maxIndex = items.length - 1;
  const previouslyHighlightedIndex = previouslyHighlightedValue == null ? -1 : items.findIndex((item) => itemComparer(item, previouslyHighlightedValue));
  let nextIndexCandidate;
  let lookupDirection;
  let wrapAround = !disableListWrap;
  switch (offset4) {
    case "reset":
      if (defaultHighlightedIndex === -1) {
        return null;
      }
      nextIndexCandidate = 0;
      lookupDirection = "next";
      wrapAround = false;
      break;
    case "start":
      nextIndexCandidate = 0;
      lookupDirection = "next";
      wrapAround = false;
      break;
    case "end":
      nextIndexCandidate = maxIndex;
      lookupDirection = "previous";
      wrapAround = false;
      break;
    default: {
      const newIndex = previouslyHighlightedIndex + offset4;
      if (newIndex < 0) {
        if (!wrapAround && previouslyHighlightedIndex !== -1 || Math.abs(offset4) > 1) {
          nextIndexCandidate = 0;
          lookupDirection = "next";
        } else {
          nextIndexCandidate = maxIndex;
          lookupDirection = "previous";
        }
      } else if (newIndex > maxIndex) {
        if (!wrapAround || Math.abs(offset4) > 1) {
          nextIndexCandidate = maxIndex;
          lookupDirection = "previous";
        } else {
          nextIndexCandidate = 0;
          lookupDirection = "next";
        }
      } else {
        nextIndexCandidate = newIndex;
        lookupDirection = offset4 >= 0 ? "next" : "previous";
      }
    }
  }
  const nextIndex = findValidItemToHighlight(nextIndexCandidate, lookupDirection, items, disabledItemsFocusable, isItemDisabled, wrapAround);
  if (nextIndex === -1 && previouslyHighlightedValue !== null && !isItemDisabled(previouslyHighlightedValue, previouslyHighlightedIndex)) {
    return previouslyHighlightedValue;
  }
  return items[nextIndex] ?? null;
}
function toggleSelection(item, selectedValues, selectionMode, itemComparer) {
  if (selectionMode === "none") {
    return [];
  }
  if (selectionMode === "single") {
    if (itemComparer(selectedValues[0], item)) {
      return selectedValues;
    }
    return [item];
  }
  if (selectedValues.some((sv) => itemComparer(sv, item))) {
    return selectedValues.filter((sv) => !itemComparer(sv, item));
  }
  return [...selectedValues, item];
}
function handleItemSelection(item, state, context) {
  const {
    itemComparer,
    isItemDisabled,
    selectionMode,
    items
  } = context;
  const {
    selectedValues
  } = state;
  const itemIndex = items.findIndex((i) => itemComparer(item, i));
  if (isItemDisabled(item, itemIndex)) {
    return state;
  }
  const newSelectedValues = toggleSelection(item, selectedValues, selectionMode, itemComparer);
  return {
    ...state,
    selectedValues: newSelectedValues,
    highlightedValue: item
  };
}
function handleKeyDown(key, state, context) {
  const previouslySelectedValue = state.highlightedValue;
  const {
    orientation,
    pageSize
  } = context;
  switch (key) {
    case "Home":
      return {
        ...state,
        highlightedValue: moveHighlight(previouslySelectedValue, "start", context)
      };
    case "End":
      return {
        ...state,
        highlightedValue: moveHighlight(previouslySelectedValue, "end", context)
      };
    case "PageUp":
      return {
        ...state,
        highlightedValue: moveHighlight(previouslySelectedValue, -pageSize, context)
      };
    case "PageDown":
      return {
        ...state,
        highlightedValue: moveHighlight(previouslySelectedValue, pageSize, context)
      };
    case "ArrowUp":
      if (orientation !== "vertical") {
        break;
      }
      return {
        ...state,
        highlightedValue: moveHighlight(previouslySelectedValue, -1, context)
      };
    case "ArrowDown":
      if (orientation !== "vertical") {
        break;
      }
      return {
        ...state,
        highlightedValue: moveHighlight(previouslySelectedValue, 1, context)
      };
    case "ArrowLeft": {
      if (orientation === "vertical") {
        break;
      }
      const offset4 = orientation === "horizontal-ltr" ? -1 : 1;
      return {
        ...state,
        highlightedValue: moveHighlight(previouslySelectedValue, offset4, context)
      };
    }
    case "ArrowRight": {
      if (orientation === "vertical") {
        break;
      }
      const offset4 = orientation === "horizontal-ltr" ? 1 : -1;
      return {
        ...state,
        highlightedValue: moveHighlight(previouslySelectedValue, offset4, context)
      };
    }
    case "Enter":
    case " ":
      if (state.highlightedValue === null) {
        return state;
      }
      return handleItemSelection(state.highlightedValue, state, context);
    default:
      break;
  }
  return state;
}
function handleBlur(state, context) {
  if (context.focusManagement === "DOM") {
    return state;
  }
  return {
    ...state,
    highlightedValue: null
  };
}
function textCriteriaMatches(nextFocus, searchString, stringifyItem) {
  var _a;
  const text = (_a = stringifyItem(nextFocus)) == null ? void 0 : _a.trim().toLowerCase();
  if (!text || text.length === 0) {
    return false;
  }
  return text.startsWith(searchString);
}
function handleTextNavigation(state, searchString, context) {
  const {
    items,
    isItemDisabled,
    disabledItemsFocusable,
    getItemAsString
  } = context;
  const startWithCurrentItem = searchString.length > 1;
  let nextItem = startWithCurrentItem ? state.highlightedValue : moveHighlight(state.highlightedValue, 1, context);
  for (let index2 = 0; index2 < items.length; index2 += 1) {
    if (!nextItem || !startWithCurrentItem && state.highlightedValue === nextItem) {
      return state;
    }
    if (textCriteriaMatches(nextItem, searchString, getItemAsString) && (!isItemDisabled(nextItem, items.indexOf(nextItem)) || disabledItemsFocusable)) {
      return {
        ...state,
        highlightedValue: nextItem
      };
    }
    nextItem = moveHighlight(nextItem, 1, context);
  }
  return state;
}
function handleItemsChange(items, previousItems, state, context) {
  const {
    itemComparer,
    focusManagement
  } = context;
  let newHighlightedValue = null;
  if (state.highlightedValue != null) {
    newHighlightedValue = items.find((item) => itemComparer(item, state.highlightedValue)) ?? null;
  } else if (focusManagement === "DOM" && previousItems.length === 0) {
    newHighlightedValue = moveHighlight(null, "reset", context);
  }
  const selectedValues = state.selectedValues ?? [];
  const newSelectedValues = selectedValues.filter((selectedValue) => items.some((item) => itemComparer(item, selectedValue)));
  return {
    ...state,
    highlightedValue: newHighlightedValue,
    selectedValues: newSelectedValues
  };
}
function handleResetHighlight(state, context) {
  return {
    ...state,
    highlightedValue: moveHighlight(null, "reset", context)
  };
}
function handleHighlightLast(state, context) {
  return {
    ...state,
    highlightedValue: moveHighlight(null, "end", context)
  };
}
function handleClearSelection(state, context) {
  return {
    ...state,
    selectedValues: [],
    highlightedValue: moveHighlight(null, "reset", context)
  };
}
function listReducer(state, action) {
  const {
    type,
    context
  } = action;
  switch (type) {
    case ListActionTypes.keyDown:
      return handleKeyDown(action.key, state, context);
    case ListActionTypes.itemClick:
      return handleItemSelection(action.item, state, context);
    case ListActionTypes.blur:
      return handleBlur(state, context);
    case ListActionTypes.textNavigation:
      return handleTextNavigation(state, action.searchString, context);
    case ListActionTypes.itemsChange:
      return handleItemsChange(action.items, action.previousItems, state, context);
    case ListActionTypes.resetHighlight:
      return handleResetHighlight(state, context);
    case ListActionTypes.highlightLast:
      return handleHighlightLast(state, context);
    case ListActionTypes.clearSelection:
      return handleClearSelection(state, context);
    default:
      return state;
  }
}

// node_modules/@mui/base/utils/useTextNavigation.js
var React29 = __toESM(require_react());
var TEXT_NAVIGATION_RESET_TIMEOUT = 500;
function useTextNavigation(callback) {
  const textCriteriaRef = React29.useRef({
    searchString: "",
    lastTime: null
  });
  return React29.useCallback((event) => {
    if (event.key.length === 1 && event.key !== " ") {
      const textCriteria = textCriteriaRef.current;
      const lowerKey = event.key.toLowerCase();
      const currentTime = performance.now();
      if (textCriteria.searchString.length > 0 && textCriteria.lastTime && currentTime - textCriteria.lastTime > TEXT_NAVIGATION_RESET_TIMEOUT) {
        textCriteria.searchString = lowerKey;
      } else if (textCriteria.searchString.length !== 1 || lowerKey !== textCriteria.searchString) {
        textCriteria.searchString += lowerKey;
      }
      textCriteria.lastTime = currentTime;
      callback(textCriteria.searchString, event);
    }
  }, [callback]);
}

// node_modules/@mui/base/useList/useList.js
var EMPTY_OBJECT2 = {};
var NOOP2 = () => {
};
var defaultItemComparer = (optionA, optionB) => optionA === optionB;
var defaultIsItemDisabled = () => false;
var defaultItemStringifier = (item) => typeof item === "string" ? item : String(item);
var defaultGetInitialState = () => ({
  highlightedValue: null,
  selectedValues: []
});
function useList(params) {
  const {
    controlledProps = EMPTY_OBJECT2,
    disabledItemsFocusable = false,
    disableListWrap = false,
    focusManagement = "activeDescendant",
    getInitialState = defaultGetInitialState,
    getItemDomElement,
    getItemId,
    isItemDisabled = defaultIsItemDisabled,
    rootRef: externalListRef,
    onStateChange = NOOP2,
    items,
    itemComparer = defaultItemComparer,
    getItemAsString = defaultItemStringifier,
    onChange,
    onHighlightChange,
    onItemsChange,
    orientation = "vertical",
    pageSize = 5,
    reducerActionContext = EMPTY_OBJECT2,
    selectionMode = "single",
    stateReducer: externalReducer,
    componentName = "useList"
  } = params;
  if (true) {
    if (focusManagement === "DOM" && getItemDomElement == null) {
      throw new Error("useList: The `getItemDomElement` prop is required when using the `DOM` focus management.");
    }
    if (focusManagement === "activeDescendant" && getItemId == null) {
      throw new Error("useList: The `getItemId` prop is required when using the `activeDescendant` focus management.");
    }
  }
  const listRef = React30.useRef(null);
  const handleRef = useForkRef(externalListRef, listRef);
  const handleHighlightChange = React30.useCallback((event, value, reason) => {
    var _a;
    onHighlightChange == null ? void 0 : onHighlightChange(event, value, reason);
    if (focusManagement === "DOM" && value != null && (reason === ListActionTypes.itemClick || reason === ListActionTypes.keyDown || reason === ListActionTypes.textNavigation)) {
      (_a = getItemDomElement == null ? void 0 : getItemDomElement(value)) == null ? void 0 : _a.focus();
    }
  }, [getItemDomElement, onHighlightChange, focusManagement]);
  const stateComparers = React30.useMemo(() => ({
    highlightedValue: itemComparer,
    selectedValues: (valuesArray1, valuesArray2) => areArraysEqual(valuesArray1, valuesArray2, itemComparer)
  }), [itemComparer]);
  const handleStateChange = React30.useCallback((event, field, value, reason, state2) => {
    onStateChange == null ? void 0 : onStateChange(event, field, value, reason, state2);
    switch (field) {
      case "highlightedValue":
        handleHighlightChange(event, value, reason);
        break;
      case "selectedValues":
        onChange == null ? void 0 : onChange(event, value, reason);
        break;
      default:
        break;
    }
  }, [handleHighlightChange, onChange, onStateChange]);
  const listActionContext = React30.useMemo(() => {
    return {
      disabledItemsFocusable,
      disableListWrap,
      focusManagement,
      isItemDisabled,
      itemComparer,
      items,
      getItemAsString,
      onHighlightChange: handleHighlightChange,
      orientation,
      pageSize,
      selectionMode,
      stateComparers
    };
  }, [disabledItemsFocusable, disableListWrap, focusManagement, isItemDisabled, itemComparer, items, getItemAsString, handleHighlightChange, orientation, pageSize, selectionMode, stateComparers]);
  const initialState = getInitialState();
  const reducer = externalReducer ?? listReducer;
  const actionContext = React30.useMemo(() => ({
    ...reducerActionContext,
    ...listActionContext
  }), [reducerActionContext, listActionContext]);
  const [state, dispatch] = useControllableReducer({
    reducer,
    actionContext,
    initialState,
    controlledProps,
    stateComparers,
    onStateChange: handleStateChange,
    componentName
  });
  const {
    highlightedValue,
    selectedValues
  } = state;
  const handleTextNavigation2 = useTextNavigation((searchString, event) => dispatch({
    type: ListActionTypes.textNavigation,
    event,
    searchString
  }));
  const previousItems = React30.useRef([]);
  React30.useEffect(() => {
    if (areArraysEqual(previousItems.current, items, itemComparer)) {
      return;
    }
    dispatch({
      type: ListActionTypes.itemsChange,
      event: null,
      items,
      previousItems: previousItems.current
    });
    previousItems.current = items;
    onItemsChange == null ? void 0 : onItemsChange(items);
  }, [items, itemComparer, dispatch, onItemsChange]);
  const createHandleKeyDown = (externalHandlers) => (event) => {
    var _a;
    (_a = externalHandlers.onKeyDown) == null ? void 0 : _a.call(externalHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    const keysToPreventDefault = ["Home", "End", "PageUp", "PageDown"];
    if (orientation === "vertical") {
      keysToPreventDefault.push("ArrowUp", "ArrowDown");
    } else {
      keysToPreventDefault.push("ArrowLeft", "ArrowRight");
    }
    if (focusManagement === "activeDescendant") {
      keysToPreventDefault.push(" ", "Enter");
    }
    if (keysToPreventDefault.includes(event.key)) {
      event.preventDefault();
    }
    dispatch({
      type: ListActionTypes.keyDown,
      key: event.key,
      event
    });
    handleTextNavigation2(event);
  };
  const createHandleBlur = (externalHandlers) => (event) => {
    var _a, _b;
    (_a = externalHandlers.onBlur) == null ? void 0 : _a.call(externalHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if ((_b = listRef.current) == null ? void 0 : _b.contains(event.relatedTarget)) {
      return;
    }
    dispatch({
      type: ListActionTypes.blur,
      event
    });
  };
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers_default(externalProps);
    return {
      ...externalProps,
      "aria-activedescendant": focusManagement === "activeDescendant" && highlightedValue != null ? getItemId(highlightedValue) : void 0,
      tabIndex: focusManagement === "DOM" ? -1 : 0,
      ref: handleRef,
      ...externalEventHandlers,
      onBlur: createHandleBlur(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers)
    };
  };
  const getItemState = React30.useCallback((item) => {
    const selected = (selectedValues ?? []).some((value) => value != null && itemComparer(item, value));
    const highlighted = highlightedValue != null && itemComparer(item, highlightedValue);
    const focusable = focusManagement === "DOM";
    return {
      focusable,
      highlighted,
      selected
    };
  }, [itemComparer, selectedValues, highlightedValue, focusManagement]);
  const contextValue = React30.useMemo(() => ({
    dispatch,
    getItemState
  }), [dispatch, getItemState]);
  React30.useDebugValue({
    state
  });
  return {
    contextValue,
    dispatch,
    getRootProps,
    rootRef: handleRef,
    state
  };
}

// node_modules/@mui/base/useList/useListItem.js
var React32 = __toESM(require_react());

// node_modules/@mui/base/useList/ListContext.js
var React31 = __toESM(require_react());
var ListContext = React31.createContext(null);
if (true) {
  ListContext.displayName = "ListContext";
}

// node_modules/@mui/base/useList/useListItem.js
function useListItem(parameters) {
  const {
    handlePointerOverEvents = false,
    item
  } = parameters;
  const listContext = React32.useContext(ListContext);
  if (!listContext) {
    throw new Error("useListItem must be used within a ListProvider");
  }
  const {
    dispatch,
    getItemState
  } = listContext;
  const {
    highlighted,
    selected,
    focusable
  } = getItemState(item);
  const createHandleClick = React32.useCallback((externalHandlers) => (event) => {
    var _a;
    (_a = externalHandlers.onClick) == null ? void 0 : _a.call(externalHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (true) {
      if (item === void 0) {
        throw new Error(["MUI: The `item` provided to useListItem() is undefined.", "This should happen only during server-side rendering under React 17."].join("\n"));
      }
    }
    dispatch({
      type: ListActionTypes.itemClick,
      item,
      event
    });
  }, [dispatch, item]);
  const createHandlePointerOver = React32.useCallback((externalHandlers) => (event) => {
    var _a;
    (_a = externalHandlers.onMouseOver) == null ? void 0 : _a.call(externalHandlers, event);
    if (event.defaultPrevented) {
      return;
    }
    if (true) {
      if (item === void 0) {
        throw new Error(["MUI: The `item` provided to useListItem() is undefined.", "This should happen only during server-side rendering under React 17."].join("\n"));
      }
    }
    dispatch({
      type: ListActionTypes.itemHover,
      item,
      event
    });
  }, [dispatch, item]);
  let tabIndex;
  if (focusable) {
    tabIndex = highlighted ? 0 : -1;
  }
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers_default(externalProps);
    return {
      ...externalProps,
      onClick: createHandleClick(externalEventHandlers),
      onPointerOver: handlePointerOverEvents ? createHandlePointerOver(externalEventHandlers) : void 0,
      tabIndex
    };
  };
  return {
    getRootProps,
    highlighted,
    selected
  };
}

// node_modules/@mui/base/useMenu/menuReducer.js
function menuReducer(state, action) {
  var _a, _b, _c;
  if (action.type === ListActionTypes.itemHover) {
    return {
      ...state,
      highlightedValue: action.item
    };
  }
  const newState = listReducer(state, action);
  if (newState.highlightedValue === null && action.context.items.length > 0) {
    return {
      ...newState,
      highlightedValue: action.context.items[0]
    };
  }
  if (action.type === ListActionTypes.keyDown) {
    if (action.event.key === "Escape") {
      return {
        ...newState,
        open: false
      };
    }
  }
  if (action.type === ListActionTypes.blur) {
    if (!((_a = action.context.listboxRef.current) == null ? void 0 : _a.contains(action.event.relatedTarget))) {
      const listboxId = (_b = action.context.listboxRef.current) == null ? void 0 : _b.getAttribute("id");
      const controlledBy = (_c = action.event.relatedTarget) == null ? void 0 : _c.getAttribute("aria-controls");
      if (listboxId && controlledBy && listboxId === controlledBy) {
        return newState;
      }
      return {
        ...newState,
        open: false,
        highlightedValue: action.context.items[0]
      };
    }
  }
  return newState;
}

// node_modules/@mui/base/useCompound/useCompoundParent.js
var React33 = __toESM(require_react());
var CompoundComponentContext = React33.createContext(null);
if (true) {
  CompoundComponentContext.displayName = "CompoundComponentContext";
}
function sortSubitems(subitems) {
  const subitemsArray = Array.from(subitems.keys()).map((key) => {
    const subitem = subitems.get(key);
    return {
      key,
      subitem
    };
  });
  subitemsArray.sort((a, b) => {
    const aNode = a.subitem.ref.current;
    const bNode = b.subitem.ref.current;
    if (aNode === null || bNode === null || aNode === bNode) {
      return 0;
    }
    return aNode.compareDocumentPosition(bNode) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1;
  });
  return new Map(subitemsArray.map((item) => [item.key, item.subitem]));
}
function useCompoundParent() {
  const [subitems, setSubitems] = React33.useState(/* @__PURE__ */ new Map());
  const subitemKeys = React33.useRef(/* @__PURE__ */ new Set());
  const deregisterItem = React33.useCallback(function deregisterItem2(id) {
    subitemKeys.current.delete(id);
    setSubitems((previousState) => {
      const newState = new Map(previousState);
      newState.delete(id);
      return newState;
    });
  }, []);
  const registerItem = React33.useCallback(function registerItem2(id, item) {
    let providedOrGeneratedId;
    if (typeof id === "function") {
      providedOrGeneratedId = id(subitemKeys.current);
    } else {
      providedOrGeneratedId = id;
    }
    subitemKeys.current.add(providedOrGeneratedId);
    setSubitems((previousState) => {
      const newState = new Map(previousState);
      newState.set(providedOrGeneratedId, item);
      return newState;
    });
    return {
      id: providedOrGeneratedId,
      deregister: () => deregisterItem(providedOrGeneratedId)
    };
  }, [deregisterItem]);
  const sortedSubitems = React33.useMemo(() => sortSubitems(subitems), [subitems]);
  const getItemIndex = React33.useCallback(function getItemIndex2(id) {
    return Array.from(sortedSubitems.keys()).indexOf(id);
  }, [sortedSubitems]);
  const contextValue = React33.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount: subitems.size
  }), [getItemIndex, registerItem, subitems.size]);
  return {
    contextValue,
    subitems: sortedSubitems
  };
}

// node_modules/@mui/base/useCompound/useCompoundItem.js
var React34 = __toESM(require_react());
function useCompoundItem(id, itemMetadata) {
  const context = React34.useContext(CompoundComponentContext);
  if (context === null) {
    throw new Error("useCompoundItem must be used within a useCompoundParent");
  }
  const {
    registerItem
  } = context;
  const [registeredId, setRegisteredId] = React34.useState(typeof id === "function" ? void 0 : id);
  useEnhancedEffect_default(() => {
    const {
      id: returnedId,
      deregister
    } = registerItem(id, itemMetadata);
    setRegisteredId(returnedId);
    return deregister;
  }, [registerItem, itemMetadata, id]);
  return {
    id: registeredId,
    index: registeredId !== void 0 ? context.getItemIndex(registeredId) : -1,
    totalItemCount: context.totalSubitemCount
  };
}

// node_modules/@mui/base/utils/combineHooksSlotProps.js
function combineHooksSlotProps(getFirstProps, getSecondProps) {
  return function getCombinedProps(external = {}) {
    const firstResult = {
      ...external,
      ...getFirstProps(external)
    };
    const result = {
      ...firstResult,
      ...getSecondProps(firstResult)
    };
    return result;
  };
}

// node_modules/@mui/base/useMenu/useMenu.js
var FALLBACK_MENU_CONTEXT = {
  dispatch: () => {
  },
  popupId: "",
  registerPopup: () => {
  },
  registerTrigger: () => {
  },
  state: {
    open: true,
    changeReason: null
  },
  triggerElement: null
};
function useMenu(parameters = {}) {
  const {
    listboxRef: listboxRefProp,
    onItemsChange,
    id: idParam,
    disabledItemsFocusable = true,
    disableListWrap = false,
    autoFocus = true,
    componentName = "useMenu"
  } = parameters;
  const rootRef = React35.useRef(null);
  const handleRef = useForkRef(rootRef, listboxRefProp);
  const listboxId = useId(idParam) ?? "";
  const {
    state: {
      open,
      changeReason
    },
    dispatch: menuDispatch,
    triggerElement,
    registerPopup
  } = React35.useContext(DropdownContext) ?? FALLBACK_MENU_CONTEXT;
  const isInitiallyOpen = React35.useRef(open);
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const subitemKeys = React35.useMemo(() => Array.from(subitems.keys()), [subitems]);
  const getItemDomElement = React35.useCallback((itemId) => {
    var _a;
    if (itemId == null) {
      return null;
    }
    return ((_a = subitems.get(itemId)) == null ? void 0 : _a.ref.current) ?? null;
  }, [subitems]);
  const isItemDisabled = React35.useCallback((id) => {
    var _a;
    return ((_a = subitems == null ? void 0 : subitems.get(id)) == null ? void 0 : _a.disabled) || false;
  }, [subitems]);
  const getItemAsString = React35.useCallback((id) => {
    var _a, _b, _c;
    return ((_a = subitems.get(id)) == null ? void 0 : _a.label) || ((_c = (_b = subitems.get(id)) == null ? void 0 : _b.ref.current) == null ? void 0 : _c.innerText);
  }, [subitems]);
  const reducerActionContext = React35.useMemo(() => ({
    listboxRef: rootRef
  }), [rootRef]);
  const {
    dispatch: listDispatch,
    getRootProps: getListRootProps,
    contextValue: listContextValue,
    state: {
      highlightedValue
    },
    rootRef: mergedListRef
  } = useList({
    disabledItemsFocusable,
    disableListWrap,
    focusManagement: "DOM",
    getItemDomElement,
    getInitialState: () => ({
      selectedValues: [],
      highlightedValue: null
    }),
    isItemDisabled,
    items: subitemKeys,
    getItemAsString,
    rootRef: handleRef,
    onItemsChange,
    reducerActionContext,
    selectionMode: "none",
    stateReducer: menuReducer,
    componentName
  });
  useEnhancedEffect_default(() => {
    registerPopup(listboxId);
  }, [listboxId, registerPopup]);
  useEnhancedEffect_default(() => {
    if (open && (changeReason == null ? void 0 : changeReason.type) === "keydown" && changeReason.key === "ArrowUp") {
      listDispatch({
        type: ListActionTypes.highlightLast,
        event: changeReason
      });
    }
  }, [open, changeReason, listDispatch]);
  React35.useEffect(() => {
    var _a, _b, _c;
    if (open && autoFocus && highlightedValue && !isInitiallyOpen.current) {
      (_c = (_b = (_a = subitems.get(highlightedValue)) == null ? void 0 : _a.ref) == null ? void 0 : _b.current) == null ? void 0 : _c.focus();
    }
  }, [open, autoFocus, highlightedValue, subitems, subitemKeys]);
  React35.useEffect(() => {
    var _a, _b, _c;
    if (((_a = rootRef.current) == null ? void 0 : _a.contains(document.activeElement)) && highlightedValue !== null) {
      (_c = (_b = subitems == null ? void 0 : subitems.get(highlightedValue)) == null ? void 0 : _b.ref.current) == null ? void 0 : _c.focus();
    }
  }, [highlightedValue, subitems]);
  const createHandleBlur = (otherHandlers) => (event) => {
    var _a, _b;
    (_a = otherHandlers.onBlur) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (((_b = rootRef.current) == null ? void 0 : _b.contains(event.relatedTarget)) || event.relatedTarget === triggerElement) {
      return;
    }
    menuDispatch({
      type: DropdownActionTypes.blur,
      event
    });
  };
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onKeyDown) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.key === "Escape") {
      menuDispatch({
        type: DropdownActionTypes.escapeKeyDown,
        event
      });
    }
  };
  const getOwnListboxHandlers = (otherHandlers = {}) => ({
    onBlur: createHandleBlur(otherHandlers),
    onKeyDown: createHandleKeyDown(otherHandlers)
  });
  const getListboxProps = (externalProps = {}) => {
    const getCombinedRootProps = combineHooksSlotProps(getOwnListboxHandlers, getListRootProps);
    const externalEventHandlers = extractEventHandlers_default(externalProps);
    return {
      ...externalProps,
      ...externalEventHandlers,
      ...getCombinedRootProps(externalEventHandlers),
      id: listboxId,
      role: "menu"
    };
  };
  React35.useDebugValue({
    subitems,
    highlightedValue
  });
  return {
    contextValue: {
      ...compoundComponentContextValue,
      ...listContextValue
    },
    dispatch: listDispatch,
    getListboxProps,
    highlightedValue,
    listboxRef: mergedListRef,
    menuItems: subitems,
    open,
    triggerElement
  };
}

// node_modules/@mui/base/useMenu/MenuProvider.js
var React36 = __toESM(require_react());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
function MenuProvider(props) {
  const {
    value,
    children
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = React36.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex
  }), [dispatch, getItemIndex, getItemState]);
  const compoundComponentContextValue = React36.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return (0, import_jsx_runtime9.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: (0, import_jsx_runtime9.jsx)(ListContext.Provider, {
      value: listContextValue,
      children
    })
  });
}

// node_modules/@mui/base/Unstable_Popup/Popup.js
var React43 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp2(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp2(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp2(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React37 = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var index = typeof document !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React37.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React37.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React37.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React37.useState(null);
  const [_floating, _setFloating] = React37.useState(null);
  const setReference = React37.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React37.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React37.useRef(null);
  const floatingRef = React37.useRef(null);
  const dataRef = React37.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React37.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React37.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React37.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React37.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React37.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React37.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});

// node_modules/@mui/base/Portal/Portal.js
var React38 = __toESM(require_react());
var ReactDOM2 = __toESM(require_react_dom());
var import_prop_types11 = __toESM(require_prop_types());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
function getContainer(container) {
  return typeof container === "function" ? container() : container;
}
var Portal = React38.forwardRef(function Portal2(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React38.useState(null);
  const handleRef = useForkRef(getReactNodeRef(children), forwardedRef);
  useEnhancedEffect_default(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect_default(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return void 0;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (React38.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return React38.cloneElement(children, newProps);
    }
    return (0, import_jsx_runtime10.jsx)(React38.Fragment, {
      children
    });
  }
  return (0, import_jsx_runtime10.jsx)(React38.Fragment, {
    children: mountNode ? ReactDOM2.createPortal(children, mountNode) : mountNode
  });
});
true ? Portal.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: import_prop_types11.default.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types11.default.oneOfType([HTMLElementType, import_prop_types11.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types11.default.bool
} : void 0;
if (true) {
  Portal["propTypes"] = exactProp(Portal.propTypes);
}

// node_modules/@mui/base/Unstable_Popup/popupClasses.js
var COMPONENT_NAME6 = "Popup";
function getPopupUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME6, slot);
}
var popupClasses = generateUtilityClasses3(COMPONENT_NAME6, ["root", "open"]);

// node_modules/@mui/base/useTransition/useTransitionStateManager.js
var React40 = __toESM(require_react());

// node_modules/@mui/base/useTransition/TransitionContext.js
var React39 = __toESM(require_react());
var TransitionContext = React39.createContext(null);
if (true) {
  TransitionContext.displayName = "TransitionContext";
}

// node_modules/@mui/base/useTransition/useTransitionStateManager.js
function useTransitionStateManager() {
  const transitionContext = React40.useContext(TransitionContext);
  if (!transitionContext) {
    throw new Error("Missing transition context");
  }
  const {
    registerTransition,
    requestedEnter,
    onExited
  } = transitionContext;
  React40.useEffect(() => {
    return registerTransition();
  }, [registerTransition]);
  return {
    onExited,
    requestedEnter
  };
}

// node_modules/@mui/base/useTransition/useTransitionTrigger.js
var React41 = __toESM(require_react());
function useTransitionTrigger(requestEnter) {
  const [exitTransitionFinished, setExitTransitionFinished] = React41.useState(true);
  const hasPendingExitTransition = React41.useRef(false);
  const registeredTransitions = React41.useRef(0);
  const [hasTransition, setHasTransition] = React41.useState(false);
  const previousRequestEnter = React41.useRef(requestEnter);
  React41.useEffect(() => {
    if (!requestEnter && // checking registeredTransitions.current instead of hasTransition to avoid this effect re-firing whenever hasTransition changes
    registeredTransitions.current > 0 && // prevents waiting for a pending transition right after mounting
    previousRequestEnter.current !== requestEnter) {
      hasPendingExitTransition.current = true;
      setExitTransitionFinished(false);
    }
    previousRequestEnter.current = requestEnter;
  }, [requestEnter]);
  const handleExited = React41.useCallback(() => {
    hasPendingExitTransition.current = false;
    setExitTransitionFinished(true);
  }, []);
  const registerTransition = React41.useCallback(() => {
    registeredTransitions.current += 1;
    setHasTransition(true);
    return () => {
      registeredTransitions.current -= 1;
      if (registeredTransitions.current === 0) {
        setHasTransition(false);
      }
    };
  }, []);
  let hasExited;
  if (!hasTransition) {
    hasExited = !requestEnter;
  } else if (requestEnter) {
    hasExited = false;
  } else {
    hasExited = !hasPendingExitTransition.current && exitTransitionFinished;
  }
  const contextValue = React41.useMemo(() => ({
    requestedEnter: requestEnter,
    onExited: handleExited,
    registerTransition,
    hasExited
  }), [handleExited, requestEnter, registerTransition, hasExited]);
  return {
    contextValue,
    hasExited
  };
}

// node_modules/@mui/base/Unstable_Popup/PopupContext.js
var React42 = __toESM(require_react());
var PopupContext = React42.createContext(null);
if (true) {
  PopupContext.displayName = "PopupContext";
}

// node_modules/@mui/base/Unstable_Popup/Popup.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
function useUtilityClasses5(ownerState) {
  const {
    open
  } = ownerState;
  const slots = {
    root: ["root", open && "open"]
  };
  return composeClasses(slots, useClassNamesOverride(getPopupUtilityClass));
}
function resolveAnchor(anchor) {
  return typeof anchor === "function" ? anchor() : anchor;
}
var Popup = React43.forwardRef(function Popup2(props, forwardedRef) {
  const {
    anchor: anchorProp,
    children,
    container,
    disablePortal = false,
    keepMounted = false,
    middleware,
    offset: offsetProp = 0,
    open = false,
    placement = "bottom",
    slotProps = {},
    slots = {},
    strategy = "absolute",
    ...other
  } = props;
  const {
    refs,
    elements,
    floatingStyles,
    update,
    placement: finalPlacement
  } = useFloating({
    elements: {
      reference: resolveAnchor(anchorProp)
    },
    open,
    middleware: middleware ?? [offset3(offsetProp ?? 0), flip3(), shift3()],
    placement,
    strategy,
    whileElementsMounted: !keepMounted ? autoUpdate : void 0
  });
  const handleRef = useForkRef(refs.setFloating, forwardedRef);
  useEnhancedEffect_default(() => {
    if (keepMounted && open && elements.reference && elements.floating) {
      const cleanup = autoUpdate(elements.reference, elements.floating, update);
      return cleanup;
    }
    return void 0;
  }, [keepMounted, open, elements, update]);
  const ownerState = {
    ...props,
    disablePortal,
    keepMounted,
    offset: offset3,
    open,
    placement,
    finalPlacement,
    strategy
  };
  const {
    contextValue,
    hasExited: hasTransitionExited
  } = useTransitionTrigger(open);
  const visibility = keepMounted && hasTransitionExited ? "hidden" : void 0;
  const classes = useUtilityClasses5(ownerState);
  const Root = (slots == null ? void 0 : slots.root) ?? "div";
  const rootProps = useSlotProps_default({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root,
    additionalProps: {
      ref: handleRef,
      role: "tooltip",
      style: {
        ...floatingStyles,
        visibility
      }
    }
  });
  const popupContextValue = React43.useMemo(() => ({
    placement: finalPlacement
  }), [finalPlacement]);
  const shouldRender = keepMounted || !hasTransitionExited;
  if (!shouldRender) {
    return null;
  }
  return (0, import_jsx_runtime11.jsx)(Portal, {
    disablePortal,
    container,
    children: (0, import_jsx_runtime11.jsx)(PopupContext.Provider, {
      value: popupContextValue,
      children: (0, import_jsx_runtime11.jsx)(TransitionContext.Provider, {
        value: contextValue,
        children: (0, import_jsx_runtime11.jsx)(Root, {
          ...rootProps,
          children
        })
      })
    })
  });
});
true ? Popup.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtual element](https://floating-ui.com/docs/virtual-elements),
   * or a function that returns either.
   * It's used to set the position of the popup.
   */
  anchor: import_prop_types12.default.oneOfType([HTMLElementType, import_prop_types12.default.object, import_prop_types12.default.func]),
  /**
   * @ignore
   */
  children: import_prop_types12.default.oneOfType([import_prop_types12.default.node, import_prop_types12.default.func]),
  /**
   * An HTML element or function that returns one. The container will have the portal children appended to it.
   * By default, it uses the body of the top-level document object, so it's `document.body` in these cases.
   */
  container: import_prop_types12.default.oneOfType([HTMLElementType, import_prop_types12.default.func]),
  /**
   * If `true`, the popup will be rendered where it is defined, without the use of portals.
   * @default false
   */
  disablePortal: import_prop_types12.default.bool,
  /**
   * If `true`, the popup will exist in the DOM even if it's closed.
   * Its visibility will be controlled by the `visibility` CSS property.
   *
   * Otherwise, a closed popup will be removed from the DOM.
   *
   * @default false
   */
  keepMounted: import_prop_types12.default.bool,
  /**
   * Collection of Floating UI middleware to use when positioning the popup.
   * If not provided, the [`offset`](https://floating-ui.com/docs/offset)
   * and [`flip`](https://floating-ui.com/docs/flip) functions will be used.
   *
   * @see https://floating-ui.com/docs/computePosition#middleware
   */
  middleware: import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.oneOf([false]), import_prop_types12.default.shape({
    fn: import_prop_types12.default.func.isRequired,
    name: import_prop_types12.default.string.isRequired,
    options: import_prop_types12.default.any
  })])),
  /**
   * Distance between a popup and the trigger element.
   * This prop is ignored when custom `middleware` is provided.
   *
   * @default 0
   * @see https://floating-ui.com/docs/offset
   */
  offset: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.number, import_prop_types12.default.shape({
    alignmentAxis: import_prop_types12.default.number,
    crossAxis: import_prop_types12.default.number,
    mainAxis: import_prop_types12.default.number
  })]),
  /**
   * If `true`, the popup is visible.
   *
   * @default false
   */
  open: import_prop_types12.default.bool,
  /**
   * Determines where to place the popup relative to the trigger element.
   *
   * @default 'bottom'
   * @see https://floating-ui.com/docs/computePosition#placement
   */
  placement: import_prop_types12.default.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The props used for each slot inside the Popup.
   *
   * @default {}
   */
  slotProps: import_prop_types12.default.shape({
    root: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object])
  }),
  /**
   * The components used for each slot inside the Popup.
   * Either a string to use a HTML element or a component.
   *
   * @default {}
   */
  slots: import_prop_types12.default.shape({
    root: import_prop_types12.default.elementType
  }),
  /**
   * The type of CSS position property to use (absolute or fixed).
   *
   * @default 'absolute'
   * @see https://floating-ui.com/docs/computePosition#strategy
   */
  strategy: import_prop_types12.default.oneOf(["absolute", "fixed"])
} : void 0;

// node_modules/@mui/base/Menu/Menu.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
function useUtilityClasses6(ownerState) {
  const {
    open
  } = ownerState;
  const slots = {
    root: ["root", open && "expanded"],
    listbox: ["listbox", open && "expanded"]
  };
  return composeClasses(slots, useClassNamesOverride(getMenuUtilityClass));
}
var Menu = React44.forwardRef(function Menu2(props, forwardedRef) {
  const {
    actions,
    anchor: anchorProp,
    children,
    onItemsChange,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const {
    contextValue,
    getListboxProps,
    dispatch,
    open,
    triggerElement
  } = useMenu({
    onItemsChange,
    componentName: "Menu"
  });
  const anchor = anchorProp ?? triggerElement;
  React44.useImperativeHandle(actions, () => ({
    dispatch,
    resetHighlight: () => dispatch({
      type: ListActionTypes.resetHighlight,
      event: null
    })
  }), [dispatch]);
  const ownerState = {
    ...props,
    open
  };
  const classes = useUtilityClasses6(ownerState);
  const Root = slots.root ?? "div";
  const rootProps = useSlotProps_default({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef,
      role: void 0
    },
    className: classes.root,
    ownerState
  });
  const Listbox = slots.listbox ?? "ul";
  const listboxProps = useSlotProps_default({
    elementType: Listbox,
    getSlotProps: getListboxProps,
    externalSlotProps: slotProps.listbox,
    className: classes.listbox,
    ownerState
  });
  if (open === true && anchor == null) {
    return (0, import_jsx_runtime12.jsx)(Root, {
      ...rootProps,
      children: (0, import_jsx_runtime12.jsx)(Listbox, {
        ...listboxProps,
        children: (0, import_jsx_runtime12.jsx)(MenuProvider, {
          value: contextValue,
          children
        })
      })
    });
  }
  return (0, import_jsx_runtime12.jsx)(Popup, {
    keepMounted: true,
    ...rootProps,
    open,
    anchor,
    slots: {
      root: Root
    },
    children: (0, import_jsx_runtime12.jsx)(Listbox, {
      ...listboxProps,
      children: (0, import_jsx_runtime12.jsx)(MenuProvider, {
        value: contextValue,
        children
      })
    })
  });
});
true ? Menu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref with imperative actions that can be performed on the menu.
   */
  actions: refType_default,
  /**
   * The element based on which the menu is positioned.
   */
  anchor: import_prop_types13.default.oneOfType([HTMLElementType, import_prop_types13.default.object, import_prop_types13.default.func]),
  /**
   * @ignore
   */
  children: import_prop_types13.default.node,
  /**
   * @ignore
   */
  className: import_prop_types13.default.string,
  /**
   * Function called when the items displayed in the menu change.
   */
  onItemsChange: import_prop_types13.default.func,
  /**
   * The props used for each slot inside the Menu.
   * @default {}
   */
  slotProps: import_prop_types13.default.shape({
    listbox: import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object]),
    root: import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object])
  }),
  /**
   * The components used for each slot inside the Menu.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types13.default.shape({
    listbox: import_prop_types13.default.elementType,
    root: import_prop_types13.default.elementType
  })
} : void 0;

// node_modules/@mui/base/MenuButton/MenuButton.js
var React46 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());

// node_modules/@mui/base/useMenuButton/useMenuButton.js
var React45 = __toESM(require_react());
function useMenuButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    rootRef: externalRef
  } = parameters;
  const menuContext = React45.useContext(DropdownContext);
  if (menuContext === null) {
    throw new Error("useMenuButton: no menu context available.");
  }
  const {
    state,
    dispatch,
    registerTrigger,
    popupId
  } = menuContext;
  const {
    getRootProps: getButtonRootProps,
    rootRef: buttonRootRef,
    active
  } = useButton({
    disabled,
    focusableWhenDisabled,
    rootRef: externalRef
  });
  const handleRef = useForkRef(buttonRootRef, registerTrigger);
  const createHandleClick = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onClick) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    dispatch({
      type: DropdownActionTypes.toggle,
      event
    });
  };
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onKeyDown) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      dispatch({
        type: DropdownActionTypes.open,
        event
      });
    }
  };
  const getOwnRootProps = (otherHandlers = {}) => ({
    onClick: createHandleClick(otherHandlers),
    onKeyDown: createHandleKeyDown(otherHandlers)
  });
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers_default(externalProps);
    const getCombinedProps = combineHooksSlotProps(getOwnRootProps, getButtonRootProps);
    return {
      "aria-haspopup": "menu",
      "aria-expanded": state.open,
      "aria-controls": popupId,
      ...externalProps,
      ...externalEventHandlers,
      ...getCombinedProps(externalEventHandlers),
      tabIndex: 0,
      // this is needed to make the button focused after click in Safari
      ref: handleRef
    };
  };
  return {
    active,
    getRootProps,
    open: state.open,
    rootRef: handleRef
  };
}

// node_modules/@mui/base/MenuButton/menuButtonClasses.js
var COMPONENT_NAME7 = "MenuButton";
function getMenuButtonUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME7, slot);
}
var menuButtonClasses = generateUtilityClasses3(COMPONENT_NAME7, ["root", "active", "disabled", "expanded"]);

// node_modules/@mui/base/MenuButton/MenuButton.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var useUtilityClasses7 = (ownerState) => {
  const {
    active,
    disabled,
    open
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", active && "active", open && "expanded"]
  };
  return composeClasses(slots, useClassNamesOverride(getMenuButtonUtilityClass));
};
var MenuButton = React46.forwardRef(function MenuButton2(props, forwardedRef) {
  const {
    children,
    disabled = false,
    label,
    slots = {},
    slotProps = {},
    focusableWhenDisabled = false,
    ...other
  } = props;
  const {
    getRootProps,
    open,
    active
  } = useMenuButton({
    disabled,
    focusableWhenDisabled,
    rootRef: forwardedRef
  });
  const ownerState = {
    ...props,
    open,
    active,
    disabled,
    focusableWhenDisabled
  };
  const classes = useUtilityClasses7(ownerState);
  const Root = slots.root || "button";
  const rootProps = useSlotProps_default({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef,
      type: "button"
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime13.jsx)(Root, {
    ...rootProps,
    children
  });
});
true ? MenuButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types14.default.node,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types14.default.string,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types14.default.bool,
  /**
   * If `true`, allows a disabled button to receive focus.
   * @default false
   */
  focusableWhenDisabled: import_prop_types14.default.bool,
  /**
   * Label of the button
   */
  label: import_prop_types14.default.string,
  /**
   * The components used for each slot inside the MenuButton.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slotProps: import_prop_types14.default.shape({
    root: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object])
  }),
  /**
   * The props used for each slot inside the MenuButton.
   * @default {}
   */
  slots: import_prop_types14.default.shape({
    root: import_prop_types14.default.elementType
  })
} : void 0;

// node_modules/@mui/base/MenuItem/MenuItem.js
var React49 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());

// node_modules/@mui/base/MenuItem/menuItemClasses.js
var COMPONENT_NAME8 = "MenuItem";
function getMenuItemUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME8, slot);
}
var menuItemClasses = generateUtilityClasses3(COMPONENT_NAME8, ["root", "disabled", "focusVisible"]);

// node_modules/@mui/base/useMenuItem/useMenuItem.js
var React47 = __toESM(require_react());
function idGenerator(existingKeys) {
  return `menu-item-${existingKeys.size}`;
}
var FALLBACK_MENU_CONTEXT2 = {
  dispatch: () => {
  },
  popupId: "",
  registerPopup: () => {
  },
  registerTrigger: () => {
  },
  state: {
    open: true,
    changeReason: null
  },
  triggerElement: null
};
function useMenuItem(params) {
  const {
    disabled = false,
    id: idParam,
    rootRef: externalRef,
    label,
    disableFocusOnHover = false
  } = params;
  const id = useId(idParam);
  const itemRef = React47.useRef(null);
  const itemMetadata = React47.useMemo(() => ({
    disabled,
    id: id ?? "",
    label,
    ref: itemRef
  }), [disabled, id, label]);
  const {
    dispatch
  } = React47.useContext(DropdownContext) ?? FALLBACK_MENU_CONTEXT2;
  const {
    getRootProps: getListRootProps,
    highlighted
  } = useListItem({
    item: id,
    handlePointerOverEvents: !disableFocusOnHover
  });
  const {
    index: index2,
    totalItemCount
  } = useCompoundItem(id ?? idGenerator, itemMetadata);
  const {
    getRootProps: getButtonProps,
    focusVisible,
    rootRef: buttonRefHandler
  } = useButton({
    disabled,
    focusableWhenDisabled: true
  });
  const handleRef = useForkRef(buttonRefHandler, externalRef, itemRef);
  React47.useDebugValue({
    id,
    highlighted,
    disabled,
    label
  });
  const createHandleClick = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onClick) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    dispatch({
      type: DropdownActionTypes.close,
      event
    });
  };
  const getOwnHandlers = (otherHandlers = {}) => ({
    ...otherHandlers,
    onClick: createHandleClick(otherHandlers)
  });
  function getRootProps(externalProps = {}) {
    const externalEventHandlers = extractEventHandlers_default(externalProps);
    const getCombinedRootProps = combineHooksSlotProps(getOwnHandlers, combineHooksSlotProps(getButtonProps, getListRootProps));
    return {
      ...externalProps,
      ...externalEventHandlers,
      ...getCombinedRootProps(externalEventHandlers),
      id,
      ref: handleRef,
      role: "menuitem"
    };
  }
  if (id === void 0) {
    return {
      getRootProps,
      disabled: false,
      focusVisible,
      highlighted: false,
      index: -1,
      totalItemCount: 0,
      rootRef: handleRef
    };
  }
  return {
    getRootProps,
    disabled,
    focusVisible,
    highlighted,
    index: index2,
    totalItemCount,
    rootRef: handleRef
  };
}

// node_modules/@mui/base/useMenuItem/useMenuItemContextStabilizer.js
var React48 = __toESM(require_react());
function useMenuItemContextStabilizer(id) {
  const listContext = React48.useContext(ListContext);
  if (!listContext) {
    throw new Error("MenuItem: ListContext was not found.");
  }
  const itemId = useId(id);
  const {
    getItemState,
    dispatch
  } = listContext;
  let itemState;
  if (itemId != null) {
    itemState = getItemState(itemId);
  } else {
    itemState = {
      focusable: true,
      highlighted: false,
      selected: false
    };
  }
  const {
    highlighted,
    selected,
    focusable
  } = itemState;
  const localGetItemState = React48.useCallback((itemValue) => {
    if (itemValue !== itemId) {
      throw new Error(["Base UI MenuItem: Tried to access the state of another MenuItem.", `itemValue: ${itemValue} | id: ${itemId}`, "This is unsupported when the MenuItem uses the MenuItemContextStabilizer as a performance optimization."].join("/n"));
    }
    return {
      highlighted,
      selected,
      focusable
    };
  }, [highlighted, selected, focusable, itemId]);
  const localContextValue = React48.useMemo(() => ({
    dispatch,
    getItemState: localGetItemState
  }), [dispatch, localGetItemState]);
  return {
    contextValue: localContextValue,
    id: itemId
  };
}

// node_modules/@mui/base/MenuItem/MenuItem.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
function useUtilityClasses8(ownerState) {
  const {
    disabled,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  return composeClasses(slots, useClassNamesOverride(getMenuItemUtilityClass));
}
var InnerMenuItem = React49.memo(React49.forwardRef(function MenuItem(props, forwardedRef) {
  const {
    children,
    disabled: disabledProp = false,
    label,
    id,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const {
    getRootProps,
    disabled,
    focusVisible,
    highlighted
  } = useMenuItem({
    id,
    disabled: disabledProp,
    rootRef: forwardedRef,
    label
  });
  const ownerState = {
    ...props,
    disabled,
    focusVisible,
    highlighted
  };
  const classes = useUtilityClasses8(ownerState);
  const Root = slots.root ?? "li";
  const rootProps = useSlotProps_default({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime14.jsx)(Root, {
    ...rootProps,
    children
  });
}));
var MenuItem2 = React49.forwardRef(function MenuItem3(props, ref) {
  const {
    id: idProp
  } = props;
  const {
    contextValue,
    id
  } = useMenuItemContextStabilizer(idProp);
  return (0, import_jsx_runtime14.jsx)(ListContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime14.jsx)(InnerMenuItem, {
      ...props,
      id,
      ref
    })
  });
});
true ? MenuItem2.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types15.default.node,
  /**
   * @ignore
   */
  className: import_prop_types15.default.string,
  /**
   * If `true`, the menu item will be disabled.
   * @default false
   */
  disabled: import_prop_types15.default.bool,
  /**
   * If `true`, the menu item won't receive focus when the mouse moves over it.
   *
   * @default false
   */
  disableFocusOnHover: import_prop_types15.default.bool,
  /**
   * A text representation of the menu item's content.
   * Used for keyboard text navigation matching.
   */
  label: import_prop_types15.default.string,
  /**
   * @ignore
   */
  onClick: import_prop_types15.default.func,
  /**
   * The props used for each slot inside the MenuItem.
   * @default {}
   */
  slotProps: import_prop_types15.default.shape({
    root: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object])
  }),
  /**
   * The components used for each slot inside the MenuItem.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types15.default.shape({
    root: import_prop_types15.default.elementType
  })
} : void 0;

// node_modules/@mui/base/Modal/Modal.js
var React51 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());

// node_modules/@mui/base/unstable_useModal/useModal.js
var React50 = __toESM(require_react());

// node_modules/@mui/base/unstable_useModal/ModalManager.js
function isOverflowing(container) {
  const doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute("aria-hidden", "true");
  } else {
    element.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  const forbiddenTagNames = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, (element) => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index2) => {
    if (callback(item)) {
      idx = index2;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      const scrollbarSize = getScrollbarSize(ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: "padding-right",
        el: container
      });
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
      const fixedElements = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedElements, (element) => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: "padding-right",
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = ownerDocument(container).body;
    } else {
      const parent = container.parentElement;
      const containerWindow = ownerWindow(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
    }
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: "overflow",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: "overflow-x",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: "overflow-y",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, (element) => {
    if (element.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
var ModalManager = class {
  constructor() {
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, (item) => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);
    if (containerInfo.modals.length === 0) {
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
};

// node_modules/@mui/base/unstable_useModal/useModal.js
function getContainer2(container) {
  return typeof container === "function" ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty("in") : false;
}
var defaultManager = new ModalManager();
function useModal(parameters) {
  const {
    container,
    disableEscapeKeyDown = false,
    disableScrollLock = false,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager = defaultManager,
    closeAfterTransition = false,
    onTransitionEnter,
    onTransitionExited,
    children,
    onClose,
    open,
    rootRef
  } = parameters;
  const modal = React50.useRef({});
  const mountNodeRef = React50.useRef(null);
  const modalRef = React50.useRef(null);
  const handleRef = useForkRef(modalRef, rootRef);
  const [exited, setExited] = React50.useState(!open);
  const hasTransition = getHasTransition(children);
  let ariaHiddenProp = true;
  if (parameters["aria-hidden"] === "false" || parameters["aria-hidden"] === false) {
    ariaHiddenProp = false;
  }
  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mount = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = useEventCallback_default(() => {
    const resolvedContainer = getContainer2(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = React50.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = useEventCallback_default((node) => {
    mountNodeRef.current = node;
    if (!node) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = React50.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp, manager]);
  React50.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  React50.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onKeyDown) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.key !== "Escape" || event.which === 229 || // Wait until IME is settled.
    !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  const createHandleBackdropClick = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onClick) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers_default(parameters);
    delete propsEventHandlers.onTransitionEnter;
    delete propsEventHandlers.onTransitionExited;
    const externalEventHandlers = {
      ...propsEventHandlers,
      ...otherHandlers
    };
    return {
      role: "presentation",
      ...externalEventHandlers,
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      ref: handleRef
    };
  };
  const getBackdropProps = (otherHandlers = {}) => {
    const externalEventHandlers = otherHandlers;
    return {
      "aria-hidden": true,
      ...externalEventHandlers,
      onClick: createHandleBackdropClick(externalEventHandlers),
      open
    };
  };
  const getTransitionProps = () => {
    const handleEnter = () => {
      setExited(false);
      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };
    const handleExited = () => {
      setExited(true);
      if (onTransitionExited) {
        onTransitionExited();
      }
      if (closeAfterTransition) {
        handleClose();
      }
    };
    return {
      onEnter: createChainedFunction(handleEnter, children == null ? void 0 : children.props.onEnter),
      onExited: createChainedFunction(handleExited, children == null ? void 0 : children.props.onExited)
    };
  };
  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition
  };
}

// node_modules/@mui/base/Modal/modalClasses.js
var COMPONENT_NAME9 = "Modal";
function getModalUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME9, slot);
}
var modalClasses = generateUtilityClasses3(COMPONENT_NAME9, ["root", "hidden", "backdrop"]);

// node_modules/@mui/base/Modal/Modal.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var useUtilityClasses9 = (ownerState) => {
  const {
    open,
    exited
  } = ownerState;
  const slots = {
    root: ["root", !open && exited && "hidden"],
    backdrop: ["backdrop"]
  };
  return composeClasses(slots, useClassNamesOverride(getModalUtilityClass));
};
var Modal = React51.forwardRef(function Modal2(props, forwardedRef) {
  const {
    children,
    closeAfterTransition = false,
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onBackdropClick,
    onClose,
    onKeyDown,
    open,
    onTransitionEnter,
    onTransitionExited,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const propsWithDefaults = {
    ...props,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  };
  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    portalRef,
    isTopModal,
    exited,
    hasTransition
  } = useModal({
    ...propsWithDefaults,
    rootRef: forwardedRef
  });
  const ownerState = {
    ...propsWithDefaults,
    exited,
    hasTransition
  };
  const classes = useUtilityClasses9(ownerState);
  const childProps = {};
  if (children.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    const {
      onEnter,
      onExited
    } = getTransitionProps();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }
  const Root = slots.root ?? "div";
  const rootProps = useSlotProps_default({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    getSlotProps: getRootProps,
    className: classes.root,
    ownerState
  });
  const BackdropComponent = slots.backdrop;
  const backdropProps = useSlotProps_default({
    elementType: BackdropComponent,
    externalSlotProps: slotProps.backdrop,
    getSlotProps: (otherHandlers) => {
      return getBackdropProps({
        ...otherHandlers,
        onClick: (e) => {
          if (onBackdropClick) {
            onBackdropClick(e);
          }
          if (otherHandlers == null ? void 0 : otherHandlers.onClick) {
            otherHandlers.onClick(e);
          }
        }
      });
    },
    className: classes.backdrop,
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return (0, import_jsx_runtime15.jsx)(Portal, {
    ref: portalRef,
    container,
    disablePortal,
    children: (0, import_jsx_runtime15.jsxs)(Root, {
      ...rootProps,
      children: [!hideBackdrop && BackdropComponent ? (0, import_jsx_runtime15.jsx)(BackdropComponent, {
        ...backdropProps
      }) : null, (0, import_jsx_runtime15.jsx)(FocusTrap, {
        disableEnforceFocus,
        disableAutoFocus,
        disableRestoreFocus,
        isEnabled: isTopModal,
        open,
        children: React51.cloneElement(children, childProps)
      })]
    })
  });
});
true ? Modal.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: import_prop_types16.default.bool,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types16.default.oneOfType([HTMLElementType, import_prop_types16.default.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types16.default.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types16.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: import_prop_types16.default.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types16.default.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types16.default.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: import_prop_types16.default.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: import_prop_types16.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: import_prop_types16.default.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: import_prop_types16.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: import_prop_types16.default.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: import_prop_types16.default.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: import_prop_types16.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types16.default.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: import_prop_types16.default.shape({
    backdrop: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object]),
    root: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types16.default.shape({
    backdrop: import_prop_types16.default.elementType,
    root: import_prop_types16.default.elementType
  })
} : void 0;

// node_modules/@mui/base/NoSsr/NoSsr.js
var React52 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
function NoSsr(props) {
  const {
    children,
    defer = false,
    fallback = null
  } = props;
  const [mountedState, setMountedState] = React52.useState(false);
  useEnhancedEffect_default(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  React52.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);
  return (0, import_jsx_runtime16.jsx)(React52.Fragment, {
    children: mountedState ? children : fallback
  });
}
true ? NoSsr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: import_prop_types17.default.node,
  /**
   * If `true`, the component will not only prevent server-side rendering.
   * It will also defer the rendering of the children into a different screen frame.
   * @default false
   */
  defer: import_prop_types17.default.bool,
  /**
   * The fallback content to display.
   * @default null
   */
  fallback: import_prop_types17.default.node
} : void 0;
if (true) {
  NoSsr["propTypes"] = exactProp(NoSsr.propTypes);
}

// node_modules/@mui/base/Unstable_NumberInput/NumberInput.js
var React54 = __toESM(require_react());
var import_prop_types18 = __toESM(require_prop_types());

// node_modules/@mui/base/Unstable_NumberInput/numberInputClasses.js
var COMPONENT_NAME10 = "NumberInput";
function getNumberInputUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME10, slot);
}
var numberInputClasses = generateUtilityClasses3(COMPONENT_NAME10, ["root", "formControl", "focused", "disabled", "readOnly", "error", "input", "incrementButton", "decrementButton", "adornedStart", "adornedEnd"]);

// node_modules/@mui/base/unstable_useNumberInput/useNumberInput.js
var React53 = __toESM(require_react());

// node_modules/@mui/base/unstable_useNumberInput/numberInputAction.types.js
var NumberInputActionTypes = {
  clamp: "numberInput:clamp",
  inputChange: "numberInput:inputChange",
  increment: "numberInput:increment",
  decrement: "numberInput:decrement",
  decrementToMin: "numberInput:decrementToMin",
  incrementToMax: "numberInput:incrementToMax",
  resetInputValue: "numberInput:resetInputValue"
};

// node_modules/@mui/base/unstable_useNumberInput/utils.js
function clampStepwise(val, min2 = Number.MIN_SAFE_INTEGER, max2 = Number.MAX_SAFE_INTEGER, stepProp = NaN) {
  if (Number.isNaN(stepProp)) {
    return clamp_default(val, min2, max2);
  }
  const step = stepProp || 1;
  const remainder = val % step;
  const positivity = Math.sign(remainder);
  if (Math.abs(remainder) > step / 2) {
    return clamp_default(val + positivity * (step - Math.abs(remainder)), min2, max2);
  }
  return clamp_default(val - positivity * Math.abs(remainder), min2, max2);
}
function isNumber(val) {
  return typeof val === "number" && !Number.isNaN(val) && Number.isFinite(val);
}

// node_modules/@mui/base/unstable_useNumberInput/numberInputReducer.js
function getClampedValues(rawValue, context) {
  const {
    min: min2,
    max: max2,
    step
  } = context;
  const clampedValue = rawValue === null ? null : clampStepwise(rawValue, min2, max2, step);
  const newInputValue = clampedValue === null ? "" : String(clampedValue);
  return {
    value: clampedValue,
    inputValue: newInputValue
  };
}
function stepValue(state, context, direction, multiplier) {
  const {
    value
  } = state;
  const {
    step = 1,
    min: min2,
    max: max2
  } = context;
  if (isNumber(value)) {
    return {
      up: value + (step ?? 1) * multiplier,
      down: value - (step ?? 1) * multiplier
    }[direction];
  }
  return {
    up: min2 ?? 1,
    down: max2 ?? -1
  }[direction];
}
function handleClamp(state, context, inputValue) {
  const {
    getInputValueAsString: getInputValueAsString2
  } = context;
  const numberValueAsString = getInputValueAsString2(inputValue);
  const intermediateValue = numberValueAsString === "" || numberValueAsString === "-" ? null : parseInt(numberValueAsString, 10);
  const clampedValues = getClampedValues(intermediateValue, context);
  return {
    ...state,
    ...clampedValues
  };
}
function handleInputChange(state, context, inputValue) {
  const {
    getInputValueAsString: getInputValueAsString2
  } = context;
  const numberValueAsString = getInputValueAsString2(inputValue);
  if (numberValueAsString.match(/^-?\d+?$/) || numberValueAsString === "" || numberValueAsString === "-") {
    return {
      ...state,
      inputValue: numberValueAsString
    };
  }
  return state;
}
function handleStep(state, context, applyMultiplier, direction) {
  const multiplier = applyMultiplier ? context.shiftMultiplier : 1;
  const newValue = stepValue(state, context, direction, multiplier);
  const clampedValues = getClampedValues(newValue, context);
  return {
    ...state,
    ...clampedValues
  };
}
function handleToMinOrMax(state, context, to) {
  const newValue = context[to];
  if (!isNumber(newValue)) {
    return state;
  }
  return {
    ...state,
    value: newValue,
    inputValue: String(newValue)
  };
}
function numberInputReducer(state, action) {
  const {
    type,
    context
  } = action;
  switch (type) {
    case NumberInputActionTypes.clamp:
      return handleClamp(state, context, action.inputValue);
    case NumberInputActionTypes.inputChange:
      return handleInputChange(state, context, action.inputValue);
    case NumberInputActionTypes.increment:
      return handleStep(state, context, action.applyMultiplier, "up");
    case NumberInputActionTypes.decrement:
      return handleStep(state, context, action.applyMultiplier, "down");
    case NumberInputActionTypes.incrementToMax:
      return handleToMinOrMax(state, context, "max");
    case NumberInputActionTypes.decrementToMin:
      return handleToMinOrMax(state, context, "min");
    case NumberInputActionTypes.resetInputValue:
      return {
        ...state,
        inputValue: String(state.value)
      };
    default:
      return state;
  }
}

// node_modules/@mui/base/unstable_useNumberInput/useNumberInput.js
var STEP_KEYS = ["ArrowUp", "ArrowDown", "PageUp", "PageDown"];
var SUPPORTED_KEYS = [...STEP_KEYS, "Home", "End"];
function getInputValueAsString(v) {
  return v ? String(v.trim()) : String(v);
}
function useNumberInput(parameters) {
  const {
    min: min2,
    max: max2,
    step,
    shiftMultiplier = 10,
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onInputChange,
    onFocus,
    onChange,
    required: requiredProp = false,
    readOnly: readOnlyProp = false,
    value: valueProp,
    inputRef: inputRefProp,
    inputId: inputIdProp,
    componentName = "useNumberInput"
  } = parameters;
  const formControlContext = useFormControlContext();
  const {
    current: isControlled
  } = React53.useRef(valueProp != null);
  const handleInputRefWarning = React53.useCallback((instance) => {
    if (true) {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["MUI: You have provided a `slots.input` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  const inputRef = React53.useRef(null);
  const handleInputRef = useForkRef(inputRef, inputRefProp, handleInputRefWarning);
  const inputId = useId(inputIdProp);
  const [focused, setFocused] = React53.useState(false);
  const handleStateChange = React53.useCallback((event, field, fieldValue, reason) => {
    if (field === "value" && typeof fieldValue !== "string") {
      switch (reason) {
        case "numberInput:clamp":
          onChange == null ? void 0 : onChange(event, fieldValue);
          break;
        case "numberInput:increment":
        case "numberInput:decrement":
        case "numberInput:incrementToMax":
        case "numberInput:decrementToMin":
          onChange == null ? void 0 : onChange(event, fieldValue);
          break;
        default:
          break;
      }
    }
  }, [onChange]);
  const numberInputActionContext = React53.useMemo(() => {
    return {
      min: min2,
      max: max2,
      step,
      shiftMultiplier,
      getInputValueAsString
    };
  }, [min2, max2, step, shiftMultiplier]);
  const initialValue = valueProp ?? defaultValueProp ?? null;
  const initialState = {
    value: initialValue,
    inputValue: initialValue ? String(initialValue) : ""
  };
  const controlledState = React53.useMemo(() => ({
    value: valueProp
  }), [valueProp]);
  const [state, dispatch] = useControllableReducer({
    reducer: numberInputReducer,
    controlledProps: controlledState,
    initialState,
    onStateChange: handleStateChange,
    actionContext: React53.useMemo(() => numberInputActionContext, [numberInputActionContext]),
    componentName
  });
  const {
    value,
    inputValue
  } = state;
  React53.useEffect(() => {
    if (!formControlContext && disabledProp && focused) {
      setFocused(false);
      onBlur == null ? void 0 : onBlur();
    }
  }, [formControlContext, disabledProp, focused, onBlur]);
  React53.useEffect(() => {
    if (isControlled && isNumber(value)) {
      dispatch({
        type: NumberInputActionTypes.resetInputValue
      });
    }
  }, [value, dispatch, isControlled]);
  const createHandleFocus = (otherHandlers) => (event) => {
    var _a, _b;
    (_a = otherHandlers.onFocus) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.defaultMuiPrevented || event.defaultPrevented) {
      return;
    }
    if (formControlContext && formControlContext.onFocus) {
      (_b = formControlContext == null ? void 0 : formControlContext.onFocus) == null ? void 0 : _b.call(formControlContext);
    }
    setFocused(true);
  };
  const createHandleInputChange = (otherHandlers) => (event) => {
    var _a, _b;
    if (!isControlled && event.target === null) {
      throw new Error(true ? `MUI: Expected valid input target. Did you use a custom \`slots.input\` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.` : formatMuiErrorMessage(17));
    }
    (_a = formControlContext == null ? void 0 : formControlContext.onChange) == null ? void 0 : _a.call(formControlContext, event);
    (_b = otherHandlers.onInputChange) == null ? void 0 : _b.call(otherHandlers, event);
    if (event.defaultMuiPrevented || event.defaultPrevented) {
      return;
    }
    dispatch({
      type: NumberInputActionTypes.inputChange,
      event,
      inputValue: event.currentTarget.value
    });
  };
  const createHandleBlur = (otherHandlers) => (event) => {
    var _a;
    formControlContext == null ? void 0 : formControlContext.onBlur();
    (_a = otherHandlers.onBlur) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.defaultMuiPrevented || event.defaultPrevented) {
      return;
    }
    dispatch({
      type: NumberInputActionTypes.clamp,
      event,
      inputValue: event.currentTarget.value
    });
    setFocused(false);
  };
  const createHandleClick = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onClick) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.defaultMuiPrevented || event.defaultPrevented) {
      return;
    }
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
  };
  const handleStep2 = (direction) => (event) => {
    const applyMultiplier = Boolean(event.shiftKey);
    const actionType = {
      up: NumberInputActionTypes.increment,
      down: NumberInputActionTypes.decrement
    }[direction];
    dispatch({
      type: actionType,
      event,
      applyMultiplier
    });
  };
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onKeyDown) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.defaultMuiPrevented || event.defaultPrevented) {
      return;
    }
    if (SUPPORTED_KEYS.includes(event.key)) {
      event.preventDefault();
    }
    switch (event.key) {
      case "ArrowUp":
        dispatch({
          type: NumberInputActionTypes.increment,
          event,
          applyMultiplier: !!event.shiftKey
        });
        break;
      case "ArrowDown":
        dispatch({
          type: NumberInputActionTypes.decrement,
          event,
          applyMultiplier: !!event.shiftKey
        });
        break;
      case "PageUp":
        dispatch({
          type: NumberInputActionTypes.increment,
          event,
          applyMultiplier: true
        });
        break;
      case "PageDown":
        dispatch({
          type: NumberInputActionTypes.decrement,
          event,
          applyMultiplier: true
        });
        break;
      case "Home":
        dispatch({
          type: NumberInputActionTypes.incrementToMax,
          event
        });
        break;
      case "End":
        dispatch({
          type: NumberInputActionTypes.decrementToMin,
          event
        });
        break;
      default:
        break;
    }
  };
  const getRootProps = (externalProps = {}) => {
    const propsEventHandlers = extractEventHandlers_default(parameters, [
      // these are handled by the input slot
      "onBlur",
      "onInputChange",
      "onFocus",
      "onChange"
    ]);
    const externalEventHandlers = {
      ...propsEventHandlers,
      ...extractEventHandlers_default(externalProps)
    };
    return {
      ...externalProps,
      ...externalEventHandlers,
      onClick: createHandleClick(externalEventHandlers)
    };
  };
  const getInputProps = (externalProps = {}) => {
    const propsEventHandlers = {
      onBlur,
      onFocus,
      // onChange from normal props is the custom onChange so we ignore it here
      onChange: onInputChange
    };
    const externalEventHandlers = {
      ...propsEventHandlers,
      ...extractEventHandlers_default(externalProps, [
        // onClick is handled by the root slot
        "onClick"
        // do not ignore 'onInputChange', we want slotProps.input.onInputChange to enter the DOM and throw
      ])
    };
    const mergedEventHandlers = {
      ...externalEventHandlers,
      onFocus: createHandleFocus(externalEventHandlers),
      // slotProps.onChange is renamed to onInputChange and passed to createHandleInputChange
      onChange: createHandleInputChange({
        ...externalEventHandlers,
        onInputChange: externalEventHandlers.onChange
      }),
      onBlur: createHandleBlur(externalEventHandlers),
      onKeyDown: createHandleKeyDown(externalEventHandlers)
    };
    const displayValue = (focused ? inputValue : value) ?? "";
    delete externalProps.onInputChange;
    return {
      type: "text",
      id: inputId,
      "aria-invalid": errorProp || void 0,
      defaultValue: void 0,
      value: displayValue,
      "aria-valuenow": displayValue,
      "aria-valuetext": String(displayValue),
      "aria-valuemin": min2,
      "aria-valuemax": max2,
      autoComplete: "off",
      autoCorrect: "off",
      spellCheck: "false",
      required: requiredProp,
      readOnly: readOnlyProp,
      "aria-disabled": disabledProp,
      disabled: disabledProp,
      ...externalProps,
      ref: handleInputRef,
      ...mergedEventHandlers
    };
  };
  const handleStepperButtonMouseDown = (event) => {
    event.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const stepperButtonCommonProps = {
    "aria-controls": inputId,
    tabIndex: -1
  };
  const isIncrementDisabled = disabledProp || (isNumber(value) ? value >= (max2 ?? Number.MAX_SAFE_INTEGER) : false);
  const getIncrementButtonProps = (externalProps = {}) => {
    return {
      ...externalProps,
      ...stepperButtonCommonProps,
      disabled: isIncrementDisabled,
      "aria-disabled": isIncrementDisabled,
      onMouseDown: handleStepperButtonMouseDown,
      onClick: handleStep2("up")
    };
  };
  const isDecrementDisabled = disabledProp || (isNumber(value) ? value <= (min2 ?? Number.MIN_SAFE_INTEGER) : false);
  const getDecrementButtonProps = (externalProps = {}) => {
    return {
      ...externalProps,
      ...stepperButtonCommonProps,
      disabled: isDecrementDisabled,
      "aria-disabled": isDecrementDisabled,
      onMouseDown: handleStepperButtonMouseDown,
      onClick: handleStep2("down")
    };
  };
  return {
    disabled: disabledProp,
    error: errorProp,
    focused,
    formControlContext,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    getRootProps,
    required: requiredProp,
    value,
    inputValue,
    isIncrementDisabled,
    isDecrementDisabled
  };
}

// node_modules/@mui/base/Unstable_NumberInput/NumberInput.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var useUtilityClasses10 = (ownerState) => {
  const {
    disabled,
    error,
    focused,
    readOnly,
    formControlContext,
    isIncrementDisabled,
    isDecrementDisabled,
    startAdornment,
    endAdornment
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", focused && "focused", readOnly && "readOnly", Boolean(formControlContext) && "formControl", Boolean(startAdornment) && "adornedStart", Boolean(endAdornment) && "adornedEnd"],
    input: ["input", disabled && "disabled", readOnly && "readOnly"],
    incrementButton: ["incrementButton", isIncrementDisabled && "disabled"],
    decrementButton: ["decrementButton", isDecrementDisabled && "disabled"]
  };
  return composeClasses(slots, useClassNamesOverride(getNumberInputUtilityClass));
};
var NumberInput = React54.forwardRef(function NumberInput2(props, forwardedRef) {
  const {
    className,
    defaultValue,
    disabled,
    endAdornment,
    error,
    id,
    max: max2,
    min: min2,
    onBlur,
    onInputChange,
    onFocus,
    onChange,
    placeholder,
    required,
    readOnly = false,
    shiftMultiplier,
    startAdornment,
    step,
    value,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const {
    getRootProps,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    focused,
    error: errorState,
    disabled: disabledState,
    formControlContext,
    isIncrementDisabled,
    isDecrementDisabled
  } = useNumberInput({
    min: min2,
    max: max2,
    step,
    shiftMultiplier,
    defaultValue,
    disabled,
    error,
    onFocus,
    onInputChange,
    onBlur,
    onChange,
    required,
    readOnly,
    value,
    inputId: id,
    componentName: "NumberInput"
  });
  const ownerState = {
    ...props,
    disabled: disabledState,
    error: errorState,
    focused,
    readOnly,
    formControlContext,
    isIncrementDisabled,
    isDecrementDisabled
  };
  const classes = useUtilityClasses10(ownerState);
  const propsForwardedToInputSlot = {
    placeholder
  };
  const Root = slots.root ?? "div";
  const rootProps = useSlotProps_default({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: [classes.root, className]
  });
  const Input3 = slots.input ?? "input";
  const inputProps = useSlotProps_default({
    elementType: Input3,
    getSlotProps: (otherHandlers) => getInputProps({
      ...propsForwardedToInputSlot,
      ...otherHandlers
    }),
    externalSlotProps: slotProps.input,
    ownerState,
    className: classes.input
  });
  const IncrementButton = slots.incrementButton ?? "button";
  const incrementButtonProps = useSlotProps_default({
    elementType: IncrementButton,
    getSlotProps: getIncrementButtonProps,
    externalSlotProps: slotProps.incrementButton,
    ownerState,
    className: classes.incrementButton
  });
  const DecrementButton = slots.decrementButton ?? "button";
  const decrementButtonProps = useSlotProps_default({
    elementType: DecrementButton,
    getSlotProps: getDecrementButtonProps,
    externalSlotProps: slotProps.decrementButton,
    ownerState,
    className: classes.decrementButton
  });
  return (0, import_jsx_runtime17.jsxs)(Root, {
    ...rootProps,
    children: [(0, import_jsx_runtime17.jsx)(DecrementButton, {
      ...decrementButtonProps
    }), (0, import_jsx_runtime17.jsx)(IncrementButton, {
      ...incrementButtonProps
    }), startAdornment, (0, import_jsx_runtime17.jsx)(Input3, {
      ...inputProps
    }), endAdornment]
  });
});
true ? NumberInput.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types18.default.node,
  /**
   * @ignore
   */
  className: import_prop_types18.default.string,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types18.default.number,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: import_prop_types18.default.bool,
  /**
   * Trailing adornment for this input.
   */
  endAdornment: import_prop_types18.default.node,
  /**
   * If `true`, the `input` will indicate an error by setting the `aria-invalid` attribute on the input and the `baseui--error` class on the root element.
   */
  error: import_prop_types18.default.bool,
  /**
   * The id of the `input` element.
   */
  id: import_prop_types18.default.string,
  /**
   * The maximum value.
   */
  max: import_prop_types18.default.number,
  /**
   * The minimum value.
   */
  min: import_prop_types18.default.number,
  /**
   * @ignore
   */
  onBlur: import_prop_types18.default.func,
  /**
   * Callback fired after the value is clamped and changes - when the `input` is blurred or when
   * the stepper buttons are triggered.
   * Called with `undefined` when the value is unset.
   *
   * @param {React.FocusEvent<HTMLInputElement>|React.PointerEvent|React.KeyboardEvent} event The event source of the callback
   * @param {number|undefined} value The new value of the component
   */
  onChange: import_prop_types18.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types18.default.func,
  /**
   * Callback fired when the `input` value changes after each keypress, before clamping is applied.
   * Note that `event.target.value` may contain values that fall outside of `min` and `max` or
   * are otherwise "invalid".
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   */
  onInputChange: import_prop_types18.default.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: import_prop_types18.default.string,
  /**
   * If `true`, the `input` element becomes read-only. The stepper buttons remain active,
   * with the addition that they are now keyboard focusable.
   * @default false
   */
  readOnly: import_prop_types18.default.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types18.default.bool,
  /**
   * Multiplier applied to `step` if the shift key is held while incrementing
   * or decrementing the value. Defaults to `10`.
   */
  shiftMultiplier: import_prop_types18.default.number,
  /**
   * The props used for each slot inside the NumberInput.
   * @default {}
   */
  slotProps: import_prop_types18.default.shape({
    decrementButton: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object]),
    incrementButton: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object]),
    input: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object]),
    root: import_prop_types18.default.oneOfType([import_prop_types18.default.func, import_prop_types18.default.object])
  }),
  /**
   * The components used for each slot inside the InputBase.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types18.default.shape({
    decrementButton: import_prop_types18.default.elementType,
    incrementButton: import_prop_types18.default.elementType,
    input: import_prop_types18.default.elementType,
    root: import_prop_types18.default.elementType
  }),
  /**
   * Leading adornment for this input.
   */
  startAdornment: import_prop_types18.default.node,
  /**
   * The amount that the value changes on each increment or decrement.
   */
  step: import_prop_types18.default.number,
  /**
   * The current value. Use when the component is controlled.
   * @default null
   */
  value: import_prop_types18.default.number
} : void 0;

// node_modules/@mui/base/OptionGroup/OptionGroup.js
var React55 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());

// node_modules/@mui/base/OptionGroup/optionGroupClasses.js
var COMPONENT_NAME11 = "OptionGroup";
function getOptionGroupUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME11, slot);
}
var optionGroupClasses = generateUtilityClasses3(COMPONENT_NAME11, ["root", "disabled", "label", "list"]);

// node_modules/@mui/base/OptionGroup/OptionGroup.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
function useUtilityClasses11(disabled) {
  const slots = {
    root: ["root", disabled && "disabled"],
    label: ["label"],
    list: ["list"]
  };
  return composeClasses(slots, useClassNamesOverride(getOptionGroupUtilityClass));
}
var OptionGroup = React55.forwardRef(function OptionGroup2(props, forwardedRef) {
  const {
    disabled = false,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const Root = (slots == null ? void 0 : slots.root) || "li";
  const Label = (slots == null ? void 0 : slots.label) || "span";
  const List = (slots == null ? void 0 : slots.list) || "ul";
  const classes = useUtilityClasses11(disabled);
  const rootProps = useSlotProps_default({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState: props,
    className: classes.root
  });
  const labelProps = useSlotProps_default({
    elementType: Label,
    externalSlotProps: slotProps.label,
    ownerState: props,
    className: classes.label
  });
  const listProps = useSlotProps_default({
    elementType: List,
    externalSlotProps: slotProps.list,
    ownerState: props,
    className: classes.list
  });
  return (0, import_jsx_runtime18.jsxs)(Root, {
    ...rootProps,
    children: [(0, import_jsx_runtime18.jsx)(Label, {
      ...labelProps,
      children: props.label
    }), (0, import_jsx_runtime18.jsx)(List, {
      ...listProps,
      children: props.children
    })]
  });
});
true ? OptionGroup.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types19.default.node,
  /**
   * @ignore
   */
  className: import_prop_types19.default.string,
  /**
   * If `true` all the options in the group will be disabled.
   * @default false
   */
  disabled: import_prop_types19.default.bool,
  /**
   * The human-readable description of the group.
   */
  label: import_prop_types19.default.node,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: import_prop_types19.default.shape({
    label: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    list: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object]),
    root: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object])
  }),
  /**
   * The components used for each slot inside the OptionGroup.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types19.default.shape({
    label: import_prop_types19.default.elementType,
    list: import_prop_types19.default.elementType,
    root: import_prop_types19.default.elementType
  })
} : void 0;

// node_modules/@mui/base/Option/Option.js
var React58 = __toESM(require_react());
var import_prop_types20 = __toESM(require_prop_types());

// node_modules/@mui/base/Option/optionClasses.js
var COMPONENT_NAME12 = "Option";
function getOptionUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME12, slot);
}
var optionClasses = generateUtilityClasses3(COMPONENT_NAME12, ["root", "disabled", "selected", "highlighted"]);

// node_modules/@mui/base/useOption/useOption.js
var React56 = __toESM(require_react());
function useOption(params) {
  const {
    value,
    label,
    disabled,
    rootRef: optionRefParam,
    id: idParam
  } = params;
  const {
    getRootProps: getListItemProps,
    highlighted,
    selected
  } = useListItem({
    item: value
  });
  const {
    getRootProps: getButtonProps,
    rootRef: buttonRefHandler
  } = useButton({
    disabled,
    focusableWhenDisabled: true
  });
  const id = useId(idParam);
  const optionRef = React56.useRef(null);
  const selectOption = React56.useMemo(() => ({
    disabled,
    label,
    value,
    ref: optionRef,
    id
  }), [disabled, label, value, id]);
  const {
    index: index2
  } = useCompoundItem(value, selectOption);
  const handleRef = useForkRef(optionRefParam, optionRef, buttonRefHandler);
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onKeyDown) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if ([" ", "Enter"].includes(event.key)) {
      event.defaultMuiPrevented = true;
    }
  };
  const getOwnHandlers = (otherHandlers = {}) => ({
    onKeyDown: createHandleKeyDown(otherHandlers)
  });
  return {
    getRootProps: (externalProps = {}) => {
      const externalEventHandlers = extractEventHandlers_default(externalProps);
      const getCombinedRootProps = combineHooksSlotProps(getListItemProps, combineHooksSlotProps(getButtonProps, getOwnHandlers));
      return {
        ...externalProps,
        ...externalEventHandlers,
        ...getCombinedRootProps(externalEventHandlers),
        id,
        ref: handleRef,
        role: "option",
        "aria-selected": selected
      };
    },
    highlighted,
    index: index2,
    selected,
    rootRef: handleRef
  };
}

// node_modules/@mui/base/useOption/useOptionContextStabilizer.js
var React57 = __toESM(require_react());
function useOptionContextStabilizer(value) {
  const listContext = React57.useContext(ListContext);
  if (!listContext) {
    throw new Error("Option: ListContext was not found.");
  }
  const {
    getItemState,
    dispatch
  } = listContext;
  const {
    highlighted,
    selected,
    focusable
  } = getItemState(value);
  const localGetItemState = React57.useCallback((itemValue) => {
    if (itemValue !== value) {
      throw new Error(["Base UI Option: Tried to access the state of another Option.", "This is unsupported when the Option uses the OptionContextStabilizer as a performance optimization."].join("/n"));
    }
    return {
      highlighted,
      selected,
      focusable
    };
  }, [highlighted, selected, focusable, value]);
  const localContextValue = React57.useMemo(() => ({
    dispatch,
    getItemState: localGetItemState
  }), [dispatch, localGetItemState]);
  return {
    contextValue: localContextValue
  };
}

// node_modules/@mui/base/Option/Option.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
function useUtilityClasses12(ownerState) {
  const {
    disabled,
    highlighted,
    selected
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", highlighted && "highlighted", selected && "selected"]
  };
  return composeClasses(slots, useClassNamesOverride(getOptionUtilityClass));
}
var InnerOption = React58.memo(React58.forwardRef(function Option(props, forwardedRef) {
  var _a, _b;
  const {
    children,
    disabled = false,
    label,
    slotProps = {},
    slots = {},
    value,
    ...other
  } = props;
  const Root = slots.root ?? "li";
  const optionRef = React58.useRef(null);
  const combinedRef = useForkRef(optionRef, forwardedRef);
  const computedLabel = label ?? (typeof children === "string" ? children : (_b = (_a = optionRef.current) == null ? void 0 : _a.textContent) == null ? void 0 : _b.trim());
  const {
    getRootProps,
    selected,
    highlighted,
    index: index2
  } = useOption({
    disabled,
    label: computedLabel,
    rootRef: combinedRef,
    value
  });
  const ownerState = {
    ...props,
    disabled,
    highlighted,
    index: index2,
    selected
  };
  const classes = useUtilityClasses12(ownerState);
  const rootProps = useSlotProps_default({
    getSlotProps: getRootProps,
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime19.jsx)(Root, {
    ...rootProps,
    children
  });
}));
var Option2 = React58.forwardRef(function Option3(props, ref) {
  const {
    value
  } = props;
  const {
    contextValue
  } = useOptionContextStabilizer(value);
  return (0, import_jsx_runtime19.jsx)(ListContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime19.jsx)(InnerOption, {
      ...props,
      ref
    })
  });
});
true ? Option2.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types20.default.node,
  /**
   * @ignore
   */
  className: import_prop_types20.default.string,
  /**
   * If `true`, the option will be disabled.
   * @default false
   */
  disabled: import_prop_types20.default.bool,
  /**
   * A text representation of the option's content.
   * Used for keyboard text navigation matching.
   */
  label: import_prop_types20.default.string,
  /**
   * The props used for each slot inside the Option.
   * @default {}
   */
  slotProps: import_prop_types20.default.shape({
    root: import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.object])
  }),
  /**
   * The components used for each slot inside the Option.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types20.default.shape({
    root: import_prop_types20.default.elementType
  }),
  /**
   * The value of the option.
   */
  value: import_prop_types20.default.any.isRequired
} : void 0;

// node_modules/@mui/base/Popper/Popper.js
var React59 = __toESM(require_react());
var import_prop_types21 = __toESM(require_prop_types());

// node_modules/@mui/base/Popper/popperClasses.js
var COMPONENT_NAME13 = "Popper";
function getPopperUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME13, slot);
}
var popperClasses = generateUtilityClasses3(COMPONENT_NAME13, ["root"]);

// node_modules/@mui/base/Popper/Popper.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
function flipPlacement(placement, direction) {
  if (direction === "ltr") {
    return placement;
  }
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
function isHTMLElement2(element) {
  return element.nodeType !== void 0;
}
function isVirtualElement(element) {
  return !isHTMLElement2(element);
}
var useUtilityClasses13 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, useClassNamesOverride(getPopperUtilityClass));
};
var defaultPopperOptions = {};
var PopperTooltip = React59.forwardRef(function PopperTooltip2(props, forwardedRef) {
  const {
    anchorEl,
    children,
    direction,
    disablePortal,
    modifiers,
    open,
    placement: initialPlacement,
    popperOptions,
    popperRef: popperRefProp,
    slotProps = {},
    slots = {},
    TransitionProps,
    // @ts-ignore internal logic
    ownerState: ownerStateProp,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...other
  } = props;
  const tooltipRef = React59.useRef(null);
  const ownRef = useForkRef(tooltipRef, forwardedRef);
  const popperRef = React59.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = React59.useRef(handlePopperRef);
  useEnhancedEffect_default(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React59.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  const [placement, setPlacement] = React59.useState(rtlPlacement);
  const [resolvedAnchorElement, setResolvedAnchorElement] = React59.useState(resolveAnchorEl(anchorEl));
  React59.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  React59.useEffect(() => {
    if (anchorEl) {
      setResolvedAnchorElement(resolveAnchorEl(anchorEl));
    }
  }, [anchorEl]);
  useEnhancedEffect_default(() => {
    if (!resolvedAnchorElement || !open) {
      return void 0;
    }
    const handlePopperUpdate = (data) => {
      setPlacement(data.placement);
    };
    if (true) {
      if (resolvedAnchorElement && isHTMLElement2(resolvedAnchorElement) && resolvedAnchorElement.nodeType === 1) {
        const box = resolvedAnchorElement.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      }
    }
    let popperModifiers = [{
      name: "preventOverflow",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "flip",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "onUpdate",
      enabled: true,
      phase: "afterWrite",
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }
    const popper = createPopper(resolvedAnchorElement, tooltipRef.current, {
      placement: rtlPlacement,
      ...popperOptions,
      modifiers: popperModifiers
    });
    handlePopperRefRef.current(popper);
    return () => {
      popper.destroy();
      handlePopperRefRef.current(null);
    };
  }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement
  };
  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }
  const classes = useUtilityClasses13();
  const Root = slots.root ?? "div";
  const rootProps = useSlotProps_default({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tooltip",
      ref: ownRef
    },
    ownerState: props,
    className: classes.root
  });
  return (0, import_jsx_runtime20.jsx)(Root, {
    ...rootProps,
    children: typeof children === "function" ? children(childProps) : children
  });
});
var Popper = React59.forwardRef(function Popper2(props, forwardedRef) {
  const {
    anchorEl,
    children,
    container: containerProp,
    direction = "ltr",
    disablePortal = false,
    keepMounted = false,
    modifiers,
    open,
    placement = "bottom",
    popperOptions = defaultPopperOptions,
    popperRef,
    style,
    transition = false,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const [exited, setExited] = React59.useState(true);
  const handleEnter = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }
  let container;
  if (containerProp) {
    container = containerProp;
  } else if (anchorEl) {
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    container = resolvedAnchorEl && isHTMLElement2(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
  }
  const display = !open && keepMounted && (!transition || exited) ? "none" : void 0;
  const transitionProps = transition ? {
    in: open,
    onEnter: handleEnter,
    onExited: handleExited
  } : void 0;
  return (0, import_jsx_runtime20.jsx)(Portal, {
    disablePortal,
    container,
    children: (0, import_jsx_runtime20.jsx)(PopperTooltip, {
      anchorEl,
      direction,
      disablePortal,
      modifiers,
      ref: forwardedRef,
      open: transition ? !exited : open,
      placement,
      popperOptions,
      popperRef,
      slotProps,
      slots,
      ...other,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display,
        ...style
      },
      TransitionProps: transitionProps,
      children
    })
  });
});
true ? Popper.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: chainPropTypes2(import_prop_types21.default.oneOfType([HTMLElementType, import_prop_types21.default.object, import_prop_types21.default.func]), (props) => {
    if (props.open) {
      const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && isHTMLElement2(resolvedAnchorEl) && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.getBoundingClientRect !== "function" || isVirtualElement(resolvedAnchorEl) && resolvedAnchorEl.contextElement != null && resolvedAnchorEl.contextElement.nodeType !== 1) {
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join("\n"));
      }
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: import_prop_types21.default.oneOfType([import_prop_types21.default.node, import_prop_types21.default.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types21.default.oneOfType([HTMLElementType, import_prop_types21.default.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: import_prop_types21.default.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types21.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types21.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types21.default.arrayOf(import_prop_types21.default.shape({
    data: import_prop_types21.default.object,
    effect: import_prop_types21.default.func,
    enabled: import_prop_types21.default.bool,
    fn: import_prop_types21.default.func,
    name: import_prop_types21.default.any,
    options: import_prop_types21.default.object,
    phase: import_prop_types21.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types21.default.arrayOf(import_prop_types21.default.string),
    requiresIfExists: import_prop_types21.default.arrayOf(import_prop_types21.default.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types21.default.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: import_prop_types21.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: import_prop_types21.default.shape({
    modifiers: import_prop_types21.default.array,
    onFirstUpdate: import_prop_types21.default.func,
    placement: import_prop_types21.default.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: import_prop_types21.default.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType_default,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: import_prop_types21.default.shape({
    root: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types21.default.shape({
    root: import_prop_types21.default.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: import_prop_types21.default.bool
} : void 0;

// node_modules/@mui/base/Select/Select.js
var React62 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());

// node_modules/@mui/base/useSelect/useSelect.js
var React60 = __toESM(require_react());

// node_modules/@mui/base/useSelect/useSelect.types.js
var SelectActionTypes = {
  buttonClick: "buttonClick",
  browserAutoFill: "browserAutoFill"
};

// node_modules/@mui/base/useSelect/defaultOptionStringifier.js
var defaultOptionStringifier = (option) => {
  const {
    label,
    value
  } = option;
  if (typeof label === "string") {
    return label;
  }
  if (typeof value === "string") {
    return value;
  }
  return String(option);
};

// node_modules/@mui/base/useSelect/selectReducer.js
function selectReducer(state, action) {
  const {
    open
  } = state;
  const {
    context: {
      selectionMode
    }
  } = action;
  if (action.type === SelectActionTypes.buttonClick) {
    const itemToHighlight = state.selectedValues[0] ?? moveHighlight(null, "start", action.context);
    return {
      ...state,
      open: !open,
      highlightedValue: !open ? itemToHighlight : null
    };
  }
  if (action.type === SelectActionTypes.browserAutoFill) {
    return handleItemSelection(action.item, state, action.context);
  }
  const newState = listReducer(state, action);
  switch (action.type) {
    case ListActionTypes.keyDown:
      if (state.open) {
        if (action.event.key === "Escape") {
          return {
            ...newState,
            open: false
          };
        }
      } else {
        if (action.event.key === "ArrowDown") {
          return {
            ...state,
            open: true,
            highlightedValue: state.selectedValues[0] ?? moveHighlight(null, "start", action.context)
          };
        }
        if (action.event.key === "ArrowUp") {
          return {
            ...state,
            open: true,
            highlightedValue: state.selectedValues[0] ?? moveHighlight(null, "end", action.context)
          };
        }
      }
      break;
    case ListActionTypes.itemClick:
      if (selectionMode === "single") {
        return {
          ...newState,
          open: false
        };
      }
      break;
    case ListActionTypes.blur:
      return {
        ...newState,
        open: false
      };
    default:
      return newState;
  }
  return newState;
}

// node_modules/@mui/base/useSelect/useSelect.js
function defaultFormValueProvider(selectedOption) {
  if (Array.isArray(selectedOption)) {
    if (selectedOption.length === 0) {
      return "";
    }
    return JSON.stringify(selectedOption.map((o) => o.value));
  }
  if ((selectedOption == null ? void 0 : selectedOption.value) == null) {
    return "";
  }
  if (typeof selectedOption.value === "string" || typeof selectedOption.value === "number") {
    return selectedOption.value;
  }
  return JSON.stringify(selectedOption.value);
}
function useSelect(props) {
  const {
    areOptionsEqual,
    buttonRef: buttonRefProp,
    defaultOpen = false,
    defaultValue: defaultValueProp,
    disabled = false,
    listboxId: listboxIdProp,
    listboxRef: listboxRefProp,
    multiple = false,
    name,
    required,
    onChange,
    onHighlightChange,
    onOpenChange,
    open: openProp,
    options: optionsParam,
    getOptionAsString = defaultOptionStringifier,
    getSerializedValue = defaultFormValueProvider,
    value: valueProp,
    componentName = "useSelect"
  } = props;
  const buttonRef = React60.useRef(null);
  const handleButtonRef = useForkRef(buttonRefProp, buttonRef);
  const listboxRef = React60.useRef(null);
  const listboxId = useId(listboxIdProp);
  let defaultValue;
  if (valueProp === void 0 && defaultValueProp === void 0) {
    defaultValue = [];
  } else if (defaultValueProp !== void 0) {
    if (multiple) {
      defaultValue = defaultValueProp;
    } else {
      defaultValue = defaultValueProp == null ? [] : [defaultValueProp];
    }
  }
  const value = React60.useMemo(() => {
    if (valueProp !== void 0) {
      if (multiple) {
        return valueProp;
      }
      return valueProp == null ? [] : [valueProp];
    }
    return void 0;
  }, [valueProp, multiple]);
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const options = React60.useMemo(() => {
    if (optionsParam != null) {
      return new Map(optionsParam.map((option, index2) => [option.value, {
        value: option.value,
        label: option.label,
        disabled: option.disabled,
        ref: React60.createRef(),
        id: `${listboxId}_${index2}`
      }]));
    }
    return subitems;
  }, [optionsParam, subitems, listboxId]);
  const handleListboxRef = useForkRef(listboxRefProp, listboxRef);
  const {
    getRootProps: getButtonRootProps,
    active: buttonActive,
    focusVisible: buttonFocusVisible,
    rootRef: mergedButtonRef
  } = useButton({
    disabled,
    rootRef: handleButtonRef
  });
  const optionValues = React60.useMemo(() => Array.from(options.keys()), [options]);
  const getOptionByValue = React60.useCallback((valueToGet) => {
    if (areOptionsEqual !== void 0) {
      const similarValue = optionValues.find((optionValue) => areOptionsEqual(optionValue, valueToGet));
      return options.get(similarValue);
    }
    return options.get(valueToGet);
  }, [options, areOptionsEqual, optionValues]);
  const isItemDisabled = React60.useCallback((valueToCheck) => {
    const option = getOptionByValue(valueToCheck);
    return (option == null ? void 0 : option.disabled) ?? false;
  }, [getOptionByValue]);
  const stringifyOption = React60.useCallback((valueToCheck) => {
    const option = getOptionByValue(valueToCheck);
    if (!option) {
      return "";
    }
    return getOptionAsString(option);
  }, [getOptionByValue, getOptionAsString]);
  const controlledState = React60.useMemo(() => ({
    selectedValues: value,
    open: openProp
  }), [value, openProp]);
  const getItemId = React60.useCallback((itemValue) => {
    var _a;
    return (_a = options.get(itemValue)) == null ? void 0 : _a.id;
  }, [options]);
  const handleSelectionChange = React60.useCallback((event, newValues) => {
    if (multiple) {
      onChange == null ? void 0 : onChange(event, newValues);
    } else {
      onChange == null ? void 0 : onChange(event, newValues[0] ?? null);
    }
  }, [multiple, onChange]);
  const handleHighlightChange = React60.useCallback((event, newValue) => {
    onHighlightChange == null ? void 0 : onHighlightChange(event, newValue ?? null);
  }, [onHighlightChange]);
  const handleStateChange = React60.useCallback((event, field, fieldValue) => {
    var _a;
    if (field === "open") {
      onOpenChange == null ? void 0 : onOpenChange(fieldValue);
      if (fieldValue === false && (event == null ? void 0 : event.type) !== "blur") {
        (_a = buttonRef.current) == null ? void 0 : _a.focus();
      }
    }
  }, [onOpenChange]);
  const getItemDomElement = React60.useCallback((itemId) => {
    var _a;
    if (itemId == null) {
      return null;
    }
    return ((_a = subitems.get(itemId)) == null ? void 0 : _a.ref.current) ?? null;
  }, [subitems]);
  const useListParameters = {
    getInitialState: () => ({
      highlightedValue: null,
      selectedValues: defaultValue ?? [],
      open: defaultOpen
    }),
    getItemId,
    controlledProps: controlledState,
    focusManagement: "DOM",
    getItemDomElement,
    itemComparer: areOptionsEqual,
    isItemDisabled,
    rootRef: handleListboxRef,
    onChange: handleSelectionChange,
    onHighlightChange: handleHighlightChange,
    onStateChange: handleStateChange,
    reducerActionContext: React60.useMemo(() => ({
      multiple
    }), [multiple]),
    items: optionValues,
    getItemAsString: stringifyOption,
    selectionMode: multiple ? "multiple" : "single",
    stateReducer: selectReducer,
    componentName
  };
  const {
    dispatch,
    getRootProps: getListboxRootProps,
    contextValue: listContextValue,
    state: {
      open,
      highlightedValue: highlightedOption,
      selectedValues: selectedOptions
    },
    rootRef: mergedListRootRef
  } = useList(useListParameters);
  const isInitiallyOpen = React60.useRef(open);
  useEnhancedEffect_default(() => {
    var _a;
    if (open && highlightedOption !== null) {
      const optionRef = (_a = getOptionByValue(highlightedOption)) == null ? void 0 : _a.ref;
      if (!listboxRef.current || !(optionRef == null ? void 0 : optionRef.current)) {
        return;
      }
      if (!isInitiallyOpen.current) {
        optionRef.current.focus({
          preventScroll: true
        });
      }
      const listboxClientRect = listboxRef.current.getBoundingClientRect();
      const optionClientRect = optionRef.current.getBoundingClientRect();
      if (optionClientRect.top < listboxClientRect.top) {
        listboxRef.current.scrollTop -= listboxClientRect.top - optionClientRect.top;
      } else if (optionClientRect.bottom > listboxClientRect.bottom) {
        listboxRef.current.scrollTop += optionClientRect.bottom - listboxClientRect.bottom;
      }
    }
  }, [open, highlightedOption, getOptionByValue]);
  const getOptionMetadata = React60.useCallback((optionValue) => getOptionByValue(optionValue), [getOptionByValue]);
  const createHandleButtonClick = (externalEventHandlers) => (event) => {
    var _a;
    (_a = externalEventHandlers == null ? void 0 : externalEventHandlers.onClick) == null ? void 0 : _a.call(externalEventHandlers, event);
    if (!event.defaultMuiPrevented) {
      const action = {
        type: SelectActionTypes.buttonClick,
        event
      };
      dispatch(action);
    }
  };
  const createHandleButtonKeyDown = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onKeyDown) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      dispatch({
        type: ListActionTypes.keyDown,
        key: event.key,
        event
      });
    }
  };
  const getButtonOwnRootProps = (otherHandlers = {}) => ({
    onClick: createHandleButtonClick(otherHandlers),
    onKeyDown: createHandleButtonKeyDown(otherHandlers)
  });
  const getSelectTriggerProps = (otherHandlers = {}) => {
    return {
      ...otherHandlers,
      ...getButtonOwnRootProps(otherHandlers),
      role: "combobox",
      "aria-expanded": open,
      "aria-controls": listboxId
    };
  };
  const getButtonProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers_default(externalProps);
    const combinedProps = combineHooksSlotProps(getSelectTriggerProps, getButtonRootProps);
    return {
      ...externalProps,
      ...combinedProps(externalEventHandlers)
    };
  };
  const createListboxHandleBlur = (otherHandlers) => (event) => {
    var _a, _b;
    (_a = otherHandlers.onBlur) == null ? void 0 : _a.call(otherHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    if (((_b = listboxRef.current) == null ? void 0 : _b.contains(event.relatedTarget)) || event.relatedTarget === buttonRef.current) {
      event.defaultMuiPrevented = true;
    }
  };
  const getOwnListboxHandlers = (otherHandlers = {}) => ({
    onBlur: createListboxHandleBlur(otherHandlers)
  });
  const getListboxProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers_default(externalProps);
    const getCombinedRootProps = combineHooksSlotProps(getOwnListboxHandlers, getListboxRootProps);
    return {
      id: listboxId,
      role: "listbox",
      "aria-multiselectable": multiple ? "true" : void 0,
      ...externalProps,
      ...getCombinedRootProps(externalEventHandlers)
    };
  };
  React60.useDebugValue({
    selectedOptions,
    highlightedOption,
    open
  });
  const contextValue = React60.useMemo(() => ({
    ...listContextValue,
    ...compoundComponentContextValue
  }), [listContextValue, compoundComponentContextValue]);
  let selectValue;
  if (props.multiple) {
    selectValue = selectedOptions;
  } else {
    selectValue = selectedOptions.length > 0 ? selectedOptions[0] : null;
  }
  let selectedOptionsMetadata;
  if (multiple) {
    selectedOptionsMetadata = selectValue.map((v) => getOptionMetadata(v)).filter((o) => o !== void 0);
  } else {
    selectedOptionsMetadata = getOptionMetadata(selectValue) ?? null;
  }
  const createHandleHiddenInputChange = (externalEventHandlers) => (event) => {
    var _a;
    (_a = externalEventHandlers == null ? void 0 : externalEventHandlers.onChange) == null ? void 0 : _a.call(externalEventHandlers, event);
    if (event.defaultMuiPrevented) {
      return;
    }
    const option = options.get(event.target.value);
    if (event.target.value === "") {
      dispatch({
        type: ListActionTypes.clearSelection
      });
    } else if (option !== void 0) {
      dispatch({
        type: SelectActionTypes.browserAutoFill,
        item: option.value,
        event
      });
    }
  };
  const getHiddenInputProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers_default(externalProps);
    return {
      name,
      tabIndex: -1,
      "aria-hidden": true,
      required: required ? true : void 0,
      value: getSerializedValue(selectedOptionsMetadata),
      style: visuallyHidden_default,
      ...externalProps,
      onChange: createHandleHiddenInputChange(externalEventHandlers)
    };
  };
  return {
    buttonActive,
    buttonFocusVisible,
    buttonRef: mergedButtonRef,
    contextValue,
    disabled,
    dispatch,
    getButtonProps,
    getHiddenInputProps,
    getListboxProps,
    getOptionMetadata,
    listboxRef: mergedListRootRef,
    open,
    options: optionValues,
    value: selectValue,
    highlightedOption
  };
}

// node_modules/@mui/base/useSelect/SelectProvider.js
var React61 = __toESM(require_react());
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
function SelectProvider(props) {
  const {
    value,
    children
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = React61.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex
  }), [dispatch, getItemIndex, getItemState]);
  const compoundComponentContextValue = React61.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return (0, import_jsx_runtime21.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: (0, import_jsx_runtime21.jsx)(ListContext.Provider, {
      value: listContextValue,
      children
    })
  });
}

// node_modules/@mui/base/Select/selectClasses.js
var COMPONENT_NAME14 = "Select";
function getSelectUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME14, slot);
}
var selectClasses = generateUtilityClasses3(COMPONENT_NAME14, ["root", "button", "listbox", "popup", "active", "expanded", "disabled", "focusVisible"]);

// node_modules/@mui/base/Select/Select.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var _span;
function defaultRenderValue(selectedOptions) {
  if (Array.isArray(selectedOptions)) {
    return (0, import_jsx_runtime22.jsx)(React62.Fragment, {
      children: selectedOptions.map((o) => o.label).join(", ")
    });
  }
  return (selectedOptions == null ? void 0 : selectedOptions.label) ?? null;
}
function useUtilityClasses14(ownerState) {
  const {
    active,
    disabled,
    open,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", active && "active", open && "expanded"],
    listbox: ["listbox", disabled && "disabled"],
    popup: ["popup"]
  };
  return composeClasses(slots, useClassNamesOverride(getSelectUtilityClass));
}
var Select = React62.forwardRef(function Select2(props, forwardedRef) {
  const {
    areOptionsEqual,
    autoComplete,
    autoFocus,
    children,
    defaultValue,
    defaultListboxOpen = false,
    disabled: disabledProp,
    getSerializedValue,
    listboxId,
    listboxOpen: listboxOpenProp,
    multiple = false,
    name,
    required = false,
    onChange,
    onListboxOpenChange,
    getOptionAsString = defaultOptionStringifier,
    renderValue: renderValueProp,
    placeholder,
    slotProps = {},
    slots = {},
    value: valueProp,
    ...other
  } = props;
  const renderValue = renderValueProp ?? defaultRenderValue;
  const [buttonDefined, setButtonDefined] = React62.useState(false);
  const buttonRef = React62.useRef(null);
  const listboxRef = React62.useRef(null);
  const Button3 = slots.root ?? "button";
  const ListboxRoot = slots.listbox ?? "ul";
  const PopupComponent = slots.popup ?? "div";
  const handleButtonRefChange = React62.useCallback((element) => {
    setButtonDefined(element != null);
  }, []);
  const handleButtonRef = useForkRef(forwardedRef, buttonRef, handleButtonRefChange);
  React62.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);
  const {
    buttonActive,
    buttonFocusVisible,
    contextValue,
    disabled,
    getButtonProps,
    getListboxProps,
    getHiddenInputProps,
    getOptionMetadata,
    value,
    open
  } = useSelect({
    name,
    required,
    getSerializedValue,
    areOptionsEqual,
    buttonRef: handleButtonRef,
    defaultOpen: defaultListboxOpen,
    defaultValue,
    disabled: disabledProp,
    listboxId,
    multiple,
    open: listboxOpenProp,
    onChange,
    onOpenChange: onListboxOpenChange,
    getOptionAsString,
    value: valueProp,
    componentName: "Select"
  });
  const ownerState = {
    ...props,
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open,
    multiple,
    renderValue,
    value
  };
  const classes = useUtilityClasses14(ownerState);
  const buttonProps = useSlotProps_default({
    elementType: Button3,
    getSlotProps: getButtonProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  const listboxProps = useSlotProps_default({
    elementType: ListboxRoot,
    getSlotProps: getListboxProps,
    externalSlotProps: slotProps.listbox,
    additionalProps: {
      ref: listboxRef
    },
    ownerState,
    className: classes.listbox
  });
  const popupProps = useSlotProps_default({
    elementType: PopupComponent,
    externalSlotProps: slotProps.popup,
    additionalProps: {
      anchor: buttonRef.current,
      keepMounted: true,
      open,
      placement: "bottom-start",
      role: void 0
    },
    ownerState,
    className: classes.popup
  });
  let selectedOptionsMetadata;
  if (multiple) {
    selectedOptionsMetadata = value.map((v) => getOptionMetadata(v)).filter((o) => o !== void 0);
  } else {
    selectedOptionsMetadata = getOptionMetadata(value) ?? null;
  }
  return (0, import_jsx_runtime22.jsxs)(React62.Fragment, {
    children: [(0, import_jsx_runtime22.jsx)(Button3, {
      ...buttonProps,
      children: renderValue(selectedOptionsMetadata) ?? placeholder ?? // fall back to a zero-width space to prevent layout shift
      // from https://github.com/mui/material-ui/pull/24563
      (_span || (_span = (0, import_jsx_runtime22.jsx)("span", {
        className: "notranslate",
        children: "​"
      })))
    }), buttonDefined && (0, import_jsx_runtime22.jsx)(Popup, {
      slots: {
        root: PopupComponent
      },
      ...popupProps,
      children: (0, import_jsx_runtime22.jsx)(ListboxRoot, {
        ...listboxProps,
        children: (0, import_jsx_runtime22.jsx)(SelectProvider, {
          value: contextValue,
          children
        })
      })
    }), (0, import_jsx_runtime22.jsx)("input", {
      ...getHiddenInputProps(),
      autoComplete
    })]
  });
});
true ? Select.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A function used to determine if two options' values are equal.
   * By default, reference equality is used.
   *
   * There is a performance impact when using the `areOptionsEqual` prop (proportional to the number of options).
   * Therefore, it's recommented to use the default reference equality comparison whenever possible.
   */
  areOptionsEqual: import_prop_types22.default.func,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: import_prop_types22.default.string,
  /**
   * If `true`, the select element is focused during the first mount
   * @default false
   */
  autoFocus: import_prop_types22.default.bool,
  /**
   * @ignore
   */
  children: import_prop_types22.default.node,
  /**
   * @ignore
   */
  className: import_prop_types22.default.string,
  /**
   * If `true`, the select will be initially open.
   * @default false
   */
  defaultListboxOpen: import_prop_types22.default.bool,
  /**
   * The default selected value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types22.default.any,
  /**
   * If `true`, the select is disabled.
   * @default false
   */
  disabled: import_prop_types22.default.bool,
  /**
   * A function used to convert the option label to a string.
   * It's useful when labels are elements and need to be converted to plain text
   * to enable navigation using character keys on a keyboard.
   *
   * @default defaultOptionStringifier
   */
  getOptionAsString: import_prop_types22.default.func,
  /**
   * A function to convert the currently selected value to a string.
   * Used to set a value of a hidden input associated with the select,
   * so that the selected value can be posted with a form.
   */
  getSerializedValue: import_prop_types22.default.func,
  /**
   * `id` attribute of the listbox element.
   */
  listboxId: import_prop_types22.default.string,
  /**
   * Controls the open state of the select's listbox.
   * @default undefined
   */
  listboxOpen: import_prop_types22.default.bool,
  /**
   * If `true`, selecting multiple values is allowed.
   * This affects the type of the `value`, `defaultValue`, and `onChange` props.
   *
   * @default false
   */
  multiple: import_prop_types22.default.bool,
  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   */
  name: import_prop_types22.default.string,
  /**
   * Callback fired when an option is selected.
   */
  onChange: import_prop_types22.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see listboxOpen).
   */
  onListboxOpenChange: import_prop_types22.default.func,
  /**
   * Text to show when there is no selected value.
   */
  placeholder: import_prop_types22.default.node,
  /**
   * Function that customizes the rendering of the selected value.
   */
  renderValue: import_prop_types22.default.func,
  /**
   * If `true`, the Select cannot be empty when submitting form.
   * @default false
   */
  required: import_prop_types22.default.bool,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: import_prop_types22.default.shape({
    listbox: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object]),
    popup: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object]),
    root: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object])
  }),
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types22.default.shape({
    listbox: import_prop_types22.default.elementType,
    popup: import_prop_types22.default.elementType,
    root: import_prop_types22.default.elementType
  }),
  /**
   * The selected value.
   * Set to `null` to deselect all options.
   */
  value: import_prop_types22.default.any
} : void 0;

// node_modules/@mui/base/Slider/Slider.js
var React64 = __toESM(require_react());
var import_prop_types23 = __toESM(require_prop_types());
init_clsx();

// node_modules/@mui/base/Slider/sliderClasses.js
var COMPONENT_NAME15 = "Slider";
function getSliderUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME15, slot);
}
var sliderClasses = generateUtilityClasses3(COMPONENT_NAME15, ["root", "active", "focusVisible", "disabled", "dragging", "marked", "vertical", "trackInverted", "trackFalse", "rail", "track", "mark", "markActive", "markLabel", "markLabelActive", "thumb"]);

// node_modules/@mui/base/useSlider/useSlider.js
var React63 = __toESM(require_react());
var INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
function asc(a, b) {
  return a - b;
}
function findClosest(values, currentValue) {
  const {
    index: closestIndex
  } = values.reduce((acc, value, index2) => {
    const distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index: index2
      };
    }
    return acc;
  }, null) ?? {};
  return closestIndex;
}
function trackFinger(event, touchId) {
  if (touchId.current !== void 0 && event.changedTouches) {
    const touchEvent = event;
    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];
      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function valueToPercent(value, min2, max2) {
  return (value - min2) * 100 / (max2 - min2);
}
function percentToValue(percent, min2, max2) {
  return (max2 - min2) * percent + min2;
}
function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split("e-");
    const matissaDecimalPart = parts[0].split(".")[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min2) {
  const nearest = Math.round((value - min2) / step) * step + min2;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function setValueIndex({
  values,
  newValue,
  index: index2
}) {
  const output = values.slice();
  output[index2] = newValue;
  return output.sort(asc);
}
function focusThumb({
  sliderRef,
  activeIndex,
  setActive
}) {
  var _a, _b, _c;
  const doc = ownerDocument(sliderRef.current);
  if (!((_a = sliderRef.current) == null ? void 0 : _a.contains(doc.activeElement)) || Number((_b = doc == null ? void 0 : doc.activeElement) == null ? void 0 : _b.getAttribute("data-index")) !== activeIndex) {
    (_c = sliderRef.current) == null ? void 0 : _c.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
  }
  if (setActive) {
    setActive(activeIndex);
  }
}
function areValuesEqual(newValue, oldValue) {
  if (typeof newValue === "number" && typeof oldValue === "number") {
    return newValue === oldValue;
  }
  if (typeof newValue === "object" && typeof oldValue === "object") {
    return areArraysEqual(newValue, oldValue);
  }
  return false;
}
var axisProps = {
  horizontal: {
    offset: (percent) => ({
      left: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  "horizontal-reverse": {
    offset: (percent) => ({
      right: `${percent}%`
    }),
    leap: (percent) => ({
      width: `${percent}%`
    })
  },
  vertical: {
    offset: (percent) => ({
      bottom: `${percent}%`
    }),
    leap: (percent) => ({
      height: `${percent}%`
    })
  }
};
var Identity = (x) => x;
var cachedSupportsTouchActionNone;
function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === void 0) {
    if (typeof CSS !== "undefined" && typeof CSS.supports === "function") {
      cachedSupportsTouchActionNone = CSS.supports("touch-action", "none");
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }
  return cachedSupportsTouchActionNone;
}
function useSlider(parameters) {
  const {
    "aria-labelledby": ariaLabelledby,
    defaultValue,
    disabled = false,
    disableSwap = false,
    isRtl = false,
    marks: marksProp = false,
    max: max2 = 100,
    min: min2 = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = "horizontal",
    rootRef: ref,
    scale = Identity,
    step = 1,
    shiftStep = 10,
    tabIndex,
    value: valueProp
  } = parameters;
  const touchId = React63.useRef(void 0);
  const [active, setActive] = React63.useState(-1);
  const [open, setOpen] = React63.useState(-1);
  const [dragging, setDragging] = React63.useState(false);
  const moveCount = React63.useRef(0);
  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue ?? min2,
    name: "Slider"
  });
  const handleChange = onChange && ((event, value, thumbIndex) => {
    const nativeEvent = event.nativeEvent || event;
    const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
    Object.defineProperty(clonedEvent, "target", {
      writable: true,
      value: {
        value,
        name
      }
    });
    onChange(clonedEvent, value, thumbIndex);
  });
  const range = Array.isArray(valueDerived);
  let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map((value) => value == null ? min2 : clamp_default(value, min2, max2));
  const marks = marksProp === true && step !== null ? [...Array(Math.floor((max2 - min2) / step) + 1)].map((_, index2) => ({
    value: min2 + step * index2
  })) : marksProp || [];
  const marksValues = marks.map((mark) => mark.value);
  const [focusedThumbIndex, setFocusedThumbIndex] = React63.useState(-1);
  const sliderRef = React63.useRef(null);
  const handleRef = useForkRef(ref, sliderRef);
  const createHandleHiddenInputFocus = (otherHandlers) => (event) => {
    var _a;
    const index2 = Number(event.currentTarget.getAttribute("data-index"));
    if (isFocusVisible(event.target)) {
      setFocusedThumbIndex(index2);
    }
    setOpen(index2);
    (_a = otherHandlers == null ? void 0 : otherHandlers.onFocus) == null ? void 0 : _a.call(otherHandlers, event);
  };
  const createHandleHiddenInputBlur = (otherHandlers) => (event) => {
    var _a;
    if (!isFocusVisible(event.target)) {
      setFocusedThumbIndex(-1);
    }
    setOpen(-1);
    (_a = otherHandlers == null ? void 0 : otherHandlers.onBlur) == null ? void 0 : _a.call(otherHandlers, event);
  };
  const changeValue = (event, valueInput) => {
    const index2 = Number(event.currentTarget.getAttribute("data-index"));
    const value = values[index2];
    const marksIndex = marksValues.indexOf(value);
    let newValue = valueInput;
    if (marks && step == null) {
      const maxMarksValue = marksValues[marksValues.length - 1];
      if (newValue > maxMarksValue) {
        newValue = maxMarksValue;
      } else if (newValue < marksValues[0]) {
        newValue = marksValues[0];
      } else {
        newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
      }
    }
    newValue = clamp_default(newValue, min2, max2);
    if (range) {
      if (disableSwap) {
        newValue = clamp_default(newValue, values[index2 - 1] || -Infinity, values[index2 + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index: index2
      });
      let activeIndex = index2;
      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }
      focusThumb({
        sliderRef,
        activeIndex
      });
    }
    setValueState(newValue);
    setFocusedThumbIndex(index2);
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(event, newValue, index2);
    }
    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  };
  const createHandleHiddenInputKeyDown = (otherHandlers) => (event) => {
    var _a;
    if (step !== null) {
      const index2 = Number(event.currentTarget.getAttribute("data-index"));
      const value = values[index2];
      let newValue = null;
      if ((event.key === "ArrowLeft" || event.key === "ArrowDown") && event.shiftKey || event.key === "PageDown") {
        newValue = Math.max(value - shiftStep, min2);
      } else if ((event.key === "ArrowRight" || event.key === "ArrowUp") && event.shiftKey || event.key === "PageUp") {
        newValue = Math.min(value + shiftStep, max2);
      }
      if (newValue !== null) {
        changeValue(event, newValue);
        event.preventDefault();
      }
    }
    (_a = otherHandlers == null ? void 0 : otherHandlers.onKeyDown) == null ? void 0 : _a.call(otherHandlers, event);
  };
  useEnhancedEffect_default(() => {
    var _a;
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      (_a = document.activeElement) == null ? void 0 : _a.blur();
    }
  }, [disabled]);
  if (disabled && active !== -1) {
    setActive(-1);
  }
  if (disabled && focusedThumbIndex !== -1) {
    setFocusedThumbIndex(-1);
  }
  const createHandleHiddenInputChange = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onChange) == null ? void 0 : _a.call(otherHandlers, event);
    changeValue(event, event.target.valueAsNumber);
  };
  const previousIndex = React63.useRef(void 0);
  let axis = orientation;
  if (isRtl && orientation === "horizontal") {
    axis += "-reverse";
  }
  const getFingerNewValue = ({
    finger,
    move = false
  }) => {
    const {
      current: slider
    } = sliderRef;
    const {
      width,
      height,
      bottom,
      left
    } = slider.getBoundingClientRect();
    let percent;
    if (axis.startsWith("vertical")) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }
    if (axis.indexOf("-reverse") !== -1) {
      percent = 1 - percent;
    }
    let newValue;
    newValue = percentToValue(percent, min2, max2);
    if (step) {
      newValue = roundValueToStep(newValue, step, min2);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp_default(newValue, min2, max2);
    let activeIndex = 0;
    if (range) {
      if (!move) {
        activeIndex = findClosest(values, newValue);
      } else {
        activeIndex = previousIndex.current;
      }
      if (disableSwap) {
        newValue = clamp_default(newValue, values[activeIndex - 1] || -Infinity, values[activeIndex + 1] || Infinity);
      }
      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index: activeIndex
      });
      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }
    return {
      newValue,
      activeIndex
    };
  };
  const handleTouchMove = useEventCallback_default((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    if (!finger) {
      return;
    }
    moveCount.current += 1;
    if (nativeEvent.type === "mousemove" && nativeEvent.buttons === 0) {
      handleTouchEnd(nativeEvent);
      return;
    }
    const {
      newValue,
      activeIndex
    } = getFingerNewValue({
      finger,
      move: true
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive
    });
    setValueState(newValue);
    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }
    if (handleChange && !areValuesEqual(newValue, valueDerived)) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = useEventCallback_default((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);
    if (!finger) {
      return;
    }
    const {
      newValue
    } = getFingerNewValue({
      finger,
      move: true
    });
    setActive(-1);
    if (nativeEvent.type === "touchend") {
      setOpen(-1);
    }
    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }
    touchId.current = void 0;
    stopListening();
  });
  const handleTouchStart = useEventCallback_default((nativeEvent) => {
    if (disabled) {
      return;
    }
    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }
    const touch = nativeEvent.changedTouches[0];
    if (touch != null) {
      touchId.current = touch.identifier;
    }
    const finger = trackFinger(nativeEvent, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("touchmove", handleTouchMove, {
      passive: true
    });
    doc.addEventListener("touchend", handleTouchEnd, {
      passive: true
    });
  });
  const stopListening = React63.useCallback(() => {
    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener("mousemove", handleTouchMove);
    doc.removeEventListener("mouseup", handleTouchEnd);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  React63.useEffect(() => {
    const {
      current: slider
    } = sliderRef;
    slider.addEventListener("touchstart", handleTouchStart, {
      passive: doesSupportTouchActionNone()
    });
    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  React63.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);
  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onMouseDown) == null ? void 0 : _a.call(otherHandlers, event);
    if (disabled) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    const finger = trackFinger(event, touchId);
    if (finger !== false) {
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(event, newValue, activeIndex);
      }
    }
    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("mousemove", handleTouchMove, {
      passive: true
    });
    doc.addEventListener("mouseup", handleTouchEnd);
  };
  const trackOffset = valueToPercent(range ? values[0] : min2, min2, max2);
  const trackLeap = valueToPercent(values[values.length - 1], min2, max2) - trackOffset;
  const getRootProps = (externalProps = {}) => {
    const externalHandlers = extractEventHandlers_default(externalProps);
    const ownEventHandlers = {
      onMouseDown: createHandleMouseDown(externalHandlers || {})
    };
    const mergedEventHandlers = {
      ...externalHandlers,
      ...ownEventHandlers
    };
    return {
      ...externalProps,
      ref: handleRef,
      ...mergedEventHandlers
    };
  };
  const createHandleMouseOver = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onMouseOver) == null ? void 0 : _a.call(otherHandlers, event);
    const index2 = Number(event.currentTarget.getAttribute("data-index"));
    setOpen(index2);
  };
  const createHandleMouseLeave = (otherHandlers) => (event) => {
    var _a;
    (_a = otherHandlers.onMouseLeave) == null ? void 0 : _a.call(otherHandlers, event);
    setOpen(-1);
  };
  const getThumbProps = (externalProps = {}) => {
    const externalHandlers = extractEventHandlers_default(externalProps);
    const ownEventHandlers = {
      onMouseOver: createHandleMouseOver(externalHandlers || {}),
      onMouseLeave: createHandleMouseLeave(externalHandlers || {})
    };
    return {
      ...externalProps,
      ...externalHandlers,
      ...ownEventHandlers
    };
  };
  const getThumbStyle = (index2) => {
    return {
      // So the non active thumb doesn't show its label on hover.
      pointerEvents: active !== -1 && active !== index2 ? "none" : void 0
    };
  };
  const getHiddenInputProps = (externalProps = {}) => {
    const externalHandlers = extractEventHandlers_default(externalProps);
    const ownEventHandlers = {
      onChange: createHandleHiddenInputChange(externalHandlers || {}),
      onFocus: createHandleHiddenInputFocus(externalHandlers || {}),
      onBlur: createHandleHiddenInputBlur(externalHandlers || {}),
      onKeyDown: createHandleHiddenInputKeyDown(externalHandlers || {})
    };
    const mergedEventHandlers = {
      ...externalHandlers,
      ...ownEventHandlers
    };
    return {
      tabIndex,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": scale(max2),
      "aria-valuemin": scale(min2),
      name,
      type: "range",
      min: parameters.min,
      max: parameters.max,
      step: parameters.step === null && parameters.marks ? "any" : parameters.step ?? void 0,
      disabled,
      ...externalProps,
      ...mergedEventHandlers,
      style: {
        ...visuallyHidden_default,
        direction: isRtl ? "rtl" : "ltr",
        // So that VoiceOver's focus indicator matches the thumb's dimensions
        width: "100%",
        height: "100%"
      }
    };
  };
  return {
    active,
    axis,
    axisProps,
    dragging,
    focusedThumbIndex,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    marks,
    open,
    range,
    rootRef: handleRef,
    trackLeap,
    trackOffset,
    values,
    getThumbStyle
  };
}

// node_modules/@mui/base/Slider/Slider.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
function Identity2(x) {
  return x;
}
var useUtilityClasses15 = (ownerState) => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", dragging && "dragging", marked && "marked", orientation === "vertical" && "vertical", track === "inverted" && "trackInverted", track === false && "trackFalse"],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", disabled && "disabled"],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"]
  };
  return composeClasses(slots, useClassNamesOverride(getSliderUtilityClass));
};
var Slider = React64.forwardRef(function Slider2(props, forwardedRef) {
  const {
    "aria-label": ariaLabel,
    "aria-valuetext": ariaValuetext,
    "aria-labelledby": ariaLabelledby,
    className,
    disableSwap = false,
    disabled = false,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max: max2 = 100,
    min: min2 = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = "horizontal",
    shiftStep = 10,
    scale = Identity2,
    step = 1,
    tabIndex,
    track = "normal",
    value: valueProp,
    valueLabelFormat = Identity2,
    isRtl = false,
    defaultValue,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const partialOwnerState = {
    ...props,
    marks: marksProp,
    disabled,
    disableSwap,
    isRtl,
    defaultValue,
    max: max2,
    min: min2,
    orientation,
    scale,
    step,
    shiftStep,
    track,
    valueLabelFormat
  };
  const {
    axisProps: axisProps2,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    active,
    axis,
    range,
    focusedThumbIndex,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap,
    getThumbStyle
  } = useSlider({
    ...partialOwnerState,
    rootRef: forwardedRef
  });
  const ownerState = {
    ...partialOwnerState,
    marked: marks.length > 0 && marks.some((mark) => mark.label),
    dragging,
    focusedThumbIndex,
    activeThumbIndex: active
  };
  const classes = useUtilityClasses15(ownerState);
  const Root = slots.root ?? "span";
  const rootProps = useSlotProps_default({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: [classes.root, className]
  });
  const Rail = slots.rail ?? "span";
  const railProps = useSlotProps_default({
    elementType: Rail,
    externalSlotProps: slotProps.rail,
    ownerState,
    className: classes.rail
  });
  const Track = slots.track ?? "span";
  const trackProps = useSlotProps_default({
    elementType: Track,
    externalSlotProps: slotProps.track,
    additionalProps: {
      style: {
        ...axisProps2[axis].offset(trackOffset),
        ...axisProps2[axis].leap(trackLeap)
      }
    },
    ownerState,
    className: classes.track
  });
  const Thumb = slots.thumb ?? "span";
  const thumbProps = useSlotProps_default({
    elementType: Thumb,
    getSlotProps: getThumbProps,
    externalSlotProps: slotProps.thumb,
    ownerState,
    skipResolvingSlotProps: true
  });
  const ValueLabel = slots.valueLabel;
  const valueLabelProps = useSlotProps_default({
    elementType: ValueLabel,
    externalSlotProps: slotProps.valueLabel,
    ownerState
  });
  const Mark = slots.mark ?? "span";
  const markProps = useSlotProps_default({
    elementType: Mark,
    externalSlotProps: slotProps.mark,
    ownerState,
    className: classes.mark
  });
  const MarkLabel = slots.markLabel ?? "span";
  const markLabelProps = useSlotProps_default({
    elementType: MarkLabel,
    externalSlotProps: slotProps.markLabel,
    ownerState
  });
  const Input3 = slots.input || "input";
  const inputProps = useSlotProps_default({
    elementType: Input3,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: slotProps.input,
    ownerState
  });
  return (0, import_jsx_runtime23.jsxs)(Root, {
    ...rootProps,
    children: [(0, import_jsx_runtime23.jsx)(Rail, {
      ...railProps
    }), (0, import_jsx_runtime23.jsx)(Track, {
      ...trackProps
    }), marks.filter((mark) => mark.value >= min2 && mark.value <= max2).map((mark, index2) => {
      const percent = valueToPercent(mark.value, min2, max2);
      const style = axisProps2[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === "normal" && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === "inverted" && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }
      return (0, import_jsx_runtime23.jsxs)(React64.Fragment, {
        children: [(0, import_jsx_runtime23.jsx)(Mark, {
          "data-index": index2,
          ...markProps,
          ...!isHostComponent2(Mark) && {
            markActive
          },
          style: {
            ...style,
            ...markProps.style
          },
          className: clsx_default(markProps.className, markActive && classes.markActive)
        }), mark.label != null ? (0, import_jsx_runtime23.jsx)(MarkLabel, {
          "aria-hidden": true,
          "data-index": index2,
          ...markLabelProps,
          ...!isHostComponent2(MarkLabel) && {
            markLabelActive: markActive
          },
          style: {
            ...style,
            ...markLabelProps.style
          },
          className: clsx_default(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        }) : null]
      }, index2);
    }), values.map((value, index2) => {
      const percent = valueToPercent(value, min2, max2);
      const style = axisProps2[axis].offset(percent);
      const resolvedSlotProps = resolveComponentProps(slotProps.thumb, ownerState, {
        index: index2,
        focused: focusedThumbIndex === index2,
        active: active === index2
      });
      return (0, import_jsx_runtime23.jsxs)(Thumb, {
        "data-index": index2,
        ...thumbProps,
        ...resolvedSlotProps,
        className: clsx_default(classes.thumb, thumbProps.className, resolvedSlotProps == null ? void 0 : resolvedSlotProps.className, active === index2 && classes.active, focusedThumbIndex === index2 && classes.focusVisible),
        style: {
          ...style,
          ...getThumbStyle(index2),
          ...thumbProps.style,
          ...resolvedSlotProps == null ? void 0 : resolvedSlotProps.style
        },
        children: [(0, import_jsx_runtime23.jsx)(Input3, {
          "data-index": index2,
          "aria-label": getAriaLabel ? getAriaLabel(index2) : ariaLabel,
          "aria-valuenow": scale(value),
          "aria-labelledby": ariaLabelledby,
          "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index2) : ariaValuetext,
          value: values[index2],
          ...inputProps
        }), ValueLabel ? (0, import_jsx_runtime23.jsx)(ValueLabel, {
          ...!isHostComponent2(ValueLabel) && {
            valueLabelFormat,
            index: index2,
            disabled
          },
          ...valueLabelProps,
          children: typeof valueLabelFormat === "function" ? valueLabelFormat(scale(value), index2) : valueLabelFormat
        }) : null]
      }, index2);
    })]
  });
});
true ? Slider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The label of the slider.
   */
  "aria-label": chainPropTypes2(import_prop_types23.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-label"] != null) {
      return new Error("MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.");
    }
    return null;
  }),
  /**
   * The id of the element containing a label for the slider.
   */
  "aria-labelledby": import_prop_types23.default.string,
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  "aria-valuetext": chainPropTypes2(import_prop_types23.default.string, (props) => {
    const range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-valuetext"] != null) {
      return new Error("MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.");
    }
    return null;
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types23.default.oneOfType([import_prop_types23.default.arrayOf(import_prop_types23.default.number), import_prop_types23.default.number]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types23.default.bool,
  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap: import_prop_types23.default.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   * This is important for screen reader users.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: import_prop_types23.default.func,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   * This is important for screen reader users.
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: import_prop_types23.default.func,
  /**
   * If `true` the Slider will be rendered right-to-left (with the lowest value on the right-hand side).
   * @default false
   */
  isRtl: import_prop_types23.default.bool,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks: import_prop_types23.default.oneOfType([import_prop_types23.default.arrayOf(import_prop_types23.default.shape({
    label: import_prop_types23.default.node,
    value: import_prop_types23.default.number.isRequired
  })), import_prop_types23.default.bool]),
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max: import_prop_types23.default.number,
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min: import_prop_types23.default.number,
  /**
   * Name attribute of the hidden `input` element.
   */
  name: import_prop_types23.default.string,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {Event} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   * @param {number} activeThumb Index of the currently moved thumb.
   */
  onChange: import_prop_types23.default.func,
  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: import_prop_types23.default.func,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types23.default.oneOf(["horizontal", "vertical"]),
  /**
   * A transformation function, to change the scale of the slider.
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  scale: import_prop_types23.default.func,
  /**
   * The granularity with which the slider can step through values when using Page Up/Page Down or Shift + Arrow Up/Arrow Down.
   * @default 10
   */
  shiftStep: import_prop_types23.default.number,
  /**
   * The props used for each slot inside the Slider.
   * @default {}
   */
  slotProps: import_prop_types23.default.shape({
    input: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object]),
    mark: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object]),
    markLabel: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object]),
    rail: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object]),
    root: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object]),
    thumb: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object]),
    track: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object]),
    valueLabel: import_prop_types23.default.oneOfType([import_prop_types23.default.any, import_prop_types23.default.func])
  }),
  /**
   * The components used for each slot inside the Slider.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types23.default.shape({
    input: import_prop_types23.default.elementType,
    mark: import_prop_types23.default.elementType,
    markLabel: import_prop_types23.default.elementType,
    rail: import_prop_types23.default.elementType,
    root: import_prop_types23.default.elementType,
    thumb: import_prop_types23.default.elementType,
    track: import_prop_types23.default.elementType,
    valueLabel: import_prop_types23.default.elementType
  }),
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step: import_prop_types23.default.number,
  /**
   * Tab index attribute of the hidden `input` element.
   */
  tabIndex: import_prop_types23.default.number,
  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track: import_prop_types23.default.oneOf(["inverted", "normal", false]),
  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: import_prop_types23.default.oneOfType([import_prop_types23.default.arrayOf(import_prop_types23.default.number), import_prop_types23.default.number]),
  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  valueLabelFormat: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.string])
} : void 0;

// node_modules/@mui/base/Snackbar/Snackbar.js
var React66 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());

// node_modules/@mui/base/Snackbar/snackbarClasses.js
var COMPONENT_NAME16 = "Snackbar";
function getSnackbarUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME16, slot);
}
var snackbarClasses = generateUtilityClasses3(COMPONENT_NAME16, ["root"]);

// node_modules/@mui/base/useSnackbar/useSnackbar.js
var React65 = __toESM(require_react());
function useSnackbar(parameters = {}) {
  const {
    autoHideDuration = null,
    disableWindowBlurListener = false,
    onClose,
    open,
    resumeHideDuration
  } = parameters;
  const timerAutoHide = useTimeout();
  React65.useEffect(() => {
    if (!open) {
      return void 0;
    }
    function handleKeyDown2(nativeEvent) {
      if (!nativeEvent.defaultPrevented) {
        if (nativeEvent.key === "Escape") {
          onClose == null ? void 0 : onClose(nativeEvent, "escapeKeyDown");
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown2);
    return () => {
      document.removeEventListener("keydown", handleKeyDown2);
    };
  }, [open, onClose]);
  const handleClose = useEventCallback_default((event, reason) => {
    onClose == null ? void 0 : onClose(event, reason);
  });
  const setAutoHideTimer = useEventCallback_default((autoHideDurationParam) => {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }
    timerAutoHide.start(autoHideDurationParam, () => {
      handleClose(null, "timeout");
    });
  });
  React65.useEffect(() => {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }
    return timerAutoHide.clear;
  }, [open, autoHideDuration, setAutoHideTimer, timerAutoHide]);
  const handleClickAway = (event) => {
    onClose == null ? void 0 : onClose(event, "clickaway");
  };
  const handlePause = timerAutoHide.clear;
  const handleResume = React65.useCallback(() => {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
  const createHandleBlur = (otherHandlers) => (event) => {
    const onBlurCallback = otherHandlers.onBlur;
    onBlurCallback == null ? void 0 : onBlurCallback(event);
    handleResume();
  };
  const createHandleFocus = (otherHandlers) => (event) => {
    const onFocusCallback = otherHandlers.onFocus;
    onFocusCallback == null ? void 0 : onFocusCallback(event);
    handlePause();
  };
  const createMouseEnter = (otherHandlers) => (event) => {
    const onMouseEnterCallback = otherHandlers.onMouseEnter;
    onMouseEnterCallback == null ? void 0 : onMouseEnterCallback(event);
    handlePause();
  };
  const createMouseLeave = (otherHandlers) => (event) => {
    const onMouseLeaveCallback = otherHandlers.onMouseLeave;
    onMouseLeaveCallback == null ? void 0 : onMouseLeaveCallback(event);
    handleResume();
  };
  React65.useEffect(() => {
    if (!disableWindowBlurListener && open) {
      window.addEventListener("focus", handleResume);
      window.addEventListener("blur", handlePause);
      return () => {
        window.removeEventListener("focus", handleResume);
        window.removeEventListener("blur", handlePause);
      };
    }
    return void 0;
  }, [disableWindowBlurListener, open, handleResume, handlePause]);
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = {
      ...extractEventHandlers_default(parameters),
      ...extractEventHandlers_default(externalProps)
    };
    return {
      // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
      // See https://github.com/mui/material-ui/issues/29080
      role: "presentation",
      ...externalProps,
      ...externalEventHandlers,
      onBlur: createHandleBlur(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onMouseEnter: createMouseEnter(externalEventHandlers),
      onMouseLeave: createMouseLeave(externalEventHandlers)
    };
  };
  return {
    getRootProps,
    onClickAway: handleClickAway
  };
}

// node_modules/@mui/base/Snackbar/Snackbar.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var useUtilityClasses16 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, useClassNamesOverride(getSnackbarUtilityClass));
};
var Snackbar = React66.forwardRef(function Snackbar2(props, forwardedRef) {
  const {
    autoHideDuration = null,
    children,
    disableWindowBlurListener = false,
    exited = true,
    onBlur,
    onClose,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    open,
    resumeHideDuration,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const classes = useUtilityClasses16();
  const {
    getRootProps,
    onClickAway
  } = useSnackbar({
    ...props,
    autoHideDuration,
    disableWindowBlurListener,
    onClose,
    open,
    resumeHideDuration
  });
  const ownerState = props;
  const Root = slots.root || "div";
  const rootProps = useSlotProps_default({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const clickAwayListenerProps = useSlotProps_default({
    elementType: ClickAwayListener,
    externalSlotProps: slotProps.clickAwayListener,
    additionalProps: {
      onClickAway
    },
    ownerState
  });
  delete clickAwayListenerProps.ownerState;
  if (!open && exited) {
    return null;
  }
  return (0, import_jsx_runtime24.jsx)(ClickAwayListener, {
    ...clickAwayListenerProps,
    children: (0, import_jsx_runtime24.jsx)(Root, {
      ...rootProps,
      children
    })
  });
});
true ? Snackbar.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration: import_prop_types24.default.number,
  /**
   * @ignore
   */
  children: import_prop_types24.default.node,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener: import_prop_types24.default.bool,
  /**
   * The prop used to handle exited transition and unmount the component.
   * @default true
   */
  exited: import_prop_types24.default.bool,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose: import_prop_types24.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types24.default.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: import_prop_types24.default.number,
  /**
   * The props used for each slot inside the Snackbar.
   * @default {}
   */
  slotProps: import_prop_types24.default.shape({
    clickAwayListener: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.shape({
      children: import_prop_types24.default.element.isRequired,
      disableReactTree: import_prop_types24.default.bool,
      mouseEvent: import_prop_types24.default.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", false]),
      onClickAway: import_prop_types24.default.func,
      touchEvent: import_prop_types24.default.oneOf(["onTouchEnd", "onTouchStart", false])
    })]),
    root: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object])
  }),
  /**
   * The components used for each slot inside the Snackbar.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types24.default.shape({
    root: import_prop_types24.default.elementType
  })
} : void 0;

// node_modules/@mui/base/Switch/Switch.js
var React68 = __toESM(require_react());
var import_prop_types25 = __toESM(require_prop_types());

// node_modules/@mui/base/useSwitch/useSwitch.js
var React67 = __toESM(require_react());
function useSwitch(props) {
  const {
    checked: checkedProp,
    defaultChecked,
    disabled,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required
  } = props;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "Switch",
    state: "checked"
  });
  const createHandleInputChange = (otherProps) => (event) => {
    var _a;
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    setCheckedState(event.target.checked);
    onChange == null ? void 0 : onChange(event);
    (_a = otherProps.onChange) == null ? void 0 : _a.call(otherProps, event);
  };
  const [focusVisible, setFocusVisible] = React67.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  const inputRef = React67.useRef(null);
  const createHandleFocus = (otherProps) => (event) => {
    var _a;
    if (!inputRef.current) {
      inputRef.current = event.currentTarget;
    }
    if (isFocusVisible(event.target)) {
      setFocusVisible(true);
      onFocusVisible == null ? void 0 : onFocusVisible(event);
    }
    onFocus == null ? void 0 : onFocus(event);
    (_a = otherProps.onFocus) == null ? void 0 : _a.call(otherProps, event);
  };
  const createHandleBlur = (otherProps) => (event) => {
    var _a;
    if (!isFocusVisible(event.target)) {
      setFocusVisible(false);
    }
    onBlur == null ? void 0 : onBlur(event);
    (_a = otherProps.onBlur) == null ? void 0 : _a.call(otherProps, event);
  };
  const handleInputRef = useForkRef(inputRef);
  const getInputProps = (otherProps = {}) => ({
    checked: checkedProp,
    defaultChecked,
    disabled,
    readOnly,
    ref: handleInputRef,
    required,
    type: "checkbox",
    role: "switch",
    "aria-checked": checkedProp,
    ...otherProps,
    onChange: createHandleInputChange(otherProps),
    onFocus: createHandleFocus(otherProps),
    onBlur: createHandleBlur(otherProps)
  });
  return {
    checked,
    disabled: Boolean(disabled),
    focusVisible,
    getInputProps,
    inputRef: handleInputRef,
    readOnly: Boolean(readOnly)
  };
}

// node_modules/@mui/base/Switch/switchClasses.js
var COMPONENT_NAME17 = "Switch";
function getSwitchUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME17, slot);
}
var switchClasses = generateUtilityClasses3(COMPONENT_NAME17, ["root", "input", "track", "thumb", "checked", "disabled", "focusVisible", "readOnly"]);

// node_modules/@mui/base/Switch/Switch.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var useUtilityClasses17 = (ownerState) => {
  const {
    checked,
    disabled,
    focusVisible,
    readOnly
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", focusVisible && "focusVisible", readOnly && "readOnly"],
    thumb: ["thumb"],
    input: ["input"],
    track: ["track"]
  };
  return composeClasses(slots, useClassNamesOverride(getSwitchUtilityClass));
};
var Switch = React68.forwardRef(function Switch2(props, forwardedRef) {
  const {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp,
    required,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible,
    readOnly
  } = useSwitch(props);
  const ownerState = {
    ...props,
    checked,
    disabled,
    focusVisible,
    readOnly
  };
  const classes = useUtilityClasses17(ownerState);
  const Root = slots.root ?? "span";
  const rootProps = useSlotProps_default({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const Thumb = slots.thumb ?? "span";
  const thumbProps = useSlotProps_default({
    elementType: Thumb,
    externalSlotProps: slotProps.thumb,
    ownerState,
    className: classes.thumb
  });
  const Input3 = slots.input ?? "input";
  const inputProps = useSlotProps_default({
    elementType: Input3,
    getSlotProps: getInputProps,
    externalSlotProps: slotProps.input,
    ownerState,
    className: classes.input
  });
  const Track = slots.track === null ? () => null : slots.track ?? "span";
  const trackProps = useSlotProps_default({
    elementType: Track,
    externalSlotProps: slotProps.track,
    ownerState,
    className: classes.track
  });
  return (0, import_jsx_runtime25.jsxs)(Root, {
    ...rootProps,
    children: [(0, import_jsx_runtime25.jsx)(Track, {
      ...trackProps
    }), (0, import_jsx_runtime25.jsx)(Thumb, {
      ...thumbProps
    }), (0, import_jsx_runtime25.jsx)(Input3, {
      ...inputProps
    })]
  });
});
true ? Switch.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types25.default.bool,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types25.default.string,
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: import_prop_types25.default.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: import_prop_types25.default.bool,
  /**
   * @ignore
   */
  onBlur: import_prop_types25.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types25.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types25.default.func,
  /**
   * @ignore
   */
  onFocusVisible: import_prop_types25.default.func,
  /**
   * If `true`, the component is read only.
   */
  readOnly: import_prop_types25.default.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: import_prop_types25.default.bool,
  /**
   * The props used for each slot inside the Switch.
   * @default {}
   */
  slotProps: import_prop_types25.default.shape({
    input: import_prop_types25.default.oneOfType([import_prop_types25.default.func, import_prop_types25.default.object]),
    root: import_prop_types25.default.oneOfType([import_prop_types25.default.func, import_prop_types25.default.object]),
    thumb: import_prop_types25.default.oneOfType([import_prop_types25.default.func, import_prop_types25.default.object]),
    track: import_prop_types25.default.oneOfType([import_prop_types25.default.func, import_prop_types25.default.object])
  }),
  /**
   * The components used for each slot inside the Switch.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types25.default.shape({
    input: import_prop_types25.default.elementType,
    root: import_prop_types25.default.elementType,
    thumb: import_prop_types25.default.elementType,
    track: import_prop_types25.default.oneOfType([import_prop_types25.default.elementType, import_prop_types25.default.oneOf([null])])
  })
} : void 0;

// node_modules/@mui/base/TablePagination/TablePagination.js
var React70 = __toESM(require_react());
var import_prop_types26 = __toESM(require_prop_types());

// node_modules/@mui/base/TablePagination/TablePaginationActions.js
var React69 = __toESM(require_react());
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var _span2;
var _span22;
var _span3;
var _span4;
function LastPageIconDefault() {
  return _span2 || (_span2 = (0, import_jsx_runtime26.jsx)("span", {
    children: "⇾|"
  }));
}
function FirstPageIconDefault() {
  return _span22 || (_span22 = (0, import_jsx_runtime26.jsx)("span", {
    children: "|⇽"
  }));
}
function NextPageIconDefault() {
  return _span3 || (_span3 = (0, import_jsx_runtime26.jsx)("span", {
    children: "⇾"
  }));
}
function BackPageIconDefault() {
  return _span4 || (_span4 = (0, import_jsx_runtime26.jsx)("span", {
    children: "⇽"
  }));
}
function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}
var TablePaginationActions = React69.forwardRef(function TablePaginationActions2(props, forwardedRef) {
  const {
    count,
    getItemAriaLabel = defaultGetAriaLabel,
    onPageChange,
    page,
    rowsPerPage,
    showFirstButton = false,
    showLastButton = false,
    direction,
    // @ts-ignore
    ownerState: ownerStateProp,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const ownerState = props;
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };
  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };
  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  const Root = slots.root ?? "div";
  const rootProps = useSlotProps_default({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState
  });
  const FirstButton = slots.firstButton ?? "button";
  const firstButtonProps = useSlotProps_default({
    elementType: FirstButton,
    externalSlotProps: slotProps.firstButton,
    additionalProps: {
      onClick: handleFirstPageButtonClick,
      disabled: page === 0,
      "aria-label": getItemAriaLabel("first", page),
      title: getItemAriaLabel("first", page)
    },
    ownerState
  });
  const LastButton = slots.lastButton ?? "button";
  const lastButtonProps = useSlotProps_default({
    elementType: LastButton,
    externalSlotProps: slotProps.lastButton,
    additionalProps: {
      onClick: handleLastPageButtonClick,
      disabled: page >= Math.ceil(count / rowsPerPage) - 1,
      "aria-label": getItemAriaLabel("last", page),
      title: getItemAriaLabel("last", page)
    },
    ownerState
  });
  const NextButton = slots.nextButton ?? "button";
  const nextButtonProps = useSlotProps_default({
    elementType: NextButton,
    externalSlotProps: slotProps.nextButton,
    additionalProps: {
      onClick: handleNextButtonClick,
      disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
      "aria-label": getItemAriaLabel("next", page),
      title: getItemAriaLabel("next", page)
    },
    ownerState
  });
  const BackButton = slots.backButton ?? "button";
  const backButtonProps = useSlotProps_default({
    elementType: BackButton,
    externalSlotProps: slotProps.backButton,
    additionalProps: {
      onClick: handleBackButtonClick,
      disabled: page === 0,
      "aria-label": getItemAriaLabel("previous", page),
      title: getItemAriaLabel("previous", page)
    },
    ownerState
  });
  const LastPageIcon = slots.lastPageIcon ?? LastPageIconDefault;
  const FirstPageIcon = slots.firstPageIcon ?? FirstPageIconDefault;
  const NextPageIcon = slots.nextPageIcon ?? NextPageIconDefault;
  const BackPageIcon = slots.backPageIcon ?? BackPageIconDefault;
  return (0, import_jsx_runtime26.jsxs)(Root, {
    ...rootProps,
    children: [showFirstButton && (0, import_jsx_runtime26.jsx)(FirstButton, {
      ...firstButtonProps,
      children: direction === "rtl" ? (0, import_jsx_runtime26.jsx)(LastPageIcon, {}) : (0, import_jsx_runtime26.jsx)(FirstPageIcon, {})
    }), (0, import_jsx_runtime26.jsx)(BackButton, {
      ...backButtonProps,
      children: direction === "rtl" ? (0, import_jsx_runtime26.jsx)(NextPageIcon, {}) : (0, import_jsx_runtime26.jsx)(BackPageIcon, {})
    }), (0, import_jsx_runtime26.jsx)(NextButton, {
      ...nextButtonProps,
      children: direction === "rtl" ? (0, import_jsx_runtime26.jsx)(BackPageIcon, {}) : (0, import_jsx_runtime26.jsx)(NextPageIcon, {})
    }), showLastButton && (0, import_jsx_runtime26.jsx)(LastButton, {
      ...lastButtonProps,
      children: direction === "rtl" ? (0, import_jsx_runtime26.jsx)(FirstPageIcon, {}) : (0, import_jsx_runtime26.jsx)(LastPageIcon, {})
    })]
  });
});

// node_modules/@mui/base/TablePagination/tablePaginationClasses.js
var COMPONENT_NAME18 = "TablePagination";
function getTablePaginationUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME18, slot);
}
var tablePaginationClasses = generateUtilityClasses3(COMPONENT_NAME18, ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);

// node_modules/@mui/base/TablePagination/TablePagination.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var import_react2 = __toESM(require_react());
function defaultLabelDisplayedRows({
  from,
  to,
  count
}) {
  return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}
function defaultGetAriaLabel2(type) {
  return `Go to ${type} page`;
}
var useUtilityClasses18 = () => {
  const slots = {
    root: ["root"],
    toolbar: ["toolbar"],
    spacer: ["spacer"],
    selectLabel: ["selectLabel"],
    select: ["select"],
    input: ["input"],
    selectIcon: ["selectIcon"],
    menuItem: ["menuItem"],
    displayedRows: ["displayedRows"],
    actions: ["actions"]
  };
  return composeClasses(slots, useClassNamesOverride(getTablePaginationUtilityClass));
};
var TablePagination = React70.forwardRef(function TablePagination2(props, forwardedRef) {
  const {
    colSpan: colSpanProp,
    count,
    getItemAriaLabel = defaultGetAriaLabel2,
    labelDisplayedRows = defaultLabelDisplayedRows,
    labelId: labelIdProp,
    labelRowsPerPage = "Rows per page:",
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions = [10, 25, 50, 100],
    selectId: selectIdProp,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses18();
  let colSpan;
  const Root = slots.root ?? "td";
  if (Root === "td" || !isHostComponent2(Root)) {
    colSpan = colSpanProp || 1e3;
  }
  const getLabelDisplayedRowsTo = () => {
    if (count === -1) {
      return (page + 1) * rowsPerPage;
    }
    return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
  };
  const selectId = useId(selectIdProp);
  const labelId = useId(labelIdProp);
  const rootProps = useSlotProps_default({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      colSpan,
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const Select3 = slots.select ?? "select";
  const selectProps = useSlotProps_default({
    elementType: Select3,
    externalSlotProps: slotProps.select,
    additionalProps: {
      value: rowsPerPage,
      id: selectId,
      onChange: (event) => onRowsPerPageChange && onRowsPerPageChange(event),
      "aria-label": rowsPerPage.toString(),
      "aria-labelledby": [labelId, selectId].filter(Boolean).join(" ") || void 0
    },
    ownerState,
    className: classes.select
  });
  const Actions = slots.actions ?? TablePaginationActions;
  const actionsProps = useSlotProps_default({
    elementType: Actions,
    externalSlotProps: slotProps.actions,
    additionalProps: {
      page,
      rowsPerPage,
      count,
      onPageChange,
      getItemAriaLabel
    },
    ownerState,
    className: classes.actions
  });
  const MenuItem4 = slots.menuItem ?? "option";
  const menuItemProps = useSlotProps_default({
    elementType: MenuItem4,
    externalSlotProps: slotProps.menuItem,
    additionalProps: {
      value: void 0
    },
    ownerState,
    className: classes.menuItem
  });
  const SelectLabel = slots.selectLabel ?? "p";
  const selectLabelProps = useSlotProps_default({
    elementType: SelectLabel,
    externalSlotProps: slotProps.selectLabel,
    additionalProps: {
      id: labelId
    },
    ownerState,
    className: classes.selectLabel
  });
  const DisplayedRows = slots.displayedRows ?? "p";
  const displayedRowsProps = useSlotProps_default({
    elementType: DisplayedRows,
    externalSlotProps: slotProps.displayedRows,
    ownerState,
    className: classes.displayedRows
  });
  const Toolbar = slots.toolbar ?? "div";
  const toolbarProps = useSlotProps_default({
    elementType: Toolbar,
    externalSlotProps: slotProps.toolbar,
    ownerState,
    className: classes.toolbar
  });
  const Spacer = slots.spacer ?? "div";
  const spacerProps = useSlotProps_default({
    elementType: Spacer,
    externalSlotProps: slotProps.spacer,
    ownerState,
    className: classes.spacer
  });
  return (0, import_jsx_runtime27.jsx)(Root, {
    ...rootProps,
    children: (0, import_jsx_runtime27.jsxs)(Toolbar, {
      ...toolbarProps,
      children: [(0, import_jsx_runtime27.jsx)(Spacer, {
        ...spacerProps
      }), rowsPerPageOptions.length > 1 && (0, import_jsx_runtime27.jsx)(SelectLabel, {
        ...selectLabelProps,
        children: labelRowsPerPage
      }), rowsPerPageOptions.length > 1 && (0, import_jsx_runtime27.jsx)(Select3, {
        ...selectProps,
        children: rowsPerPageOptions.map((rowsPerPageOption) => (0, import_react2.createElement)(MenuItem4, {
          ...menuItemProps,
          key: typeof rowsPerPageOption !== "number" && rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
          value: typeof rowsPerPageOption !== "number" && rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
        }, typeof rowsPerPageOption !== "number" && rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))
      }), (0, import_jsx_runtime27.jsx)(DisplayedRows, {
        ...displayedRowsProps,
        children: labelDisplayedRows({
          from: count === 0 ? 0 : page * rowsPerPage + 1,
          to: getLabelDisplayedRowsTo(),
          count: count === -1 ? -1 : count,
          page
        })
      }), (0, import_jsx_runtime27.jsx)(Actions, {
        ...actionsProps
      })]
    })
  });
});
true ? TablePagination.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  colSpan: import_prop_types26.default.number,
  /**
   * The total number of rows.
   *
   * To enable server side pagination for an unknown number of items, provide -1.
   */
  count: import_prop_types26.default.number.isRequired,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('first' | 'last' | 'next' | 'previous').
   * @returns {string}
   * @default function defaultGetAriaLabel(type: ItemAriaLabelType) {
   *   return `Go to ${type} page`;
   * }
   */
  getItemAriaLabel: import_prop_types26.default.func,
  /**
   * Customize the displayed rows label. Invoked with a `{ from, to, count, page }`
   * object.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default function defaultLabelDisplayedRows({ from, to, count }: LabelDisplayedRowsArgs) {
   *   return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
   * }
   */
  labelDisplayedRows: import_prop_types26.default.func,
  /**
   * Id of the label element within the pagination.
   */
  labelId: import_prop_types26.default.string,
  /**
   * Customize the rows per page label.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Rows per page:'
   */
  labelRowsPerPage: import_prop_types26.default.node,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: import_prop_types26.default.func.isRequired,
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   */
  onRowsPerPageChange: import_prop_types26.default.func,
  /**
   * The zero-based index of the current page.
   */
  page: chainPropTypes2(integerPropType_default.isRequired, (props) => {
    const {
      count,
      page,
      rowsPerPage
    } = props;
    if (count === -1) {
      return null;
    }
    const newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
    if (page < 0 || page > newLastPage) {
      return new Error(`MUI: The page prop of a TablePagination is out of range (0 to ${newLastPage}, but page is ${page}).`);
    }
    return null;
  }),
  /**
   * The number of rows per page.
   *
   * Set -1 to display all the rows.
   */
  rowsPerPage: integerPropType_default.isRequired,
  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   * Use -1 for the value with a custom label to show all the rows.
   * @default [10, 25, 50, 100]
   */
  rowsPerPageOptions: import_prop_types26.default.arrayOf(import_prop_types26.default.oneOfType([import_prop_types26.default.number, import_prop_types26.default.shape({
    label: import_prop_types26.default.string.isRequired,
    value: import_prop_types26.default.number.isRequired
  })]).isRequired),
  /**
   * Id of the select element within the pagination.
   */
  selectId: import_prop_types26.default.string,
  /**
   * The props used for each slot inside the TablePagination.
   * @default {}
   */
  slotProps: import_prop_types26.default.shape({
    actions: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object]),
    displayedRows: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object]),
    menuItem: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object]),
    root: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object]),
    select: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object]),
    selectLabel: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object]),
    spacer: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object]),
    toolbar: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object])
  }),
  /**
   * The components used for each slot inside the TablePagination.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types26.default.shape({
    actions: import_prop_types26.default.elementType,
    displayedRows: import_prop_types26.default.elementType,
    menuItem: import_prop_types26.default.elementType,
    root: import_prop_types26.default.elementType,
    select: import_prop_types26.default.elementType,
    selectLabel: import_prop_types26.default.elementType,
    spacer: import_prop_types26.default.elementType,
    toolbar: import_prop_types26.default.elementType
  })
} : void 0;

// node_modules/@mui/base/TabPanel/TabPanel.js
var React76 = __toESM(require_react());
var import_prop_types28 = __toESM(require_prop_types());

// node_modules/@mui/base/TabPanel/tabPanelClasses.js
var COMPONENT_NAME19 = "TabPanel";
function getTabPanelUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME19, slot);
}
var tabPanelClasses = generateUtilityClasses3(COMPONENT_NAME19, ["root", "hidden"]);

// node_modules/@mui/base/useTabPanel/useTabPanel.js
var React75 = __toESM(require_react());

// node_modules/@mui/base/Tabs/Tabs.js
var React74 = __toESM(require_react());
var import_prop_types27 = __toESM(require_prop_types());

// node_modules/@mui/base/Tabs/tabsClasses.js
var COMPONENT_NAME20 = "Tabs";
function getTabsUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME20, slot);
}
var tabsClasses = generateUtilityClasses3(COMPONENT_NAME20, ["root", "horizontal", "vertical"]);

// node_modules/@mui/base/useTabs/useTabs.js
var React71 = __toESM(require_react());
function useTabs(parameters) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    orientation = "horizontal",
    direction = "ltr",
    selectionFollowsFocus = false
  } = parameters;
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Tabs",
    state: "value"
  });
  const onSelected = React71.useCallback((event, newValue) => {
    setValue(newValue);
    onChange == null ? void 0 : onChange(event, newValue);
  }, [onChange, setValue]);
  const {
    subitems: tabPanels,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const tabIdLookup = React71.useRef(() => void 0);
  const getTabPanelId = React71.useCallback((tabValue) => {
    var _a;
    return (_a = tabPanels.get(tabValue)) == null ? void 0 : _a.id;
  }, [tabPanels]);
  const getTabId = React71.useCallback((tabPanelId) => {
    return tabIdLookup.current(tabPanelId);
  }, []);
  const registerTabIdLookup = React71.useCallback((lookupFunction) => {
    tabIdLookup.current = lookupFunction;
  }, []);
  return {
    contextValue: {
      direction,
      getTabId,
      getTabPanelId,
      onSelected,
      orientation,
      registerTabIdLookup,
      selectionFollowsFocus,
      value,
      ...compoundComponentContextValue
    }
  };
}

// node_modules/@mui/base/useTabs/TabsProvider.js
var React73 = __toESM(require_react());

// node_modules/@mui/base/Tabs/TabsContext.js
var React72 = __toESM(require_react());
var TabsContext = React72.createContext(null);
if (true) {
  TabsContext.displayName = "TabsContext";
}
function useTabsContext() {
  const context = React72.useContext(TabsContext);
  if (context == null) {
    throw new Error("No TabsContext provided");
  }
  return context;
}

// node_modules/@mui/base/useTabs/TabsProvider.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
function TabsProvider(props) {
  const {
    value: valueProp,
    children
  } = props;
  const {
    direction,
    getItemIndex,
    onSelected,
    orientation,
    registerItem,
    registerTabIdLookup,
    selectionFollowsFocus,
    totalSubitemCount,
    value,
    getTabId,
    getTabPanelId
  } = valueProp;
  const compoundComponentContextValue = React73.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  const tabsContextValue = React73.useMemo(() => ({
    direction,
    getTabId,
    getTabPanelId,
    onSelected,
    orientation,
    registerTabIdLookup,
    selectionFollowsFocus,
    value
  }), [direction, getTabId, getTabPanelId, onSelected, orientation, registerTabIdLookup, selectionFollowsFocus, value]);
  return (0, import_jsx_runtime28.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: (0, import_jsx_runtime28.jsx)(TabsContext.Provider, {
      value: tabsContextValue,
      children
    })
  });
}

// node_modules/@mui/base/Tabs/Tabs.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var useUtilityClasses19 = (ownerState) => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation]
  };
  return composeClasses(slots, useClassNamesOverride(getTabsUtilityClass));
};
var Tabs = React74.forwardRef(function Tabs2(props, forwardedRef) {
  const {
    children,
    value: valueProp,
    defaultValue,
    orientation = "horizontal",
    direction = "ltr",
    onChange,
    selectionFollowsFocus,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    orientation,
    direction
  };
  const {
    contextValue
  } = useTabs(ownerState);
  const classes = useUtilityClasses19(ownerState);
  const TabsRoot = slots.root ?? "div";
  const tabsRootProps = useSlotProps_default({
    elementType: TabsRoot,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime29.jsx)(TabsRoot, {
    ...tabsRootProps,
    children: (0, import_jsx_runtime29.jsx)(TabsProvider, {
      value: contextValue,
      children
    })
  });
});
true ? Tabs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types27.default.node,
  /**
   * @ignore
   */
  className: import_prop_types27.default.string,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types27.default.oneOfType([import_prop_types27.default.number, import_prop_types27.default.string]),
  /**
   * The direction of the text.
   * @default 'ltr'
   */
  direction: import_prop_types27.default.oneOf(["ltr", "rtl"]),
  /**
   * Callback invoked when new value is being set.
   */
  onChange: import_prop_types27.default.func,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: import_prop_types27.default.oneOf(["horizontal", "vertical"]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: import_prop_types27.default.bool,
  /**
   * The props used for each slot inside the Tabs.
   * @default {}
   */
  slotProps: import_prop_types27.default.shape({
    root: import_prop_types27.default.oneOfType([import_prop_types27.default.func, import_prop_types27.default.object])
  }),
  /**
   * The components used for each slot inside the Tabs.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types27.default.shape({
    root: import_prop_types27.default.elementType
  }),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `null`.
   */
  value: import_prop_types27.default.oneOfType([import_prop_types27.default.number, import_prop_types27.default.string])
} : void 0;

// node_modules/@mui/base/useTabPanel/useTabPanel.js
function tabPanelValueGenerator(otherTabPanelValues) {
  return otherTabPanelValues.size;
}
function useTabPanel(parameters) {
  const {
    value: valueParam,
    id: idParam,
    rootRef: externalRef
  } = parameters;
  const context = useTabsContext();
  if (context === null) {
    throw new Error("No TabContext provided");
  }
  const {
    value: selectedTabValue,
    getTabId
  } = context;
  const id = useId(idParam);
  const ref = React75.useRef(null);
  const handleRef = useForkRef(ref, externalRef);
  const metadata = React75.useMemo(() => ({
    id,
    ref
  }), [id]);
  const {
    id: value
  } = useCompoundItem(valueParam ?? tabPanelValueGenerator, metadata);
  const hidden = value !== selectedTabValue;
  const correspondingTabId = value !== void 0 ? getTabId(value) : void 0;
  const getRootProps = (externalProps = {}) => {
    return {
      "aria-labelledby": correspondingTabId ?? void 0,
      hidden,
      id: id ?? void 0,
      ...externalProps,
      ref: handleRef
    };
  };
  return {
    hidden,
    getRootProps,
    rootRef: handleRef
  };
}

// node_modules/@mui/base/TabPanel/TabPanel.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var useUtilityClasses20 = (ownerState) => {
  const {
    hidden
  } = ownerState;
  const slots = {
    root: ["root", hidden && "hidden"]
  };
  return composeClasses(slots, useClassNamesOverride(getTabPanelUtilityClass));
};
var TabPanel = React76.forwardRef(function TabPanel2(props, forwardedRef) {
  const {
    children,
    value,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const {
    hidden,
    getRootProps
  } = useTabPanel(props);
  const ownerState = {
    ...props,
    hidden
  };
  const classes = useUtilityClasses20(ownerState);
  const TabPanelRoot = slots.root ?? "div";
  const tabPanelRootProps = useSlotProps_default({
    elementType: TabPanelRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tabpanel",
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime30.jsx)(TabPanelRoot, {
    ...tabPanelRootProps,
    children: !hidden && children
  });
});
true ? TabPanel.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types28.default.node,
  /**
   * @ignore
   */
  className: import_prop_types28.default.string,
  /**
   * The props used for each slot inside the TabPanel.
   * @default {}
   */
  slotProps: import_prop_types28.default.shape({
    root: import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object])
  }),
  /**
   * The components used for each slot inside the TabPanel.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types28.default.shape({
    root: import_prop_types28.default.elementType
  }),
  /**
   * The value of the TabPanel. It will be shown when the Tab with the corresponding value is selected.
   * If not provided, it will fall back to the index of the panel.
   * It is recommended to explicitly provide it, as it's required for the tab panel to be rendered on the server.
   */
  value: import_prop_types28.default.oneOfType([import_prop_types28.default.number, import_prop_types28.default.string])
} : void 0;

// node_modules/@mui/base/TabsList/TabsList.js
var React79 = __toESM(require_react());
var import_prop_types29 = __toESM(require_prop_types());

// node_modules/@mui/base/TabsList/tabsListClasses.js
var COMPONENT_NAME21 = "TabsList";
function getTabsListUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME21, slot);
}
var tabsListClasses = generateUtilityClasses3(COMPONENT_NAME21, ["root", "horizontal", "vertical"]);

// node_modules/@mui/base/useTabsList/useTabsList.js
var React77 = __toESM(require_react());

// node_modules/@mui/base/useTabsList/useTabsList.types.js
var TabsListActionTypes = {
  valueChange: "valueChange"
};

// node_modules/@mui/base/useTabsList/tabsListReducer.js
function tabsListReducer(state, action) {
  if (action.type === TabsListActionTypes.valueChange) {
    return {
      ...state,
      highlightedValue: action.value
    };
  }
  const newState = listReducer(state, action);
  const {
    context: {
      selectionFollowsFocus
    }
  } = action;
  if (action.type === ListActionTypes.itemsChange) {
    if (newState.selectedValues.length > 0) {
      return {
        ...newState,
        highlightedValue: newState.selectedValues[0]
      };
    }
    moveHighlight(null, "reset", action.context);
  }
  if (selectionFollowsFocus && newState.highlightedValue != null) {
    return {
      ...newState,
      selectedValues: [newState.highlightedValue]
    };
  }
  return newState;
}

// node_modules/@mui/base/useTabsList/useTabsList.js
function useTabsList(parameters) {
  const {
    rootRef: externalRef
  } = parameters;
  const {
    direction = "ltr",
    onSelected,
    orientation = "horizontal",
    value,
    registerTabIdLookup,
    selectionFollowsFocus
  } = useTabsContext();
  const {
    subitems,
    contextValue: compoundComponentContextValue
  } = useCompoundParent();
  const tabIdLookup = React77.useCallback((tabValue) => {
    var _a;
    return (_a = subitems.get(tabValue)) == null ? void 0 : _a.id;
  }, [subitems]);
  registerTabIdLookup(tabIdLookup);
  const subitemKeys = React77.useMemo(() => Array.from(subitems.keys()), [subitems]);
  const getTabElement = React77.useCallback((tabValue) => {
    var _a;
    if (tabValue == null) {
      return null;
    }
    return ((_a = subitems.get(tabValue)) == null ? void 0 : _a.ref.current) ?? null;
  }, [subitems]);
  const isRtl = direction === "rtl";
  let listOrientation;
  if (orientation === "vertical") {
    listOrientation = "vertical";
  } else {
    listOrientation = isRtl ? "horizontal-rtl" : "horizontal-ltr";
  }
  const handleChange = React77.useCallback((event, newValue) => {
    onSelected(event, newValue[0] ?? null);
  }, [onSelected]);
  const controlledProps = React77.useMemo(() => {
    if (value === void 0) {
      return {};
    }
    return value != null ? {
      selectedValues: [value]
    } : {
      selectedValues: []
    };
  }, [value]);
  const isItemDisabled = React77.useCallback((item) => {
    var _a;
    return ((_a = subitems.get(item)) == null ? void 0 : _a.disabled) ?? false;
  }, [subitems]);
  const {
    contextValue: listContextValue,
    dispatch,
    getRootProps: getListboxRootProps,
    state: {
      highlightedValue,
      selectedValues
    },
    rootRef: mergedRootRef
  } = useList({
    controlledProps,
    disabledItemsFocusable: !selectionFollowsFocus,
    focusManagement: "DOM",
    getItemDomElement: getTabElement,
    isItemDisabled,
    items: subitemKeys,
    rootRef: externalRef,
    onChange: handleChange,
    orientation: listOrientation,
    reducerActionContext: React77.useMemo(() => ({
      selectionFollowsFocus: selectionFollowsFocus || false
    }), [selectionFollowsFocus]),
    selectionMode: "single",
    stateReducer: tabsListReducer
  });
  React77.useEffect(() => {
    if (value === void 0) {
      return;
    }
    if (value != null) {
      dispatch({
        type: TabsListActionTypes.valueChange,
        value
      });
    }
  }, [dispatch, value]);
  const getRootProps = (externalProps = {}) => {
    return {
      ...externalProps,
      ...getListboxRootProps(externalProps),
      "aria-orientation": orientation === "vertical" ? "vertical" : void 0,
      role: "tablist"
    };
  };
  const contextValue = React77.useMemo(() => ({
    ...compoundComponentContextValue,
    ...listContextValue
  }), [compoundComponentContextValue, listContextValue]);
  return {
    contextValue,
    dispatch,
    getRootProps,
    highlightedValue,
    isRtl,
    orientation,
    rootRef: mergedRootRef,
    selectedValue: selectedValues[0] ?? null
  };
}

// node_modules/@mui/base/useTabsList/TabsListProvider.js
var React78 = __toESM(require_react());
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
function TabsListProvider(props) {
  const {
    value,
    children
  } = props;
  const {
    dispatch,
    getItemIndex,
    getItemState,
    registerItem,
    totalSubitemCount
  } = value;
  const listContextValue = React78.useMemo(() => ({
    dispatch,
    getItemState,
    getItemIndex
  }), [dispatch, getItemIndex, getItemState]);
  const compoundComponentContextValue = React78.useMemo(() => ({
    getItemIndex,
    registerItem,
    totalSubitemCount
  }), [registerItem, getItemIndex, totalSubitemCount]);
  return (0, import_jsx_runtime31.jsx)(CompoundComponentContext.Provider, {
    value: compoundComponentContextValue,
    children: (0, import_jsx_runtime31.jsx)(ListContext.Provider, {
      value: listContextValue,
      children
    })
  });
}

// node_modules/@mui/base/TabsList/TabsList.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var useUtilityClasses21 = (ownerState) => {
  const {
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation]
  };
  return composeClasses(slots, useClassNamesOverride(getTabsListUtilityClass));
};
var TabsList = React79.forwardRef(function TabsList2(props, forwardedRef) {
  const {
    children,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const {
    isRtl,
    orientation,
    getRootProps,
    contextValue
  } = useTabsList({
    rootRef: forwardedRef
  });
  const ownerState = {
    ...props,
    isRtl,
    orientation
  };
  const classes = useUtilityClasses21(ownerState);
  const TabsListRoot = slots.root ?? "div";
  const tabsListRootProps = useSlotProps_default({
    elementType: TabsListRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime32.jsx)(TabsListProvider, {
    value: contextValue,
    children: (0, import_jsx_runtime32.jsx)(TabsListRoot, {
      ...tabsListRootProps,
      children
    })
  });
});
true ? TabsList.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types29.default.node,
  /**
   * @ignore
   */
  className: import_prop_types29.default.string,
  /**
   * The props used for each slot inside the TabsList.
   * @default {}
   */
  slotProps: import_prop_types29.default.shape({
    root: import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.object])
  }),
  /**
   * The components used for each slot inside the TabsList.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types29.default.shape({
    root: import_prop_types29.default.elementType
  })
} : void 0;

// node_modules/@mui/base/Tab/Tab.js
var React81 = __toESM(require_react());
var import_prop_types30 = __toESM(require_prop_types());

// node_modules/@mui/base/Tab/tabClasses.js
var COMPONENT_NAME22 = "Tab";
function getTabUtilityClass(slot) {
  return generateUtilityClass3(COMPONENT_NAME22, slot);
}
var tabClasses = generateUtilityClasses3(COMPONENT_NAME22, ["root", "selected", "disabled"]);

// node_modules/@mui/base/useTab/useTab.js
var React80 = __toESM(require_react());
function tabValueGenerator(otherTabValues) {
  return otherTabValues.size;
}
function useTab(parameters) {
  const {
    value: valueParam,
    rootRef: externalRef,
    disabled = false,
    id: idParam
  } = parameters;
  const tabRef = React80.useRef(null);
  const id = useId(idParam);
  const {
    value: selectedValue,
    selectionFollowsFocus,
    getTabPanelId
  } = useTabsContext();
  const tabMetadata = React80.useMemo(() => ({
    disabled,
    ref: tabRef,
    id
  }), [disabled, tabRef, id]);
  const {
    id: value,
    index: index2,
    totalItemCount: totalTabsCount
  } = useCompoundItem(valueParam ?? tabValueGenerator, tabMetadata);
  const {
    getRootProps: getTabProps,
    highlighted,
    selected
  } = useListItem({
    item: value
  });
  const {
    getRootProps: getButtonProps,
    rootRef: buttonRefHandler,
    active,
    focusVisible,
    setFocusVisible
  } = useButton({
    disabled,
    focusableWhenDisabled: !selectionFollowsFocus,
    type: "button"
  });
  const handleRef = useForkRef(tabRef, externalRef, buttonRefHandler);
  const tabPanelId = value !== void 0 ? getTabPanelId(value) : void 0;
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = extractEventHandlers_default(externalProps);
    const getCombinedRootProps = combineHooksSlotProps(getTabProps, getButtonProps);
    return {
      ...externalProps,
      ...getCombinedRootProps(externalEventHandlers),
      role: "tab",
      "aria-controls": tabPanelId,
      "aria-selected": selected,
      id,
      ref: handleRef
    };
  };
  return {
    getRootProps,
    active,
    focusVisible,
    highlighted,
    index: index2,
    rootRef: handleRef,
    // the `selected` state isn't set on the server (it relies on effects to be calculated),
    // so we fall back to checking the `value` prop with the selectedValue from the TabsContext
    selected: selected || value === selectedValue,
    setFocusVisible,
    totalTabsCount
  };
}

// node_modules/@mui/base/Tab/Tab.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var useUtilityClasses22 = (ownerState) => {
  const {
    selected,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", disabled && "disabled"]
  };
  return composeClasses(slots, useClassNamesOverride(getTabUtilityClass));
};
var Tab = React81.forwardRef(function Tab2(props, forwardedRef) {
  const {
    action,
    children,
    disabled = false,
    onChange,
    onClick,
    onFocus,
    slotProps = {},
    slots = {},
    value,
    ...other
  } = props;
  const tabRef = React81.useRef(null);
  const handleRef = useForkRef(tabRef, forwardedRef);
  const {
    active,
    highlighted,
    selected,
    getRootProps
  } = useTab({
    ...props,
    rootRef: handleRef,
    value
  });
  const ownerState = {
    ...props,
    active,
    disabled,
    highlighted,
    selected
  };
  const classes = useUtilityClasses22(ownerState);
  const TabRoot = slots.root ?? "button";
  const tabRootProps = useSlotProps_default({
    elementType: TabRoot,
    getSlotProps: getRootProps,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime33.jsx)(TabRoot, {
    ...tabRootProps,
    children
  });
});
true ? Tab.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.shape({
    current: import_prop_types30.default.shape({
      focusVisible: import_prop_types30.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  children: import_prop_types30.default.node,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types30.default.bool,
  /**
   * Callback invoked when new value is being set.
   */
  onChange: import_prop_types30.default.func,
  /**
   * The props used for each slot inside the Tab.
   * @default {}
   */
  slotProps: import_prop_types30.default.shape({
    root: import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object])
  }),
  /**
   * The components used for each slot inside the Tab.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: import_prop_types30.default.shape({
    root: import_prop_types30.default.elementType
  }),
  /**
   * You can provide your own value. Otherwise, it falls back to the child position index.
   */
  value: import_prop_types30.default.oneOfType([import_prop_types30.default.number, import_prop_types30.default.string])
} : void 0;

// node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js
var React82 = __toESM(require_react());
var import_prop_types31 = __toESM(require_prop_types());
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
var styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function isEmpty(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflowing;
}
var TextareaAutosize = React82.forwardRef(function TextareaAutosize2(props, forwardedRef) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style,
    value,
    ...other
  } = props;
  const {
    current: isControlled
  } = React82.useRef(value != null);
  const inputRef = React82.useRef(null);
  const handleRef = useForkRef(forwardedRef, inputRef);
  const heightRef = React82.useRef(null);
  const shadowRef = React82.useRef(null);
  const calculateTextareaStyles = React82.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input);
    if (computedStyle.width === "0px") {
      return {
        outerHeightStyle: 0,
        overflowing: false
      };
    }
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      inputShallow.value += " ";
    }
    const boxSizing = computedStyle.boxSizing;
    const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
    const innerHeight = inputShallow.scrollHeight;
    inputShallow.value = "x";
    const singleRowHeight = inputShallow.scrollHeight;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const outerHeightStyle = outerHeight + (boxSizing === "border-box" ? padding + border : 0);
    const overflowing = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflowing
    };
  }, [maxRows, minRows, props.placeholder]);
  const syncHeight = React82.useCallback(() => {
    const textareaStyles = calculateTextareaStyles();
    if (isEmpty(textareaStyles)) {
      return;
    }
    const outerHeightStyle = textareaStyles.outerHeightStyle;
    const input = inputRef.current;
    if (heightRef.current !== outerHeightStyle) {
      heightRef.current = outerHeightStyle;
      input.style.height = `${outerHeightStyle}px`;
    }
    input.style.overflow = textareaStyles.overflowing ? "hidden" : "";
  }, [calculateTextareaStyles]);
  useEnhancedEffect_default(() => {
    const handleResize = () => {
      syncHeight();
    };
    let rAF;
    const rAFHandleResize = () => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        handleResize();
      });
    };
    const debounceHandleResize = debounce(handleResize);
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    containerWindow.addEventListener("resize", debounceHandleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(false ? rAFHandleResize : handleResize);
      resizeObserver.observe(input);
    }
    return () => {
      debounceHandleResize.clear();
      cancelAnimationFrame(rAF);
      containerWindow.removeEventListener("resize", debounceHandleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [calculateTextareaStyles, syncHeight]);
  useEnhancedEffect_default(() => {
    syncHeight();
  });
  const handleChange = (event) => {
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return (0, import_jsx_runtime34.jsxs)(React82.Fragment, {
    children: [(0, import_jsx_runtime34.jsx)("textarea", {
      value,
      onChange: handleChange,
      ref: handleRef,
      rows: minRows,
      style,
      ...other
    }), (0, import_jsx_runtime34.jsx)("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: {
        ...styles.shadow,
        ...style,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
true ? TextareaAutosize.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: import_prop_types31.default.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: import_prop_types31.default.oneOfType([import_prop_types31.default.number, import_prop_types31.default.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: import_prop_types31.default.oneOfType([import_prop_types31.default.number, import_prop_types31.default.string]),
  /**
   * @ignore
   */
  onChange: import_prop_types31.default.func,
  /**
   * @ignore
   */
  placeholder: import_prop_types31.default.string,
  /**
   * @ignore
   */
  style: import_prop_types31.default.object,
  /**
   * @ignore
   */
  value: import_prop_types31.default.oneOfType([import_prop_types31.default.arrayOf(import_prop_types31.default.string), import_prop_types31.default.number, import_prop_types31.default.string])
} : void 0;

// node_modules/@mui/base/Transitions/CssAnimation.js
var React83 = __toESM(require_react());
var import_prop_types32 = __toESM(require_prop_types());
init_clsx();
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
function CssAnimation(props) {
  const {
    children,
    className,
    enterAnimationName,
    enterClassName,
    exitAnimationName,
    exitClassName,
    ...other
  } = props;
  const {
    requestedEnter,
    onExited
  } = useTransitionStateManager();
  const hasExited = React83.useRef(true);
  React83.useEffect(() => {
    if (requestedEnter && hasExited.current) {
      hasExited.current = false;
    }
  }, [requestedEnter]);
  const handleAnimationEnd = React83.useCallback((event) => {
    if (event.animationName === exitAnimationName) {
      onExited();
      hasExited.current = true;
    } else if (event.animationName === enterAnimationName) {
      hasExited.current = false;
    }
  }, [onExited, exitAnimationName, enterAnimationName]);
  return (0, import_jsx_runtime35.jsx)("div", {
    onAnimationEnd: handleAnimationEnd,
    className: clsx_default(className, requestedEnter ? enterClassName : exitClassName),
    ...other,
    children
  });
}
true ? CssAnimation.propTypes = {
  children: import_prop_types32.default.node,
  className: import_prop_types32.default.string,
  enterAnimationName: import_prop_types32.default.string,
  enterClassName: import_prop_types32.default.string,
  exitAnimationName: import_prop_types32.default.string,
  exitClassName: import_prop_types32.default.string
} : void 0;

// node_modules/@mui/base/Transitions/CssTransition.js
var React84 = __toESM(require_react());
var import_prop_types33 = __toESM(require_prop_types());
init_clsx();
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var CssTransition = React84.forwardRef(function CssTransition2(props, forwardedRef) {
  const {
    children,
    className,
    lastTransitionedPropertyOnExit,
    enterClassName,
    exitClassName,
    ...other
  } = props;
  const {
    requestedEnter,
    onExited
  } = useTransitionStateManager();
  const [isEntering, setIsEntering] = React84.useState(false);
  React84.useEffect(() => {
    if (requestedEnter) {
      requestAnimationFrame(() => {
        setIsEntering(true);
      });
    } else {
      setIsEntering(false);
    }
  }, [requestedEnter]);
  const handleTransitionEnd = React84.useCallback((event) => {
    if (!requestedEnter && (lastTransitionedPropertyOnExit == null || event.propertyName === lastTransitionedPropertyOnExit)) {
      onExited();
    }
  }, [onExited, requestedEnter, lastTransitionedPropertyOnExit]);
  return (0, import_jsx_runtime36.jsx)("div", {
    onTransitionEnd: handleTransitionEnd,
    className: clsx_default(className, isEntering ? enterClassName : exitClassName),
    ...other,
    ref: forwardedRef,
    children
  });
});
true ? CssTransition.propTypes = {
  children: import_prop_types33.default.node,
  className: import_prop_types33.default.string,
  enterClassName: import_prop_types33.default.string,
  exitClassName: import_prop_types33.default.string,
  lastTransitionedPropertyOnEnter: import_prop_types33.default.string,
  lastTransitionedPropertyOnExit: import_prop_types33.default.string
} : void 0;

// node_modules/@mui/base/useAutocomplete/useAutocomplete.js
var React85 = __toESM(require_react());
function stripDiacritics(string) {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function createFilterOptions(config = {}) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = "any",
    stringify,
    trim = false
  } = config;
  return (options, {
    inputValue,
    getOptionLabel
  }) => {
    let input = trim ? inputValue.trim() : inputValue;
    if (ignoreCase) {
      input = input.toLowerCase();
    }
    if (ignoreAccents) {
      input = stripDiacritics(input);
    }
    const filteredOptions = !input ? options : options.filter((option) => {
      let candidate = (stringify || getOptionLabel)(option);
      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }
      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }
      return matchFrom === "start" ? candidate.startsWith(input) : candidate.indexOf(input) > -1;
    });
    return typeof limit === "number" ? filteredOptions.slice(0, limit) : filteredOptions;
  };
}
var defaultFilterOptions = createFilterOptions();

// node_modules/@mui/lab/LoadingButton/LoadingButton.js
init_DefaultPropsProvider();
init_resolveProps();

// node_modules/@mui/lab/LoadingButton/loadingButtonClasses.js
init_generateUtilityClass();
init_generateUtilityClasses();
function getLoadingButtonUtilityClass(slot) {
  return generateUtilityClass("MuiLoadingButton", slot);
}
var loadingButtonClasses = generateUtilityClasses("MuiLoadingButton", ["root", "label", "loading", "loadingIndicator", "loadingIndicatorCenter", "loadingIndicatorStart", "loadingIndicatorEnd", "endIconLoadingEnd", "startIconLoadingStart"]);
var loadingButtonClasses_default = loadingButtonClasses;

// node_modules/@mui/lab/LoadingButton/LoadingButton.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var useUtilityClasses23 = (ownerState) => {
  const {
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading"],
    label: ["label"],
    startIcon: [loading && `startIconLoading${capitalize_default(loadingPosition)}`],
    endIcon: [loading && `endIconLoading${capitalize_default(loadingPosition)}`],
    loadingIndicator: ["loadingIndicator", loading && `loadingIndicator${capitalize_default(loadingPosition)}`]
  };
  const composedClasses = composeClasses(slots, getLoadingButtonUtilityClass, classes);
  return {
    ...classes,
    // forward the outlined, color, etc. classes to Button
    ...composedClasses
  };
};
var rootShouldForwardProp = (prop) => prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as" && prop !== "classes";
var LoadingButtonRoot = styled_default(Button_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiLoadingButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    return [styles2.root, styles2.startIconLoadingStart && {
      [`& .${loadingButtonClasses_default.startIconLoadingStart}`]: styles2.startIconLoadingStart
    }, styles2.endIconLoadingEnd && {
      [`& .${loadingButtonClasses_default.endIconLoadingEnd}`]: styles2.endIconLoadingEnd
    }];
  }
})(memoTheme(({
  theme
}) => ({
  display: "inline-flex",
  [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0
  },
  variants: [{
    props: {
      loadingPosition: "center"
    },
    style: {
      transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
        duration: theme.transitions.duration.short
      }),
      [`&.${loadingButtonClasses_default.loading}`]: {
        color: "transparent"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.loadingPosition === "start" && ownerState.fullWidth,
    style: {
      [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
        transition: theme.transitions.create(["opacity"], {
          duration: theme.transitions.duration.short
        }),
        opacity: 0,
        marginRight: -8
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.loadingPosition === "end" && ownerState.fullWidth,
    style: {
      [`& .${loadingButtonClasses_default.startIconLoadingStart}, & .${loadingButtonClasses_default.endIconLoadingEnd}`]: {
        transition: theme.transitions.create(["opacity"], {
          duration: theme.transitions.duration.short
        }),
        opacity: 0,
        marginLeft: -8
      }
    }
  }]
})));
var LoadingButtonLoadingIndicator = styled_default("span", {
  name: "MuiLoadingButton",
  slot: "LoadingIndicator",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.loadingIndicator, styles2[`loadingIndicator${capitalize_default(ownerState.loadingPosition)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  position: "absolute",
  visibility: "visible",
  display: "flex",
  variants: [{
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: ({
      loadingPosition,
      ownerState
    }) => loadingPosition === "start" && ownerState.size !== "small",
    style: {
      left: 14
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (theme.vars || theme).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: ({
      loadingPosition,
      ownerState
    }) => loadingPosition === "end" && ownerState.size !== "small",
    style: {
      right: 14
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.loadingPosition === "start" && ownerState.fullWidth,
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.loadingPosition === "end" && ownerState.fullWidth,
    style: {
      position: "relative",
      right: -10
    }
  }]
})));
var LoadingButtonLabel = styled_default("span", {
  name: "MuiLoadingButton",
  slot: "Label",
  overridesResolver: (props, styles2) => {
    return [styles2.label];
  }
})({
  display: "inherit",
  alignItems: "inherit",
  justifyContent: "inherit"
});
var LoadingButton = React86.forwardRef(function LoadingButton2(inProps, ref) {
  const contextProps = React86.useContext(ButtonGroupContext_default);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useDefaultProps({
    props: resolvedProps,
    name: "MuiLoadingButton"
  });
  const {
    children,
    disabled = false,
    id: idProp,
    loading = false,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = "center",
    variant = "text",
    ...other
  } = props;
  const id = useId_default(idProp);
  const loadingIndicator = loadingIndicatorProp ?? (0, import_jsx_runtime37.jsx)(CircularProgress_default, {
    "aria-labelledby": id,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    disabled,
    loading,
    loadingIndicator,
    loadingPosition,
    variant
  };
  const classes = useUtilityClasses23(ownerState);
  const loadingButtonLoadingIndicator = loading ? (0, import_jsx_runtime37.jsx)(LoadingButtonLoadingIndicator, {
    className: classes.loadingIndicator,
    ownerState,
    children: loadingIndicator
  }) : null;
  return (0, import_jsx_runtime37.jsxs)(LoadingButtonRoot, {
    disabled: disabled || loading,
    id,
    ref,
    ...other,
    variant,
    classes,
    ownerState,
    children: [ownerState.loadingPosition === "end" ? (0, import_jsx_runtime37.jsx)(LoadingButtonLabel, {
      className: classes.label,
      children
    }) : loadingButtonLoadingIndicator, ownerState.loadingPosition === "end" ? loadingButtonLoadingIndicator : (0, import_jsx_runtime37.jsx)(LoadingButtonLabel, {
      className: classes.label,
      children
    })]
  });
});
true ? LoadingButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types34.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types34.default.object,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types34.default.bool,
  /**
   * @ignore
   */
  id: import_prop_types34.default.string,
  /**
   * If `true`, the loading indicator is shown and the button becomes disabled.
   * @default false
   */
  loading: import_prop_types34.default.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default we render a `CircularProgress` that is labelled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: import_prop_types34.default.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: chainPropTypes(import_prop_types34.default.oneOf(["start", "end", "center"]), (props) => {
    if (props.loadingPosition === "start" && !props.startIcon) {
      return new Error(`MUI: The loadingPosition="start" should be used in combination with startIcon.`);
    }
    if (props.loadingPosition === "end" && !props.endIcon) {
      return new Error(`MUI: The loadingPosition="end" should be used in combination with endIcon.`);
    }
    return null;
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types34.default.oneOfType([import_prop_types34.default.arrayOf(import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object, import_prop_types34.default.bool])), import_prop_types34.default.func, import_prop_types34.default.object]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: import_prop_types34.default.oneOfType([import_prop_types34.default.oneOf(["contained", "outlined", "text"]), import_prop_types34.default.string])
} : void 0;
var LoadingButton_default = LoadingButton;
export {
  LoadingButton_default as default,
  getLoadingButtonUtilityClass,
  loadingButtonClasses_default as loadingButtonClasses
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@mui/base/index.js:
  (**
   * @mui/base v5.0.0-beta.58
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@mui_lab_LoadingButton.js.map
