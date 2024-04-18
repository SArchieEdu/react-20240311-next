/* eslint-disable react/jsx-key */
import { getHeadphones } from "@/services/api";
import Link from "next/link";

const Headphones = async () => {
  const headphones = await getHeadphones();

  return (
    <div>
      {headphones.map((headphone) => (
        <div>
          <Link href={`/headphones/${headphone.id}`} prefetch={false}>
            {headphone.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Headphones;
