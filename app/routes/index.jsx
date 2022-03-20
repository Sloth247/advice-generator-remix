import dividerMobile from '../../public/images/pattern-divider-mobile.svg';
import dividerDesktop from '../../public/images/pattern-divider-desktop.svg';
import dice from '../../public/images/icon-dice.svg';
import { useLoaderData } from 'remix';

export const loader = async () => {
  const ADVICE_URL = process.env.REMIX_APP_ADVICE_URL;
  const response = await fetch(ADVICE_URL);
  const data = await response.json();
  console.log(data);
  return data;
};

export default function Home() {
  const data = useLoaderData();
  const handleClick = async () => {
    location.reload();
  };
  return (
    <>
      <main className="main fade-in-fwd">
        <h1 className="main__title">Advice #{data.slip.id}</h1>
        <p className="main__advice">"{data.slip.advice}"</p>
        <picture className="main__divider-img" aria-hidden="true">
          <source srcSet={dividerDesktop} media="(min-width: 30rem)" />
          <img src={dividerMobile} alt="" />
        </picture>
        <button className="main__dice-button" onClick={handleClick}>
          <img
            src={dice}
            alt="shuffle advice slip"
            className="main__dice-img"
          />
        </button>
      </main>
      <footer>
        <div className="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href="https://www.frontendmentor.io/profile/Sloth247">
            Yuko Horita
          </a>
          .
        </div>
      </footer>
    </>
  );
}
