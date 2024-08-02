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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var Styled_1 = require("./Styled");
var CarouselItem = function (_a) {
    var animation = _a.animation, next = _a.next, prev = _a.prev, swipe = _a.swipe, state = _a.state, index = _a.index, maxIndex = _a.maxIndex, duration = _a.duration, child = _a.child, height = _a.height, setHeight = _a.setHeight;
    var slide = animation === "slide";
    var fade = animation === "fade";
    var dragProps = {
        drag: "x",
        layout: true,
        onDragEnd: function (event, info) {
            if (!swipe)
                return;
            if (info.offset.x > 0)
                prev && prev();
            else if (info.offset.x < 0)
                next && next();
            event.stopPropagation();
        },
        dragElastic: 0,
        dragConstraints: { left: 0, right: 0 },
    };
    var divRef = (0, react_1.useRef)(null);
    var checkAndSetHeight = (0, react_1.useCallback)(function () {
        if (index !== state.active)
            return;
        if (!divRef.current)
            return;
        if (divRef.current.offsetHeight === 0) {
            setTimeout(function () { return checkAndSetHeight(); }, 100);
        }
        else {
            setHeight(divRef.current.offsetHeight);
        }
    }, [setHeight, state.active, index, divRef]);
    // Set height on every child change
    (0, react_1.useEffect)(function () {
        checkAndSetHeight();
    }, [checkAndSetHeight]);
    var variants = {
        leftwardExit: {
            x: slide ? "-100%" : undefined,
            opacity: fade ? 0 : undefined,
            zIndex: 0,
            // position: 'relative'
        },
        leftOut: {
            x: slide ? "-100%" : undefined,
            opacity: fade ? 0 : undefined,
            display: "none",
            zIndex: 0,
            // position: 'relative'
        },
        rightwardExit: {
            x: slide ? "100%" : undefined,
            opacity: fade ? 0 : undefined,
            zIndex: 0,
            // position: 'relative'
        },
        rightOut: {
            x: slide ? "100%" : undefined,
            opacity: fade ? 0 : undefined,
            display: "none",
            zIndex: 0,
            // position: 'relative'
        },
        center: {
            x: 0,
            opacity: 1,
            zIndex: 1,
            // position: 'relative'
        },
    };
    // Handle animation directions and opacity given based on active, prevActive and this item's index
    var active = state.active, isNext = state.next, prevActive = state.prevActive;
    var animate = "center";
    if (index === active)
        animate = "center";
    else if (index === prevActive) {
        animate = isNext ? "leftwardExit" : "rightwardExit";
        if (active === maxIndex && index === 0)
            animate = "rightwardExit";
        if (active === 0 && index === maxIndex)
            animate = "leftwardExit";
    }
    else {
        animate = index < active ? "leftOut" : "rightOut";
        if (active === maxIndex && index === 0)
            animate = "rightOut";
        if (active === 0 && index === maxIndex)
            animate = "leftOut";
    }
    duration = duration / 1000;
    return ((0, jsx_runtime_1.jsx)(Styled_1.StyledItem, { children: (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, __assign({ custom: isNext }, { children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, __assign({}, (swipe && dragProps), { style: { height: "100%" } }, { children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, __assign({ custom: isNext, variants: variants, animate: animate, transition: {
                        x: { type: "tween", duration: duration, delay: 0 },
                        opacity: { duration: duration },
                    }, style: { position: "relative", height: "100%" } }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ ref: divRef, style: { height: height } }, { children: child }), void 0) }), void 0) }), void 0) }), void 0) }, void 0));
};
exports.CarouselItem = CarouselItem;
