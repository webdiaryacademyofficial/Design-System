import Typography from "../../components/atom/typography/Typography"
import Media from "../../components/atom/media/Media"
import codingMedia from "../../assets/coding.avif"
import codingVideo from "../../assets/webdiary.mp4"
import { NavLink } from 'react-router-dom';

const mediaVariants = () => {
  return (
    <>
    <NavLink to="/"><span className='text-yellow-400 inline-block mb-6'>Go Home</span></NavLink>
      <Typography
        text="Design System : Media Component"
        classes="mb-8 text-[30px] font-bold text-white"
      />

      <hr className="mt-10 mb-5 border-tertiary" />
      <Typography text="Media Component : Video" classes="mb-8 text-[18px]  text-white" />

      <Media
        type="video"
        src={codingVideo}
        alt="Coding"
        containerClasses=""
        mediaClasses="rounded object-cover"
      />

      <hr className="mt-10 mb-5 border-tertiary" />
      <Typography text="Media Component : Image" classes="mb-8 text-[18px] text-white" />

      <Media
        type="image"
        src={codingMedia}
        alt="Coding"
        containerClasses=""
        mediaClasses="w-full h-full object-cover rounded"
      />
      <hr className="mt-10 mb-5 border-tertiary" />
    </>
  )
}

export default mediaVariants
