import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        <Link href={"/"}>
          <Image
            src="/assets/images/ail_logo.png"
            alt="ail logo"
            // className={styles.header__logoBox__logo}
            // className="dark:invert"
            width={60}
            height={20}
            priority
          />
        </Link>
      </div>
      <div>{/* Memberships */}</div>
      <div>{/* SearchBar */}</div>
      <div>{/* Create Button */}</div>
      {/* return url 적용하기 https://civitai.com/login?returnUrl=/ */}
      <div>
        <Button asChild>
          <Link href="/login">Sign in</Link>
        </Button>
      </div>
      <div>{/* Dropdown Box */}</div>
    </header>
  );
}
