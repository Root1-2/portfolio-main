function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name=""
      id=""
      className="w-72 rounded-lg border border-blue-300 bg-transparent px-3 py-5 text-white"
    />
  );
}

export default Input;
