// src/components/RateChargesPremiumPest.jsx
import React from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";

const COLORS = {
  primary: "#1F2C73", // Deep Blue
  accent: "#E30613",  // Red
  heading: "#000000", // Black
  body: "#FFFFFF",    // White
  card: "#2E3A87",    // Grayish Blue
  border: "#D9D9D9",  // Neutral Gray
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
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-[120px] opacity-20" style={{ background: COLORS.primary }} />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full blur-[120px] opacity-25" style={{ background: COLORS.accent }} />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl text-black">
            <span className="mr-2">Pest Control Rates –</span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent})` }}
            >
              Quick Provide
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg font-medium" style={{ color: COLORS.heading }}>
            Premium pest control services with transparent pricing.
          </p>
        </motion.div>

        {/* Table */}
        <div
          className="relative overflow-x-auto rounded-2xl shadow-2xl ring-1"
          style={{ background: COLORS.body, borderColor: COLORS.border }}
        >
          <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent})` }} />

          <table className="min-w-[800px] w-full">
            <thead>
              <tr>
                {headers.map((h) => (
                  <th
                    key={h.key}
                    className="px-5 py-4 text-left text-sm md:text-base font-semibold uppercase tracking-wide"
                    style={{
                      color: COLORS.body,
                      background: COLORS.primary,
                    }}
                  >
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
                      <td
                        key={h.key}
                        className={`px-5 py-4 text-sm md:text-base ${cIdx === 0 ? "font-semibold" : ""}`}
                        style={{ borderTop: `1px solid ${COLORS.border}`, color: COLORS.heading }}
                      >
                        {cIdx === 0 ? (
                          <div className="flex items-center gap-2">
                            <span
                              className="inline-block h-2.5 w-2.5 rounded-full"
                              style={{ background: rIdx % 2 === 0 ? COLORS.primary : COLORS.accent }}
                            />
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
          <Info className="h-4 w-4" color={COLORS.accent} />
          <p style={{ color: COLORS.heading }}>
            <span className="font-semibold">Note:</span> Prices are approximate and may vary based on home size, pest type, and additional services.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/contact"
            className="rounded-full px-6 py-3 font-semibold shadow-xl transition-transform hover:scale-105"
            style={{
              background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent})`,
              color: COLORS.body,
            }}
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
