import axios from "axios";
import { NextResponse } from "next/server";

export function GET ()  {
  return NextResponse.json({
    name:"ankit",
    email:"ankitrazz001@gmail.com"
  })
}

export function POST () {
  return NextResponse.json({
    name:"an",
    email:"an@gmail.com"
  })
}