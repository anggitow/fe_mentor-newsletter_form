import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmailStore } from '@stores/storeEmail';
import iconList from '@assets/icon-list.svg';
import imageMobile from '@assets/illustration-sign-up-mobile.svg';
import imageDesktop from '@assets/illustration-sign-up-desktop.svg';

const Home = () => {
  const lists = ['Product discovery and building what matters', 'Measuring to ensure updates are a success', 'And much more!'];
  const navigate = useNavigate();
  const { setEmail } = useEmailStore();
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
      navigate('/success');
    } else {
      setValidateEmail(false);
    }
  };

  return (
    <div className="min-h-screen text-dark-slate-grey md:flex md:items-center md:justify-center">
      <div className="flex min-h-screen flex-col bg-white md:min-h-[unset]  md:flex-row md:justify-between md:rounded-[32px]">
        <div className="order-2 md:order-1 md:w-[470px]">
          <div className="flex h-full flex-col justify-center px-5 md:px-12">
            <h2 className="pt-8 text-[40px] font-bold md:pt-0 md:text-[55px]">Stay Updated!</h2>
            <p className="py-4">Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="pb-7">
              {lists.map((list, index) => (
                <li key={index} className="flex items-start gap-4">
                  <img src={iconList} className="pt-0.5" />
                  <p className="pb-3">{list}</p>
                </li>
              ))}
            </ul>

            <form className="flex flex-col pb-10 md:p-0" onSubmit={handleSubmit}>
              <div className="flex justify-between">
                <label className="pb-2 text-sm font-bold">Email address</label>
                <label className={`pb-2 text-sm font-bold text-tomato ${validateEmail ? 'hidden' : ''}`}>Valid email required</label>
              </div>
              <input
                type="text"
                name="email"
                placeholder="email@company.com"
                className={`mb-5 h-14 rounded-md border border-grey px-5 focus-visible:outline-dark-slate-grey ${
                  validateEmail ? '' : 'bg-tomato-ligt text-tomato'
                }`}
                onChange={handleChange}
              />
              <button type="submit" className="hover:bg-gradient-button h-14 rounded-md bg-dark-slate-grey font-semibold text-white">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src={imageMobile} className="md:hidden" />
          <div className="hidden p-5 ps-0 md:block">
            <img src={imageDesktop} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
