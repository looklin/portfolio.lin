const NavColumn = ({ links }) => {
  return (
    <div className="flex flex-col gap-1">
      {links.map((link, index) => (
        link.href ? (
          <a 
            key={index}
            href={link.href} 
            className={`hover:text-brand-yellow ${link.className || ''}`}
          >
            {link.label}
          </a>
        ) : (
          <span key={index} className={link.className || ''}>
            {link.label}
          </span>
        )
      ))}
    </div>
  );
};

export default NavColumn;