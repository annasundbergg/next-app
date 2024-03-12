import EditPostForm from "@/components/EditPostForm";

export const getPostById = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch Post");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading post:", error);
    }
};

export default async function EditPost({ params }: any) {
    const { id } = params;
    const { post } = await getPostById(id);
    const { title, description } = post;

    return (
        <EditPostForm
            id={id}
            title={title}
            description={description}
        ></EditPostForm>
    );
}
