# Qalam — React Blog App

A complete, ready-to-run React blog with **110 sample articles** across 10
categories (Technology, Health & Wellness, Travel, Food & Cooking, Business &
Finance, Education, Sports, Entertainment, Science, Lifestyle), built with
Vite + React Router.

**Live features**
- Home page with a featured/latest article, search, category filters, and pagination
- Category overview page + per-category filtered pages
- Full article page with related posts, tags, working **like button**, and share/copy-link
- Dark / light mode toggle (remembers your choice)
- Contact page — form sends an email straight from the browser (via EmailJS)
  with an automatic **mailto: fallback** so it always works even before you
  set anything up, plus a **WhatsApp button** (floats on every page) that opens
  a chat with **0324 5870783** directly
- Fully responsive, keyboard-accessible, works with `npm start`/`npm run dev`
  locally and deploys as a static site anywhere (AWS Amplify, Vercel, Netlify, GitHub Pages…)

---

## 1. Run it locally

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
cd qalam-blog
npm install
npm run dev
```

Open the URL it prints (usually **http://localhost:5173**). Hot reload is on —
edit any file and the browser updates instantly.

Other scripts:
```bash
npm run build      # production build → outputs to /dist
npm run preview    # preview the production build locally
npm start          # same as "npm run dev" (some hosts expect "start")
```

---

## 2. Push this code to your GitHub repo

From inside the `qalam-blog` folder:

```bash
git init
git add .
git commit -m "Initial commit: Qalam blog app"
git branch -M main
git remote add origin https://github.com/Ahmadansari1942/reactJs.frontend.git
git push -u origin main
```

If the repo already has a commit (like an auto-created README on GitHub), pull
first to avoid a rejected push:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## 3. Deploy on AWS Amplify

1. Push the code to GitHub (step 2 above).
2. Go to the **AWS Amplify Console** → **New app** → **Host web app**.
3. Choose **GitHub**, authorize AWS, and pick the `reactJs.frontend` repo and
   the `main` branch.
4. Amplify auto-detects `amplify.yml` (already included in this project) — no
   changes needed. Click **Save and deploy**.
5. **Important for a React Router app:** after the first deploy, go to
   **App settings → Rewrites and redirects** and add this rule so routes like
   `/blog/some-post` don't 404 on refresh:
   | Source address | Target address | Type |
   |---|---|---|
   | `</^[^.]+$\|\.(?!(css\|gif\|ico\|jpg\|jpeg\|js\|png\|txt\|svg\|woff\|woff2\|ttf\|map\|json)$)([^.]+$)/>` | `/index.html` | 200 (Rewrite) |
6. If you've set up EmailJS (step 4 below), add the same three `VITE_EMAILJS_*`
   values under **App settings → Environment variables**, then redeploy.

Your app will be live at the `*.amplifyapp.com` URL Amplify gives you (or a
custom domain if you connect one).

### Alternative hosts (also work, zero code changes)
- **Vercel:** `vercel` in the project folder, or import the GitHub repo at vercel.com — it auto-detects Vite.
- **Netlify:** drag-and-drop the `dist` folder after `npm run build`, or connect the repo (build command `npm run build`, publish directory `dist`). Netlify needs a `_redirects` file with `/* /index.html 200` for routing — add one to `public/_redirects` if you deploy there.
- **GitHub Pages:** run `npm run build` and publish the `dist` folder with a tool like `gh-pages`.

---

## 4. Connect the contact form to your email

The Contact page works immediately with **zero setup** — clicking "Send
message" opens the visitor's email app with everything pre-filled and
addressed to `ahmad.shahid4219@gmail.com`.

For messages to land in your inbox **without leaving the site**, connect
[EmailJS](https://www.emailjs.com) (free tier, no backend server needed):

1. Create a free account at emailjs.com and log in.
2. **Email Services** → **Add New Service** → connect your Gmail
   (`ahmad.shahid4219@gmail.com`). Copy the **Service ID**.
3. **Email Templates** → **Create New Template**. Use `{{from_name}}`,
   `{{from_email}}`, `{{subject}}`, `{{message}}` as placeholders in the
   template body, and set the "To email" field to your Gmail address. Copy
   the **Template ID**.
4. **Account → General** → copy your **Public Key**.
5. In the project folder, copy `.env.example` to `.env` and fill in the three values:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```
6. Restart `npm run dev` (or redeploy). The form now sends email directly —
   the mailto fallback stays as a backup if EmailJS ever fails.

## 5. The WhatsApp button

The green floating button (bottom-right on every page) already opens a WhatsApp
chat with **0324 5870783** — no setup required. It works because WhatsApp
supports `wa.me` links; real SMS delivery isn't possible from a static,
frontend-only site without a paid SMS provider (like Twilio) wired up to a
backend server, so WhatsApp is the reliable "message the number" option here.

---

## 6. Project structure

```
qalam-blog/
├── amplify.yml              # AWS Amplify build config
├── index.html
├── package.json
├── vite.config.js
├── .env.example              # EmailJS keys go in a .env you create from this
└── src/
    ├── main.jsx               # app entry point
    ├── App.jsx                # routes
    ├── index.css              # design system (all styling)
    ├── config.js              # site name, email, phone, WhatsApp link — edit here
    ├── data/blogs.js           # all 110 posts + generator (edit/replace freely)
    ├── hooks/useLike.js
    ├── context/ThemeContext.jsx
    ├── components/             # Navbar, Footer, BlogCard, Pagination, Icons…
    └── pages/                   # Home, Categories, CategoryPage, BlogDetail, About, Contact, NotFound
```

## 7. Customizing

- **Rebrand:** edit `src/config.js` (site name, tagline, email, phone).
- **Replace the sample posts:** `src/data/blogs.js` builds posts from
  templates. Either edit the `categories` array's topics/paragraphs, or just
  push plain objects into the exported `blogs` array with your own real
  content — each post needs `id, slug, title, category, author, authorBio,
  date, readTime, excerpt, content (array of paragraphs), tags, image, baseLikes`.
- **Colors/fonts:** all in the `:root` variables at the top of `src/index.css`.

---

Built with React 18, React Router 6, and Vite.
