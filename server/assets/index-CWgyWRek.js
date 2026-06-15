import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { Star, MapPin, Check, Users, BedDouble, Wifi, Car, Coffee, Tv, Wind, Clock, Mail, Phone } from "lucide-react";
import { Toaster as Toaster$1, toast } from "sonner";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as LabelPrimitive from "@radix-ui/react-label";
import { h as hero } from "./router-BiYSDjN3.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const bedroom = "/smederevoapartmani/assets/bedroom-C4wd1M27.jpg";
const bedroom2 = "/smederevoapartmani/assets/bedroom2-BjYB9AJ2.jpg";
const familyRoom = "/smederevoapartmani/assets/family-room-C2M5xowY.jpg";
const terrace = "/smederevoapartmani/assets/terrace-ja5CMOTN.jpg";
const pool = "/smederevoapartmani/assets/pool-CvymR1O2.jpg";
const dining = "/smederevoapartmani/assets/dining-CTYJcpsn.jpg";
const bar = "/smederevoapartmani/assets/bar-wVGXi1Sv.jpg";
const logo = "/smederevoapartmani/assets/logo-D6wVgE_k.png";
const apartments = [{
  name: "Deluxe Studio",
  image: bedroom2,
  guests: 2,
  beds: 1,
  price: 45,
  features: ["Udoban bračni krevet", "Smart TV", "Klima uređaj", "Privatno kupatilo"]
}, {
  name: "Premium Jednosoban",
  image: bedroom,
  guests: 3,
  beds: 2,
  price: 65,
  features: ["King krevet", "Sopstvena terasa", "Klima i grejanje", "Besplatan parking"]
}, {
  name: "Porodični Apartman",
  image: familyRoom,
  guests: 5,
  beds: 3,
  price: 95,
  features: ["Prostrana spavaća soba", "Krevetac na zahtev", "Dodatni ležajevi", "Pogled na prirodu"]
}];
const amenities = [{
  icon: Wifi,
  label: "Brzi Wi-Fi"
}, {
  icon: Car,
  label: "Besplatan parking"
}, {
  icon: Coffee,
  label: "Bar i recepcija"
}, {
  icon: Tv,
  label: "Smart TV + Netflix"
}, {
  icon: Wind,
  label: "Klima i grejanje"
}, {
  icon: Clock,
  label: "Samostalni check-in 24/7"
}];
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
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.checkin || !form.checkout) {
      toast.error("Molimo unesite ime, email i datume.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Zahtev za rezervaciju je poslat! Potvrdićemo u roku od 1 sata.");
      setForm({
        ...form,
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 900);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Toaster, { position: "top-center", richColors: true }),
    /* @__PURE__ */ jsx("header", { className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between px-6 py-3", children: [
      /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("img", { src: logo, alt: "Luxury Apartments 88 logo", className: "h-10 w-10 object-contain" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl font-semibold tracking-tight", children: "Luxury Apartments" }),
          /* @__PURE__ */ jsx("span", { className: "text-gradient-gold font-display text-xl font-semibold", children: "88" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex gap-8 text-sm font-medium text-muted-foreground", children: [
        /* @__PURE__ */ jsx("a", { href: "#apartments", className: "hover:text-foreground transition", children: "Apartmani" }),
        /* @__PURE__ */ jsx("a", { href: "#amenities", className: "hover:text-foreground transition", children: "Sadržaji" }),
        /* @__PURE__ */ jsx("a", { href: "#gallery", className: "hover:text-foreground transition", children: "Galerija" }),
        /* @__PURE__ */ jsx("a", { href: "#location", className: "hover:text-foreground transition", children: "Lokacija" }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-foreground transition", children: "Kontakt" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, className: "btn-gold rounded-full px-5", children: /* @__PURE__ */ jsx("a", { href: "#reserve", children: "Rezerviši" }) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-screen flex items-end overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: hero, alt: "Luxury Apartments 88 — eksterijer u Smederevu", width: 1920, height: 1280, className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto px-6 pb-24 pt-40 w-full text-white", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("img", { src: logo, alt: "", className: "h-12 w-12 object-contain drop-shadow-lg" }),
          /* @__PURE__ */ jsx("p", { className: "hairline text-sm uppercase tracking-[0.25em] text-[oklch(0.86_0.08_82)]", children: "Smederevo · Srbija" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] max-w-4xl", children: [
          "Vaš dom u ",
          /* @__PURE__ */ jsx("em", { className: "text-gradient-gold not-italic font-medium", children: "Smederevu" }),
          ", stvoren za udobnost."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg md:text-xl text-white/80 max-w-2xl font-light", children: "Potpuno opremljeni, dizajnirani apartmani za turiste, porodice, parove i poslovne goste. Rezervišite direktno i uštedite više." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "btn-gold rounded-full text-base px-8 h-12", children: /* @__PURE__ */ jsx("a", { href: "#reserve", children: "Proveri dostupnost" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "rounded-full text-base px-8 h-12 bg-white/5 border-white/30 text-white hover:bg-white/15 hover:text-white", children: /* @__PURE__ */ jsx("a", { href: "#apartments", children: "Pogledaj apartmane" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-wrap gap-8 text-sm text-white/70", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-[oklch(0.86_0.08_82)] text-[oklch(0.86_0.08_82)]" }),
            " 4.9 · 92 Google recenzije"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }),
            " Fočanska 88, Smederevo 11300"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Check, { className: "w-4 h-4" }),
            " Trenutna potvrda"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "apartments", className: "py-28 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "hairline text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4", children: "Naši prostori" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-6xl font-light", children: [
          "Izaberite svoj ",
          /* @__PURE__ */ jsx("em", { className: "text-gradient-gold not-italic font-medium", children: "apartman" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl mx-auto", children: "Tri pažljivo dizajnirana apartmana. Svaki detalj promišljen, svaka udobnost uključena." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: apartments.map((a) => /* @__PURE__ */ jsxs("article", { className: "group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-luxe)] transition-all duration-500 hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
          /* @__PURE__ */ jsx("img", { src: a.image, alt: a.name, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 bg-background/95 backdrop-blur px-3 py-1.5 rounded-full text-sm font-semibold", children: [
            "od €",
            a.price,
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-xs font-normal", children: " /noć" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-7", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-medium", children: a.name }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex gap-5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" }),
              " ",
              a.guests,
              " gostiju"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(BedDouble, { className: "w-4 h-4" }),
              " ",
              a.beds,
              " kreveta"
            ] })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "mt-5 space-y-2", children: a.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-[var(--gold)]" }),
            " ",
            f
          ] }, f)) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, className: "mt-6 w-full btn-gold rounded-full", children: /* @__PURE__ */ jsx("a", { href: "#reserve", onClick: () => setForm({
            ...form,
            apartment: a.name
          }), children: "Rezerviši ovaj" }) })
        ] })
      ] }, a.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "amenities", className: "py-28 px-6 bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "hairline text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4", children: "Uključeno" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl font-light leading-tight", children: [
          "Sve što vam treba, ",
          /* @__PURE__ */ jsx("em", { className: "text-gradient-gold not-italic font-medium", children: "ništa suvišno." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground text-lg", children: "Od samostalnog check-ina u bilo koje doba do bazena, terase i bara — svaki boravak je osmišljen da bude bezbrižan." }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 grid grid-cols-2 gap-5", children: amenities.map(({
          icon: Icon,
          label
        }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-4 bg-card rounded-xl", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg flex items-center justify-center", style: {
            background: "var(--gradient-gold)"
          }, children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-[oklch(0.18_0.015_50)]" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: label })
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx("img", { src: pool, alt: "Bazen i ležaljke", loading: "lazy", className: "rounded-2xl aspect-[3/4] object-cover shadow-[var(--shadow-soft)]" }),
        /* @__PURE__ */ jsx("img", { src: terrace, alt: "Terasa sa pogledom", loading: "lazy", className: "rounded-2xl aspect-[3/4] object-cover shadow-[var(--shadow-soft)] mt-12" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "gallery", className: "py-28 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-end justify-between mb-12 flex-wrap gap-4", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "hairline text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4", children: "Galerija" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl font-light", children: [
          "Pogled ",
          /* @__PURE__ */ jsx("em", { className: "text-gradient-gold not-italic font-medium", children: "iznutra" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-6 grid-rows-2 gap-4 h-[600px]", children: [
        /* @__PURE__ */ jsx("img", { src: gallery[0], alt: "Eksterijer", loading: "lazy", className: "col-span-3 row-span-2 w-full h-full object-cover rounded-2xl" }),
        /* @__PURE__ */ jsx("img", { src: gallery[1], alt: "Spavaća soba", loading: "lazy", className: "col-span-2 w-full h-full object-cover rounded-2xl" }),
        /* @__PURE__ */ jsx("img", { src: gallery[2], alt: "Terasa", loading: "lazy", className: "col-span-1 w-full h-full object-cover rounded-2xl" }),
        /* @__PURE__ */ jsx("img", { src: gallery[3], alt: "Bazen", loading: "lazy", className: "col-span-1 w-full h-full object-cover rounded-2xl" }),
        /* @__PURE__ */ jsx("img", { src: gallery[4], alt: "Bar", loading: "lazy", className: "col-span-2 w-full h-full object-cover rounded-2xl" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "reserve", className: "py-28 px-6 bg-primary text-primary-foreground relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", style: {
        background: "radial-gradient(circle at 20% 30%, var(--gold) 0%, transparent 50%)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("p", { className: "hairline text-sm uppercase tracking-[0.25em] text-[oklch(0.86_0.08_82)] mb-4", children: "Rezervacija" }),
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-6xl font-light", children: [
            "Rezervišite svoj ",
            /* @__PURE__ */ jsx("em", { className: "text-gradient-gold not-italic font-medium", children: "boravak" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-primary-foreground/70 max-w-xl mx-auto", children: "Pošaljite nam datume i potvrdićemo dostupnost u roku od sat vremena. Nije potrebna uplata za upit." })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "bg-background text-foreground p-8 md:p-10 rounded-3xl shadow-[var(--shadow-luxe)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
            /* @__PURE__ */ jsx(Field, { label: "Ime i prezime *", children: /* @__PURE__ */ jsx(Input, { value: form.name, onChange: (e) => setForm({
              ...form,
              name: e.target.value
            }), placeholder: "Petar Petrović" }) }),
            /* @__PURE__ */ jsx(Field, { label: "Email *", children: /* @__PURE__ */ jsx(Input, { type: "email", value: form.email, onChange: (e) => setForm({
              ...form,
              email: e.target.value
            }), placeholder: "vi@email.com" }) }),
            /* @__PURE__ */ jsx(Field, { label: "Telefon", children: /* @__PURE__ */ jsx(Input, { value: form.phone, onChange: (e) => setForm({
              ...form,
              phone: e.target.value
            }), placeholder: "+381 ..." }) }),
            /* @__PURE__ */ jsx(Field, { label: "Broj gostiju", children: /* @__PURE__ */ jsx("select", { value: form.guests, onChange: (e) => setForm({
              ...form,
              guests: e.target.value
            }), className: "w-full h-10 px-3 rounded-md border border-input bg-background text-sm", children: [1, 2, 3, 4, 5, 6].map((n) => /* @__PURE__ */ jsx("option", { children: n }, n)) }) }),
            /* @__PURE__ */ jsx(Field, { label: "Dolazak *", children: /* @__PURE__ */ jsx(Input, { type: "date", value: form.checkin, onChange: (e) => setForm({
              ...form,
              checkin: e.target.value
            }) }) }),
            /* @__PURE__ */ jsx(Field, { label: "Odlazak *", children: /* @__PURE__ */ jsx(Input, { type: "date", value: form.checkout, onChange: (e) => setForm({
              ...form,
              checkout: e.target.value
            }) }) }),
            /* @__PURE__ */ jsx(Field, { label: "Apartman", className: "md:col-span-2", children: /* @__PURE__ */ jsx("select", { value: form.apartment, onChange: (e) => setForm({
              ...form,
              apartment: e.target.value
            }), className: "w-full h-10 px-3 rounded-md border border-input bg-background text-sm", children: apartments.map((a) => /* @__PURE__ */ jsx("option", { children: a.name }, a.name)) }) }),
            /* @__PURE__ */ jsx(Field, { label: "Poruka", className: "md:col-span-2", children: /* @__PURE__ */ jsx(Textarea, { rows: 4, value: form.message, onChange: (e) => setForm({
              ...form,
              message: e.target.value
            }), placeholder: "Nešto što treba da znamo? Vreme dolaska, posebni zahtevi..." }) })
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: submitting, size: "lg", className: "mt-6 w-full btn-gold rounded-full h-12 text-base", children: submitting ? "Slanje..." : "Pošalji zahtev za rezervaciju" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-muted-foreground text-center", children: "Besplatno otkazivanje do 48h pre dolaska · Odjava u 11:00" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "location", className: "py-28 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "hairline text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4", children: "Pronađite nas" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl font-light", children: [
          "U srcu ",
          /* @__PURE__ */ jsx("em", { className: "text-gradient-gold not-italic font-medium", children: "Smedereva" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground text-lg", children: "Mirna stambena ulica, na nekoliko minuta od istorijske tvrđave, šetališta uz Dunav, restorana i prodavnica." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-4", children: [
          /* @__PURE__ */ jsx(InfoLine, { icon: MapPin, title: "Adresa", value: "Fočanska 88, Smederevo 11300, Srbija" }),
          /* @__PURE__ */ jsx(InfoLine, { icon: Clock, title: "Odjava", value: "11:00" }),
          /* @__PURE__ */ jsx(InfoLine, { icon: Star, title: "Ocena", value: "4.9 / 5 — 92 recenzije" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "rounded-3xl overflow-hidden shadow-[var(--shadow-luxe)] aspect-[4/3]", children: /* @__PURE__ */ jsx("iframe", { title: "Mapa", src: "https://www.google.com/maps?q=Fo%C4%8Danska+88,+Smederevo+11300&output=embed", className: "w-full h-full border-0", loading: "lazy" }) })
    ] }) }),
    /* @__PURE__ */ jsxs("footer", { id: "contact", className: "bg-primary text-primary-foreground py-16 px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid md:grid-cols-3 gap-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("img", { src: logo, alt: "Luxury Apartments 88", className: "h-12 w-12 object-contain" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "font-display text-2xl font-semibold", children: "Luxury Apartments" }),
              /* @__PURE__ */ jsx("span", { className: "text-gradient-gold font-display text-2xl font-semibold", children: "88" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-primary-foreground/70 text-sm max-w-xs", children: "Luxury Apartments 88 — udobni, potpuno opremljeni apartmani u Smederevu, Srbija." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display text-xl mb-4", children: "Kontakt" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-primary-foreground/80", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-[oklch(0.86_0.08_82)]" }),
              " Fočanska 88, Smederevo"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-[oklch(0.86_0.08_82)]" }),
              " hello@luxuryapartments88.com"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Phone, { className: "w-4 h-4 text-[oklch(0.86_0.08_82)]" }),
              " +381 (0) 00 000 000"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display text-xl mb-4", children: "Istražite" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-primary-foreground/80", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#apartments", className: "hover:text-[oklch(0.86_0.08_82)]", children: "Apartmani" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#amenities", className: "hover:text-[oklch(0.86_0.08_82)]", children: "Sadržaji" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#gallery", className: "hover:text-[oklch(0.86_0.08_82)]", children: "Galerija" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#reserve", className: "hover:text-[oklch(0.86_0.08_82)]", children: "Rezervacija" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs text-primary-foreground/50", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Luxury Apartments 88 · luxuryapartments88.com"
      ] })
    ] })
  ] });
}
function Field({
  label,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsx(Label, { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-1.5", children })
  ] });
}
function InfoLine({
  icon: Icon,
  title,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 bg-secondary/50 rounded-xl", children: [
    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0", style: {
      background: "var(--gradient-gold)"
    }, children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-[oklch(0.18_0.015_50)]" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: title }),
      /* @__PURE__ */ jsx("div", { className: "font-medium", children: value })
    ] })
  ] });
}
export {
  Index as component
};
