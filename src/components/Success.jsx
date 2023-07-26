const Success = ({ email }) => {
  return (
    <div className="min-h-screen px-5 flex flex-col">
      <div className="flex flex-col flex-1 justify-center -mt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={64}
          height={64}
          viewBox="0 0 64 64"
        >
          <defs>
            <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#FF6A3A" />
              <stop offset="100%" stopColor="#FF527B" />
            </linearGradient>
          </defs>
          <g fill="none">
            <circle cx={32} cy={32} r={32} fill="url(#a)" />
            <path
              stroke="#FFF"
              strokeWidth={4}
              d="m18.286 34.686 8.334 7.98 19.094-18.285"
            />
          </g>
        </svg>
        <h1 className="text-4xl font-bold pt-10 pb-6">
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to
          <strong> {email}</strong>. Please open it and click the button inside
          to confirm your subscription.
        </p>
      </div>
      <div className="pb-10">
        <button
          type="button"
          className="h-14 w-full bottom-0 bg-dark-slate-grey text-white font-semibold rounded-md"
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default Success;
