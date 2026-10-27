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
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] };

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
  {
    slug: "diy-carpet-cleaning-vs-professional-cleaning",
    title: "DIY Carpet Cleaning vs Professional Cleaning: Which Is Better?",
    excerpt:
      "DIY carpet cleaning vs professional cleaning, compared honestly: when DIY works, where it goes wrong, and how to choose, with a full decision table and checklist.",
    date: "2026-10-27",
    image: "/images/blog/professional-technician-cleaning-sofa-edge-carpet.webp",
    imageAlt: "Professional carpet cleaning technician treating a stain beside a sofa with extraction equipment",
    imageWidth: 1200,
    imageHeight: 800,
    content: [
      {
        blocks: [
          {
            type: "paragraph",
            text: "Your carpet looks tired, and a hire machine looks like a cheap fix. Get it wrong and you end up with a damp, patchy carpet and stains that return. The choice in DIY carpet cleaning vs professional cleaning matters more than it seems.",
          },
          {
            type: "paragraph",
            text: "This guide compares both routes honestly. You will see when DIY works, where it goes wrong, and how to choose.",
          },
        ],
      },
      {
        heading: "DIY Carpet Cleaning vs Professional Cleaning: The Short Answer",
        blocks: [
          {
            type: "paragraph",
            text: "Professional cleaning gives a deeper, lower-risk clean, but DIY works well for light dirt and regular upkeep. The right choice depends on how dirty the carpet is, which fibre it has, and how much time you have.",
          },
          {
            type: "paragraph",
            text: "Michael Bogoyavlenskiy, CEO of Cleaning Express, told Woman & Home in April 2026 that DIY will not match a professional result. He still calls DIY the more sensible choice for most people.",
          },
          {
            type: "table",
            headers: ["", "DIY by hand", "Own or hired machine", "Professional clean"],
            rows: [
              [
                "Best for",
                "Fresh spills and light dirt",
                "An occasional refresh of lightly soiled carpet",
                "Ground-in dirt, old stains and delicate fibres",
              ],
              [
                "Water left behind",
                "Little, if you avoid soaking",
                "Varies by machine",
                "Often less, because the equipment is stronger",
              ],
              ["Effort", "Low to medium", "High: heavy kit and slow passes", "None"],
              [
                "Main risk",
                "Rubbing or soaking a stain",
                "Over-wetting and leftover detergent",
                "A method that does not suit your fibre",
              ],
            ],
          },
        ],
      },
      {
        heading: "What Counts as DIY Carpet Cleaning?",
        blocks: [
          {
            type: "paragraph",
            text: "DIY carpet cleaning means anything you do yourself, from blotting a spill to running a hired carpet washer.",
          },
          { type: "subheading", text: "Hand Cleaning and Spot Treatment" },
          {
            type: "paragraph",
            text: "Hand cleaning suits fresh spills and small marks. Vacuum first, then treat the stain with a carpet stain remover. Dab from the outside in, and test the product on a hidden patch first.",
          },
          {
            type: "paragraph",
            text: "Avoid lots of water and hot water, which can make some stains worse, Which? (March 2026) advises. Rubbing is just as risky. Brintons' Jodie Hatton told Woman & Home that it can burst the pile and leave the carpet fluffy and discoloured.",
          },
          {
            type: "paragraph",
            text: "For odours, sprinkle baking soda on the dry carpet and leave it for at least 15 minutes. Then vacuum it up thoroughly, as Which? suggests.",
          },
          {
            type: "image",
            src: "/images/blog/blotting-fresh-spill-stain-on-carpet.webp",
            alt: "Blotting a fresh tea spill on a carpet with a clean cloth",
            aspect: "3 / 2",
          },
          { type: "subheading", text: "Hiring or Buying a Carpet Washer" },
          {
            type: "paragraph",
            text: "A carpet washer sprays water and detergent into the fibres, scrubs them, then sucks the dirty water back up. Carpet cleaner hire puts one in your hands for a day or two.",
          },
          {
            type: "paragraph",
            text: "The Which? carpet cleaner tests say dedicated washers usually clean better than multipurpose machines. They also warn that the machines are bulky and heavy. The models Which? lists weigh between 6.4kg and 17.8kg.",
          },
          {
            type: "paragraph",
            text: "Which? says buying suits homes that need regular cleans. Renting suits lightly used homes that need an occasional deep clean.",
          },
          {
            type: "image",
            src: "/images/blog/diy-and-professional-carpet-cleaning-machines.webp",
            alt: "A domestic carpet washer and a larger professional extraction unit side by side in a living room",
            aspect: "3 / 2",
          },
          {
            type: "paragraph",
            text: [
              "Check that rugs and sofas are colourfast before you use a machine's upholstery tool. Tech Advisor (2022) also says to avoid carpet cleaners on silk, jute and leather. Delicate pieces may need specialist ",
              { text: "rug cleaning", href: "/services/rug-cleaning" },
              " or ",
              { text: "upholstery cleaning", href: "/services/upholstery-cleaning" },
              ".",
            ],
          },
        ],
      },
      {
        heading: "How Does a Professional Carpet Clean Work?",
        blocks: [
          {
            type: "paragraph",
            text: "A professional clean follows a set order: inspect, remove dry soil, pre-treat, agitate, extract and dry.",
          },
          {
            type: "paragraph",
            text: "One UK cleaning firm's 2026 guide sets out this sequence:",
          },
          {
            type: "orderedList",
            items: [
              "Inspect the carpet and spot-test a hidden patch.",
              "Dry vacuum to lift out grit before any water goes in.",
              "Pre-spray a product that suits the fibre.",
              "Agitate it through the pile to release bonded soil.",
              "Extract the dirty water with hot water extraction.",
              "Dry the carpet and groom the pile.",
            ],
          },
          {
            type: "paragraph",
            text: "The dry vacuum matters because water pushed onto dry grit turns it to mud and drives it deeper, the guide says. Benjamin Hirst of Smart Cleaning also advised Woman & Home to vacuum slowly in several directions before any wet clean.",
          },
          {
            type: "paragraph",
            text: "Hot water extraction sprays hot water and detergent into the carpet, then pulls it back out with the dirt. Fantastic Services' 2023 blog notes that firms often call it steam cleaning, even though the two differ.",
          },
          {
            type: "paragraph",
            text: [
              "Ask any cleaner which method they use. Dry cleaning, for example, uses powder or compound with little or no water. The Fantastic Services blog says it suits more delicate carpets, and Hirst says dry powder also works at home. If you want a method matched to your carpet, ask a ",
              { text: "professional carpet cleaning service", href: "/services/carpet-cleaning" },
              " which approach fits.",
            ],
          },
        ],
      },
      {
        heading: "When Is DIY Carpet Cleaning Good Enough?",
        blocks: [
          {
            type: "paragraph",
            text: "DIY works well for fresh spills, light dirt and regular upkeep on a carpet in good condition. Woman & Home's April 2026 verdict is that a fairly new, well-maintained carpet may not need a professional.",
          },
          { type: "paragraph", text: "DIY is a good fit when:" },
          {
            type: "list",
            items: [
              "The carpet is fairly new and well kept.",
              "The dirt is light and mostly on the surface.",
              "The room is small and sees little traffic.",
              "You want to treat fresh spills straight away.",
            ],
          },
          {
            type: "paragraph",
            text: "Good technique closes much of the gap. Work in straight, slightly overlapping lines, move slowly, and keep going until the water runs clear, according to Which? and Cleaning Express.",
          },
          {
            type: "paragraph",
            text: "Cleaning Express's CEO adds that a domestic machine with counter-rotating brushes and a decent detergent does a good job. He also notes that some professionals rush, so careful DIY can beat a hurried clean.",
          },
        ],
      },
      {
        heading: "Where Does DIY Carpet Cleaning Go Wrong?",
        blocks: [
          {
            type: "paragraph",
            text: "DIY goes wrong when the carpet gets too wet, the wrong product goes in, or the machine cannot handle the pile.",
          },
          { type: "subheading", text: "Too Much Water and Slow Drying" },
          {
            type: "paragraph",
            text: "Wetter is not better. Tech Advisor (2022) warns that a soaked underlay encourages mould, and that furniture returned too soon leaves damp spots.",
          },
          {
            type: "paragraph",
            text: "Plan for a long dry. Tech Advisor puts the usual time at five or six hours and up to 24 hours, so leave the room empty overnight if you can. Open windows and run fans or a dehumidifier.",
          },
          {
            type: "paragraph",
            text: "Which? measures this directly. It weighs test carpets after one, five and 24 hours to see how much water each machine leaves behind. Some models leave carpets soggy.",
          },
          {
            type: "image",
            src: "/images/blog/damp-patchy-carpet-drying-with-fan.webp",
            alt: "A damp, patchy carpet drying with a fan after a DIY carpet clean",
            aspect: "3 / 2",
          },
          { type: "subheading", text: "Why Stains Come Back (Carpet Wicking)" },
          {
            type: "paragraph",
            text: "Stains can return because moisture carries deep dirt back to the surface as the carpet dries. A 2023 carpet-cleaning industry blog calls this wicking. It links wicking to too much water or detergent, slow drying and shallow cleaning.",
          },
          {
            type: "paragraph",
            text: "Wicking only happens while the carpet is wet, so faster drying gives it less chance. A 2010 how-to guide names two causes of brown patches: too much solution and water, or deep dirt rising as the carpet dries.",
          },
          {
            type: "paragraph",
            text: "If brown patches appear, the same guide suggests extracting the excess moisture with a wet vacuum and drying the spot with a fan. Use as little water as you can on the repeat clean.",
          },
          { type: "subheading", text: "Wrong Products and Leftover Residue" },
          {
            type: "paragraph",
            text: "Household cleaners can leave residue and damage fibres, even when they seem to work at first.",
          },
          {
            type: "paragraph",
            text: "Carpet brand Cormar advises against dish soap, bar soap and general-purpose cleaners in its wool care guide. It says they can cause faster re-soiling, colour bleeding, bleaching and damage to the pile or backing. Tech Advisor also warns against improvising with washing-up liquid, because you will struggle to rinse it out.",
          },
          {
            type: "paragraph",
            text: "For wool and wool-rich carpets, Cormar recommends a WoolSafe Approved service provider. If you clean the carpet yourself, it recommends independently tested products. WoolSafe is a UK organisation that advises on wool carpet care and approves cleaning products and service providers.",
          },
          {
            type: "paragraph",
            text: "Hire firms add their own rules. Rug Doctor's hire page says to use only its detergents. It warns that other products, such as laundry detergent, can damage the machine and possibly your carpet. It also says it does not cover problems with machines from unauthorised dealers, so hire from an official outlet.",
          },
          { type: "subheading", text: "Thick Carpets and Machine Limits" },
          {
            type: "paragraph",
            text: "Hire machines can struggle on thick carpets, so test a small area first. A December 2021 Mumsnet thread describes one thick, good-quality carpet that stayed waterlogged after cleaning with a hired machine. That is a single report, not a rule.",
          },
          {
            type: "paragraph",
            text: "A test patch in a quiet corner shows how much water your carpet holds and how well the machine pulls it out. If the patch stays soaked, stop and ask a professional.",
          },
          { type: "subheading", text: "Steam Cleaners and Spot Cleaners" },
          {
            type: "paragraph",
            text: "Which? found steam cleaners and spot cleaners disappointing. Its tests rated steam cleaners poor at cleaning carpets, and long use risks shrinking or damaging fibres.",
          },
          {
            type: "paragraph",
            text: "Which? could not recommend any spot cleaner it tested. All struggled, especially with coffee stains. Most full-size machines also did badly on dried-on stains in its tests. Which? says a carpet stain remover spray is usually the better option.",
          },
        ],
      },
      {
        heading: "Is Professional Carpet Cleaning Worth It?",
        blocks: [
          {
            type: "paragraph",
            text: "Professional carpet cleaning is worth it when the carpet is heavily soiled, delicate, stained or untouched for years. Cleaning Express's CEO names moving home and long gaps between cleans as the clearest cases.",
          },
          {
            type: "paragraph",
            text: "Brintons' Jodie Hatton says some stains are too stubborn or large to tackle alone. Professionals use more powerful equipment, she told Woman & Home, so they lift deep dirt that home tools may miss.",
          },
          {
            type: "paragraph",
            text: [
              "Moving home is one of those moments. An ",
              { text: "end-of-tenancy deep clean", href: "/services/end-of-tenancy-deep-clean" },
              " is one option if you are leaving a rental.",
            ],
          },
          {
            type: "paragraph",
            text: [
              "Pet accidents are another. One UK firm's 2026 guide says accidents that soak into the underlay defeat hire machines. Specialist ",
              { text: "pet stain removal", href: "/services/pet-stain-removal" },
              " and ",
              { text: "odour removal", href: "/services/odour-removal" },
              " exist for these cases.",
            ],
          },
          {
            type: "paragraph",
            text: [
              "Dried-on marks are harder than fresh ones. Which? found most machines weak on them, so a specialist ",
              { text: "stain removal", href: "/services/stain-removal" },
              " treatment may suit better. Wool, silk and jute carpets need a cleaner who knows the fibre.",
            ],
          },
          {
            type: "paragraph",
            text: "Professional cleaning costs more upfront than DIY. In return, you save a day of work and avoid hauling a heavy machine.",
          },
        ],
      },
      {
        heading: "Which Should You Choose? A Decision Table",
        blocks: [
          {
            type: "paragraph",
            text: "DIY carpet cleaning vs professional cleaning comes down to the carpet's condition: choose DIY for light, fresh dirt, a machine for an occasional refresh, and a professional for anything deep, delicate or old.",
          },
          {
            type: "table",
            headers: ["Your situation", "Best option", "Why"],
            rows: [
              ["Fresh spill", "DIY: blot and spot-treat", "Quick action stops many stains setting."],
              [
                "Light dirt on a well-kept carpet",
                "DIY by hand or machine",
                "Experts say it may not need a professional.",
              ],
              ["Small, low-traffic room", "Hired or own machine", "It suits an occasional refresh."],
              [
                "Years since the last clean, or moving home",
                "Professional",
                "Cleaning Express's CEO names both cases.",
              ],
              [
                "Ground-in stains, wax or set-in traffic lanes",
                "Professional",
                "Stronger equipment lifts deeper dirt.",
              ],
              [
                "Wool, silk, jute or another delicate fibre",
                "A professional who knows the fibre",
                "Heat or the wrong product can damage it.",
              ],
              [
                "Pet accidents soaked into the underlay",
                "Professional or specialist treatment",
                "One 2026 firm guide says hire machines struggle here.",
              ],
              [
                "Thick, dense pile",
                "Test a patch first, or ask a professional",
                "One 2021 thread reports waterlogging.",
              ],
            ],
          },
        ],
      },
      {
        heading: "Checklist: Before You Hire a Machine or Book a Professional",
        blocks: [
          {
            type: "paragraph",
            text: "A short checklist prevents most DIY and booking mistakes.",
          },
          { type: "subheading", text: "Before You Hire or Use a Machine" },
          {
            type: "list",
            items: [
              "Check your carpet fibre and any guarantee terms first.",
              "Vacuum slowly in several directions before any water goes down.",
              "Test the product and machine on a hidden patch.",
              "Hire from an official outlet, and read the detergent rules before swapping products.",
              "Use less water than you think you need, and rinse once with clean water.",
              "Plan the drying time: open windows, run fans and keep pets out.",
            ],
          },
          { type: "subheading", text: "Questions to Ask a Professional" },
          {
            type: "list",
            items: [
              "Which method will you use: hot water extraction, dry cleaning or another?",
              "Do you dry vacuum and spot-test before cleaning?",
              "Which products will you use on my fibre, and are they WoolSafe Approved for wool?",
              "How long will the carpet take to dry?",
              "What happens if a stain returns or the result disappoints?",
              "Are you insured?",
            ],
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
                q: "Is professional carpet cleaning better than DIY?",
                a: "Professional cleaning gives a deeper clean, but it is not always necessary. It suits ground-in dirt, old stains, delicate fibres and long gaps between cleans. DIY suits light dirt and fresh spills. The decision table above matches common situations to each option.",
              },
              {
                q: "Can a hire machine damage my carpet?",
                a: "Yes, mainly through over-wetting, leftover detergent or the wrong product for your fibre. Tech Advisor (2022) links soaked underlay to mould, and Cormar warns that household cleaners can bleach and damage fibres. Test a hidden patch, rinse well and dry the room properly.",
              },
              {
                q: "How long does a carpet take to dry after cleaning?",
                a: "A carpet usually takes five or six hours to dry, and up to 24 hours, according to Tech Advisor (2022). Drying depends on the machine, the pile and the room. Which? weighs test carpets after one, five and 24 hours to compare how wet each machine leaves them. Ask a professional for a drying time before you book.",
              },
              {
                q: "How often should you clean your carpets?",
                a: "About once a year for a professional clean, or every three to six months with your own machine, according to Cleaning Express's CEO. Jodie Hatton says regular vacuuming and prompt spot cleaning can be enough. Both spoke to Woman & Home in April 2026.",
              },
              {
                q: "Is steam cleaning the same as hot water extraction?",
                a: "No, although many firms use the terms as if they mean the same thing. Fantastic Services' 2023 blog says firms often sell hot water extraction as steam cleaning. Which? treats steam cleaners as separate machines and found them poor on carpet, so ask which method a cleaner uses.",
              },
            ],
          },
        ],
      },
      {
        heading: "Need Help With Your Carpets?",
        blocks: [
          {
            type: "paragraph",
            text: "Describe your carpet's fibre, its stains and the date of its last clean to a professional, and ask which method suits it.",
          },
          {
            type: "paragraph",
            text: [
              "Looking for local help? Browse carpet cleaning in ",
              { text: "Edinburgh", href: "/areas/edinburgh" },
              " or ",
              { text: "Dundee", href: "/areas/dundee" },
              ", or ",
              { text: "get in touch", href: "/contact-us" },
              " with a question about your carpet.",
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
