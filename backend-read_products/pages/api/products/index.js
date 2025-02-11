import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const products = await Product.find();
      response.status(200).json(products);
      return;
    } catch (error) {
      console.log(error);
    }
  } else {
    response.status(405).json({ message: "Method not allowed" });
    return;
  }
}
