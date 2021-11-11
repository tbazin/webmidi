import babel from "rollup-plugin-babel";
const fs = require("fs");
const license = require("rollup-plugin-license");
const versionInjector = require("rollup-plugin-version-injector");

const BANNER = fs.readFileSync(__dirname + "/../../BANNER.txt", "utf8") + "\n\n\n";

export default {
  plugins: [
    versionInjector(),
    babel(),
    license({banner: BANNER})
  ]
};