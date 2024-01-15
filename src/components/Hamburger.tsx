import styles from "@/app/hamburger.module.css";

type Props = { isOpen: boolean };

export default function Hamburger({ isOpen }: Props) {
  document.body.style.setProperty(
    "--burger-transform1",
    isOpen ? "rotate(45deg)" : "rotate(0)"
  );
  document.body.style.setProperty(
    "--burger-transform2",
    isOpen ? "translateX(100%)" : "translateX(0)"
  );
  document.body.style.setProperty("--burger-opacity", isOpen ? 0 : 1);
  document.body.style.setProperty(
    "--burger-transform3",
    isOpen ? "rotate(-45deg)" : "rotate(0)"
  );
  return (
    <>
      <div className={styles.hamburger}>
        <div className={(styles.burger, styles.burger1)} />
        <div className={(styles.burger, styles.burger2)} />
        <div className={(styles.burger, styles.burger3)} />
      </div>
    </>
  );
}
