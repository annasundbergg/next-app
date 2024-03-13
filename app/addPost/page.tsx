"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Title and description are required");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/posts", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });
            if (res.ok) {
                router.push("/");
                router.refresh();
            } else {
                throw new Error("Failed to create topic");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                placeholder="Post Title"
                className="border border-slate-500 px-8 py-2"
            />
            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
                placeholder="Post Description"
                className="border border-slate-500 px-8 py-2"
            />
            <button
                typeof="submit"
                className="bg-green-700 font-bold text-white py-3 px-6 w-fit"
            >
                Add post
            </button>
        </form>
    );
}
