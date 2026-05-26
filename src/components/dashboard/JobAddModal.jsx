"use client";

import { ApiClient } from "@/lib/api-client";
import { getUserClient } from "@/lib/getUserClient";
import { Plus } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  TextArea,
  Select,
  ListBox,
} from "@heroui/react";
import toast from "react-hot-toast";

export function JobAddModal({ companies }) {
  const user = getUserClient();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jobData = Object.fromEntries(formData);

    // Basic Validation Rules
    if (!jobData.jobTitle || !jobData.jobCategory || !jobData.jobType) {
      toast.error("Please fill in all required fields!");
      return;
    }

    try {
      await ApiClient("/jobs", "POST", {
        ...jobData,
        userEmail: user?.email,
        createdAt: new Date().toISOString(),
      });

      toast.success("Job position posted successfully!");
    } catch (error) {
      toast.error("Failed to post job. Please try again.");
      console.error(error);
    }
  };

  return (
    <Modal>
      <Button variant="secondary">
        <Plus /> Post a Job
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md max-h-[90vh] overflow-y-auto">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Post a New Job</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  {/* Job Title */}
                  <TextField
                    className="w-full"
                    name="jobTitle"
                    type="text"
                    variant="secondary"
                    required
                  >
                    <Label>Job Title</Label>
                    <Input placeholder="e.g. Senior Frontend Engineer" />
                  </TextField>

                  <Select
                    className="w-full"
                    name="company"
                    placeholder="Select company"
                    required
                  >
                    <Label>Select your company</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        {companies.map((company) => (
                          <ListBox.Item
                            key={company._id}
                            id={company._id}
                            textValue={company._id}
                          >
                            {company.companyName}
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        ))}
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Job Category */}
                  <Select
                    className="w-full"
                    name="jobCategory"
                    placeholder="Select category"
                    required
                  >
                    <Label>Job Category</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="engineering" textValue="Engineering">
                          Engineering
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="design" textValue="Design">
                          Design
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="marketing" textValue="Marketing">
                          Marketing
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="sales" textValue="Sales">
                          Sales
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="finance" textValue="Finance">
                          Finance
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Job Type */}
                  <Select
                    className="w-full"
                    name="jobType"
                    placeholder="Select job type"
                    required
                  >
                    <Label>Job Type</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="full-time" textValue="Full-time">
                          Full-time
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="part-time" textValue="Part-time">
                          Part-time
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="remote" textValue="Remote">
                          Remote
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="contract" textValue="Contract">
                          Contract
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="internship" textValue="Internship">
                          Internship
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Salary Block (Inline Flex Row) */}
                  <div className="flex gap-2 w-full">
                    <TextField
                      className="w-1/2"
                      name="salaryMin"
                      type="number"
                      variant="secondary"
                    >
                      <Label>Min Salary</Label>
                      <Input placeholder="e.g. 50000" />
                    </TextField>
                    <TextField
                      className="w-1/2"
                      name="salaryMax"
                      type="number"
                      variant="secondary"
                    >
                      <Label>Max Salary</Label>
                      <Input placeholder="e.g. 80000" />
                    </TextField>
                  </div>

                  {/* Currency Selection */}
                  <Select
                    className="w-full"
                    name="currency"
                    placeholder="Select currency"
                    defaultValue="USD"
                  >
                    <Label>Currency</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="USD" textValue="USD ($)">
                          USD ($)
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="EUR" textValue="EUR (€)">
                          EUR (€)
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="GBP" textValue="GBP (£)">
                          GBP (£)
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="BDT" textValue="BDT (৳)">
                          BDT (৳)
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Location */}
                  <TextField
                    className="w-full"
                    name="location"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Location</Label>
                    <Input placeholder="e.g. Berlin, Germany or Remote" />
                  </TextField>

                  {/* Application Deadline */}
                  <TextField
                    className="w-full"
                    name="deadline"
                    type="date"
                    variant="secondary"
                  >
                    <Label>Application Deadline</Label>
                    <Input />
                  </TextField>

                  {/* Job Description */}
                  <div className="flex flex-col gap-1 w-full">
                    <Label className="text-sm font-medium">
                      Job Description
                    </Label>
                    <TextArea
                      className="w-full"
                      name="description"
                      placeholder="Outline roles, responsibilities, skills and requirement expectations..."
                    ></TextArea>
                  </div>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Post
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
