import GithubSvg from '@/assets/img/github.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="github">
        <a
          className="github__link"
          href="https://github.com/svr-by"
          target="_blank"
          rel="me noreferrer"
        >
          <img src={GithubSvg} alt="github logo" className="github__image" />
          <p className="github__text">Siarhei Rachkouski</p>
        </a>
      </div>
      <div className="copyright">
        <p className="copyright__text">©2024</p>
      </div>
    </footer>
  );
}
