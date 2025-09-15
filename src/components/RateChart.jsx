// src/components/RateChargesPremiumPest.jsx
import React from "react";
import { motion } from "framer-motion";
import { Info, Bug } from "lucide-react";
import { Link } from "react-router-dom";

const COLORS = {
  black: "#1C1C1C",
  teal: "#2ECC71",
  royal: "#004C8C",
  gold: "#FFD700",
  gray: "#D9D9D9",
  white: "#FFFFFF",
};

const headers = [
  { key: "type", label: "Service Type" },
  { key: "price", label: "Price" },
  { key: "warranty", label: "Warranty" },
  { key: "services", label: "Services" },
];

const rows = [
  { type: "1 BHK House", price: "Rs. 3,949", warranty: "1 Year", services: "2 Visits" },
  { type: "2 BHK House", price: "Rs. 4,949", warranty: "1 Year", services: "2 Visits" },
  { type: "3 BHK House", price: "Rs. 5,949", warranty: "1 Year", services: "2 Visits" },
  { type: "4 BHK House", price: "Rs. 6,949", warranty: "1 Year", services: "2 Visits" },
];

export default function RateChargesPremiumPest() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: COLORS.white }}>
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-[120px] opacity-20" style={{ background: COLORS.teal }} />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full blur-[120px] opacity-25" style={{ background: COLORS.gold }} />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            <span className="mr-2">Pest Control Rates –</span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(90deg, ${COLORS.teal}, ${COLORS.royal})` }}>
              Quick Provide
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg font-medium" style={{ color: COLORS.black }}>
            Premium pest control services with transparent pricing.
          </p>
        </motion.div>

        {/* Table */}
        <div className="relative overflow-x-auto rounded-2xl shadow-2xl ring-1" style={{ background: COLORS.white, borderColor: COLORS.gray }}>
          <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${COLORS.teal}, ${COLORS.royal})` }} />

          <table className="min-w-[800px] w-full">
            <thead>
              <tr>
                {headers.map((h, idx) => (
                  <th key={h.key} className="px-5 py-4 text-left text-sm md:text-base font-semibold uppercase tracking-wide" 
                      style={{
                        color: COLORS.white,
                        background: idx === 0 ? `linear-gradient(90deg, ${COLORS.black}, ${COLORS.teal})` : COLORS.royal,
                      }}>
                    {h.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr key={row.type} className="transition-colors hover:bg-gray-50">
                  {headers.map((h, cIdx) => {
                    const value = row[h.key] ?? "–";
                    return (
                      <td key={h.key} className={`px-5 py-4 text-sm md:text-base ${cIdx === 0 ? "font-semibold" : ""}`} style={{ borderTop: `1px solid ${COLORS.gray}`, color: COLORS.black }}>
                        {cIdx === 0 ? (
                          <div className="flex items-center gap-2">
                            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: rIdx % 2 === 0 ? COLORS.teal : COLORS.gold }} />
                            {value}
                          </div>
                        ) : (
                          <span className="whitespace-nowrap">{value}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div className="mt-6 flex items-center gap-3 text-sm max-w-3xl mx-auto text-center justify-center">
          <Info className="h-4 w-4" color={COLORS.teal} />
          <p style={{ color: COLORS.black }}>
            <span className="font-semibold">Note:</span> Prices are approximate and may vary based on home size, pest type, and additional services.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/contact" className="rounded-full px-6 py-3 font-semibold shadow-xl transition-transform hover:scale-105" style={{ background: `linear-gradient(90deg, ${COLORS.teal}, ${COLORS.royal})`, color: COLORS.black }}>
            Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
