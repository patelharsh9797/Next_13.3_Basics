import { NextResponse } from "next/server";
import courses from "./data.json";
import { nanoid } from "nanoid";

export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const { title, description, level, link } = await request.json();

  courses.push({
    id: nanoid(),
    title,
    description,
    level,
    link,
  });

  return NextResponse.json(courses);
}
