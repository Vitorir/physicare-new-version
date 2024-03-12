const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Physicare</strong> &copy; {new Date().getFullYear()}
        </p>
        <p>
          Desenvolvido pela equipe do{" "}
          <a href="https://seusite.com">Physicare Dev</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
