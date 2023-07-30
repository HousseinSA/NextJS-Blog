"use strict";
exports.id = 853;
exports.ids = [853];
exports.modules = {

/***/ 9853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* binding */ getAllPosts),
/* harmony export */   CH: () => (/* binding */ filesNames),
/* harmony export */   mH: () => (/* binding */ getFeaturedPosts)
/* harmony export */ });
/* unused harmony export getPostData */
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);

function getAllPosts(path, postsPath, fs) {
    const postFiles = fs.readdirSync(postsPath);
    const postsData = postFiles.map((fileName)=>{
        return getPostData(path, fileName, postsPath, fs);
    });
    const sortedPostData = postsData.sort((postA, postB)=>postB.date > postA.date ? -1 : 1);
    return sortedPostData;
}
function getPostData(path, fileName, postsPath, fs) {
    const filepath = path.join(postsPath, fileName);
    const postData = fs.readFileSync(filepath);
    const { data, content } = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(postData);
    const updateFileName = fileName.replace(".md", "");
    const post = {
        slug: updateFileName,
        ...data,
        content
    };
    return post;
}
function getFeaturedPosts(path, postsPath, fs) {
    const allPosts = getAllPosts(path, postsPath, fs);
    const featuredPosts = allPosts.filter((post)=>post.isFeatured);
    return featuredPosts;
}
function filesNames(path, fs) {
    const filespath = path.join(process.cwd(), "posts");
    const fileNames = fs.readdirSync(filespath);
    const updateFileNames = fileNames.map((fileName)=>fileName.replace(".md", ""));
    return updateFileNames;
}


/***/ })

};
;