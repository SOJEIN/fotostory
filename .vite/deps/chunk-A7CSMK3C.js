import {
  capitalize_default,
  init_capitalize
} from "./chunk-BDJ4D2RV.js";
import {
  init_isMuiElement,
  isMuiElement_default
} from "./chunk-OJKPAQLC.js";
import {
  init_useEnhancedEffect,
  useEnhancedEffect_default
} from "./chunk-EFGLQNUC.js";
import {
  init_useEventCallback,
  init_useForkRef,
  useEventCallback_default,
  useForkRef_default
} from "./chunk-ZJUSKGE2.js";
import {
  init_memoTheme,
  memoTheme
} from "./chunk-TOKM6Z3M.js";
import {
  init_DefaultPropsProvider,
  init_zero_styled,
  useDefaultProps
} from "./chunk-OPZCHWMZ.js";
import {
  ClassNameGenerator_default,
  composeClasses,
  createChainedFunction,
  debounce,
  deprecatedPropType,
  generateUtilityClass,
  generateUtilityClasses,
  init_composeClasses,
  init_createChainedFunction,
  init_debounce,
  init_deprecatedPropType,
  init_esm,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_ownerDocument,
  init_ownerWindow,
  init_requirePropFactory,
  init_setRef,
  init_unsupportedProp,
  init_useControlled,
  init_useId,
  ownerDocument,
  ownerWindow,
  requirePropFactory,
  require_prop_types,
  setRef,
  styled_default,
  unsupportedProp,
  useControlled,
  useId
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
  __esm,
  __export,
  __toESM
} from "./chunk-4B2QHNJT.js";

// node_modules/@mui/material/utils/createChainedFunction.js
var createChainedFunction_default;
var init_createChainedFunction2 = __esm({
  "node_modules/@mui/material/utils/createChainedFunction.js"() {
    init_createChainedFunction();
    createChainedFunction_default = createChainedFunction;
  }
});

// node_modules/@mui/material/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses, svgIconClasses_default;
var init_svgIconClasses = __esm({
  "node_modules/@mui/material/SvgIcon/svgIconClasses.js"() {
    init_generateUtilityClasses();
    init_generateUtilityClass();
    svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
    svgIconClasses_default = svgIconClasses;
  }
});

