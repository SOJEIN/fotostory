import {
  __esm
} from "./chunk-4B2QHNJT.js";

// node_modules/@mui/material/utils/memoTheme.js
function memoTheme(styleFn) {
  let lastValue;
  let lastTheme;
  return (props) => {
    let value = lastValue;
    if (value === void 0 || props.theme !== lastTheme) {
      arg.theme = props.theme;
      value = styleFn(arg);
      lastValue = value;
      lastTheme = props.theme;
    }
    return value;
  };
}
var arg;
var init_memoTheme = __esm({
  "node_modules/@mui/material/utils/memoTheme.js"() {
    arg = {
      theme: void 0
    };
  }
});

export {
  memoTheme,
  init_memoTheme
};
//# sourceMappingURL=chunk-TOKM6Z3M.js.map
