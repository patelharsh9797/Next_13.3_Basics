import { NextResponse } from "next/server";
import data from "./data.json";

export async function GET(request) {
  console.log(data)
  return NextResponse.json(data);
}
