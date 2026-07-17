// ---------------------------------------------------------------------------
// Qalam blog data
//
// This file builds 110 sample blog posts across 10 categories so the app has
// real content to browse, search, filter and paginate through out of the box.
// The text is placeholder/demo copy generated from templates — swap it out
// for your own posts whenever you're ready (each post is a plain object, so
// you can also hand-write new entries and push them into `blogs` below).
// ---------------------------------------------------------------------------

const authors = [
  { name: "Ayesha Khan", bio: "Writes about technology and the future of work." },
  { name: "Bilal Ahmed", bio: "Covers health, fitness, and everyday habits." },
  { name: "Sara Malik", bio: "Travel writer with a soft spot for slow journeys." },
  { name: "Usman Tariq", bio: "Business and personal finance columnist." },
  { name: "Hina Raza", bio: "Explores food, culture, and home cooking." },
  { name: "Daniyal Farooq", bio: "Science and sports enthusiast turned writer." },
];

const categories = [
  {
    name: "Technology",
    topics: [
      "Artificial Intelligence", "Cloud Computing", "Cybersecurity", "5G Networks",
      "Blockchain", "Quantum Computing", "Edge Computing", "DevOps Culture",
      "Low-Code Platforms", "Open-Source Software", "Wearable Tech",
    ],
    paragraphs: [
      (t) => `${t} has moved from a niche talking point to a routine part of how modern teams get work done. What once needed a specialist is now within reach for teams of every size, and the pace of change shows little sign of slowing.`,
      (t) => `The practical upside of ${t} becomes clear once you look past the buzzwords: faster iteration, fewer manual mistakes, and a lower barrier to entry are the themes we hear most often from teams that have adopted it seriously.`,
      (t) => `Still, ${t} is not a silver bullet. Teams that get real value from it treat it as one part of a wider toolkit, pairing it with solid fundamentals instead of expecting it to replace good judgment.`,
      (t) => `Looking ahead, expect tighter integration between ${t} and the everyday tools people already rely on, which should lower the barrier to entry even further for anyone just getting started.`,
    ],
  },
  {
    name: "Health & Wellness",
    topics: [
      "Mindful Breathing", "Strength Training", "Sleep Hygiene", "Gut Health",
      "Mental Resilience", "Intermittent Fasting", "Desk Ergonomics", "Hydration Habits",
      "Preventive Checkups", "Stress Management", "Morning Routines",
    ],
    paragraphs: [
      (t) => `${t} sounds simple on paper, yet most people never get around to making it a consistent habit. The difference between knowing about ${t} and actually practising it is where the real benefit lives.`,
      (t) => `Small, repeatable changes tend to outlast dramatic ones. Rather than overhauling your entire routine overnight, building ${t} into a single part of your day is usually enough to notice a difference within a few weeks.`,
      (t) => `It helps to track how ${t} affects your energy, mood, and focus rather than chasing a perfect routine. Everybody responds a little differently, and paying attention to your own patterns beats following a generic plan.`,
      (t) => `Talk to a doctor or qualified professional before making major changes, especially if you have an existing condition. This piece is a starting point for thinking about ${t}, not a substitute for personalised advice.`,
    ],
  },
  {
    name: "Travel",
    topics: [
      "Solo Backpacking", "Budget Road Trips", "Mountain Trekking", "Cultural Homestays",
      "Coastal Getaways", "Slow Travel", "Off-Season Tourism", "City Layovers",
      "Desert Camping", "Island Hopping", "Train Journeys",
    ],
    paragraphs: [
      (t) => `${t} rewards travellers who are willing to slow down and let a place unfold at its own pace. The best moments rarely show up in a rushed itinerary.`,
      (t) => `Budgeting time is as important as budgeting money when it comes to ${t}. Leaving room for detours, delays, and the occasional wrong turn is often where the best stories come from.`,
      (t) => `Local guidance beats guidebooks almost every time. Whether it's a shopkeeper, a fellow traveller, or a host, the people you meet along the way often shape ${t} more than any list of attractions.`,
      (t) => `Pack light, keep your documents backed up digitally, and stay flexible. ${t} tends to go smoothest when your plans can bend without breaking.`,
    ],
  },
  {
    name: "Food & Cooking",
    topics: [
      "Home Baking", "Street Food Culture", "One-Pot Meals", "Fermentation",
      "Seasonal Produce", "Regional Spice Blends", "Meal Prepping", "Plant-Based Cooking",
      "Grilling Techniques", "Comfort Food", "Family Recipes",
    ],
    paragraphs: [
      (t) => `${t} is one of those areas of the kitchen where a small amount of technique goes a long way. Once the basics click, the rest becomes a matter of taste and practice.`,
      (t) => `Good ingredients do most of the work in ${t}. Spending a little more on the few items that matter most usually beats an expensive gadget or a complicated method.`,
      (t) => `Mistakes are part of learning ${t} — a dish that doesn't turn out as planned is still useful information for next time. Keep notes on what worked and what didn't.`,
      (t) => `${t} is also a great excuse to gather people around a table. The food is often only half the point; the other half is the company it brings together.`,
    ],
  },
  {
    name: "Business & Finance",
    topics: [
      "Personal Budgeting", "Startup Funding", "Freelance Contracts", "Remote Team Management",
      "Small Business Marketing", "Stock Market Basics", "Side Hustles", "Negotiation Skills",
      "Tax Planning", "E-Commerce Growth", "Financial Literacy",
    ],
    paragraphs: [
      (t) => `${t} is easier to understand in theory than to apply consistently in practice. Most of the value comes from repetition, not from finding one clever trick.`,
      (t) => `Before diving deep into ${t}, it's worth writing down what you're actually trying to achieve. A clear goal makes every decision along the way faster and less stressful.`,
      (t) => `Keep a simple record of your decisions around ${t} so you can look back later and see what actually worked. Most progress here is gradual and easy to miss without a written trail.`,
      (t) => `This article is meant as general information about ${t}, not personalised financial or legal advice — for decisions with real money on the line, a qualified professional is worth the conversation.`,
    ],
  },
  {
    name: "Education",
    topics: [
      "Self-Paced Learning", "Study Techniques", "Online Certifications", "Classroom Technology",
      "Language Learning", "STEM Education", "Vocational Training", "Exam Preparation",
      "Lifelong Learning", "Mentorship Programs", "Early Childhood Learning",
    ],
    paragraphs: [
      (t) => `${t} works best when it's treated as an ongoing habit rather than a short burst of effort before a deadline. Consistency beats intensity almost every time.`,
      (t) => `Everyone approaches ${t} a little differently, and there's no single method that works for every learner. Experimenting with a few approaches early on saves time later.`,
      (t) => `Feedback is the fastest way to improve at anything, and ${t} is no exception. Seeking it out early, even when it stings a little, tends to pay off later.`,
      (t) => `${t} doesn't have to be expensive or formal to be effective. Some of the most useful learning happens outside a classroom, driven by curiosity rather than a syllabus.`,
    ],
  },
  {
    name: "Sports",
    topics: [
      "Youth Cricket Academies", "Marathon Training", "Football Tactics", "Home Workouts",
      "Sports Nutrition", "Injury Recovery", "Team Leadership", "Amateur Tournaments",
      "Cycling Culture", "Swimming Technique", "Esports Growth",
    ],
    paragraphs: [
      (t) => `${t} rewards patience more than raw talent in the long run. The athletes who stick around tend to be the ones who show up consistently, not just the most gifted ones.`,
      (t) => `Recovery is as much a part of ${t} as the training itself. Skipping rest in the name of working harder usually costs more time than it saves.`,
      (t) => `Watching how experienced players approach ${t} is often more useful than any manual. Small habits — how they warm up, how they recover, how they handle a bad day — add up over a season.`,
      (t) => `Whatever your level, ${t} is more enjoyable when there's a clear, honest reason behind it, whether that's competition, health, or simply the community around it.`,
    ],
  },
  {
    name: "Entertainment",
    topics: [
      "Streaming Culture", "Indie Filmmaking", "Podcast Production", "Live Music Scenes",
      "Video Game Storytelling", "Stand-Up Comedy", "Binge-Worthy Series", "Book-to-Screen Adaptations",
      "Animation Studios", "Reality TV Trends", "Soundtrack Composition",
    ],
    paragraphs: [
      (t) => `${t} has changed shape more than once in the last decade, and audiences have changed right along with it. What counted as a hit a few years ago looks different today.`,
      (t) => `Behind every polished piece of ${t} is a much messier process of drafts, cuts, and second-guessing. The parts that look effortless are usually the ones that took the most work.`,
      (t) => `Access to the tools behind ${t} has never been more open, which means the interesting work increasingly comes from unexpected places rather than just established studios.`,
      (t) => `At its best, ${t} is a conversation between creator and audience — the reactions, criticism, and communities that form around a piece of work often become part of its story.`,
    ],
  },
  {
    name: "Science",
    topics: [
      "Climate Research", "Space Exploration", "Renewable Energy", "Marine Biology",
      "Genetics", "Astronomy for Beginners", "Neuroscience", "Robotics",
      "Environmental Conservation", "Vaccine Development", "Materials Science",
    ],
    paragraphs: [
      (t) => `${t} moves forward in small, unglamorous steps far more often than in sudden breakthroughs. Most of the real progress happens quietly, one careful experiment at a time.`,
      (t) => `Explaining ${t} clearly to a non-specialist is a genuine skill, and one that matters — public understanding shapes funding, policy, and trust in the process just as much as the research itself.`,
      (t) => `Uncertainty is a normal, healthy part of ${t}, not a sign that something has gone wrong. Findings get revised as new evidence comes in, and that's the process working as intended.`,
      (t) => `Following ${t} over time, rather than reacting to a single headline, gives a much more accurate picture of where the field is actually heading.`,
    ],
  },
  {
    name: "Lifestyle",
    topics: [
      "Minimalist Living", "Sustainable Fashion", "Home Organization", "Urban Gardening",
      "Digital Detox", "Personal Finance Habits", "Slow Mornings", "Capsule Wardrobes",
      "Journaling Practices", "Community Building", "Work-Life Balance",
    ],
    paragraphs: [
      (t) => `${t} is less about following a strict set of rules and more about noticing what actually adds value to your day and keeping that, while letting the rest go.`,
      (t) => `Small adjustments tend to stick better than dramatic ones when it comes to ${t}. Trying to change everything at once usually leads back to old habits within a week or two.`,
      (t) => `${t} looks different for everyone, shaped by circumstances, budget, and personality — what works well for one household may not translate directly to another.`,
      (t) => `Give any change related to ${t} a few honest weeks before judging whether it's working. Most habits feel awkward at first and only start to feel natural with repetition.`,
    ],
  },
];

