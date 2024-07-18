import Typography from '../../components/atom/typography/Typography';
import Button from '../../components/atom/button/Button';
import viteLogo from '../../assets/react.svg';
import { NavLink } from 'react-router-dom';

const codeSnippet = `
  <Button
    variant="primary"
    variantType="filled"
    type="button"
    classes="web-dairy">

    Subscribe Web Diary
    <img src={viteLogo} className="w-5 h-5" alt="Vite Logo" />

  </Button>
  `;

const ButtonVariants: React.FC = () => {
  return (
    <>
      <NavLink to="..">
        <span className="text-yellow-400 inline-block mb-6">Go Home</span>
      </NavLink>

      <Typography text="Design System : Button" classes="mb-8 text-[30px] font-bold text-white" />
      <hr className="mt-5 mb-8 border-tertiary" />

      <Typography
        text="Primary Button | Filled variant type | Icon at right side"
        classes="mb-5 text-white"
      />
      <Button variant="primary" variantType="filled" type="button" classes="web-dairy">
        Subscribe Web Diary
        <img src={viteLogo} className="w-5 h-5" alt="Vite Logo" />
      </Button>

      <pre className="bg-black rounded-[10px] my-4">
        <code className="text-white">{codeSnippet}</code>
      </pre>

      <hr className="mt-10 mb-5 border-tertiary" />

      {/* wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}

      <Typography
        text="Secondary Button | Filled variant type | Icon at left side"
        classes="mb-5 text-white"
      />
      <Button type="button" variant="secondary" variantType="filled">
        <img src={viteLogo} className="w-5 h-5" alt="Vite Logo" />
        Subscribe Web Diary
      </Button>

      <hr className="mt-10 mb-5 border-tertiary" />

      {/* wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}

      <Typography text="Tertiary Button | Outlined variant type" classes="mb-5 text-white" />
      <Button type="submit" variant="tertiary" variantType="outline">
        Make payment
      </Button>

      <hr className="mt-10 mb-5 border-tertiary" />

      {/* wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}

      <Typography text="Primary Button with only icon" classes="mb-5 text-white" />
      <Button
        type="button"
        classes="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        <img src={viteLogo} className="w-5 h-5" alt="Vite Logo" />
      </Button>
    </>
  );
};

export default ButtonVariants;
