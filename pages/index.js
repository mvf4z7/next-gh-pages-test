import Link from 'next/link'

export default () => (
  <div>
    <div>Welcome to next.js!</div>
    <Link href="/foo" prefetch><a>Foo</a></Link>
  </div>
);