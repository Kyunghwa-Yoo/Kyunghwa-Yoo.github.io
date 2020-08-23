/** @jsx jsx */
import { jsx } from "theme-ui";

const Footer = () => (
  <footer
    sx={{
      display: `flex`,
      justifyContent: `flex-end`,
      color: `secondary`,
      variant: `dividers.top`,
    }}
  >
    <div>&copy; {new Date().getFullYear()} by Kyunghwa Yoo.</div>
  </footer>
);

export default Footer;
