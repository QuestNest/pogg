import { inter } from "@/fonts/fonts";

const Title = () => {
    return (
        <div>
            <h1 className={`text-8xl font-extrabold text-white drop-shadow-lg ${inter.className}`}>
                <span className="text-blush">P</span>O.GG
            </h1>
        </div>
    )
}

export default Title;