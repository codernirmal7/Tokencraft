import React from "react";
import { Link } from "react-router-dom";

export default function NavbarMobile({ isOpen }) {
  return (
    <>
      <nav
        className={`w-full flex px-5 flex-col fixed top-20 z-40 min-[900px]:-translate-y-full ${
          isOpen ? "" : "-translate-y-full"
        } transition-all bg-[#0a061d] h-screen py-9`}
      >
        <ul className="flex flex-col gap-7 ">
          <li>
            <Link
              to="/staking"
              className="text-gray-300 hover:text-primary font-medium text-base"
            >
              Staking
            </Link>
          </li>
          <li>
            <Link
              to="/earn-token"
              className="text-gray-300 hover:text-primary font-medium text-base"
            >
              Earn token
            </Link>
          </li>

          <li>
            <Link
              to="swap-token"
              className="text-gray-300 hover:text-primary font-medium text-base"
            >
              Swap token
            </Link>
          </li>
        </ul>
        <div className="border-b border-white/[0.2] my-7"></div>
        <div className="flex gap-3">
          <div className="bg-gray-700 p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.4852 4.22568C17.3963 5.52707 15.0119 15.2501 15.0119 15.2501C15.0119 15.2501 14.8638 15.8185 14.3455 15.8335C14.1677 15.8335 13.9308 15.8185 13.6643 15.5642C13.1163 15.1005 11.8722 14.203 10.7022 13.3803C10.6578 13.4252 10.6134 13.4701 10.5542 13.5149C10.2876 13.7542 9.88775 14.0983 9.45825 14.5172C9.29533 14.6667 9.11758 14.8312 8.93992 15.0107L8.92508 15.0257C8.82142 15.1304 8.73258 15.2052 8.6585 15.2651C8.08091 15.7437 8.02167 15.3398 8.02167 15.1304L8.33268 11.7049V11.675L8.3475 11.6451C8.36233 11.6002 8.39192 11.5852 8.39192 11.5852C8.39192 11.5852 14.4492 6.14037 14.6121 5.55699C14.6269 5.52707 14.5824 5.49715 14.5084 5.52707C14.1085 5.6617 7.13307 10.1193 6.36296 10.613C6.31853 10.6429 6.18524 10.6279 6.18524 10.6279L2.79378 9.50608C2.79378 9.50608 2.39392 9.3415 2.5272 8.9675C2.55682 8.89275 2.60125 8.81791 2.76416 8.71325C3.51947 8.17473 16.6558 3.40296 16.6558 3.40296C16.6558 3.40296 17.0261 3.2833 17.2483 3.35809C17.3519 3.40296 17.4112 3.44784 17.4704 3.59742C17.4852 3.65725 17.5 3.77693 17.5 3.91155C17.5 3.98635 17.4852 4.0761 17.4852 4.22568Z"
                fill="white"
              ></path>
            </svg>
          </div>

          <a
            target="_blank"
            href="https://github.com/codernirmal7"
            className="bg-gray-700 p-2 rounded-lg"
          >
            <svg
              viewBox="0 -3.5 256 256"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
              fill="#ffffff"
              width="25"
              height="25"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g fill="#ffffff">
                  {" "}
                  <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"></path>{" "}
                  <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
}
