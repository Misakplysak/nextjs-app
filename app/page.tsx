"use client"
import { useEffect, useState } from "react";

const Page = () => {
    const [books, setBooks] = useState<{ title: string }[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("/api/posts");
        const response = await data.json();
        setBooks(response.posts);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
      <div>
        <h1>Page</h1>
        {books.map(book => (
          <div>
            {book.title}
          </div>
        ))}
      </div>
    )
}

export default Page;