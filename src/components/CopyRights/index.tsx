import './copyRights.css';

export default function CopyRights() {
  return (
    <footer className="footer__copy_rights">
      <p>© {new Date().getFullYear()} Snubes GmbH All Rights Reserved.</p>
    </footer>
  )
}
