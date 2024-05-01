import { NavLink } from 'react-router-dom';
import { useEmailStore } from '@stores/storeEmail';
import iconSuccess from '@assets/icon-success.svg';

const Success = () => {
  const { email } = useEmailStore();

  return (
    <div className="min-h-screen text-dark-slate-grey md:flex md:items-center md:justify-center">
      <div className="flex min-h-screen flex-col justify-between bg-white p-5 md:min-h-[unset] md:w-[490px] md:rounded-[32px] md:p-14">
        <div className="flex grow items-center">
          <div>
            <img src={iconSuccess} />
            <h2 className="pt-8 text-[40px] font-bold leading-none md:text-[55px]">Thanks for subscribing!</h2>
            <p className="pt-6">
              A confirmation email has been sent to
              <strong> {email}</strong>. Please open it and click the button inside to confirm your subscription.
            </p>
          </div>
        </div>
        <div className="pb-6 pt-[110px] md:pb-0 md:pt-10">
          <NavLink to="/">
            <button type="button" className="bottom-0 h-14 w-full rounded-md bg-dark-slate-grey font-semibold text-white">
              Dismiss message
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Success;
