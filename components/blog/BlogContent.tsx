import Image from "next/image";
import Link from "next/link";
import type { BlogPostSection, RichText } from "@/lib/blog";

function renderRichText(text: RichText) {
  if (typeof text === "string") return text;
  return text.map((segment, i) =>
    typeof segment === "string" ? (
      <span key={i}>{segment}</span>
    ) : (
      <Link key={i} href={segment.href} className="text-accent-dark font-semibold hover:underline">
        {segment.text}
      </Link>
    )
  );
}

function BlockRenderer({ section }: { section: BlogPostSection }) {
  return (
    <div>
      {section.heading ? (
        <h2 className="text-2xl md:text-3xl font-extrabold text-navy-dark mb-4">
          {section.heading}
        </h2>
      ) : null}
      <div className="space-y-4 text-slate-600">
        {section.blocks.map((block, i) => {
          switch (block.type) {
            case "paragraph":
              return <p key={i}>{renderRichText(block.text)}</p>;

            case "subheading":
              return (
                <h3 key={i} className="text-xl font-bold text-navy-dark pt-2">
                  {block.text}
                </h3>
              );

            case "list":
              return (
                <ul key={i} className="list-disc pl-5 space-y-2">
                  {block.items.map((item, ii) => (
                    <li key={ii}>{renderRichText(item)}</li>
                  ))}
                </ul>
              );

            case "orderedList":
              return (
                <ol key={i} className="list-decimal pl-5 space-y-2">
                  {block.items.map((item, ii) => (
                    <li key={ii}>{renderRichText(item)}</li>
                  ))}
                </ol>
              );

            case "image":
              return (
                <figure key={i} className="not-prose">
                  <div
                    className="relative w-full rounded-2xl overflow-hidden shadow-sm"
                    style={{ aspectRatio: block.aspect ?? "16 / 10" }}
                  >
                    <Image
                      src={block.src}
                      alt={block.alt}
                      fill
                      sizes="(min-width: 1024px) 768px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {block.caption ? (
                    <figcaption className="text-sm text-slate-500 mt-2 text-center">
                      {block.caption}
                    </figcaption>
                  ) : null}
                </figure>
              );

            case "imageRow":
              return (
                <div
                  key={i}
                  className={`grid gap-4 ${block.images.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}
                >
                  {block.images.map((img, ii) => (
                    <figure key={ii}>
                      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-sm">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 1024px) 256px, 50vw"
                          className="object-cover"
                        />
                      </div>
                      {img.label ? (
                        <figcaption className="text-sm font-semibold text-navy-dark mt-2 text-center">
                          {img.label}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              );

            case "faq":
              return (
                <div key={i} className="space-y-3 pt-2">
                  {block.items.map((faq, fi) => (
                    <div key={fi} className="rounded-xl bg-light p-5">
                      <h3 className="font-semibold text-navy-dark mb-2">{faq.q}</h3>
                      <p className="text-sm text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              );

            case "table":
              return (
                <div key={i} className="overflow-x-auto rounded-xl border border-black/5">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-light">
                        {block.headers.map((header, hi) => (
                          <th
                            key={hi}
                            className="text-left font-bold text-navy-dark p-3 border-b border-black/5"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, ri) => (
                        <tr key={ri} className={ri % 2 === 1 ? "bg-light/50" : undefined}>
                          {row.map((cell, ci) => (
                            <td key={ci} className="p-3 align-top border-b border-black/5 last:border-b-0">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default function BlogContent({ sections }: { sections: BlogPostSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section, i) => (
        <BlockRenderer key={section.heading ?? i} section={section} />
      ))}
    </div>
  );
}
