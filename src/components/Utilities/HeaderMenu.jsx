const HeaderMenu = ({ title }) => {
  return (
    <div className="py-8">
      <h1 className="text-center text-2xl font-bold text-color-accent">
        {title}
      </h1>
    </div>
  );
};

export default HeaderMenu;
