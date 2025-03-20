"use client";
import { useEffect, useState } from "react";

interface Book {
  id: number;
  title: string;
  content: string;
}

export default function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      {books.length > 0 ? (
        <ul className="space-y-2">
          {books.map((book) => (
            <li key={book.id} className="p-4 border rounded-md shadow-sm">
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-gray-600">{book.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}
