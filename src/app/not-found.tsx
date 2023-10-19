import Link from "next/link"
import NotFoundSVG from "./component/illustration/notFoundSVG"

export default function NotFound() {
  return (
    <div className="not-found">
      <NotFoundSVG />
      <h1>sepertinya kamu tersesat</h1>
      <Link href={"/"}>kembali ke awal</Link>
    </div>
  )
}