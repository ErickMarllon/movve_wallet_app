import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="container-grid absolute overflow-visible bg-transparent border-b-[1px] border-accent-green z-100 max-h-[195px] ">
      <span className="after:absolute after:w-full after:h-full after:top-0 after:z-0 after:bg-background/82 after:backdrop-blur-sm after:pointer-events-none" />
      <Navbar />
    </header>
  );
}
