import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      TEST
      <Link className="text-blue-200" href={"/test"}>
        Next page
      </Link>
    </main>
  );
}
