"use client";
import { ApiClient } from "@/lib/api-client";
import { authClient } from "@/lib/auth-client";
import { getUserClient } from "@/lib/getUserClient";
import { imageUploader } from "@/lib/imageUploader";
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

export function CompanyAddModal({user}) {

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const companyData = Object.fromEntries(formData);

    if (!companyData.logo) {
      toast.error("Please upload a company logo!");
      return;
    }
    const image = await imageUploader(formData.get("logo"));

    await ApiClient({path: "/company", method: "POST", body: {
      ...companyData,
      status: "pending", // "approved", "pending", "rejected"
      logo: image?.url,
      userEmail: user.email,
    }});

    toast.success("Company added and under review!");
  };

  return (
    <Modal>
      <Button variant="secondary">
        <Plus /> Register a company
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Add Company</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  {/* Company Name */}
                  <TextField
                    className="w-full"
                    name="companyName"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Company Name</Label>
                    <Input placeholder="Enter company name" />
                  </TextField>

                  {/* Industry / Category */}
                  <Select
                    className="w-full"
                    name="category"
                    placeholder="Select industry"
                  >
                    <Label>Industry / Category</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="technology" textValue="Technology">
                          Technology
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="healthcare" textValue="Healthcare">
                          Healthcare
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="finance" textValue="Finance">
                          Finance
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="education" textValue="Education">
                          Education
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="other" textValue="Other">
                          Other
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Website URL */}
                  <TextField
                    className="w-full"
                    name="website"
                    type="url"
                    variant="secondary"
                  >
                    <Label>Website URL</Label>
                    <Input placeholder="https://example.com" />
                  </TextField>

                  {/* Location */}
                  <TextField
                    className="w-full"
                    name="location"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Location</Label>
                    <Input placeholder="e.g. San Francisco, CA or Remote" />
                  </TextField>

                  {/* Employee Count Range */}
                  <Select
                    className="w-full"
                    name="employeeCount"
                    placeholder="Select range"
                  >
                    <Label>Employee Count Range</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="1-10" textValue="1-10 employees">
                          1-10 employees
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="11-50" textValue="11-50 employees">
                          11-50 employees
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="51-200" textValue="51-200 employees">
                          51-200 employees
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          id="201-500"
                          textValue="201-500 employees"
                        >
                          201-500 employees
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="501+" textValue="501+ employees">
                          501+ employees
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Company Logo Upload */}
                  {/* <TextField
                    className="w-full"
                    name="logo"
                    type="file"
                    variant="secondary"
                  >
                    <Label>Company Logo</Label>
                    <Input type="file" />
                  </TextField> */}

                  <input type="file" name="logo" />

                  {/* Short Description */}
                  <TextArea
                    className="w-full"
                    name="description"
                    placeholder="Briefly describe your company..."
                  ></TextArea>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Register
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
