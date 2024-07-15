import './App.css';
import Media from './components/atom/typography/media/Media';
import Typography from './components/atom/typography/Typography';
import codingMedia from './assets/coding.avif';
import codingVideo from './assets/webdiary.mp4';

function App() {
  return (
    <>
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
        autoPlay
        muted
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
  );
}

export default App;