// node_modules/@mui/material/SvgIcon/SvgIcon.js
var React, import_prop_types, import_jsx_runtime, useUtilityClasses, SvgIconRoot, SvgIcon, SvgIcon_default;
var init_SvgIcon = __esm({
  "node_modules/@mui/material/SvgIcon/SvgIcon.js"() {
    "use client";
    React = __toESM(require_react());
    import_prop_types = __toESM(require_prop_types());
    init_clsx();
    init_composeClasses();
    init_capitalize();
    init_zero_styled();
    init_memoTheme();
    init_DefaultPropsProvider();
    init_svgIconClasses();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    useUtilityClasses = (ownerState) => {
      const {
        color,
        fontSize,
        classes
      } = ownerState;
      const slots = {
        root: ["root", color !== "inherit" && `color${capitalize_default(color)}`, `fontSize${capitalize_default(fontSize)}`]
      };
      return composeClasses(slots, getSvgIconUtilityClass, classes);
    };
    SvgIconRoot = styled_default("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (props, styles) => {
        const {
          ownerState
        } = props;
        return [styles.root, ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`], styles[`fontSize${capitalize_default(ownerState.fontSize)}`]];
      }
    })(memoTheme(({
      theme
    }) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition: (_d = (_a = theme.transitions) == null ? void 0 : _a.create) == null ? void 0 : _d.call(_a, "fill", {
          duration: (_c = (_b = (theme.vars ?? theme).transitions) == null ? void 0 : _b.duration) == null ? void 0 : _c.shorter
        }),
        variants: [
          {
            props: (props) => !props.hasSvgAsChild,
            style: {
              // the <svg> will define the property that has `currentColor`
              // for example heroicons uses fill="none" and stroke="currentColor"
              fill: "currentColor"
            }
          },
          {
            props: {
              fontSize: "inherit"
            },
            style: {
              fontSize: "inherit"
            }
          },
          {
            props: {
              fontSize: "small"
            },
            style: {
              fontSize: ((_f = (_e = theme.typography) == null ? void 0 : _e.pxToRem) == null ? void 0 : _f.call(_e, 20)) || "1.25rem"
            }
          },
          {
            props: {
              fontSize: "medium"
            },
            style: {
              fontSize: ((_h = (_g = theme.typography) == null ? void 0 : _g.pxToRem) == null ? void 0 : _h.call(_g, 24)) || "1.5rem"
            }
          },
          {
            props: {
              fontSize: "large"
            },
            style: {
              fontSize: ((_j = (_i = theme.typography) == null ? void 0 : _i.pxToRem) == null ? void 0 : _j.call(_i, 35)) || "2.1875rem"
            }
          },
          // TODO v5 deprecate color prop, v6 remove for sx
          ...Object.entries((theme.vars ?? theme).palette).filter(([, value]) => value && value.main).map(([color]) => {
            var _a2, _b2;
            return {
              props: {
                color
              },
              style: {
                color: (_b2 = (_a2 = (theme.vars ?? theme).palette) == null ? void 0 : _a2[color]) == null ? void 0 : _b2.main
              }
            };
          }),
          {
            props: {
              color: "action"
            },
            style: {
              color: (_l = (_k = (theme.vars ?? theme).palette) == null ? void 0 : _k.action) == null ? void 0 : _l.active
            }
          },
          {
            props: {
              color: "disabled"
            },
            style: {
              color: (_n = (_m = (theme.vars ?? theme).palette) == null ? void 0 : _m.action) == null ? void 0 : _n.disabled
            }
          },
          {
            props: {
              color: "inherit"
            },
            style: {
              color: void 0
            }
          }
        ]
      };
    }));
    SvgIcon = React.forwardRef(function SvgIcon2(inProps, ref) {
      const props = useDefaultProps({
        props: inProps,
        name: "MuiSvgIcon"
      });
      const {
        children,
        className,
        color = "inherit",
        component = "svg",
        fontSize = "medium",
        htmlColor,
        inheritViewBox = false,
        titleAccess,
        viewBox = "0 0 24 24",
        ...other
      } = props;
      const hasSvgAsChild = React.isValidElement(children) && children.type === "svg";
      const ownerState = {
        ...props,
        color,
        component,
        fontSize,
        instanceFontSize: inProps.fontSize,
        inheritViewBox,
        viewBox,
        hasSvgAsChild
      };
      const more = {};
      if (!inheritViewBox) {
        more.viewBox = viewBox;
      }
      const classes = useUtilityClasses(ownerState);
      return (0, import_jsx_runtime.jsxs)(SvgIconRoot, {
        as: component,
        className: clsx_default(classes.root, className),
        focusable: "false",
        color: htmlColor,
        "aria-hidden": titleAccess ? void 0 : true,
        role: titleAccess ? "img" : void 0,
        ref,
        ...more,
        ...other,
        ...hasSvgAsChild && children.props,
        ownerState,
        children: [hasSvgAsChild ? children.props.children : children, titleAccess ? (0, import_jsx_runtime.jsx)("title", {
          children: titleAccess
        }) : null]
      });
    });
    true ? SvgIcon.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * Node passed into the SVG element.
       */
      children: import_prop_types.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types.default.object,
      /**
       * @ignore
       */
      className: import_prop_types.default.string,
      /**
       * The color of the component.
       * It supports both default and custom theme colors, which can be added as shown in the
       * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
       * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
       * @default 'inherit'
       */
      color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types.default.string]),
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types.default.elementType,
      /**
       * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
       * @default 'medium'
       */
      fontSize: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types.default.string]),
      /**
       * Applies a color attribute to the SVG element.
       */
      htmlColor: import_prop_types.default.string,
      /**
       * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
       * prop will be ignored.
       * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
       * `component`'s viewBox to the root node.
       * @default false
       */
      inheritViewBox: import_prop_types.default.bool,
      /**
       * The shape-rendering attribute. The behavior of the different options is described on the
       * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
       * If you are having issues with blurry icons you should investigate this prop.
       */
      shapeRendering: import_prop_types.default.string,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
      /**
       * Provides a human-readable title for the element that contains it.
       * https://www.w3.org/TR/SVG-access/#Equivalent
       */
      titleAccess: import_prop_types.default.string,
      /**
       * Allows you to redefine what the coordinates without units mean inside an SVG element.
       * For example, if the SVG element is 500 (width) by 200 (height),
       * and you pass viewBox="0 0 50 20",
       * this means that the coordinates inside the SVG will go from the top left corner (0,0)
       * to bottom right (50,20) and each unit will be worth 10px.
       * @default '0 0 24 24'
       */
      viewBox: import_prop_types.default.string
    } : void 0;
    if (SvgIcon) {
      SvgIcon.muiName = "SvgIcon";
    }
    SvgIcon_default = SvgIcon;
  }
});

// node_modules/@mui/material/SvgIcon/index.js
var init_SvgIcon2 = __esm({
  "node_modules/@mui/material/SvgIcon/index.js"() {
    init_SvgIcon();
    init_svgIconClasses();
    init_svgIconClasses();
  }
});

// node_modules/@mui/material/utils/createSvgIcon.js
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return (0, import_jsx_runtime2.jsx)(SvgIcon_default, {
      "data-testid": `${displayName}Icon`,
      ref,
      ...props,
      children: path
    });
  }
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return React2.memo(React2.forwardRef(Component));
}
var React2, import_jsx_runtime2;
var init_createSvgIcon = __esm({
  "node_modules/@mui/material/utils/createSvgIcon.js"() {
    "use client";
    React2 = __toESM(require_react());
    init_SvgIcon2();
    import_jsx_runtime2 = __toESM(require_jsx_runtime());
  }
});

// node_modules/@mui/material/utils/debounce.js
var debounce_default;
var init_debounce2 = __esm({
  "node_modules/@mui/material/utils/debounce.js"() {
    init_debounce();
    debounce_default = debounce;
  }
});

// node_modules/@mui/material/utils/deprecatedPropType.js
var deprecatedPropType_default;
var init_deprecatedPropType2 = __esm({
  "node_modules/@mui/material/utils/deprecatedPropType.js"() {
    init_deprecatedPropType();
    deprecatedPropType_default = deprecatedPropType;
  }
});

// node_modules/@mui/material/utils/ownerDocument.js
var ownerDocument_default;
var init_ownerDocument2 = __esm({
  "node_modules/@mui/material/utils/ownerDocument.js"() {
    init_ownerDocument();
    ownerDocument_default = ownerDocument;
  }
});

// node_modules/@mui/material/utils/ownerWindow.js
var ownerWindow_default;
var init_ownerWindow2 = __esm({
  "node_modules/@mui/material/utils/ownerWindow.js"() {
    init_ownerWindow();
    ownerWindow_default = ownerWindow;
  }
});

// node_modules/@mui/material/utils/requirePropFactory.js
var requirePropFactory_default;
var init_requirePropFactory2 = __esm({
  "node_modules/@mui/material/utils/requirePropFactory.js"() {
    init_requirePropFactory();
    requirePropFactory_default = requirePropFactory;
  }
});

// node_modules/@mui/material/utils/setRef.js
var setRef_default;
var init_setRef2 = __esm({
  "node_modules/@mui/material/utils/setRef.js"() {
    init_setRef();
    setRef_default = setRef;
  }
});

// node_modules/@mui/material/utils/useId.js
var useId_default;
var init_useId2 = __esm({
  "node_modules/@mui/material/utils/useId.js"() {
    "use client";
    init_useId();
    useId_default = useId;
  }
});

// node_modules/@mui/material/utils/unsupportedProp.js
var unsupportedProp_default;
var init_unsupportedProp2 = __esm({
  "node_modules/@mui/material/utils/unsupportedProp.js"() {
    init_unsupportedProp();
    unsupportedProp_default = unsupportedProp;
  }
});

// node_modules/@mui/material/utils/useControlled.js
var useControlled_default;
var init_useControlled2 = __esm({
  "node_modules/@mui/material/utils/useControlled.js"() {
    "use client";
    init_useControlled();
    useControlled_default = useControlled;
  }
});

// node_modules/@mui/material/utils/index.js
var utils_exports = {};
__export(utils_exports, {
  capitalize: () => capitalize_default,
  createChainedFunction: () => createChainedFunction_default,
  createSvgIcon: () => createSvgIcon,
  debounce: () => debounce_default,
  deprecatedPropType: () => deprecatedPropType_default,
  isMuiElement: () => isMuiElement_default,
  ownerDocument: () => ownerDocument_default,
  ownerWindow: () => ownerWindow_default,
  requirePropFactory: () => requirePropFactory_default,
  setRef: () => setRef_default,
  unstable_ClassNameGenerator: () => unstable_ClassNameGenerator,
  unstable_memoTheme: () => memoTheme,
  unstable_useEnhancedEffect: () => useEnhancedEffect_default,
  unstable_useId: () => useId_default,
  unsupportedProp: () => unsupportedProp_default,
  useControlled: () => useControlled_default,
  useEventCallback: () => useEventCallback_default,
  useForkRef: () => useForkRef_default
});
var unstable_ClassNameGenerator;
var init_utils = __esm({
  "node_modules/@mui/material/utils/index.js"() {
    "use client";
    init_esm();
    init_capitalize();
    init_createChainedFunction2();
    init_createSvgIcon();
    init_debounce2();
    init_deprecatedPropType2();
    init_isMuiElement();
    init_memoTheme();
    init_ownerDocument2();
    init_ownerWindow2();
    init_requirePropFactory2();
    init_setRef2();
    init_useEnhancedEffect();
    init_useId2();
    init_unsupportedProp2();
    init_useControlled2();
    init_useEventCallback();
    init_useForkRef();
    unstable_ClassNameGenerator = {
      configure: (generator) => {
        if (true) {
          console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join("\n"));
        }
        ClassNameGenerator_default.configure(generator);
      }
    };
  }
});

export {
  createChainedFunction_default,
  init_createChainedFunction2 as init_createChainedFunction,
  getSvgIconUtilityClass,
  svgIconClasses_default,
  SvgIcon_default,
  init_SvgIcon2 as init_SvgIcon,
  createSvgIcon,
  init_createSvgIcon,
  debounce_default,
  init_debounce2 as init_debounce,
  deprecatedPropType_default,
  ownerDocument_default,
  init_ownerDocument2 as init_ownerDocument,
  ownerWindow_default,
  init_ownerWindow2 as init_ownerWindow,
  requirePropFactory_default,
  init_requirePropFactory2 as init_requirePropFactory,
  setRef_default,
  useId_default,
  init_useId2 as init_useId,
  unsupportedProp_default,
  init_unsupportedProp2 as init_unsupportedProp,
  useControlled_default,
  init_useControlled2 as init_useControlled,
  unstable_ClassNameGenerator,
  utils_exports,
  init_utils
};
//# sourceMappingURL=chunk-A7CSMK3C.js.map
