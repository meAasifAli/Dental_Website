import { BlogCardType } from "../../types/BlogCardType"

const BlogCard = ({ src, title, desc, author }: BlogCardType) => {
    return (
        <div className="space-y-4 p-4 bg-[#E6F6FE] shrink-0 rounded-lg w-full ">
            <img src={src} alt="" className="w-full mx-auto" />
            <button className="bg-[#011632] text-white p-2 rounded-lg">SelfCare</button>
            <p className="text-[18px] font-medium tracking-wide text-[#011632]">{title}</p>
            <p className="text-[18px] font-normal tracking-wide text-[#3C4959]">{desc}</p>
            <p className="text-[18px] font-normal tracking-wide text-[#011632]">~ {author}</p>
        </div>
    )
}
export default BlogCard