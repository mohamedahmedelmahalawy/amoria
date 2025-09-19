import { Button } from "@heroui/button";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Button
        as={Link}
        href="members"
        color="primary"
        variant="solid"
        startContent={<FaRegSmile size={20} />}
      >
        Button
      </Button>
    </div>
  );
}
