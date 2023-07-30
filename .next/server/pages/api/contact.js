"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 9602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/contact.js

async function handler(req, res) {
    const connectURL = `mongodb+srv://${"nejihoussein1"}:${"1tHCiDc2zZgG3MYf"}@${"cluster0"}.p6liy3s.mongodb.net/${"userMassages"}?retryWrites=true&w=majority`;
    const client = await external_mongodb_namespaceObject.MongoClient.connect(connectURL);
    const db = client.db();
    const messageCollection = db.collection("messages");
    if (req.method === "POST") {
        const { name, email, message } = req.body;
        const userMessage = {
            name,
            email,
            message
        };
        try {
            await messageCollection.insertOne(userMessage);
            res.status(201).json({
                message: "Sent!"
            });
        } catch (error) {
            res.status(505).json({
                message: "error sending message"
            });
        }
    } else {
        res.status(200).json({
            message: "working find baby"
        });
    }
}
/* harmony default export */ const contact = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9602));
module.exports = __webpack_exports__;

})();