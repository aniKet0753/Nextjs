import axios from "axios";

export default async function Signin() {
     const respponce = await axios.get("http://localhost:3000/auth/users/details");
     await new Promise(Response => setTimeout(Response,3000));
     const data = respponce.data;
     console.log(data);
     return   (
    <div className="p-4">
      <h1 className="text-xl font-semibold">Todo Details</h1>

      <pre>{JSON.stringify(data, null, 1)}</pre>

    </div>
  );
}


