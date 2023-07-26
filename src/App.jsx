import { useState } from "react";
import illustrationMobile from "./assets/illustration-sign-up-mobile.svg";
import Success from "./components/Success";

function App() {
  const lists = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  const [email, setEmail] = useState("");
  const [validateEmail, setValidateEmail] = useState(true);

  const handleChange = () => {
    setValidateEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { value } = e.target.email;
    let regexEmail = /\S+@\S+\.\S+/;

    if (regexEmail.test(value)) {
      setValidateEmail(true);
      setEmail(value);
    } else {
      setValidateEmail(false);
    }
  };

  return (
    <div className="max-w-[375px] mx-auto bg-white text-dark-slate-grey">
      {email ? (
        <Success email={email} />
      ) : (
        <div>
          <img src={illustrationMobile} alt="illustration-mobile" />
          <div className="px-5">
            <h1 className="text-4xl font-bold pt-8 pb-5">Stay updated!</h1>
            <p className="pb-5">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="flex flex-col gap-y-2.5 pb-8">
              {lists.map((list, index) => {
                return (
                  <li className="flex gap-4" key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={21}
                      height={21}
                      viewBox="0 0 21 21"
                    >
                      <g fill="none">
                        <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                        <path
                          stroke="#FFF"
                          strokeWidth={2}
                          d="M6 11.381 8.735 14 15 8"
                        />
                      </g>
                    </svg>

                    {list}
                  </li>
                );
              })}
            </ul>
            <form className="flex flex-col pb-10" onSubmit={handleSubmit}>
              <div className="flex justify-between">
                <label className="text-sm font-bold pb-2">Email address</label>
                <label
                  className={`text-sm text-tomato font-bold pb-2 ${
                    validateEmail ? "hidden" : ""
                  }`}
                >
                  Valid email required
                </label>
              </div>
              <input
                type="text"
                name="email"
                placeholder="email@company.com"
                className={`h-14 border border-grey px-5 rounded-md mb-5 focus-visible:outline-dark-slate-grey ${
                  validateEmail ? "" : "bg-tomato-ligt text-tomato"
                }`}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="h-14 bg-dark-slate-grey text-white font-semibold rounded-md hover:bg-gradient-button"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
