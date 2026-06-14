import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Wifi, Car, Coffee, Tv, Wind, Star, Phone, Mail, Check, Users, BedDouble, Clock } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import hero from "@/assets/hero-apartment.jpg";
import bedroom from "@/assets/bedroom.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bathroom from "@/assets/bathroom.jpg";
import living from "@/assets/living.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Apartments 88 — Apartments for Rent in Smederevo, Serbia" },
      { name: "description", content: "Modern, fully equipped apartments in Smederevo. Comfortable accommodation for tourists, families, couples and business travelers. Book online today." },
      { property: "og:title", content: "Luxury Apartments 88 — Smederevo" },
      { property: "og:description", content: "Comfortable, fully equipped apartments in Smederevo, Serbia." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

const apartments = [
  {
    name: "Deluxe Studio",
    image: living,
    guests: 2,
    beds: 1,
    price: 45,
    features: ["City view", "Smart TV", "Workspace", "Espresso machine"],
  },
  {
    name: "Premium One-Bedroom",
    image: bedroom,
    guests: 3,
    beds: 2,
    price: 65,
    features: ["King bed", "Full kitchen", "Sofa bed", "Free parking"],
  },
  {
    name: "Family Suite",
    image: kitchen,
    guests: 5,
    beds: 3,
    price: 95,
    features: ["2 bedrooms", "Living + dining", "Family kitchen", "Crib available"],
  },
];

const amenities = [
  { icon: Wifi, label: "High-speed Wi-Fi" },
  { icon: Car, label: "Free parking" },
  { icon: Coffee, label: "Equipped kitchen" },
  { icon: Tv, label: "Smart TV + Netflix" },
  { icon: Wind, label: "A/C + heating" },
  { icon: Clock, label: "24/7 self check-in" },
];

const gallery = [hero, bedroom, kitchen, bathroom, living];

function Index() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "2",
    apartment: "Premium One-Bedroom",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.checkin || !form.checkout) {
      toast.error("Please fill in your name, email and dates.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Reservation request sent! We'll confirm within 1 hour.");
      setForm({ ...form, name: "", email: "", phone: "", message: "" });
    }, 900);
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />

      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight">LA</span>
            <span className="text-gradient-gold font-display text-2xl font-semibold">88</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#apartments" className="hover:text-foreground transition">Apartments</a>
            <a href="#amenities" className="hover:text-foreground transition">Amenities</a>
            <a href="#gallery" className="hover:text-foreground transition">Gallery</a>
            <a href="#location" className="hover:text-foreground transition">Location</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <Button asChild className="btn-gold rounded-full px-5">
            <a href="#reserve">Reserve</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={hero}
          alt="Luxury apartment interior in Smederevo"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-6 pb-24 pt-40 w-full text-white">
          <p className="hairline text-sm uppercase tracking-[0.25em] text-[oklch(0.86_0.08_82)] mb-6">
            Smederevo · Serbia
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] max-w-4xl">
            Your home in <em className="text-gradient-gold not-italic font-medium">Smederevo</em>, crafted for comfort.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl font-light">
            Fully equipped, design-led apartments for tourists, families, couples and business travelers. Book direct, save more.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="btn-gold rounded-full text-base px-8 h-12">
              <a href="#reserve">Check availability</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base px-8 h-12 bg-white/5 border-white/30 text-white hover:bg-white/15 hover:text-white">
              <a href="#apartments">View apartments</a>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2"><Star className="w-4 h-4 fill-[oklch(0.86_0.08_82)] text-[oklch(0.86_0.08_82)]" /> 4.9 · 92 Google reviews</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Fočanska 88, Smederevo 11300</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Instant confirmation</div>
          </div>
        </div>
      </section>

      {/* Apartments */}
      <section id="apartments" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="hairline text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">Our spaces</p>
            <h2 className="font-display text-4xl md:text-6xl font-light">Choose your <em className="text-gradient-gold not-italic font-medium">apartment</em></h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Three thoughtfully designed apartments. Every detail considered, every comfort included.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {apartments.map((a) => (
              <article key={a.name} className="group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-luxe)] transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={a.image} alt={a.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-background/95 backdrop-blur px-3 py-1.5 rounded-full text-sm font-semibold">
                    from €{a.price}<span className="text-muted-foreground text-xs font-normal"> /night</span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-medium">{a.name}</h3>
                  <div className="mt-3 flex gap-5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {a.guests} guests</span>
                    <span className="flex items-center gap-1.5"><BedDouble className="w-4 h-4" /> {a.beds} beds</span>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {a.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-[var(--gold)]" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full btn-gold rounded-full">
                    <a href="#reserve" onClick={() => setForm({ ...form, apartment: a.name })}>Reserve this</a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-28 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="hairline text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">Included</p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">Everything you need, <em className="text-gradient-gold not-italic font-medium">nothing you don't.</em></h2>
            <p className="mt-5 text-muted-foreground text-lg">From self check-in at any hour to a fully stocked kitchen — we've designed every stay to feel effortless.</p>
            <div className="mt-10 grid grid-cols-2 gap-5">
              {amenities.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 bg-card rounded-xl">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-gold)" }}>
                    <Icon className="w-5 h-5 text-[oklch(0.18_0.015_50)]" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={bathroom} alt="Marble bathroom" loading="lazy" className="rounded-2xl aspect-[3/4] object-cover shadow-[var(--shadow-soft)]" />
            <img src={kitchen} alt="Fully equipped kitchen" loading="lazy" className="rounded-2xl aspect-[3/4] object-cover shadow-[var(--shadow-soft)] mt-12" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="hairline text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">Gallery</p>
              <h2 className="font-display text-4xl md:text-5xl font-light">A look <em className="text-gradient-gold not-italic font-medium">inside</em></h2>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-2 gap-4 h-[600px]">
            <img src={gallery[0]} alt="Living room" loading="lazy" className="col-span-3 row-span-2 w-full h-full object-cover rounded-2xl" />
            <img src={gallery[1]} alt="Bedroom" loading="lazy" className="col-span-2 w-full h-full object-cover rounded-2xl" />
            <img src={gallery[2]} alt="Kitchen" loading="lazy" className="col-span-1 w-full h-full object-cover rounded-2xl" />
            <img src={gallery[3]} alt="Bathroom" loading="lazy" className="col-span-1 w-full h-full object-cover rounded-2xl" />
            <img src={gallery[4]} alt="View" loading="lazy" className="col-span-2 w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Reserve */}
      <section id="reserve" className="py-28 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 20% 30%, var(--gold) 0%, transparent 50%)" }} />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="hairline text-sm uppercase tracking-[0.25em] text-[oklch(0.86_0.08_82)] mb-4">Reserve</p>
            <h2 className="font-display text-4xl md:text-6xl font-light">Book your <em className="text-gradient-gold not-italic font-medium">stay</em></h2>
            <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">Send us your dates and we'll confirm availability within the hour. No payment required to request.</p>
          </div>
          <form onSubmit={submit} className="bg-background text-foreground p-8 md:p-10 rounded-3xl shadow-[var(--shadow-luxe)]">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full name *">
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" />
              </Field>
              <Field label="Email *">
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
              </Field>
              <Field label="Phone">
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+381 ..." />
              </Field>
              <Field label="Guests">
                <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                  {[1,2,3,4,5,6].map(n => <option key={n}>{n}</option>)}
                </select>
              </Field>
              <Field label="Check-in *">
                <Input type="date" value={form.checkin} onChange={(e) => setForm({ ...form, checkin: e.target.value })} />
              </Field>
              <Field label="Check-out *">
                <Input type="date" value={form.checkout} onChange={(e) => setForm({ ...form, checkout: e.target.value })} />
              </Field>
              <Field label="Apartment" className="md:col-span-2">
                <select value={form.apartment} onChange={(e) => setForm({ ...form, apartment: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                  {apartments.map(a => <option key={a.name}>{a.name}</option>)}
                </select>
              </Field>
              <Field label="Message" className="md:col-span-2">
                <Textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Anything we should know? Arrival time, special requests..." />
              </Field>
            </div>
            <Button type="submit" disabled={submitting} size="lg" className="mt-6 w-full btn-gold rounded-full h-12 text-base">
              {submitting ? "Sending..." : "Request reservation"}
            </Button>
            <p className="mt-3 text-xs text-muted-foreground text-center">Free cancellation up to 48h before check-in · Check-out 11:00</p>
          </form>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="hairline text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">Find us</p>
            <h2 className="font-display text-4xl md:text-5xl font-light">In the heart of <em className="text-gradient-gold not-italic font-medium">Smederevo</em></h2>
            <p className="mt-5 text-muted-foreground text-lg">Quiet residential street, minutes from the historic fortress, Danube riverfront, restaurants and shopping.</p>
            <div className="mt-8 space-y-4">
              <InfoLine icon={MapPin} title="Address" value="Fočanska 88, Smederevo 11300, Serbia" />
              <InfoLine icon={Clock} title="Check-out" value="11:00" />
              <InfoLine icon={Star} title="Rating" value="4.9 / 5 — 92 reviews" />
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-luxe)] aspect-[4/3]">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Fo%C4%8Danska+88,+Smederevo+11300&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-primary text-primary-foreground py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-semibold">LA</span>
              <span className="text-gradient-gold font-display text-3xl font-semibold">88</span>
            </div>
            <p className="mt-4 text-primary-foreground/70 text-sm max-w-xs">Luxury Apartments 88 — comfortable, fully equipped stays in Smederevo, Serbia.</p>
          </div>
          <div>
            <h4 className="font-display text-xl mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[oklch(0.86_0.08_82)]" /> Fočanska 88, Smederevo</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[oklch(0.86_0.08_82)]" /> hello@luxuryapartments88.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[oklch(0.86_0.08_82)]" /> +381 (0) 00 000 000</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#apartments" className="hover:text-[oklch(0.86_0.08_82)]">Apartments</a></li>
              <li><a href="#amenities" className="hover:text-[oklch(0.86_0.08_82)]">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-[oklch(0.86_0.08_82)]">Gallery</a></li>
              <li><a href="#reserve" className="hover:text-[oklch(0.86_0.08_82)]">Reserve</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Luxury Apartments 88 · luxuryapartments88.com
        </div>
      </footer>
    </div>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</Label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function InfoLine({ icon: Icon, title, value }: { icon: React.ElementType; title: string; value: string }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-gold)" }}>
        <Icon className="w-5 h-5 text-[oklch(0.18_0.015_50)]" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}
