# Hindu Wedding Invitation

## Image paths
The website expects these files inside `images/`:

- `bride.png` — portrait bride photo
- `groom.png` — portrait groom photo
- `rings.jpg` — couple/rings image
- `Mrg1.jpg`
- `Mrg2.png`
- `Mrg3.png`
- `group.jpg` — family/group photo

## Layout
- Bride and groom portraits are displayed as separate portrait cards.
- `group.jpg` is displayed on its own dedicated full-page `group.html`.
- The other three gallery photos remain in `photos.html`.

## Mobile
The CSS is responsive. On phones:
- bride/groom portraits stack vertically;
- the group photo uses a dedicated full-screen-style page;
- gallery images stack into one column;
- images stay within the viewport.

Edit image paths and wedding details in `js/config.js`.
