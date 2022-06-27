"use strict";
var _fs = _interopRequireDefault(require("fs"));
var _frontMatter = _interopRequireDefault(require("front-matter"));
var _gitgit = require("./utils/gitgit");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function main() {
    var files = _gitgit.gitgit.readDir("./data/*.md");
    var index = files.map(function(item) {
        var text = _gitgit.gitgit.readFile(item);
        var format = (0, _frontMatter).default(text);
        return format;
    });
    _fs.default.writeFileSync("./index.json", JSON.stringify(index));
}
main();
