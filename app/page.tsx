import Image from "next/image";
import Link from "next/link";
import PostsPage from "./posts/page";
import Header from "@/app/components/layout/header";
import Checkout from "./posts/Checkout";
// import Test from "./posts/Test";

export default function Home(): JSX.Element {
  return <Checkout />;
}
