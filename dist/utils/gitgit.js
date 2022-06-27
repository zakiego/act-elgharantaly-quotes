"use strict";
exports.gitgit = void 0;
var _glob = _interopRequireDefault(require("glob"));
var _fs = _interopRequireDefault(require("fs"));
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var gitgit = /*#__PURE__*/ function() {
    "use strict";
    function gitgit() {
        _classCallCheck(this, gitgit);
    }
    gitgit.readDir = function readDir(pattern) {
        var files = _glob.default.sync(pattern);
        return files;
    };
    gitgit.readFile = function readFile(path) {
        var data = _fs.default.readFileSync(path, {
            encoding: "utf8",
            flag: "r"
        });
        return data;
    };
    return gitgit;
}();
exports.gitgit = gitgit;
