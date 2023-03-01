import { DiscordIcon, GitHubIcon } from "nextra/icons";

function Github() {
  return (
    <a
      href="https://github.com/nitehub-org/"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Nitehub Org.'s GitHub"
      target="_blank"
      rel="noreferrer"
    >
      {/* Nextra icons have a <title> attribute providing alt text */}
      <GitHubIcon />
    </a>
  );
}

function Discord() {
  return (
    <a
      href="https://discord.gg/tEcXZ2FVuz"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Nitehub Discord Server"
      target="_blank"
      rel="noreferrer"
    >
      <DiscordIcon />
    </a>
  );
}

export { Github, Discord };
