import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export const getPosts = async () => {
    try {
        const res = await fetch(
            "https://next-app-ra67t2gtja-ew.a.run.app/api/posts",
            {
                cache: "no-store",
            }
        );

        if (!res.ok) {
            throw new Error("Failed to fetch Posts");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading posts:", error);
    }
};

export default async function PostList() {
    const { posts } = await getPosts();
    return (
        <>
            {posts.map((p: any) => (
                <div
                    key={p._id}
                    className="p-4 border order-slate-300 my-3 flex justify-between gap-5 items-start"
                >
                    <div>
                        <h2 className="font-bold text-2xl">{p.title}</h2>
                        <div>{p.description}</div>
                    </div>

                    <div className="flex gap-2s">
                        <RemoveBtn id={p._id} />
                        <Link href={`/editPost/${p._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
