import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a className="link">Home</a>
      </Link>

      <Link href="/about">
        <a className="link">About</a>
      </Link>

      <style jsx>{`
        .link {
          margin-left: 15px;
        }
      `}</style>

    </nav>
  )
}

export default Navbar
