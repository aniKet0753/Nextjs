import axios from "axios";
export default async function BlogPost({ params }: any) {
  const { blogid } = await params;
  const response =  await axios.get(`https://dummyjson.com/posts/${blogid}`);
  const data = response.data;
  return <div>
    Blog post page {blogid}<br />
    tittle: {data.title}
    <br/>
    body: {data.body}
  </div>
}