### Company form
```jsx
"use client";
import {Envelope, Plus} from "@gravity-ui/icons";

import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";



export function CompanyAddModal() {

  return (

    <Modal>

      <Button variant="secondary"><Plus/> Add Company</Button>

      <Modal.Backdrop>

        <Modal.Container placement="auto">

          <Modal.Dialog className="sm:max-w-md">

            <Modal.CloseTrigger />

            <Modal.Header>

              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">

                <Envelope className="size-5" />

              </Modal.Icon>

              <Modal.Heading>Add Company</Modal.Heading>

           

            </Modal.Header>

            <Modal.Body className="p-6">

              <Surface variant="default">

                <form className="flex flex-col gap-4">

                  <TextField className="w-full" name="name" type="text" variant="secondary">

                    <Label>Name</Label>

                    <Input placeholder="Enter your name" />

                  </TextField>

                  <TextField className="w-full" name="email" type="email" variant="secondary">

                    <Label>Email</Label>

                    <Input placeholder="Enter your email" />

                  </TextField>

                  <TextField className="w-full" name="phone" type="tel" variant="secondary">

                    <Label>Phone</Label>

                    <Input placeholder="Enter your phone number" />

                  </TextField>

                  <TextField className="w-full" name="company" variant="secondary">

                    <Label>Company</Label>

                    <Input placeholder="Enter your company name" />

                  </TextField>

                  <TextField className="w-full" name="message" variant="secondary">

                    <Label>Message</Label>

                    <Input placeholder="Enter your message" />

                  </TextField>

                </form>

              </Surface>

            </Modal.Body>

            <Modal.Footer>

              <Button slot="close" variant="secondary">

                Cancel

              </Button>

              <Button slot="close">Send Message</Button>

            </Modal.Footer>

          </Modal.Dialog>

        </Modal.Container>

      </Modal.Backdrop>

    </Modal>

  );

}



Add thess fields below on the form instead of current field don't change anything else.

Company Name, Industry/Category, Website URL

Location, Employee Count Range

Company Logo (image upload)

Short Description



Please note:

here you should use Select from hero ui for Category/Industry field.

and use  "TextArea" for short description.



Follow this for Select input:

import {Label, ListBox, Select} from "@heroui/react";



export function Default() {

  return (

    <Select className="w-[256px]" placeholder="Select one">

      <Label>State</Label>

      <Select.Trigger>

        <Select.Value />

        <Select.Indicator />

      </Select.Trigger>

      <Select.Popover>

        <ListBox>

          <ListBox.Item id="florida" textValue="Florida">

            Florida

            <ListBox.ItemIndicator />

          </ListBox.Item>

          <ListBox.Item id="delaware" textValue="Delaware">

            Delaware

            <ListBox.ItemIndicator />

          </ListBox.Item>

          <ListBox.Item id="california" textValue="California">

            California

            <ListBox.ItemIndicator />

          </ListBox.Item>

          <ListBox.Item id="texas" textValue="Texas">

            Texas

            <ListBox.ItemIndicator />

          </ListBox.Item>

          <ListBox.Item id="new-york" textValue="New York">

            New York

            <ListBox.ItemIndicator />

          </ListBox.Item>

          <ListBox.Item id="washington" textValue="Washington">

            Washington

            <ListBox.ItemIndicator />

          </ListBox.Item>

        </ListBox>

      </Select.Popover>

    </Select>

  );

}
```