import CompanySearchBar from "@/components/jobs/CompanySearchBar";
import { ApiServer } from "@/lib/api-server";
import { Building2, CheckCircle2, MapPin, Briefcase, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BrowseCompanyPage = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const searchQuery = resolvedParams?.companyName || "";


  const { data: companies } = await ApiServer(`/approved-companies?companyName=${searchQuery}`, "GET");

  return (
    <div className="min-h-screen max-w-7xl mx-auto dark:bg-zinc-950 p-4 sm:p-6 md:p-8 space-y-8 transition-colors duration-300">
      
      {/* SECTION 1: HEADER TYPOGRAPHY */}
      <div className="space-y-2 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          Browse Companies
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Discover the world&apos;s leading technology and creative organizations. Filter by industry, size, and values to find your next professional home.
        </p>
      </div>

      {/* SECTION 2: DECOUPLED CLIENT FILTERS BAR */}
      <CompanySearchBar />

      {/* SECTION 3: RESPONSIVE CARDS GRID SYSTEM */}
      {!companies || companies.length === 0 ? (
        <div className="w-full text-center py-16 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white/50 dark:bg-zinc-900/10">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            No registered organizations matched your search parameters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {companies.map((company) => {
            const isApproved = company.status?.toLowerCase() === "approved";

            return (
              <div 
                key={company._id} 
                className="group flex flex-col justify-between bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md dark:hover:shadow-black/30 dark:hover:border-zinc-700/60 transition-all duration-200 h-full"
              >
                <div>
                  {/* Top line: Logo presentation context frame paired with verified flags */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="h-12 w-12 sm:h-14 w-14 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/40 p-2 flex items-center justify-center shrink-0 overflow-hidden">
                      {company.logo ? (
                        <img 
                          src={company.logo} 
                          alt={`${company.companyName} Branding`} 
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <Building2 className="size-5 text-zinc-400" />
                      )}
                    </div>

                    {isApproved && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md uppercase select-none">
                        <CheckCircle2 className="size-3" /> Verified
                      </span>
                    )}
                  </div>

                  {/* Mid block: Core titles & short descriptions */}
                  <div className="mt-4 space-y-2">
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {company.companyName}
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed h-10">
                      {company.description}
                    </p>
                  </div>

                  {/* Meta contextual badge pills */}
                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300 rounded-lg capitalize border border-zinc-200/20 dark:border-zinc-700/20">
                      <Briefcase className="size-3 text-zinc-400" />
                      {company.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300 rounded-lg truncate max-w-[150px] border border-zinc-200/20 dark:border-zinc-700/20">
                      <MapPin className="size-3 text-zinc-400" />
                      {company.location?.split(',')[0]}
                    </span>
                  </div>
                </div>

                {/* Bottom line layout row metrics */}
                <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/60 pt-4 mt-6 text-xs sm:text-sm font-semibold">
                  <span className="text-zinc-700 dark:text-zinc-400">
                    {company.employeeCount || "50-100"} Active Jobs
                  </span>
                  
                  {/* Action Link Routing Element */}
                  <Link
                    href={`#`}
                    className="flex items-center gap-1 text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                  >
                    <span>View Openings</span>
                    <ArrowUpRight className="size-3.5 text-zinc-400 group-hover/link:text-blue-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default BrowseCompanyPage;