const titleTemplates = [
  (t) => `The Rise of ${t}: What You Need to Know`,
  (t) => `Why ${t} Is Changing the Way We Live`,
  (t) => `A Beginner's Guide to ${t}`,
  (t) => `${t}: Trends Worth Watching`,
  (t) => `How ${t} Is Shaping the Future`,
  (t) => `Rethinking ${t} for Everyday Life`,
  (t) => `Inside ${t}: Lessons From the Field`,
  (t) => `${t} 101: Everything You Need to Get Started`,
  (t) => `The Hidden Side of ${t}`,
  (t) => `Making Sense of ${t} Right Now`,
  (t) => `${t}, Explained Simply`,
];

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildBlogs() {
  const list = [];
  let id = 1;
  const now = Date.now();

  categories.forEach((cat, ci) => {
    cat.topics.forEach((topic, ti) => {
      const templateIndex = (ti + ci) % titleTemplates.length;
      const title = titleTemplates[templateIndex](topic);
      const content = cat.paragraphs.map((fn) => fn(topic));
      const author = authors[(ci * 3 + ti) % authors.length];
      const daysAgo = ci * 11 + ti * 5 + 1;
      const date = new Date(now - daysAgo * 86400000).toISOString();
      const readTime = 3 + ((ci + ti * 2) % 5); // varies 3–7 min for a realistic spread
      const excerptSource = content[0];
      const excerpt =
        excerptSource.length > 150 ? excerptSource.slice(0, 150).trim() + "…" : excerptSource;
      const baseLikes = ((ci + 1) * 7 + ti * 3) % 47;

      list.push({
        id,
        slug: `${slugify(title)}-${id}`,
        title,
        category: cat.name,
        author: author.name,
        authorBio: author.bio,
        date,
        readTime,
        excerpt,
        content,
        tags: [cat.name, topic],
        image: `https://picsum.photos/seed/qalam-${id}/900/600`,
        baseLikes,
      });
      id += 1;
    });
  });

  // newest first
  return list.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export const blogs = buildBlogs();

export const categoryList = categories.map((c) => c.name);

export const authorList = authors;

export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug);
}

export function getRelatedBlogs(post, count = 3) {
  return blogs
    .filter((b) => b.id !== post.id && b.category === post.category)
    .slice(0, count);
}
