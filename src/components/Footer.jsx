import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full p-2 flex flex-col gap-y-4 items-center justify-center">
      <p className="text-center font-medium text-base text-gray-700">
        Copyright &copy; 2025 Anthony.
      </p>

      <div className="flex space-x-5">
        <a
          className="hover:text-black"
          href="https://github.com/Hub-devAnthony"
        >
          <Github />
        </a>
        <a
          className="hover:text-black"
          href="mailto:isijolaayomikun04@gmail.com"
        >
          <Mail />
        </a>
      </div>
    </div>
  );
};

export default Footer;
