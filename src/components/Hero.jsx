import { useState } from "react";
import { logo } from "../assets";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 px-5">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={() =>
              window.open("https://github.com/SameedIrfan7", "_blank")
            }
            className="btn-31"
          >
            <span className="text-container">
              <span className="text">GitHub</span>
            </span>
          </button>

          {isAuthenticated ? (
            <div className="relative">
              <img
                src={user?.picture || "default-avatar-url"}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={toggleDropdown}
              />

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2 p-3 border-b border-gray-200">
                    <img
                      src={user?.picture || "default-avatar-url"}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">
                        {user?.name || "User Name"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {user?.email || "user@example.com"}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="w-full text-left p-3 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => loginWithRedirect()} className="black_btnn font-bold">
              Get Started
            </button>
          )}
        </div>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        A web app to generate summaries of articles using OpenAI’s GPT-4 model.
        The article is provided as input, and the generated summary serves as
        output.
      </h2>
    </header>
  );
};

export default Hero;
