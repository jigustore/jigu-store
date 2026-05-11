const Footer = () => {
  return (
    <footer className="w-full py-4 bg-theme-w-alt dark:bg-theme-black-alt">
      <p className="text-center text-sm">
        © {new Date().getFullYear()} Jigustore All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
