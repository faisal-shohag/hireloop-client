"use client";

import { useRouter } from "next/navigation";
import { Label, Radio, RadioGroup } from "@heroui/react";

export default function FilterSidebar() {
  const router = useRouter();
  const jobTypes = [
    { id: "full-time", label: "Full-time", count: "1.2k" },
    { id: "contract", label: "Contract", count: "432" },
    { id: "part-time", label: "Part Time", count: "156" },
    { id: "internship", label: "Internship", count: "156" },
  ];
  const handleFilterChange = (value) => {
    const params = new URLSearchParams(window.location.search);

    params.set("jobType", value);

    router.push(`/browse-jobs?${params.toString()}`);
  };

  return (
    <aside className="w-full lg:w-64 shrink-0 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm h-fit transition-colors duration-300">
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight border-b border-zinc-100 dark:border-zinc-800 pb-3 mb-5">
        Filters
      </h2>

      {/* Hero UI RadioGroup Wrapper */}
      <RadioGroup
        onChange={handleFilterChange}
        name="jobType"
        className="w-full"
      >
        <Label className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mb-3 block">
          Job Type
        </Label>

        <div className="flex flex-col gap-3">
          {jobTypes.map((type) => (
            <Radio
              key={type.id}
              value={type.id}
              className="w-full group cursor-pointer select-none"
            >
              {/* Flex Container to split Title control and metric badge count evenly */}
              <div className="flex items-center justify-between w-full w-[170px] lg:w-[180px]">
                <div className="flex items-center gap-3">
                  <Radio.Control>
                    <Radio.Indicator className="border rounded-full" />
                  </Radio.Control>
                  <Radio.Content>
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                      {type.label}
                    </span>
                  </Radio.Content>
                </div>

                {/* Right Aligned Metadata Stat Badge */}
                <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-800/40 px-1.5 py-0.5 rounded transition-colors group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800">
                  {type.count}
                </span>
              </div>
            </Radio>
          ))}
        </div>
      </RadioGroup>
    </aside>
  );
}
