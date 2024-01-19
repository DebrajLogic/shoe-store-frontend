function Wrapper({ children, className = "" }) {
  return (
    <div
      className={`${className} w-full max-w-[1100px] px-5 md:px-10 mx-auto border-blue-800`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
