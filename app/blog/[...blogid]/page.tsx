import axios from "axios";
export default async function BlogPost({ params }: any) {
  const  blogid = (await params).blogid;
  return <div>
    Blog post page {JSON.stringify(blogid)}
    
  </div>
}