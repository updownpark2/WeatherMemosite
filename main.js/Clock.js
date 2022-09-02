export default function Clock({ $target, Timego }) {
  const Timebox = document.createElement("div");
  $target.appendChild(Timebox);
  Timebox.classList.add("clockbox");
  Timego(Timebox);
}
