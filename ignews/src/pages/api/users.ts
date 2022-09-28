import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { 
      id:1,
      name: "Jonathan",
    },
    { 
      id:2,
      name: "Mary",
    },
    { 
      id:3,
      name: "Yoham",
    },
  ]

  return response.json(users)
}