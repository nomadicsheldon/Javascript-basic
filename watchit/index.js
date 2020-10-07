#!/usr/bin/env node

const chokidar = require("chokidar"); // use for observe change in file
const debounce = require("lodash.debounce"); // use to handle debounce
const program = require("caporal"); // use for terminal setting
const fs = require("fs"); // use for file accessing
const { spawn } = require("child_process"); // use for run command in terminal

program
  .version("0.0.1")
  .argument("[filename]", "Name of the file to execute")
  .action(async ({ filename }) => {
    const name = filename || "index.js";
    try {
      await fs.promises.access(name);
    } catch (err) {
      throw new Error(`Could not find the file ${name}`);
    }

    let proc;
    const start = debounce(() => {
      if (proc) {
        proc.kill();
      }
      console.log(">>>> Starting process...");
      proc = spawn("node", [name], { stdio: "inherit" });
    }, 100);

    // checking the changes
    chokidar
      .watch(".")
      .on("add", start)
      .on("change", start)
      .on("unlink", start);
  });

program.parse(process.argv);
