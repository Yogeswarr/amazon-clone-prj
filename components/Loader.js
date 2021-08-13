const Loader = () => {
    return (
        <div className="loader flex h-96 justify-center items-center">
            <div className="p-5 rounded-full flex space-x-4">
                <div className="w-5 h-5 rounded-full bg-yellow-500 animate-bounce"></div>
                <div className="w-5 h-5 rounded-full bg-yellow-500 animate-bounce"></div>
                <div className="w-5 h-5 rounded-full bg-yellow-500 animate-bounce"></div>
            </div>
        </div>
    )
}

export default Loader
