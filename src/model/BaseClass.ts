import client from "../db/index";
import { Collection, Document, ObjectId } from "mongodb";

export class BaseClass {
  collectionName: string;
  collection: Collection;

  constructor(collectionName: string) {
    this.collectionName = collectionName || "default";

    this.collection = client
      .db("socket-io-test")
      .collection(this.collectionName);
  }

  public async create(item: { [key: string]: any }) {
    let res: Document;
    try {
      res = await this.collection.insertOne(item);
      console.log("[BaseClass created]\n", res);
      if (res) {
        return {
          _id: res.insertedId,
        };
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  public async update() {}

  public async delete() {}

  public async find(id: ObjectId | string) {
    if (typeof id == "string") {
      id = new ObjectId(id);
    }

    let res: Document | null;
    try {
      res = await this.collection.findOne({ _id: id });
      console.log("[find] res", res);
      if (res) {
        return res;
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async findAll() {
    let res: Document[];
    try {
      res = await this.collection.find({}).toArray();
      console.log("[findAll] res", res);
      if (res) {
        return res;
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async findByPage(
    page: number,
    size: number,
    condition?: { [key: string]: any }
  ) {
    let res: Document[];
    try {
      res = await this.collection
        .find(condition || {})
        .skip(page * size)
        .limit(size)
        .toArray();
      console.log("[findByPage] res", res);
      if (res) {
        return res;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
