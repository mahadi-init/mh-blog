import client from '@/lib/sanity-client';

const tagQuery = `*[_type == 'tag' && name == $tagName][0]._id`;
const postQuery = `*[_type == 'post' && references($tagId)]{
    _id,
    title,
    shortDesc,
    readTime,
    table,
    content,
    tags
}`;

async function getPostsByTag(tagName: string) {
  try {
    const tagId = await client.fetch(tagQuery, { tagName });
    const posts = await client.fetch(postQuery, { tagId });
    return posts;
  } catch (err) {
    console.error(err);
  }
}

export default getPostsByTag;
