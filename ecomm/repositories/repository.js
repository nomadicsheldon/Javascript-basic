const fs = require("fs");
const crypto = require("crypto");

module.exports = class Repository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Creating a repository requires a filename");
    }

    this.filename = filename;
    // for our case sync function is well suited.
    try {
      console.log("File already exist, so accessing it");
      fs.accessSync(this.filename); // accessing this file
    } catch (err) {
      console.log("creating new file");
      fs.writeFileSync(this.filename, "[]"); // creating this file
    }
  }

  async create(attrs) {
    attrs.id = this.randomId();

    const records = await this.getAll();
    records.push(attrs);
    await this.writeAll(records);

    return attrs;
  }

  async getAll() {
    // open the file called this.filename
    // Parse the contents
    // Return the parsed data
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: "utf8",
      })
    );
  }

  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2) // second and third for indentation
    );
  }

  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }

  async getOne(id) {
    const records = await this.getAll();
    return records.find((record) => record.id === id);
  }

  async delete(id) {
    const records = await this.getAll();
    const filteredRecords = records.filter((record) => record.id != id);
    await this.writeAll(filteredRecords);
  }

  async update(id, attrs) {
    const records = await this.getAll();
    const updateRecord = records.find((record) => record.id === id);

    if (!updateRecord) {
      throw new Error(`Record with id ${id} not found`);
    }

    Object.assign(updateRecord, attrs);
    await this.writeAll(records);
  }

  async getOneBy(filters) {
    const records = await this.getAll();

    for (let record of records) {
      let found = true;

      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }

      if (found) {
        return record;
      }
    }
  }
};

//##########################
// const test = async () => {
//   const repo = new UsersRepository("users.json");

//   // Read its contents
//   //   const users = await repo.getAll();
//   //   console.log(users);

//   // get user by id
//   // const user = await repo.getOne("01ac9695");
//   //   console.log(user);

//   // delete
//   //   await repo.delete("01ac9695");

//   //   update
//   //   await repo.update("01ac9695", { password: "asdasd" });

// //   getOneBy
// //   const user = await repo.getOneBy({
// //     email: "rajput13himanshu@gmail.com",
// //     password: "asdasd",
// //   });
// //   console.log(user);

// };

// test();
//##########################
