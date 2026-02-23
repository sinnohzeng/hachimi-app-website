import type { LegalPage } from "@/lib/i18n/types";
import type { ReactNode } from "react";

export function LegalPageContent({ data }: { data: LegalPage }): ReactNode {
  return (
    <section className="relative w-full bg-background text-foreground">
      <div className="flex items-center justify-center px-6 sm:px-8">
        <div className="w-full max-w-270">
          <div className="px-8 sm:px-12 py-24 lg:py-32">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
                {data.title}
              </h1>
              <p className="text-sm text-foreground/50 mb-12">
                {data.effectiveDate}
              </p>

              <div className="space-y-10">
                {/* Introduction */}
                <div className="text-sm leading-relaxed text-foreground/70">
                  {data.intro}
                </div>

                {/* Steps */}
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-3">
                    {data.steps.heading}
                  </h2>
                  <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed text-foreground/70">
                    {data.steps.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </div>

                {/* Data table */}
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-3">
                    {data.dataTable.heading}
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-foreground/10">
                          {data.dataTable.columns.map((col) => (
                            <th
                              key={col}
                              className="text-left py-3 pr-4 font-medium text-foreground/80"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {data.dataTable.rows.map((row) => (
                          <tr
                            key={row.cells[0]}
                            className="border-b border-foreground/5"
                          >
                            {row.cells.map((cell, i) => (
                              <td
                                key={`${row.cells[0]}-${i}`}
                                className={`py-3 pr-4 ${
                                  i === 0
                                    ? "text-foreground/80 font-medium"
                                    : "text-foreground/60"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Additional sections */}
                {data.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-lg font-semibold text-foreground mb-3">
                      {section.heading}
                    </h2>
                    <div className="text-sm leading-relaxed text-foreground/70 whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
