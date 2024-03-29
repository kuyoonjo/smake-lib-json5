const { LLVM } = require('@smake/llvm');
const { vscode } = require('@smake/llvm-vscode');
const { LibJson5 } = require('./lib');

const test = new LLVM('test', 'aarch64-apple-darwin');
test.files = ['src/test.cc'];
LibJson5.config(test);
vscode(test);

module.exports = [test];
