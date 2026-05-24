import { ApiServer } from "@/lib/api-server";
import { getUserServer } from "@/lib/getUserServer";
import { Button, Surface } from "@heroui/react";
import { JobAddModal } from "@/components/dashboard/JobAddModal";
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Layers, 
  Clock,
  Eye
} from "lucide-react";

const RecruiterJobsPage = async () => {
  const user = await getUserServer();
  
  const { data: companies } = await ApiServer(
    `/approved-companies/${user.email}`,
    "GET",
  );

  const { data: jobs } = await ApiServer(
    `/my-jobs/${user.email}`,
    "GET",
  );

  // Helper function to render formatted currency signs
  const getCurrencySymbol = (currency) => {
    switch (currency) {
      case "USD": return "$";
      case "EUR": return "€";
      case "GBP": return "£";
      case "BDT": return "৳";
      default: return currency;
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header Row */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Jobs</h1>
          <p className="text-sm text-default-500">
            Manage your posted openings, check deadlines, and track applicants.
          </p>
        </div>
        <JobAddModal companies={companies} />
      </div>

      {/* Jobs Content List */}
      {!jobs || jobs.length === 0 ? (
        <Surface variant="default" className="flex flex-col items-center justify-center p-12 text-center border border-dashed rounded-xl">
          <Briefcase className="size-12 text-default-400 mb-4" />
          <h3 className="text-lg font-semibold">No jobs posted yet</h3>
          <p className="text-sm text-default-500 max-w-sm mt-1">
            You haven&apos;t listed any job opportunities yet. Click Post a Job to get started.
          </p>
        </Surface>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Surface 
              key={job._id} 
              variant="default" 
              className="p-5 border rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* Title and Top Layout Badges */}
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h2 className="text-xl font-bold text-default-900 tracking-tight">{job.jobTitle}</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {/* Job Type Badge */}
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded-md bg-primary-50 text-primary-700 border border-primary-100 capitalize">
                        <Clock className="size-3" /> {job.jobType}
                      </span>
                      {/* Job Category Badge */}
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-md bg-default-100 text-default-700 capitalize">
                        <Layers className="size-3" /> {job.jobCategory}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description snippet */}
                <p className="text-sm text-default-600 mt-4 line-clamp-2">
                  {job.description}
                </p>

                {/* Job Metadata Meta List */}
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-default-500 border-t pt-4">
                  {/* Location Info */}
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 shrink-0 text-default-400" />
                    <span className="truncate">{job.location}</span>
                  </div>

                  {/* Salary Range */}
                  <div className="flex items-center gap-2">
                    <DollarSign className="size-4 shrink-0 text-default-400" />
                    <span className="font-medium text-default-700 truncate">
                      {getCurrencySymbol(job.currency)}{Number(job.salaryMin).toLocaleString()} - {getCurrencySymbol(job.currency)}{Number(job.salaryMax).toLocaleString()}
                    </span>
                  </div>

                  {/* Deadline Track */}
                  <div className="col-span-2 flex items-center gap-2 mt-1">
                    <Calendar className="size-4 shrink-0 text-default-400" />
                    <span className="text-xs">
                      Application Deadline: <strong className="text-danger-600">{new Date(job.deadline).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="mt-6 pt-3 flex justify-end gap-2 border-t border-default-100">
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="gap-2"
                >
                  <Eye className="size-4" /> View Applicants
                </Button>
              </div>
            </Surface>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecruiterJobsPage;