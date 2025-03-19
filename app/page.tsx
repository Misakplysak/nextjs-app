"use client";
import { useEffect, useState } from "react";

interface Book {
  id: number;
  title: string;
}

const Page = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBooks(data.posts || []); // Ošetření, kdyby `posts` bylo `undefined`
      } catch (error) {
        console.error("Fetching error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : books.length > 0 ? (
        books.map((book) => (
          <div key={book.id}>
            {book.title}
          </div>
        ))
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default Page;
