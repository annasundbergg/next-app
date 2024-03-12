import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: any) {
    const { id } = params;
    const { newTitle: title, newDescription: description }: any = await request.json();
    await connectMongoDB();
    await Post.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Post updated" }, { status: 200 })

}

export async function GET(request: Request, { params }: any) {
    const { id } = params;
    await connectMongoDB;
    const post = await Post.findOne({ _id: id });
    return NextResponse.json({ post }, { status: 200 })

}