import { CompanyAddModal } from "@/components/dashboard/CompanyAddForm";
import { ApiServer } from "@/lib/api-server";
import { getUserServer } from "@/lib/getUserServer";
import { Button, Surface } from "@heroui/react";
import Image from "next/image";
import { Globe, MapPin, Users, Briefcase } from "lucide-react";

const RecruiterCompanyPage = async () => {
  const user = await getUserServer();
  const { data: companies } = await ApiServer(`/company/${user.email}`, "GET");

  return (
    <div className="p-6 mx-auto space-y-6">

      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Companies</h1>
          <p className="text-sm text-default-500">Manage your registered companies and their verification states.</p>
        </div>
        <CompanyAddModal user={user}/>
      </div>

      {!companies || companies.length === 0 ? (
        <Surface variant="default" className="flex flex-col items-center justify-center p-12 text-center border border-dashed rounded-xl">
          <Briefcase className="size-12 text-default-400 mb-4" />
          <h3 className="text-lg font-semibold">No companies found</h3>
          <p className="text-sm text-default-500 max-w-sm mt-1">
            You haven&apos;t listed any companies yet. Click the button above to add your first company.
          </p>
        </Surface>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company) => (
            <Surface 
              key={company._id} 
              variant="default" 
              className="p-5 border rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
      
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative size-16 rounded-lg border overflow-hidden bg-white flex items-center justify-center p-1 shrink-0">
                      <Image
                        src={company.logo}
                        alt={`${company.companyName}`}
                        referrerPolicy="no-referrer"
                        height={100}
                        width={100}
                        loading="eager"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-default-900">{company.companyName}</h2>
                      <span className="inline-block mt-0.5 px-2 py-0.5 text-xs font-medium rounded-full bg-default-100 text-default-700 capitalize">
                        {company.category}
                      </span>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border uppercase tracking-wider
                    ${company.status === "pending" ? "bg-warning-50 text-warning-700 border-warning-200" : ""}
                    ${company.status === "approved" ? "bg-success-50 text-success-700 border-success-200" : ""}
                    ${company.status === "rejected" ? "bg-danger-50 text-danger-700 border-danger-200" : ""}
                  `}>
                    {company.status}
                  </span>
                </div>

  
                <p className="text-sm text-default-600 mt-4 line-clamp-3">
                  {company.description}
                </p>

 
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-default-500 border-t pt-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 shrink-0 text-default-400" />
                    <span className="truncate">{company.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="size-4 shrink-0 text-default-400" />
                    <span>{company.employeeCount} range</span>
                  </div>
                </div>
              </div>


              <div className="mt-6 pt-3 flex justify-end">
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="gap-2"
                >
                  <Globe className="size-4" /> Visit Website
                </Button>
              </div>
            </Surface>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecruiterCompanyPage;