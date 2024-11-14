import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-xl">Форма заказа</h2>
        <input
          type="text"
          placeholder="ФИО"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mt-2"
        />
        <button onClick={() => { onSubmit(name, email); onClose(); }} className="bg-blue-500 text-white p-2 mt-2">
          Отправить
        </button>
        <button onClick={onClose} className="bg-red-500 text-white p-2 mt-2 ml-2">Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;