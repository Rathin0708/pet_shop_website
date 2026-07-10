import { ASSETS } from '../assets'

export type BlogCategory = 'Dogs' | 'Cats' | 'General'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string[]
  date: string
  readTime: string
  image: string
  category: BlogCategory
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'diet-change-signs',
    title: '5 Signs Your Dog Needs a Diet Change',
    excerpt: 'How to spot the early signals and what to look for on the nutrition label.',
    content: [
      "Dogs can't tell you when their food isn't working for them, so it's up to us to read the signs. A dull coat, low energy, or an upset stomach that keeps coming back are often the first clues that something in the bowl needs to change.",
      "Start by watching stool consistency. Frequent soft stools or excessive gas usually mean the current formula isn't agreeing with your dog's digestive system, even if the ingredients look premium on paper.",
      "Weight is another honest indicator. If you can't feel your dog's ribs under a light layer of fat, or if they're visibly protruding, it's worth recalculating portion sizes before switching brands entirely.",
      "When you do transition, do it gradually over 7 to 10 days, mixing increasing amounts of the new food with the old. A sudden switch is one of the most common causes of the very digestive upset you're trying to fix.",
      "Finally, read past the marketing on the front of the bag. Look for a named protein source as the first ingredient and a nutritional adequacy statement confirming the food meets AAFCO standards for your dog's life stage.",
    ],
    date: 'Jul 02, 2026',
    readTime: '6 min read',
    image: ASSETS.bottomCenter,
    category: 'Dogs',
  },
  {
    id: 'cat-house-small-apartments',
    title: 'Choosing the Right Cat House for Small Apartments',
    excerpt: 'Space-saving picks that keep your cat cozy without taking over the living room.',
    content: [
      "Cats don't need a lot of square footage to feel like they have their own territory — they need height, enclosure, and a spot that's unmistakably theirs. In a small apartment, that usually means thinking vertically rather than horizontally.",
      "Wall-mounted shelves and tall, narrow cat trees give your cat a place to perch and observe without eating into your floor plan. Look for units that can be anchored securely, especially if you have an enthusiastic jumper.",
      "Enclosed cat houses work well tucked into an underused corner or the bottom of a bookshelf. The enclosure itself matters more than the size — cats prefer a snug, den-like space they can retreat into over a large open bed.",
      "If your apartment is genuinely tiny, consider furniture that pulls double duty: ottomans with hidden cat caves, or a console table with a built-in cubby. Your cat gets a dedicated space and you don't sacrifice a room to it.",
      "Whatever you choose, place it near a window if you can. A cozy house with a view of the outside world does more for a bored indoor cat than almost any toy.",
    ],
    date: 'Jun 18, 2026',
    readTime: '4 min read',
    image: ASSETS.bottomRight,
    category: 'Cats',
  },
  {
    id: 'puppy-training-basics',
    title: 'Puppy Training Basics Every New Owner Should Know',
    excerpt: 'A calm, consistent routine that gets results in the first few weeks.',
    content: [
      "The first few weeks with a new puppy set the tone for the rest of their life with you. The good news is that training doesn't need to be complicated — it needs to be consistent.",
      "Pick a small vocabulary of commands and use the same words every time. 'Sit' should always mean sit, not 'sit down' one day and 'take a seat' the next. Puppies learn patterns, not synonyms.",
      "Short sessions beat long ones. Five focused minutes, two or three times a day, will get you further than one exhausting twenty-minute session that ends in frustration for both of you.",
      "Reward the behavior you want the instant it happens. Timing matters more than the size of the treat — a puppy needs to connect the good thing to the exact moment they did the right thing.",
      "Accidents and chewed shoes are part of the process, not a sign you're doing it wrong. Stay consistent, keep sessions positive, and the routine you build now will carry your dog well into adulthood.",
    ],
    date: 'May 22, 2026',
    readTime: '5 min read',
    image: ASSETS.bottomLeft,
    category: 'Dogs',
  },
  {
    id: 'indoor-cat-enrichment',
    title: 'Keeping an Indoor Cat Mentally Stimulated',
    excerpt: 'Simple ways to prevent boredom-driven scratching, yowling, and 3am zoomies.',
    content: [
      "An indoor cat is a safer cat, but safety without stimulation often shows up as destructive scratching, midnight zoomies, or a cat that seems permanently unimpressed with life. The fix is usually enrichment, not more space.",
      "Rotate toys weekly instead of leaving everything out at once. A 'new' toy that's actually just been in a drawer for two weeks gets far more engagement than one that's been on the floor since day one.",
      "Puzzle feeders turn mealtime into a task, which taps into a cat's natural instinct to work for food. Start easy so your cat doesn't give up, then gradually increase the difficulty.",
      "Window perches are underrated enrichment. Birds, leaves, and passing pedestrians provide hours of passive entertainment for a fraction of the effort of an interactive toy.",
      "Ten minutes of wand-toy play that mimics a hunt — stalk, chase, catch — does more to settle a restless cat than an hour of solo playtime with a toy that doesn't move like prey.",
    ],
    date: 'May 05, 2026',
    readTime: '5 min read',
    image: ASSETS.bottomRight,
    category: 'Cats',
  },
  {
    id: 'pet-first-aid-kit',
    title: 'Building a Basic Pet First Aid Kit',
    excerpt: "What to keep on hand for minor scrapes, upset stomachs, and travel emergencies.",
    content: [
      "Most pet emergencies aren't emergencies at all — they're minor cuts, upset stomachs, or a limp that needs a closer look. A well-stocked first aid kit handles the small stuff and buys you time for anything bigger.",
      "Start with the basics: gauze pads, self-adhesive vet wrap, blunt-tipped scissors, and a digital thermometer. Vet wrap in particular is a household essential — it sticks to itself, not to fur.",
      "Add saline solution for flushing wounds or eyes, and hydrogen peroxide only if your vet has confirmed it's safe to use for inducing vomiting in your specific pet — it isn't appropriate for every situation.",
      "Keep your vet's number, the nearest emergency clinic's number, and the ASPCA Animal Poison Control line written down on paper. Phone batteries die at the worst possible moments.",
      "Check the kit every few months. Ointments expire, gauze gets used for random household reasons, and a kit that's missing half its contents is just a bag with good intentions.",
    ],
    date: 'Apr 18, 2026',
    readTime: '4 min read',
    image: ASSETS.bottomCenter,
    category: 'General',
  },
  {
    id: 'senior-dog-comfort',
    title: 'Comfort Upgrades for Senior Dogs',
    excerpt: "Small changes that make a real difference as your dog's joints start to ache.",
    content: [
      "Aging happens gradually, then all at once — a dog who cleared the stairs easily last year suddenly hesitates at the bottom step. Comfort upgrades don't need to be dramatic to make a real difference.",
      "An orthopedic bed with real support, not just a thicker cushion, takes pressure off aging hips and joints. Look for high-density memory foam rather than standard fiberfill, which flattens out within months.",
      "Non-slip rugs over hardwood or tile give older dogs the traction they need to get up without their legs sliding out from under them — a common cause of new anxiety around standing up.",
      "Raised food and water bowls reduce strain on the neck and shoulders, especially for larger breeds. It's a small change that makes every single meal a little easier.",
      "Ramps for the car or a favorite couch preserve independence longer than you'd expect. Dogs that can still get to their spot on their own terms tend to stay happier and more active overall.",
    ],
    date: 'Apr 02, 2026',
    readTime: '5 min read',
    image: ASSETS.bottomLeft,
    category: 'Dogs',
  },
]

export function getBlogPost(id: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.id === id)
}
