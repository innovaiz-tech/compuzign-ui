export default function Cards({ data }) {
    return (
        <div className="relative flex flex-col items-center px-4 mb-8 group">
            {/* Main Card Container - Added relative positioning */}
            <div
                className="relative flex flex-col rounded-lg bg-primary-bgGray w-full overflow-hidden"
                style={{
                    maxWidth: data.width,
                    minHeight: data.height,
                    paddingLeft: data.paddingLeft,
                    paddingRight: data.paddingRight,
                    paddingTop: data.paddingTop,
                    paddingBottom: `calc(${data.paddingBottom} + 3rem)`
                }}
            >
                {/* Text Content */}
                <div className="relative z-10">
                    <h2 className="text-center text-xl font-semibold mb-4 group-hover:text-white transition-colors duration-300">{data.header}</h2>
                    <p className="text-center text-primary-textGray group-hover:text-white transition-colors duration-300">{data.content}</p>
                </div>

                {/* Hover Image - Now properly contained */}
                <img
                    src={data.hoverImage}
                    alt={data.hoverImage}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 brightness-50 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-80"
                />
            </div>

            {/* Circular Icon */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="rounded-full bg-primary-bgBlack p-1 border-8 border-primary-bgLight">
                    <img
                        src={data.icon}
                        alt={data.header}
                        className="w-16 h-16 object-contain rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}