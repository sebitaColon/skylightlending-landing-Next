import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string
}

export default function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const respose = res.status(200).json({
 name:"hola"
  })
  console.log(respose)

}