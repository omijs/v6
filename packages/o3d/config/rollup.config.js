import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import memory from "rollup-plugin-memory";

const license = require("rollup-plugin-license");
const pkg = require("../package.json");
const licensePlugin = license({
	banner:
		" o3d v" +
		pkg.version +
		"  https://tencent.github.io/omi/\r\nOmi === Preact + Scoped CSS + Store System + Native Support in 3kb javascript.\r\nBy dntzhang https://github.com/dntzhang \r\n Github: https://github.com/Tencent/o3d\r\n MIT Licensed."
});

export default {
	input: "src/o3d.js",
	output: {
		format: "iife",
		file: "dist/o3d.dev.js",
		name: "o3d",
		sourcemap: true,
		strict: true
	},
	plugins: [
		memory({
			path: "src/o3d.js",
			contents: `
				import Omi from './o3d';
				if (typeof module!='undefined') module.exports = Omi;
				else self.Omi = Omi;
			`
		}),
		nodeResolve({
			main: true
		}),
		babel({
			sourceMap: true,
			exclude: "node_modules/**",
			babelrc: false,
			presets: [
				[
					"env",
					{
						modules: false,
						loose: true,
						exclude: ["transform-es2015-typeof-symbol"],
						targets: {
							browsers: ["last 2 versions", "IE >= 9"]
						}
					}
				]
			],
			plugins: [
				"transform-class-properties"
			]
		}),
		licensePlugin
	]
};
