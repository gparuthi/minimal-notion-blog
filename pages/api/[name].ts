import { NextApiRequest, NextApiResponse } from "next"
import { config } from "../../config"
import { getBlogTable, getPageBlocks } from "../../core/blog"
import { Post } from "../../types/blog"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { name },
  } = req
  
  const posts = await getBlogTable<Post>(config.notionBlogTableId)
  const post = posts.filter((post) => post.title == name)[0]
  
  if (post){
    const blocks = await getPageBlocks(post.id);
    const block = Object.values(blocks).filter(b => b.value.type=='code')[0]
    const code = block.value.properties.title[0][0]

    res.status(200).send(code)
  }
  else 
    res.status(404)
}
