"use client";

import { Building2 } from "lucide-react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { imageUploader } from "@/lib/imageUploader";

export function RegisterCompanyModal() {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const image = await imageUploader(formData.get("companyLogo"))
    console.log(image)

    console.log("Submitting Company Profile:", data);
  };

  return (
    <Modal>
      <Button variant="secondary">Register Company</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl max-h-[90vh] overflow-y-auto">
            <Modal.CloseTrigger />
            
            <Modal.Header>
              <Modal.Icon className="bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                <Building2 className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Company Profile Setup</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-zinc-500 dark:text-zinc-400">
                Provide your workspace details below. Admin approval is required before the profile becomes public across the marketplace.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form id="companyRegistrationForm" onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  
                  {/* Company Name */}
                  <TextField className="w-full" name="companyName" type="text" variant="secondary" required>
                    <Label>Company Name</Label>
                    <Input placeholder="e.g., Google Inc." />
                  </TextField>

                  {/* Industry / Category */}
                  <TextField className="w-full" name="industry" type="text" variant="secondary" required>
                    <Label>Industry / Category</Label>
                    <Input placeholder="e.g., Tech, Fintech, Healthtech" />
                  </TextField>

                  {/* Website URL */}
                  <TextField className="w-full" name="websiteUrl" type="url" variant="secondary" required>
                    <Label>Website URL</Label>
                    <Input placeholder="https://example.com" />
                  </TextField>

                  {/* Two-Column Responsive Layout for Location & Employee Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Location */}
                    <TextField className="w-full" name="location" type="text" variant="secondary" required>
                      <Label>Location</Label>
                      <Input placeholder="e.g., San Francisco, CA" />
                    </TextField>

                    {/* Employee Count Range */}
                    <TextField className="w-full" name="employeeCount" type="text" variant="secondary" required>
                      <Label>Employee Count Range</Label>
                      <Input placeholder="e.g., 11-50, 100-500" />
                    </TextField>
                  </div>

                  {/* Company Logo - Native HTML File Input with Tailwind Styling */}
                  <div className="flex flex-col gap-1.5 w-full">
                    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Company Logo
                    </label>
                    <input 
                      type="file" 
                      name="companyLogo"
                      accept="image/*"
                      required
                      className="w-full text-sm text-zinc-500 dark:text-zinc-400
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-xl file:border-0
                        file:text-xs file:font-semibold
                        file:bg-zinc-100 file:text-zinc-700
                        dark:file:bg-zinc-800 dark:file:text-zinc-300
                        hover:file:bg-zinc-200 dark:hover:file:bg-zinc-700/80
                        file:transition-colors file:cursor-pointer cursor-pointer
                        border border-zinc-200 dark:border-zinc-800 rounded-xl p-1 bg-white dark:bg-transparent"
                    />
                  </div>

                  {/* Short Description */}
                  <TextField className="w-full" name="description" variant="secondary" required>
                    <Label>Short Description</Label>
                    <Input placeholder="Brief overview of your company mission and culture..." />
                  </TextField>

                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" form="companyRegistrationForm">
                Submit 
              </Button>
            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}