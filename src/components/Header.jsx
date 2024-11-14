import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl">Магазин музыкальных инструментов</h1>

      <nav className='flex gap-4'>
        <a href="" className='bg-green-800 p-3 rounded hover:bg-green-600 duration-200'>Навигация</a>
        <a href="" className='bg-green-800 p-3 rounded hover:bg-green-600 duration-200'>Навигация</a>
        <a href="" className='bg-green-800 p-3 rounded hover:bg-green-600 duration-200'>Навигация</a>
      </nav>
    </header>
  );
};

export default Header;