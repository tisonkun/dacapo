import {getCollection} from "astro:content";

export async function getNonHiddenPosts() {
    const posts = await getAllPosts();
    return posts.filter((entry) => !entry.data.hidden);
}

export async function getAllPosts() {
    return await getCollection('posts');
}

