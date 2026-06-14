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
import bedroom2 from "@/assets/bedroom2.jpg";
import familyRoom from "@/assets/family-room.jpg";
import terrace from "@/assets/terrace.jpg";
import pool from "@/assets/pool.jpg";
import dining from "@/assets/dining.jpg";
import bar from "@/assets/bar.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Apartments 88 — Apartmani za izdavanje u Smederevu" },
      { name: "description", content: "Moderni, potpuno opremljeni apartmani u Smederevu. Udoban smeštaj za turiste, porodice, parove i poslovne goste. Rezervišite onlajn." },
      { property: "og:title", content: "Luxury Apartments 88 — Smederevo" },
      { property: "og:description", content: "Udobni, potpuno opremljeni apartmani u Smederevu, Srbija." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

const apartments = [
  {
    name: "Deluxe Studio",
    image: bedroom2,
    guests: 2,
    beds: 1,
    price: 45,
    features: ["Udoban bračni krevet", "Smart TV", "Klima uređaj", "Privatno kupatilo"],
  },
  {
    name: "Premium Jednosoban",
    image: bedroom,
    guests: 3,
    beds: 2,
    price: 65,
    features: ["King krevet", "Sopstvena terasa", "Klima i grejanje", "Besplatan parking"],
  },
  {
    name: "Porodični Apartman",
    image: familyRoom,
    guests: 5,
    beds: 3,
    price: 95,
    features: ["Prostrana spavaća soba", "Krevetac na zahtev", "Dodatni ležajevi", "Pogled na prirodu"],
  },
];

const amenities = [
  { icon: Wifi, label: "Brzi Wi-Fi" },
  { icon: Car, label: "Besplatan parking" },
  { icon: Coffee, label: "Bar i recepcija" },
  { icon: Tv, label: "Smart TV + Netflix" },
  { icon: Wind, label: "Klima i grejanje" },
  { icon: Clock, label: "Samostalni check-in 24/7" },
];

const gallery = [hero, bedroom, terrace, pool, bar, dining, familyRoom, bedroom2];

function Index() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "2",
    apartment: "Premium Jednosoban",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.checkin || !form.checkout) {
      toast.error("Molimo unesite ime, email i datume.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Zahtev za rezervaciju je poslat! Potvrdićemo u roku od 1 sata.");
      setForm({ ...form, name: "", email: "", phone: "", message: "" });
    }, 900);
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />

      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Luxury Apartments 88 logo" className="h-10 w-10 object-contain" />
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-xl font-semibold tracking-tight">Luxury Apartments</span>
              <span className="text-gradient-gold font-display text-xl font-semibold">88</span>
            </div>
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#apartments" className="hover:text-foreground transition">Apartmani</a>
            <a href="#amenities" className="hover:text-foreground transition">Sadržaji</a>
            <a href="#gallery" className="hover:text-foreground transition">Galerija</a>
            <a href="#location" className="hover:text-foreground transition">Lokacija</a>
            <a href="#contact" className="hover:text-foreground transition">Kontakt</a>
          </nav>
          <Button asChild className="btn-gold rounded-full px-5">
            <a href="#reserve">Rezerviši</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={hero}
          alt="Luxury Apartments 88 — eksterijer u Smederevu"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-6 pb-24 pt-40 w-full text-white">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="" className="h-12 w-12 object-contain drop-shadow-lg" />
            <p className="hairline text-sm uppercase tracking-[0.25em] text-[oklch(0.86_0.08_82)]">
              Smederevo · Srbija
            </p>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] max-w-4xl">
            Vaš dom u <em className="text-gradient-gold not-italic font-medium">Smederevu</em>, stvoren za udobnost.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl font-light">
            Potpuno opremljeni, dizajnirani apartmani za turiste, porodice, parove i poslovne goste. Rezervišite direktno i uštedite više.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="btn-gold rounded-full text-base px-8 h-12">
              <a href="#reserve">Proveri dostupnost</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base px-8 h-12 bg-white/5 border-white/30 text-white hover:bg-white/15 hover:text-white">
              <a href="#apartments">Pogledaj apartmane</a>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2"><Star className="w-4 h-4 fill-[oklch(0.86_0.08_82)] text-[oklch(0.86_0.08_82)]" /> 4.9 · 92 Google recenzije</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Fočanska 88, Smederevo 11300</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Trenutna potvrda</div>
          </div>
        </div>
      </section>

      {/* Apartments */}
      <section id="apartments" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="hairline text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">Naši prostori</p>
            <h2 className="font-display text-4xl md:text-6xl font-light">Izaberite svoj <em className="text-gradient-gold not-italic font-medium">apartman</em></h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Tri pažljivo dizajnirana apartmana. Svaki detalj promišljen, svaka udobnost uključena.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {apartments.map((a) => (
              <article key={a.name} className="group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-luxe)] transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={a.image} alt={a.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-background/95 backdrop-blur px-3 py-1.5 rounded-full text-sm font-semibold">
                    od €{a.price}<span className="text-muted-foreground text-xs font-normal"> /noć</span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-medium">{a.name}</h3>
                  <div className="mt-3 flex gap-5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {a.guests} gostiju</span>
                    <span className="flex items-center gap-1.5"><BedDouble className="w-4 h-4" /> {a.beds} kreveta</span>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {a.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-[var(--gold)]" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full btn-gold rounded-full">
                    <a href="#reserve" onClick={() => setForm({ ...form, apartment: a.name })}>Rezerviši ovaj</a>
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
            <p className="hairline text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">Uključeno</p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">Sve što vam treba, <em className="text-gradient-gold not-italic font-medium">ništa suvišno.</em></h2>
            <p className="mt-5 text-muted-foreground text-lg">Od samostalnog check-ina u bilo koje doba do bazena, terase i bara — svaki boravak je osmišljen da bude bezbrižan.</p>
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
            <img src={pool} alt="Bazen i ležaljke" loading="lazy" className="rounded-2xl aspect-[3/4] object-cover shadow-[var(--shadow-soft)]" />
            <img src={terrace} alt="Terasa sa pogledom" loading="lazy" className="rounded-2xl aspect-[3/4] object-cover shadow-[var(--shadow-soft)] mt-12" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="hairline text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">Galerija</p>
              <h2 className="font-display text-4xl md:text-5xl font-light">Pogled <em className="text-gradient-gold not-italic font-medium">iznutra</em></h2>
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-2 gap-4 h-[600px]">
            <img src={gallery[0]} alt="Eksterijer" loading="lazy" className="col-span-3 row-span-2 w-full h-full object-cover rounded-2xl" />
            <img src={gallery[1]} alt="Spavaća soba" loading="lazy" className="col-span-2 w-full h-full object-cover rounded-2xl" />
            <img src={gallery[2]} alt="Terasa" loading="lazy" className="col-span-1 w-full h-full object-cover rounded-2xl" />
            <img src={gallery[3]} alt="Bazen" loading="lazy" className="col-span-1 w-full h-full object-cover rounded-2xl" />
            <img src={gallery[4]} alt="Bar" loading="lazy" className="col-span-2 w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Reserve */}
      <section id="reserve" className="py-28 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 20% 30%, var(--gold) 0%, transparent 50%)" }} />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="hairline text-sm uppercase tracking-[0.25em] text-[oklch(0.86_0.08_82)] mb-4">Rezervacija</p>
            <h2 className="font-display text-4xl md:text-6xl font-light">Rezervišite svoj <em className="text-gradient-gold not-italic font-medium">boravak</em></h2>
            <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">Pošaljite nam datume i potvrdićemo dostupnost u roku od sat vremena. Nije potrebna uplata za upit.</p>
          </div>
          <form onSubmit={submit} className="bg-background text-foreground p-8 md:p-10 rounded-3xl shadow-[var(--shadow-luxe)]">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Ime i prezime *">
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Petar Petrović" />
              </Field>
              <Field label="Email *">
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="vi@email.com" />
              </Field>
              <Field label="Telefon">
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+381 ..." />
              </Field>
              <Field label="Broj gostiju">
                <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                  {[1,2,3,4,5,6].map(n => <option key={n}>{n}</option>)}
                </select>
              </Field>
              <Field label="Dolazak *">
                <Input type="date" value={form.checkin} onChange={(e) => setForm({ ...form, checkin: e.target.value })} />
              </Field>
              <Field label="Odlazak *">
                <Input type="date" value={form.checkout} onChange={(e) => setForm({ ...form, checkout: e.target.value })} />
              </Field>
              <Field label="Apartman" className="md:col-span-2">
                <select value={form.apartment} onChange={(e) => setForm({ ...form, apartment: e.target.value })} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                  {apartments.map(a => <option key={a.name}>{a.name}</option>)}
                </select>
              </Field>
              <Field label="Poruka" className="md:col-span-2">
                <Textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Nešto što treba da znamo? Vreme dolaska, posebni zahtevi..." />
              </Field>
            </div>
            <Button type="submit" disabled={submitting} size="lg" className="mt-6 w-full btn-gold rounded-full h-12 text-base">
              {submitting ? "Slanje..." : "Pošalji zahtev za rezervaciju"}
            </Button>
            <p className="mt-3 text-xs text-muted-foreground text-center">Besplatno otkazivanje do 48h pre dolaska · Odjava u 11:00</p>
          </form>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="hairline text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4">Pronađite nas</p>
            <h2 className="font-display text-4xl md:text-5xl font-light">U srcu <em className="text-gradient-gold not-italic font-medium">Smedereva</em></h2>
            <p className="mt-5 text-muted-foreground text-lg">Mirna stambena ulica, na nekoliko minuta od istorijske tvrđave, šetališta uz Dunav, restorana i prodavnica.</p>
            <div className="mt-8 space-y-4">
              <InfoLine icon={MapPin} title="Adresa" value="Fočanska 88, Smederevo 11300, Srbija" />
              <InfoLine icon={Clock} title="Odjava" value="11:00" />
              <InfoLine icon={Star} title="Ocena" value="4.9 / 5 — 92 recenzije" />
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-luxe)] aspect-[4/3]">
            <iframe
              title="Mapa"
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
            <div className="flex items-center gap-3">
              <img src={logo} alt="Luxury Apartments 88" className="h-12 w-12 object-contain" />
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl font-semibold">Luxury Apartments</span>
                <span className="text-gradient-gold font-display text-2xl font-semibold">88</span>
              </div>
            </div>
            <p className="mt-4 text-primary-foreground/70 text-sm max-w-xs">Luxury Apartments 88 — udobni, potpuno opremljeni apartmani u Smederevu, Srbija.</p>
          </div>
          <div>
            <h4 className="font-display text-xl mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[oklch(0.86_0.08_82)]" /> Fočanska 88, Smederevo</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[oklch(0.86_0.08_82)]" /> hello@luxuryapartments88.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[oklch(0.86_0.08_82)]" /> +381 (0) 00 000 000</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl mb-4">Istražite</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#apartments" className="hover:text-[oklch(0.86_0.08_82)]">Apartmani</a></li>
              <li><a href="#amenities" className="hover:text-[oklch(0.86_0.08_82)]">Sadržaji</a></li>
              <li><a href="#gallery" className="hover:text-[oklch(0.86_0.08_82)]">Galerija</a></li>
              <li><a href="#reserve" className="hover:text-[oklch(0.86_0.08_82)]">Rezervacija</a></li>
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
