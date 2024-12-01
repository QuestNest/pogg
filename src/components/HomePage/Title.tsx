import { inter } from "@/fonts/fonts";

const Title = () => {
    return (
        <div>
            <h1 className={`sm:text-8xl text-6xl font-extrabold text-white drop-shadow-lg ${inter.className}`}>
                <span className="text-blush">P</span>O.GG
            </h1>
        </div>
    )
}

export default Title;