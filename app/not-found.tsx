

export const metadata = {
    title: "404 | Vidly",
    description: "Page not found",
};

export default function NotFound() {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col justify-center items-center">

                <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-center text-black max-w-4xl md:max-w-6xl">
                    404 - Page Not Found
                </h2>
                <p className="mt-6 text-md md:text-xl text-center text-gray-600 max-w-2xl">
                    The page you are looking for does not exist. Please check the URL and try again.
                </p>
            </div>
        </div>
    )
}