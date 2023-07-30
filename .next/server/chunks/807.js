"use strict";
exports.id = 807;
exports.ids = [807];
exports.modules = {

/***/ 7807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Hero)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/IMG_20230225_231859.jpg
/* harmony default export */ const IMG_20230225_231859 = ({"src":"/_next/static/media/IMG_20230225_231859.a4d40b77.jpg","height":955,"width":830,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAoASf/8QAHBAAAgICAwAAAAAAAAAAAAAAAgMEEgABBQYi/9oACAEBAAE/AOH63LgKFWpCWPSwiv6C1s//xAAZEQABBQAAAAAAAAAAAAAAAAAAAQMygrH/2gAIAQIBAT8AbjZdP//EABgRAAIDAAAAAAAAAAAAAAAAAAABAiFx/9oACAEDAQE/AJu1iP/Z","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./pages/components/Hero.jsx



const HeroPage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "bg-slate-900 p-20",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: " flex justify-center",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: IMG_20230225_231859,
                    alt: "Hue Face",
                    priority: true,
                    width: 200,
                    height: 200,
                    className: "rounded-full my-4 w-48 h-48"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-white",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: "text-4xl text-center font-bold my-4",
                        children: "Hi, I'm Hue"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-center",
                        children: "I blog about web development-especially Frontend framework like react and angluar"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Hero = (HeroPage);


/***/ })

};
;