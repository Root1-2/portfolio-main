function Input({ placeholder, type = "text", nameId }) {
  return type === "textarea" ? (
    <textarea
      placeholder={placeholder}
      className="w-full rounded-lg border border-blue-300 bg-transparent px-3 py-5 text-white sm:w-5/6"
    />
  ) : (
    <input
      name={nameId}
      id={nameId}
      type={type}
      placeholder={placeholder}
      className="w-72 rounded-lg border border-blue-300 bg-transparent px-3 py-5 text-white"
    />
  );
}

export default Input;
