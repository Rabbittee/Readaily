export function Button({ children, onClick }) {
  return (
    <button
      className="text-gray-600 transition-colors duration-500 hover:text-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
