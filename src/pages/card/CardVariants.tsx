import Card from '../../components/molecule/card';
import Typography from '../../components/atom/typography/Typography';
import Media from '../../components/atom/media/Media';
import codingMedia from '../../assets/coding.avif';
import Button from '../../components/atom/button/Button';

const CardVariants: React.FC = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10'>
      <Card classes="w-[400px]" variant="filled">
        <Media
          type="image"
          src={codingMedia}
          alt="Coding"
          mediaClasses="w-full h-full object-cover rounded"
        />

        <Typography
          tag="h4"
          text="Welcome to Web Diary"
          classes="title text-white text-[24px] font-bold mt-5 px-5"
        />

        <Typography
          tag="p"
          text="We are passionate about teaching and we believe in the teaching style of of breaking down complex concepts into simple comprehensive units. We are working professionals. If you like to learn more about our career journey, please read our profile cards."
          classes="text-white text-[16px] mt-4 px-5"
        />

        <Button variant="primary" variantType="filled" classes="mt-8 ml-5 mb-8">
          Read More
        </Button>
      </Card>

      <Card classes="w-[400px]" variant="filled">

        <Typography
          tag="h4"
          text="Card Title 2"
          classes="title text-white text-[24px] font-bold mt-5 px-5"
        />

        <Typography
          tag="p"
          text="We are passionate about teaching and we believe in the teaching style of of breaking down complex concepts into simple comprehensive units. We are working professionals. If you like to learn more about our career journey, please read our profile cards."
          classes="text-white text-[16px] mt-4 px-5"
        />

        <Button variant="primary" variantType="filled" classes="mt-8 ml-5 mb-8">
          Read More
        </Button>

        <Media
          type="image"
          src={codingMedia}
          alt="Coding"
          mediaClasses="w-full h-full object-cover rounded"
        />
      </Card>

      <Card classes="w-[400px]" variant="filled">
        <Media
          type="image"
          src={codingMedia}
          alt="Coding"
          mediaClasses="w-full h-full object-cover rounded"
        />

        <Typography
          tag="h4"
          text="Card Title 3"
          classes="title text-white text-[24px] font-bold mt-5 px-5"
        />

        <Typography
          tag="p"
          text="We are passionate about teaching and we believe in the teaching style of of breaking down complex concepts into simple comprehensive units. We are working professionals. If you like to learn more about our career journey, please read our profile cards."
          classes="text-white text-[16px] mt-4 px-5"
        />

        <Button variant="primary" variantType="filled" classes="mt-8 ml-5 mb-8">
          Read More
        </Button>
      </Card>
    </div>
  );
};

export default CardVariants;
