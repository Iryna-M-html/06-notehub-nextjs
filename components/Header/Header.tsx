// components/Header/Header.tsx
import css from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/notes">Notes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// import css from "./Header.module.css";
// import Link from "next/link";

// const Header = () => {
//   return (
//     <header className={css.header}>
//       <a href="/" aria-label="Home">
//         NoteHub
//       </a>
//       <nav aria-label="Main Navigation">
//         <ul className={css.navigation}>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/notes">Notes</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
