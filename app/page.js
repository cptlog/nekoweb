import Image from "next/image";

export default function Home() {
  return (
    <main>
      <p>to do:</p>
      <ul className="list-disc list-inside">
        <li>
          about pages
        </li>
        <li>
          gallery
        </li>
        <li>
          some cool graphics
        </li>
        <li>
          <strike>more links in resources</strike>
        </li>
        <li>
          light theme
        </li>
        <li>
          content warning system
        </li>
        <li>
          music player (no autoplay dont worry)
        </li>
        <li>
          <strike>fix update section</strike>
        </li>
        <li>
          <strike>move posts to blog</strike>
        </li>
        <li>
          component separation & cleanup
        </li>
        <li>
          <strike>change font airstrip to something nicer</strike>
        </li>
      </ul>
    </main>
  );
}
