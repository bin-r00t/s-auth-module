import { BaseClass } from "./BaseClass";
import { ObjectId } from "mongodb";

export class User extends BaseClass {
  username: string;
  constructor(username: string) {
    super("user");
    this.username = username;
  }

  private async exists() {
    try {
      const res = await this.collection.findOne({ username: this.username });
      console.log("[*] User:exists() ", res);
      if (res) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log("[x] User:exists() ", error);
    }
  }

  public async save(): Promise<{ _id: ObjectId } | null> {
    console.log("call save()");
    if (!(await this.exists())) {
      return await this.create({ username: this.username });
    }
    console.log("[==>] user exists!!!");
    return null;
  }
}
