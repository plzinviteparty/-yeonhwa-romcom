from pathlib import Path
root=Path(__file__).resolve().parent
src=root/"src"
script=b"".join(p.read_bytes() for p in sorted(src.glob("*.js")))
html=(src/"template.html").read_bytes().replace(b"@@STYLE@@",(src/"style.css").read_bytes()).replace(b"@@SCRIPT@@",script)
(root/"index.html").write_bytes(html)
