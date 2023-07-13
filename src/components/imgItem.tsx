import { Photos } from "@/types/photos"

type Props = {
    imagem: Photos;
    onClick: () => void;
}

export const ImgItem = ({imagem, onClick}: Props) => {
    return(
        <div onClick= {onClick} className= "cursor-pointer hover:opacity-80 w-full my-2 md:w-[48%] md:mx-1 lg:w-[32%] lg:mx-1">
            <img src={`/assets/${imagem.url}`} alt="" className= "w-full h-auto shadow-md shadow-gray-800 rounded-md"/>
        </div>
    )
}