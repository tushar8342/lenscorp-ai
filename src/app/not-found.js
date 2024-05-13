import Link from 'next/link'

const Notfound = () => {
    return (
        <div className="grid h-screen place-content-center bg-white px-4">
            <div className="text-center">
                <h1 className="text-9xl  text-gray-900">404</h1>

                <p className="text-2xl  tracking-tight text-gray-900 sm:text-4xl">
                    Uh-oh!
                </p>

                <p className="mt-4 text-gray-900 ">
                    We can&apos;t find that page.
                </p>

                <Link
                    href="/"
                    className="mt-6 flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default Notfound