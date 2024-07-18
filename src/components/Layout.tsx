import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Typography', link: '/typography' },
  { id: 3, name: 'Button', link: '/button' },
  { id: 4, name: 'Media', link: '/media' },
];

const Layout = () => {
  return (
    <>
      <h1 className="text-white text-center text-[18px]">Web Diary Academy</h1>
      <h1 className="text-amber-400 text-center text-[45px] font-bold">Design System</h1>
      <p className="text-white text-center text-[18px] mt-[10px]">
        A complete reusable component library
      </p>
      <hr className="mt-10 mb-5 border-tertiary" />
      <h1 className="text-white text-center text-[18px]">Atom Components</h1>
      <hr className="mt-5 mb-5 border-tertiary" />

      <ul className="flex justify-center flex-wrap gap-4 my-12">
        {links?.map(({ id, name, link }) => (
          <li className="" key={id}>
            <NavLink to={link}>
              <span className="text-white text-[25px] border border-blue-100 border-solid w-[200px] h-[150px] flex items-center justify-center hover:bg-amber-500 transition rounded-lg">
                {name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      <hr className="mt-10 mb-5 border-tertiary" />
      <h1 className="text-white text-center text-[18px]">Molecule Components</h1>
      <hr className="mt-5 mb-5 border-tertiary" />
    </>
  );
};

export default Layout;
