import { motion } from "motion/react";
import { Facebook, Search } from "lucide-react";

type CaseStudy = {
  title: string;
  client: string;
  platform: "Meta Ads" | "Google Ads";
  image: string;
  metrics: { label: string; value: string }[];
  blurb: string;
};

const studies: CaseStudy[] = [
  {
    title: "Arabian Grill Night — messaging leads",
    client: "Restaurant · Meta Ads",
    platform: "Meta Ads",
    image: "/Arabian Grill Night Leads.PNG",
    metrics: [
      { label: "Conversations started", value: "8,428" },
      { label: "Cost per result", value: "$0.07" },
      { label: "Amount spent", value: "$599.93" },
    ],
    blurb:
      "Click-to-message campaign driving high-volume WhatsApp/Messenger conversations at 68% below the median cost of similar ad sets.",
  },
  {
    title: "Ceres UK — brand recall lift",
    client: "Ceres UK · Meta Ads",
    platform: "Meta Ads",
    image: "/Ceres UK Meta campaign.png",
    metrics: [
      { label: "Est. ad recall lift", value: "5,670" },
      { label: "Cost per result", value: "£0.03" },
      { label: "Amount spent", value: "£168.51" },
    ],
    blurb:
      "Awareness-focused Meta campaign delivering strong estimated ad recall at an exceptionally efficient cost per result.",
  },
  {
    title: "Lead form acquisition",
    client: "B2B / services · Meta Ads",
    platform: "Meta Ads",
    image: "/xpcleads.png",
    metrics: [
      { label: "Leads (form)", value: "133" },
      { label: "Cost per lead", value: "£9.17" },
      { label: "Amount spent", value: "£1,219.61" },
    ],
    blurb:
      "Sustained lead-gen performance with consistent daily form submissions and disciplined spend across the campaign window.",
  },
  {
    title: "High-volume search traffic",
    client: "Brand campaign · Google Ads",
    platform: "Google Ads",
    image: "/ncgoogle.png",
    metrics: [
      { label: "Clicks", value: "9.73K" },
      { label: "Impressions", value: "355K" },
      { label: "Avg. CPC", value: "£0.44" },
    ],
    blurb:
      "Google Ads search campaign scaling clicks and impressions while maintaining a controlled average cost per click.",
  },
  {
    title: "App install growth",
    client: "Mobile app · Google Ads",
    platform: "Google Ads",
    image: "/ceresgoogle.png",
    metrics: [
      { label: "Clicks", value: "288K" },
      { label: "Installs", value: "22.5K" },
      { label: "Cost / install", value: "$0.05" },
    ],
    blurb:
      "App promotion campaign combining massive click volume with ultra-low cost per install through ongoing bid and creative optimization.",
  },
];

function PlatformBadge({ platform }: { platform: CaseStudy["platform"] }) {
  const isMeta = platform === "Meta Ads";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
        isMeta
          ? "bg-blue-500/10 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300"
          : "bg-amber-500/10 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300"
      }`}
    >
      {isMeta ? <Facebook className="h-3 w-3" /> : <Search className="h-3 w-3" />}
      {platform}
    </span>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-[#CCFF00]">
              Portfolio / case studies
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
              Real campaigns,{" "}
              <span className="text-gradient">real results</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Live performance snapshots from Meta and Google Ads — the same
              dashboards I use to report, optimize, and scale client accounts.
            </p>
          </div>
          <a href="#contact" className="btn-outline self-start md:self-auto">
            Start your campaign
          </a>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {studies.map((study, i) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group glass-card overflow-hidden transition duration-500 hover:-translate-y-1 ${
                i === studies.length - 1 ? "lg:col-span-2 lg:mx-auto lg:max-w-3xl" : ""
              }`}
            >
              <div className="border-b border-slate-200/80 bg-slate-50/50 p-6 dark:border-white/10 dark:bg-white/[0.03] md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      {study.client}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold text-slate-900 dark:text-white">
                      {study.title}
                    </h3>
                  </div>
                  <PlatformBadge platform={study.platform} />
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {study.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-slate-200/80 bg-white/70 px-3 py-3 dark:border-white/10 dark:bg-black/25"
                    >
                      <p className="text-[10px] font-semibold uppercase leading-tight tracking-wide text-slate-500 dark:text-slate-400">
                        {m.label}
                      </p>
                      <p className="mt-1 font-display text-lg font-bold leading-none text-slate-900 dark:text-white md:text-xl">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {study.blurb}
                </p>
              </div>

              <div className="relative overflow-hidden bg-white p-3 dark:bg-slate-950/50 md:p-4">
                <div className="overflow-hidden rounded-xl border border-slate-200/80 shadow-inner dark:border-white/10">
                  <img
                    src={encodeURI(study.image)}
                    alt={`${study.title} — performance dashboard`}
                    className="h-auto w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
