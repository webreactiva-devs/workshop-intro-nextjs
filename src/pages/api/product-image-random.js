export default async function handler(req, res) {
  const { id } = req.query;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  const { images, thumbnail } = data;
  if(!images.length) {
    res.status(200).json({ image: thumbnail });
  }
  const image =  images.sort(() => Math.random() - Math.random()).slice(0, 1)[0];
  res.status(200).json({ image })
}