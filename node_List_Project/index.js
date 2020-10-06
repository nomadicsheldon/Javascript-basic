#!/usr/bin/env node

const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  if (!err) {
    const statPromises = filenames.map((filename) => {
      return lstat(path.join(targetDir, filename));
    });

    const allStats = await Promise.all(statPromises);

    for (let stats of allStats) {
      const idx = allStats.indexOf(stats);
      if (stats.isFile()) {
        console.log(chalk.white.underline(filenames[idx]));
      } else {
        console.log(filenames[idx]);
      }
    }
  } else {
    // error handling code
    throw new Error(err);
  }
});
