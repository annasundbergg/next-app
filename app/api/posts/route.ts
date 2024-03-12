import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { title, description } = await request.json();
    await connectMongoDB();

    await Post.create({ title, description });
    return NextResponse.json({ message: "Post created" }, { status: 201 })
}

export async function GET() {
    await connectMongoDB();
    const posts = await Post.find();
    return NextResponse.json({ posts })
}

type MyRequest = Request & {
    nextUrl: URL;
}

export async function DELETE(request: MyRequest) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Post.findByIdAndDelete(id)
    return NextResponse.json({ message: "Post deleted" }, { status: 200 })
}