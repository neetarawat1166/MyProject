// import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className=" text-blue-gray-200 py-8 px-6 bg-[#20202061]  sm:px-12 md:px-24 lg:px-32 xl:px-48">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          {/* <Typography color="blue-gray" className="text-2xl text-white  hover:text-zinc-300 transition-colors  font-bold">
            Tomato
          </Typography>
          <Typography color="blue-gray" className="text-white font-semibold  hover:text-zinc-300 transition-colors text-sm">
            THE BROTHER OF ZOMATO
          </Typography> */}
        </div>
        <ul className="flex flex-wrap gap-4">
          <li>
            <a
              href="#"
              className="text-white font-bold  hover:text-zinc-300 transition-colors"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-bold  hover:text-zinc-300 transition-colors"
            >
              License
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-bold  hover:text-zinc-300 transition-colors"
            >
              Contribute
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white font-bold  hover:text-zinc-300 transition-colors"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-blue-gray-700 mt-8 pt-4 text-center">
        {/* <Typography color="blue-gray" className="text-sm text-white font-bold  hover:text-zinc-300 transition-colors">
          &copy; 2024, ESTD 5 minutes Ago
        </Typography> */}
      </div>
    </footer>
  );
}