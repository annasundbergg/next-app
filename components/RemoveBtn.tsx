"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export type PostProps = {
    id: string;
    title?: string;
    description?: string;
};

export default function RemoveBtn({ id }: PostProps) {
    const router = useRouter();

    const removePost = async () => {
        const confirmed = confirm("Are you sure?");
        if (confirmed) {
            const res = await fetch(
                `https://next-app-ra67t2gtja-ew.a.run.app/api/posts?id=${id}`,
                {
                    method: "DELETE",
                }
            );
            if (res.ok) router.refresh();
        }
    };
    return (
        <button onClick={removePost} className="text-red-500">
            <HiOutlineTrash size={24} />
        </button>
    );
}
