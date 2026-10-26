// A paragraph/list item can be plain text, or an array of segments where a
// segment is either plain text or { text, href } for a natural in-text link
// (consistent with how links are embedded elsewhere on the site).
export type RichTextSegment = string | { text: string; href: string };
export type RichText = string | RichTextSegment[];

export type BlogPostBlock =
  | { type: "paragraph"; text: RichText }
  | { type: "subheading"; text: string }
  | { type: "list"; items: RichText[] }
  | { type: "orderedList"; items: RichText[] }
  | { type: "image"; src: string; alt: string; caption?: string; aspect?: string }
  | { type: "imageRow"; images: { src: string; alt: string; label?: string }[] }
  | { type: "faq"; items: { q: string; a: string }[] };

export type BlogPostSection = {
  heading?: string;
  blocks: BlogPostBlock[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date, e.g. "2026-10-25"
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  content: BlogPostSection[];
};

// Add a new post by appending an object to this array — the blog index and
// /blog/[slug] route pick it up automatically (listing, sitemap and schema
// are all generated from this file). Each section can mix paragraphs,
// subheadings, bullet/ordered lists, single images, side-by-side image rows
// and an FAQ block (which also feeds the page's FAQPage structured data).
export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-get-rid-of-pet-smells-in-carpets",
    title: "How to Get Rid of Pet Smells in Carpets",
    excerpt:
      "Pet smells can linger in carpet fibres even when they look clean. Here's how to find the source, treat fresh and old odours, and know when to call in the professionals.",
    date: "2026-10-26",
    image: "/images/blog/golden-retriever-resting-on-clean-carpet.webp",
    imageAlt: "Golden retriever lying contentedly on a clean carpet in a bright living room",
    imageWidth: 768,
    imageHeight: 505,
    content: [
      {
        blocks: [
          {
            type: "paragraph",
            text: "Pet smells can make your home feel less fresh, even when your carpets look clean. Whether you have a playful puppy, an older dog or an indoor cat, unpleasant odours can become trapped in carpet fibres and sometimes reach the layers underneath.",
          },
          {
            type: "paragraph",
            text: "If you're wondering how to get rid of pet smells in carpets, the best approach is to find the source of the odour, clean the affected area with a suitable product and let the carpet dry completely.",
          },
          {
            type: "paragraph",
            text: "This guide explains how to tackle fresh pet accidents, old urine smells and everyday dog odours. You'll also learn which home remedies are worth considering, which mistakes to avoid and when professional carpet cleaning might be necessary.",
          },
          {
            type: "image",
            src: "/images/blog/dog-and-cat-on-carpet.webp",
            alt: "A dog and a cat sitting together on a carpet",
          },
        ],
      },
      {
        heading: "Quick Answer: How Do You Remove Pet Smells From Carpets?",
        blocks: [
          {
            type: "paragraph",
            text: "To remove pet smells from carpets, start by identifying the source. Blot any fresh urine with a clean, dry cloth rather than rubbing it. Apply a carpet-safe enzymatic cleaner according to its instructions, then allow the carpet to dry fully.",
          },
          {
            type: "paragraph",
            text: "For general dog smells, regular vacuuming, washing pet bedding and suitable carpet cleaning can help. If the smell returns after treatment, urine may have reached the carpet backing or underlay.",
          },
          {
            type: "imageRow",
            images: [
              {
                src: "/images/blog/pet-odour-test-step-hidden-area.webp",
                alt: "Testing a carpet-safe cleaner on a hidden area near the skirting board",
                label: "1. Test",
              },
              {
                src: "/images/blog/pet-odour-treat-step-enzyme-cleaner.webp",
                alt: "Applying a carpet-safe enzyme cleaner to a stain",
                label: "2. Treat",
              },
              {
                src: "/images/blog/pet-odour-dry-step-fan-ventilation.webp",
                alt: "A fan ventilating a room to help a treated carpet dry",
                label: "3. Dry",
              },
            ],
          },
        ],
      },
      {
        heading: "Why Do Pet Smells Linger in Carpets?",
        blocks: [
          {
            type: "paragraph",
            text: "Carpets contain thousands of fibres that can hold dust, dirt, pet hair and moisture. Unlike hard floors, they have several layers where odour-causing substances may become trapped.",
          },
          { type: "subheading", text: "Pet Urine Penetrates Carpet Fibres" },
          {
            type: "paragraph",
            text: "When a dog or cat urinates on a carpet, the liquid does not always remain on the surface. It can travel through the carpet pile and backing, sometimes reaching the underlay. As urine residue changes over time, it can produce an unpleasant smell that becomes noticeable again in humid conditions.",
          },
          {
            type: "image",
            src: "/images/blog/pet-urine-carpet-layers-diagram.webp",
            alt: "Diagram showing a pet urine spill travelling through carpet fibres, backing and underlay to the subfloor",
            caption: "How a pet urine spill can travel down through a carpet's layers.",
          },
          { type: "subheading", text: "Pet Hair, Dander and Body Oils Build Up" },
          {
            type: "paragraph",
            text: "Not every pet smell comes from urine. Dogs and cats shed hair and tiny skin particles called dander. Their coats also carry body oils and dirt, which can collect in carpet fibres.",
          },
          { type: "subheading", text: "Trapped Moisture Makes Odours Worse" },
          {
            type: "paragraph",
            text: "Carpets that remain damp after accidents or cleaning may develop musty smells. Poor ventilation, excessive water and damp underlay can all contribute to the problem.",
          },
        ],
      },
      {
        heading: "Identify the Type of Pet Smell Before Cleaning",
        blocks: [
          {
            type: "paragraph",
            text: "Not all pet odours are the same. Identifying the source helps you choose the right cleaning method.",
          },
          {
            type: "image",
            src: "/images/blog/pet-odour-types-comparison.webp",
            alt: "Comparison of pet urine smell, general pet odour and outdoor smells in carpet",
            aspect: "805 / 236",
          },
          {
            type: "list",
            items: [
              "Sharp urine smell: Blot and use a suitable enzyme cleaner.",
              "General dog smell: Vacuum and clean pet bedding.",
              "Musty smell: Check drying and ventilation.",
              "Smell returning after cleaning: Inspect backing and underlay.",
              "Dirty outdoor smell: Remove dry dirt and vacuum.",
            ],
          },
        ],
      },
      {
        heading: "How to Get Rid of Pet Smells in Carpets: Step-by-Step",
        blocks: [
          { type: "subheading", text: "Step 1: Blot the Affected Area" },
          {
            type: "paragraph",
            text: "If the carpet is wet, place a clean white towel or paper towels over the area. Press gently to absorb the liquid. Replace the towel when it becomes wet and repeat. Avoid scrubbing because it can spread the stain and damage fibres.",
          },
          {
            type: "imageRow",
            images: [
              {
                src: "/images/blog/carpet-stain-dont-rub-mistake.webp",
                alt: "Rubbing a carpet stain, which can push the liquid deeper into the carpet",
                label: "Don't Rub",
              },
              {
                src: "/images/blog/carpet-stain-blot-correct-method.webp",
                alt: "Gently blotting a carpet stain with a clean towel to absorb the liquid",
                label: "Blot",
              },
            ],
          },
          { type: "subheading", text: "Step 2: Choose a Carpet-Safe Enzyme Cleaner" },
          {
            type: "paragraph",
            text: "Enzymatic pet cleaners are designed to break down certain organic materials responsible for stains and smells. Check the manufacturer's instructions, test a hidden area and keep children and pets away during treatment as directed.",
          },
          { type: "subheading", text: "Step 3: Apply the Cleaner Correctly" },
          {
            type: "paragraph",
            text: "Apply the product according to the label. Different products have different application methods and treatment times. Do not mix cleaning chemicals or soak the carpet unnecessarily.",
          },
          { type: "subheading", text: "Step 4: Allow the Carpet to Dry Completely" },
          {
            type: "paragraph",
            text: "Improve ventilation and use a fan when appropriate. Keep furniture and pets away until the carpet is dry and the product instructions say the area is safe.",
          },
          { type: "subheading", text: "Step 5: Check for Remaining Odours" },
          {
            type: "paragraph",
            text: "Once dry, check the carpet again. If the smell remains, confirm that the entire affected area was treated. Persistent odours may indicate contamination in the backing or underlay.",
          },
        ],
      },
      {
        heading: "How to Remove Old Pet Urine Smells From Carpet",
        blocks: [
          {
            type: "paragraph",
            text: "Old pet urine can be harder to remove because it may have dried and penetrated deeper carpet layers.",
          },
          { type: "subheading", text: "How to Find Hidden Urine Stains" },
          {
            type: "paragraph",
            text: "Check previous accident locations, room corners and areas around furniture. A UV torch may reveal possible spots, but not every urine stain will show and other substances can also fluoresce.",
          },
          { type: "subheading", text: "Why Old Urine Smells Keep Returning" },
          {
            type: "paragraph",
            text: "Urine residue may remain in the carpet backing or underlay. If suitable treatments fail repeatedly, professional inspection may be necessary. In severe cases, the affected underlay may need replacing.",
          },
        ],
      },
      {
        heading: "How to Remove Dog Smell From Carpet Without Urine Stains",
        blocks: [
          {
            type: "paragraph",
            text: [
              "Vacuum the carpet thoroughly, especially where your dog sleeps or plays. Wash pet bedding regularly and allow it to dry fully. If general odours persist, use a carpet cleaning method suitable for the material or consider ",
              { text: "professional carpet cleaning", href: "/services/carpet-cleaning" },
              ".",
            ],
          },
        ],
      },
      {
        heading: "Does Baking Soda Remove Pet Smells From Carpets?",
        blocks: [
          {
            type: "paragraph",
            text: "Baking soda may help with mild surface odours, but it cannot reliably remove urine residue from the backing or underlay. Fine powder may also be difficult to remove and unsuitable for some vacuum cleaners.",
          },
          { type: "subheading", text: "What About White Vinegar?" },
          {
            type: "paragraph",
            text: "Vinegar does not reliably remove all urine residue and may be unsuitable for certain fibres or cleaning equipment. Choose a tested, carpet-safe product designed for pet accidents instead of mixing household chemicals.",
          },
        ],
      },
      {
        heading: "Can You Remove Pet Smells From Every Type of Carpet?",
        blocks: [
          { type: "subheading", text: "Synthetic Carpets" },
          {
            type: "paragraph",
            text: "Nylon, polyester and polypropylene carpets may tolerate suitable water-based treatments, but always check manufacturer instructions and test a hidden area first.",
          },
          { type: "subheading", text: "Wool Carpets" },
          {
            type: "paragraph",
            text: "Wool can be damaged by unsuitable chemicals, excessive moisture or scrubbing. Use compatible products and seek professional advice for delicate carpets.",
          },
        ],
      },
      {
        heading: "Why Does My Carpet Still Smell After Cleaning?",
        blocks: [
          {
            type: "paragraph",
            text: "The carpet may still be damp, urine residue may remain, contamination may have reached the underlay or the smell may come from nearby pet bedding or furniture. Identify the cause before adding more water or cleaning products.",
          },
        ],
      },
      {
        heading: "Common Mistakes to Avoid When Removing Pet Odours",
        blocks: [
          {
            type: "list",
            items: [
              "Rubbing stains instead of blotting them",
              "Using excessive water",
              "Applying unsuitable heat to untreated urine",
              "Mixing cleaning chemicals",
              "Relying only on air fresheners",
              "Ignoring the carpet's care instructions",
            ],
          },
        ],
      },
      {
        heading: "When Should You Consider Professional Pet Odour Removal?",
        blocks: [
          {
            type: "list",
            items: [
              "The smell returns after several treatments",
              "Accidents have happened repeatedly",
              "A large carpet area is affected",
              "The underlay may be contaminated",
              "Delicate materials require specialist care",
            ],
          },
          {
            type: "paragraph",
            text: [
              "Fresh Loom Carpet Cleaning provides ",
              { text: "carpet cleaning", href: "/services/carpet-cleaning" },
              " and ",
              { text: "pet stain treatment", href: "/services/pet-stain-removal" },
              " services in Glasgow and its ",
              { text: "surrounding service areas", href: "/areas" },
              ". Professional assessment can help determine suitable cleaning options, although complete odour removal cannot be guaranteed in every case.",
            ],
          },
        ],
      },
      {
        heading: "How to Prevent Pet Smells From Returning",
        blocks: [
          {
            type: "orderedList",
            items: [
              "Vacuum frequently.",
              "Clean fresh accidents promptly.",
              "Wash pet bedding regularly.",
              "Groom pets to reduce hair and dander.",
              "Dry wet paws before pets walk on carpets.",
              "Keep rooms ventilated.",
              "Use suitable pet-safe products.",
            ],
          },
          {
            type: "paragraph",
            text: "If your pet suddenly starts having repeated accidents indoors, seek veterinary advice.",
          },
        ],
      },
      {
        heading: "Frequently Asked Questions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "How do you get dog smell out of a carpet?",
                a: "Vacuum thoroughly and wash pet bedding. For urine-related smells, use a carpet-safe enzymatic cleaner.",
              },
              {
                q: "What neutralises pet urine smell in carpets?",
                a: "Suitable enzymatic urine cleaners can help break down certain odour-causing materials. Effectiveness depends on the product and depth of contamination.",
              },
              {
                q: "Can old cat urine smell be removed completely?",
                a: "Sometimes, but contamination in the backing or underlay may require deeper treatment or replacement.",
              },
              {
                q: "Why does my carpet smell worse after cleaning?",
                a: "It may still be damp or contain old contamination. Allow complete drying before assessing the result.",
              },
              {
                q: "Does baking soda remove pet urine smells?",
                a: "It may reduce some surface odours but does not reliably remove deeper urine residue.",
              },
              {
                q: "Can professional carpet cleaning remove pet odours?",
                a: "It can help with many odours, but results depend on the carpet and contamination.",
              },
              {
                q: "How can I find dried pet urine in a carpet?",
                a: "Inspect previous accident areas and consider a UV torch, while remembering that it cannot reliably identify every stain.",
              },
              {
                q: "Can pet urine damage carpet underlay?",
                a: "Yes. Heavy or repeated accidents can soak into the underlay and leave persistent contamination.",
              },
            ],
          },
        ],
      },
      {
        heading: "Final Thoughts",
        blocks: [
          {
            type: "paragraph",
            text: "Removing pet smells from carpets starts with finding the source. Fresh accidents are often easier to treat when you blot quickly, use a suitable cleaner and allow proper drying.",
          },
          {
            type: "paragraph",
            text: "For everyday dog smells, regular vacuuming and washing pet bedding can help. Older urine contamination may require professional assessment.",
          },
          {
            type: "paragraph",
            text: [
              "Need help with stubborn carpet odours? ",
              { text: "Explore our services", href: "/services" },
              " or ",
              { text: "get in touch", href: "/contact-us" },
              " with Fresh Loom Carpet Cleaning.",
            ],
          },
        ],
      },
    ],
  },
];

export function getBlogPostsSortedByDate(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getBlogPostFaqs(post: BlogPost): { q: string; a: string }[] {
  return post.content.flatMap((section) =>
    section.blocks.filter((b): b is Extract<BlogPostBlock, { type: "faq" }> => b.type === "faq").flatMap((b) => b.items)
  );
}
