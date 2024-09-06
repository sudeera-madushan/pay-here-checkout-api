import Link from "next/link";

const Card = ({children,postId,path}:{children:React.ReactNode, postId:number, path:string}) => {
    return (
        <Link
            href={`${path}/${postId}`}
            key={postId}
            className='p-2 bg-gray-300 rounded-md cursor-pointer hover:bg-gray-400 transition duration-300'
        >
            {children}
        </Link>
    );
};

export default Card;