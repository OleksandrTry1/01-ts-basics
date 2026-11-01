import axios from "axios";

// ! Завдання:

// Інсталюй бібліотеку axios командою npm i axios
// Створи інтерфейс Post, який описує об'єкт поста з такими полями:
// id: число
// title: рядок
// body: рядок
// Типізуй axios.get, щоб вказати, що API повертає масив постів.

interface Post {
    readonly id: number;
    title: string,
    body: string
}

async function fetchPosts() : Promise<Post[]> {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
