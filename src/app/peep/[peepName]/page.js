"use client";

import Link from "next/link";

export default function PeepNamePage({ params }) {
  const { peepName } = params;
  return (
    <main>
      <h1>Peep Name: {peepName}</h1>
      <Link href={`/peep/${peepName}/hairColor`}>Hair Color</Link>
    </main>
  );
}
