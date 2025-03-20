"use client";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {users.length > 0 ? (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-4 border rounded-md shadow-sm">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}