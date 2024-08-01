"use strict";
var __assign = (this && this.__assign) || function () {
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indicators = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Styled_1 = require("./Styled");
var Indicators = function (props) {
    var IndicatorIcon = (0, react_1.useMemo)(function () {
        return props.IndicatorIcon !== undefined ? (props.IndicatorIcon) : ((0, jsx_runtime_1.jsx)(Styled_1.StyledFiberManualRecordIcon, {}, void 0));
    }, [props.IndicatorIcon]);
    var completeListIfRequired = (0, react_1.useCallback)(function (arrayOfIcons) {
        while (arrayOfIcons.length < props.length) {
            var index = 0;
            arrayOfIcons.push(arrayOfIcons[index]);
            index += 1;
        }
    }, [props.length]);
    var _a = props.indicatorIconButtonProps, indicatorIconButtonClass = _a.className, indicatorIconButtonStyle = _a.style, indicatorIconButtonProps = __rest(_a, ["className", "style"]);
    var _b = props.activeIndicatorIconButtonProps, activeIndicatorIconButtonClass = _b.className, activeIndicatorIconButtonStyle = _b.style, activeIndicatorIconButtonProps = __rest(_b, ["className", "style"]);
    var indicators = [];
    var _loop_1 = function (i) {
        var className = i === props.active
            ? indicatorIconButtonClass + " " + activeIndicatorIconButtonClass
            : "" + indicatorIconButtonClass;
        var style = i === props.active
            ? Object.assign({}, indicatorIconButtonStyle, activeIndicatorIconButtonStyle)
            : indicatorIconButtonStyle;
        var restProps = i === props.active
            ? Object.assign({}, indicatorIconButtonProps, activeIndicatorIconButtonProps)
            : indicatorIconButtonProps;
        if (restProps["aria-label"] === undefined)
            restProps["aria-label"] = "carousel indicator";
        var createIndicator = function (IndicatorIcon) {
            return ((0, jsx_runtime_1.jsx)(Styled_1.StyledIndicatorIconButton, __assign({ "$active": i === props.active, className: className, style: style, onClick: function () {
                    props.press(i);
                } }, restProps, { "aria-label": restProps["aria-label"] + " " + (i + 1) }, { children: IndicatorIcon }), i));
        };
        Array.isArray(IndicatorIcon)
            ? indicators.push(createIndicator(IndicatorIcon[i])) &&
                completeListIfRequired(IndicatorIcon)
            : indicators.push(createIndicator(IndicatorIcon));
    };
    for (var i = 0; i < props.length; i++) {
        _loop_1(i);
    }
    var _c = props.indicatorContainerProps, indicatorContainerClass = _c.className, indicatorContainerStyle = _c.style, indicatorContainerProps = __rest(_c, ["className", "style"]);
    return ((0, jsx_runtime_1.jsx)(Styled_1.StyledIndicators, __assign({ className: indicatorContainerClass, style: indicatorContainerStyle }, indicatorContainerProps, { children: indicators }), void 0));
};
exports.Indicators = Indicators;
