const Text = ({ text }) => {
  return <span className="text-base font-medium">{text}</span>;
};

const GoToLink = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-medium text-blue-600 underline"
    >
      {link}
    </a>
  );
};

export { Text, GoToLink };
