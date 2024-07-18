import Typography from '../../components/atom/typography/Typography';
import { NavLink } from 'react-router-dom';

const codeSnippet = `
  <Typography
    tag="h1"
    text="Welcome to Web Diary"
    classes="title text-white text-[35px]"
    role="heading"
    ariaLabel="Welcome to Web Diary"
    ariaLabelledBy="title">

    <span className="text-green-400">&nbsp;Nice to meet you!</span>

  </Typography>
  `;

const TypographyVariants: React.FC = () => {
  return (
    <>
      <NavLink to="..">
        <span className="text-yellow-400 inline-block mb-6">Go Home</span>
      </NavLink>

      <Typography
        text="Design System : Typography"
        classes="mb-8 text-[30px] font-bold text-white"
      />
      <hr className="mt-5 mb-8 border-tertiary" />

      <Typography text="With h1 tag | With children" classes="mb-5 text-white" />
      <Typography
        tag="h1"
        text="Welcome to Web Diary"
        classes="title text-white text-[25px]"
        role="heading"
        ariaLabel="Welcome to Web Diary"
        ariaLabelledBy="title"
      >
        <span className="text-green-400">&nbsp;Nice to meet you!</span>
      </Typography>

      <pre className="bg-black rounded-[10px] my-4">
        <code className="text-white">{codeSnippet}</code>
      </pre>

      <hr className="mt-10 mb-5 border-tertiary" />

      <Typography text="With h2 tag" classes="mb-5 text-white" />
      <Typography tag="h2" text="Let's Share Our Knowledge" classes="text-white text-[25px]" />

      <hr className="mt-10 mb-5 border-tertiary" />

      <Typography text="With p tag" classes="mb-5 text-white" />
      <Typography
        tag="p"
        text="We are passionate about teaching and we believe in the teaching style of of breaking down complex concepts into simple comprehensive units. We are working professionals. If you like to learn more about our career journey, please read our profile cards."
        classes="text-white"
      />
    </>
  );
};

export default TypographyVariants;
